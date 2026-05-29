"use client";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import { useEffect, useState } from "react";

const footerLinks = [
  {
    title: "Company",
    items: [
      { label: "About  Us", href: "/#aboutus-cards" },
      { label: "Products", href: "/#products" },

      { label: "Services", href: "/#services" },
       { label: "Internship Programs", href: "/internships" },
      { label: "Careers", href: "/career" },
            { label: "Contact Us", href: "/#footer" },


    ],
  },
  {
    title: "Services",
    items: [
      { label: "Custom Software Development", href: "/" },
      { label: "Web & Mobile App Development", href: "/" },
      { label: "Hardware software integral services", href: "/" },
      { label: "Digital Marketing", href: "/" },
    ],
  },
  {
    title: "Solutions",
    items: [
      { label: "ASCEND", href: "https://ascend.mentrictraining.com/" },
      { label: "Explenet", href: "https://explenet.com/" },
      { label: "LMS - Platforms", href: "/" },
     
    ],
  },
  {
    title: "Resources",
    items: [
      { label: "Blogs", href: "/blogs" },
      { label: "Case Studies", href: "/caseStudies" },
      { label: "Our Team", href: "/team" },
     
    ],
  },
  {
    title: "Connect",
    items: [
      { label: "Contact: +91  89048 06519", href: "tel:+91 89048 06519" },
      { label: "Email:  ba@mentrictech.in", href: "mailto: ba@mentrictech.in" },
      {
        label:
          "Address: Sri Venkateshwara Complex, Dasarahalli Main Road, Hebbal, Bengaluru, Karnataka,560024",
        href: "https://maps.google.com/?q=Sri+Venkateshwara+Complex+Dasarahalli+Hebbal+Bengaluru",
      },
    ],
  },
];

export default function Footer() {
  const [isInBottom, setIsInBottom] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const bottomThreshold = document.body.offsetHeight - 100;
      if (scrollPosition >= bottomThreshold && !isInBottom) {
        setIsInBottom(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isInBottom]);

  useEffect(() => {
    if (isInBottom) {
      const timeout = setTimeout(() => {
        setIsExpanded(true);
      }, 800);
      return () => clearTimeout(timeout);
    }
  }, [isInBottom]);

  useEffect(() => {
    document.body.style.overflow = showForm ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showForm]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted! (implement send logic)");
  };

  return (
    <motion.footer
                id="footer"

      className="relative bg-gradient-to-br from-black via-zinc-900 to-gray-900 text-white px-6 md:px-20 pt-16 pb-20"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-[#ffffff0a] to-transparent z-0"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* CTA */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Let’s build something great.
            </h2>
            <p className="text-gray-400 mt-3 text-lg">
              Get started in less than a minute.
            </p>
          </div>
          <button
            onClick={() => setShowForm(true)}
            className="group border border-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-white hover:text-black transition-all duration-300"
          >
            Enquiry{" "}
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Footer Grid */}
        {!showForm && isExpanded && (
    <motion.div
  className="flex flex-wrap lg:flex-nowrap justify-between gap-8 text-sm"
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ type: "spring", stiffness: 100, damping: 15 }}
>
  {footerLinks.map((section, i) => (
    <div key={i} className="flex-1 min-w-[180px]">
      <h4 className="font-semibold mb-4 text-white text-base">
        {section.title}
      </h4>

      <ul className="space-y-2 text-gray-400">
        {section.items.map((item, idx) => (
          <li key={idx}>
            <a
              href={item.href}
              className="hover:text-white transition block"
              target={item.href.startsWith("http") ? "_blank" : "_self"}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : ""}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>



          {section.title === "Connect" && (
      <div className="flex items-center gap-3 mt-6">
        <a
          href="https://www.facebook.com/Mentric.training/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
                     <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M7.58301 11.6667V16.3333H11.083V24.5H15.7497V16.3333H19.2497L20.4163 11.6667H15.7497V9.33333C15.7497 8.6975 16.2805 8.16667 16.9163 8.16667H20.4163V3.5H16.9163C13.7395 3.5 11.083 6.1565 11.083 9.33333V11.6667H7.58301Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>

        </a>

        <a
          href="https://www.instagram.com/mentric.training/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
<svg width="28" height="28" viewBox="0 0 28 28" fill="none">
  <path
    d="M13.9997 18.6673C15.2374 18.6673 16.4243 18.1757 17.2995 17.3005C18.1747 16.4253 18.6663 15.2383 18.6663 14.0007C18.6663 12.763 18.1747 11.576 17.2995 10.7008C16.4243 9.82565 15.2374 9.33398 13.9997 9.33398C12.762 9.33398 11.575 9.82565 10.6998 10.7008C9.82467 11.576 9.33301 12.763 9.33301 14.0007C9.33301 15.2383 9.82467 16.4253 10.6998 17.3005C11.575 18.1757 12.762 18.6673 13.9997 18.6673Z"
    stroke="white"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
  <path
    d="M3.5 18.6667V9.33333C3.5 7.78624 4.11458 6.30251 5.20854 5.20854C6.30251 4.11458 7.78624 3.5 9.33333 3.5H18.6667C20.2138 3.5 21.6975 4.11458 22.7915 5.20854C23.8854 6.30251 24.5 7.78624 24.5 9.33333V18.6667C24.5 20.2138 23.8854 21.6975 22.7915 22.7915C21.6975 23.8854 20.2138 24.5 18.6667 24.5H9.33333C7.78624 24.5 6.30251 23.8854 5.20854 22.7915C4.11458 21.6975 3.5 20.2138 3.5 18.6667Z"
    stroke="white"
    strokeWidth="1.75"
  />
  <path
    d="M20.417 7.59486L20.4287 7.58203"
    stroke="white"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>
        </a>

        <a
          href="https://www.youtube.com/@MentricTraining"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube"
        >
<svg width="28" height="28" viewBox="0 0 28 28" fill="none">
  <path
    d="M2.8584 13.3221C2.8584 9.8023 3.2084 8.0418 4.30157 6.94864C5.39473 5.85547 7.15523 5.85547 10.6751 5.85547H17.3251C20.8449 5.85547 22.6042 5.85547 23.6986 6.94864C24.7929 8.0418 25.1417 9.8023 25.1417 13.3221V14.6778C25.1417 18.1976 24.7917 19.9581 23.6986 21.0513C22.6054 22.1445 20.8449 22.1445 17.3251 22.1445H10.6751C7.15523 22.1445 5.39473 22.1445 4.30157 21.0513C3.2084 19.9581 2.8584 18.1976 2.8584 14.6778V13.3221Z"
    stroke="white"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
  <path
    d="M17.1333 13.4054L12.154 10.2939C12.048 10.2277 11.9263 10.191 11.8013 10.1877C11.6764 10.1845 11.5529 10.2147 11.4436 10.2753C11.3343 10.3359 11.2432 10.4247 11.1798 10.5324C11.1164 10.6401 11.083 10.7628 11.083 10.8877V17.1119C11.0832 17.2368 11.1167 17.3593 11.1802 17.4669C11.2437 17.5744 11.3348 17.663 11.4441 17.7234C11.5533 17.7839 11.6768 17.814 11.8016 17.8107C11.9264 17.8074 12.0481 17.7708 12.154 17.7046L17.1333 14.5931C17.2341 14.5302 17.3172 14.4427 17.3749 14.3388C17.4325 14.2349 17.4627 14.118 17.4627 13.9992C17.4627 13.8804 17.4325 13.7636 17.3749 13.6597C17.3172 13.5558 17.2341 13.4683 17.1333 13.4054Z"
    stroke="white"
    strokeWidth="1.75"
    strokeLinejoin="round"
  />
</svg>
        </a>

        <a
          href="https://www.linkedin.com/company/mentrictraining/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
<svg width="28" height="28" viewBox="0 0 28 28" fill="none">
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M5.83333 1.45898C4.98243 1.45898 4.16638 1.797 3.5647 2.39868C2.96302 3.00036 2.625 3.81641 2.625 4.66732C2.625 5.51822 2.96302 6.33427 3.5647 6.93595C4.16638 7.53763 4.98243 7.87565 5.83333 7.87565C6.68424 7.87565 7.50029 7.53763 8.10197 6.93595C8.70365 6.33427 9.04167 5.51822 9.04167 4.66732C9.04167 3.81641 8.70365 3.00036 8.10197 2.39868C7.50029 1.797 6.68424 1.45898 5.83333 1.45898ZM4.375 4.66732C4.375 4.28054 4.52865 3.90961 4.80214 3.63612C5.07563 3.36263 5.44656 3.20898 5.83333 3.20898C6.22011 3.20898 6.59104 3.36263 6.86453 3.63612C7.13802 3.90961 7.29167 4.28054 7.29167 4.66732C7.29167 5.05409 7.13802 5.42502 6.86453 5.69851C6.59104 5.97201 6.22011 6.12565 5.83333 6.12565C5.44656 6.12565 5.07563 5.97201 4.80214 5.69851C4.52865 5.42502 4.375 5.05409 4.375 4.66732ZM2.625 9.33398C2.625 9.10192 2.71719 8.87936 2.88128 8.71527C3.04538 8.55117 3.26794 8.45898 3.5 8.45898H8.16667C8.39873 8.45898 8.62129 8.55117 8.78539 8.71527C8.94948 8.87936 9.04167 9.10192 9.04167 9.33398V24.5007C9.04167 24.7327 8.94948 24.9553 8.78539 25.1194C8.62129 25.2835 8.39873 25.3757 8.16667 25.3757H3.5C3.26794 25.3757 3.04538 25.2835 2.88128 25.1194C2.71719 24.9553 2.625 24.7327 2.625 24.5007V9.33398ZM4.375 10.209V23.6257H7.29167V10.209H4.375ZM10.7917 9.33398C10.7917 9.10192 10.8839 8.87936 11.0479 8.71527C11.212 8.55117 11.4346 8.45898 11.6667 8.45898H16.3333C16.5654 8.45898 16.788 8.55117 16.9521 8.71527C17.1161 8.87936 17.2083 9.10192 17.2083 9.33398V9.84032L17.7158 9.62215C18.5909 9.24835 19.5192 9.01412 20.4668 8.92798C23.7043 8.63398 26.5417 11.1773 26.5417 14.444V24.5007C26.5417 24.7327 26.4495 24.9553 26.2854 25.1194C26.1213 25.2835 25.8987 25.3757 25.6667 25.3757H21C20.7679 25.3757 20.5454 25.2835 20.3813 25.1194C20.2172 24.9553 20.125 24.7327 20.125 24.5007V16.334C20.125 15.9472 19.9714 15.5763 19.6979 15.3028C19.4244 15.0293 19.0534 14.8757 18.6667 14.8757C18.2799 14.8757 17.909 15.0293 17.6355 15.3028C17.362 15.5763 17.2083 15.9472 17.2083 16.334V24.5007C17.2083 24.7327 17.1161 24.9553 16.9521 25.1194C16.788 25.2835 16.5654 25.3757 16.3333 25.3757H11.6667C11.4346 25.3757 11.212 25.2835 11.0479 25.1194C10.8839 24.9553 10.7917 24.7327 10.7917 24.5007V9.33398ZM12.5417 10.209V23.6257H15.4583V16.334C15.4583 15.4831 15.7964 14.667 16.398 14.0653C16.9997 13.4637 17.8158 13.1257 18.6667 13.1257C19.5176 13.1257 20.3336 13.4637 20.9353 14.0653C21.537 14.667 21.875 15.4831 21.875 16.334V23.6257H24.7917V14.444C24.7917 12.2227 22.8538 10.468 20.6267 10.671C19.8615 10.7404 19.112 10.9294 18.4053 11.231L16.6787 11.9718C16.5455 12.029 16.4002 12.0522 16.2558 12.0394C16.1114 12.0266 15.9725 11.9781 15.8515 11.8982C15.7305 11.8184 15.6313 11.7098 15.5626 11.5821C15.494 11.4545 15.4582 11.3118 15.4583 11.1668V10.209H12.5417Z"
    fill="white"
  />
</svg>
        </a>
      </div>
    )}
    </div>
  ))}
</motion.div>
        )}
      </div>

      {/* Slide-in Form with Overlay */}
      <AnimatePresence>
        {showForm && (
          <motion.div

className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 text-sm"            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setShowForm(false)} // close when clicking overlay
          >
            {/* Slide-in Panel */}
            <motion.div
              className="md:w-1/2 w-full bg-zinc-950/95 backdrop-blur-xl p-6 shadow-2xl overflow-y-auto"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
              onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
            >
              <button
                onClick={() => setShowForm(false)}
                className="flex items-center justify-center w-9 h-9 mb-4 rounded-full 
                          bg-gradient-to-r from-gray-500 to-purple-500 
                          hover:from-gray-600 hover:to-purple-600 
                          transition transform hover:scale-110 shadow-md"
              >
                <X size={24} className="text-white" />
              </button>

              <h3 className="text-3xl font-semibold mb-6 tracking-tight">
                Request a Quote
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="bg-zinc-800 p-4 rounded-md w-full text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="bg-zinc-800 p-4 rounded-md w-full text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                    required
                  />
                </div>
                <input
                  type="text"
                  placeholder="Project Type (e.g. Website, App)"
                  className="bg-zinc-800 p-4 rounded-md w-full text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                  required
                />
                <textarea
                  placeholder="Tell us about your project..."
                  rows={5}
                  className="bg-zinc-800 p-4 rounded-md w-full text-white placeholder-gray-500 resize-none focus:outline-none focus:ring-2 focus:ring-white"
                  required
                ></textarea>
                <button
                  type="submit"
                  className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition-all"
                >
                  Submit Quote Request
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.footer>
  );
}
