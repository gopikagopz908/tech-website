"use client";

import React from "react";
import { motion } from "framer-motion";
import ThreeDCard from "./ThreeDCard";
import StatsCard from "./StatsCard";
import CountCard from "./CountCard";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 },
  },
};


const AboutusCards = () => {
  return (
    <div className="relative w-full overflow-hidden text-white">

      {/* 🔥 Background */}
<div className="absolute inset-0 bg-[url('/aboutus.png')] bg-cover bg-center bg-no-repeat" />

      {/* Gradient Glow Left */}
      <div className="absolute top-10 left-0 w-72 h-72 bg-purple-600 opacity-30 blur-[120px] rounded-full" />

      {/* Gradient Glow Right */}
      <div className="absolute bottom-10 right-0 w-72 h-72 bg-pink-600 opacity-30 blur-[120px] rounded-full" />

      {/* Content */}
      <div className="relative px-6 md:px-16 py-16 flex flex-col gap-20">

        {/* Header */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          className="text-center max-w-4xl mx-auto"
        >
    <h1 className="text-[60px] leading-[75px] font-bold font-['Roboto'] text-center bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
  About Us
</h1>

<p className="mt-2 text-[#D1D5DC] text-[18px] leading-[29.25px] font-normal font-['Roboto'] text-center">
  At Mentric Group, our endeavor is to provide holistic training and technology solutions – fundamental and
  advanced technical skills, soft skills, job-oriented and upskilling training programs – in various sectors. We work
  with organizations in assessing and improving various management processes using state-of-the-art
  technology, resulting in efficient utilization of resources.
</p>
        </motion.div>

        {/* Row 1 */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Image */}
          <motion.div variants={fadeUp}>
            <ThreeDCard
              image="/ad.jpeg"
              alt="Mentric Technologies"
            />
          </motion.div>

          {/* Content */}
          <motion.div variants={fadeUp} className="space-y-5">
<h2 className="text-[40px] leading-[40px] font-bold font-['Roboto'] text-[#C27AFF]">
  Mentric Technologies
</h2>

<p className="text-[#D1D5DC] text-[18px] leading-[28px] font-normal font-['Roboto']">
Mentric Technologies builds scalable, high-impact digital 
solutions—empowering modern 
businesses through innovation, agility, and advanced technology.
</p>

            {/* Stats */}
            <div className="flex gap-4 mt-6">
              <CountCard value="50+" label="Trusted Clients" />
              <CountCard value="120+" label="Projects Done" />
             <CountCard value="10+" label="Years Experience" />
            </div>
          </motion.div>
        </div>

        {/* Row 2 */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Text */}
          <motion.div variants={fadeUp} className="space-y-5">
            <h2 className="text-3xl font-semibold text-purple-400">
              Mentric Training & Consulting
            </h2>

            <p className="text-gray-400">
              We empower developers and technologists through hands-on training,
              mentorship, and real-world project experience.
            </p>

            {/* Stats */}

         <div className="flex gap-4 mt-6">
              <CountCard value="50+" label="Trusted Clients" />
              <CountCard value="120+" label="Projects Done" />
             <CountCard value="10+" label="Years Experience" />
            </div>


            {/* Button */}
            <button className="mt-4 px-5 py-2 border border-purple-500 rounded-md text-sm hover:bg-purple-600 transition">
              Mentric Training & Consulting
            </button>
          </motion.div>

          {/* Image */}
          <motion.div variants={fadeUp}>
            <ThreeDCard
              image="/training.jpg"
              alt="Training"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutusCards;