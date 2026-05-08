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
    image: "/explenet.png",
    link: "https://explenet.mentrictraining.com/",
  },
];

export default function ProductsPage() {
  return (
    <section className="min-h-screen bg-[#050816] text-white px-6 py-10">
      {/* Heading */}
      <div className="text-center mb-20">
        <h1 className="text-4xl md:text-6xl font-bold">
          Our{" "}
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Products
          </span>
        </h1>

        <p className="text-gray-400 mt-5 text-lg max-w-2xl mx-auto">
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
      w-[242px]
      h-[44px]
      rounded-[30px]
      p-[10px]
      gap-[10px]
      bg-gradient-to-r
      from-purple-700
      to-fuchsia-700
      hover:scale-[1.02]
      hover:shadow-[0_0_25px_rgba(217,70,239,0.5)]
      transition-all
      duration-300
      text-white
      text-[16px]
      font-medium
      flex
      items-center
      justify-center
    "
  >
    Learn more
  </button>
</a>

              {/* Spacer */}
              <div className="flex-1" />

              {/* Logo */}
              <div className="flex items-center justify-center mt-10">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-14 object-contain transition-all duration-500 group-hover:scale-110"
                />
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