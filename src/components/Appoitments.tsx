'use client'

import React, { useState } from 'react'

import { motion } from 'framer-motion'
import { IoCalendarOutline, IoTimeOutline, IoMailOutline, IoCallOutline } from 'react-icons/io5'

import { PropsAppointments } from '@/types/components/Appointments/appointments'
import AppoitmentsForm from './AppoitmentsForm'
import CitaModal from './CitaModal'
import { AppointmentsForm } from '@/types/validations/appointmentForm/appointment'

export default function Appoitments({ style, contatcStyle }: PropsAppointments) {

    const [citaData, setCitaData] = useState<AppointmentsForm | null>(null);

    if (citaData) {
        return <CitaModal
            date={citaData.date}
            hour={citaData.hour}
            service={citaData.service}
            onClick={() => setCitaData(null)}
        />
    }

    return (
        <div className="min-h-screen py-10">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className={`${style ? "flex flex-col w-full justify-center items-center" : "max-w-4xl mx-auto"}`}
                >
                    {/* Header */}
                    <div className="text-center mb-12">
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="w-16 h-16 bg-blue-100  rounded-full flex items-center justify-center mx-auto mb-6"
                        >
                            <IoCalendarOutline className="w-8 h-8 text-blue-600" />
                        </motion.div>
                        <h1 className="text-4xl font-bold mb-4 dark:text-[var(--text-primary)]">Agendar Cita</h1>
                        <p className="text-lg max-w-2xl mx-auto dark:text-[var(--text-primary)]">
                            Completa el formulario para reservar tu cita médica. Te confirmaremos la disponibilidad y te enviaremos un recordatorio.
                        </p>
                    </div>

                    <div className={`flex flex-col gap-8 ${style ? style : "lg:grid lg:grid-cols-3"}`}>
                        {/* Información de contacto */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className={`flex flex-col ${contatcStyle}`}
                        >
                            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-8">
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">Información de Contacto</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center text-gray-600">
                                        <IoCallOutline className="w-5 h-5 mr-3 text-blue-600" />
                                        <span>+1 (555) 123-4567</span>
                                    </div>
                                    <div className="flex items-center text-gray-600">
                                        <IoMailOutline className="w-5 h-5 mr-3 text-blue-600" />
                                        <span>citas@citaup.com</span>
                                    </div>
                                    <div className="flex items-start text-gray-600">
                                        <IoTimeOutline className="w-5 h-5 mr-3 text-blue-600 mt-1" />
                                        <div>
                                            <p className="font-medium">Horarios de atención:</p>
                                            <p className="text-sm">Lunes - Viernes: 9:00 AM - 6:00 PM</p>
                                            <p className="text-sm">Sábados: 9:00 AM - 2:00 PM</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        < motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="lg:col-span-2"
                        >
                            <div className="bg-white rounded-2xl shadow-lg p-8">
                                {/* Formulario */}
                                <AppoitmentsForm onSubmit={(data) => setCitaData(data)} />
                            </div>
                        </motion.div >
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
