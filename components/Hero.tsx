import Container from "./Container";
import Image from "next/image";
import prisma from "@/lib/prisma";
import { Button } from "./ui/button";
import SinglePost from "./SinglePost";
import { formatTime } from "@/lib/format";
const Hero = async () => {
  const singlePost = await prisma.post.findFirst();
  console.log(singlePost);
  return (
    <div className="mt-10">
      <Container>
        <h3 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl ">
          {" "}
          <b>Hey, Je dev here!</b> Discover my stories and creative ideas.{" "}
        </h3>
        {/* Content */}
        <div
          className="
      mt-5
      flex
      flex-row
      items-center
      justify-center
      gap-5
      "
        >
          {/* Image Container */}
          <div
            className="
        relative
        hidden
        h-[350px]  
        flex-1
        md:block
        "
          >
            <Image
              className="object-cover"
              src={singlePost?.imageUrl || "/p1.jpeg"}
              fill
              alt="Post-img"
            />
          </div>
          <div
            className="
        flex
        flex-1
        flex-col
        gap-3
        "
          >
            <div className="flex flex-row justify-between text-sm">
              <span>Author: {singlePost?.userEmail}</span>
              <span className="pr-5">
                {" "}
                Created: {formatTime(singlePost?.createdAt)}{" "}
              </span>
            </div>
            <h3 className="text-2xl font-bold">{singlePost?.title}</h3>
            <p className="text-lg font-light ">{singlePost?.body}</p>
            <div>
              <Button variant="destructive">Read More</Button>
            </div>
          </div>
        </div>
      </Container>
      {/* Posts */}
    </div>
  );
};

export default Hero;
