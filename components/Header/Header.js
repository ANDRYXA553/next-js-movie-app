import React from 'react';
import Image from "next/image";
import HeaderItem from "./HeaderItem";
import {
    BadgeCheckIcon,
    CollectionIcon,
    HomeIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon
} from "@heroicons/react/outline";

const Header = () => {
    return (
        <header className={'flex flex-col md:flex-row m-5 justify-between items-center h-auto'}>
            <div className={'flex flex-row justify-evenly max-w-2xl sm:mt-7'}>
                <HeaderItem title={'HOME'} Icon={HomeIcon}/>
                <HeaderItem title={'TRENDING'} Icon={LightningBoltIcon}/>
                <HeaderItem title={'VERIFIED'} Icon={BadgeCheckIcon}/>
                <HeaderItem title={'COLLECTIONS'} Icon={CollectionIcon}/>
                <HeaderItem title={'SEARCH'} Icon={SearchIcon}/>
                <HeaderItem title={'ACCOUNT'} Icon={UserIcon}/>

            </div>
            <h1 className='text-6xl font-uber-bold'>Movie-app</h1>

        </header>
    );
};

export default Header;