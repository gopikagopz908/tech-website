"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { Crown } from "lucide-react";

const TitleCard = ({ image, alt, count, label, icon, hoverDescription }) => {
  return (
    <CardContainer className="inter-var ">
      {" "}
      <CardBody className="bg-gradient-to-t from-[#111] to-transparent border border-gray-700 w-[360px] sm:w-[300px] p-0 rounded-2xl overflow-hidden group/card relative">
        {/* Image */}
        <CardItem translateZ="100" className="w-full">
          <img
            src={image}
            alt={alt || "Card Image"}
            className="h-[440px] w-full object-cover rounded-2xl group-hover/card:shadow-2xl transition-all duration-300"
          />
        </CardItem>

        {/* Stats Section */}
        {/* Bottom Blur Overlay */}
        <div className="absolute bottom-0 left-0 w-full h-[90px] bg-black/80 backdrop-blur-md z-10" />

        {/* Stats Section */}
        <div className="absolute bottom-4 left-4 z-20">
          {" "}
          <h3 className="text-3xl font-semibold text-white">{count}</h3>
          <p className="text-sm font-bold text-white">{label}</p>
        </div>

        {/* Icon */}
        {/* Icon */}
        <div className="absolute bottom-4 right-4 text-white bg-[#222] p-2 rounded-full z-20">
          {" "}
          {icon || <Crown className="w-5 h-5 text-pink-500" />}
        </div>

        {/* Hover Description with Framer Motion */}
        <AnimatePresence>
          {hoverDescription && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileHover={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute inset-0 bg-pink-500/20 backdrop-blur-sm flex items-center justify-center text-white text-center p-4 z-20 rounded-2xl group-hover/card:flex"
            >
              <p className="text-sm sm:text-base">{hoverDescription}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </CardBody>
    </CardContainer>
  );
};

export default TitleCard;
