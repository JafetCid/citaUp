"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { IoCalendarOutline, IoTimeOutline, IoPersonOutline, IoMailOutline, IoCallOutline, IoDocumentTextOutline } from 'react-icons/io5'

interface FormData {
    nombre: string
    email: string
    telefono: string
    fecha: string
    hora: string
    servicio: string
    comentarios: string
}

const servicios = [
    "Consulta inicial",
    "Revisión de salud",
    "Consulta de seguimiento",
    "Consulta especializada"
]

const horasDisponibles = [
    "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
    "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00"
]

export default function AppointmentsPage() {
    const [formData, setFormData] = useState<FormData>({
        nombre: '',
        email: '',
        telefono: '',
        fecha: '',
        hora: '',
        servicio: '',
        comentarios: ''
    })

    const [errors, setErrors] = useState<Partial<FormData>>({})
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
        
        // Limpiar error cuando el usuario empiece a escribir
        if (errors[name as keyof FormData]) {
            setErrors(prev => ({ ...prev, [name]: '' }))
        }
    }

    const validateForm = (): boolean => {
        const newErrors: Partial<FormData> = {}

        if (!formData.nombre.trim()) newErrors.nombre = 'El nombre es requerido'
        if (!formData.email.trim()) newErrors.email = 'El email es requerido'
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'El email no es válido'
        if (!formData.telefono.trim()) newErrors.telefono = 'El teléfono es requerido'
        if (!formData.fecha) newErrors.fecha = 'La fecha es requerida'
        if (!formData.hora) newErrors.hora = 'La hora es requerida'
        if (!formData.servicio) newErrors.servicio = 'El servicio es requerido'

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        
        if (!validateForm()) return

        setIsSubmitting(true)
        
        // Simular envío de formulario
        await new Promise(resolve => setTimeout(resolve, 2000))
        
        setIsSubmitting(false)
        setIsSubmitted(true)
    }

    if (isSubmitted) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-sky-100 py-16">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8 text-center"
                    >
                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <IoCalendarOutline className="w-10 h-10 text-green-600" />
                        </div>
                        <h1 className="text-3xl font-bold text-gray-900 mb-4">¡Cita Agendada!</h1>
                        <p className="text-gray-600 mb-6">
                            Tu cita ha sido agendada exitosamente. Te enviaremos un email de confirmación con todos los detalles.
                        </p>
                        <div className="bg-blue-50 rounded-lg p-4 mb-6">
                            <p className="text-sm text-blue-800">
                                <strong>Fecha:</strong> {new Date(formData.fecha).toLocaleDateString('es-ES')}<br/>
                                <strong>Hora:</strong> {formData.hora}<br/>
                                <strong>Servicio:</strong> {formData.servicio}
                            </p>
                        </div>
                        <button
                            onClick={() => {
                                setIsSubmitted(false)
                                setFormData({
                                    nombre: '', email: '', telefono: '', fecha: '', 
                                    hora: '', servicio: '', comentarios: ''
                                })
                            }}
                            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            Agendar Nueva Cita
                        </button>
                    </motion.div>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-sky-100 py-16">
            <div className="container mx-auto px-4">
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

                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Información de contacto */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="lg:col-span-1"
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
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                <IoPersonOutline className="inline w-4 h-4 mr-2" />
                                                Nombre completo *
                                            </label>
                                            <input
                                                type="text"
                                                name="nombre"
                                                value={formData.nombre}
                                                onChange={handleInputChange}
                                                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                                                    errors.nombre ? 'border-red-500' : 'border-gray-300'
                                                }`}
                                                placeholder="Tu nombre completo"
                                            />
                                            {errors.nombre && <p className="text-red-500 text-sm mt-1">{errors.nombre}</p>}
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                <IoMailOutline className="inline w-4 h-4 mr-2" />
                                                Email *
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                                                    errors.email ? 'border-red-500' : 'border-gray-300'
                                                }`}
                                                placeholder="tu@email.com"
                                            />
                                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            <IoCallOutline className="inline w-4 h-4 mr-2" />
                                            Teléfono *
                                        </label>
                                        <input
                                            type="tel"
                                            name="telefono"
                                            value={formData.telefono}
                                            onChange={handleInputChange}
                                            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                                                errors.telefono ? 'border-red-500' : 'border-gray-300'
                                            }`}
                                            placeholder="+1 (555) 123-4567"
                                        />
                                        {errors.telefono && <p className="text-red-500 text-sm mt-1">{errors.telefono}</p>}
                                    </div>

                                    {/* Fecha y hora */}
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                <IoCalendarOutline className="inline w-4 h-4 mr-2" />
                                                Fecha preferida *
                                            </label>
                                            <input
                                                type="date"
                                                name="fecha"
                                                value={formData.fecha}
                                                onChange={handleInputChange}
                                                min={new Date().toISOString().split('T')[0]}
                                                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                                                    errors.fecha ? 'border-red-500' : 'border-gray-300'
                                                }`}
                                            />
                                            {errors.fecha && <p className="text-red-500 text-sm mt-1">{errors.fecha}</p>}
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                <IoTimeOutline className="inline w-4 h-4 mr-2" />
                                                Hora preferida *
                                            </label>
                                            <select
                                                name="hora"
                                                value={formData.hora}
                                                onChange={handleInputChange}
                                                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                                                    errors.hora ? 'border-red-500' : 'border-gray-300'
                                                }`}
                                            >
                                                <option value="">Selecciona una hora</option>
                                                {horasDisponibles.map(hora => (
                                                    <option key={hora} value={hora}>{hora}</option>
                                                ))}
                                            </select>
                                            {errors.hora && <p className="text-red-500 text-sm mt-1">{errors.hora}</p>}
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            <IoDocumentTextOutline className="inline w-4 h-4 mr-2" />
                                            Tipo de servicio *
                                        </label>
                                        <select
                                            name="servicio"
                                            value={formData.servicio}
                                            onChange={handleInputChange}
                                            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                                                errors.servicio ? 'border-red-500' : 'border-gray-300'
                                            }`}
                                        >
                                            <option value="">Selecciona un servicio</option>
                                            {servicios.map(servicio => (
                                                <option key={servicio} value={servicio}>{servicio}</option>
                                            ))}
                                        </select>
                                        {errors.servicio && <p className="text-red-500 text-sm mt-1">{errors.servicio}</p>}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Comentarios adicionales
                                        </label>
                                        <textarea
                                            name="comentarios"
                                            value={formData.comentarios}
                                            onChange={handleInputChange}
                                            rows={4}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                                            placeholder="Cuéntanos si tienes alguna preferencia especial o información adicional..."
                                        />
                                    </div>

                                    <motion.button
                                        type="submit"
                                        disabled={isSubmitting}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full bg-gradient-to-r from-blue-600 to-sky-500 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-sky-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
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
