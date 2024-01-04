import Link from 'next/link'
import React from 'react'
import Button from './ui/Button'
import { links } from '@/mocks/links'

const NavItems = () => {
    return (
        <>
            {
                links.map((link) => (
                    <Link key={link.label} href={link.href}>
                        <Button size='small' text={link.label} type='button' />
                    </Link>
                ))
            }
        </>
    )
}

export default NavItems