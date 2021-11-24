import React from 'react';
import Image from "next/image";
import {ThumbUpIcon} from "@heroicons/react/outline";
import {forwardRef} from "react";

const Thumbnail = forwardRef(({thumbnail}, ref) => {
    const BASE_URL = "https://image.tmdb.org/t/p/original/"


    return (
        <div ref={ref} className='p-2 group cursor-pointer transition duration-200 ease-in
        transform sm:hover:scale-105 hover:z-50'>
            <Image
                layout={"responsive"}
                src={BASE_URL + thumbnail.backdrop_path || thumbnail.poster_path}
                width={1920}
                height={1080}
            />
            <div className='p-2 '>
                <p className='truncate max:max-w-md'>{thumbnail.overview}</p>
                <h2 className='mt-1 text-2xl transition-all
                group-hover:font-bold
                duration-100 ease-in-out'>
                    {thumbnail.title || thumbnail.original_name}</h2>
                <div className={'flex items-center opacity-0 group-hover:opacity-100'}>
                    <p>
                        {thumbnail.media_type && `${thumbnail.media_type} •`}{" "}
                        {thumbnail.release_date || thumbnail.first_air_date} • {" "}
                    </p>
                    <ThumbUpIcon className='h-5 mx-2'/>{thumbnail.vote_count}
                </div>
            </div>
        </div>
    );
});

export default Thumbnail;