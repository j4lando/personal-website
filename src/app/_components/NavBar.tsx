
"use client";
// import Link from "next/link";
import React, { useState } from "react";

const navBg = "rgba(243,205,143,1)";
// Easily edit these for oval size
const ovalWidth = 900;
const ovalHeight = 70;
const padding = 23;

export default function NavBar() {
  const [open, setOpen] = useState(false);
  // Animation: 0 for horizontal, 1 for vertical
  const lineAnim = open ? 1 : 0;
  return (
    <>
      {/* Hamburger menu button, fixed top right */}
      <button
        className="fixed z-[101] flex items-center justify-center transition-transform duration-700"
        style={{
          background: navBg,
          borderRadius: "50%",
          width: ovalHeight,
          height: ovalHeight,
          border: "none",
          boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
          top: padding,
          right: padding,
          transform: `rotate(${open ? 90 : 0}deg)`
        }}
        aria-label="Open navigation menu"
        onClick={() => setOpen(!open)}
      >
        <svg
          width={ovalHeight}
          height={ovalHeight}
          viewBox={`0 0 ${ovalHeight} ${ovalHeight}`}
        >
          <circle
            cx={ovalHeight / 2}
            cy={ovalHeight / 2}
            r={ovalHeight / 2}
            fill={navBg}
          />
          {[0.3, 0.5, 0.7].map((y, i) => {
            // Animate lines from horizontal to vertical
            const x = lineAnim ? ovalHeight * (y) - ovalHeight * 0.07 : ovalHeight * 0.25;
            const yPos = lineAnim ? ovalHeight * 0.25 : ovalHeight * y - ovalHeight * 0.07;
            const width = lineAnim ? ovalHeight * 0.14 : ovalHeight * 0.5;
            const height = lineAnim ? ovalHeight * 0.5 : ovalHeight * 0.14;
            return (
              <rect
                key={i}
                x={x}
                y={yPos}
                width={width}
                height={height}
                rx={ovalHeight * 0.07}
                fill="#111"
              />
            );
          })}
        </svg>
      </button>

      {/* Animated oval pop-out menu, positioned relative to the circle */}
      <div
        className={`fixed z-[100] flex items-center justify-center transition-all duration-300 ${open ? "opacity-100 scale-100" : "opacity-0 scale-0"}`}
        style={{
          top: padding,
          right: padding + ovalHeight + 12, // 12px gap from circle
          width: ovalWidth,
          height: ovalHeight,
          background: navBg,
          borderRadius: ovalHeight / 2,
          boxShadow: open ? "0 2px 16px rgba(0,0,0,0.10)" : "none",
        }}
      >
        {open && (
          <div className="flex w-full h-full items-center justify-center px-8">
            <div className="flex justify-evenly items-center w-full">
              <a href="#top" className="font-bold text-base hover:underline transition-all duration-300 ease-out hover:scale-105 px-2" onClick={() => setOpen(false)}>Home</a>
              <a href="#projects" className="font-bold text-base hover:underline transition-all duration-300 ease-out hover:scale-105 px-2" onClick={() => setOpen(false)}>Projects</a>
              <a href="#outdoors" className="font-bold text-base hover:underline transition-all duration-300 ease-out hover:scale-105 px-2" onClick={() => setOpen(false)}>Outdoors</a>
              <a href="mailto:j4lando@icloud.com" target="_blank" rel="noopener noreferrer" className="font-bold text-base hover:underline transition-all duration-300 ease-out hover:scale-105 px-2" onClick={() => setOpen(false)}>Contact</a>
              <a href="https://linkedin.com/in/j4lando" target="_blank" rel="noopener noreferrer" className="font-bold text-base hover:underline transition-all duration-300 ease-out hover:scale-105 px-2" onClick={() => setOpen(false)}>LinkedIn</a>
              <a href="https://github.com/j4lando" target="_blank" rel="noopener noreferrer" className="font-bold text-base hover:underline transition-all duration-300 ease-out hover:scale-105 px-2" onClick={() => setOpen(false)}>GitHub</a>
              <a href="/Josh_Lando_CV.pdf" target="_blank" rel="noopener noreferrer" className="font-bold text-base hover:underline transition-all duration-300 ease-out hover:scale-105 px-2" onClick={() => setOpen(false)}>Resume</a>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
