import MenuComponent from "@/components/base/Menu";
import MainSection from "@/components/sections/main";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative">
      <MenuComponent data={[{title: "Как это работает?", style: "text-white font-rubik-mono-one text-xs"}, {title: "Идеальный ужин в один клик", style: "text-brown_pink font-rubik-mono-one text-xs"}]}/>
      <MainSection/>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        {/* ... footer links ... */}
      </footer>
    </div>

  );
}