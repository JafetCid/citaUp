import { PropsInput } from '@/types/components/Input/input'
import React from 'react'

export default function Input({ label, type, placeholder, style, value, onChange }: PropsInput) {
    return (
        <div className="flex flex-col">
            <label>{label}</label>
            <input
                className={`border p-2 rounded-md ${style}`}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                required
            />
        </div>
    )
}
