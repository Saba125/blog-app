import Container from "@/components/Container";
import EmptyState from "@/components/EmptyState";
import SinglePost from "@/components/SinglePost";
import prisma from "@/lib/prisma";
import { Metadata } from "next";

const Category = async ({ params: { slug } }: { params: { slug: string } }) => {
  const category = await prisma.category.findUnique({
    where: { catName: slug },
    include: { Post: true },
  });
  const post = category?.Post;
  if (post?.length === 0) {
    return (
      <EmptyState
        title="No posts found."
        subtitle="Please select another category!"
      />
    );
  }
  return (
    <div className="mt-10">
      <Container>
        {post?.map((post) => <SinglePost isReadMore={false} key={post.id} post={post} />)}
      </Container>
    </div>
  );
};

export default Category;
