import { FC } from "react";
import Image from 'next/image';

type MenuElementProps = {
  title: string;
  id: string,
  style: string;
};

const MenuComponent: FC<{ data: MenuElementProps[] }> = ({ data }) => {
  const getElems = (data: MenuElementProps[]) => {
    return data.map((item, _) => (
      <a href={`#${item.id}`} className={item.style} key={item.id}>
        <p>{item.title}</p>
      </a>
    ));
  };

  return (
    <div className="bg-light_pink w-full h-[10vh] flex flex-row justify-around gap-4 items-center justify-center p-10 text-center">
      <Image
        src="/logo.svg"
        alt="logo"
        className="w-16 h-auto tablet:w-20 laptop:w-24"
        width={60}
        height={60}
      />
      {getElems(data)}
    </div>
  );
};

export default MenuComponent;