import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Introduction from "./Introduction";
import Portfolio from "./Portfolio";
import Timeline from "./Timeline";
import Link from "next/link";

export default function Home(){

    return(
        <>
            <Header/>
            <a id="Home"/>
            <Introduction/>
            <div className="flex md:hidden bg-gray-50 min-h-[calc(100vh-44px)] text-center px-2 items-center justify-center relative">
                <div className="bg-emerald-400 h-80 w-80 rounded-full absolute -top-40 -left-40"></div>
                <div className="bg-emerald-500 h-80 w-80 rounded-full absolute -bottom-40 -right-40"></div>
                <div className="bg-emerald-200 h-80 w-80 rounded-full absolute -top-40 -right-40"></div>
                <div className="bg-emerald-300 h-80 w-80 rounded-full absolute -bottom-40 -left-40"></div>
                <div>
                    <h1 className="text-4xl font-semibold py-10">About <span className="text-3xl font-semibold text-emerald-400">Me</span></h1>
                    <h1>
                        👋 Welcome to my web development portfolio! I&apos;m Jr Mohan, a recent graduate from Seneca Polytechnic with a passion for creating captivating web experiences. With specialized knowledge in React and Next.js, I bring innovative solutions to every project I undertake. Whether it&apos;s crafting intuitive user interfaces or optimizing performance, I thrive on turning ideas into reality through clean, efficient code!
                    </h1>
                </div>
            </div>
            <a id="Timeline"/>
            <Timeline/>
            <a id="Portfolio"/>
            <Portfolio/>
        </>
    )
}