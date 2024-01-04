"use client";

import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import addSchoolSchema, { FormValues } from '@/schemas/addSchoolsSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import Image from 'next/image';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

const AddSchools = () => {
  const defaultValues = {
    email: "",
    name: "",
    address: "",
    city: "",
    state: "",
    contact: "",
    image: "",
  }

  const {
    register,
    handleSubmit,
    formState: {
      errors,
    } } = useForm<FormValues>({
      resolver: yupResolver(addSchoolSchema),
      defaultValues
    })

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log("running");

    console.log(data);
  }

  return (
    <div className='h-[90vh] w-full p-32 flex items-center justify-center gap-20'>
      <div className='w-[50%]'>
        {/* <h3 className='text-xl font-semibold text-teal-500'>Fill up the below details to list your school with us</h3> */}
        <Image
          src={'/assets/join-us.svg'}
          alt='join us'
          width={700}
          height={700}
        />

      </div>
      <form className='flex flex-col gap-5 w-[30%] my-10' onSubmit={handleSubmit(onSubmit)}>
        <Input
          type='email'
          label="Email"
          name="email"
          register={register}
          error={errors.email?.message}
          required
        />

        <Input
          type='text'
          label="Name"
          name="name"
          register={register}
          error={errors.name?.message}
          required
        />

        <Input
          type='text'
          label="Address"
          name="address"
          register={register}
          error={errors.address?.message}
          required
        />

        <Input
          type='text'
          label="City"
          name="city"
          register={register}
          error={errors.city?.message}
          required
        />

        <Input
          type='text'
          label="State"
          name="state"
          register={register}
          error={errors.state?.message}
          required
        />


        <Input
          type='text'
          label="Contact"
          name="contact"
          register={register}
          error={errors.contact?.message}
          required
        />

        <Input
          type='text'
          label="Image"
          name="image"
          register={register}
          error={errors.image?.message}
          required
        />

        <Button
          text='Add'
          type='submit'
          size='small'
        />
      </form>
    </div>
  )
}

export default AddSchools