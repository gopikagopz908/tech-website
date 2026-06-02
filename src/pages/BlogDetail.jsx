"use client";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { blogs } from "@/data/blogData";
import BlogNotFound from "./BlogNotFound.jsx";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar.jsx";

export default function BlogDetail() {
  const { slug } = useParams();
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return <BlogNotFound />;
  }

  return (
    <>
 <Helmet>
  <title>{blog.title} | Mentric Technologies</title>

  <meta
    name="description"
    content={
      blog.content?.find(item => item.type === "paragraph")?.text?.slice(0, 160)
    }
  />

  <meta
    name="keywords"
    content={`${blog.title}, Mentric Technologies, Case Study, Digital Transformation, Software Development, ERP Solutions, LMS Platform`}
  />

  <meta property="og:title" content={blog.title} />

  <meta
    property="og:description"
    content={
      blog.content?.find(item => item.type === "paragraph")?.text?.slice(0, 160)
    }
  />

  <meta property="og:image" content={blog.image} />

  <meta property="og:type" content="article" />


  <link
    rel="canonical"
    href="https://tech-website-nine-bice.vercel.app/blogs"
  />
</Helmet>
<Navbar/>
<div className="min-h-screen bg-[#090D17] text-[#1f2937] px-4 py-16">
   
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[3fr_1px_1fr] gap-8">
        {/* Main Blog Content */} 
        
        <div className="col-span-1">
          <img
            src={blog.image}
            alt={blog.title}
           loading="lazy"

            width={800}
            height={400}
            className="rounded-xl mb-8 border border-[#e5e7eb] shadow-sm object-cover"
          />
<h1
  className="
    text-[35px]
    font-bold
    leading-[40px]
    font-['Roboto']
    mb-3
    bg-[linear-gradient(90deg,#C27AFF_0%,#F6339A_100%)]
    bg-clip-text
    text-transparent
    
  "
>
  {blog.title}
</h1>

          {/* Author & Date */}
          <div className="mb-8 text-sm text-white flex items-center gap-4">
            <span>
              By <span className="font-medium text-white">{blog.author}</span>
            </span>
            <span className="text-[#d1d5db]">|</span>
            <span>{blog.date}</span>
          </div>

          <div className="space-y-6 text-[17px] leading-relaxed text-white">
            {blog.content.map((block, index) => {
              switch (block.type) {
                case "paragraph":
                  return (
                    <p key={index} className="whitespace-pre-line">
                      {block.text}
                    </p>
                  );
                case "heading":
                  return (
                    <h2
                      key={index}
                      className="text-xl md:text-2xl font-semibold mt-8 text-[#2563eb] border-b border-gray-300 pb-1"
                    >
                      {block.text}
                    </h2>
                  );
                case "list":
                  return (
                    <ul key={index} className="space-y-3 mt-3">
                      {block.items.map((item, i) => (
                        <li key={i}>
                          <p className="text-[17px] font-semibold text-white mb-1">
                            {item.title}
                          </p>
                          <p className="text-white">{item.description}</p>
                        </li>
                      ))}
                    </ul>
                  );
                case "bullets":
                  return (
                    <ul
                      key={index}
                      className="list-disc list-inside space-y-2 pl-4 text-white"
                    >
                      {block.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  );
                default:
                  return null;
              }
            })}
          </div>
        </div>

        {/* Separator */}
        <div className="hidden lg:block w-full h-full border-r border-gray-200" />

        {/* Sidebar */}
        <aside className="col-span-1 sticky top-20 h-fit bg-white border border-gray-200 rounded-xl shadow p-5">
          <h3 className="text-lg font-semibold text-[#111827] mb-4">
            All Blogs
          </h3>
          <ul className="space-y-3 text-sm">
            {blogs.map((b) => {
              const isActive = b.slug === slug;
              return (
                <li key={b.slug}>
                  <Link
                    to={`/blogs/${b.slug}`}
                    className={`block px-3 py-2 rounded-md transition font-medium ${
                      isActive
                        ? "border border-purple-500  bg-purple-50"
                        : "text-[#374151] hover:text-[#2563eb]"
                    }`}
                  >
                    {b.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </aside>
      </div>
    </div>
    </>
  );
}

