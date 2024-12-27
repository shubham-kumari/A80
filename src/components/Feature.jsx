import React, { useState, useEffect, useRef } from "react";
import mm from "../assets/8.54mm.svg";
import ip54 from "../assets/IP54.svg";
import dust from "../assets/dust.svg";
import waterResistant from "../assets/waterResistant.svg";

export default function Feature() {
  const [step, setStep] = useState(0);
  const featureRef = useRef(null);

  const images = [
    { src: ip54, alt: "IP54 rating" },
    { src: dust, alt: "Dust resistant" },
    { src: waterResistant, alt: "Water Resistant" },
    { src: mm, alt: "8.54mm screen" },
  ];

  const handleScroll = (event) => {
    const delta = event.deltaY; // Amount scrolled
    if (delta > 0) {
      // Scrolling down
      setStep((prevStep) => (prevStep + 1) % images.length);
    } else {
      // Scrolling up
      setStep((prevStep) => (prevStep - 1 + images.length) % images.length);
    }
  };

  useEffect(() => {
    const featureElement = featureRef.current;

    if (featureElement) {
      featureElement.addEventListener("wheel", handleScroll); // Attach wheel event for smooth scrolling
    }

    // Cleanup on unmount
    return () => {
      if (featureElement) {
        featureElement.removeEventListener("wheel", handleScroll);
      }
    };
  }, []);

  return (
    <div className="flex flex-col px-32 items-center text-[#161410]">
      <div className="flex flex-col text-center pt-32">
        <p className="font-markot font-medium text-5xl">
          Built for Life’s Unexpected Moments
        </p>
        <p className="font-markot text-base text-gray-500 mt-4">
          A80's built to handle the challenges of an active lifestyle, whether
          you’re caught in a rain or out in a dusty environment.
        </p>
      </div>

      {/* Image div that captures scroll */}
      <div
        ref={featureRef}
        className="relative w-full mt-16"
        style={{
          height: "400px", // Adjust the height as needed
          overflow: "hidden", // Hide scrollbar
          position: "relative",
          cursor: "grab",
        }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className={`absolute inset-0 transition-opacity transform duration-700 ease-out 
              ${step === index ? "opacity-100 scale-100 z-10" : "opacity-0 scale-75 z-0"}`}
          />
        ))}
      </div>
    </div>
  );
}
