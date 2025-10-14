import { PropsCard } from '@/types/components/Card/card'
import React from 'react'

export default function Card({ title, contenido, duracion, incluye }:PropsCard) {
    return (
        <div className="flex flex-col justify-center items-center p-10 gap-5 shadow-xl/20 cursor-pointer hover:-translate-y-1 hover:transition-all hover:duration-300">
            <div className="flex h-28 w-28 items-center justify-center bg-gray-300 rounded-full">Consulta</div>
            <h2 className="text-xl font-bold">{title}</h2>
            <p className="text-center">{contenido}</p>
            <div className="flex justify-start w-full">
                <ul className="list-disc">
                    <li>Duración: {duracion}</li>
                    <li>Incluye: {incluye}</li>
                </ul>
            </div>
        </div>
    )
}
