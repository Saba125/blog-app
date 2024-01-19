import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import prisma from "@/lib/prisma";
import Container from "@/components/Container";
import SinglePost from "@/components/SinglePost";
import EmptyState from "@/components/EmptyState";
import { Button } from "@/components/ui/button";
const ViewBlog = async () => {
  const session = await getServerSession(authOptions);
  const userEmail = session?.user?.email as string;
  const userBlogs = await prisma.post.findMany({
    where: { userEmail },
  });
  if (userBlogs.length === 0) {
    return (
      <EmptyState
        title="User does not have any blogs created."
        subtitle="Create blog to see your created blogs."
      />
    );
  }
  return (
    <div>
      <Container>
        {userBlogs.map((blog, index) => (
          <SinglePost key={index} isReadMore post={blog} />
        ))}
      </Container>
    </div>
  );
};

export default ViewBlog;
