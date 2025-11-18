'use client'

import Image from 'next/image'
import React from 'react'

import Button from '@/components/Button'

export default function page() {
  return (
    <div className="flex justify-center items-center py-16 px-5 md:px-10">
      <div className="w-full bg-white lg:w-3xl rounded-xl">
        <div className="flex flex-col justify-center items-center text-center">
          <Image src={"/banner.jpg"} alt='portada' width={700} height={500} className="object-fill w-full h-40 object-contain rounded-t-xl"/>
          <Image src={"/logo-salud.png"} className="-mt-16 rounded-full bg-white" width={150} height={150} alt="profile ilustration" />
          <div className="py-4">
            <h1 className="text-xl font-bold px-10">Luis Hernandez Lopez</h1>
          </div>
        </div>
        <div className="flex justify-around gap-5 px-5 py-5 w-full mb-5">
          <div className="bg-gray-100 rounded w-xs px-5 py-1.5">
            <span className="text-sm text-gray-400">Télefono</span>
            <p>2214445678</p>
          </div>
          <div className="bg-gray-100 rounded w-xs px-5 py-1.5">
            <span className="text-sm text-gray-400">Correo electronico</span>
            <p>luishdz@gmail.com</p>
          </div>
        </div>
        <div className="flex w-full justify-center mb-5">
          <Button
            text="Editar perfil"
            style="w-1/2"
            onClick={() => console.log("")}
          />
        </div>

      </div>
    </div>
  )
}