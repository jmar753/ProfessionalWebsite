import { SiJavascript, SiHtml5, SiTailwindcss, SiReact, SiNextdotjs, SiCss3} from "react-icons/si";
import { useState, useEffect } from "react";

export default function Home(){
    const [aboutImages, setAboutImages] = useState(["forest.jpg", "leaves.jpg", "boating.jpg", "lake.jpg", "fwip.jpg"])

    const devIcons = [
        {name: "HTML", icon: SiHtml5, properties:"text-orange-500"},
        {name: "CSS", icon: SiCss3, properties:"text-sky-500"},
        {name: "Javascript", icon: SiJavascript, properties:"text-yellow-300 bg-black"},
        {name: "Next.js", icon: SiNextdotjs, properties:"text-black"},
        {name: "React", icon: SiReact, properties:"text-sky-300"},
        {name: "Tailwind", icon: SiTailwindcss, properties:"text-sky-400"},
    ]

    const websiteArray = [
        {name:"example"},
        {name:"example"},
        {name:"example"},
        {name:"example"},
    ]

    function switchImages(toChange){
        console.log("clicked")
        console.log("before: " + aboutImages)
        var tempArr = aboutImages
        var temp = tempArr[4]
        tempArr[4] = tempArr[toChange]
        tempArr[toChange] = temp
        setAboutImages(tempArr)
        console.log("after: " + aboutImages)
    }

    return(
        <div className="divide-y-2 divide-dashed divide-neutral-500">

            {/* Introduction */}
            <div className="h-[calc(100vh-44px)] flex items-center justify-center px-10 max-w-7xl mx-auto">
                <div className="grid grid-cols-5 relative">

                    {/* Text side */}
                    <div className="p-12 col-span-3">
                        <h1 className="text-5xl font-semibold">
                            Hello, I'm
                        </h1>
                        <h1 className="text-7xl font-bold text-emerald-400 items-center">
                            JR Mohan
                        </h1>
                        <h1 className="text-5xl font-semibold">
                            A <span className="text-emerald-400">Front-End Developer</span>
                        </h1>
                        <div className="pt-12">
                            Welcome to my Web Development services! I am a dedicated frontend developer committed to bringing your digital vision to life with cutting-edge technilogies and stunning designs.
                        </div>
                        <button className="text-white font-semibold bg-purple-600 p-3 my-7 mr-24 rounded-lg hover:bg-purple-800">
                            Download Resume
                        </button>
                        <div className="w-full h-12 justtify-center grid grid-cols-2">
                            <div className="flex justify-between">
                                {devIcons.map((item, index) => (
                                    <div className="text-center h-full" key={index}>
                                        <div className={`text-center text-4xl ${item.properties}`}>
                                            <item.icon/>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* image side */}
                    <div className="h-[500px] w-[500px] col-span-2">
                        <div className="h-full w-full relative z-0">
                            <img className="relative bg-white object-cover col-span-2 h-full w-full rounded-full shadow-lg z-40 " src="/static/selfieColour.jpg" alt="Picture of the author"/>
                            <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                            <div className="absolute top-0 -right-4 w-80 h-80 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-teal-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* About Me*/}
            <div className="h-[calc(100vh)] items-center flex px-10 max-w-7xl mx-auto">
                <div className="grid grid-cols-5 gap-4 h-full w-full relative items-center">
                    
                    {/* image side */}
                    <div className="h-full col-span-3">
                        <div className="h-full flex items-center justify-center w-full relative z-0">
                            <img className="absolute top-[200px] left-[00px] object-cover col-span-2 w-36 h-36 rounded-full z-40 animate-float" src={`/static/${aboutImages[0]}`} alt="" onClick={()=>switchImages(0)}/>
                            <img className="absolute top-[200px] right-[00px] object-cover col-span-2 w-36 h-36 rounded-full z-20 shadow-xl animate-float animation-delay-2000" src={`/static/${aboutImages[1]}`} alt="" onClick={()=>switchImages(1)}/>
                            <img className="absolute bottom-[200px] left-[00px] object-cover col-span-2 w-36 h-36 rounded-full z-40 shadow-xl animate-float animation-delay-4000" src={`/static/${aboutImages[2]}`}alt="" onClick={()=>switchImages(2)}/>
                            <img className="absolute bottom-[200px] right-[00px] object-cover col-span-2 w-36 h-36 rounded-full z-40 shadow-xl animate-float animation-delay-6000" src={`/static/${aboutImages[3]}`} alt="" onClick={()=>switchImages(3)}/>

                            <img className="relative object-cover col-span-2 h-[500px] w-[500px] rounded-full z-10 shadow-xl" src={`/static/${aboutImages[4]}`} alt=""/>

                        </div>
                    </div>

                    {/* Text side */}
                    <div className="py-12 h-[500px] col-span-2 pl-20">
                        <h1 className="text-5xl font-semibold text-emerald-500">
                            <span className="text-black">About</span> Me
                        </h1>
                        <div className="pt-12">
                            I am a CSS addicted web developer based in Mississauga with a big passion to create dynamic, animated and stylish websites! My expertise lies in creating web pages using React and Next.js, while using Tailwind to create light weight, but heavy hitting designs that are meant to attract users, and maintain user interest with colours and animations. 
                            <br/>
                            <br/>
                            In my free time, I like as;lkfdjpuhavw aiwsdhiu iuhdfsoiuhsdfiuhweuisdf hsdlhsdf uihfd siuhsdf jkhsdf kjhsdf jkhsdfkljhdfjkh h h h fhkjsdfhksdfj fkjf 
                        </div>
                    </div>
                </div>
            </div>

            {/* Projects*/}
            <div className="h-screen mx-auto">
                <h1 className="text-7xl py-10 font-semibold text-emerald-500 text-center">
                    <span className="text-black">My</span> Portfolio
                </h1>
                <div className="flex flex-wrap justify-center">

                    {websiteArray.map((item, index) => (
                    <div className="p-4 max-w-2xl" key={index}>
                        <div className="flex rounded-lg shadow-xl h-full flex-col transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
                            
                            <img className="object-cover col-span-2 w-36 h-36 rounded-lg m-4" src={`/static/${aboutImages[3]}`} alt="" onClick={()=>switchImages(3)}/>
                            
                            {/* Skills*/}
                            <p className="text-neutral-500 leading-relaxed text-lg font-bold px-4">
                                Next.js & Bootstrap
                            </p>

                            {/* Title*/}
                            <p className="leading-relaxed text-2xl font-bold px-4">
                                Museum Page with Working Back-End
                            </p>
                            <div className="py-6">

                            </div>
                        </div>
                    </div>
                    ))}

                </div>

            </div>
        </div>
    )
}