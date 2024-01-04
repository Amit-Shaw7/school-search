"use client";
import { FormValues } from '@/schemas/addSchoolsSchema';
import React from 'react';
import { FieldValues, UseFormRegister, useController } from 'react-hook-form';



interface InputProps {
    label: string;
    register: UseFormRegister<FormValues>;
    required?: boolean;
    type: string;
    error: string | undefined
}
const FileInput = ({ error, label, register, required }: InputProps) => {
    return (
        <div className='flex flex-col gap-1'>
            <input
                className=' rounded-sm p-2 border-2'
                type="file"
                {...register("image", { required })}
                placeholder={label}
            />
            {error && <span className='text-xs text-red-500'>{error}</span>}
        </div>
    )
}

export default FileInput