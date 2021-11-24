import React from 'react';
import requests from "../../utils/requests";
import {useRouter} from "next/router";

const Nav = () => {
    const router = useRouter()
    return (
        <nav className='relative'>
            <div
                className={'scrollbar-hide flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll'}>
                {Object.entries(requests).map(([key, {title, url}]) => (
                        <h2 key={key}
                            className='select-none cursor-pointer transition duration-100 transition hover:scale-125
                    hover:text-white active:text-red-400 last:pr-24'
                            onClick={() => router.push(`/?genre=${key}`)}
                        >{title}</h2>
                    )
                )}
            </div>
            <div className='absolute top-0 right-0 bg-gradient-to-l from-[#06202a] to-transparent h-10 w-1/12'/>
            <div className='absolute top-0 right-0-0 bg-gradient-to-r from-[#06202a] h-10 w-1/12'/>
        </nav>
    );
};

export default Nav;