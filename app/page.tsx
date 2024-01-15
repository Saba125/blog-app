import Hero from "@/components/Hero";
import Image from "next/image";
import CategoryList from "@/components/category/CategoryList";
import Content from "@/components/content/Content";
export default function Home() {
  return (
    <main>
      <Hero />
      <CategoryList />
      <Content />
    </main>
  );
}
