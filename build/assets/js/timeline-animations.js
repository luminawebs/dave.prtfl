/**
 * Timeline Animation Controller
 * Handles scroll-based animations for timeline elements
 */

(function() {
    'use strict';

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeTimelineAnimations);
    } else {
        initializeTimelineAnimations();
    }

    function initializeTimelineAnimations() {
        // Create intersection observer for timeline items
        const timelineObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-in');
                    }
                });
            },
            {
                threshold: 0.2,
                rootMargin: '0px 0px -50px 0px'
            }
        );

        // Observe all timeline items
        const timelineItems = document.querySelectorAll('.timeline-item');
        timelineItems.forEach((item, index) => {
            // Add staggered animation delay
            item.style.transitionDelay = `${index * 0.1}s`;
            timelineObserver.observe(item);
        });

        // Special handling for service details timeline
        const serviceTimelineItems = document.querySelectorAll('.service-details .timeline-item');
        serviceTimelineItems.forEach((item, index) => {
            item.style.transitionDelay = `${index * 0.15}s`;
            timelineObserver.observe(item);
        });

        // Add hover effects for timeline dots
        addTimelineDotEffects();

        // Add click handlers for interactive timeline items
        addTimelineClickHandlers();
    }

    function addTimelineDotEffects() {
        const timelineDots = document.querySelectorAll('.timeline-dot, .timeline-marker');
        
        timelineDots.forEach(dot => {
            // Add ripple effect on click
            dot.addEventListener('click', function(e) {
                const ripple = document.createElement('span');
                const rect = this.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.cssText = `
                    position: absolute;
                    width: ${size}px;
                    height: ${size}px;
                    left: ${x}px;
                    top: ${y}px;
                    background: rgba(255, 255, 255, 0.3);
                    border-radius: 50%;
                    transform: scale(0);
                    animation: ripple 0.6s ease-out;
                    pointer-events: none;
                    z-index: 1;
                `;
                
                this.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
        });

        // Add CSS animation for ripple effect
        if (!document.getElementById('timeline-ripple-styles')) {
            const style = document.createElement('style');
            style.id = 'timeline-ripple-styles';
            style.textContent = `
                @keyframes ripple {
                    to {
                        transform: scale(2);
                        opacity: 0;
                    }
                }
                
                .timeline-dot, .timeline-marker {
                    position: relative;
                    overflow: hidden;
                }
                
                /* Enhanced pulse animation for timeline dots */
                .timeline-dot::before {
                    animation: timeline-pulse 3s infinite;
                }
                
                @keyframes timeline-pulse {
                    0%, 70%, 100% {
                        transform: translate(-50%, -50%) scale(1);
                        opacity: 0;
                    }
                    35% {
                        transform: translate(-50%, -50%) scale(1.5);
                        opacity: 0.7;
                    }
                }
                
                /* Smooth transitions for all timeline elements */
                .timeline-item * {
                    transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
                }
                
                /* Enhanced hover effects */
                .timeline-item:hover .timeline-content {
                    transform: translateY(-8px) scale(1.01);
                }
                
                .service-details .timeline-item:hover .timeline-content {
                    transform: translateX(12px) scale(1.01);
                }
            `;
            document.head.appendChild(style);
        }
    }

    function addTimelineClickHandlers() {
        const timelineItems = document.querySelectorAll('.timeline-item');
        
        timelineItems.forEach(item => {
            const content = item.querySelector('.timeline-content');
            if (content) {
                content.addEventListener('click', function(e) {
                    // Add a subtle click feedback
                    this.style.transform = 'scale(0.98)';
                    setTimeout(() => {
                        this.style.transform = '';
                    }, 150);
                });
            }
        });
    }

    // Utility function to add smooth scrolling to timeline anchors
    function initializeTimelineNavigation() {
        const timelineLinks = document.querySelectorAll('a[href*="#timeline"]');
        
        timelineLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    // Initialize navigation if needed
    initializeTimelineNavigation();

})();
