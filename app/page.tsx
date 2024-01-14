import Hero from "@/components/Hero";
import Image from "next/image";
import CategoryList from "@/components/category/CategoryList";
export default function Home() {
  return (
    <main>
      <Hero />
      <CategoryList />
    </main>
  );
}
