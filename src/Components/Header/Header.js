import React from 'react'
import "./Header.css"
import { IoMdSearch } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <div className='bg-[#0F3CC9] text-white h-20 w-100vw flex items-center justify-center gap-20'>
            <div className="logo w-10">
                <Link to={"/"}><img className='bg-transparent cursor-pointer' src="https://upload.wikimedia.org/wikipedia/commons/b/bf/Reliance_Jio_Logo.svg" alt="" /></Link>
            </div>
            <div className='flex gap-10 font-bold mr-36'>
                <Link to={"/mobile"} className='hover:underline hover:text-[#BECEFB]'>Mobile</Link>
                <Link to={"/true5g"} className='hover:underline hover:text-[#BECEFB]'>True5G</Link>
                <Link to={"/jiofiber"} className='hover:underline hover:text-[#BECEFB]'>JioFiber</Link>
                <Link to={"airfiber"} className='hover:underline hover:text-[#BECEFB]'><div className='relative'><div className='absolute top-[-17px] right-[13px] text-xxs bg-red-600 px-2 py-0.5 rounded-full'>New</div>Air Fiber</div></Link>
                <Link to={"/business"} className='hover:underline hover:text-[#BECEFB]'>Business</Link>
                <Link to={"/devices"} className='hover:underline hover:text-[#BECEFB]'>Devices</Link>
                <Link to={"/apps"} className='hover:underline hover:text-[#BECEFB]'>Apps</Link>
                <Link to={"/support"} className='hover:underline hover:text-[#BECEFB]'>Support</Link>
            </div>
            <div className='flex gap-3 items-center justify-center '>
                <IoMdSearch size={30} className='bg-white text-black p-1 rounded-full cursor-pointer' />
                <FaUser size={30} className='bg-white text-[#0F3CC9] p-1 rounded-full cursor-pointer hover:text-[#0A2885]' />
            </div>
        </div>
    )
}
