import { motion } from 'framer-motion'
import React from 'react'

const Marquee = () =>{
    
    return (
        <>
            <div  data-scroll data-scroll-section data-scroll-speed='-0.1' className='w-full py-20 rounded-t-3xl bg-[#004d43] mt-20'>
                <div className='flex whitespace-nowrap overflow-hidden Text border-t-2 border-b-2 border-zinc-300'>
                    <motion.h1 initial={{x:0}} animate={{x:'-100%'}} transition={{repeat:Infinity,ease:'linear',duration:7}} className='uppercase mb-5 pr-10 text-[14vw] leading-none font-extrabold font-["Neue_Montreal"]'>We are ochi</motion.h1>
                    <motion.h1 initial={{x:0}} animate={{x:'-100%'}} transition={{repeat:Infinity,ease:'linear',duration:7}} className='uppercase mb-5 pr-10 text-[14vw] leading-none font-extrabold font-["Neue_Montreal"]'>We are ochi</motion.h1>
                </div>
            </div>
        </>
    )
}

export default Marquee