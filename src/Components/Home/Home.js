import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel'

export const Home = () => {
    return (
        <>
            <Carousel infiniteLoop showThumbs={false} showStatus={false} showIndicators={false} transitionTime={1000} centerMode="center" className='pt-4 flex flex-col '>
                <div className='mx-[10px] rounded-sm'>
                    <img className='relative rounded-xl' src="https://jep-asset.akamaized.net/cms/assets/new-home/airfiber_l-17-06.webp" alt="" />
                    <div className='flex justify-start'>
                        <p className='absolute left-14 top-36 text-white text-base px-4 py-3 font-bold rounded-full bg-[#0078AD]'>AIRFIBER</p>
                        <p className='absolute left-14 top-48 text-5xl font-bold text-white' >Entertainment just</p>
                        <p className='absolute left-14 top-60 text-5xl font-bold text-white'>levelled up</p>
                        <p className='absolute left-14 top-[305px] text-base font-semibold text-white'>Non-stop TV with unlimited Wi-Fi.</p>
                        <div>
                            <button className='bg-[#0078AD] px-4 py-2 text-white font-bold rounded-full absolute left-14 top-[350px] text-base'>Get AirFiber</button>
                            <button className='px-4 py-2 text-white font-bold rounded-full absolute left-48 top-[350px] text-base border'>Konw More</button>
                        </div>
                    </div>
                </div>
                <div className='mx-[10px] rounded-sm'>
                    <img className='rounded-xl' src="https://jep-asset.akamaized.net/cms/assets/new-home/5g-mobility-price-hike-desk.webp" alt="" />
                </div>
                <div className='mx-[10px] rounded-sm'>
                    <img className='rounded-xl' src="https://jep-asset.akamaized.net/cms/assets/new-home/jiophone_prima_l.webp" alt="" />
                </div>
            </Carousel>
        </>
    )
}
