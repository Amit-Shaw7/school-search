import Image from 'next/image'
import React from 'react'
import Button from './ui/Button'
import Link from 'next/link'

const Hero = () => {
    return (
        <div className='flex px-8 sm:p-8 lg:px-24 items-center mt-16 md:mt-10 lg:mt-0'>

            <div id="description" className='w-[95%] md:w-[50%] h-full justify-center flex flex-col gap-5'>
                <h1 className='font-extrabold text-6xl'>
                    Find the 
                    <span className='text-teal-600 '> best school </span>
                    for your child
                </h1>

                <p className='text-slate-500 text-md font-semibold'>Explore the best school (ICSE , CBSE and State Boards) in your city</p>

                <Link href={'/showschools'}>
                    <Button size='large' text='Explore Schools' type='button' />
                </Link>
            </div>

            <div className='hidden md:flex w-[50%] h-full items-center justify-end' id="image">
                <Image
                    src={'/assets/hero.png'}
                    alt='hero'
                    width={600}
                    height={600}
                />
            </div>

        </div>
    )
}

export default Hero