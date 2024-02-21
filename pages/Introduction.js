import { SiJavascript, SiHtml5, SiTailwindcss, SiReact, SiNextdotjs, SiCss3} from "react-icons/si";

export default function Introduction() {

    const devIcons = [
        {name: "HTML", icon: SiHtml5, properties:"text-orange-500"},
        {name: "CSS", icon: SiCss3, properties:"text-sky-500"},
        {name: "Javascript", icon: SiJavascript, properties:"text-yellow-300 bg-black"},
        {name: "Next.js", icon: SiNextdotjs, properties:"text-black"},
        {name: "React", icon: SiReact, properties:"text-sky-300"},
        {name: "Tailwind", icon: SiTailwindcss, properties:"text-sky-400"},
    ]

    return (
        <div className="h-[calc(100vh-44px)] lg:flex items-center justify-center px-2 lg:px-10 pt-3 lg:pt-0 lg:max-w-7xl mx-auto">
            <div className="lg:grid lg:grid-cols-5 relative">

                {/* Text side */}
                <div className="lg:p-12 lg:col-span-3">
                    <h1 className="text-3xl lg:text-5xl font-semibold">
                        Hello, I'm
                    </h1>
                    <h1 className="text-5xl lg:text-7xl font-bold text-emerald-400 items-center">
                        JR Mohan
                    </h1>
                    <h1 className="text-3xl lg:text-5xl font-semibold">
                        A <span className="text-emerald-400">Front-End Developer</span>
                    </h1>
                    <div className="pt-12 hidden lg:block">
                        Welcome to my Web Development services! I am a dedicated frontend developer committed to bringing your digital vision to life with cutting-edge technilogies and stunning designs.
                    </div>
                    <button className="text-white hidden lg:block font-semibold bg-purple-600 p-3 my-7 mr-24 rounded-lg hover:bg-purple-800">
                        Download Resume
                    </button>
                    <div className="w-full hidden h-12 justtify-center lg:grid grid-cols-2">
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
                <div className="lg:h-[500px] lg:w-[500px] lg:col-span-2 pt-20 lg:pt-0">
                    <div className="h-full w-full relative z-0 flex justify-center items-center">
                        <img className="relative bg-white object-cover col-span-2 h-[300px] w-[300px] lg:h-full lg:w-full rounded-full shadow-lg z-40 " src="/static/selfieColour.jpg" alt="Picture of the author"/>
                        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                        <div className="absolute top-0 -right-4 w-80 h-80 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-teal-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                    </div>
                </div>
                <button className="text-white font-semibold bg-purple-600 visible lg:hidden p-3 my-7 mr-24 rounded-lg hover:bg-purple-800">
                    Download Resume
                </button>
                <div className="visible lg:hidden w-full h-12 justify-center">
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
        </div>
    )
  }