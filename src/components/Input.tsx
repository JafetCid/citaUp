import { PropsInput } from '@/types/components/Input/input'
import React from 'react'

export default function Input({ label, icon, type, min, placeholder, style, error, value, onChange }: PropsInput) {
    return (
        <div className="flex flex-col">
            <label className="block text-sm font-medium text-gray-700 mb-2 ">{icon} {label}</label>
            <input
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${error ? 'border-red-500' : 'border-gray-300'} ${style}`}
                type={type}
                min={min}
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                // required
            />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
    )
}
