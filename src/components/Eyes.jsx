import React, { useEffect,useState } from 'react'

const Eyes = () => {

    const [rotate,setRotate] = useState(0)

useEffect(()=>{
    window.addEventListener("mousemove",(e)=>{
        let mouseX = e.clientX  // the point on x-axis at which our cursor is present
        let mouseY = e.clientY  // the point on y-axis at which our cursor is present
        let centerX = window.innerWidth/2  // center point on x-axis
        let centerY = window.innerHeight/2 // center point on y-axis
        let diffX = mouseX - centerX // difference between center point and cursor point on x-axis
        let diffY = mouseY - centerY // difference between center point and cursor point on y-axis
        let angleinRadians = Math.atan2(diffY,diffX)
        let angleInDegree = angleinRadians * (180/Math.PI)  
        setRotate(angleInDegree-180)
    })
})

    return (
        <div className='Eyes w-full h-screen overflow-hidden'>
            <div data-scroll data-scroll-speed='-0.7' className='relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]'>
                <div className='flex gap-10 absolute top-1/2 left-1/2  -translate-x-[50%] -translate-y-[50%]'>
                    <div className='flex item-center justify-center w-[15vw] h-[15vw] bg-zinc-100 rounded-full'>
                        <div className='relative w-2/3 h-2/3 my-auto bg-zinc-900 rounded-full'>
                            <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-7 my-auto'>
                                <div className='w-7 h-7 my-auto bg-zinc-100 rounded-full'></div>
                            </div>
                        </div>
                    </div>
                    <div className='flex item-center justify-center w-[15vw] h-[15vw] bg-zinc-100 rounded-full'>
                        <div className='relative w-2/3 h-2/3 my-auto bg-zinc-900 rounded-full'>
                            <div style={{transform:`translate(-50%, -50%) rotate(${rotate}deg)`}} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-7 my-auto'>
                                <div className='w-7 h-7 my-auto bg-zinc-100 rounded-full'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Eyes