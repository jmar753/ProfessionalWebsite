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

    const websiteArray = [
        {name:"example"},
        {name:"example"},
        {name:"example"},
        {name:"example"},
    ]

    return(
        <div className="">

            {/* Introduction */}
            <div className="h-[calc(100vh-44px)] flex items-center justify-center">
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
                    <div className="h-[500px] w-[500px] col-span-2">
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
            <div className="h-screen items-center flex">
                <div className="grid grid-cols-5 h-full relative items-center">
                    
                    {/* image side */}
                    <div className="col-span-3 h-full">
                        <div className="h-full w-full relative z-0">
                            <img className="absolute bg-white object-cover col-span-2 h-[500px] w-[500px] rounded-full border-4 z-40 border-black" src="/static/cowPhoto.jpg" alt="Picture of the author"/>
                        </div>
                    </div>

                    {/* Text side */}
                    <div className="py-12 h-[500px] col-span-2">
                        <h1 className="text-xl font-semibold text-emerald-500">
                            About Me
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
            <div className="h-screen ">
                <h1 className="text-xl font-bold text-emerald-500">
                    Portfolio
                </h1>
                <div class="flex flex-wrap justify-center">

                    {websiteArray.map((item, index) => (
                    <div class="p-4 max-w-sm">
                        <div class="flex rounded-lg border-4 border-black h-full bg-neutral-800 flex-col transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">

                            {/* black section */}
                            <div class="flex flex-col justify-between flex-grow rounded-t-lg p-8">
                                <p class="leading-relaxed text-base text-white dark:text-gray-300">
                                    Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.
                                </p>
                            </div>

                            {/* white section */}
                            <div class="flex items-center rounded-b-lg bg-white">
                                <h2 class="">Feature 1</h2>
                            </div>
                        </div>
                    </div>
                    ))}

                </div>

            </div>
        </div>
    )
}