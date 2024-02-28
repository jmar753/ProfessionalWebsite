import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import { HiMenu } from "react-icons/hi";

export default function Header(){
    const [navState, setNavState] = useState("/")

    const router = useRouter();
    
    const navOptions = [
        {value:"Home", route:"/"},
        {value:"Timeline", route:"/Timeline"},
        {value:"Portfolio", route:"/Portfolio"},
    ]

    return(
        <div className="bg-white flex justify-between font-semibold h-11 sticky top-0 z-40 text-xl py-2 px-4 md:px-11 md:shadow-md">
            <div className="absolute w- right-0 top-11 bg-white shadow-2xl rounded-2xl z-50">
                <ul class="text-xl text-black" aria-labelledby="dropdownDefaultButton">
                    <li className="hover:bg-slate-300 rounded-t-2xl">
                        <a href="#" class="block px-4 py-2 hover:bg-gray-100 rounded-t-2xl">Dashboard</a>
                    </li>
                    <li>
                        <a href="#" class="block px-4 py-2 hover:bg-gray-100">Settings</a>
                    </li>
                    <li>
                        <a href="#" class="block px-4 py-2 hover:bg-gray-100">Earnings</a>
                    </li>
                    <li>
                        <a href="#" class="block px-4 py-2 hover:bg-gray-100">Sign out</a>
                    </li>
                </ul>
            </div>
            <div className="text-2xl hover:cursor-default">
                Jr.<span className="text-emerald-400">dev</span>
            </div>
            <div className="hidden md:flex gap-10 justify-around">
                {navOptions.map((item, index) => (
                    <Link href={item.route} passHref legacyBehavior key={index}>
                        <button className={`hover:cursor-pointer transition px-1 duration-200 ${router.pathname == item.route ? "text-emerald-400":"text-black hover:text-emerald-600"}`} key={item.value} onClick={()=>setNavState(item.route)}>
                            {item.value}
                        </button>
                    </Link>
                ))}
            </div>
            <div className="md:hidden flex justify-center items-center">
                <HiMenu className="block md:hidden hover:bg-gray-200 rounded-xl mx-4 my-4 0 text-2xl">

                </HiMenu>
            </div>
        </div>
    )
}