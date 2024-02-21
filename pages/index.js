import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Introduction from "./Introduction";
import About from "./About";
import Portfolio from "./Portfolio";

export default function Home(){

    return(
        <>
            <Header/>
            <Introduction/>
            <About/>
            <Portfolio/>
        </>
    )
}