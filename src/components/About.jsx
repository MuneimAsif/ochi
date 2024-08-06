import React from 'react'

const About = () => {
    return (
        <>
            <div data-scroll data-scroll-section data-scroll-speed='-0.05' className='w-full p-20 bg-[#CDEA68] rounded-t-3xl text-black'>
                <h1 className='font-["Neue_Montreal"] text-[4vw] leading-[4vw] tracking-tight'>Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
                <div className='w-full flex gap-5 border-t-[1px] pt-10 mt-20 border-[#a1b562]'>
                    <div className='w-1/2'>
                        <h1 className='text-7xl'>Our approach:</h1>
                        <button className='flex gap-10 hover:bg-[#CDEA68] duration-500 ease-in-out uppercase items-center mt-10 px-10 py-5 bg-zinc-900 rounded-full text-white font-medium'>Read More
                            <div className='w-2  h-2 bg-zinc-100 rounded-full'></div>
                        </button>
                    </div>
                    <div className='w-1/2  h-[75vh] rounded-3xl bg-[#b0c859]'></div>
                </div>
            </div>
        </>
    )
}

export default About