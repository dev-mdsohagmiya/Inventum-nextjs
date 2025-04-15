"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import blogs from "../blogs/blogs-4.json";

export default function BlogList() {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  // Process blog data once with useMemo to avoid recalculation on re-renders
  const processedBlogs = useMemo(() => {
    return blogs.map((blog) => ({
      ...blog,
      slug: blog.title
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/:/g, "")
        .replace(/[^\w-]+/g, ""), // Remove any other special characters
      date: new Date(blog.date),
    }));
  }, []);

  // Calculate pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = processedBlogs.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(processedBlogs.length / postsPerPage);

  // Handle pagination
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="bg-dl pt-28 lg:pt-[12rem] min-h-screen">
      <div className="container mx-auto px-4">
        <div className="flex gap-5 flex-wrap justify-center">
          {currentPosts.map((blog) => (
            <div
              key={blog.slug}
              className="max-w-xs rounded-xl bg-dd text-ll shadow-md transition-transform hover:scale-105"
            >
              <Link href={`/blogs/${blog.slug}`}>
                <div className="h-full flex flex-col">
                  <div className="relative w-full h-48">
                    <Image
                      className="rounded-t-xl object-cover"
                      src={blog.image || "/placeholder.svg"}
                      alt={blog.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 384px"
                    />
                  </div>
                  <div className="p-4 flex-grow flex flex-col">
                    <h4 className="font-bold text-xl text-center mb-2">
                      {blog.title}
                    </h4>
                    <p className="text-slate-400 text-center mt-auto">
                      Published: {blog.date.toDateString()}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-8 mb-12">
            <nav className="flex items-center gap-1">
              <button
                onClick={() => paginate(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="px-3 py-1 rounded-md bg-dd text-ll disabled:opacity-50"
                aria-label="Previous page"
              >
                &laquo;
              </button>

              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => paginate(index + 1)}
                  className={`px-3 py-1 rounded-md ${
                    currentPage === index + 1
                      ? "bg-blue-600 text-white"
                      : "bg-dd text-ll"
                  }`}
                >
                  {index + 1}
                </button>
              ))}

              <button
                onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="px-3 py-1 rounded-md bg-dd text-ll disabled:opacity-50"
                aria-label="Next page"
              >
                &raquo;
              </button>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
}
