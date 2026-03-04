import React, { useRef, useEffect } from 'react';
import p5 from 'p5';

const NeonGrassHero = () => {
    const renderRef = useRef();

    useEffect(() => {
        const sketch = (p) => {
            const density = 22; // Slightly tighter grid for better glow effect
            const lineLength = 18;

            p.setup = () => {
                p.createCanvas(p.windowWidth, 600);
                p.strokeCap(p.ROUND);
            };

            p.draw = () => {
                p.clear();

                for (let x = density; x < p.width; x += density) {
                    for (let y = density; y < p.height; y += density) {

                        const d = p.dist(p.mouseX, p.mouseY, x, y);
                        const influenceRadius = 350; // Total area of effect

                        // 1. Angle Calculation
                        let angle = p.PI / 2; // Default: pointing down/up
                        if (d < influenceRadius) {
                            angle = p.atan2(p.mouseY - y, p.mouseX - x);
                        }

                        // 2. Advanced Gradient Logic
                        let c;
                        const pink = p.color(250, 25, 133);       // #FA1985
                        const green = p.color(25, 250, 105);      // #19F969
                        const invisible = p.color(25, 250, 105, 0); // Green but Alpha 0

                        if (d < 120) {
                            // Inner Zone: Pink to Green
                            const lerpInner = p.map(d, 0, 120, 0, 1);
                            c = p.lerpColor(pink, green, lerpInner);
                            p.strokeWeight(2.5);
                        } else if (d < influenceRadius) {
                            // Outer Zone: Green to Alpha 0
                            const lerpOuter = p.map(d, 120, influenceRadius, 0, 1);
                            c = p.lerpColor(green, invisible, lerpOuter);
                            p.strokeWeight(p.map(d, 120, influenceRadius, 2.5, 0.5));
                        } else {
                            // Outside Influence: Don't draw or draw ultra-faint
                            continue; // This boosts performance by not rendering distant lines
                        }

                        // 3. Render
                        p.push();
                        p.translate(x, y);
                        p.rotate(angle);

                        p.stroke(c);
                        // Slight length pulse based on distance
                        const dynamicLen = p.map(p.min(d, influenceRadius), 0, influenceRadius, lineLength * 1.4, lineLength * 0.5);
                        p.line(0, 0, dynamicLen, 0);
                        p.pop();
                    }
                }
            };

            p.windowResized = () => {
                p.resizeCanvas(p.windowWidth, 600);
            };
        };

        const p5Instance = new p5(sketch, renderRef.current);
        return () => p5Instance.remove();
    }, []);

    return (
        <div
            ref={renderRef}
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '600px',
                zIndex: 0,
                pointerEvents: 'none'
            }}
        />
    );
};

export default NeonGrassHero;