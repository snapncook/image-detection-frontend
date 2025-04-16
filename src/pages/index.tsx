import Footer from "@/components/base/footer";
import MenuComponent from "@/components/base/Menu";
import InstructionsSection from "@/components/sections/instrcutions";
import MainSection from "@/components/sections/main";
import RecipeSection from "@/components/sections/recipe/recipeSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative">
      <MenuComponent data={[{ title: "Инструкция", id: "instructions", style: "text-white font-rubik-mono-one text-xs tablet:text-sm laptop:text-lg" }, { title: "Идеальный ужин", id: "recipe", style: "text-brown_pink font-rubik-mono-one text-xs tablet:text-sm laptop:text-lg" }]} />
      <MainSection />
      <InstructionsSection />
      <RecipeSection   
      initialObjects={[]} 
      inititalRecipes={[]} />

      <Footer />
    </div>

  );
}