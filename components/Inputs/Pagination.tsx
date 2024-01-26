"use client";
import { useRouter } from "next/navigation";
import Container from "../Container";
import { Button } from "../ui/button";
interface PaginationProps {
  page: number;
  totalPage: number;
}
const Pagination: React.FC<PaginationProps> = ({ page, totalPage }) => {
  const router = useRouter();

  return (
    <div className="mt-5 flex items-center justify-between ">
      <Button
        onClick={() => router.push(`?page=${page - 1}`)}
        variant="destructive"
        disabled={page === 1}
        size="lg"
      >
        {" "}
        Previous{" "}
      </Button>
      <Button
        onClick={() => router.push(`?page=${page + 1}`)}
        variant="destructive"
        disabled={totalPage === page}
        size="lg"
      >
        {" "}
        Next{" "}
      </Button>
    </div>
  );
};

export default Pagination;
