export default function Portfolio() {

    const websiteArray = [
        {name:"example"},
        {name:"example"},
        {name:"example"},
        {name:"example"},
    ]

    return (
        <div className="">
            <div className="mx-auto">
                <h1 className="text-4xl md:text-5xl py-10 font-semibold text-emerald-500 text-center">
                    <span className="text-black">My</span> Portfolio
                </h1>
                <div className="flex flex-wrap justify-center">

                    {websiteArray.map((item, index) => (
                    <div className="p-4 max-w-2xl" key={index}>
                        <div className="hover:cursor-pointer flex rounded-lg shadow-xl h-full flex-col transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
                            
                            <img className="object-cover col-span-2 w-36 h-36 rounded-lg m-4" src={`/static/forest.jpg`} alt=""/>
                            
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
                    ))}

                </div>
            </div>
        </div>
    )
  }