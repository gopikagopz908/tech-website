import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";




export default function InternshipProgramsPage() {

  const navigate = useNavigate();

useEffect(() => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "instant",
  });
}, []);
const internships = [
  {
    title: "College Internships",
    image: "/i1.svg",
    description:
      "Designed in collaboration with institutions to provide students with structured, curriculum-aligned practical training."},
  {
    title: "Skill Development Internships",
    image: "/i2.svg",
    description:
      "Gain hands-on industry experience through structured internship programs designed to build practical skills and career readiness."},
  {
    title: "Final Year Project Internships",
    image: "/i3.svg",
    description:
      "Focused support for academic projects with real-world implementation, mentorship, and technical guidance."},
  {
    title: "Industry Exposure Internships",
    image: "/i4.svg",
    description:
      "Experience real work environments and understand industry processes."},
];
  return (
    <section className="min-h-screen bg-black text-white overflow-hidden relative px-6 py-16 md:px-20">
      {/* Background Glow */}
      <div className="absolute top-20 right-32 w-72 h-72 bg-fuchsia-600/30 blur-[120px] rounded-full" />
      <div className="absolute bottom-10 left-10 w-60 h-60 bg-purple-700/20 blur-[120px] rounded-full" />

      {/* Heading */}
      <div className="text-center relative z-10">
<h1
  className="
    text-center
    font-['Roboto']
    text-[36px] sm:text-[60px]
    font-bold
    leading-[48px] sm:leading-[75px]
    bg-gradient-to-r
    from-[#C27AFF]
    to-[#F6339A]
    bg-clip-text
    text-transparent
  "
>
  Internship Programs
</h1>

<p
  className="
    mt-4
    px-4
    text-center
    font-['Roboto']
    text-[16px] sm:text-[18px]
    font-normal
    leading-[24px] sm:leading-[29.25px]
    text-[#D1D5DC]
  "
>
  Flexible Internship Opportunities for Every Stage of Learning
</p>
      </div>
<h2
  className="
    absolute
    left-1/2 sm:left-[75px]
    -translate-x-1/2 sm:translate-x-0
    top-[180px] sm:top-[274px]
    w-full sm:w-auto
    px-4 sm:px-0
    text-center
    font-['Roboto']
    text-[20px] sm:text-[26px]
    font-semibold
    leading-[29.25px]
    text-[#994BFF]
  "
>
  Industry-Ready Internships
</h2>
<p
  className="
    absolute
    left-1/2 sm:left-[75px]
    -translate-x-1/2 sm:translate-x-0
    top-[220px] sm:top-[320px]
    w-[90%] sm:max-w-2xl
    px-4 sm:px-0
    text-center sm:text-left
    font-['Roboto']
    text-[14px] sm:text-[16px]
    font-normal
    leading-normal
    text-white
  "
>
  Mentric offers structured internship programs designed for students and
  freshers seeking practical exposure, complete academic requirements, and
  build industry-ready skills.
</p>



      {/* Content Section */}
      <div className="relative z-10 mt-34 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div>


<div
  className="
    grid
    grid-cols-1
    md:grid-cols-2
    gap-x-10
    gap-y-4
    mt-8
  "
>
  {[
    "Hands-On Practical Skills",
    "Job-Ready Skill Building",
    "Real-World Project Experience",
    "Practical Industry Exposure",
    "Industry-Level Skill Development",
    "Technical Skill Development",
  ].map((item, index) => (
    <div key={index} className="flex items-start gap-3">
      <span className="text-fuchsia-500 text-[18px]">•</span>

      <span
        className="
          whitespace-nowrap
          text-white
          font-['Roboto']
          text-[18px]
          font-semibold
          leading-[24px]
        "
      >
        {item}
      </span>
    </div>
  ))}
</div>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center lg:justify-end">
          {/* Glow */}
          <div className="absolute w-64 h-74 bg-fuchsia-600/40 blur-[120px] rounded-full " />

          <img
            src="/intern.png"
            alt="Internship program"
            className="relative z-10 w-[380px] object-contain drop-shadow-[0_0_50px_rgba(217,70,239,0.5)]"
          />
        </div>
      </div>

      {/* Cards */}
<div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-18 place-items-center">  {internships.map((item, index) => (
    <div
      key={index}
      className="
        flex
        w-[300px]
        h-[260px]
        flex-col
        items-start
        gap-[10px]
        rounded-[20px]
        bg-gradient-to-b
        from-[#8606E0]
        to-[#561C7F]
        px-[20px]
        pt-[19px]
        pb-[33px]
      "
    >
      {/* Icon */}
   <div
  className="
    relative
    z-10
    flex
    h-12
    w-12
    min-h-12
    min-w-12
    items-center
    justify-center
    rounded-full
    bg-white
    shadow-lg
    shrink-0
  "
>        <img
          src={item.image}
          alt={item.title}
          className="w-7 h-7 object-contain"
        />
      </div>

      {/* Title */}
     <h3
  className="
    mt-4
    min-h-[56px]
    text-[22px]
    font-medium
    leading-[29.25px]
    text-white
  "
>
  {item.title}
</h3>

      {/* Description */}
        <p
        className="
          font-['Roboto']
          text-[16px]
            w-full
    min-h-[84px]
          font-light
          leading-[21px]
          text-white
          
        "
      >
        {item.description}
      </p>
    </div>
  ))}
</div>

   
      <div className="relative z-10 mt-12 flex justify-center">
  <Link
    to="/internships"
    className="
      flex
      h-[46px]
      w-[174px]
      items-center
      justify-center
      gap-[10px]
      rounded-[20px]
      bg-white
      px-[5px]
      py-[8px]
      text-center
      font-['Roboto']
      text-[18px]
      font-normal
      leading-[29.25px]
      text-[#9810FA]
      transition-all
      duration-300
      hover:scale-105
      hover:shadow-[0_0_30px_rgba(255,255,255,0.35)]
    "
  >
    View More
  </Link>
</div>
    </section>
  );
}
