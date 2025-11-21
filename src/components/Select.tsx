import { PropsSelect } from '@/types/components/Select/select'
import React from 'react'

export default function Select({ label, labelOptions, icon, style, info, error, name, register }:PropsSelect) {
    return (
        <div className="flex flex-col">
            <label className={`block text-sm font-medium text-gray-700 mb-2 ${style}`}>{icon} {label}</label>
            <select
                {...register(name)}
                // value={value}
                // onChange={(e) => onChange(e.target.value)}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${error ? 'border-red-500' : 'border-gray-300'}`}
            >
                <option value="">{labelOptions}</option>
                {info && info.map(data => (
                    <option key={data} value={data}>{data}</option>
                ))}
            </select>
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
    )
}
