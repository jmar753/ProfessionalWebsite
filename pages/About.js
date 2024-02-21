import { useState } from "react"

export default function About() {
    const [aboutImages, setAboutImages] = useState(["forest.jpg", "leaves.jpg", "boating.jpg", "lake.jpg", "fwip.jpg"])
    
    function switchImages(toChange){
        console.log("clicked")
        console.log("before: " + aboutImages)
        var tempArr = aboutImages
        var temp = tempArr[4]
        tempArr[4] = tempArr[toChange]
        tempArr[toChange] = temp
        setAboutImages(tempArr)
        console.log("after: " + aboutImages)
    }

    return (
        <div className="h-[calc(100vh)] items-center flex px-10 max-w-7xl mx-auto">
            <div className="grid grid-cols-5 gap-4 h-full w-full relative items-center">
                
                {/* image side */}
                <div className="h-full col-span-3">
                    <div className="h-full flex items-center justify-center w-full relative z-0">
                        <img className="absolute top-[200px] left-[00px] object-cover col-span-2 w-36 h-36 rounded-full z-40 animate-float border-4 border-black" src={`/static/${aboutImages[0]}`} alt="" onClick={()=>switchImages(0)}/>
                        <img className="absolute top-[200px] right-[00px] object-cover col-span-2 w-36 h-36 rounded-full z-20 border-4 border-black animate-float animation-delay-2000" src={`/static/${aboutImages[1]}`} alt="" onClick={()=>switchImages(1)}/>
                        <img className="absolute bottom-[200px] left-[00px] object-cover col-span-2 w-36 h-36 rounded-full z-40 border-4 border-black animate-float animation-delay-4000" src={`/static/${aboutImages[2]}`}alt="" onClick={()=>switchImages(2)}/>
                        <img className="absolute bottom-[200px] right-[00px] object-cover col-span-2 w-36 h-36 rounded-full z-40 border-4 border-black animate-float animation-delay-6000" src={`/static/${aboutImages[3]}`} alt="" onClick={()=>switchImages(3)}/>

                        <img className="relative object-cover col-span-2 h-[500px] w-[500px] rounded-full z-10 border-4 border-black" src={`/static/${aboutImages[4]}`} alt=""/>

                    </div>
                </div>

                {/* Text side */}
                <div className="py-12 h-[500px] col-span-2 pl-20">
                    <h1 className="text-5xl font-semibold text-emerald-500">
                        <span className="text-black">About</span> Me
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
    )
  }