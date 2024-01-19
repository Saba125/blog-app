import React from "react";
import SinglePost from "../SinglePost";
import prisma from "@/lib/prisma";
import Pagination from "../Inputs/Pagination";
interface PostContentProps {
  page: string;
}
const PostContent: React.FC<PostContentProps> = async ({ page }) => {
  const postPerPage = 2;
  const pageInt = parseInt(page) || 1;
  const count = await prisma?.post.count();
  const totalPosts = count;
  const totalPage = Math.ceil(totalPosts / postPerPage);
  const posts = await prisma?.post.findMany({
    orderBy: { createdAt: "desc" },
    take: postPerPage,
    skip: postPerPage * (pageInt - 1),
  });
  return (
    <div>
      {posts?.map((post) => (
        <SinglePost isReadMore post={post} key={post.id} />
      ))}
      <Pagination totalPage={totalPage} page={pageInt} />
    </div>
  );
};

export default PostContent;
