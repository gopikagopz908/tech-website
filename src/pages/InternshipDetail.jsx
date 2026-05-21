



export default function InternshipPrograms() {
const internships = [
  {
    title: "College Internships",
    image: "/i1.svg",
    description:
      "Designed for students who want practical exposure and real-world project experience while continuing academics.",
  },
  {
    title: "Skill Development Internships",
    image: "/i2.svg",
    description:
      "Focused on upgrading technical and professional skills through hands-on assignments and mentorship.",
  },
  {
    title: "Final Year Project Internships",
    image: "/i3.svg",
    description:
      "Industry-oriented project internships for final-year students to build impactful academic projects.",
  },
  {
    title: "Industry Exposure Internships",
    image: "/i4.svg",
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
Professional Internship Experience</h1>

       <p
  className="
    mt-4
    text-center
    font-['Roboto']
    text-[18px]
    font-normal
    leading-[29.25px]
    text-[#D1D5DC]
  "
>
  Flexible Internship Opportunities for Every Stage of Learning
</p>
      </div>
                     <h2
  className="
    absolute
    left-[75px]
    top-[274px]
    text-center
    font-['Roboto']
    text-[26px]
    font-semibold
    leading-[29.25px]
    text-[#994BFF]
  "
>
Learn. Build. Grow.</h2>
          <p
  className="
    absolute
    left-[75px]
    top-[320px]
    max-w-2xl
    font-['Roboto']
    text-[16px]
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
            alt="Internship"
            className="relative z-10 w-[380px] object-contain drop-shadow-[0_0_50px_rgba(217,70,239,0.5)]"
          />
        </div>
      </div>


    {/* Heading */}


    
  

      {/* Cards */}
{/* Cards Heading */}
<h2
  className="
    mb-8
    text-center
    text-white
    font-['Roboto']
    text-[32px]
    font-medium
    leading-normal
  "
>
  Types of Internships
</h2>
   <div className="relative z-10  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-18">
  {internships.map((item, index) => (
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
      <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg">
        <img
          src={item.image}
          alt={item.title}
          className="w-7 h-7 object-contain"
        />
      </div>

      {/* Title */}
      <h3
        className="
          mt-4
          font-['Roboto']
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


    <div className="flex items-center gap-4 mb-8">
      <h2
  className="
    text-white
    font-roboto
    text-[26px]
    font-medium
    leading-normal
    mt-18
  "
>
  Real Project we built at Mentric
</h2>

      <div className="h-[2px] w-28 bg-gradient-to-r from-purple-500 to-transparent"></div>
    </div>

    {/* Cards */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16">      
      {/* Card 1 */}
    <div
  className="
    flex
    flex-col
    items-start
    gap-[10px]
    w-[306px]
    h-[132px]
    px-[15px]
    pt-[12px]
    pb-[13px]
    rounded-[10px]
    bg-[#262626]
  "
>
  <div className="flex items-center justify-between w-full">
    <h3 className="text-white text-lg font-semibold">
      ASCEND
    </h3>

    <img
      src="/logo1.png"
      alt="logo"
      className="h-5 object-contain"
    />
  </div>

  <p className="text-gray-400 text-sm leading-6">
    Experiential platform for real-world learning
  </p>

  <button className="mt-auto bg-gradient-to-r from-purple-600 to-pink-500 text-white text-sm px-5 py-2 rounded-md">
    View
  </button>
</div>

{/* Card 2 */}
<div
  className="
    flex
    flex-col
    items-start
    gap-[10px]
    w-[306px]
    h-[132px]
    px-[15px]
    pt-[12px]
    pb-[13px]
    rounded-[10px]
    bg-[#262626]
  "
>
  <div className="flex items-center justify-between w-full">
    <h3 className="text-white text-lg font-semibold">
      Explenet
    </h3>

    <img
      src="/logo2.png"
      alt="logo"
      className="h-5 object-contain"
    />
  </div>

  <p className="text-gray-400 text-sm leading-6">
    Experiential platform for real-world learning
  </p>

  <button className="mt-auto bg-gradient-to-r from-purple-600 to-pink-500 text-white text-sm px-5 py-2 rounded-md">
    View
  </button>
</div>

{/* Card 3 */}
<div
  className="
    flex
    flex-col
    items-start
    gap-[10px]
    w-[306px]
    h-[132px]
    px-[15px]
    pt-[12px]
    pb-[13px]
    rounded-[10px]
    bg-[#262626]
  "
>
  <div className="flex items-center justify-between w-full">
    <h3 className="text-white text-lg font-semibold">
      SUPW
    </h3>

    <img
      src="/logo3.png"
      alt="logo"
      className="h-5 object-contain"
    />
  </div>

  <p className="text-gray-400 text-sm leading-6">
    School-level program for training, kits, and student exhibitions
  </p>

  <button className="mt-auto bg-gradient-to-r from-purple-600 to-pink-500 text-white text-sm px-5 py-2 rounded-md">
    View
  </button>
</div>

{/* Card 4 */}
<div
  className="
    flex
    flex-col
    items-start
    gap-[10px]
    w-[306px]
    h-[132px]
    px-[15px]
    pt-[12px]
    pb-[13px]
    rounded-[10px]
    bg-[#262626]
  "
>
  <div className="flex items-center justify-between w-full">
    <h3 className="text-white text-lg font-semibold">
      Timez App
    </h3>

    <img
      src="/logo4.png"
      alt="logo"
      className="h-5 object-contain"
    />
  </div>

  <p className="text-gray-400 text-sm leading-6">
    Touch-free attendance with selfie verification and geo-tracking
  </p>

  <button className="mt-auto bg-gradient-to-r from-purple-600 to-pink-500 text-white text-sm px-5 py-2 rounded-md">
    View
  </button>
</div>
</div>

<div
  className="
    relative
    mt-24
    rounded-[20px]
    bg-[rgba(255,255,255,0.04)]
    border
    border-white/10
    px-6
    py-16
    overflow-hidden
  "
>
  {/* Glow Effects */}
  <div className="absolute left-0 bottom-0 w-[250px] h-[250px] bg-fuchsia-600/20 blur-[120px] rounded-full" />
  <div className="absolute right-0 top-0 w-[250px] h-[250px] bg-purple-700/20 blur-[120px] rounded-full" />

  {/* Heading */}
  <h2
    className="
      relative
      z-10
      text-center
      text-white
      font-['Roboto']
      text-[36px]
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
      z-10
      mt-20
      flex
      flex-wrap
      justify-center
      gap-14
      lg:gap-20
    "
  >
    {[
      {
        title: "Apply",
        desc: "Submit your application online",
        icon: "/apply.svg",
      },
      {
        title: "Interview",
        desc: "Shortlisted candidates go through an interview",
        icon: "/interview.svg",
      },
      {
        title: "Onboard",
        desc: "Get onboarded and receive your internship plan",
        icon: "/onboard.svg",
      },
      {
        title: "Learn & Build",
        desc: "Work on projects, learn, and get mentored",
        icon: "/learn.svg",
      },
      {
        title: "Complete & Certify",
        desc: "Complete your internship and earn a certificate",
        icon: "/certificate.svg",
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
          max-w-[150px]
        "
      >
        {/* Circle */}
        <div
          className="
            relative
            z-10
            flex
            h-[70px]
            w-[70px]
            items-center
            justify-center
            rounded-full
            border
            border-fuchsia-500
            bg-black
            shadow-[0_0_25px_rgba(217,70,239,0.35)]
          "
        >
          <img
            src={step.icon}
            alt={step.title}
            className="w-7 h-7 object-contain"
          />
        </div>

        {/* Connector Line */}
        {index !== 4 && (
          <div
            className="
              hidden
              lg:block
              absolute
              top-[35px]
              left-[85px]
              w-[120px]
              border-t
              border-dashed
              border-fuchsia-500
            "
          />
        )}

        {/* Title */}
        <h3
          className="
            mt-5
            text-fuchsia-500
            font-['Roboto']
            text-[22px]
            font-medium
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
            text-[14px]
            font-normal
            leading-[20px]
          "
        >
          {step.desc}
        </p>
      </div>
    ))}
  </div>
</div>


    </section>
  );
}


{/* Internship Journey Section */}
