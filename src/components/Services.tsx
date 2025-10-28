import React from 'react'
import Card from './Card'

export default function Services() {
    return (
        <div className="px-5 py-16 bg-[var(--background)]">
            <h1 className="mb-5 text-3xl font-bold text-center dark:text-[var(--text-primary)]">Mis Servicios</h1>
            <div className="flex justify-center mb-10">
                <p className="w-xl text-center dark:text-[var(--text-primary)]">
                    Descubre los servicios especializados que ofrecemos para cuidar de tu salud y bienestar.
                    Cada uno está diseñado para atender tus necesidades de manera personalizada.
                </p>
            </div>
            <div className="grid gap-5 grid-cols-1 lg:grid-cols-3 place-content-center">
                <Card
                    title="Consulta inicial"
                    contenido="Evaluación completa de tu historial médico y diagnóstico inicial para establecer un plan de tratamiento personalizado."
                    duracion="45 minutos"
                    incluye="Examen físico y recomendaciones"
                />
                <Card
                    title="Revisión de Salud"
                    contenido="Seguimiento periódico para monitorear tu progreso y ajustar tratamientos según sea necesario."
                    duracion="30 minutos"
                    incluye="Análisis de resultados previos"
                />
                <Card
                    title="Consulta de seguimiento"
                    contenido="Seguimiento periódico para monitorear tu progreso y ajustar tratamientos según sea necesario."
                    duracion="30 minutos"
                    incluye="Análisis de resultados previos"
                />
                <Card
                    title="Consulta personalizada"
                    contenido="Seguimiento periódico para monitorear tu progreso y ajustar tratamientos según sea necesario."
                    duracion="30 minutos"
                    incluye="Análisis de resultados previos"
                />
            </div>
        </div>
    )
}
