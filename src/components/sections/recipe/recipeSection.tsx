import Image from 'next/image';
import Recipe from './recipe';
import Button from '@/components/base/Button';
import { useRef, useState } from 'react';

import { RecipeSectionType, RecipeType } from './types'




const RecipeSection: React.FC<RecipeSectionType> = ({ initialObjects = [], inititalRecipes = [] }) => {
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const [objects, setObjects] = useState<string[]>(initialObjects);
    const [recipes, setRecipes] = useState<RecipeType[]>(inititalRecipes);

    const handleButtonClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const fetchRecipe = async (ingredients: string[]) => {
        try {
            const response = await fetch('http://localhost:8080/recipes/suggest', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ingredients }),
            });
            if (!response.ok) {
                throw new Error(`Error fetching recipe: ${response.status}`);
            }
            const recipes = await response.json();
            setRecipes(recipes);
        } catch (error) {
            console.error("Error fetching recipe:", error);
        }
    };

    const handleGenButtonClick = () => {
        if (!selectedFile) {
            alert("Пожалуйста, загрузите изображение.");
            return;
        }

        const formData = new FormData();
        formData.append("image", selectedFile);

        fetch("http://localhost:8080/detect", {
            method: "POST",
            body: formData
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                const detectedObjects = data.objects;
                setObjects(detectedObjects || []);
                setPreviewUrl(data.annotated_image);
                fetchRecipe(detectedObjects || []);
            })
            .catch(error => {
                console.error("Error during fetching:", error);
            });
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setSelectedFile(file);
            const url = URL.createObjectURL(file);
            setPreviewUrl(url);
        }
    };

    return (
        <div className="relative" id="recipe">
            <div className="bg-[url('/background-recipe.svg')] tablet:bg-[url('/background-recipe.svg')] bg-cover bg-no-repeat w-full min-h-[100vh] mt-[-20vh] relative"
                style={{ backgroundSize: 'cover' }}>
                <div className="flex flex-col tablet:flex-row laptop:flex-row desktop:flex-row pt-[20vh] w-full px-10">
                    <div className="flex flex-col mt-4 order-2 tablet:order-1 laptop:order-1 desktop:order-1 w-full tablet:w-1/2 laptop:w-1/2">
                        <p className="text-white font-rubik-mono-one text-[12px] tablet:text-[16px] laptop:text-[24px]">Рецепты</p>
                        <p className='text-light text-[10px] tablet:text-[12px] laptop:text-[14px]'>Выберите любой понравившийся рецепт</p>
                        <div className='flex flex-col gap-4 overflow-y-scroll max-h-[60vh] scrollbar-none relative text-white mt-2'>
                            {recipes.length > 0 ? (
                                recipes.map((recipe, index) => (
                                    <Recipe title={recipe.title} ingredients={recipe.ingredients} steps={recipe.steps} key={index}/>
                                ))) : <p className='text-white text-[6px] tablet:text-[8px] laptop:text-[10px]'>Список рецептов пуст</p>}

                        </div>
                    </div>
                    <div className='w-full order-1 tablet:order-2 laptop:order-2 desktop:order-2 relative tablet:w-1/2 laptop:w-1/2'>
                        <div className='tablet:m-4 laptop:m-4 desktop:m-4 w-full aspect-[1.5] bg-beige rounded-xl'>
                            <div className='flex flex-col'>
                                <div className='flex flex-row w-full p-4 gap-4 items-center justify-center'>
                                    <div className='aspect-[1] bg-light_beige rounded-xl w-full flex items-center justify-center cursor-pointer' onClick={handleButtonClick}>
                                        {previewUrl ? (
                                            <img
                                                src={previewUrl}
                                                alt="Preview"
                                                className='w-full h-full rounded-xl object-cover'
                                            />
                                        ) : (
                                            <Image
                                                src="/upload.svg"
                                                width="40"
                                                height="40"
                                                alt='Upload icon'
                                                className='w-1/2'
                                            />
                                        )}
                                    </div>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        ref={fileInputRef}
                                        onChange={handleFileChange}
                                        className="hidden"
                                    />
                                    <div className='flex-col w-1/2'>
                                        <p className='text-dark_beige font-shantell-sans-regular text-[8px] tablet:text-[10px] laptop:text-[12px]'>Загрузи фотографию продуктов, нажми на кнопку "Подобрать" и мы подберем рецепты по оимеющимся продуктам</p>
                                        <Button title="Подобрать" onClick={handleGenButtonClick} buttonStyle="inline-block px-4 py-1 bg-dark_green text-white font-rubik-mono-one rounded-full" textStyle="text-white text-[8px]" />
                                    </div>
                                </div>
                                <div className='p-4 w-full box-border'>
                                    <div className='rounded-xl bg-light_beige aspect-[10] flex items-center h-full'>
                                        <div className='flex justify-start flex-row overflow-x-scroll text-dark_green space-x-2 p-4 text-[8px] tablet:text-[10px] laptop:text-[12px] scrollbar-none'>
                                            {objects.length > 0 ? (
                                                objects.map((object, index) => (
                                                    <div key={index} className='flex flex-row items-center'>
                                                        <p>{object}</p>
                                                        <Button title={<Image src="/remove.svg" width="10" height="10" alt='' />} onClick={() => { }} buttonStyle="px-2 py-1 min-w-10" textStyle="" />
                                                    </div>
                                                ))
                                            ) : (
                                                <p className="text-dark_green text-[8px] tablet:text-[10px] laptop:text-[12px]">Список продуктов пуст.</p>
                                            )}
                                            {objects.length > 0 ?
                                                (<Button title={<Image src="/add.svg" width="10" height="10" alt='' />} onClick={() => { }} buttonStyle="px-2 py-1 min-w-10" textStyle="" />)
                                                : ""
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default RecipeSection;

