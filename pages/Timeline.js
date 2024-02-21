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
        <div className="h-[calc(100vh-44px)] md:flex items-center justify-center px-2 md:px-10 pt-3 md:pt-0 md:max-w-7xl mx-auto">

        </div>
    )
}