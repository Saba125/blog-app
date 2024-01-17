import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import prisma from "@/lib/prisma";
import Container from "@/components/Container";
import SinglePost from "@/components/SinglePost";
import EmptyState from "@/components/EmptyState";
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
        {userBlogs.map((blog) => (
          <SinglePost isReadMore post={blog} />
        ))}
      </Container>
    </div>
  );
};

export default ViewBlog;
