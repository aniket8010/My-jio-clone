import React, { useEffect, useRef, useState } from 'react'
import { FaMobile } from "react-icons/fa";
import { MdRouter } from "react-icons/md";

export const Connect = () => {
    const [activeTab, setActiveTab] = useState('mobile');

    //create the ref for the "mobile" and "Airfiber" elements

    const mobileRef = useRef(null)
    const airFiberRef = useRef(null)

    const [underlineWidth, setUnderlineWidth] = useState(0);
    const [underlineLeft, setUnderlineLeft] = useState(0)

    //update the underline width and position when activeTab changes

    useEffect(() => {
        if (activeTab === 'mobile' && mobileRef.current) {
            //access the mobile elements width and left position
            setUnderlineWidth(mobileRef.current.offsetWidth)
            setUnderlineLeft(mobileRef.current.offsetLeft)
        } else if (activeTab === 'airfiber' && airFiberRef.current) {
            // Access the "AirFiber/Fiber" element's width and left position
            setUnderlineWidth(airFiberRef.current.offsetWidth);
            setUnderlineLeft(airFiberRef.current.offsetLeft);
        }
    }, [activeTab])

    return (
        <div className='flex items-center justify-center my-16 flex-col'>
            <div className='text-5xl font-extrabold'>
                <h1>Get set, Connect</h1>
            </div>
            <div className='flex gap-8 text-lg items-center justify-center mt-9 mb-2 font-semibold'>
                <div
                    ref={mobileRef} //Attach the ref to the mobile element
                    className={`flex items-center justify-center gap-1 cursor-pointer ${activeTab === 'mobile' ? 'text-black' : 'text-[#5a5a5a] '}`}
                    onClick={() => setActiveTab('mobile')}
                >
                    <FaMobile />
                    <p>Mobile</p>
                </div>

                <div
                    ref={airFiberRef} // Attach the ref to airfiber element
                    className={`flex items-center justify-center gap-1 cursor-pointer ${activeTab === 'airfiber' ? 'text-black' : 'text-[#5a5a5a] '}`}
                    onClick={() => setActiveTab('airfiber')}
                >
                    <MdRouter size={22} />
                    <p>AirFiber/Fiber</p>
                </div>
            </div>
            <div className='relative w-full'>
                <div
                    className='absolute bottom-0 h-1 bg-[#0F3CC9] transition-all duration-300 rounded-full'
                    style={{
                        width: underlineWidth, // Set the width of the underline
                        left: underlineLeft,   // Set the position of the underline
                    }}
                />
            </div>
        </div>
    )
}
