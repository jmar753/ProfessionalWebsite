import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";

export default function Header(){
    const [navState, setNavState] = useState("/home")
    
    const navOptions = [
        {value:"Home", route:"/home"},
        {value:"Experience", route:"/experience"},
        {value:"Projects", route:"/projects"},
        {value:"Contact", route:"/contact"}
    ]

    const navigate = useNavigate()

    const renderPage = (page) =>{
        setNavState(page)
        navigate(page)
    }

    return(
        <div className="grid grid-cols-2 sticky top-0 z-50 bg-neutral-800 text-xl p-2">
            <div className="text-emerald-400 pl-9">
                Jr Mohan
            </div>
            <div className="flex justify-around">
                {navOptions.map((item, index) => (
                    <button className={`${item.route == navState ? "text-emerald-400":"hover:text-emerald-600"} hover:cursor-pointer text-white transition px-1 duration-200`} key={item.value} onClick={()=>renderPage(item.route)}>
                        {item.value}
                    </button>
                ))}
            </div>
        </div>
    )
}