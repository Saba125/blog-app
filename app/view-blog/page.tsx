import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import prisma from "@/lib/prisma";
import Container from "@/components/Container";
import SinglePost from "@/components/SinglePost";
const ViewBlog = async () => {
  const session = await getServerSession(authOptions);
  const userEmail = session?.user?.email as string;
  const userBlogs = await prisma.post.findMany({
    where: { userEmail },
  });
  console.log(userBlogs);
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
