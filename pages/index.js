import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Introduction from "./Introduction";
import About from "./About";
import Portfolio from "./Portfolio";
import Timeline from "./Timeline";

export default function Home(){

    return(
        <>
            <Header/>
            <Introduction/>
            <About/>
            <Timeline/>
            <Portfolio/>
        </>
    )
}