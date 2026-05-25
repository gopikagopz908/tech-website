"use client";

import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "ASCEND",
    tagline: "Empowering Growth Through Smart Technology",
    description:
      "Empowering Growth Through Smart Technology Scalable, intuitive platforms solving real-world education challenges, empowering teachers, learners, and institutions to grow.",
    image: "/asend.png",
    link: "https://ascend.mentrictraining.com/",
  },
  {
    id: 2,
    name: "Explenet",
    tagline: "Shaping the Future of Learning and Development",
    description:
      "Shaping the Future of Learning and Development A smart platform for engaging students and enhancing remote learning experiences.",
    image: "/g.svg",
    link: "https://explenet.com/",
  },
];

export default function ProductsPage() {
  return (
    <section className="min-h-screen bg-[#050816] text-white px-6 py-10">
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
            {/* Hover Gradient Overlay */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-br from-purple-600/20 via-fuchsia-500/10 to-pink-500/20 blur-2xl" />

            {/* Animated Glow Top */}
            <div className="absolute top-[-40px] left-1/2 -translate-x-1/2 w-[180px] h-[80px] bg-purple-500 blur-3xl opacity-50 group-hover:opacity-90 transition-all duration-500" />

            {/* Animated Glow Bottom */}
            <div className="absolute bottom-[-50px] left-1/2 -translate-x-1/2 w-[180px] h-[80px] bg-fuchsia-500 blur-3xl opacity-50 group-hover:opacity-90 transition-all duration-500" />

            {/* Border Glow */}
            <div className="absolute inset-0 rounded-[30px] border border-purple-500/20 group-hover:border-fuchsia-400/40 transition-all duration-500" />

            {/* Content */}
            <div className="relative z-10 flex flex-col h-full p-8">
              {/* Title */}
    <h2 className="w-[135px] h-[39px] text-[32px] font-semibold leading-[100%] tracking-[0%] ">
  {product.name}
</h2>

  {/* Description */}
<p className="w-[350px] h-[119px] text-[16px] font-normal leading-[100%] tracking-[0%] text-gray-400 mt-8">
  {product.description}
</p>

              {/* Button */}
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

              {/* Spacer */}
              <div className="flex-1" />

              {/* Logo */}
              {/* Logo + Name */}
<div className="flex items-center justify-center gap-3 mt-10">
  <img
    src={product.image}
    alt={product.name}
    className="h-8 object-contain transition-all duration-500 group-hover:scale-110"
  />

  <h3 className="text-white text-[24px] font-semibold tracking-wide">
    {product.name}.
  </h3>
</div>
            </div>

            {/* Extra Mouse Hover Shine */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.15),transparent_60%)]" />
          </div>
        ))}
      </div>
    </section>
  );
}