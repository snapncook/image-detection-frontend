const MainSection = () => {
   return (
      <div className="relative z-10">
         <div className="bg-[url('/background.svg')] tablet:bg-[url('/background-tablet.svg')] bg-cover bg-no-repeat w-ful h-[90vh]   ">
            <div className="absolute inset-0 flex items-center justify-center  tablet:mr-[10vw]" >
               <div
                  className="bg-[url('/fridge.svg')] bg-no-repeat bg-right w-full max-h-[90vh]"
                  style={{ backgroundSize: 'contain', height: '100vh' }}
               >
                  <div className="h-full text-white flex flex-col justify-center tablet:mt-[-5vh]">
                     <div className="flex flex-col gap-4 items-left font-rubik-mono-one p-[5vw] tablet:ml-[5vw]">
                        <p className="text-4xl ">Просто</p>
                        <p className="text-3xl ">Сделай</p>
                        <p className="text-2xl ">Фото...</p>
                     </div>
                     <div className="ml-[10vw] font-caveat-regular max-w-[30vw] text-lg tablet:text-2xl">
                        <p className="text-right">Об остальном позаботимся мы</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default MainSection;