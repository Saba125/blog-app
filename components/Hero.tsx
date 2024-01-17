import Container from "./Container";
import Image from "next/image";
import prisma from "@/lib/prisma";
import { Button } from "./ui/button";
import SinglePost from "./SinglePost";
import { formatTime } from "@/lib/format";
import { useRouter } from "next/navigation";
import Link from "next/link";
const Hero = async () => {
  const singlePost = await prisma.post.findFirst();
  return (
    <div className="mt-10">
      <Container>
        <h3 className=" text-xl sm:text-2xl md:text-4xl lg:text-5xl ">
          {" "}
          <b>Hey, Je dev here!</b> Discover my stories and creative ideas.{" "}
        </h3>
        <SinglePost isReadMore post={singlePost} />
      </Container>
      {/* Posts */}
    </div>
  );
};

export default Hero;
