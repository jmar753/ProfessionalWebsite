import logo from "../public/static/selfie.png"
import selfie from "@/public/static/selfie.png"
import Image from "next/image"

//languages
// import { RiJavascriptFill, TbBrandCpp, FaHtml5, IoLogoCss3, FaPython, FaTools } from 'react-icons/fa';
// import { FaReact, TbBrandNextjs, FaNodeJs, SiTailwindcss, FaBootstrap } from 'react-icons/fa';
// import { FaGithub, FaJira, FaDocker, FaBitbucket, GrOracle } from 'react-icons/fa';
// import { DiPostgresql, TbBrandMysql, DiMongodb } from 'react-icons/fa';
import {RiJavascriptFill} from 'react-icons/ri'
import {TbBrandCpp, TbBrandNextjs, TbBrandMysql} from 'react-icons/tb'
import {FaHtml5, FaPython, FaTools, FaReact, FaNodeJs, FaBootstrap, FaGithub, FaJira, FaDocker, FaBitbucket} from 'react-icons/fa'
import {IoLogoCss3} from 'react-icons/io'
import {SiTailwindcss, SiCplusplus} from 'react-icons/si'
import {GrOracle} from 'react-icons/gr'
import {DiPostgresql, DiMongodb} from 'react-icons/di'

export default function Home(){
    const homeInfo = [
        {topText:"23+", bottomText:"Projects developed from scratch"},
        {topText:"2+", bottomText:"Years of Experience"},
        {topText:"96%", bottomText:"Positive feedback from work"},
        {topText:"8", bottomText:"People Team Lead"},
    ]

    // const languageInfo = [
    //     {icon:FaHtml5, iconName:"JavaScript"},
    //     {icon:FaHtml5, iconName:"C++"},
    //     {icon:FaHtml5, iconName:"HTML"},
    //     {icon:FaHtml5, iconName:"CSS"},
    //     {icon:FaPython, iconName:"Python"},
    //     {icon:FaTools, iconName:"Idk"},
    // ]

    const languageInfo = [
        {icon: RiJavascriptFill, iconName:"JavaScript"},
        {icon: SiCplusplus, iconName:"C++"},
        {icon: FaHtml5, iconName:"HTML"},
        {icon: IoLogoCss3, iconName:"CSS"},
        {icon: FaPython, iconName:"Python"}
    ]

    const frameworksInfo = [
        {icon:FaReact, iconName:"React"},
        {icon:TbBrandNextjs, iconName:"NextJS"},
        {icon:FaNodeJs, iconName:"Node.js"},
        {icon:SiTailwindcss, iconName:"TailwindCSS"},
        {icon:GrOracle, iconName:"Bootstrap"},
    ]

    const toolsInfo = [
        {icon:FaGithub, iconName:"Github"},
        {icon:FaJira, iconName:"Jira"},
        {icon:FaDocker, iconName:"Docker"},
        {icon:FaBitbucket, iconName:"BitBucket"},
        {icon:FaBootstrap, iconName:"Bootstrap"},
    ]

    const databasesInfo = [
        {icon:DiPostgresql, iconName:"PostgreSQL"},
        {icon:TbBrandMysql, iconName:"MySQL"},
        {icon:DiMongodb, iconName:"MongoDB"},
    ]

    return(
        <div className="">

            {/* My name is section*/}
            <div className="pb-12">
                <div className="grid grid-cols-5 text-white pt-8 py-16 relative">
                    <div className="p-12 col-span-3">
                        <div className="text-3xl font-semibold">
                            Hello! My name is  <span className="text-emerald-400">Lorem Ipsum</span>
                        </div>
                        <div className="text-2xl">
                            A  <span className="text-emerald-400">Neque porro quisquam</span>
                        </div>
                        <div className="pt-12">
                            Welcome to my Web Development services! I am a dedicated frontend developer committed to bringing your digital vision to life with cutting-edge technilogies and stunning designs.
                        </div>
                        <button className="text-white bg-purple-600 p-3 mt-7 mr-24 rounded hover:bg-purple-800">
                            Download Resume
                        </button>
                    </div>
                    <img className="object-cover col-span-2 pt-8 h-full absolute bottom-0 right-14" src="/static/selfie.png" alt="Picture of the author"/>
                </div>

                {/* information tab */}
                <div className="grid grid-cols-4 mx-11 py-6 bg-neutral-800 rounded-2xl">
                    {homeInfo.map((item, index) => (
                        <div className="text-center">
                            <div className="text-emerald-400 text-5xl" key={item.topText}>
                            {item.topText}
                            </div>
                            <div className="text-white" key={item.topText}>
                            {item.bottomText}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            {/* Skills section */}
            <div className="text-white text-center py-20 pb-32">
                <div className="text-emerald-400 text-5xl py-12">
                    Skills
                </div>

                <div className="grid grid-cols-2 gap-6">
                    {/* languages */}
                    <div>
                        <h1 className="text-3xl pb-4">Languages</h1>
                        <div className="grid grid-cols-3 grid-rows-2 gap-4 px-12">
                            {languageInfo.map((item, index) => (
                                <div className="text-center flex bg-neutral-800 rounded p-2">
                                    <div className="text-emerald-400 text-3xl">
                                        <item.icon/>
                                    </div>
                                    <div className="text-white flex items-center justify-center pl-2">
                                    {item.iconName}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* frameworks */}
                    <div>
                        <h1 className="text-3xl pb-4">Frameworks</h1>
                        <div className="grid grid-cols-3 grid-rows-2 gap-4 px-12">
                            {frameworksInfo.map((item, index) => (
                                <div className="text-center flex bg-neutral-800 rounded p-2">
                                    <div className="text-emerald-400 text-3xl">
                                        <item.icon/>
                                    </div>
                                    <div className="text-white flex items-center justify-center pl-2">
                                    {item.iconName}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* tools */}
                    <div>
                        <h1 className="text-3xl pb-4">Tools</h1>
                        <div className="grid grid-cols-3 grid-rows-2 gap-4 px-12">
                            {toolsInfo.map((item, index) => (
                                <div className="text-center flex bg-neutral-800 rounded p-2">
                                    <div className="text-emerald-400 text-3xl">
                                        <item.icon/>
                                    </div>
                                    <div className="text-white flex items-center justify-center pl-2">
                                    {item.iconName}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* databases */}
                    <div>
                        <h1 className="text-3xl pb-4">Databases</h1>
                        <div className="grid grid-cols-3 grid-rows-2 gap-4 px-12">
                            {databasesInfo.map((item, index) => (
                                <div className="text-center flex bg-neutral-800 rounded p-2">
                                    <div className="text-emerald-400 text-3xl">
                                        <item.icon/>
                                    </div>
                                    <div className="text-white flex items-center justify-center pl-2">
                                    {item.iconName}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}