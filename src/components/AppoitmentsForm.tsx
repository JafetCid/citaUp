'use client'

import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { IoCalendarOutline, IoTimeOutline, IoPersonOutline, IoMailOutline, IoCallOutline, IoDocumentTextOutline } from 'react-icons/io5'

import Input from '@/components/Input'
import Select from '@/components/Select'
import TextArea from '@/components/TextArea'
import Button from './Button'

import { AppointmentsForm } from '@/types/validations/appointmentForm/appointment'

import { horasDisponibles, servicios } from '@/lib/constants/data'
import { appointmentFormSchema } from '@/lib/validations/appointmentForm'

export default function AppoitmentsForm({ onSubmit }: { onSubmit: (data: AppointmentsForm) => void }) {

    const [isSubmitting, setIsSubmitting] = useState(false);

    const { register, handleSubmit, formState: { errors }, reset } = useForm<AppointmentsForm>({
        resolver: zodResolver(appointmentFormSchema),
    });

    const handleForSubmit: SubmitHandler<AppointmentsForm> = async (data) => {
        console.log(data);

        // Simular envío de formulario
        setIsSubmitting(true);
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsSubmitting(false);
        onSubmit(data);
        reset();
    }

    return (
        <form onSubmit={handleSubmit(handleForSubmit)} className="space-y-6">
            {/* Datos personales */}
            <div className="grid md:grid-cols-2 gap-6">
                <Input
                    label="Nombre completo"
                    placeholder="Tu nombre completo"
                    icon={<IoPersonOutline className="inline w-4 h-4 mr-2" />}
                    type="text"
                    name="name"
                    register={register}
                    error={errors.name?.message}
                />
                <Input
                    label="Email"
                    placeholder="tu@email.com"
                    icon={<IoMailOutline className="inline w-4 h-4 mr-2" />}
                    type="email"
                    name="email"
                    register={register}
                    error={errors.email?.message}
                />
                <Input
                    label="Teléfono"
                    placeholder="+1 (555) 123-4567"
                    icon={<IoCallOutline className="inline w-4 h-4 mr-2" />}
                    type="tel"
                    name="phoneNumber"
                    register={register}
                    error={errors.phoneNumber?.message}
                />

                {/* Fecha y hora */}

                <Input
                    label="Fecha preferida"
                    icon={<IoCalendarOutline className="inline w-4 h-4 mr-2" />}
                    type="date"
                    min={new Date().toISOString().split('T')[0]}
                    name="date"
                    register={register}
                    error={errors.date?.message}
                />
                <Select
                    label="Hora preferida"
                    labelOptions="Seleccione una hora"
                    icon={<IoTimeOutline className="inline w-4 h-4 mr-2" />}
                    info={horasDisponibles}
                    name="hour"
                    register={register}
                    error={errors.hour?.message}
                />
                <Select
                    label="Tipo de servicio"
                    labelOptions="Seleccione un servicio"
                    icon={<IoDocumentTextOutline className="inline w-4 h-4 mr-2" />}
                    info={servicios}
                    name="service"
                    register={register}
                    error={errors.service?.message}
                />
            </div>

            <TextArea
                label="Comentarios adicionales"
                placeholder="Cuéntanos si tienes alguna preferencia especial o información adicional..."
                name="comments"
                register={register}
                error={errors.comments?.message}
            />

            <Button
                style="w-full"
                text={`${isSubmitting ? "Agendando..." : "Confirmar Cita"}`}
                onClick={() => console.log("")} />
        </form>

    )
}
