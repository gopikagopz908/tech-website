

import * as motion from "motion/react-client";
import { useNavigate } from "react-router-dom";

const cards = [
  {
    title: "Our Team",
    description:
      "Designing intuitive products that people love to interact with.",
    image: "./r7.png",
    link: "/team",
  },
  {
    title: "BLOG",
    description:
      "Explore how we solve real challenges and deliver measurable results through our case studies.",
    image: "./r5.png",
    link: "/blogs",
  },
  {
    title: "Case Studies",
    description:
      "See how we turn real challenges into measurable success for businesses like yours.",
    image: "./r6.png",
    link: "/caseStudies",
  },
];

export default function ScrollImageCards() {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden bg-black py-24 px-4">
      {/* Background Glow */}
      <div className="absolute left-0 bottom-0 w-[500px] h-[300px] bg-fuchsia-600 blur-[140px] opacity-40 rounded-full" />
      <div className="absolute right-0 bottom-0 w-[500px] h-[300px] bg-purple-700 blur-[140px] opacity-40 rounded-full" />

      {/* Heading */}
      <div className="text-center relative z-10 mb-20">
        <h1
       className="
    text-4xl
    md:text-[60px]
    font-bold
    leading-tight
    md:leading-[75px]
    bg-gradient-to-r
    from-[#C27AFF]
    to-[#F6339A]
    bg-clip-text
    text-transparent
  "
>
          Our Resources
        </h1>

        <p
          className="
            mt-4
            max-w-2xl
            mx-auto
            text-[18px]
            leading-[29px]
            text-[#D1D5DC]
          "
        >
          Empowering your business through technology, design, and marketing.
        </p>
      </div>

      {/* Cards */}
      <div className="relative z-10 flex flex-wrap justify-center gap-10">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="
  group
  relative
  flex
  flex-col
  w-[308px]
  h-[385px]
  rounded-[40px]
  overflow-hidden
bg-[rgba(217,217,217,0.02)]
  backdrop-blur-[20px]
  border
  border-[rgba(255,255,255,0.08)]
  transition-all
  duration-500
  ease-out
  transform-gpu
  hover:scale-[1.08]
  hover:-translate-y-4
  hover:z-20
  hover:shadow-[0_20px_80px_rgba(217,70,239,0.35)]
"
          >
            {/* Glow */}
<div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-purple-500/20 to-fuchsia-500/10 opacity-0 group-hover:opacity-100 transition duration-500" />
            {/* Image */}
            <div className="p-4">
              <img
                src={card.image}
                alt={card.title}
                className="
                  h-[150px]
                  w-full
                  object-cover
                  rounded-[24px]
                "
              />
            </div>

            {/* Content */}
            <div className="px-6 pb-6 flex flex-col h-[calc(100%-180px)]">
              <div>
                <h2
  className="
    text-[#BBB]
    font-['Sora']
    text-[22px]
    font-normal
    leading-normal
  "
>
  {card.title}
</h2>

                <p className="text-[#D1D5DC] text-[14px] leading-[22px] mt-3">
                  {card.description}
                </p>
              </div>

              {/* Button */}
<div className="relative z-10 mt-auto flex justify-center">  <button
    type="button"

    onClick={() => navigate(card.link)}
    className="
      flex
      w-[170px]
      h-[36px]
      px-[69px]
      py-[16px]
      justify-center
      items-center
      gap-[10px]
      rounded-[40px]
      bg-[linear-gradient(90deg,rgba(217,217,217,0.36)_0%,rgba(115,115,115,0.36)_100%)]
      backdrop-blur-[10px]
      transition-all
      duration-300
      hover:scale-105
    "
  >
    <span
      className="
        text-white
        font-['Sora']
        text-[18px]
        font-normal
        leading-normal
        whitespace-nowrap
      "
    >
      View More
    </span>
  </button>
</div>
            </div>

            {/* Shine */}
<div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition duration-700 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_60%)]" />          </motion.div>
        ))}
      </div>
    </section>
  );
}