import { FC } from "react";

type MenuElementProps = {
    title: string;
    style: string;
};

const MenuComponent: FC<{data: MenuElementProps[]}> = ({ data }) => {
    const getElems = (data: MenuElementProps[]) => {
        return data.map((item, _) => (
          <p className={item.style}>
            {item.title}
          </p>
        ));
      };
    
      return (
        <div className="bg-light_pink w-full h-[10vh] flex flex-row gap-4 items-center justify-center p-10 text-center">
            {getElems(data)}
        </div>
      );
    };

export default MenuComponent;