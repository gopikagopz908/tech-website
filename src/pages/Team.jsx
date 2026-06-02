"use client";

import Navbar from "@/components/Navbar";
import { Helmet } from "react-helmet-async";

const TeamMemberCard = ({ member }) => {
  return (
    <div
      key={member.id}
      className="group relative text-center p-8 border border-white/20 rounded-3xl bg-transparent backdrop-blur-none transition-all duration-300 hover:-translate-y-3 hover:border-white/30 w-[320px] h-[400px] overflow-hidden"
    >
      <div className="mb-8 flex justify-center">
        <div className="w-[120px] h-[120px] rounded-full overflow-hidden border-4 border-white/20 transition-all duration-300 group-hover:border-white/40 group-hover:scale-105">
          <img
            src={member.image}
            alt={member.name}
            width={120}
            height={120}
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      <h3 className="text-2xl font-semibold mb-3 text-white">
        {member.name}
      </h3>
      <p className="text-base leading-relaxed text-white/90">
        {member.position}
      </p>
      <p className="text-base leading-relaxed text-white/60">
        {member.description}
      </p>
    </div>
  );
};

export default function Team() {
  const teamMembers = [
    {
      id: 1,
      name: "Dilip Kumar",
      position: "FOUNDER AND MD",
      image: "/t1.jpeg",
      description:
        " Mentric's MD, brings 20+ years of global industrial expertise. Proficient in HR, Training, Compliance, Business Support.",
    },
    {
      id: 2,
      name: "Prashanth Nair",
      position: "INVESTOR & DIRECTOR",
      image: "/t2.jpeg",
      description:
        "Held leadership roles at Tata Strategic, T.I.M.E Mumbai, Advinia Healthcare (SREI Group), and Tripura Medical College.",
    },
    {
      id: 3,
      name: "Manish Kumar",
      position: "ADVISOR",
      image: "/t4.jpeg",
      description:
        "Manish Kumar, former MD and CEO of NSDC, is an esteemed leader in Indian development sectors. He was also a Mason Fellow at Harvard University.",
    },
    {
      id: 4,
      name: "Amit Kulshreshtha",
      position: "ADVISOR",
      image: "/t3.jpeg",
      description:
        "Amit is a veteran financial leader, co-founder of CIG, and former CEO of CIFL, with experience in investment banking and various advisory roles.",
    },
    {
      id: 5,
      name: "Nagendra Sastry",
      position: "ADVISOR",
      image: "/t5.jpeg",
      description:
        "Nagendra, with 28+ years in IT, is the MD of Proclink, specializing in Data Analytics and IT process consulting with ISO and CMMI models.",
    },
  ];

  return (
<>
    <Helmet>
  <title>Leadership Team | Mentric Technologies</title>

  <meta
    name="description"
    content="Meet the leadership team behind Mentric Technologies. Learn about our founders, directors, advisors, and industry experts driving innovation in technology, education, digital transformation, and business growth."
  />

  <meta
    name="keywords"
    content="Mentric Technologies team, leadership team, founders, directors, advisors, technology leaders, digital transformation experts"
  />

  <meta
    property="og:title"
    content="Leadership Team | Mentric Technologies"
  />

  <meta
    property="og:description"
    content="Meet the experienced leaders, advisors, and innovators who guide Mentric Technologies in delivering impactful technology and education solutions."
  />

  <meta property="og:type" content="website" />

  <link
    rel="canonical"
    href="https://tech-website-nine-bice.vercel.app/team"
  />
</Helmet>
  <Navbar/>
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/silk.jpg"
          alt="Team background"
          style={{ objectFit: "cover" }}
          className="w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/60 z-10" />
      </div>

      {/* Content */}
      <div className="relative mt-3 z-10 px-6 py-10 mx-auto max-w-7xl text-white lg:px-10">
        {/* Header */}
        <div className="text-center mb-10 ">
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/80">
            COMPANY MANAGEMENT
          </p>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-light leading-tight max-w-4xl mx-auto">
            Meet the team that makes<br />
            the magic happens
          </h1>
        </div>

        {/* Top Row - 2 Cards */}
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mb-16 justify-items-center Advisor Drives process optimization and innovation. nter">
          {teamMembers.slice(0, 2).map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>

        {/* Bottom Row - 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 justify-items-center">
          {teamMembers.slice(2).map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </div>
    </>
  );
}

