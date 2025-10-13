import Card from '@/components/Card'
import React from 'react'

export default function page() {
  return (
    <div className="py-16 px-5">
      <h1 className="mb-5 text-3xl font-bold text-center">Mis Servicios</h1>
      <div className="flex justify-center mb-10">
        <p className="w-xl text-center">
          Descubre los servicios especializados que ofrecemos para cuidar de tu salud y bienestar.
          Cada uno está diseñado para atender tus necesidades de manera personalizada.
        </p>
      </div>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2">
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
      </div>
    </div>
  )
}
