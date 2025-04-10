import Image from 'next/image';
import Recipe from './recipe';
import Button from '@/components/base/Button';
import { useRef, useState } from 'react';



const RecipeSection = () => {
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);

    const handleButtonClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleGenButtonClick = () => {
        if (!previewUrl) {
            alert("Пожалуйста, загрузите изображение.");
        } else {
            console.log("Ок");
        }
    }

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
                            <Recipe title={'Борщ'} description={'Борщ с домашней булочкой, очень вкусно'} recipeText={`Подготовить продукты. Говядину нарезать крупными кусками. Залить мясо в кастрюле холодной водой, довести до кипения, снять пену. 
                            Варить бульон примерно 1,5 часа на небольшом огне. В конце варки посолить. Свёклу очистить, нарезать соломкой. Морковь очистить, натереть на крупной терке.
                            Лук очистить, мелко нарезать. Капусту нашинковать. Картофель очистить, нарезать кубиками.
                            На сковороде разогреть растительное масло. Свёклу, морковь и лук выложить на сковороду и тушить на среднем огне (пассеровать), помешивая, 5-7 минут.
                            В конце добавить уксус и томатную пасту. Перемешать. Готовить овощи ещё 3-4 минуты, помешивая.
                            В кипящий бульон выложить картофель и капусту, варить 10 минут. (Молодую капусту добавлять за 5 минут до окончания приготовления борща.)
                            Затем добавить пассерованные овощи, лавровый лист и перец. Варить борщ с говядиной еще 5-7 минут.
                            Готовому борщу дать настояться 10-15 минут. Зелень нарезать.
                            Разлить борщ по тарелкам, заправить сметаной и посыпать зеленью.`} />
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
                                            <div className='flex flex-row items-center'>
                                                <p>Банан</p>
                                                <Button title={<Image src="/remove.svg" width="10" height="10" alt='' />} onClick={() => { }} buttonStyle="px-2 py-1 min-w-10" textStyle="" />
                                            </div>
                                            <Button title={<Image src="/add.svg" width="10" height="10" alt='' />} onClick={() => { }} buttonStyle="px-2 py-1 min-w-10" textStyle="" />
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

