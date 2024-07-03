import ProgressBar from "@ramonak/react-progress-bar"

const AboutMe = () => {
  return (
    <div>
        <div className="py-40 px-16 sm:py-20">
          <p className="text-[75px] -rotate-12 sm:text-[65px]">&quot;Walk slowly but Never Backward&quot;</p>
        </div>
        <div className="mt-40">
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
              <p className="text-[20px] font-serif text-violet-600">
                With these a years of experience i have worked with a technology and other field companies 
                in different aspects of web development, mobile application development and AI or python 
                related issues so you can rely on me for your development and designing issues.
              </p>
            </div>
          </div>
        </div>
        <div className="mx-20 my-10">
          <div className="flex justify-between md:flex-col md:gap-16 sm:flex-col sm:gap-16">
            <div className="w-[40%] pt-8 md:w-full sm:w-full">
              <header className="text-center text-[30px] my-10 italic">My skills</header>
              <p className="text-[20px] font-serif">
                I believe in the fact that learning never stops and 
                i am interested in learning and acquiring new technological 
                inventions and use them to help me develop my technical and 
                theoretical knowledge 
              </p>
            </div>
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
          </div>
        </div>
        <div className="flex justify-center my-20">
          <header className="text-[30px] font-serif">What My clients Say</header>
        </div>
        <div className="flex justify-between gap-10 sm:flex-col mx-20 md:flex-col">
            <div className="flex flex-col gap-10 w-fit bg-slate-400 px-5 py-5 rounded-[30px]">
              <p>
              Your attention to detail and commitment to quality coding are truly impressive. It&apos;s evident that you take pride in your work
              </p>
              <p className="text-end text-[20px]">Fatima Mohammed</p>
            </div>
            <div className="flex flex-col gap-10 w-fit bg-slate-400 px-5 py-5 rounded-[30px]">
              <p>
              Your attention to detail in your code is quite noticeable. It really helps in ensuring the quality of our projects
              </p>
              <p className="text-end text-[20px]">Mulugeta Girma</p>
            </div>
            <div className="flex flex-col gap-10 w-fit bg-slate-400 px-5 py-5 rounded-[30px]">
              <p>
              Your communication about technical matters is clear and concise, making collaboration smoother for everyone.
              </p>
              <p className="text-end text-[20px]">Rahel Tesfaye</p>
            </div>
          </div>
          <div className="flex justify-between my-20 mx-20 gap-10 sm:flex-col">
          <div className="flex flex-col gap-10 w-fit bg-slate-400 px-5 py-5 rounded-[30px]">
              <p>
              Meeting deadlines is a critical aspect of our work, and I&apos;m pleased to see your consistent effort in delivering your work on time. Your reliability in this regard not only helps us stay on track with our project timelines but also instills confidence in our clients and stakeholders about our ability to execute effectively
              </p>
              <p className="text-end text-[20px]">Sarah Johnson</p>
            </div>
            <div className="flex flex-col gap-10 w-fit bg-slate-400 px-5 py-5 rounded-[30px]">
              <p>
              It&apos;s refreshing to see your enthusiasm for learning and adopting new technologies. The tech landscape is constantly evolving, and your willingness to stay updated with the latest trends and advancements keeps our team agile and competitive. Your proactive approach to self-improvement sets a positive example for your colleagues and contributes to our collective growth
              </p>
              <p className="text-end text-[20px]">David Smith</p>
            </div>
          </div>
    </div>
  )
}

export default AboutMe