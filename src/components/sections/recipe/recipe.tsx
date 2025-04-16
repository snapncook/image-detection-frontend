import ToggleButton from "@/components/base/ToggleButton";
import Image from "next/image";

import {RecipeType} from './types'

const Recipe: React.FC<RecipeType> = ({
    title,
    ingredients,
    steps,
}) => {
    return (
        <div className=''>
            <div className="flex flex-row justify-between gap-6">
                <p className="text-[8px] tablet:text-[10px] laptop:text-[12px]">{title}</p>
                <p className='text-[6px] tablet:text-[8px] laptop:text-[10px]'>{ingredients}</p>
            </div>
            <div className=''>
                <ToggleButton buttonClassName='' icon={<Image src="/carret-down.svg" width="20" height="20" alt='' />}>
                    <div className=''>
                        <p className='text-[6px] tablet:text-[8px] laptop:text-[10px]'>{steps}</p>
                    </div>
                </ToggleButton>
            </div>
        </div>
    );
};

export default Recipe;