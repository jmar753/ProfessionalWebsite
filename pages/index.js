import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Introduction from "./Introduction";
import Portfolio from "./Portfolio";
import Timeline from "./Timeline";

export default function Home(){

    return(
        <div>
            <Header/>
            <Introduction/>
            <Timeline/>
            <Portfolio/>
        </div>
    )
}