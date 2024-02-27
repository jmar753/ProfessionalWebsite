import { SiJavascript, SiHtml5, SiTailwindcss, SiReact, SiNextdotjs, SiCss3, SiDocker, SiPython, SiNodedotjs, SiGithub } from "react-icons/si";
import Link from "next/link";

export default function Introduction() {

    const devIcons = [
        {name: "HTML5", icon: SiHtml5, properties:"text-orange-500"},
        {name: "CSS", icon: SiCss3, properties:"text-sky-500"},
        {name: "Javascript", icon: SiJavascript, properties:"text-yellow-300"},
        {name: "Next.js", icon: SiNextdotjs, properties:"text-black"},
        {name: "React", icon: SiReact, properties:"text-sky-300"},
        {name: "Tailwind", icon: SiTailwindcss, properties:"text-sky-400"},
    ]

    const devIconsMobile = [
        {name: "HTML5", icon: SiHtml5, properties:"text-orange-500"},
        {name: "CSS", icon: SiCss3, properties:"text-sky-500"},
        {name: "Javascript", icon: SiJavascript, properties:"text-yellow-300"},
        {name: "Next.js", icon: SiNextdotjs, properties:"text-black"},
        {name: "React", icon: SiReact, properties:"text-sky-300"},
        {name: "Python", icon: SiPython, properties:"text-gray-700"},
        {name: "Node.js", icon: SiNodedotjs, properties:"text-green-400"},
        {name: "Tailwind", icon: SiTailwindcss, properties:"text-sky-400"},
        {name: "Docker", icon: SiDocker, properties:"text-blue-400"},
        {name: "GitHub", icon: SiGithub, properties:"text-black"},

    ]

    return (
        <div className="min-h-[calc(100vh-44px)] md:flex items-center justify-center relative bg-white z-40">
            <div className="px-2 md:px-0 md:pt-0 md:max-w-7xl mx-auto ">
                <div className="md:grid md:grid-cols-5 md:pb-4 relative h-[700px]">

                    {/* Text side */}
                    <div className="md:p-12 pt-6 md:pt-0 md:col-span-3 md:text-left text-center">
                        <div className="h-full flex items-center justify-center">
                            <div className="">
                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
                                    Hello, I'm <span className="md:hidden text-3xl text-emerald-400">Jr Mohan</span>
                                </h1>
                                <h1 className="hidden md:block text-6xl lg:text-7xl font-bold text-emerald-400 items-center">
                                    JR Mohan
                                </h1>
                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
                                    A <span className="text-emerald-400">Front-End Developer</span>
                                </h1>

                                <div className="pt-4 md:pt-8 py-5">
                                👋 Welcome to my web development portfolio! I'm Jr Mohan, a recent graduate from Seneca Polytechnic with a passion for creating captivating web experiences. With specialized knowledge in React and Next.js, I bring a fresh perspective and innovative solutions to every project I undertake. Whether it's crafting intuitive user interfaces or optimizing performance, I thrive on turning ideas into reality through clean, efficient code!
                                </div>

                                <div className="hidden md:grid grid-cols-3 gap-3 pb-7 pt-4">
                                    <a href="/JrMohan_Resume.pdf" locale={false}>
                                        <div className="hover:cursor-pointer hover:bg-purple-800 duration-200 bg-purple-500 text-white font-semibold text-lg rounded-md flex justify-center items-center h-12 w-full">
                                        Resume
                                        </div>
                                    </a>
                                    <Link href="https://www.linkedin.com/in/jr-mohan-a82562240/">
                                        <div className="hover:cursor-pointer hover:bg-purple-500 hover:text-white duration-200  border-purple-500 border-2 font-semibold text-lg text-purple-500 rounded-md flex justify-center items-center h-12 w-full">
                                            LinkedIn
                                        </div>
                                    </Link>
                                    <Link href="https://github.com/jmar753">
                                        <div className="hover:cursor-pointer hover:bg-purple-500 hover:text-white duration-200  border-purple-500 border-2 font-semibold text-lg text-purple-500 rounded-md flex justify-center items-center h-12 w-full">
                                            GitHub
                                        </div>
                                    </Link>
                                </div>

                                <div className="w-full hidden h-12 justtify-center pt-3 md:grid grid-cols-2">
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
                    </div>

                    {/* image side */}
                    <div className="h-full w-full md:col-span-2 pt-20 md:pt-0 hidden md:flex overflow-visible justify-center items-center">
                        <div className="relative z-0">
                            <img className="relative bg-white object-cover col-span-2 h-[300px] w-[300px] lg:h-[500px] lg:w-[500px] rounded-full shadow-lg z-40 " src="/static/selfieColourCropped.jpg" alt="Picture of the author"/>
                            <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                            <div className="absolute top-0 -right-4 w-80 h-80 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-teal-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                        </div>
                    </div>

                    {/* Mobile */}
                    <div className="pt-4 block md:hidden">
                        <div className="flex justify-center items-center">
                            <img className="bg-white object-cover h-[300px] w-[300px] rounded-full shadow-xl" src="/static/selfieColourCropped.jpg" alt="Picture of the author"/>
                        </div>
                        <div className="grid grid-cols-3 gap-3 py-4">
                            <a href="/JrMohan_Resume.pdf" locale={false}>
                                <div className="hover:cursor-pointer hover:bg-emerald-800 duration-200  bg-emerald-500 text-white font-semibold text-lg rounded-md flex justify-center items-center h-12 w-full">
                                    Resume
                                </div>
                            </a>
                            <Link href="https://www.linkedin.com/in/jr-mohan-a82562240/">
                                <div className="hover:cursor-pointer hover:bg-emerald-500 hover:text-white duration-200  border-emerald-500 border-2 font-semibold text-lg text-emerald-500 rounded-md flex justify-center items-center h-12 w-full">
                                    LinkedIn
                                </div>
                            </Link>
                            <Link href="https://github.com/jmar753">
                                <div className="hover:cursor-pointer hover:bg-emerald-500 hover:text-white duration-200  border-emerald-500 border-2 font-semibold text-lg text-emerald-500 rounded-md flex justify-center items-center h-12 w-full">
                                    GitHub
                                </div>
                            </Link>
                        </div>
                    </div>


                    {/* Carousel Try */}
                    <div class="w-full inline-flex flex-nowrap md:hidden pt-6 overflow-hidden">
                        <ul class="flex items-center justify-center md:justify-start [&_li]:mx-5 [&_img]:max-w-none animate-infinite-scroll">
                            {devIconsMobile.map((item, index) => (
                                <li className="text-center h-full" key={index}>
                                    <div className={`text-center text-4xl`}>
                                        <item.icon className={`mx-auto ${item.properties}`}/>
                                        <h1 className="text-lg font-semibold">{item.name}</h1>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <ul class="flex items-center justify-center md:justify-start [&_li]:mx-5 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
                            {devIconsMobile.map((item, index) => (
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