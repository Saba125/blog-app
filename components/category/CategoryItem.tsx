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
    w-[15%]
    items-center
    justify-center
    gap-[10px]
    rounded-lg
    bg-rose-500
  "
    >
      {catName}
      <Image
        src={imageUrl}
        width={32}
        height={32}
        alt={catName}
        className="rounded-full object-cover"
      />
    </div>
  );
};

export default CategoryItem;
