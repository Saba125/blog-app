import Container from "../Container";
import CategoryItem from "./CategoryItem";
const categories = [
  {
    catName: "Coding",
    imageUrl: "/coding.png",
  },
  {
    catName: "Fashion",
    imageUrl: "/fashion.png",
  },
  {
    catName: "Style",
    imageUrl: "/style.png",
  },
  {
    catName: "Food",
    imageUrl: "/food.png",
  },
  {
    catName: "Travel",
    imageUrl: "/travel.png",
  },
  {
    catName: "Culture",
    imageUrl: "/culture.png",
  },
];
const CategoryList = () => {
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
