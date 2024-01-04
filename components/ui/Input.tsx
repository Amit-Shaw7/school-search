"use client";
import { FormValues } from '@/schemas/addSchoolsSchema';
import React from 'react';
import { FieldValues, UseFormRegister, useController } from 'react-hook-form';



interface InputProps {
    label: string;
    name: "name" | "email" | "address" | "city" | "state" | "contact" | "image";
    register: UseFormRegister<FormValues>;
    required?: boolean;
    type: string;
    error: string | undefined
}

const Input = ({ error, type, label, name, register, required }: InputProps) => {
    return (
        <div className='flex flex-col gap-1'>
            <input
                className=' rounded-sm p-2 border-2'
                type={type}
                {...register(name, { required })}
                placeholder={label}
            />
            {error && <span className='text-xs text-red-500'>{error}</span>}
        </div>
    )
}

export default Input