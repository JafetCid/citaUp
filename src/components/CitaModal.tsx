import React from 'react'

import { motion } from 'framer-motion'
import { IoCalendarOutline } from 'react-icons/io5'
import { PropsCitaModal } from '@/types/components/CitaModal/citamodal'
import Button from './Button'

export default function CitaModal({ date, hour, service, onClick }: PropsCitaModal) {
    return (
        <div className="min-h-screen py-16">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8 text-center"
                >
                    <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <IoCalendarOutline className="w-10 h-10 text-blue-600" />
                    </div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">¡Cita Agendada!</h1>
                    <p className="text-gray-600 mb-6">
                        Tu cita ha sido agendada exitosamente. Te enviaremos un email de confirmación con todos los detalles.
                    </p>
                    <div className="p-4 mb-6">
                        <p className="text-sm">
                            <strong>Fecha:</strong> {new Date(date).toLocaleDateString('es-ES')}<br />
                            <strong>Hora:</strong> {hour}<br />
                            <strong>Servicio:</strong> {service}
                        </p>
                    </div>
                    <Button
                        text="Agendar Nueva Cita"
                        onClick={onClick}
                    />
                    {/* <button onClick={onClick} className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                        Agendar Nueva Cita
                    </button> */}
                </motion.div>
            </div>
        </div>
    )
}
