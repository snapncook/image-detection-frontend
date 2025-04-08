import ToggleButton from "@/components/base/ToggleButton";
import Image from "next/image";


interface RecipeProps {
    title: string;
    description: string;
    recipeText: string;
}

const Recipe: React.FC<RecipeProps> = ({
    title,
    description,
    recipeText,
}) => {
    return (
        <div className=''>
            <div className="flex flex-row justify-between gap-6">
                <p className="text-[8px] tablet:text-[10px] laptop:text-[12px]">{title}</p>
                <p className='text-[6px] tablet:text-[8px] laptop:text-[10px]'>{description}</p>
            </div>
            <div className=''>
                <ToggleButton buttonClassName='' icon={<Image src="/carret-down.svg" width="20" height="20" alt='' />}>
                    <div className=''>
                        <p className='text-[6px] tablet:text-[8px] laptop:text-[10px]'>{recipeText}</p>
                    </div>
                </ToggleButton>
            </div>
        </div>
    );
};

export default Recipe;