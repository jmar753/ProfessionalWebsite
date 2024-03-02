import Link from "next/link"

export default function Portfolio() {

    const websiteArray = [
        {name:"Museum Search", link:"https://jr-mohan-museum-basic.vercel.app/", imageLoc:"/portfolio/museum.jpg"},
    ]

    return (
        <div className="min-h-screen z-30 bg-white relative">
            <div className="mx-auto">
                <h1 className="text-4xl md:text-5xl pt-20 font-semibold text-emerald-500 text-center pb-5">
                    <span className="text-neutral-800">My</span> Portfolio
                </h1>
                <div className="flex flex-wrap justify-center">

                    {websiteArray.map((item, index) => (
                    <Link href={item.link}  key={item.name}>
                        <div className="p-4 max-w-2xl" key={item.name}>
                            <div className="hover:cursor-pointer flex rounded-lg shadow-xl h-full flex-col transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
                                
                                <img className="object-cover col-span-2 rounded-lg m-4" src={item.imageLoc} alt=""/>
                                
                                {/* Skills*/}
                                <p className="text-neutral-500 leading-relaxed text-lg font-bold px-4">
                                    Next.js & Bootstrap
                                </p>

                                {/* Title*/}
                                <p className="leading-relaxed text-2xl font-bold px-4">
                                    Museum Page with Working Back-End
                                </p>
                                <div className="py-6">

                                </div>
                            </div>
                        </div>
                    </Link>
                    ))}

                </div>
            </div>
        </div>
    )
  }