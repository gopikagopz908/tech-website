



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
    <div className="relative w-full overflow-hidden text-white    " >

      {/* 🔥 Background */}
      <div className="absolute inset-0 bg-[url('/aboutus.png')] bg-cover bg-center bg-no-repeat mb-14 -ml-18" />

      {/* Gradient Glow Left */}
      <div className="absolute top-10 left-0 w-72 h-72 bg-purple-600 opacity-30 blur-[120px] rounded-full" />

      {/* Gradient Glow Right */}
      <div className="absolute bottom-10 right-0 w-72 h-72 bg-pink-600 opacity-30 blur-[120px] rounded-full" />

      {/* Content */}
      <div className="relative px-4 sm:px-6 md:px-16 py-2 flex flex-col gap-20  ">

        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          className="text-center max-w-4xl mx-auto"
        >
          <h1
            className="
              text-center
              font-['Roboto']
              text-[38px] sm:text-[60px]
              leading-[48px] sm:leading-[75px]
              font-bold
              bg-[linear-gradient(90deg,#C27AFF_0%,#F6339A_100%)]
              bg-clip-text
              text-transparent
            "
          >
            About Us
          </h1>

          <p
            className="
              mt-2
              px-2 sm:px-0
              text-center
              font-['Roboto']
              text-[15px] sm:text-[18px]
              leading-[24px] sm:leading-[29.25px]
              font-normal
              text-[#D1D5DC]
            "
          >
            At Mentric Group, our endeavor is to provide holistic training
            and technology solutions – fundamental and advanced technical
            skills, soft skills, job-oriented and upskilling training
            programs – in various sectors. We work with organizations in
            assessing and improving various management processes using
            state-of-the-art technology, resulting in efficient utilization
            of resources.
          </p>
        </motion.div>

        {/* Row 1 */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center justify-items-center md:justify-items-start">

          {/* Image */}
          <motion.div
            variants={fadeUp}
            className="flex justify-center w-full"
          >
            <ThreeDCard
              image="/ad.png"
              alt="Mentric Technologies"
            />
          </motion.div>

          {/* Content */}
          <motion.div variants={fadeUp} className="space-y-5">

   <h2
  className="
    mt-12
    sm:mt-0
    font-['Roboto']
    text-[30px] sm:text-[40px]
    leading-[34px] sm:leading-[40px]
    font-bold
    text-[#C27AFF]
    text-center md:text-left
  "
>
  Mentric Technologies
</h2>

            <p
              className="
                font-['Roboto']
                text-[16px] sm:text-[18px]
                leading-[26px] sm:leading-[28px]
                font-normal
                text-[#D1D5DC]
                text-center md:text-left
              "
            >
              Mentric Technologies builds scalable, high-impact digital
              solutions—empowering modern businesses through innovation,
              agility, and advanced technology.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-12 sm:mt-24">
              <CountCard value="50+" label="Trusted Clients" />
              <CountCard value="30+" label=" Solutions Delivered" />
              <CountCard value="10k+" label="Active Users" />
            </div>
          </motion.div>
        </div>

        {/* Row 2 */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center">

          {/* Text */}
          <motion.div variants={fadeUp} className="space-y-5">

            <h2
              className="
                font-['Roboto']
                text-[30px] sm:text-[40px]
                leading-[34px] sm:leading-[40px]
                font-bold
                text-[#C27AFF]
                text-center md:text-left
                mt-18
              "
            >
              Mentric Training & Consulting
            </h2>

            <p
              className="
                font-['Roboto']
                text-[16px] sm:text-[18px]
                leading-[26px] sm:leading-[28px]
                font-normal
                text-[#D1D5DC]
                text-center md:text-left
              "
            >
              Our consulting division is committed to empowering the next
              generation of developers, analysts, and technologists through
              intensive, hands-on training programs.
            </p>

            <p
              className="
                font-['Roboto']
                text-[15px] sm:text-[16px]
                leading-[22px] sm:leading-[24px]
                font-normal
                text-[#99A1AF]
                text-center md:text-left
              "
            >
              We offer mentorship, bootcamps, and real-world project
              experience to bridge the gap between academic learning and
              industry requirements.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center md:justify-start gap-8 mt-12">
              <CountCard value="100k+" label="Students" />
              <CountCard value="500+" label="Training Programs" />
              <CountCard value="10+" label="Expert Trainers" />
            </div>

            {/* Button */}
<div className="flex flex-col sm:flex-row items-center md:items-start gap-4 mt-12">
              <p
                className="
                  font-['Roboto']
                  text-[16px] sm:text-[18px]
                  leading-[24px] sm:leading-[28px]
                  font-normal
                  text-white
                  text-center
                 mb-0 sm:mb-24
                "
              >
                Take a Look on
              </p>

             <button
           
                 onClick={() => {
    window.open("https://mentrictraining.com/", "_blank", "noopener,noreferrer");
                }}
                className="
                  h-[44px]
                  px-4 sm:px-6
                  rounded-[10px]
                  bg-white
                  border
                  border-[#9810FA]
                  flex
                  items-center
                  justify-center
                "
              >
                <span
                  className="
                    font-['Roboto']
                    text-[16px] sm:text-[18px]
                    leading-[28px]
                    font-medium
                    underline
                    bg-[linear-gradient(90deg,#9810FA_0%,#CD87FF_100%)]
                    bg-clip-text
                    text-transparent
                    
                  "
                >
                  Mentric Training & Consulting
                </span>
              </button>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            variants={fadeUp}
            className="flex justify-center w-full"
          >
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