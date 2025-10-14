'use client'

import React, { useState } from 'react'

import Input from '@/components/Input';
import TextArea from '@/components/TextArea';

export default function page() {

    const [step, setStep] = useState<number>(1);

    const nextStep = () => {
        setStep((prev) => {
            return Math.min(prev + 1, 2);
        })
    }

    const prevStep = () => {
        setStep((prev) => {
            return Math.max(prev - 1, 1);
        })
    }

    return (
        <div className="grid py-16 px-5">
            <h1 className="mb-10 text-3xl font-bold text-center">Agendar cita</h1>
            <form key={step} className="md:flex md:justify-center">
                <div className="flex flex-col gap-5 p-7 lg:w-1/2 shadow-xl">
                    <h3 className="text-center text-xl">{step > 1 ? "Hora y Fecha" : "Información básica"}</h3>
                    <div className="flex gap-5 justify-center">
                        {[1, 2].map((num, index) => (
                            <h2 key={index} className={`flex w-10 h-10 items-center justify-center rounded-full text-white ${step >= num ? "bg-blue-600" : "bg-gray-400"}`}>
                                {num}
                            </h2>
                        ))}
                    </div>


                    {step === 1 && (
                        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                            <Input label="Nombre" type="text" value={""} onChange={() => console.log("")} />
                            <Input label="Apellidos" type="text" value={""} onChange={() => console.log("")} />
                            <Input label="Edad" type="number" value={""} onChange={() => console.log("")} />
                            <Input label="Correo" type="email" value={""} onChange={() => console.log("")} />
                            <Input label="Telefono" type="tel" value={""} onChange={() => console.log("")} />
                        </div>
                    )}

                    {step === 2 && (
                        <div>
                            <div className="grid grid-cols-2 gap-5 mb-5">
                                <Input label="Horario" type="time" value={""} onChange={() => console.log("")} />
                                <Input label="Fecha" type="date" value={""} onChange={() => console.log("")} />
                            </div>
                            <TextArea
                                label="Síntomas o tipo de cita"
                                value={""}
                                onChange={() => console.log("")}
                            />
                        </div>
                    )}

                    <div className="flex w-full justify-end">
                        {step > 1 ? (
                            <div className="flex justify-between w-full">
                                <button onClick={prevStep} className="cursor-pointer bg-blue-600 text-white px-4 py-2 rounded-md shadow-md hover:opacity-95">
                                    Atras
                                </button>
                                <button className="cursor-pointer bg-blue-600 text-white px-4 py-2 rounded-md shadow-md hover:opacity-95">
                                    Enviar
                                </button>
                            </div>
                        ) : (
                            <button onClick={nextStep} className="cursor-pointer bg-blue-600 text-white px-4 py-2 rounded-md shadow-md hover:opacity-95">
                                Siguiente
                            </button>
                        )}
                    </div>
                </div>
            </form>
        </div>
    )
}
