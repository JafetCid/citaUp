import { PropsTextArea } from '@/types/components/TextArea/textarea'
import React from 'react'

export default function TextArea({ label, placeholder, style, value, onChange }: PropsTextArea) {
    return (
        <div className="flex flex-col">
            <label>{label}</label>
            <textarea
                className={`border p-2 rounded-md ${style}`}
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                required
            >
            </textarea>
        </div>
    )
}
