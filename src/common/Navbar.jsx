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
                src="/abdu_wow.jpg"
                alt="Owner"
                className="w-12 h-12 rounded-full"
                />
                <header className="text-[20px] pt-2 md:hidden sm:hidden">Abdurehman Ali</header>
            </div>
            <div className="m-5">
                {!middle ? (
                <ul className="flex gap-8 justify-center">
                    <li className = "text-blue-700 hover:text-red-600 md:hidden sm:hidden capitalize flex items-center" ><Link className = "text-xl focus:text-red-800" to='/'>Home</Link></li>
                    <li className="text-blue-700 hover:text-red-600 md:hidden sm:hidden capitalize flex items-center"  ><Link className = "text-xl focus:text-red-800" to='about'>About Me</Link></li>
                    <li className="text-blue-700 hover:text-red-600 md:hidden sm:hidden capitalize flex items-center"><Link className = "text-xl focus:text-red-800" to='/service'>Services</Link></li>
                    <li className="text-blue-700 hover:text-red-600 md:hidden sm:hidden capitalize flex items-center"><Link className = "text-xl focus:text-red-800" to='portfolio'>PortFolio</Link></li>
                    <li className="text-blue-700 hover:text-red-600 md:hidden sm:hidden capitalize flex items-center"><Link className = "text-[22px] focus:text-red-800" to='contact'>Contact</Link></li>
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
                    <ul className="flex flex-col gap-10 bg-gray-400 w-56 h-[420px] py-5 rounded-[20px] absolute z-10 right-3">
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
                        <li className="bg-slate-200 w-24 h-12 text-center p-2 rounded-[15px] text-orange-800 hover:text-green-700 hover:bg-white md:block sm:block self-center"  onClick={menuElements}><Link to='about'>About Me</Link></li>
                        <li className="bg-slate-200 w-24 h-12 text-center p-2 rounded-[15px] text-orange-800 hover:text-green-700 hover:bg-white md:block sm:block self-center" onClick={menuElements}><Link to='service'>Services</Link></li>
                        <li className="bg-slate-200 w-24 h-12 text-center p-2 rounded-[15px] text-orange-800 hover:text-green-700 hover:bg-white md:block sm:block self-center" onClick={menuElements}><Link to='portfolio'>PortFolio</Link></li>
                        <li className="bg-slate-200 w-24 h-12 text-center p-2 rounded-[15px] text-orange-800 hover:text-green-700 hover:bg-white md:block sm:block self-center" onClick={menuElements}><Link to='contact'>Contact</Link></li>
                    </ul>
                )}
            </div>
        </div>
    </div>
  )
}

export default Navbar