import Container from "../Container";
import Heading from "../Heading";
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
        <Heading title="Popular categories"  medium />
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
