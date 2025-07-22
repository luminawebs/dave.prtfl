import React, { useEffect, useRef, useState } from "react";

function ScrollComponent() {
  const scrollTopRef = useRef(null);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const toggleScrollTop = () => {
      setShowButton(window.scrollY > 100);
    };

    // Run on load and on scroll
    window.addEventListener("scroll", toggleScrollTop);
    toggleScrollTop();

    return () => {
      window.removeEventListener("scroll", toggleScrollTop);
    };
  }, []);

  const handleScrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Your scrollable content or main page content */}
      <div style={{ height: "1500px", padding: "2rem" }}>
        <h2>Scroll Down</h2>
        <p>...your page content...</p>
      </div>

      {/* Scroll to Top Button */}
      <button
        ref={scrollTopRef}
        onClick={handleScrollToTop}
        style={{
          position: "fixed",
          right: "20px",
          bottom: "20px",
          display: showButton ? "block" : "none",
          padding: "10px 15px",
          borderRadius: "5px",
          backgroundColor: "#000",
          color: "#fff",
          border: "none",
          cursor: "pointer",
          zIndex: 1000,
        }}
        className="scroll-top"
      >
        ↑ Top
      </button>
    </>
  );
}

export default ScrollComponent;
