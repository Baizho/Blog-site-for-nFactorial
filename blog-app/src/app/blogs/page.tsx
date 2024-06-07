import Image from "next/image";
import BlogListGrid from "@/components/BlogListGrid";

export default function about() {
  return (
    <>
      <h1 className="text-center text-5xl p-4">All Blogs</h1>
      <div className="flex justify-center px-20">
        <BlogListGrid />
      </div>
    </>
  );
}
