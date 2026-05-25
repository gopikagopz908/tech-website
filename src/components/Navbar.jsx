"use client";
import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "Products", href: "/#products" },
  { label: "Services", href: "/#services" },
  { label: "Internships", href: "/internships" },
  { label: "Resources", href: "/#resources" },
  { label: "Career", href: "/career" },
  { label: "Contact us", href: "/#footer" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
const navigate = useNavigate();
const location = useLocation();

const handleNavigation = (href) => {
  // section links
  if (href.startsWith("/#")) {
    const id = href.replace("/#", "");

    // already on homepage
    if (location.pathname === "/") {
      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
        });
      }
    } else {
      // navigate to homepage first
      navigate("/");

      // wait for page render
      setTimeout(() => {
        const element = document.getElementById(id);

        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
          });
        }
      }, 100);
    }
  } else {
    // normal route
    navigate(href);
  }

  setIsOpen(false);
};
  return (
    <header className="sticky top-0 w-full z-50 bg-black/80 backdrop-blur-md text-white shadow-md px-6 py-4">
      {/* <div className="relative flex items-center justify-between max-w-7xl mx-auto">
   
        <div className="flex-shrink-0">
          <Link to="/">
            <img
              src="/log.png"
              alt="Logo"
              width={150}
              height={40}
              className="rounded-full cursor-pointer"
            />
          </Link>
        </div>

      
        <nav className="absolute left-1/2 -translate-x-1/2 hidden md:flex gap-8 text-[16px] font-light font-sans">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-purple-400 transition"
            >
              {link.label}
            </a>
          ))}
        </nav>



        <div className="md:hidden text-2xl cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </div>
      </div> */}


<div className="relative flex items-center justify-between max-w-7xl mx-auto">
  {/* Left: Logo */}
  <div className="flex-shrink-0">
    <Link to="/">
      <img
        src="/log.png"
        alt="Logo"
        width={150}
        height={40}
        className="rounded-full cursor-pointer"
      />
    </Link>
  </div>

  {/* Center: Nav Links */}
  <nav className="absolute left-1/2 -translate-x-1/2 hidden lg:flex gap-8 text-[16px] font-light font-sans">
{navLinks.map((link) => (
  <button
    key={link.href}
    onClick={() => handleNavigation(link.href)}
    className="hover:text-purple-400 transition whitespace-nowrap"
  >
    {link.label}
  </button>
))}
  </nav>

  {/* Right Section */}
  <div className="flex items-center gap-4">
    {/* Contact Button - Desktop Only */}
<button
  onClick={() => handleNavigation("/#footer")}
  className="
    hidden
    lg:flex
    relative
    items-center
    gap-2
    px-5
    py-2
    rounded-full
    border
    border-[#C000FF]
    text-white
    text-sm
    font-medium
    whitespace-nowrap
    shadow-[0_0_10px_rgba(192,0,255,0.6)]
    transition-all
    duration-300
    hover:shadow-[0_0_18px_rgba(192,0,255,0.9)]
  "
>
  {/* Icon */}
  <div
    className="
      flex
      items-center
      justify-center
      w-6
      h-6
      rounded-full
      bg-[#2B0A3D]
      border
      border-[#C000FF]
    "
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.9.32 1.78.59 2.62a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.46-1.11a2 2 0 0 1 2.11-.45c.84.27 1.72.47 2.62.59A2 2 0 0 1 22 16.92z" />
    </svg>
  </div>

  Contact us
</button>

    {/* Hamburger Icon - Mobile Only */}
    <div
      className="lg:hidden text-2xl cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      ☰
    </div>
  </div>
</div>




      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 flex flex-col gap-4 px-4 pb-4 text-sm font-medium bg-black/90 backdrop-blur-md rounded-md shadow-lg">
{navLinks.map((link) => (
  <button
    key={link.href}
    onClick={() => handleNavigation(link.href)}
    className="hover:text-purple-400 transition whitespace-nowrap"
  >
    {link.label}
  </button>
))}
        </div>
      )}
    </header>
  );
}
