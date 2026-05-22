"use client";
import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import Waves from "../../components/Waves.js/Waves/Waves";
import NavMenu from "./NavMenu";
import FBXViewer from "./FBXViewer";

const AboutUs = () => {
  return (
    <div className="relative h-full md:min-h-screen  bg-gradient-to-br from-black to-gray-900    text-white">
      {/* Waves Background */}
      <div className="absolute inset-0 overflow-hidden z-0">
  <Waves
    backgroundColor="rgba(255, 255, 255, 0.05)"
    waveSpeedX={0.02}
    waveSpeedY={0.01}
    waveAmpX={40}
    waveAmpY={20}
    friction={0.9}
    tension={0.01}
    maxCursorMove={120}
    xGap={10}
    yGap={36}
  />
</div>


      {/* Header */}
      <header className="absolute top-0 left-0 w-full z-20 py-4">
<div className="flex flex-col sm:flex-row items-center sm:items-center justify-center sm:justify-between px-4 sm:px-6 md:px-8 lg:px-16 max-w-screen-xl mx-auto">          <img
            src="/log.png"
            alt="Logo"
            width={140}
            height={50}
  className="object-contain w-auto max-w-[100px] sm:max-w-[140px] block mx-auto"
         />

          {/* Navigation */}
          <NavMenu />
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col-reverse   lg:flex-row items-center justify-between gap-12 md:gap-20   px-4 sm:px-6 md:px-12 xl:px-20 xl:py-20 md:py-32 max-w-screen-xl mx-auto">
        {/* Background Effects */}
        <motion.div
          className="absolute left-0 top-0 w-full md:w-[600px] h-[600px] z-0"
          style={{
            background: "radial-gradient(circle at top left, #6b21a8, transparent 70%)",
            clipPath: "circle(60% at 30% 40%)",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1.5 }}
        />


        {/* Text Content */}
        <motion.div
          className="w-full max-w-2xl space-y-6 text-center md:text-left z-10"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="h-[100px] md:h-32">
            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-5xl font-bold leading-tight">
            Make your move{" "}
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                <Typewriter
                  words={["to progress.", "toward aspiration.", "to the virtual."]}
                  loop={0}
                  cursor
                  cursorStyle="_"
                  typeSpeed={80}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </span>
            </h1>
          </div>


<div className="max-w-[520px] ">
  <p className="font-inter text-[20px] font-normal leading-[31px] text-white">
    We craft high-performance digital solutions that solve<br/>
    real problems—helping your business{" "}
    <span className="font-semibold text-[#FF00C7]">
      grow faster
    </span>{" "}
    and{" "}
    <span className="font-semibold text-[#FF00C7]">
      smarter.
    </span>
  </p>
<div className="mb-2 sm:mt-14"> <button
  onClick={() => {
    document.getElementById("footer")?.scrollIntoView({
      behavior: "smooth",
    });
  }}
  className="
    w-[242px]
    h-[60px]
    rounded-[30px]
    bg-[linear-gradient(90deg,rgba(107,33,168,0.20)_0%,rgba(152,16,250,0.20)_100%)]
    border border-[#7B2CBF]
    text-white
    text-[18px]
    font-medium
    backdrop-blur-md
    transition-all
    duration-300
    hover:scale-[1.02]
  "
>
  Talk to Us
</button>
</div>
</div>
        </motion.div>

        {/* 3D Model Viewer */}
        <motion.div
          className="w-full max-w-[280px] h-[280px] sm:max-w-[320px] sm:h-[320px] md:max-w-[440px] md:h-[440px] xl:max-w-[500px] xl:h-[500px] z-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
        >
          <FBXViewer />
        </motion.div>
      </section>
    </div>
  );
};

export default AboutUs;
