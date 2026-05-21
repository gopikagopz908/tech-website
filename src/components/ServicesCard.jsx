"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

export function ServiceCard({
  title = "Card Title",
  description = "This is a reusable 3D card component.",
  image = "",
}) {
  return (
<CardContainer className="inter-var !py-0 items-start">
      <CardBody
        className="
          relative
          group/card
          w-[378px]
          h-[300px]
          rounded-[20px]
          border
          border-white/10
          bg-[#0B1120]
          p-6
          text-gray-500
          backdrop-blur-xl
          overflow-hidden
          shadow-[0_0_40px_rgba(168,85,247,0.12)]
          transition-all
          duration-500
          hover:shadow-[0_0_60px_rgba(217,70,239,0.25)]
        "
      >
        {/* Top Glow */}
        <div className="absolute top-0 left-1/2 h-24 w-40 -translate-x-1/2 bg-fuchsia-500/20 blur-3xl opacity-0 transition-all duration-500 group-hover/card:opacity-100" />

        {/* Title */}
        <CardItem
          translateZ="50"
          className="text-[24px] font-semibold text-white"
        >
          {title}
        </CardItem>

        {/* Description */}
       

        {/* Image */}
        <CardItem
          translateZ="100"
          rotateX={10}
          rotateZ={-3}
          className="mt-6"
        >
          <img
            src={image}
            alt={title}
            className="
              w-[320px]
              h-[100px]
              rounded-[3px]
              object-cover
              mx-auto
              transition-all
              duration-500
              group-hover/card:scale-[1.03]
              group-hover/card:shadow-[0_0_30px_rgba(217,70,239,0.3)]
            "
          />
        </CardItem>
         <CardItem
          as="p"
          translateZ="60"
          className="
            mt-3
            text-[14px]
            leading-[22px]
            text-gray-400
            max-w-[320px]
          "
        >
          {description}
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}