import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Career from "./pages/Career.jsx";
import Team from "./pages/Team.jsx";
import Clients from "./pages/Clients.jsx";
import Blogs from "./pages/Blogs.jsx";
import BlogDetail from "./pages/BlogDetail.jsx";
import BlogNotFound from "./pages/BlogNotFound.jsx";
import CaseStudies from "./pages/CaseStudies.jsx";
import CaseStudyDetail from "./pages/CaseStudyDetail.jsx";
import InternshipPrograms from "./pages/InternshipDetail.jsx";
import ScrollToTop from "./lib/path.jsx";

function NotFound() {
  return <div className="min-h-screen flex items-center justify-center text-white bg-black">Not Found</div>;
}

export default function App() {
  return (
    <>
    <ScrollToTop/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/career" element={<Career />} />
      <Route path="/internships" element={<InternshipPrograms/>}/>
      <Route path="/team" element={<Team />} />
      <Route path="/clients" element={<Clients />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/blogs/:slug" element={<BlogDetail />} />
      <Route path="/blogs/:slug/not-found" element={<BlogNotFound />} />
      <Route path="/caseStudies" element={<CaseStudies />} />
      <Route path="/caseStudies/:slug" element={<CaseStudyDetail />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/404" element={<NotFound />} />
    </Routes>
    </>
  );
}

