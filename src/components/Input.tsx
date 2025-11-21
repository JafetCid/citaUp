'use client'

import React, { useState } from 'react'
import { FieldValues } from 'react-hook-form'
import { IoEye, IoEyeOffOutline } from 'react-icons/io5';

import { PropsInput } from '@/types/components/Input/input'

export default function Input<T extends FieldValues>({ label, icon, type, min, placeholder, style, error, name, register }: PropsInput<T>) {

    const [showPassword, setShowPassword] = useState<boolean>(false);

    return (
        <div className="relative flex flex-col">
            <label className="block text-sm font-medium text-gray-700 mb-2 ">{icon} {label}</label>
            <input
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${error ? 'border-red-500' : 'border-gray-300'} ${style}`}
                type={ 
                    type === "password" ?
                        showPassword ? 
                            "text" 
                        : "password"
                    : type
                }
                min={min}
                placeholder={placeholder}
                {...register(name)}

            // value={value}
            // onChange={(e) => onChange(e.target.value)}
            // required
            />
            {type === "password" && (
                <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute top-11 right-3 cursor-pointer"
                >
                    {showPassword ? <IoEye size={20} /> : <IoEyeOffOutline size={20} />}
                </button>
            )}
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
    )
}
