import Button from "@/components/base/Button";

const InstructionsSection = () => {
    return (
        <div className="relative" id="instructions">
            <div className="bg-[url('/background-instructions.svg')] tablet:bg-[url('/background-instructions-tablet.svg')] bg-cover bg-no-repeat w-full min-h-[120vh] mt-[-20vh] z-0 relative"
                style={{ backgroundSize: 'cover', height: '100vh' }}>
                <div className="flex items-center justify-center h-screen">
                    <div className="relative mt-[15vh]">
                        <div className="bg-[url('/rect.svg')] bg-no-repeat h-[50vw] tablet:h-[30vw] laptop:h-[30vw] w-[50vw] tablet:w-[30vw] laptop:w-[30vw]"
                            style={{ backgroundSize: 'contain' }}>
                        </div>
                        <div className="absolute -right-[25vw] tablet:-right-[20vw] laptop:-right-[15vw] bottom-1/2 transform translate-y-1/2 bg-[url('/person.svg')] bg-no-repeat h-[50vw] z-10 tablet:h-[30vw] laptop:h-[35vw] w-[50vw] tablet:w-[35vw] laptop:w-[30vw]"
                            style={{ backgroundSize: 'contain' }}>
                        </div>
                        <div className=" pl-10 w-[45vw] tablet:w-[35vw] laptop:w-[25vw] absolute -left-[20vw] tablet:-left-[20vw] laptop:-left-[15vw] transform translate-y-1/2 bottom-1/2">
                            <p className="text-[12px] tablet:text-[16px] laptop:text-[24px] font-rubik-mono-one whitespace-nowrap text-dark_green">Как это работает?</p>
                            <p className="text-[8px] tablet:text-[12px] laptop:text-[14px] font-shantell-sans-regular  text-white">Наведи камеру телефона и сделай фото своего холодильника, загрузи на наш сайт, выбери категорию рецепта, модель распознает продукты и предложит подходящий рецепт. Наслаждайся вкусной едой...</p>
                            <div className="pl-2">
                                <Button title="Начать" id="recipe" buttonStyle="inline-block px-4 py-1 bg-pink text-white font-rubik-mono-one rounded-full" textStyle="text-white text-[8px]" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default InstructionsSection;

