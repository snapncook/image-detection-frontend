import MenuComponent from "@/components/base/Menu";
import InstructionsSection from "@/components/sections/instrcutions";
import MainSection from "@/components/sections/main";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative">
      <MenuComponent data={[{title: "Инструкция", id: "instructions", style: "text-white font-rubik-mono-one text-xs tablet:text-sm laptop:text-lg"}, {title: "Идеальный ужин", id: "create", style: "text-brown_pink font-rubik-mono-one text-xs tablet:text-sm laptop:text-lg"}]}/>
      <MainSection/>
      <InstructionsSection/>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        {/* ... footer links ... */}
      </footer>
    </div>

  );
}