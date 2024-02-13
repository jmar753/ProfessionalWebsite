import { SiJavascript, SiHtml5, SiTailwindcss, SiReact, SiNextdotjs, SiCss3} from "react-icons/si";

export default function Home(){
    const devIcons = [
        {name: "HTML", icon: SiHtml5, properties:"text-orange-500"},
        {name: "CSS", icon: SiCss3, properties:"text-sky-500"},
        {name: "Javascript", icon: SiJavascript, properties:"text-yellow-300 bg-black"},
        {name: "Next.js", icon: SiNextdotjs, properties:"text-black"},
        {name: "React", icon: SiReact, properties:"text-sky-300"},
        {name: "Tailwind", icon: SiTailwindcss, properties:"text-sky-400"},
    ]

    return(
        <div className="">

            {/* Introduction */}
            <div className="pb-24 h-[calc(100vh-44px)] flex items-center justify-center">
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
                        <div className="w-full h-12  justtify-center grid grid-cols-2">
                            <div className="flex justify-between">
                                {devIcons.map((item, index) => (
                                    <div className="text-center h-full">
                                        <div className={`text-center text-4xl ${item.properties}`}>
                                            <item.icon/>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* image side */}
                    <div className="h-[500px] w-[500px]">
                        <div className="h-full w-full relative z-0">
                            <img className="relative bg-white object-contain col-span-2 pt-8 h-full w-full rounded-full border-4 z-40 border-black" src="/static/selfie.png" alt="Picture of the author"/>
                            <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                            <div className="absolute top-0 -right-4 w-80 h-80 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-teal-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* About Me*/}
            <div className="py-24 h-screen flex items-center justify-center">
                About Me
            </div>

            {/* Projects*/}
            <div className="py-24 h-screen flex items-center justify-center">
                Projects
            </div>
        </div>
    )
}