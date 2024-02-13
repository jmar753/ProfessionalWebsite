import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/router"

export default function Header(){
    const [navState, setNavState] = useState("/")

    const router = useRouter();
    
    const navOptions = [
        {value:"Home", route:"/"},
        {value:"Experience", route:"/experience"},
        {value:"Projects", route:"/projects"},
        {value:"Contact", route:"/contact"}
    ]

    return(
        <div className="flex justify-between font-semibold sticky top-0 z-50 text-xl py-2 px-11 shadow-md">
            <div className="hover:cursor-default">
                Junior.dev
            </div>
            <div className="flex gap-10 justify-around">
                {navOptions.map((item, index) => (
                    <Link href={item.route} passHref legacyBehavior>
                        <button className={`hover:cursor-pointer transition px-1 duration-200 ${router.pathname == item.route ? "text-emerald-400":"text-black hover:text-emerald-600"}`} key={item.value} onClick={()=>setNavState(item.route)}>
                            {item.value}
                        </button>
                    </Link>
                ))}
            </div>
        </div>
    )
}