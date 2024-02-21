import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import { HiMenu } from "react-icons/hi";

export default function Header(){
    const [navState, setNavState] = useState("/")

    const router = useRouter();
    
    const navOptions = [
        {value:"Home", route:"/"},
        {value:"About", route:"/experience"},
        {value:"Portfolio", route:"/projects"},
        {value:"Contact", route:"/contact"}
    ]

    return(
        <div className="bg-white flex justify-between font-semibold h-11 sticky top-0 z-50 text-xl py-2 px-4 md:px-11 md:shadow-md">
            <div className="hover:cursor-default">
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
            <div className="lg:hidden flex justify-center items-center">
                <HiMenu className="block md:hidden 0 text-xl">

                </HiMenu>
            </div>
        </div>
    )
}