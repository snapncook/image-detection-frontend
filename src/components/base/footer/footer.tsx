import Image from 'next/image';


const Footer = () => {
    return (
        <div className="relative flex w-full bg-orange min-h-[10vh] tablet:min-h-[12vh] laptop:h-[20vh]">
        <div className="flex-grow min-w-[100wv] bg-[url('/rect-footer.svg')] bg-no-repeat bg-cover flex flex-col">
            
            <div className='flex-grow flex flex-row justify-evenly items-end py-4 text-left'> 
                <div className="flex flex-row items-end gap-4">
                    <div className="flex flex-col gap-2 mt-2">
                        <Image
                            src="/arrow.svg"
                            alt="logo"
                            className="w-8 h-auto tablet:w-10 laptop:w-12"
                            width={20}
                            height={20}
                        />
                        <Image
                            src="/logo.svg"
                            alt="logo"
                            className="w-6 h-auto tablet:w-8 laptop:w-8"
                            width={15}
                            height={15}
                        />
                    </div>
                    <div className="flex flex-col text-white font-shantell-sans-regular text-[8px] tablet:text-[10px]">
                        <p className='font-rubik-mono-one text-[8px] tablet:text-[10px] laptop:text-[12px]'>Контакты</p>
                        <a href={`https://github.com/snapncook`} className=''>
                            <p>github</p>
                        </a>
                    </div>
                </div>
    
                <div className="flex flex-col text-white font-shantell-sans-regular text-[8px] tablet:text-[10px] laptop:text-[12px]">
                    <a href={`#main`} className='font-rubik-mono-one text-[8px] tablet:text-[10px] laptop:text-[12px]'>
                        <p>Главная</p>
                    </a>
                    <a href={`#instructions`}>
                        <p>Инструкция</p>
                    </a>
                    <a href={`#recipe`}>
                        <p>Идеальный ужин</p>
                    </a>
                </div>
            </div>
    
            <div className="flex justify-center"> 
                <p className='pb-1 text-white font-shantell-sans-regular text-[6px] tablet:text-[8px] laptop:text-[10px] text-center'>©2025. Все права защищены</p>
            </div>
        </div>
    </div>)
};
export default Footer;
