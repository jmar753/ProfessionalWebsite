export default function Timeline(){

    return(
        <div className="h-[calc(100vh-44px)] md:flex items-center justify-center px-2 md:px-10 pt-3 md:pt-0 md:max-w-7xl mx-auto">
            <div class="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
            {/* <!-- Item #1 --> */}
            <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                {/* <!-- Icon --> */}
                <div class="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                </div>
                {/* <!-- Card --> */}
                <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
                    <div class="flex items-center justify-between space-x-2 mb-1">
                        <div class="font-bold text-slate-900">Order Placed</div>
                        <time class="font-caveat font-medium text-indigo-500">08/06/2023</time>
                    </div>
                    <div class="text-slate-500">Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum morbi blandit cursus risus.</div>
                </div>
            </div>

            {/* <!-- Item #2 --> */}
            <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                {/* <!-- Icon --> */}
                <div class="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                    <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="10">
                        <path fill-rule="nonzero" d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z" />
                    </svg>
                </div>
                {/* <!-- Card --> */}
                <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
                    <div class="flex items-center justify-between space-x-2 mb-1">
                        <div class="font-bold text-slate-900">Order Shipped</div>
                        <time class="font-caveat font-medium text-indigo-500">09/06/2023</time>
                    </div>
                    <div class="text-slate-500">Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum morbi blandit cursus risus.</div>
                </div>
            </div>

            </div>
        </div>
    )
}