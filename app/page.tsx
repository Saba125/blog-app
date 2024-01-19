import Hero from "@/components/Hero";
import Image from "next/image";
import CategoryList from "@/components/category/CategoryList";
import Content from "@/components/content/Content";
interface Props {
  searchParams: {
    page: string;
  };
}
export default function Home({ searchParams: { page } }: Props) {
  const searchParams = new URLSearchParams({
    page: "1",
  });
  return (
    <main>
      <Hero />
      <CategoryList />
      <Content page={page} />
    </main>
  );
}
