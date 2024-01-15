import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
interface CategoryItemProps {
  catName: string;
  imageUrl: string;
}
const CategoryItem: React.FC<CategoryItemProps> = ({ catName, imageUrl }) => {
  return (
    <Link
      href={`/categories/${catName}`}
      className={clsx(
        "flex",
        "h-[80px]",
        "w-full",
        "items-center",
        "justify-center",
        "gap-[10px]",
        "rounded-lg",
        "sm:w-[45%]",
        "md:w-[15%]",
        catName === "Coding" && "bg-[#5e4fff31]",
        catName === "Fashion" && "bg-[#da85c731]",
        catName === "Food" && "bg-[#7fb88133]",
        catName === "Travel" && "bg-[#ff795736]",
        catName === "Culture" && "bg-[#ffb04f45]",
        catName === "Style" && "bg-[#57c4ff31]",
      )}
    >
      <span> {catName} </span>
      <Image
        src={imageUrl}
        width={32}
        height={32}
        alt={catName}
        className=" block h-[32px] w-[32px]  rounded-[50%] "
      />
    </Link>
  );
};

export default CategoryItem;
