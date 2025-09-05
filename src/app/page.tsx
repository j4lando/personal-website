
import React from "react";
import Image from "next/image";
import SwipeableSection from "./_components/SwipeableSection";
import PublicationSection from "./_components/PublicationSection";
import { loadSwipeableConfig } from "../lib/configLoader";

const headerColor = "rgba(243,205,143,1)";
const iconColor = "rgba(243,205,143,1)";
const canvasColor = "rgba(253,252,224,1)";

// Load configurations
const projectsConfig = loadSwipeableConfig('projects');
const outdoorsConfig = loadSwipeableConfig('outdoors');

export default function Home() {
  return (
    <div
      id="top"
      className="h-screen w-screen overflow-y-scroll snap-y snap-mandatory"
      style={{ scrollSnapType: "y mandatory" }}
    >
      {/* First Section: Image + Header + Icons */}
      <section
        className="h-screen w-full relative flex items-center justify-center snap-start"
        style={{ background: headerColor }}
      >
        <Image
          src="./images/a_storm2.png"
          alt="A Storm by Georgia O'Keeffe"
          fill
          className="object-cover z-0"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
          <h1
            className="text-[7vw] font-bold text-center leading-none"
            style={{ color: iconColor }}
          >Josh Lando</h1>
          <div className="flex gap-8 mt-2">
            <a href="https://github.com/j4lando" target="_blank" rel="noopener noreferrer">
              <svg width="40" height="40" viewBox="0 0 24 24" fill={iconColor} xmlns="http://www.w3.org/2000/svg">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 013.003-.404c1.018.005 2.045.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.371.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
            </a>
            <a href="https://linkedin.com/in/j4lando" target="_blank" rel="noopener noreferrer">
              <svg width="40" height="40" viewBox="0 0 24 24" fill={iconColor} xmlns="http://www.w3.org/2000/svg">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.156 1.459-2.156 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.841-1.563 3.039 0 3.601 2.001 3.601 4.601v5.595z"/>
              </svg>
            </a>
            <a href="./Josh_Lando_CV.pdf" target="_blank" rel="noopener noreferrer">
              <svg width="40" height="40" viewBox="0 0 24 24" fill={iconColor} xmlns="http://www.w3.org/2000/svg">
                <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-7V9h5.5L13 3.5z"/>
              </svg>
            </a>
          </div>
          <div className="absolute bottom-2 right-4 text-xs text-gray-500 z-20">
            <a
              href="https://commons.wikimedia.org/wiki/File:A_Storm_DT1394.jpg"
              title="Georgia O'Keeffe, Public domain, via Wikimedia Commons"
              target="_blank"
              rel="noopener noreferrer"
            >
              Georgia O&apos;Keeffe, Public domain, via Wikimedia Commons
            </a>
          </div>
        </div>
      </section>

      {/* Second Section: Hello Page */}
      <section
        id="hello"
        className="h-screen w-full snap-start flex items-center justify-center px-8"
        style={{ background: canvasColor }}
      >
        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side: Cowboy hat photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-80 h-80 rounded-full overflow-hidden shadow-2xl">
              <Image
                src="./images/cowboy_hat.jpeg"
                alt="Josh Lando"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          
          {/* Right side: Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h2 className="text-6xl lg:text-7xl font-bold" style={{ color: headerColor }}>
                Hey I&apos;m Josh
              </h2>
              <a 
                href="mailto:j4lando@icloud.com"
                className="inline-block bg-black text-white px-8 py-4 rounded-full text-xl font-semibold hover:bg-gray-800 transition-colors duration-300 shadow-lg"
              >
                want to chat
              </a>
            </div>
            
            <div className="space-y-6 text-lg leading-relaxed text-gray-700">
              <p>
                A math student at the University of Washington, Josh Lando is actively engaged in leading efforts to create green, low income housing and send a satellite to space. Passionate about sustainability, Josh is a member of Huskies for Equitable Sustainability and committed to contributing to the University of Washington&apos;s goal of carbon neutrality by 2050. He is actively seeking opportunities to explore and help the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Third Section: Projects */}
      <section
        id="projects"
        className="h-screen w-full snap-start"
      >
        <SwipeableSection
          title={projectsConfig.title}
          backgroundColor={projectsConfig.backgroundColor}
          textColor={projectsConfig.textColor}
          items={projectsConfig.items}
        />
      </section>

      {/* Fourth Section: Outdoors */}
      <section
        id="outdoors"
        className="h-screen w-full snap-start"
      >
        <SwipeableSection
          title={outdoorsConfig.title}
          backgroundColor={outdoorsConfig.backgroundColor}
          textColor={outdoorsConfig.textColor}
          items={outdoorsConfig.items}
        />
      </section>
      <section id="publications" className="h-screen w-full snap-start">
  <PublicationSection />
      </section>
    </div>
  );
}
