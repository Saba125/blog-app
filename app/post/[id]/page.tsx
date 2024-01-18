import Container from "@/components/Container";
import EmptyState from "@/components/EmptyState";
import SinglePost from "@/components/SinglePost";
import prisma from "@/lib/prisma";
const PostPage = async ({
  params: { id },
}: {
  params: {
    id: string;
  };
}) => {
  const post = await prisma.post.findUnique({
    where: { id },
  });
  if (!post) {
    <EmptyState
      title="No posts found"
      subtitle="Please choose another post."
    />;
  }
  return (
    <div className="mt-10">
      <Container>
        <SinglePost redirect isReadMore={false} post={post} />
      </Container>
    </div>
  );
};

export default PostPage;
