import React, { useRef, useEffect } from "react";

export default function ScrollVelocity({
  texts = ["Beautiful", "Animated", "Text", "Component"],
  velocity = 50, // pixels per second
  className = "",
}) {
  const containerRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (!scrollRef.current || !containerRef.current) return;

    // Create the content spans
    const textElements = texts
      .map(
        (text, index) =>
          `<span key="${index}" style="display: inline-block; margin-right: 4rem; white-space: nowrap;">${text}</span>`
      )
      .join("");

    // Duplicate content for seamless looping
    scrollRef.current.innerHTML = textElements + textElements;

    let position = 0;
    let animationId;
    let lastTimestamp = null;

    const containerWidth = containerRef.current.offsetWidth;
    const contentWidth = scrollRef.current.scrollWidth / 2;

    function animate(timestamp) {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const delta = (timestamp - lastTimestamp) / 1000; // seconds
      lastTimestamp = timestamp;

      // Move by velocity * delta seconds (pixels per second * seconds)
      position -= velocity * delta;

      if (Math.abs(position) >= contentWidth) {
        position += contentWidth;
      }

      if (scrollRef.current) {
        scrollRef.current.style.transform = `translate3d(${position}px, 0, 0)`;
      }

      animationId = requestAnimationFrame(animate);
    }

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [texts, velocity]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full overflow-hidden select-none flex items-center py-8 mt-20 ${className}`}
      style={{
        direction: "ltr",
        unicodeBidi: "bidi-override",
      }}
    >
      <div
        ref={scrollRef}
        className="flex whitespace-nowrap text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight"
        style={{
          fontFamily: "system-ui, -apple-system, sans-serif",
          background:
            "linear-gradient(90deg, #15803d 0%, #22c55e 25%, #4ade80 50%, #86efac 75%, #bbf7d0 85%, #6ee7b7 90%, #16a34a 95%, #15803d 100%)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          color: "transparent",
          backgroundSize: "200% 100%",
          animation: "shimmer 3s ease-in-out infinite",
          willChange: "transform",
          direction: "ltr",
          textAlign: "left",
          font: "sans",
          fontWeight: "bold",
        }}
      />

      <style>
        {`
          @keyframes shimmer {
            0%, 100% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
          }
        `}
      </style>
    </div>
  );
}
