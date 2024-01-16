import { Button } from "./ui/button";
import Link from "next/link";
interface EmptyStateProps {
  title: string;
  subtitle?: string;
}
const EmptyState: React.FC<EmptyStateProps> = ({ title, subtitle }) => {
  return (
    <div className="mt-20 text-center">
      <div className="text-2xl font-bold"> {title} </div>
      <div className="mt-2 font-light text-neutral-500"> {subtitle} </div>
      <Button className="mt-3" asChild>
        <Link href="/">Go back home.</Link>
      </Button>
    </div>
  );
};

export default EmptyState;
