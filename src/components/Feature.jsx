import React, { useState } from "react";
import mm from "../assets/8.54mm.svg";
import ip54 from "../assets/IP54.svg";
import dust from "../assets/dust.svg";
import waterResistant from "../assets/waterResistant.svg";

export default function Feature() {
  const [step, setStep] = useState(0);
  const images = [
    { src: ip54, alt: "IP54 rating" },
    { src: dust, alt: "Dust resistant" },
    { src: waterResistant, alt: "Water Resistant" },
    { src: mm, alt: "8.54mm screen" },
  ];

  const handleClick = () => {
    setStep((prevStep) => (prevStep + 1) % images.length);
  };

  return (
    <div className="flex flex-col px-32 items-center text-[#161410]">
      <div className="flex text-[#161410] pt-32">
        <p className="font-markot font-medium text-5xl">
          Built for Life’s Unexpected Moments
        </p>
        <p className="font-markot text-base text-grey/grey/3">
          A80's built to handle the challenges of an active lifestyle, whether
          you’re caught in a rain or out in a dusty environment.
        </p>
      </div>
      <div className="relative flex flex-col items-center" onClick={handleClick}>
        
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className={` transition-all duration-500 ease-in-out ${
              step === index ? "opacity-100 scale-100 z-1000" : "opacity-0 scale-50 z-0"
            }`}
          />
        ))}
      </div>
    </div>
  );
}