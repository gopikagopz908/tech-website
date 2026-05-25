import React from "react";
import TitleCard from "./TitleCard";

const cardData = [
  {
    image:
      "cl.png",
    alt: "Happy Clients",
    count: "50+",
    label: "Happy Clients",
    hoverDescription:
      "We’ve successfully delivered top-notch services to more than 50 clients globally.",
  },
  {
    image:
      "/dd2.png",
    alt: "Deep Domain Expertise",
    count: "4+ Domains",
    label: "Deep Domain Expertise",
    hoverDescription:
      " With proven experience across industries like EdTech, HealthTech, and Enterprise SaaS, we understand the nuances of each domain. This enables us to design and build tailored digital products that align with your industry needs, ensuring faster delivery, better user experience, and business impact.",
  },
  {
    image:
      "/st3.png",
    alt: "Continuous Support & Maintenance",
    count: "24/7",
    label: "ongoing support and maintenace",
    hoverDescription:
      " Our dedicated support team offers proactive monitoring, quick resolution, and 24/7 assistance to ensure your systems remain robust, up-to-date, and fully optimized—anytime you need us.",
  }
];

const Whychooseus = () => {
  return (
    <div>
      <div className="text-center mt-12 z-10 relative   ">
    <h1
  
  className="
    text-center
    font-['Roboto']
    text-4xl
    md:text-[60px]
    font-bold
    leading-tight
    md:leading-[75px]
    text-white
  "
>
  Why{" "}
  <span
    className="
      bg-gradient-to-r
      from-[#AD46FF]
      to-[#F6339A]
      bg-clip-text
      text-transparent
    "
  >
    Mentric Stands Out
  </span>
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
    leading-[28px]
    text-[#99A1AF]
  "
>
  Empowering your business through technology, design, and marketing.
</p>
      </div>

<div className="flex flex-wrap justify-center gap-2 sm:gap-0   md:gap-15 px-2">
        {cardData.map((card, index) => (
          <TitleCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default Whychooseus;
