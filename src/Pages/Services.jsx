import ProgressBar from "@ramonak/react-progress-bar"
import { Link } from "react-router-dom"

const Services = () => {

    return (
        <div>
            <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-16 my-4">
                    <h3 className="text-center text-lg text-red-500 uppercase font-serif">Software Engineering <span>( website Development )</span></h3>
                    <div className="flex flex-col gap-10">
                    <div className="flex justify-between mx-3 gap-3">
                    <div className="flex flex-col w-[50%] gap-7">
                    <p className="text-lg text-green-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                     Quidem neque excepturi minima asperiores odit natus voluptatum 
                     magnam similique vel quis itaque tenetur odio sequi consectetur 
                     illo, sed autem quae eveniet!
                    </p>
                    <p className="text-lg text-green-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                     Quidem neque excepturi minima asperiores odit natus voluptatum 
                     magnam similique vel quis itaque tenetur odio sequi consectetur 
                     illo, sed autem quae eveniet!
                    </p>
                    <p className="text-lg text-green-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                     Quidem neque excepturi minima asperiores odit natus voluptatum 
                     magnam similique vel quis itaque tenetur odio sequi consectetur 
                     illo, sed autem quae eveniet!
                    </p>
                    </div>
                    <img 
                    src="/first 2.png" 
                    alt="vehicle" 
                    className="w-[50%] rounded-xl"
                    />
                    </div>
                    <div className="flex justify-between mx-3 gap-28">
                        <img 
                        src="/PC.png" 
                        alt="Pc" 
                        className="w-[50%]"
                        />
                        <div className="w-[50%]">
                          <header className="text-center text-[30px] font-serif font-semibold">Frameworks</header>
                              <label className="flex flex-col gap-5">
                                <p className="text-[25px] font-sans">React</p>
                              <ProgressBar completed={90} maxCompleted={100} width="400px" height="25px" />
                              </label>
                              <label className="flex flex-col gap-5">
                                <p className="text-[25px] font-sans ">TailWind Css</p>
                              <ProgressBar completed={80} maxCompleted={100} width="400px" height="25px"/>
                              </label>
                              <label className="flex flex-col gap-5">
                                <p className="text-[25px] font-sans ">Three js</p>
                              <ProgressBar completed={60} maxCompleted={100} width="400px" height="25px"/>
                              </label>
                              <label className="flex flex-col gap-5">
                                <p className="text-[25px] font-sans ">GSAP</p>
                              <ProgressBar completed={60} maxCompleted={100} width="400px" height="25px"/>
                              </label>
                          </div>
                       </div>
                    </div>
                </div>
                <div className="flex flex-col gap-16 my-4">
                    <h3 className="text-center text-lg text-red-500 uppercase font-serif">Software Engineering <span>( Mobile Application Development )</span></h3>
                    <div className="flex flex-col gap-10">
                    <p className="text-lg text-green-600 flex self-center w-[600px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                     Quidem neque excepturi minima asperiores odit natus voluptatum 
                     magnam similique vel quis itaque tenetur odio sequi consectetur 
                     illo, sed autem quae eveniet!
                    </p>
                    <p className="text-lg text-green-600 flex self-center w-[600px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                     Quidem neque excepturi minima asperiores odit natus voluptatum 
                     magnam similique vel quis itaque tenetur odio sequi consectetur 
                     illo, sed autem quae eveniet!
                    </p>
                    <div className="flex justify-between mx-3">
                    <img 
                    src="/prayingTime.jpg" 
                    alt="vehicle" 
                    className="rounded-xl w-[25%]"
                    />
                    <img 
                    src="/vehicle_1.jpg" 
                    alt="vehicle" 
                    className="rounded-xl w-[25%]"
                    />
                    <img 
                    src="/home_1.jpg" 
                    alt="vehicle" 
                    className="rounded-xl w-[25%]"
                    />
                    </div>
                    <div className="flex justify-between mx-3 gap-28">
                        <img 
                        src="/PC.png" 
                        alt="Pc" 
                        className="w-[50%]"
                        />
                        <div className="w-[50%] flex justify-center flex-col">
                           <header className="text-center text-[30px] font-serif font-semibold">Frameworks</header>
                               <label className="flex flex-col gap-5">
                                 <p className="text-[25px] font-sans">React Native</p>
                               <ProgressBar completed={100} maxCompleted={100} width="400px" height="25px" />
                               </label>
                        </div>
                    </div>
                 </div>
                </div>
                <div className="flex flex-col gap-16 my-4">
                    <h3 className="text-center text-lg text-red-500 uppercase font-serif">Video Editing</h3>
                    <div className="flex flex-col gap-10">
                    <div className="flex justify-between mx-3 gap-3">
                    <div className="flex flex-col w-[50%] gap-7">
                    <p className="text-lg text-green-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                     Quidem neque excepturi minima asperiores odit natus voluptatum 
                     magnam similique vel quis itaque tenetur odio sequi consectetur 
                     illo, sed autem quae eveniet!
                    </p>
                    <p className="text-lg text-green-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                     Quidem neque excepturi minima asperiores odit natus voluptatum 
                     magnam similique vel quis itaque tenetur odio sequi consectetur 
                     illo, sed autem quae eveniet!
                    </p>
                    <p className="text-lg text-green-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                     Quidem neque excepturi minima asperiores odit natus voluptatum 
                     magnam similique vel quis itaque tenetur odio sequi consectetur 
                     illo, sed autem quae eveniet!
                    </p>
                    </div>
                    <img 
                    src="/first 2.png" 
                    alt="vehicle" 
                    className="w-[50%] rounded-xl"
                    />
                    </div>
                    <div className="flex justify-between mx-3 gap-28">
                        <img 
                        src="/PC.png" 
                        alt="Pc" 
                        className="w-[50%]"
                        />
                        <div className="w-[50%] flex justify-center flex-col">
                          <header className="text-center text-[30px] font-serif font-semibold">Tools</header>
                            <label className="flex flex-col gap-5">
                              <p className="text-[25px] font-sans">CapCut</p>
                            <ProgressBar completed={90} maxCompleted={100} width="400px" height="25px" />
                            </label>
                        </div>
                      </div>
                  </div>
                </div>
                <div className="flex justify-between mx-4">
                  <header className="text-[30px] font-serif">PortFolio</header>
                  <Link to='/portfolio'>
                  <img
                  src="/arrow.png"
                  alt="arrow"
                  className="w-20 h-16"
                   />
                  </Link>
              </div>
            </div>
        </div>
    )
}

export default Services