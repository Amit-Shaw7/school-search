import School from '@/components/School'
import { schools } from '@/mocks/school'
import React from 'react'

const showSchools = () => {
  return (
    <div className='w-full md:p-20 p-5'>
      <h1 className='text-3xl font-bold mb-10'>Schools</h1>
      <div className='w-full grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-3 xxs:grid-cols-2 gap-10'>
        {
          schools.map((school) => (
            <School key={school.id} school={school}/>
          ))
        }
      </div>
    </div>
  )
}

export default showSchools