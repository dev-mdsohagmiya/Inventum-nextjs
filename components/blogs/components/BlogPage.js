"use client";

import CallButton from "@/hooks/CallButton";
import parse from "html-react-parser";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import blogs from "../blogs/blogs-4.json";

function calculateReadingTime(text) {
  const wordsPerMinute = 200;
  const words = text.split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

function extractText(html) {
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = html;
  return tempDiv.textContent || tempDiv.innerText || "";
}

function calculateRelevancyScores(blogs, targetBlogIndex) {
  const targetText = extractText(blogs[targetBlogIndex].blog);
  const targetWords = new Set(targetText.toLowerCase().match(/\w+/g));

  const calculateScore = (text) => {
    const words = new Set(text.toLowerCase().match(/\w+/g));
    let common = 0;
    targetWords.forEach((word) => {
      if (words.has(word)) common++;
    });
    return common;
  };

  return blogs
    .map((blog, index) => ({
      score: calculateScore(extractText(blog.blog)),
      index,
    }))
    .filter((_, index) => index !== targetBlogIndex)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);
}

export default function BlogPage() {
  const { blog } = useParams();
  const [currentBlog, setCurrentBlog] = useState(null);
  const [topRelatedBlogs, setTopRelatedBlogs] = useState([]);

  useEffect(() => {
    console.log("Blog param:", blog);

    if (!blog) return;

    const blogIndex = blogs.findIndex(
      (b) =>
        b.title.toLowerCase().replace(/\s+/g, "-").replace(/:/g, "") === blog
    );

    console.log("Matched index:", blogIndex);

    if (blogIndex !== -1) {
      setCurrentBlog(blogs[blogIndex]);
      const related = calculateRelevancyScores(blogs, blogIndex);
      setTopRelatedBlogs(related.map((item) => blogs[item.index]));
    } else {
      setCurrentBlog(null);
    }
  }, [blog]);

  if (!currentBlog)
    return <div className="text-white py-20 text-center">Loading blog...</div>;

  return (
    <div className="py-28 bg-dl text-ll">
      <div className="max-w-[70ch] mx-auto">
        <div className="mx-auto w-max">
          <a href="/blogs">Go Back</a>
        </div>

        <article className="prose prose-purple prose-invert prose-headings:bg-pg prose-headings:bg-clip-text prose-headings:text-transparent p-4 mx-auto">
          {currentBlog.image && (
            <img className="rounded-xl" src={currentBlog.image} alt="" />
          )}
          <div className="block space-y-0 -mt-5">
            <p>
              {calculateReadingTime(extractText(currentBlog.blog))} min read ·{" "}
              {new Date(currentBlog.date).toDateString()}
            </p>
          </div>
          {parse(currentBlog.blog)}
        </article>

        <div className="bg-dd rounded-xl prose prose-headings:bg-pg prose-headings:bg-clip-text prose-headings:text-transparent mx-auto p-4 m-5 prose-invert">
          <h3>Disclaimer:</h3>
          <p>
            These blogs were written using the latest generative AI. The
            information presented here might deviate from our expert knowledge.
            If you have any questions regarding Online Schooling, please do not
            hesitate to contact us!
          </p>
          <div className="flex mt-8 lg:mt-3 gap-2 justify-center">
            <CallButton textSize="text-md" />
            <a
              data-tooltip-id="enquiry"
              data-tooltip-content="Any questions?"
              className="text-center text-md hover:scale-[1.05] transition-all ease-in-out bg-pg px-2 rounded-xl items-center py-2 justify-end w-max h-max"
              href="https://tally.so#tally-open=wgdboD&tally-overlay=1&tally-emoji-text=👋&tally-emoji-animation=wave"
            >
              <span className="text-ll my-auto">Ask us a question!</span>
            </a>
          </div>
        </div>

        <h2 className="bg-clip-text text-transparent bg-pg font-bold text-3xl space-y-4 pb-4 md:text-start text-center">
          Blogs you might be interested in:
        </h2>

        <div className="flex flex-col md:flex-row justify-center gap-3 mx-auto max-w-[80ch]">
          {topRelatedBlogs.map((blog, index) => {
            const blogSlug = blog.title
              .toLowerCase()
              .replace(/\s+/g, "-")
              .replace(/:/g, "");
            return (
              <div
                key={index}
                className="max-w-[15rem] md:flex text-center rounded-xl bg-dd text-ll text-xl mx-auto"
              >
                <a href={`/blogs/${blogSlug}`}>
                  <img
                    className="w-full max-w-xs rounded-t-xl"
                    src={blog.image}
                    alt=""
                  />
                  <h4 className="font-bold text-xl text-center p-2">
                    {blog.title}
                  </h4>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
