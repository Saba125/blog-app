import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href="/"
      className="
        cursor-pointer
        text-5xl
        text-black
        dark:text-[#ddd]
        "
    >
      JeBlog
    </Link>
  );
};

export default Logo;
