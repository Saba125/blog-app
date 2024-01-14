import Container from "../Container";
import CategoryItem from "./CategoryItem";
import prisma from "@/lib/prisma";
const CategoryList = async () => {
  const categories = await prisma.category.findMany();
  return (
    <div
      className="
  mt-6
  "
    >
      <Container>
        <h3
          className="
          text-xl
          font-bold
          sm:text-xl
        md:text-2xl
        "
        >
          Popular categories
        </h3>
        <div
          className="
        mt-4
        flex
        flex-row
        flex-wrap  
        justify-between
        gap-[10px]
        "
        >
          {categories.map((category) => {
            return (
              <CategoryItem
                key={category.catName}
                catName={category.catName}
                imageUrl={category.imageUrl}
              />
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default CategoryList;
