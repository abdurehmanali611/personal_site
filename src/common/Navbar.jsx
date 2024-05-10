import { useState } from "react"
import { Link } from "react-router-dom"

const Navbar = () => {

    const [middle, setMiddle] = useState(false)

    const menuElements = () => {
            setMiddle(!middle)
    }

  return (
    <div>
        <div className="flex justify-between">
            <div className="flex gap-5 m-5 ">
                <img 
                src="/abdu.jpg"
                alt="Owner"
                className="w-12 h-12 rounded-full"
                />
                <header className="text-[20px] pt-2 md:hidden sm:hidden">Abdurehman Ali</header>
            </div>
            <div className="m-5">
                {!middle ? (
                <ul className="flex gap-5">
                    <li className="bg-slate-200 w-24 h-12 text-center pt-2 rounded-[15px] text-orange-800 hover:text-green-700 hover:bg-white md:hidden sm:hidden" ><Link to='about'>About Me</Link></li>
                    <li className="bg-slate-200 w-24 h-12 text-center pt-2 rounded-[15px] text-orange-800 hover:text-green-700 hover:bg-white md:hidden sm:hidden"><Link to='portfolio'>PortFolio</Link></li>
                    <li className="bg-slate-400 w-24 h-12 text-center pt-2 rounded-[15px] text-purple-600 hover:text-green-700 hover:bg-white md:hidden sm:hidden"><Link to='contact'>Contact</Link></li>
                    <li>
                    <Link onClick={menuElements}
                    className="hidden md:block sm:block">
                     <img 
                     src="/menu.png"
                     alt='menu'
                     className="w-12 h-12"
                     />
                    </Link>
                    </li>
                </ul>
                ): (
                    <ul className="flex flex-col gap-10 bg-gray-400 w-48 h-96 py-5 rounded-[20px] absolute z-10 right-3">
                        <li>
                            <Link 
                            className="flex justify-end"
                            onClick={menuElements}>
                             <img 
                             src="/close.jpg"
                             alt="close"
                             className="w-10 h-10 mx-5 rounded-full"
                             />
                            </Link>
                        </li>
                        <li className="bg-slate-200 w-24 h-12 text-center pt-2 rounded-[15px] text-orange-800 hover:text-green-700 hover:bg-white flex justify-center self-center" onClick={menuElements}><Link to='about'>About Me</Link></li>
                        <li className="bg-slate-200 w-24 h-12 text-center pt-2 rounded-[15px] text-orange-800 hover:text-green-700 hover:bg-white flex justify-center self-center" onClick={menuElements}><Link to='portfolio'>PortFolio</Link></li>
                        <li className="bg-slate-200 w-24 h-12 text-center pt-2 rounded-[15px] text-orange-800 hover:text-green-700 hover:bg-white flex justify-center self-center" onClick={menuElements}><Link to='contact'>Contact</Link></li>
                    </ul>
                )}
            </div>
        </div>
    </div>
  )
}

export default Navbar