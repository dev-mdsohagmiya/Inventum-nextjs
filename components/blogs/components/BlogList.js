"use client";
import Link from "next/link";
import blogs from "../blogs/blogs-4.json";
export default function BlogList() {
  const slugs = blogs.map((blog) => {
    // Replace spaces with dashes and convert to lowercase
    return blog.title.replaceAll(/\s+/g, "-").replaceAll(":", "").toLowerCase();
  });

  const titles = blogs.map((blog) => {
    // Replace spaces with dashes and convert to lowercase
    return blog.title;
  });
  console.log(slugs, titles);

  return (
    <div className="bg-dl pt-28 min-h-screen">
      <div className="flex gap-5 flex-wrap justify-center">
        {titles.map((title, index) => {
          const date = new Date(blogs[index].date);

          return (
            <div className="max-w-xs rounded-xl bg-dd text-ll ">
              <Link href={`/blogs/${slugs[index]}`}>
                <img
                  className="w-full max-w-xs rounded-t-xl"
                  src={blogs[index].image}
                  alt=""
                ></img>
                <h4 className="font-bold text-xl text-center p-2">{title}</h4>
                <p className="text-slate-400 text-center pb-2">
                  Published: {date.toDateString()}
                </p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
