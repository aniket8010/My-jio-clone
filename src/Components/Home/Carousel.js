import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel'

export const Carousel1 = () => {
    return (
        <>
            <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false} showIndicators={false} transitionTime={1000} centerMode="center" className='pt-4 flex flex-col '>
                <div className='mx-[10px] rounded-sm'>
                    <img className='relative rounded-xl' src="https://jep-asset.akamaized.net/cms/assets/new-home/desktop-airfiber-homepage-banner.webp" alt="" />
                    <div className='flex justify-start'>
                        <p className='absolute left-14 top-36 text-white text-base px-5 py-3 font-bold rounded-full bg-[#0078AD]'>AIRFIBER</p>
                        <p className='absolute left-14 top-48 text-5xl font-bold text-white' >Freedom Offer</p>
                        <p className='absolute left-14 top-[260px] text-base font-semibold text-white'>Get installation worth ₹1000 free.</p>
                        <div>
                            <button className='bg-[#0078AD] px-4 py-2 text-white font-bold rounded-full absolute left-14 top-[300px] text-base'>Claim Offer</button>
                        </div>
                    </div>
                </div>
                <div className='mx-[10px] rounded-sm'>
                    <img className='rounded-xl' src="https://jep-asset.akamaized.net/cms/assets/new-home/5g-mobility-price-hike-desk.webp" alt="" />
                    <p className='absolute left-14 top-32 text-white text-base px-5 py-3 font-bold rounded-full bg-[#3535F3]'>True 5G</p>
                    <p className='absolute left-14 top-48 text-5xl font-bold text-white' >Live your life , the</p>
                    <p className='absolute left-14 top-60 text-5xl font-bold text-white' >True 5G way</p>
                    <p className='absolute left-14 top-[300px] text-base font-semibold text-white'>Now enjoy unlimited True 5G on all 2GB/day and above prepaid plans.</p>
                    <div>
                        <button className='bg-[#3535F3] px-4 py-2 text-white font-bold rounded-full absolute left-14 top-[340px] text-base'>Recharge now</button>
                    </div>
                </div>
                <div className='mx-[10px] rounded-sm'>
                    <img className='rounded-xl' src="https://jep-asset.akamaized.net/cms/assets/new-home/jiophone_prima_l.webp" alt="" />
                    <p className='absolute left-14 top-44 text-5xl font-extrabold text-[26px]' >JioPhone Prime</p>
                    <p className='absolute left-14 top-52 text-5xl font-bold' >Packed with smart</p>
                    <p className='absolute left-14 top-64 text-5xl font-bold' >features</p>
                    <p className='absolute left-14 top-[320px] text-base font-semibold'>Phones, Starting at ₹2,599.</p>
                    <div className='flex'>
                        <button className='bg-[#3535F3] px-4 py-2 text-white font-bold rounded-full absolute left-14 top-[360px] text-base'>Buy on JioMart</button>
                        <button className='px-4 py-2 font-bold rounded-full border-2 hover:border-black absolute left-56 top-[360px] text-base'>Explore</button>
                    </div>
                </div>
            </Carousel>
        </>
    )
}
