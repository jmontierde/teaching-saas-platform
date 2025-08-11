"use client";
import React from "react";

const Hero = () => {
  return (
    <div className="relative w-full lg:w-3/4 rounded-lg h-[400px] lg:h-[600px] flex flex-col justify-center items-center text-center overflow-hidden after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-gradient-to-b after:from-black after:via-[#0D0D0D] after:to-[#0D0D0D] after:opacity-70">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
        aria-hidden="true"
      >
        <source
          src="https://cdn-front.freepik.com/landings/ai/voice-generator/hero/video.webm"
          type="video/webm"
        />
        Your browser does not support the video tag.
      </video>

      <div className="relative z-10 px-4">
        <h1 className="font-bold text-3xl lg:text-5xl  text-white  ">
          Learn Smarter with your <br /> AI Companion
        </h1>
        <h2 className="text-base lg:text-lg text-[#e2dfdf] mt-4">
          An interactive voice-powered tutor that makes learning fun, engaging,
          and personalized.
        </h2>
      </div>
    </div>
  );
};

export default Hero;
