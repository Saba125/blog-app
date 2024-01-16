import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { Post } from "@prisma/client";
import { formatTime } from "@/lib/format";
interface SinglePostProps {
  isReadMore: boolean;
  post: Post | null;
}
const SinglePost: React.FC<SinglePostProps> = ({
  post,
  isReadMore,
}) => {
  return (
    <div>
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
          <Image className="object-cover" src={post?.imageUrl || "/p1.jpeg"} fill alt="Post-img" />
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
              <span>Author: {post?.userEmail}</span>
              <span className="pr-5">
                {" "}
                Created: {formatTime(post?.createdAt)}{" "}
              </span>
            </div>
          <h3 className="text-2xl font-bold">{post?.title}</h3>
          <p className="text-lg font-light "> {isReadMore ? post?.body.substring(0, 220) : post?.body}... </p>
          {isReadMore && (
            <div>
              <Button variant="destructive">Read More</Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
