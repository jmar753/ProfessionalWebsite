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
        <div className="flex justify-between sticky top-0 z-50 bg-neutral-800 text-xl py-2 px-11">
            <div className="text-emerald-400 hover:cursor-default">
                Jr Mohan
            </div>
            <div className="flex gap-10 justify-around">
                {navOptions.map((item, index) => (
                    <Link href={item.route} passHref legacyBehavior>
                        <button className={`hover:cursor-pointer transition px-1 duration-200 ${router.pathname == item.route ? "text-emerald-400":"text-white hover:text-emerald-600"}`} key={item.value} onClick={()=>setNavState(item.route)}>
                            {item.value}
                        </button>
                    </Link>
                ))}
            </div>
        </div>
    )
}