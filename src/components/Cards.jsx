import React from 'react'

const Cards = () => {
    return (
        <>
            <div className='w-full h-screen bg-zinc-900 flex gap-5 items-center px-20'>
                <div className="cardContainer h-[60vh] w-1/2">
                    <div className='card relative flex items-center justify-center rounded-xl w-full h-full bg-[#004D43]'>
                        <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                        <button className='absolute left-10 bottom-10 hover:bg-[#CDEA68] hover:text-zinc-900 duration-500 ease-in-out px-5 rounded-full border-[#CDEA68] border font-medium text-[#CDEA68]'>&copy;2019-2022</button>
                    </div>
                </div>
                <div className="cardContainer h-[60vh] w-1/2 flex gap-5">
                    <div className='card relative flex items-center justify-center rounded-xl w-1/2 h-full bg-[#212121]'>
                        <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                        <button className='absolute left-10 bottom-10 hover:bg-white hover:text-zinc-900 duration-500 ease-in-out border px-3 py-1 rounded-full text-xs font-normal font-["Neue_Montreal"]'>RATING 5.0 ON CLUTCH</button>
                    </div>
                    <div className='card relative flex items-center justify-center rounded-xl w-1/2 h-full bg-[#212121]'>
                        <img className='w-24' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                        <button className='absolute left-10 bottom-10 hover:bg-white hover:text-zinc-900 duration-500 ease-in-out border px-3 py-1 rounded-full text-xs font-normal font-["Neue_Montreal"]'>BUISNESS BOOTCAMP ALUMINI</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards