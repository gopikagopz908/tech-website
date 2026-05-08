"use client";

import React from "react";
import { motion } from "framer-motion";


export default function ProductCard() {
  return (
    <div className="min-h-screen bg-[#070816] flex items-center justify-center p-6 overflow-hidden">
      
    
      <div className="absolute w-[280px] h-[280px] bg-fuchsia-600 blur-[120px] opacity-40 rounded-full top-[20%]" />

      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative group"
      >
        {/* Outer Glow */}
        <div className="absolute inset-0 rounded-[32px] bg-gradient-to-b from-fuchsia-500/40 via-purple-500/10 to-transparent blur-2xl opacity-70 group-hover:opacity-100 transition duration-500" />

        {/* Card */}
        <div className="relative w-[340px] rounded-[32px] border border-white/10 bg-gradient-to-b from-[#2b0050] via-[#130027] to-[#090818] p-6 backdrop-blur-xl overflow-hidden shadow-[0_0_50px_rgba(168,85,247,0.25)]">

          {/* Top Light */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-44 h-16 bg-white/30 blur-2xl rounded-full opacity-70" />

          {/* Border Glow */}
          <div className="absolute inset-[1px] rounded-[31px] border border-white/10 pointer-events-none" />

          {/* Content */}
          <div className="relative z-10">
            <h2 className="text-4xl font-bold text-white tracking-wide">
              ASCEND
            </h2>

            <p className="mt-5 text-sm leading-7 text-gray-300">
              Empowering Growth Through Smart Technology Solutions,
              intuitive platforms solving real-world education challenges,
              empowering teachers, learners, and institutions to grow.
            </p>

            {/* Button */}
            <button className="mt-8 w-full rounded-full bg-gradient-to-r from-purple-700 to-fuchsia-700 py-3 text-white font-medium shadow-lg hover:scale-[1.02] transition duration-300">
              Learn more
            </button>

            {/* Bottom Logo */}
            <div className="mt-10 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-fuchsia-500 to-violet-500 flex items-center justify-center text-white font-bold">
                A
              </div>

              <span className="text-2xl font-semibold tracking-wide text-white">
                ASCEND.
              </span>
            </div>
          </div>

          {/* Bottom Glow */}
          <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-56 h-32 bg-fuchsia-600/50 blur-[80px] rounded-full" />
        </div>
      </motion.div>
    </div>
  );
}