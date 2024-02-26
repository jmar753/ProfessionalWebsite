import { SiJavascript, SiHtml5, SiTailwindcss, SiReact, SiNextdotjs, SiCss3} from "react-icons/si";

export default function Introduction() {

    const devIcons = [
        {name: "HTML5", icon: SiHtml5, properties:"text-orange-500"},
        {name: "CSS", icon: SiCss3, properties:"text-sky-500"},
        {name: "Javascript", icon: SiJavascript, properties:"text-yellow-300"},
        {name: "Next.js", icon: SiNextdotjs, properties:"text-black"},
        {name: "React", icon: SiReact, properties:"text-sky-300"},
        {name: "Tailwind", icon: SiTailwindcss, properties:"text-sky-400"},
    ]

    return (
        <div className="h-[calc(100vh-44px)] md:flex items-center justify-center">
            <div className="px-2 md:px-10 pt-3 md:pt-0 md:max-w-7xl mx-auto">
                <div className="md:grid md:grid-cols-5 relative">

                    {/* Text side */}
                    <div className="md:p-12 md:col-span-3 md:text-left text-center">
                        {}
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
                            Hello, I'm <span className="md:hidden text-3xl text-emerald-400">Jr Mohan</span>
                        </h1>
                        <h1 className="hidden md:block text-6xl lg:text-7xl font-bold text-emerald-400 items-center">
                            JR Mohan
                        </h1>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
                            A <span className="text-emerald-400">Front-End Developer</span>
                        </h1>


                        <div className="pt-4 md:pt-8k">
                            Welcome to my Web Development services! I am a dedicated frontend developer committed to bringing your digital vision to life with cutting-edge technilogies and stunning designs.
                        </div>
                        <button className="text-white hidden md:block font-semibold bg-purple-600 p-3 my-7 mr-24 rounded-lg hover:bg-purple-800">
                            Download Resume
                        </button>
                        <div className="w-full hidden h-12 justtify-center md:grid grid-cols-2">
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
                    <div className="md:col-span-2 pt-20 md:pt-0 hidden md:block">
                        <div className="w-1/2 pb-1/2  relative z-0 flex justify-center items-center">
                            <img className="relative bg-white object-cover col-span-2 h-[300px] w-[300px] md:h-full md:w-full rounded-full shadow-lg z-40 " src="/static/selfieColour.jpg" alt="Picture of the author"/>
                            <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                            <div className="absolute top-0 -right-4 w-80 h-80 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-teal-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                        </div>
                    </div>

                    {/* Mobile */}
                    <div className="pt-4 block md:hidden">
                        <div className="flex justify-center items-center">
                            <img className="bg-white object-cover h-[300px] w-[300px] rounded-full shadow-xl" src="/static/selfieColour.jpg" alt="Picture of the author"/>
                        </div>
                        <div className="grid grid-cols-3 gap-3 py-4">
                            <div className="bg-emerald-500 text-white font-semibold text-lg rounded-md flex justify-center items-center h-12 w-full">
                                Resume
                            </div>
                            <div className="border-emerald-500 border-2 font-semibold text-lg text-emerald-500 rounded-md flex justify-center items-center h-12 w-full">
                                LinkedIn
                            </div>
                            <div className="border-emerald-500 border-2 font-semibold text-lg text-emerald-500 rounded-md flex justify-center items-center h-12 w-full">
                                GitHub
                            </div>
                        </div>
                    </div>


                    {/* Carousel Try */}
                    <div class="w-full inline-flex flex-nowrap md:hidden pt-6 overflow-hidden">
                        <ul class="flex items-center justify-center md:justify-start [&_li]:mx-5 [&_img]:max-w-none animate-infinite-scroll">
                            {devIcons.map((item, index) => (
                                <li className="text-center h-full" key={index}>
                                    <div className={`text-center text-4xl`}>
                                        <item.icon className={`mx-auto ${item.properties}`}/>
                                        <h1 className="text-lg font-semibold">{item.name}</h1>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <ul class="flex items-center justify-center md:justify-start [&_li]:mx-5 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
                            {devIcons.map((item, index) => (
                                <li className="text-center h-full" key={index}>
                                    <div className={`text-center text-4xl`}>
                                        <item.icon className={`mx-auto ${item.properties}`}/>
                                        <h1 className="text-lg font-semibold">{item.name}</h1>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )
  }