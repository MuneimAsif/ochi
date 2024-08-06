import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";


const LandingPage = () => {

  return (
    <div data-scroll data-scroll-section data-scroll-speed='-0.3' className='w-full h-screen bg-zinc-900 pt-1'>
      <div className='textstructure mt-40 px-20'>
        {["We Create", "Eye Opening", "Presentations"].map((x, i) => {
          return <div key={i} className='masker'>
            <div className='w-fit flex overflow-hidden'>
              {i === 1 && (<motion.div
                initial={{ width: 0 }}
                animate={{ width: '9vw' }}
                transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                className='w-[8vw] h-[5.7vw]  bg-green-500 rounded mr-[1vw] flex justify-center items-center'>
                <img className='w-[100%]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfQjF2oXIWnpRoYiLU5jnb6x_kUPGjcSUUYcfwJoMWs4fI3dQy" alt="" />
              </motion.div>)}
              <h1 className="uppercase text-[6vw] font-['Neue_Montreal'] leading-none tracking-tight font-semibold">{x}</h1>
            </div>
          </div>
        })}
      </div>
      <div className='border-t-[1px] border-zinc-700 mt-20 flex items-center justify-between py-2 px-20'>
        {["For public and private companies", "From the first pitch to IPO"].map((x, i) => {
          return <p className='text-md font-light tracking-tight leading-none'>{x}</p>
        })}
        <div className='start flex items-center gap-1'>
          <div
            className='hover:bg-white hover:text-zinc-900 duration-500 ease-in-out px-4 py-2 border-[1px] border-zinc-400 rounded-full font-medium text-sm uppercase'>Start the project</div>
          <div className='flex items-center justify-center w-10 h-10 rounded-full border-[1px] border-zinc-400 hover:bg-white hover:text-zinc-900 duration-500 ease-in-out'>
            <span className='rotate-[45deg]'>
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>

    </div>
  )
}

export default LandingPage  