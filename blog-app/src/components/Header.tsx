import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <div className="flex border-2 w-full h-16 items-center ">
        <Link href="/" className="pl-8">
          Home
        </Link>
        <Link href="/about" className="pl-8">
          About
        </Link>
        <Link href="/blogs" className="pl-8">
          Blogs
        </Link>
      </div>
    </>
  );
}
