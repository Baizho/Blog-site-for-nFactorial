"use client";

import Image from "next/image";
import blogs from "../data.json";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function BlogListHorizontal() {
  return (
    <div className=" snap-x flex overflow-x-auto">
      {blogs.map((blog, index) => {
        return (
          <Link
            href={`blogs/${blog.id}/${blog.title.replaceAll(" ", "-")}`}
            key={index}
            className="snap-center min-w-[300px] p-4 pb-0 hover:bg-gray-200 bg-gray-100 h-52 border-x-[1px] border-y-[1px] shadow-xl mr-4 rounded-lg"
          >
            <div className=" h-2/6 text-base font-sans font-medium">
              {" "}
              {blog.title}{" "}
            </div>
            <div className="pb-4 h-3/6 text-sm">{blog.description}</div>
            <div className="flex h-1/6 justify-between text-sm">
              <div> {blog.date} </div>
              <div> By {blog.author} </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
