import { motion, useAnimation } from 'framer-motion'
import React from 'react'

const Featured = () => {
    const cards = [useAnimation(), useAnimation(), useAnimation(), useAnimation()]
    const handleHover = (index) => {
        cards[index].start({ y: '0' })
    }
    const handleHoverEnd = (index) => {
        cards[index].start({ y: '100%' })
    }
    return (
        <>
            <div className='w-full py-10'>
                <div className='w-full px-20 border-b-[1px] border-zinc-700 pb-10'>
                    <h1 className='text-[4vw] font-["Neue_Mo ntreal"] tracking-tight'>Featured Projects</h1>
                </div>
                
                <div className='px-20'>
                
                    <div className='cards w-full flex gap-10 mt-10'>
                        <motion.div
                            onHoverStart={() => handleHover(0)}
                            onHoverEnd={() => handleHoverEnd(0)}
                            className="relative cardContainer w-1/2 h-[75vh]"
                            >
                                
                            <h1 className='absolute flex overflow-hidden text-[#CDEA68] left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-7xl font-["Neue_Montreal"] leading-none font-semibold tracking-tight'>
                                {"FYDE".split("").map((x, i) =>
                                    <motion.span key={i}
                                        initial={{ y: '100%' }}
                                        animate={cards[0]}
                                        transition={{ ease: [0.34, 1.56, 0.64, 1], delay: i * 0.05 }}
                                    >{x}</motion.span>
                                )}
                            </h1>
                            <div className='card w-full h-full rounded-xl  overflow-hidden'>
                                <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
                            </div>
                        </motion.div>

                        <motion.div
                            onHoverStart={() => handleHover(1)}
                            onHoverEnd={() => handleHoverEnd(1)}
                            className="relative cardContainer w-1/2 h-[75vh]">
                            <h1 className='absolute flex overflow-hidden text-[#CDEA68] right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-7xl font-["Neue_Montreal"] leading-none font-semibold tracking-tight'>
                                {"VISE".split("").map((x, i) => <motion.span key={i}
                                    initial={{ y: '100%' }}
                                    animate={cards[1]}
                                    transition={{ ease: [0.34, 1.56, 0.64, 1], delay: i * 0.05 }}
                                >{x}</motion.span>)}
                            </h1>
                            <div className='card w-full h-full rounded-xl  overflow-hidden'>
                                <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
                            </div>
                        </motion.div>
                    </div>

                    <div className='cards w-full flex gap-10 mt-20'>
                        <motion.div
                            onHoverStart={() => handleHover(2)}
                            onHoverEnd={() => handleHoverEnd(2)}
                            className="relative cardContainer w-1/2 h-[75vh]">
                            <h1 className='absolute flex overflow-hidden text-[#CDEA68] left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-7xl font-["Neue_Montreal"] leading-none font-semibold tracking-tight'>
                                {"TRAWA".split("").map((x, i) =>
                                    <motion.span key={i}
                                        initial={{ y: '100%' }}
                                        animate={cards[2]}
                                        transition={{ ease: [0.34, 1.56, 0.64, 1], delay: i * 0.05 }}
                                    >{x}</motion.span>
                                )}
                            </h1>
                            <div className='card w-full h-full rounded-xl  overflow-hidden'>
                                <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg" alt="" />
                            </div>
                        </motion.div>

                        <motion.div
                            onHoverStart={() => handleHover(3)}
                            onHoverEnd={() => handleHoverEnd(3)}
                            className="relative cardContainer w-1/2 h-[75vh]">
                            <h1 className='absolute flex overflow-hidden text-[#CDEA68] right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-7xl font-["Neue_Montreal"] leading-none font-semibold tracking-tighter'>
                                {"PREMIUM BLEND".split("").map((x, i) => <motion.span key={i}
                                    initial={{ y: '100%' }}
                                    animate={cards[3]}
                                    transition={{ ease: [0.34, 1.56, 0.64, 1], delay: i * 0.03 }}
                                >{x}</motion.span>)}
                            </h1>
                            <div className='card w-full h-full rounded-xl  overflow-hidden'>
                                <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png" alt="" />
                            </div>
                        </motion.div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Featured