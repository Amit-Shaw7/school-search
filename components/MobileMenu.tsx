import Image from 'next/image'
import React from 'react'
import NavItems from './NavItems'

interface Props {
    open: boolean,
    handleClose: () => void
}

const MobileMenu = (props: Props) => {
    return (
        <div className={
            `bg-teal-500 
               h-screen
               w-[300px]
               absolute 
               z-50 
               top-0 
               ${props.open ? "left-0" : "-left-[300px]"} 
               transition-all 
               duration-300 
               ease-in-out
               flex
               md:hidden`
        }>
            <div onClick={props.handleClose} id="cross-btn" className='absolute top-10 right-10'>
                <Image src={'/assets/close.svg'} alt='close' width={30} height={30}/>
            </div>

            <div id="links" className='flex flex-col gap-5 mt-32 items-center w-full'>
                <NavItems />
            </div>
        </div>
    )
}

export default MobileMenu