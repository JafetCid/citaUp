import { PropsSelect } from '@/types/components/Select/select'
import React from 'react'

export default function Select({ label, icon, style, value, onChange, info, error }:PropsSelect) {
    return (
        <div className="flex flex-col">
            <label className={`block text-sm font-medium text-gray-700 mb-2 ${style}`}>{icon} {label}</label>
            <select
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${error ? 'border-red-500' : 'border-gray-300'}`}
            >
                <option>Selecciona una hora</option>
                {info && info.map(data => (
                    <option key={data} value={data}>{data}</option>
                ))}
            </select>
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
    )
}
