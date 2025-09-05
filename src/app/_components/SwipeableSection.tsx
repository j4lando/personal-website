"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

interface SwipeableItem {
  id: string;
  title: string;
  description: string;
  images: string[];
  imageTitles?: string[];
  icon: string;
  dates?: string | string[] | null;
}

interface SwipeableSectionProps {
  title: string;
  items: SwipeableItem[];
  backgroundColor: string;
  textColor: string;
}

export default function SwipeableSection({ items, backgroundColor, textColor }: SwipeableSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imageIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const nextItem = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
    setCurrentImageIndex(0);
  };

  const prevItem = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
    setCurrentImageIndex(0);
  };

  const goToItem = (index: number) => {
    setCurrentIndex(index);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % currentItem.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + currentItem.images.length) % currentItem.images.length);
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  const currentItem = items[currentIndex];

  // Auto-rotate images every 4 seconds
  useEffect(() => {
    if (currentItem.images.length > 1) {
      imageIntervalRef.current = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % currentItem.images.length);
      }, 4000);
    }

    return () => {
      if (imageIntervalRef.current) {
        clearInterval(imageIntervalRef.current);
      }
    };
  }, [currentItem.images.length, currentIndex]);

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center px-4" style={{ background: backgroundColor }}>
      <div className="w-full h-full flex flex-col">
        {/* Main Content Area - Takes up most of the page */}
        <div className="relative flex-1 flex items-center justify-center">
          {/* Navigation Arrows for Items */}
          <button
            onClick={prevItem}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/10 hover:bg-white/25 rounded-full p-4 transition-all duration-500 ease-out hover:scale-110 hover:shadow-lg backdrop-blur-sm"
            style={{ color: textColor }}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="transition-transform duration-300 ease-out">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
            </svg>
          </button>

          <button
            onClick={nextItem}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/10 hover:bg-white/25 rounded-full p-4 transition-all duration-500 ease-out hover:scale-110 hover:shadow-lg backdrop-blur-sm"
            style={{ color: textColor }}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="transition-transform duration-300 ease-out">
              <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/>
            </svg>
          </button>

          {/* Content - No background separation, full integration */}
          <div className="w-full max-w-7xl mx-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">
              {/* Left side: Image Gallery */}
              <div className="space-y-8">
                {/* Main Image with Auto-rotation */}
                <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl group">
                  <Image
                    src={currentItem.images[currentImageIndex] || "/nextjs-github-pages/images/placeholder.jpg"}
                    alt={currentItem.title}
                    fill
                    className="object-cover transition-all duration-700 ease-out"
                    priority
                  />
                  
                  {/* Image Title Overlay */}
                  {currentItem.imageTitles && currentItem.imageTitles[currentImageIndex] && (
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-white text-sm font-medium text-center">
                        {currentItem.imageTitles[currentImageIndex]}
                      </p>
                    </div>
                  )}
                  
                  {/* Image Navigation Arrows */}
                  {currentItem.images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/20 hover:bg-black/40 rounded-full p-3 transition-all duration-300 ease-out opacity-0 group-hover:opacity-100 hover:scale-110"
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
                        </svg>
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/20 hover:bg-black/40 rounded-full p-3 transition-all duration-300 ease-out opacity-0 group-hover:opacity-100 hover:scale-110"
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                          <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/>
                        </svg>
                      </button>
                    </>
                  )}
                </div>

                {/* Image thumbnails with manual selection */}
                {currentItem.images.length > 1 && (
                  <div className="flex gap-4 justify-center">
                    {currentItem.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => goToImage(index)}
                        className={`relative w-20 h-20 rounded-xl overflow-hidden transition-all duration-500 ease-out group ${
                          index === currentImageIndex 
                            ? "ring-2 ring-white scale-105 shadow-lg" 
                            : "opacity-60 hover:opacity-100 hover:scale-105"
                        }`}
                      >
                        <Image
                          src={image}
                          alt={`${currentItem.title} ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                        {/* Thumbnail Title Tooltip */}
                        {currentItem.imageTitles && currentItem.imageTitles[index] && (
                          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                            <p className="text-white text-xs font-medium text-center px-1 leading-tight">
                              {currentItem.imageTitles[index]}
                            </p>
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Right side: Text Content */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-6xl font-bold transition-all duration-700 ease-out" style={{ color: textColor }}>
                    {currentItem.title}
                  </h3>
                  {currentItem.dates && (
                    <div className="transition-all duration-700 ease-out delay-75">
                      {Array.isArray(currentItem.dates) ? (
                        <div className="flex flex-wrap gap-3">
                          {currentItem.dates.map((date, index) => (
                            <span
                              key={index}
                              className="px-8 py-2 rounded-full text-sm font-medium whitespace-nowrap"
                              style={{ 
                                backgroundColor: textColor, 
                                color: backgroundColor,
                                opacity: 0.9
                              }}
                            >
                              {date}
                            </span>
                          ))}
                        </div>
                      ) : (
                        <span
                          className="inline-block px-8 py-2 rounded-full text-sm font-medium whitespace-nowrap"
                          style={{ 
                            backgroundColor: textColor, 
                            color: backgroundColor,
                            opacity: 0.9
                          }}
                        >
                          {currentItem.dates}
                        </span>
                      )}
                    </div>
                  )}
                </div>
                <p className="text-xl leading-relaxed transition-all duration-700 ease-out delay-100" style={{ color: textColor, opacity: 0.9 }}>
                  {currentItem.description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Dots Indicator for Items */}
        <div className="flex justify-center pb-8 space-x-3">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => goToItem(index)}
              className={`w-3 h-3 rounded-full transition-all duration-500 ease-out ${
                index === currentIndex 
                  ? "bg-white scale-125 shadow-lg" 
                  : "bg-white/40 hover:bg-white/70 hover:scale-110"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
