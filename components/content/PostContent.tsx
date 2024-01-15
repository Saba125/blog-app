import React from "react";
import Container from "../Container";
import { Button } from "../ui/button";
import Image from "next/image";
import SinglePost from "../SinglePost";
interface Props {}

const PostContent = async (props: Props) => {
  const posts = await prisma?.post.findMany({
    orderBy: { createdAt: "desc" },
  });
  return (
    <div>{posts?.map((post) => <SinglePost post={post} key={post.id} />)}</div>
  );
};

export default PostContent;
