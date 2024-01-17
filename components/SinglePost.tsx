import { CiAlarmOn } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import { TbCategory } from "react-icons/tb";
import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { Post } from "@prisma/client";
import { formatTime } from "@/lib/format";
import Link from "next/link";
interface SinglePostProps {
  isReadMore: boolean;
  post: Post | null;
  redirect?: boolean;
}
const SinglePost: React.FC<SinglePostProps> = ({
  post,
  isReadMore,
  redirect,
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
          <Image
            className="object-cover"
            src={post?.imageUrl || "/p1.jpeg"}
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
          <p className="flex items-center text-red-500  ">
            <TbCategory size={26} /> - {post?.catName}
          </p>
          <div className="flex flex-row justify-between text-sm">
            <span className="flex  flex-row items-center gap-1">
              {" "}
              <FaUserCircle size={26} /> - {post?.userEmail}
            </span>
            <span className="pr-5">
              {" "}
              {post && (
                <div className="flex flex-row items-center gap-1 text-neutral-400">
                  {" "}
                  <CiAlarmOn size={26} /> - {formatTime(post.createdAt)}
                </div>
              )}
            </span>
          </div>
          <h3 className="text-2xl font-bold">{post?.title}</h3>
          <p className="text-lg font-light ">
            {" "}
            {isReadMore ? post?.body.substring(0, 220) : post?.body}...{" "}
          </p>
          {isReadMore && (
            <div>
              <Button asChild variant="destructive">
                <Link href={`/post/${post?.id}`}>Read more...</Link>
              </Button>
            </div>
          )}
          {redirect && (
            <div>
              <Button asChild variant="outline">
                <Link href={`/`}>Back to home.</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
