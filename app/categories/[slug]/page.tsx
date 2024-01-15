import prisma from "@/lib/prisma";
const Category = async ({ params: { slug } }: { params: { slug: string } }) => {
  const category = await prisma.category.findUnique({
    where: { catName: slug },
    include: { Post: true },
  });
  const post = category?.Post;
  return (
    <div>
        {post?.map((post) => (
            <div>
                <h3> {post.title    } </h3>
            </div>
        ))}
    </div>
  )

};

export default Category;
