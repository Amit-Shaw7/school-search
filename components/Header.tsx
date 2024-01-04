"use client";
import React, { useState } from 'react'
import Logo from './Logo'
import Button from './ui/Button'
import Link from 'next/link'
import Image from 'next/image'
import MobileMenu from './MobileMenu';
import NavItems from './NavItems';

const Header = () => {
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(!open)
    }
    return (
        <div className='h-[70px] w-full px-4 lg:px-14 flex items-center justify-between'>
            <Logo />

            <div id='links' className='hidden md:flex gap-5 items-center justify-center'>
                <NavItems />
            </div>

            <div onClick={() => setOpen(!open)} className='flex md:hidden'>
                <Image src={'/assets/menu.svg'} alt='menu' width={30} height={30} />
            </div>

            <MobileMenu open={open} handleClose={handleClick} />
        </div>
    )
}

export default Header