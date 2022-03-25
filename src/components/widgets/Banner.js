import React from 'react';

import '../styles/banner.css';

function Banner(props) {
    function trancate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + " ..." : str;
    }
    return (
        <main class="py-6 px-6 sm:p-6 md:py-10 md:px-8 mt-6">
            <div class="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2">
                <div class="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
                    <h1 class="mt-1 text-lg font-semibold text-white sm:text-slate-900 md:text-2xl dark:sm:text-white">RIP RIKY</h1>
                    <p class="text-sm leading-4 font-medium text-white sm:text-slate-500 dark:sm:text-slate-400">Boss Zonke|| Father of the new wave</p>
                </div>
                <div class="mt-4 grid gap-4 col-start-1 col-end-3 row-start-1 
                            md:mb-6 md:grid-cols-4 
                            lg:grid-cols-4  lg:mb-0">
                    <img src={props.img} alt="" class="w-full h-60 object-cover rounded-lg sm:h-52 sm:col-span-2 md:col-span-full md:h-96  lg:col-span-full lg:h-96" loading="lazy" />
            
                </div>
            </div>
        </main>
    )
}

export default Banner
