import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { Post } from "@prisma/client";
interface SinglePostProps {
  post: Post;
}
const SinglePost: React.FC<SinglePostProps> = ({
  post: { createdAt, title, imageUrl, userEmail, body },
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
          <Image className="object-cover" src={imageUrl} fill alt="Post-img" />
        </div>
        <div
          className="
        flex
        flex-1
        flex-col
        gap-3
        "
        >
          <h3 className="text-2xl font-bold">{title}</h3>
          <p className="text-lg font-light ">{body}</p>
          <div>
            <Button variant="destructive">Read More</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
