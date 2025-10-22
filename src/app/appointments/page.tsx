'use client'

import React, { useState } from 'react'

import { motion } from 'framer-motion'
import { horasDisponibles, servicios } from '@/lib/constants/data'
import { appointmentForm } from '@/lib/validations/appointmentForm'
import { AppointmentsForm } from '@/types/validations/appointmentForm/appointment'
import { IoCalendarOutline, IoTimeOutline, IoPersonOutline, IoMailOutline, IoCallOutline, IoDocumentTextOutline } from 'react-icons/io5'
import Input from '@/components/Input'
import Select from '@/components/Select'
import TextArea from '@/components/TextArea'
import CitaModal from '@/components/CitaModal'


export default function AppointmentsPage() {

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState<Partial<AppointmentsForm>>({});
    const [formData, setFormData] = useState<AppointmentsForm>({
        name: '', email: '', phoneNumber: '', date: '', hour: '', service: '', comments: ''
    });

    const handleInputChange = (value: string | number, field: keyof AppointmentsForm) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value,
        }));
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        const validationErrors = appointmentForm(formData);
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {

            setIsSubmitting(true);

            // Simular envío de formulario
            await new Promise(resolve => setTimeout(resolve, 2000));

            setIsSubmitting(false);
            setIsSubmitted(true);
        }
    }

    if (isSubmitted) {
        return <CitaModal
            date={formData.date}
            hour={formData.hour}
            service={formData.service}
            onClick={ () => {
                setIsSubmitted(false)
                setFormData({ name: '', email: '', phoneNumber: '', date: '', hour: '', service: '', comments: '' })
            }} 
        />
    }

    return (
        <div className="min-h-screen py-16">
            <div className="container mx-auto px-5 md:py-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto"
                >
                    {/* Header */}
                    <div className="text-center mb-12">
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6"
                        >
                            <IoCalendarOutline className="w-8 h-8 text-blue-600" />
                        </motion.div>
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">Agendar Cita</h1>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            Completa el formulario para reservar tu cita médica. Te confirmaremos la disponibilidad y te enviaremos un recordatorio.
                        </p>
                    </div>

                    <div className="flex flex-col lg:grid lg:grid-cols-3 gap-8">
                        {/* Información de contacto */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="flex justify-center lg:block lg:col-span-1"
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

                        {/* Formulario */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="lg:col-span-2"
                        >
                            <div className="bg-white rounded-2xl shadow-lg p-8">
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* Datos personales */}
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <Input
                                            label="Nombre completo"
                                            placeholder="Tu nombre completo"
                                            icon={<IoPersonOutline className="inline w-4 h-4 mr-2" />}
                                            type="text"
                                            value={formData.name}
                                            onChange={(e) => handleInputChange(e, "name")}
                                            error={errors.name as string}
                                        />
                                        <Input
                                            label="Email"
                                            placeholder="tu@email.com"
                                            icon={<IoMailOutline className="inline w-4 h-4 mr-2" />}
                                            type="email"
                                            value={formData.email}
                                            onChange={(e) => handleInputChange(e, "email")}
                                            error={errors.email as string}
                                        />
                                        <Input
                                            label="Teléfono"
                                            placeholder="+1 (555) 123-4567"
                                            icon={<IoCallOutline className="inline w-4 h-4 mr-2" />}
                                            type="tel"
                                            value={formData.phoneNumber}
                                            onChange={(e) => handleInputChange(e, "phoneNumber")}
                                            error={errors.phoneNumber as string}
                                        />

                                        {/* Fecha y hora */}

                                        <Input
                                            label="Fecha preferida"
                                            icon={<IoCalendarOutline className="inline w-4 h-4 mr-2" />}
                                            type="date"
                                            min={new Date().toISOString().split('T')[0]}
                                            value={formData.date}
                                            onChange={(e) => handleInputChange(e, "date")}
                                            error={errors.date as string}
                                        />
                                        <Select
                                            label="Hora preferida"
                                            icon={<IoTimeOutline className="inline w-4 h-4 mr-2" />}
                                            info={horasDisponibles}
                                            value={formData.hour}
                                            onChange={(e) => handleInputChange(e, "hour")}
                                            error={errors.hour as string}
                                        />
                                        <Select
                                            label="Tipo de servicio"
                                            icon={<IoDocumentTextOutline className="inline w-4 h-4 mr-2" />}
                                            info={servicios}
                                            value={formData.service}
                                            onChange={(e) => handleInputChange(e, "service")}
                                            error={errors.service as string}
                                        />
                                    </div>

                                    <TextArea
                                        label="Comentarios adicionales"
                                        placeholder="Cuéntanos si tienes alguna preferencia especial o información adicional..."
                                        value={formData.comments}
                                        onChange={(e) => handleInputChange(e, "comments")}
                                    />

                                    <motion.button
                                        type="submit"
                                        disabled={isSubmitting}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full cursor-pointer bg-gradient-to-r from-blue-600 to-sky-500 text-white py-2.5 px-6 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-sky-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? (
                                            <div className="flex items-center justify-center">
                                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                                                Agendando...
                                            </div>
                                        ) : (
                                            'Confirmar Cita'
                                        )}
                                    </motion.button>
                                </form>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}