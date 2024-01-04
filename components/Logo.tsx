import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
    return (
        <Link href={"/"}>
            <div className='flex items-center justify-center gap-5 w-fit'>
                <Image
                    src={'/assets/Logo.png'}
                    alt='School'
                    width={50}
                    height={50}
                />
                <h1 className='hidden md:flex text-md font-extrabold'>Find School</h1>
            </div>
        </Link>
    )
}

export default Logo