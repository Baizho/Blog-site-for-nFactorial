import Image from "next/image";
import blogs from "../../data.json";

export default function about() {
  return (
    <>
      <div className="flex justify-center text-5xl font-medium font-serif pt-4">
        Welcome to our site
      </div>
      <div className="flex justify-center text-xl font-medium font-serif p-4">
        Our mission is to bring blogs together
      </div>
      <div className="flex justify-center text-4xl font-medium font-serif pt-4">
        Say hello to our journalists
      </div>
      <div className="flex justify-center">
        <div className="grid w-1/2 xl:grid-cols-3 md:grid-cols-2">
          {blogs.map((blog, index) => {
            return (
              <div
                key={index}
                className="flex flex-col w-48 h-32 bg-gray-100 m-3 rounded"
              >
                <div className="h-2/3 border-2 bg-gray-200">*photo*</div>
                <div className="h-1/3 flex justify-center items-center">
                  {blog.author}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
