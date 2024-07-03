import ProgressBar from "@ramonak/react-progress-bar"
import { Link } from "react-router-dom"


const Home = () => {
  return (
    <div>
        <div className="flex justify-between py-20 md:flex-col sm:flex-col px-20">
          <div className="flex flex-col gap-5 py-20">
            <header className="text-[40px] font-serif">Abdurehman Ali</header>
            <p className="text-[35px] font-serif">A Software Engineer in Addis Ababa</p>
            <Link className="flex gap-5 bg-orange-200 h-12 justify-center items-center w-72 rounded-[30px] text-[20px] hover:bg-white hover:text-red-500">
            <img 
            src="/phone.png"
            alt="phone"
            className="w-8 h-8 rounded-[20px]"
            />
            callMe:+251935000642
            </Link>
          </div>
          <div className="flex md:self-center">
            <img 
            src="/abdu_wow2.jpg"
            alt="my photo"
            className="w-96 h-[350px] rounded-[50%]"
            />
          </div>
        </div>
        <div>
          <div>
            <header className="px-5 text-[30px] my-5 text-green-400">About Me</header>
            <p className="pl-10 text-[30px] font-serif font-bold my-5 sm:text-[23px]">I am an enthusiastic web developer based in Addis Ababa Ethiopia. With a rich experience in website design and developing.</p>
          </div>
          <div className="flex justify-between mx-20 gap-44 py-12 md:flex-col md:gap-10 md:py-5 sm:flex-col sm:gap-10 sm:py-5">
            <div className="w-2/3 pt-8 md:w-full">
              <p className="text-red-400 text-[25px] font-serif sm:text-[20px]">I design and develop professional and beautiful websites</p>
            </div>
            <div className="flex flex-col gap-5">
              <p className="text-[20px] font-serif">
                With a years of experience in designing and developing beautiful and professional websites
                i have mastered the skill of developing a product which fit the customer requirement 
                and make he/she the most productive. 
              </p>
              <p className="text-[20px] font-serif text-violet-700">
                With these a years of experience i have worked with a technology and other field companies 
                in different aspects of web development, mobile application development and AI or python 
                related issues so you can rely on me for your development and designing issues.
              </p>
              <Link className="text-blue-700 hover:text-red-700" to='about'>Read More</Link>
            </div>
          </div>
        </div>
        <div className="mb-16">
          <div>
            <div className="p-10 flex flex-col gap-5">
              <header className="text-[25px] font-bold px-5">What I Do</header>
              <div className="flex justify-between md:flex-col sm:flex-col">
              <p className="px-8 text-[20px] sm:text-[17px]">From understanding your requirement, designing a blueprint and delivering the final 
                <br />product. I do everything that falls between these lines.
              </p>
              <Link 
              className="flex md:self-end sm:self-end"
              to='portfolio'>
              <img 
              src="/arrow.png"
              alt="arrow"
              className="w-16 h-16 rounded-full"
              />
              </Link>
              </div>
            </div>
          </div>
          <div className="flex justify-between mx-10 gap-10 sm:flex-col">
            <div className="w-1/3 bg-slate-300 h-fit p-4 rounded-[20px] sm:w-fit">
              <header className="text-center text-[20px] font-serif font-bold my-5">UI/UX Design</header>
              <p>
                An Effective UI/UX is what captures the attention and spreads 
                a clear message. if you want to address those features in an innovative, 
                neat and clear way. 
                <br />
                <br />
                <Link to='contact'><p className="text-blue-700 hover:text-red-500">contact Me</p></Link> 
              </p>
            </div>
            <div className="w-1/3 bg-slate-300 h-fit p-4 rounded-[20px] sm:w-fit">
              <header className="text-center text-[20px] font-serif font-bold my-5">Web Development</header>
              <p>
                If you are looking for a developer who will take over 
                the design and development of your website in a way that 
                will fit your requirement exactly and catch up users attention. 
                <br />
                <br />
                <Link to='contact'><p className="text-blue-700 hover:text-red-500">contact Me</p></Link> 
              </p>
            </div>
            <div className="w-1/3 bg-slate-300 h-fit p-4 rounded-[20px] sm:w-fit">
              <header className="text-center text-[20px] font-serif font-bold my-5">Mobile App Development</header>
              <p>
                If you are looking for a developer who will take over 
                the design and development of your mobile app in a way that 
                will fit your requirement exactly and catch up attentions. 
                <br />
                <br />
                <Link to='contact'><p className="text-blue-700 hover:text-red-500">contact Me</p></Link> 
              </p>
            </div>
          </div>
        </div>
        <div className="m-16 p-5 sm:m-10">
          <div className="flex justify-between gap-20 md:flex-col">
            <div className="flex flex-col gap-6">
              <header className="text-center text-[30px] font-serif font-semibold">language or Framework</header>
              <label className="flex flex-col gap-5">
                <p className="text-[25px] font-sans ">React Native</p>
              <ProgressBar completed={90} maxCompleted={100} width="400px" height="25px" />
              </label>
              <label className="flex flex-col gap-5">
                <p className="text-[25px] font-sans ">React</p>
              <ProgressBar completed={80} maxCompleted={100} width="400px" height="25px"/>
              </label>
              <label className="flex flex-col gap-5">
                <p className="text-[25px] font-sans ">Python</p>
              <ProgressBar completed={60} maxCompleted={100} width="400px" height="25px"/>
              </label>
            </div>
            <div>
              <img
              src="PC.png"
              alt="PC"
              className="w-[600px] my-10 rounded-[20px]"
              />
            </div>
          </div>
        </div>
        <div className="m-10 p-5 flex flex-col gap-20">
        <div className="flex flex-col gap-10">
          <header className="text-[25px] font-serif text-center font-extrabold">Mobile App</header>
          <div className="flex justify-between gap-32 sm:flex-col">
            <div>
              <img
              src="Assunah.jpg"
              alt="Assunah Project"
              />
            </div>
            <div>
              <img
              src="study_pal.jpg"
              alt="Study Pal"
              />
            </div>
            <div>
              <img
              src="vehicle_1.jpg"
              alt="Vehicle Tracking"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <header className="text-[25px] font-serif text-center font-extrabold">Websites</header>
          <div className="flex justify-between gap-8 sm:flex-col">
            <div>
              <header className="text-[25px] font-serif">Fitness Gym</header>
              <img
              src="fitness.png"
              alt="Fitness Gym"
              />
            </div>
            <div>
              <header className="text-[25px] font-serif">Volaso</header>
              <img
              src="volaso (1).png"
              alt="Volaso"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <header className="text-[25px] font-serif text-center font-extrabold">Python</header>
          <div className="flex justify-between gap-28 sm:flex-col">
            <div>
              <header className="text-[25px] font-serif">Turtle Race</header>
              <img
              src="/Turtle_python.png"
              alt="Turtle Race"
              />
            </div>
            <div>
              <header className="text-[25px] font-serif">Pig</header>
              <img
              src="/pig_python.png"
              alt="Pig"
              />
            </div>
          </div>
        </div>
        <div className="m-10 p-5">
          <div className="flex justify-between">
            <header className="text-[30px] font-serif">PortFolio</header>
            <Link to='portfolio'>
            <img
            src="/arrow.png"
            alt="arrow"
            className="w-20 h-16"
            />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home