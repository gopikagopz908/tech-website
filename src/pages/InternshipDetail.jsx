import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import NavMenu from "@/components/NavMenu";
import { useEffect } from "react";

export default function InternshipPrograms() {

useEffect(() => {
  window.scrollTo(0, 0);
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
        "Designed in collaboration with institutions to provide students with structured, curriculum-aligned practical training."
    },
    {
      title: "Final Year Project Internships",
      image: "/i3.svg",
      description:
        "Focused support for academic projects with real-world implementation, mentorship, and technical guidance."},
    {
      title: "Industry Exposure Internships",
      image: "/i4.svg",
      description:
        "Experience real work environments and understand industry processes."
    },
  ];
  return (
    <>
<section className="min-h-screen bg-black text-white overflow-hidden relative px-4 sm:px-6 md:px-10 lg:px-20 py-10 md:py-16">        {/* Background Glow */}
        <div className="absolute top-20 right-32 w-72 h-72 bg-fuchsia-600/30 blur-[120px] rounded-full" />
        <div className="absolute bottom-10 left-10 w-60 h-60 bg-purple-700/20 blur-[120px] rounded-full" />
  <div className="absolute top-0 left-0 w-full z-50">
  <Navbar />
</div>
        {/* Heading */}
        <div className="text-center relative z-10">
<h1
  className="
    text-center
    mt-24
    font-['Roboto']
    text-3xl
    sm:text-4xl
    md:text-5xl
    lg:text-6xl
    font-bold
    leading-tight
    bg-gradient-to-r
    from-[#C27AFF]
    to-[#F6339A]
    bg-clip-text
    text-transparent
  "
>
  Professional Internship Experience
</h1>
        </div>
<div className="md:mt-18">
  <h2 className="text-xl sm:text-2xl md:text-[26px] font-semibold text-[#994BFF]">
    Learn. Build. Grow.
  </h2>

  <p className="mt-4 max-w-2xl text-sm sm:text-base text-white leading-relaxed">
    Mentric offers structured internship programs designed for students at
    different
    <br /> stages—helping them gain practical experience, complete
    academic requirements, and build industry-ready skills.
  </p>
</div>


<div className="relative z-10 -mt-4 md:-mt-6 grid grid-cols-1 lg:grid-cols-2 gap-0 md:gap-2 items-center">
  {/* Left Content */}
  <div className="lg:pr-0">
    <div
      className="
        grid
        grid-cols-1
        md:grid-cols-2
        gap-x-12
        gap-y-3
mt-8 lg:mt-[-10px]"    >
      {[
        "Hands-On Practical Skills",
        "Job-Ready Skill Building",
        "Real-World Project Experience",
        "Practical Industry Exposure",
        "Industry-Level Skill Development",
        "Technical Skill Development",
      ].map((item, index) => (
        <div key={index} className="flex items-start gap-3">
          <span className="text-fuchsia-500 text-[18px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
            >
              <path
                d="M7.5 0L9.52568 5.47432L15 7.5L9.52568 9.52568L7.5 15L5.47432 9.52568L0 7.5L5.47432 5.47432L7.5 0Z"
                fill="url(#paint0_linear_423_3952)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_423_3952"
                  x1="7.5"
                  y1="0"
                  x2="7.5"
                  y2="15"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FF00CC" />
                  <stop offset="0.8" stopColor="white" />
                  <stop offset="0.932692" stopColor="#8900FF" />
                </linearGradient>
              </defs>
            </svg>
          </span>

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

    {/* Cards Heading */}
<div className="flex justify-center">
  <h2
    className="
      mt-10 md:mt-14
      text-center
      text-white
      font-['Roboto']
      text-2xl md:text-[32px]
      font-medium
      leading-normal
      whitespace-nowrap
      lg:ml-120
    "
  >
    Types of Internships
  </h2>
</div>
  </div>
 

  {/* Right Image */}
  <div className="relative flex justify-center lg:justify-center ml-32">
    {/* Glow */}
    <div className="absolute w-120 h-84 bg-fuchsia-600/40 blur-[120px] rounded-full" />

   <img
  src="/intern.png"
  alt="Internship"
  className="relative z-10 w-full max-w-[2800px] object-contain"
/>
  </div>

</div>

        {/* Heading */}

        {/* Cards */}
        {/* Cards Heading */}
       
<div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 place-items-center">
  {internships.map((item, index) => (
    <div
      key={index}
      className="
  flex
  w-full
  max-w-[300px]
  h-[260px]
  flex-col
  justify-start
  items-start
  gap-[10px]
  rounded-[20px]
  overflow-hidden
  bg-gradient-to-b
  from-[#8606E0]
  to-[#561C7F]
  px-[20px]
  pt-[19px]
  pb-[33px]
">
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
    min-h-[58px]
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

   <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8">
  <h2
    className="
      text-white
      
      text-xl md:text-[26px]
      font-medium
      leading-normal
      mt-18
      text-center sm:text-left
    "
  >
    Real Project we built at Mentric
  </h2>

  <div className="h-[2px] w-28 bg-gradient-to-r from-purple-500 to-transparent mx-auto sm:mx-0"></div>
</div>

{/* Cards */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 place-items-center">
  {/* Card 1 */}
  <div
    className="
      relative
      flex flex-col
      items-start
      gap-[10px]
      w-full
      max-w-[306px]
      min-h-[132px]
      px-[15px]
      pt-[12px]
      pb-[13px]
      rounded-[10px]
      bg-[#262626]
    "
  >
    <div className="flex items-center justify-between w-full">
      <h3 className="text-white text-lg font-semibold       font-['Roboto']
">ASCEND</h3>

      <img src="/ASC.png" alt="logo" className="h-6 object-contain" />
    </div>

    <p className="text-gray-400 text-sm leading-6">
      Experiential platform for real-world learning
    </p>

    <button
    onClick={() =>
    window.open(
      "https://ascend.mentrictraining.com/",
      "_blank"
    )
  }
      className="
        absolute right-[15px] bottom-[8px]
        flex items-center justify-center
        w-[75px] h-[30px]
        rounded-[9px]
        bg-[linear-gradient(90deg,#9810FA_0%,#F173FF_100%)]
        shadow-[0_4px_4px_0_#000]
        text-white text-[12px] font-medium
      "
    >
      View
    </button>
  </div>

  {/* Card 2 */}
  <div
    className="
      relative
      flex flex-col
      items-start
      gap-[10px]
      w-full
      max-w-[306px]
      min-h-[132px]
      px-[15px]
      pt-[12px]
      pb-[13px]
      rounded-[10px]
      bg-[#262626]
    "
  >
    <div className="flex items-center justify-between w-full">
      <h3 className="text-white text-lg font-semibold       font-['Roboto']
">Explenet</h3>

      <img src="/EXP.png" alt="logo" className="h-6 object-contain" />
    </div>

    <p className="text-gray-400 text-sm leading-6">
      Experiential platform for real-world learning
    </p>

    <button
    onClick={() =>
    window.open(
      "https://explenet.com/",
      "_blank"
    )
  }
      className="
        absolute right-[15px] bottom-[8px]
        flex items-center justify-center
        w-[75px] h-[30px]
        rounded-[9px]
        bg-[linear-gradient(90deg,#9810FA_0%,#F173FF_100%)]
        shadow-[0_4px_4px_0_#000]
        text-white text-[12px] font-medium
      "
    >
      View
    </button>
  </div>

  {/* Card 3 */}
  <div
    className="
      relative
      flex flex-col
      items-start
      gap-[10px]
      w-full
      max-w-[306px]
      min-h-[132px]
      px-[15px]
      pt-[12px]
      pb-[13px]
      rounded-[10px]
      bg-[#262626]
    "
  >
    <div className="flex items-center justify-between w-full">
      <h3 className="text-white text-lg font-semibold       font-['Roboto']
">SUPW</h3>

      <img src="/SUP.png" alt="logo" className="h-6 object-contain" />
    </div>

    <p className="text-gray-400 text-sm leading-6">
      School-level program for training, kits, and student exhibitions
    </p>

    <button
    onClick={() =>
    window.open(
      "https://supw.mentrictech.in/",
      "_blank"
    )
  }
      className="
        absolute right-[15px] bottom-[8px]
        flex items-center justify-center
        w-[75px] h-[30px]
        rounded-[9px]
        bg-[linear-gradient(90deg,#9810FA_0%,#F173FF_100%)]
        shadow-[0_4px_4px_0_#000]
        text-white text-[12px] font-medium
      "
    >
      View
    </button>
  </div>

  {/* Card 4 */}
  <div
    className="
      relative
      flex flex-col
      items-start
      gap-[10px]
      w-full
      max-w-[306px]
      min-h-[132px]
      px-[15px]
      pt-[12px]
      pb-[13px]
      rounded-[10px]
      bg-[#262626]
    "
  >
    <div className="flex items-center justify-between w-full">
      <h3 className="text-white text-lg font-semibold ">Timez App</h3>

      <img src="/TIMEZ.png" alt="logo" className="h-6 object-contain" />
    </div>

    <p className="text-gray-400 text-sm leading-6">
      Touch-free attendance with selfie verification and geo-tracking
    </p>
<button
  onClick={() => {
    window.location.href = "https://timezapp.mentrictech.in/";
  }}
  className="
    absolute right-[15px] bottom-[8px]
    flex items-center justify-center
    w-[75px] h-[30px]
    rounded-[9px]
    bg-[linear-gradient(90deg,#9810FA_0%,#F173FF_100%)]
    shadow-[0_4px_4px_0_#000]
    text-white text-[12px] font-medium
  "
>
  View
</button>
  </div>
</div>
      </section>
      {/* ================= Internship Journey Section ================= */}
<section className="relative w-full bg-[#262626] overflow-hidden">
  {/* Glow Effects */}
  <div className="absolute top-20 right-0 md:right-32 w-52 h-52 md:w-72 md:h-72 bg-fuchsia-600/30 blur-[120px] rounded-full" />

  <div className="absolute bottom-10 left-10 w-40 h-40 md:w-60 md:h-60 bg-purple-700/20 blur-[120px] rounded-full" />

  <div
    className="
      relative
      w-full
      max-w-[1440px]
      min-h-[425px]
      mx-auto
      bg-[#262626]
      border border-[#3A3A3A]
      overflow-hidden
      py-10 md:py-16
      px-4
    "
  >
    {/* Bottom Gradient Line */}
    <div className="absolute bottom-0 left-0 h-[3px] w-full bg-gradient-to-r from-[#4B0082] via-[#C000FF] to-[#6A00FF]" />

    {/* Heading */}
    <h2
      className="
        text-center
        text-white
        font-['Roboto']
        text-2xl md:text-[32px]
        font-medium
        leading-normal
      "
    >
      Internship Journey
    </h2>

    {/* Timeline */}
    <div
      className="
        relative
        mt-10 md:mt-16
        flex
        flex-wrap
        lg:flex-nowrap
        items-start
        justify-center
        gap-10 md:gap-12 lg:gap-6 xl:gap-10
      "
    >
      {[
        {
          title: "Apply",
          desc: "Submit your application online",
          icon: "/p1.svg",
        },
        {
          title: "Interview",
          desc: "Shortlisted candidates go through an interview",
          icon: "/p2.svg",
        },
        {
          title: "Onboard",
          desc: "Get onboarded and receive your internship plan",
          icon: "/p3.svg",
        },
        {
          title: "Learn & Build",
          desc: "Work on projects, learn, and get mentored",
          icon: "/p4.svg",
        },
        {
          title: "Complete & Certify",
          desc: "Complete your internship and earn a certificate",
          icon: "/pi4.svg",
        },
      ].map((step, index) => (
        <div
          key={index}
          className="
            relative
            flex
            flex-col
            items-center
            text-center
            w-[180px]
            xl:w-[220px]
          "
        >
          <div
            className="
              relative
              flex
              flex-col
              items-center
              text-center
              w-[180px]
              xl:w-[220px]
            "
          >
            {/* Circle + Connector */}
            <div className="relative flex items-center justify-center w-full">
              {/* Circle */}
              <div
                className="
                  relative
                  z-10
                  flex
                  h-[70px]
                  w-[70px]
                  md:h-[81px]
                  md:w-[81px]
                  items-center
                  justify-center
                  rounded-[40.5px]
                  border
                  border-[#9810FA]
                  bg-[rgba(0,0,0,0.20)]
                  shadow-[0_4px_4px_0_#994BFF]
                "
              >
                <img
                  src={step.icon}
                  alt={step.title}
                  className="w-7 h-7 md:w-[36px] md:h-[36px] object-contain"
                />
              </div>

              {/* Connector */}
              {index !== 4 && (
                <img
                  src="/connect.svg"
                  alt="connector"
                  className="
                    hidden
                    lg:block
                    absolute
                    left-[135px]
                    xl:left-[170px]
                    top-1/2
                    -translate-y-1/2
                    w-[90px]
                    xl:w-[143px]
                    h-[112px]
                    object-contain
                  "
                />
              )}
            </div>

            {/* Title */}
            <h3
  className="
    mt-4
    text-center
    text-[26px]
    font-medium
    leading-normal
    not-italic
    bg-[linear-gradient(180deg,#9810FA_0%,#C27AFF_100%)]
    bg-clip-text
    text-transparent
  "
>
  {step.title}
</h3>

            {/* Description */}
            <p
              className="
                mt-3
                text-white
                font-['Roboto']
                text-sm md:text-[16px]
                font-medium
                leading-normal
              "
            >
              {step.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>





      <section className="relative w-full bg-black overflow-hidden py-20 px-6 md:px-16">
        {/* Top Glow */}
        <div className="absolute top-0 left-0 w-full h-[220px] bg-fuchsia-700/40 blur-[140px]" />

        {/* Heading */}
        <div className="relative z-10 flex items-center justify-center gap-4 mb-14">
          <div className="h-[1px] w-16 bg-fuchsia-500"></div>

<h2
  className="
    text-white
    font-['Roboto']
    text-[20px]
    sm:text-[24px]
    md:text-[32px]
    font-medium
    leading-normal
    whitespace-nowrap
  "
>
  Technologies we offer in internships
</h2>

          <div className="h-[1px] w-16 bg-fuchsia-500"></div>
        </div>

        {/* Cards */}
  <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-[1380px] mx-auto place-items-center">
  {[
    {
      title: "Web Development",
      desc: "HTML, CSS, JavaScript, React, Node.js, PHP",
      icon: "/ic1.svg",
    },
    {
      title: "Mobile Development",
      desc: "Flutter, React Native, Android, iOS",
      icon: "/ic2.svg",
    },
    {
      title: "Data & Analytics",
      desc: "Python, Pandas, NumPy, Power BI, Tableau, SQL",
      icon: "/ic3.svg",
    },
    {
      title: "AI & Machine Learning",
      desc: "Python, TensorFlow, Scikit-learn, OpenCV",
      icon: "/ic4.svg",
    },
    {
      title: "Cloud Computing",
      desc: "AWS, Azure, Google Cloud, Docker, Kubernetes",
      icon: "/ic5.svg",
    },
    {
      title: "Embedded Systems",
      desc: "Arduino, Raspberry Pi, IoT, C/C++",
      icon: "/ic6.svg",
    },
  ].map((item, index) => (
    <div
      key={index}
      className="
        flex
        w-full
        max-w-[400px]
        min-h-[232px]
        px-6 md:px-[30px]
        pt-6 md:pt-[30px]
        pb-6 md:pb-[26px]
        flex-col
        items-start
        gap-[10px]
        rounded-[20px]
        bg-[#262626]
        shadow-[0_4px_4px_0_#6E0BB5]
      "
    >
      {/* Icon */}
      <div
        className="
          flex
          h-[50px]
          w-[50px]
          items-center
          justify-center
          rounded-full
          border
          border-fuchsia-500
          bg-white
        "
      >
        <img
          src={item.icon}
          alt={item.title}
          className="w-6 h-6 object-contain"
        />
      </div>

      {/* Title */}
      <h3
        className="
          mt-4
          text-[#C36FFF]
          font-['Roboto']
          text-xl md:text-[22px]
          font-medium
          leading-[29.25px]
        "
      >
        {item.title}
      </h3>

      {/* Description */}
<p
  className="
    max-w-[260px]
    text-white
    text-[16px]
    font-normal
    leading-[29.25px]
    tracking-[0px]
    not-italic
  "
>
  {item.desc}
</p>
    </div>
  ))}
</div>
      </section>

  <section className="w-full bg-black py-10 md:py-16 flex justify-center px-4">
  <div
    className="
      flex
      w-full
      max-w-[1260px]
      min-h-[140px]
      px-6 md:px-[92px]
      py-8 md:py-[16px]
      flex-col
      rounded-[30px] md:rounded-[60px]
      bg-[#323232]
      shadow-[0_4px_4px_0_#531B9D]
    "
  >
    <div className="w-full flex flex-col lg:flex-row items-center lg:items-center justify-between gap-10">
      {/* Left Content */}
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
        <h2
          className="
            font-['Roboto']
            text-xl md:text-[24px]
            font-medium
            leading-[29.25px]
            bg-[linear-gradient(90deg,#9810FA_0%,#E015FF_100%)]
            bg-clip-text
            text-transparent
            inline-block
          "
        >
          Start Your Internship Journey Today!
        </h2>

        <button
          className="
            mt-4
            flex
            w-[223px]
            h-[60px]
            pr-[40px]
            pl-[24px]
            py-[19px]
            items-center
            justify-end
            gap-[10px]
            rounded-[27px]
            bg-[linear-gradient(90deg,#9810FA_0%,#C778FF_100%)]
            shadow-[0_4px_4px_0_#000]
            text-white
            font-['Roboto']
            text-[15px]
            font-medium
          "
        >
          <img src="whatsapp.svg" alt="WhatsApp" className="w-8 h-8" />
          Talk With us
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:flex items-center gap-8 md:gap-14">
        {[
          {
            value: "500+",
            label: "Students Trained",
            icon: "/1.svg",
          },
          {
            value: "50+",
            label: "Industry Mentors",
            icon: "/2.svg",
          },
          {
            value: "100%",
            label: "Intern Satisfaction",
            icon: "/3.svg",
          },
          {
            value: "120+",
            label: "Projects Completed",
            icon: "/4.svg",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center"
          >
            <img
              src={item.icon}
              alt={item.label}
              className="w-[38px] h-[38px] aspect-square object-contain mb-2"
            />

            <h3
              className="
                text-white
                text-center
                font-['Roboto']
                text-2xl md:text-[29px]
                font-medium
                leading-[29.25px]
              "
            >
              {item.value}
            </h3>

            <p
              className="
                mt-2
                text-[#C27AFF]
                font-['Roboto']
                text-[13px] md:text-[14px]
                font-normal
                leading-[29.25px]
              "
            >
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>
      <Footer/>
    </>
  );
}
