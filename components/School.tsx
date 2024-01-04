import Image from 'next/image'
import React from 'react'

interface SchoolProps {
    school : SchoolType
}

type SchoolType = {
    id : string,
    image : string,
    name : string,
    email_id : string,
    contact : string
}

const School = ({school}:SchoolProps) => {
    return (
        <div className='shadow-md rounded-lg flex flex-col gap-3' key={school.id}>
            <div className='flex items-center justify-center'>
                <Image
                    src={school.image}
                    alt={school.name}
                    width={300}
                    height={300}
                />
            </div>
            <div className='p-4 flex flex-col gap-3'>
                <h4 className='text-md font-bold text-md text-teal-500 break-words'>{school.name}</h4>
                <p className='font-semibold text-sm break-words'>{school.email_id}</p>
                <p className='font-semibold text-sm break-words'>{school.contact}</p>
            </div>
        </div>
    )
}

export default School