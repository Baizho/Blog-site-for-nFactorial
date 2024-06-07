import Image from "next/image";
import Head from "next/head";
import blogs from "../../../../data.json";

interface pathProps {
  params: {
    id: number;
    title: string;
  };
}

export default function blogPage({ params }: pathProps) {
  const blog = blogs[params.id - 1];
  return (
    <>
      <Head>
        <title>{blog.title}</title>
        <meta name="description" content={blog.description} />
        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={blog.description} />
      </Head>
      <div className="flex justify-center">
        <div className="h-60 w-1/2 bg-white rounded-lg pt-4 px-4">
          <div className="h-2/6 w-full xl:text-4xl lg:text-xl font-serif">
            {blog.title}
          </div>
          <div className="h-3/6 py-4 flex items-center justify-start w-full text-base font-serif">
            {blog.description}
          </div>
          <div className="h-1/7 flex w-full justify-between text-sm ">
            <div> {blog.date} </div>
            <div> By {blog.author} </div>
          </div>
        </div>
      </div>
    </>
  );
}
