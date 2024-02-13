import logo from "../public/static/selfie.png"
import selfie from "@/public/static/selfie.png"
import Image from "next/image"

export default function Home(){

    return(
        <div className="">

            {/* First Viewport*/}
            <div className="py-24 h-screen">
                <div className="grid grid-cols-5 pt-8 py-16 relative">

                    {/* Text side */}
                    <div className="p-12 col-span-3">
                        <h1 className="text-5xl font-semibold">
                            Hello, I'm
                        </h1>
                        <h1 className="text-7xl font-bold text-emerald-400 items-center">
                            JR Mohan
                        </h1>
                        <h1 className="text-5xl font-semibold">
                            A  <span className="text-emerald-400">Front-End Developer</span>
                        </h1>
                        <div className="pt-12">
                            Welcome to my Web Development services! I am a dedicated frontend developer committed to bringing your digital vision to life with cutting-edge technilogies and stunning designs.
                        </div>
                        <button className="text-white bg-purple-600 p-3 mt-7 mr-24 rounded hover:bg-purple-800">
                            Download Resume
                        </button>
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

            {/* Second Viewport*/}
            <div className="py-24 h-screen">
                <div className="grid grid-cols-5 pt-8 py-16 relative h-[550px]">
                    <div className="p-12 col-span-3">
                        <h1 className="text-5xl font-semibold">
                            Hello, I'm
                        </h1>
                        <h1 className="text-7xl font-bold text-emerald-400 items-center">
                            JR Mohan
                        </h1>
                        <h1 className="text-5xl font-semibold">
                            A  <span className="text-emerald-400">Front-End Developer</span>
                        </h1>
                        <div className="pt-12">
                            Welcome to my Web Development services! I am a dedicated frontend developer committed to bringing your digital vision to life with cutting-edge technilogies and stunning designs.
                        </div>
                        <button className="text-white bg-purple-600 p-3 mt-7 mr-24 rounded hover:bg-purple-800">
                            Download Resume
                        </button>
                    </div>
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
        </div>
    )
}