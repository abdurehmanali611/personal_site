import { Link } from "react-router-dom"

const Footer = () => {

  return (
    
    <div className="m-3 rounded-b-[30px] flex flex-col gap-10 bg-gradient-to-l from-blue-400 to-green-300">
        <div className="flex justify-between p-5 sm:flex-col sm:gap-20 sm:items-center">
            <div className="flex gap-5 items-center md:hidden sm:hidden">
                <header className="text-[30px] font-bold">
                    Get In Touch With Me
                </header>
                <img
                src="/arrow.png"
                alt="arrow"
                className="w-12 h-12 rounded-full"
                />
            </div>
            <div className="flex flex-col gap-5">
                <header className="text-[30px] font-serif text-center">My Skills</header>
               <div className="flex flex-col gap-5">
               <p className="text-red-600 text-[25px]" >Full stack Web development</p>
                <p className="text-red-600 text-[25px]" >Mobile Application development</p>
                <p className="text-red-600 text-[25px]" >Python language</p>
               </div>
            </div>
            <div className="flex gap-5 items-center">
                <Link to='https://www.facebook.com/profile.php?id=100073479755802' target="blank">
                <img
                src="/facebook.png"
                alt="facebook"
                className="w-8 h-8 rounded-full"
                />
                </Link>
                <Link to='https://t.me/+251935000642' target="blank">
                <img
                src="/telegram.png"
                alt="telegram"
                className="w-8 h-8 rounded-full"
                />
                </Link>
                <Link to='mailto:/abdurehmanali611@gmail.com' target="blank">
                <img
                src="/email.png"
                alt="email"
                className="w-8 h-8 rounded-full"
                />
                </Link>
                <Link to='https://www.linkedin.com/in/abdurehman-ali-592238281/' target="blank">
                <img
                src="/linkedin.png"
                alt="LinkedIn"
                className="w-8 h-8 rounded-full"
                />
                </Link>
                <Link to='https://whatsapp/+251935000642' target="blank">
                <img
                src="/whatsapp.png"
                alt="LinkedIn"
                className="w-8 h-8 rounded-full"
                />
                </Link>
            </div>
        </div>
        <p className="text-center py-5 text-[20px]">copyright&copy; reserved: Abdurehman Ali</p>
    </div>
  )
}

export default Footer