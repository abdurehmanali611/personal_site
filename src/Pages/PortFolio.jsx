
const PortFolio = () => {
  return (
    <div>
      <div className="py-40 px-16 sm:py-20">
          <p className="text-[75px] -rotate-12 sm:text-[65px]">&quot;Work to learn: Don&apos;t work for Money&quot;</p>
        </div>
        <div>
          <div>
            <div className="flex flex-col gap-10 mx-10 my-10">
              <header className="text-center text-[30px] font-serif">Websites</header>
              <header className="text-[25px] font-serif">Fitness Gym Website</header>
               <div className="flex justify-between gap-10 sm:flex-col">
                <div>
                  <img 
                 src="/fitness.png"
                  />
                </div>
                <div>
                <img 
                src="/first 2.png"
                />
                </div>
                <div>
                <img 
                src="/first 3.png"
                className="md:hidden"
                />
                </div>
               </div>
               <header className="text-[25px] font-serif">Volaso Tech</header>
               <div className="flex justify-between gap-10 sm:flex-col">
                <div>
                  <img 
                 src="/volaso (1).png"
                  />
                </div>
                <div>
                <img 
                src="/second 2.png"
                />
                </div>
                <div>
                <img 
                src="/second 3.png"
                className="md:hidden"
                />
                </div>
               </div>
               <header className="text-center text-[30px] font-serif">Mobile App</header>
               <header className="text-[25px] font-serif">Study Pal</header>
               <div className="flex justify-between gap-32 sm:flex-col sm:w-[80%] sm:self-center">
                <div>
                  <img 
                 src="/study_pal.jpg"
                  />
                </div>
                <div>
                <img 
                src="/home_1.jpg"
                />
                </div>
                <div>
                <img 
                src="/home_2.jpg"
                className="md:hidden"
                />
                </div>
               </div>
               <header className="text-[25px] font-serif">Assunah Tv</header>
               <div className="flex justify-between gap-32 sm:flex-col sm:w-[80%] sm:self-center">
                <div>
                  <img 
                 src="/Assunah.jpg"
                  />
                </div>
                <div>
                <img 
                src="/rating.jpg"
                />
                </div>
                <div>
                <img 
                src="/prayingTime.jpg"
                className="md:hidden"
                />
                </div>
               </div>
               <header className="text-[25px] font-serif">Vehicle Tracking</header>
               <div className="flex justify-between gap-32 sm:flex-col sm:w-[80%] sm:self-center">
                <div>
                  <img 
                 src="/vehicle_1.jpg"
                  />
                </div>
                <div>
                <img 
                src="/vehicle_2.jpg"
                />
                </div>
                <div>
                <img 
                src="/vehicle_3.jpg"
                className="md:hidden"
                />
                </div>
               </div>
               <header className="text-center text-[30px] font-serif">Python</header>
               <div className="flex justify-between gap-10 sm:flex-col">
                <div>
                  <img 
                 src="/Madlib_python.png"
                 className="md:hidden"
                  />
                </div>
                <div>
                <img 
                src="/Timed_Math.png"
                />
                </div>
                <div>
                <img 
                src="/Turtle_python.png"
                />
                </div>
               </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default PortFolio