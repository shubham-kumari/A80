import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import smartphone from "../assets/smartphone.svg";
import shape from "../assets/shape.svg";
import shape1 from "../assets/shape1.svg";
import shape3 from "../assets/shap3.svg";
import phone from "../assets/phone.svg";
import video from "../assets/bg.mp4";
import background from "../assets/bg.svg";
import bunchPhone from "../assets/bunchPhone.svg";
import ip54 from "../assets/ip54.webm";
import blackPhone from "../assets/blackPhone.png";
export default function Hero2() {
  const [isInView, setIsInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.3 }
    );
    const element = document.querySelector(".relative.overflow-hidden");
    if (element) observer.observe(element);
    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);
  return (
    <>
      {" "}
      <div
        className="px-32 py-20 flex flex-col gap-6"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="flex gap-6">
          <div className="flex gap-10 items-center px-12 pt-5 border-2 border-[linear-gradient(to_right,#FFBD6D,#FF8657)] rounded-xl bg-[#161410] bg-blend-luminosity bg-opacity-75 backdrop-blur-sm">
            <div className="inline-flex flex-col gap-4">
              <img src={smartphone} className="w-6" alt="A smartphone icon" />
              <div className="text-white font-markot gap-2">
                <p className="text-xl font-bold">120Hz Display Refresh Rate</p>
                <p className="text-base font-medium opacity-70">
                  6.67” Edge-to-edge screen <br /> 4096 Levels of Brightness
                </p>
              </div>
            </div>
            <div className="relative">
              <img src={shape} alt="A Square Shape" className="w-full" />
              <img
                src={phone}
                alt="A phone"
                className="absolute bottom-0 right-5"
              />
            </div>
          </div>
          <div className="flex-grow flex items-center justify-center border-2 border-[linear-gradient(to_right,#FFBD6D,#FF8657)] rounded-xl bg-[#161410] bg-blend-luminosity bg-opacity-75 backdrop-blur-sm overflow-hidden">
            <video
              className="w-[284px] h-full object-cover"
              src={ip54}
              autoPlay
              loop
              muted
            ></video>
          </div>
        </div>
        <div className="flex gap-6">
          <div className="flex flex-col gap-6 items-center px-24 pt-5 border-2 border-[linear-gradient(to_right,#FFBD6D,#FF8657)] rounded-xl bg-[#161410] bg-blend-luminosity bg-opacity-75 backdrop-blur-sm">
            <p className="text-white font-markot text-xl font-bold">
              120Hz Display Refresh Rate
            </p>
            <div className="relative overflow-hidden">
              <img src={shape1} alt="A Square Shape" className="w-full" />
              <motion.img
                src={bunchPhone}
                alt="A phone"
                className="absolute bottom-[-0px] animated-image"
                initial={{ transform: "translateY(0%)" }}
                animate={isInView ? { transform: "translateY(50%)" } : {}}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
            </div>
          </div>
          <div className="flex items-start justify-center pl-12 border-2 border-[linear-gradient(to_right,#FFBD6D,#FF8657)] rounded-xl bg-[#161410] bg-opacity-75 backdrop-blur-sm">
            <div className="flex items-center gap-6">
              <div className="flex flex-col gap-4">
                <img src={smartphone} className="w-6" alt="A smartphone icon" />
                <div className="text-white font-markot gap-2">
                  <p className="text-xl font-bold">50MP Camera</p>
                  <p className="text-base font-medium opacity-70">
                    Super HDR Camera <br /> Unique Ring Light <br /> Automatic
                    Scene Classification
                  </p>
                </div>
              </div>
              <div className="relative flex flex-grow">
                <img src={shape3} alt="A Square Shape" className="w-full" />
                <img
                  src={blackPhone}
                  alt="A phone"
                  className="absolute bottom-0 right-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
