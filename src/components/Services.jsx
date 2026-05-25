"use client";

import React from "react";
import { ServiceCard } from "./ServicesCard";

const servicesLeft = [
  {
    title: "Web & App Development",
    description:
      "Turning ideas into stunning, high-performing websites that work as hard as you do..",
    image: "/r4.png",
  },
  {
    title: "Hardware Software Integration Services",
    description:
      "Software to connect, monitor, and control hardware devices in real time.",
    image: "/r1.png",
  },
];

const servicesRight = [
  {
    title: "Education & Skill Development Solutions",
    description:
      "Creating smart learning solutions that inspire, educate, and drive real progress.",
    image: "/r2.png",
  },
  {
    title: "Digital Marketing",
    description:
      "Data-driven marketing to grow your brand and reach the right audience.",
    image: "/r3.png",
  },
];

const ConnectorLeftTop = () => (
  <svg
    className="absolute right-[110px] top-[-120px]"
    width="320"
    height="320"
    viewBox="0 0 320 320"
    fill="none"
  >
    <path
      d="M320 160 C240 160, 180 50, 0 50"
      stroke="url(#leftTopGradient)"
      strokeWidth="1.5"
      fill="none"
    />

    {/* Nodes */}
    <circle cx="320" cy="160" r="4" fill="#d946ef" />
    <circle cx="0" cy="50" r="4" fill="#ffffff" />

    <circle cx="250" cy="145" r="2" fill="#c084fc" />
    <circle cx="210" cy="120" r="2" fill="#c084fc" />
    <circle cx="170" cy="90" r="2" fill="#c084fc" />
    <circle cx="120" cy="65" r="2" fill="#c084fc" />
    <circle cx="70" cy="55" r="2" fill="#c084fc" />

    {/* Moving Dot */}
    <circle r="3" fill="#f5d0fe">
      <animateMotion
        dur="5s"
        repeatCount="indefinite"
        path="M320 160 C240 160, 180 50, 0 50"
      />
    </circle>

    <defs>
      <linearGradient
        id="leftTopGradient"
        x1="320"
        y1="160"
        x2="0"
        y2="50"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#d946ef" />
        <stop offset="1" stopColor="#ffffff30" />
      </linearGradient>
    </defs>
  </svg>
);

const ConnectorLeftBottom = () => (
  <svg
    className="absolute right-[110px] bottom-[-120px]"
    width="320"
    height="320"
    viewBox="0 0 320 320"
    fill="none"
  >
    <path
      d="M320 160 C240 160, 180 270, 0 270"
      stroke="url(#leftBottomGradient)"
      strokeWidth="1.5"
      fill="none"
    />

    <circle cx="320" cy="160" r="4" fill="#d946ef" />
    <circle cx="0" cy="270" r="4" fill="#ffffff" />

    <circle cx="250" cy="175" r="2" fill="#c084fc" />
    <circle cx="210" cy="205" r="2" fill="#c084fc" />
    <circle cx="170" cy="230" r="2" fill="#c084fc" />
    <circle cx="120" cy="250" r="2" fill="#c084fc" />
    <circle cx="70" cy="265" r="2" fill="#c084fc" />

    <circle r="3" fill="#f5d0fe">
      <animateMotion
        dur="5s"
        repeatCount="indefinite"
        path="M320 160 C240 160, 180 270, 0 270"
      />
    </circle>

    <defs>
      <linearGradient
        id="leftBottomGradient"
        x1="320"
        y1="160"
        x2="0"
        y2="270"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#d946ef" />
        <stop offset="1" stopColor="#ffffff30" />
      </linearGradient>
    </defs>
  </svg>
);

const ConnectorRightTop = () => (
  <svg
    className="absolute left-[110px] top-[-120px]"
    width="320"
    height="320"
    viewBox="0 0 320 320"
    fill="none"
  >
    <path
      d="M0 160 C80 160, 140 50, 320 50"
      stroke="url(#rightTopGradient)"
      strokeWidth="1.5"
      fill="none"
    />

    <circle cx="0" cy="160" r="4" fill="#d946ef" />
    <circle cx="320" cy="50" r="4" fill="#ffffff" />

    <circle cx="70" cy="145" r="2" fill="#c084fc" />
    <circle cx="120" cy="120" r="2" fill="#c084fc" />
    <circle cx="170" cy="90" r="2" fill="#c084fc" />
    <circle cx="220" cy="65" r="2" fill="#c084fc" />
    <circle cx="270" cy="55" r="2" fill="#c084fc" />

    <circle r="3" fill="#f5d0fe">
      <animateMotion
        dur="5s"
        repeatCount="indefinite"
        path="M0 160 C80 160, 140 50, 320 50"
      />
    </circle>

    <defs>
      <linearGradient
        id="rightTopGradient"
        x1="0"
        y1="160"
        x2="320"
        y2="50"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#d946ef" />
        <stop offset="1" stopColor="#ffffff30" />
      </linearGradient>
    </defs>
  </svg>
);

const ConnectorRightBottom = () => (
  <svg
    className="absolute left-[110px] bottom-[-120px]"
    width="320"
    height="320"
    viewBox="0 0 320 320"
    fill="none"
  >
    <path
      d="M0 160 C80 160, 140 270, 320 270"
      stroke="url(#rightBottomGradient)"
      strokeWidth="1.5"
      fill="none"
    />

    <circle cx="0" cy="160" r="4" fill="#d946ef" />
    <circle cx="320" cy="270" r="4" fill="#ffffff" />

    <circle cx="70" cy="175" r="2" fill="#c084fc" />
    <circle cx="120" cy="205" r="2" fill="#c084fc" />
    <circle cx="170" cy="230" r="2" fill="#c084fc" />
    <circle cx="220" cy="250" r="2" fill="#c084fc" />
    <circle cx="270" cy="265" r="2" fill="#c084fc" />

    <circle r="3" fill="#f5d0fe">
      <animateMotion
        dur="5s"
        repeatCount="indefinite"
        path="M0 160 C80 160, 140 270, 320 270"
      />
    </circle>

    <defs>
      <linearGradient
        id="rightBottomGradient"
        x1="0"
        y1="160"
        x2="320"
        y2="270"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#d946ef" />
        <stop offset="1" stopColor="#ffffff30" />
      </linearGradient>
    </defs>
  </svg>
);

const Services = () => {
  return (
    <section className="relative hidden lg:flex min-h-screen items-center justify-center overflow-hidden bg-[#050816] px-20 py-24 text-white ">
      
      {/* Background Glow */}
      <div className="absolute top-[-100px] left-[-100px] h-[400px] w-[400px] rounded-full bg-purple-700/20 blur-3xl" />
      <div className="absolute bottom-[-100px] right-[-100px] h-[400px] w-[400px] rounded-full bg-fuchsia-700/20 blur-3xl" />

      <div className="relative z-10 w-full">

        {/* Title */}
        <div className="text-center mb-12">
<h1
  className="
    text-center
    font-['Roboto']
    text-[60px]
    font-bold
    leading-[75px]
    bg-gradient-to-r
    from-[#C27AFF]
    to-[#F6339A]
    bg-clip-text
    text-transparent
  "
>
  Our Services
</h1>

         <p
  className="
    mx-auto
    mt-4
    max-w-2xl
    text-center
    font-['Roboto']
    text-[18px]
    font-normal
    leading-[29.25px]
    text-[#D1D5DC]
  "
>
  Empowering your business through technology, design, and marketing.
</p>
        </div>

        {/* Layout */}
        <div className="relative flex items-center justify-between max-w-[1500px] mx-auto">

          {/* LEFT */}
          <div className="flex flex-col gap-8">
            {servicesLeft.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                image={service.image}
              />
            ))}
          </div>

          {/* CENTER */}
          <div className="relative flex items-center justify-center">

            <div className="absolute h-[180px] w-[180px] rounded-full bg-fuchsia-600/20 blur-3xl animate-pulse" />

            <ConnectorLeftTop />
            <ConnectorLeftBottom />
            <ConnectorRightTop />
            <ConnectorRightBottom />

            <div className="relative z-20 flex items-center justify-center">
              <div className="absolute inset-0 bg-fuchsia-600/40 blur-3xl scale-110" />

              <div
                className="
                  relative
                  w-[280px]
                  h-[66px]
                  bg-gradient-to-r
                  from-[#4b006e]
                  via-[#2b103f]
                  to-[#24132f]
                  border
                  border-fuchsia-400/30
                  shadow-[0_0_40px_rgba(217,70,239,0.45)]
                  flex
                  items-center
                  justify-center
                "
                style={{
                  clipPath:
                    "polygon(6% 0%, 94% 0%, 100% 50%, 94% 100%, 6% 100%, 0% 50%)",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-40" />

                <img
                  src="/Logo.png"
                  alt="logo"
                  className="relative z-10 h-12 object-contain"
                />
              </div>
            </div>
          </div>




          {/* RIGHT */}
          <div className="flex flex-col gap-8">
            {servicesRight.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                image={service.image}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;