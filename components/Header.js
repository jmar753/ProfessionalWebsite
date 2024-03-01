import { useState, useEffect } from "react"
import Link from "next/link";
import { useRouter } from "next/router"
import { HiMenu } from "react-icons/hi";

export default function Header(){
    const [navState, setNavState] = useState("/")

    const router = useRouter();
    
    const navOptions = [
        {value:"Home", route:"#Home"},
        {value:"Timeline", route:"#Timeline"},
        {value:"Portfolio", route:"#Portfolio"},
    ]

    return(
        <div className="bg-white flex justify-between font-semibold h-11 sticky top-0 z-40 text-xl py-2 px-2 md:px-11 md:shadow-md">
            {/* <div className="bg-neutral-800 w-screen h-screen absolute left-0 top-0 opacity-40"></div>
            <div className="text-base text-left absolute left-0 top-0 z-10 w-3/4 p-6 h-screen divide-y divide-neutral-200 bg-white opacity-100">
                <button className="text-left text-neutral-900 w-full py-3 pr-3  text-2xl my-1">
                    Home
                </button>
                <button className="text-left text-neutral-900 w-full py-3 pr-3 text-2xl my-1">
                    About
                </button>
                <button className="text-left text-neutral-900 w-full py-3 pr-3  text-2xl my-1">
                    Timeline
                </button>
                <button className="text-left text-neutral-900 w-full py-3 pr-3  text-2xl my-1">
                    Portfolio
                </button>
            </div>  */}

            <div className="text-2xl hover:cursor-default flex">
                <div className="md:hidden flex justify-center items-center rounded-lg px-0.5 hover:cursor-pointer hover:bg-gray-300 mr-4">
                    <HiMenu className="block md:hidden text-2xl">

                    </HiMenu>
                </div>
                <Link href="#Home">
                    <div className="-my-1">
                        Jr.<span className="text-emerald-400">dev</span>
                    </div>
                </Link>
            </div>
            <div className="hidden md:flex gap-10 justify-around">
                {navOptions.map((item, index) => (
                    <Link href={item.route} key={index}>
                        <button className={`hover:cursor-pointer transition px-1 duration-200 -my-1 ${router.pathname == item.route ? "text-emerald-400":"text-black hover:text-emerald-400"}`} key={item.value} onClick={()=>setNavState(item.route)}>
                            {item.value}
                        </button>
                    </Link>
                ))}
            </div>
        </div>
    )
}