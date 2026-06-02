"use client";

import { Helmet } from "react-helmet-async";
import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "ASCEND",
    tagline: "Empowering Growth Through Smart Technology",
    description:"Competency Assessment & Development Platform.Assess capabilities, identify skill gaps, and drive continuous growth through personalized recommendations, competency mapping, and performance insights. Powered by AI-driven analytics, ASCEND supports effective learning, development, and workforce excellence.",
    link: "https://ascend.mentrictraining.com/",
    image: "/asnd.png",

  },
  {
    id: 2,
    name: "Explenet",
    tagline: "Shaping the Future of Learning and Development",
    description:"Experiential Learning & Practical Skills Development Platform.Enable hands-on learning through practical labs, real-world projects, simulations, assessments, and interactive learning experiences. Explenet bridges the gap between theory and practice, helping learners build industry-ready skills and competencies",
    image: "/g.svg",
    link: "https://explenet.com/",
  },
];

export default function ProductsPage() {
  return (
    <>
<Helmet>
  <title>Our Products | Mentric Technologies</title>

  <meta
    name="description"
    content="Explore Mentric Technologies products including ASCEND and Explenet. Innovative digital platforms designed to enhance learning, teacher development, experiential education, and organizational growth."
  />

  <meta
    name="keywords"
    content="ASCEND, Explenet, Mentric Technologies, experiential learning platform, teacher development platform, LMS, EdTech solutions, digital learning"
  />

  <meta
    property="og:title"
    content="Our Products | Mentric Technologies"
  />

  <meta
    property="og:description"
    content="Discover ASCEND and Explenet, innovative platforms from Mentric Technologies that empower educators, learners, institutions, and organizations."
  />

  <meta property="og:type" content="website" />

 
</Helmet>
    <section className="min-h-screen bg-[#050816] text-white px-6 py-10 mt-12">
      {/* Heading */}
      <div className="text-center mb-20">
        <h1
          className="
    text-center
    font-['Roboto']
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
          Our Products
        </h1>
        <p
          className="
    mx-auto
    mt-5
    max-w-2xl
    text-center
    font-['Roboto']
    text-[18px]
    font-normal
    leading-[29.25px]
    text-[#D1D5DC]
  "
        >
          Empowering your business through technology, design, and innovation.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 place-items-center max-w-6xl mx-auto">
        {products.map((product) => (
          <div
            key={product.id}
            className="group relative w-[400px] h-[400px] rounded-[30px] overflow-hidden border border-white/10 bg-gradient-to-b from-[#1a0033] via-[#0c1025] to-[#060816] shadow-[0_0_40px_rgba(168,85,247,0.25)] transition-all duration-500 hover:shadow-[0_0_80px_rgba(217,70,239,0.45)] hover:-translate-y-2"
          >
            <div className="absolute inset-[-20px] opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-br from-purple-600/40 via-fuchsia-500/30 to-pink-500/40 blur-[70px]" />

            <div className="absolute top-[-70px] left-1/2 -translate-x-1/2 w-[260px] h-[140px] bg-purple-500 blur-[90px] opacity-70 group-hover:opacity-100 transition-all duration-500" />

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[220px] h-[100px] bg-fuchsia-500 blur-[70px] opacity-10 group-hover:opacity-80 transition-all duration-500" />
            <div className="absolute inset-0 rounded-[30px] border border-purple-400/40 group-hover:border-fuchsia-400/80 transition-all duration-500 shadow-[0_0_40px_rgba(217,70,239,0.25)] group-hover:shadow-[0_0_70px_rgba(217,70,239,0.45)]" />

            <div className="relative z-10 flex flex-col h-full p-8">
              <h2
                className="w-[135px]   h-[39px] text-[32px]           font-['Roboto']
font-semibold leading-[100%] tracking-[0%] "
              >
                {product.name}
              </h2>

              <p className="w-[350px] h-[119px] text-[16px] font-['Roboto'] leading-[100%] tracking-[0%] text-gray-400 mt-8">
                {product.description}
              </p>

              <a
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 flex justify-center"
              >
                <button
                  className="
    flex
    w-[242px]
    h-[44px]
    items-center
    justify-center
    gap-[10px]
    rounded-[30px]
    p-[10px]
    text-white
    text-[16px]
    font-medium
    font-['Roboto']
    bg-gradient-to-r
    from-[rgba(107,33,168,0.20)]
    to-[rgba(152,16,250,0.20)]
    backdrop-blur-md
    border
    border-white/10
    transition-all
    duration-300
    hover:scale-[1.02]
  "
                >
                  Learn more
                </button>
              </a>

              <div className="flex-1" />

              <div className="flex items-center justify-center gap-3 mt-10">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-8 object-contain transition-all duration-500 group-hover:scale-110"
                    loading="lazy"

                />

                <h3 className="text-white text-[24px] font-semibold tracking-wide">
                  {product.name}.
                </h3>
              </div>
            </div>

            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.15),transparent_60%)]" />
          </div>
        ))}
      </div>
    </section>
    </>
  );
}
