import { PropsTextArea } from '@/types/components/TextArea/textarea'
import React from 'react'

export default function TextArea({ label, placeholder, style, error, name, register }: PropsTextArea) {
    return (
        <div className="flex flex-col">
            <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
            <textarea
                className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none ${style}`}
                placeholder={placeholder}
                rows={4}
                {...register(name)}
            // value={value}
            // onChange={(e) => onChange(e.target.value)}
            >
            </textarea>
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
    )
}
