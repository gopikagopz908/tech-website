export default function InternshipProgramsPage() {
  const internships = [
    {
      title: "College Internships",
      icon: "🎓",
      description:
        "Designed for students who want practical exposure and real-world project experience while continuing academics.",
    },
    {
      title: "Skill Development Internships",
      icon: "🚀",
      description:
        "Focused on upgrading technical and professional skills through hands-on assignments and mentorship.",
    },
    {
      title: "Final Year Project Internships",
      icon: "📄",
      description:
        "Industry-oriented project internships for final-year students to build impactful academic projects.",
    },
    {
      title: "Industry Exposure Internships",
      icon: "💼",
      description:
        "Gain real-time industry exposure and learn workflows, collaboration, and enterprise practices.",
    },
  ];

  return (
    <section className="min-h-screen bg-black text-white overflow-hidden relative px-6 py-16 md:px-20">
      {/* Background Glow */}
      <div className="absolute top-20 right-32 w-72 h-72 bg-fuchsia-600/30 blur-[120px] rounded-full" />
      <div className="absolute bottom-10 left-10 w-60 h-60 bg-purple-700/20 blur-[120px] rounded-full" />

      {/* Heading */}
      <div className="text-center relative z-10">
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-fuchsia-500 to-purple-500 bg-clip-text text-transparent">
          Internship Programs
        </h1>

        <p className="text-gray-400 mt-4 text-sm md:text-base">
          Flexible Internship Opportunities for Every Stage of Learning
        </p>
      </div>

      {/* Content Section */}
      <div className="relative z-10 mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-fuchsia-500 text-2xl font-semibold mb-6">
            Industry-Ready Internships
          </h2>

          <p className="text-gray-300 leading-8 text-[15px] max-w-2xl">
            Mentric offers structured internship programs designed for students and freshers seeking practical exposure, complete academic requirements, and build industry-ready skills.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 mt-8 text-gray-200 text-[15px]">
            <div className="flex items-start gap-3">
              <span className="text-fuchsia-500">•</span>
              <span>Hands-On Practical Skills</span>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-fuchsia-500">•</span>
              <span>Job-Ready Skill Building</span>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-fuchsia-500">•</span>
              <span>Real-World Project Experience</span>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-fuchsia-500">•</span>
              <span>Practical Industry Exposure</span>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-fuchsia-500">•</span>
              <span>Industry-Level Skill Development</span>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-fuchsia-500">•</span>
              <span>Technical Skill Enhancement</span>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center lg:justify-end">
          {/* Glow */}
          <div className="absolute w-64 h-74 bg-fuchsia-600/40 blur-[120px] rounded-full " />

          <img
            src="/intern.png"
            alt="Internship"
            className="relative z-10 w-[380px] object-contain drop-shadow-[0_0_50px_rgba(217,70,239,0.5)]"
          />
        </div>
      </div>

      {/* Cards */}
      <div className="relative z-10 mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {internships.map((item, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-[18px] border border-fuchsia-500/20 bg-gradient-to-b from-[#2b003d] via-[#1a0128] to-[#110018] p-6 shadow-[0_0_40px_rgba(217,70,239,0.15)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_50px_rgba(217,70,239,0.35)]"
          >
            {/* Top Glow */}
            <div className="absolute -top-10 left-1/2 h-24 w-32 -translate-x-1/2 rounded-full bg-fuchsia-500/30 blur-3xl" />

            {/* Icon */}
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white text-xl shadow-lg">
              {item.icon}
            </div>

            {/* Title */}
            <h3 className="relative z-10 mt-6 text-xl font-semibold leading-snug text-white">
              {item.title}
            </h3>

            {/* Description */}
            <p className="relative z-10 mt-4 text-sm leading-7 text-gray-300">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="relative z-10 mt-12 flex justify-center">
        <button className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.35)]">
          View More
        </button>
      </div>
    </section>
  );
}
