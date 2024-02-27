export default function Timeline(){

    return(
        <div className="md:min-h-[calc(100vh-44px)] md:flex items-center justify-center py-14 lg:py-0">
            <div className="px-2 md:px-10 pt-3 md:pt-0 md:max-w-7xl mx-auto">
                <div className="container mx-auto">
                    <div className="grid gap-4 mx-4 sm:grid-cols-12">
                        <div className="col-span-12 sm:col-span-3">
                            <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-emerald-400">
                                <h3 className="text-3xl font-semibold">My Timeline</h3>
                            </div>
                        </div>
                        <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
                            <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-700">

                                {/* 1 */}
                                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-emerald-400">
                                    <h3 className="text-xl font-semibold tracki">Start of Studies - Seneca Polytechnic | Computer Programming </h3>
                                    <time className="text-xs tracki uppercase text-gray-400">Sep 2021</time>
                                </div>

                                {/* 2 */}
                                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-emerald-400">
                                    <h3 className="text-xl font-semibold tracki">Co-Op at Andie (alwaysandie) | Front-End Intern</h3>
                                    <time className="text-xs tracki uppercase text-gray-400">Sep 2022 - Mar 2023</time>
                                    <p className="mt-3">Designed and developed Andie’s various in-house applications for internal teams, and also helped developed various versions of the Andie website using React and Tailwind.</p>
                                </div>

                                {/* 3 */}
                                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-emerald-400">
                                    <h3 className="text-xl font-semibold tracki">Return Offer from Andie | Front-End Dev</h3>
                                    <time className="text-xs tracki uppercase text-gray-400">Apr 2023 - Sep 2023</time>
                                    <p className="mt-3">Received return offer outside of co-op to continue developing for the company. Learned about back-end development and databases using Django. Selected as the main front-end developer for Andie’s company website and main catering application.</p>
                                </div>

                                {/* 4 */}
                                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-emerald-400">
                                    <h3 className="text-xl font-semibold tracki">Graduated From Seneca</h3>
                                    <time className="text-xs tracki uppercase text-gray-400">Sep 2023</time>
                                    <p className="mt-3">Graduated with 4.0 GPA, achieving high honours. <a>View My Transcript</a></p>
                                </div>

                                {/* 5 */}
                                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-emerald-400">
                                    <h3 className="text-xl font-semibold tracki">Started Programming Portfolio</h3>
                                    <time className="text-xs tracki uppercase text-gray-400">Dec 2023 - Today</time>
                                    <p className="mt-3">Continuing to develop front-end projects by creating web and landing pages using React and Next.js. Learning new things about frameworks and design everyday and enjoying my time expressing myself with every new project!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}