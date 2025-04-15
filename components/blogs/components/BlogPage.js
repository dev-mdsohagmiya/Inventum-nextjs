"use client";

import CallButton from "@/hooks/CallButton";
import parse from "html-react-parser";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import blogs from "../blogs/blogs-4.json";

// Utility function to create slug from title - moved outside component
const createSlug = (title) => {
  return title
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/:/g, "")
    .replace(/[^\w-]+/g, "");
};

// Pre-process blogs with slugs to avoid recalculation
const blogsWithSlugs = blogs.map((blog) => ({
  ...blog,
  slug: createSlug(blog.title),
  date: new Date(blog.date),
}));

export default function BlogPage() {
  const { blog: slugParam } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  // Find current blog based on slug - memoized to prevent recalculation
  const { currentBlog, blogIndex } = useMemo(() => {
    if (!slugParam) return { currentBlog: null, blogIndex: -1 };

    const index = blogsWithSlugs.findIndex((b) => b.slug === slugParam);
    return {
      currentBlog: index !== -1 ? blogsWithSlugs[index] : null,
      blogIndex: index,
    };
  }, [slugParam]);

  // Calculate reading time - memoized to prevent recalculation
  const readingTime = useMemo(() => {
    if (!currentBlog) return 0;

    // More efficient text extraction without DOM manipulation
    const text = currentBlog.blog.replace(/<[^>]*>/g, " ");
    const wordsPerMinute = 200;
    const words = text.split(/\s+/).filter(Boolean).length;
    return Math.ceil(words / wordsPerMinute);
  }, [currentBlog]);

  // Calculate related blogs - memoized to prevent recalculation
  const topRelatedBlogs = useMemo(() => {
    if (blogIndex === -1) return [];

    // Extract text without DOM manipulation
    const extractText = (html) => html.replace(/<[^>]*>/g, " ");

    const targetText = extractText(blogs[blogIndex].blog);
    // Create a set of significant words (longer than 4 chars) for better relevancy
    const targetWords = new Set(
      targetText.toLowerCase().match(/\b\w{4,}\b/g) || []
    );

    // Calculate relevancy scores more efficiently
    return blogsWithSlugs
      .map((blog, index) => {
        if (index === blogIndex) return { score: 0, blog };

        const blogText = extractText(blog.blog);
        const blogWords = blogText.toLowerCase().match(/\b\w{4,}\b/g) || [];

        // Count common significant words
        let score = 0;
        for (const word of blogWords) {
          if (targetWords.has(word)) score++;
        }

        return { score, blog };
      })
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 3)
      .map((item) => item.blog);
  }, [blogIndex]);

  // Set loading state
  useEffect(() => {
    if (currentBlog) {
      setIsLoading(false);
    }
  }, [currentBlog]);

  if (isLoading) {
    return (
      <div className="py-28 bg-dl min-h-screen flex items-center justify-center">
        <div className="text-ll text-center">
          <div className="animate-pulse">Loading blog...</div>
        </div>
      </div>
    );
  }

  if (!currentBlog) {
    return (
      <div className="py-28 pt-28 lg:pt-[12rem]  bg-dl min-h-screen flex items-center justify-center">
        <div className="text-ll text-center">
          <h2 className="text-2xl font-bold mb-4">Blog not found</h2>
          <Link href="/blogs" className="text-pg hover:underline">
            Return to blogs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-28 pt-28 lg:pt-[12rem]  bg-dl text-ll min-h-screen">
      <div className="max-w-[70ch] mx-auto px-4">
        <div className="mb-6">
          <Link
            href="/blogs"
            className="inline-block hover:text-pg transition-colors"
          >
            ← Back to Blogs
          </Link>
        </div>

        <article className="prose prose-purple prose-invert prose-headings:bg-pg prose-headings:bg-clip-text prose-headings:text-transparent mx-auto">
          {currentBlog.image && (
            <div className="relative w-full h-64 md:h-80 mb-6 rounded-xl overflow-hidden">
              <Image
                src={currentBlog.image || "/placeholder.svg"}
                alt={currentBlog.title}
                fill
                sizes="(max-width: 768px) 100vw, 700px"
                className="object-cover rounded-xl"
                priority
              />
            </div>
          )}

          <div className="flex items-center text-sm text-gray-400 mb-6">
            <span>{readingTime} min read</span>
            <span className="mx-2">·</span>
            <span>{currentBlog.date.toDateString()}</span>
          </div>

          <div className="blog-content">{parse(currentBlog.blog)}</div>
        </article>

        <div className="bg-dd rounded-xl prose prose-headings:bg-pg prose-headings:bg-clip-text prose-headings:text-transparent mx-auto p-6 my-8 prose-invert">
          <h3 className="mt-0">Disclaimer:</h3>
          <p>
            These blogs were written using the latest generative AI. The
            information presented here might deviate from our expert knowledge.
            If you have any questions regarding Online Schooling, please do not
            hesitate to contact us!
          </p>
          <div className="flex mt-6 gap-3 justify-center">
            <CallButton textSize="text-md" />
            <a
              data-tooltip-id="enquiry"
              data-tooltip-content="Any questions?"
              className="text-center text-md hover:scale-[1.05] transition-all ease-in-out bg-pg px-4 rounded-xl items-center py-2 justify-end w-max h-max"
              href="https://tally.so#tally-open=wgdboD&tally-overlay=1&tally-emoji-text=👋&tally-emoji-animation=wave"
            >
              <span className="text-ll my-auto">Ask us a question!</span>
            </a>
          </div>
        </div>

        {topRelatedBlogs.length > 0 && (
          <>
            <h2 className="bg-clip-text text-transparent bg-pg font-bold text-3xl pb-6 md:text-start text-center">
              Blogs you might be interested in:
            </h2>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {topRelatedBlogs.map((blog) => (
                <div
                  key={blog.slug}
                  className="rounded-xl bg-dd text-ll hover:shadow-lg transition-shadow duration-300"
                >
                  <Link href={`/blogs/${blog.slug}`} className="block h-full">
                    <div className="relative h-40 w-full">
                      <Image
                        src={blog.image || "/placeholder.svg"}
                        alt={blog.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 300px"
                        className="object-cover rounded-t-xl"
                      />
                    </div>
                    <h4 className="font-bold text-lg p-4 text-center line-clamp-2">
                      {blog.title}
                    </h4>
                  </Link>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
