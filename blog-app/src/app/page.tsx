import Image from "next/image";
import BlogListHorizontal from "@/components/BlogListHorizontal";

export default function Home() {
  return (
    <div>
      <div className="flex w-full align-center justify-center px-16 pt-8 pb-4 text-5xl">
        Blog R Us
      </div>
      <div className="flex w-full justify-center text-lg text-gray-700">
        Welcome to the site. Feel free to look at the following blogs
      </div>
      <div className="flex w-full justify-start py-4 pt-12 px-20 text-xl">
        Popular
      </div>
      <div className="w-full px-20">
        <BlogListHorizontal />
      </div>
    </div>
  );
}
