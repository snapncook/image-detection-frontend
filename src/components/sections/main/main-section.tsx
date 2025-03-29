import { FC } from "react";


const MainSection = () => {
   return (
      <div className="bg-[url('/background.svg')] bg-cover bg-no-repeat w-full h-[90vh] max-h-screen">
         <div className="absolute inset-0 flex items-center justify-center tablet:mt-[10vw] tablet:mr-[10vw]">
            <div
               className="bg-[url('/fridge.svg')] bg-no-repeat bg-right w-full max-h-[90vh]"
               style={{ backgroundSize: 'contain', height: '100vh' }}
            >
               <div className="h-full text-white flex flex-col justify-center">
                  <div className="flex flex-col gap-4 items-left font-rubik-mono-one p-[5vw] tablet:ml-[5vw]">
                     <p className="text-4xl tablet:text-5xl">Просто</p>
                     <p className="text-3xl tablet:text-4xl">Сделай</p>
                     <p className="text-2xl tablet:text-3xl">Фото...</p>
                  </div>
                  <div className="ml-[10vw] font-caveat-regular max-w-[30vw] text-lg tablet:text-2xl">
                     <p className="text-right">Об остальном позаботимся мы</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default MainSection;