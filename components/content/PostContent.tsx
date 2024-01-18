import React from "react";
import SinglePost from "../SinglePost";
interface Props {}

const PostContent = async (props: Props) => {
  const posts = await prisma?.post.findMany({
    orderBy: { createdAt: "desc" },
  });
  return (
    <div>
      {posts?.map((post) => (
        <SinglePost isReadMore post={post} key={post.id} />
      ))}
    </div>
  );
};

export default PostContent;
