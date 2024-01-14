import Image from "next/image";
interface CategoryItemProps {
  catName: string;
  imageUrl: string;
}
const CategoryItem: React.FC<CategoryItemProps> = ({ catName, imageUrl }) => {
  return (
    <div
      className="
      flex
      h-[80px]
      w-full
      items-center
      
    justify-center
    gap-[10px]
    rounded-lg
    bg-rose-500
    sm:w-[45%]
    md:w-[15%]
  "
    >
      <span> {catName} </span>
      <Image
        src={imageUrl}
        width={32}
        height={32}
        alt={catName}
        className=" block h-[32px] w-[32px]  rounded-[50%] "
      />
    </div>
  );
};

export default CategoryItem;
