'use client'

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Card from "@/components/Card";

export default function Home() {
  return (
    <div>
      <main className="flex py-5 items-center min-h-screen text-slate-900 z-10">
        <section className="container mx-auto px-6 lg:px-20">
          <div className="flex justify-center items-center md:items-end md:justify-start">
            {/* imagen */}
            <div className="relative w-full h-[550px] overflow-hidden">
              <Image
                 src="/persons.png"
                alt="Ilustración CitaUp"
                fill
                className="object-cover object-center brightness-85 blur-[1px]"
                priority
              />
            </div>

            {/* contenido del texto */}
            <div className="absolute py-10 space-y-2 px-5 sm:px-10">
              <motion.div
                initial={{ opacity: 0, y: -16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <h1 className="text-4xl text-white text-center md:text-start font-extrabold leading-tight lg:text-6xl">
                  Agenda fácil, rápido y sin
                  <br />
                  <span>complicaciones</span>
                </h1>
              </motion.div>

              <motion.p
                className="max-w-auto text-center text-white px-5 sm:px-0 md:text-start"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.12 }}
              >
                Gestiona tus citas de manera eficiente y olvídate del estrés.
                Nuestra plataforma te permite agendar en segundos.
              </motion.p>

              <div className="flex w-full justify-center md:justify-start">
                <Link
                  href="/appointments"
                  className="inline-block bg-blue-600 text-white px-6 py-2.5 rounded-md shadow-md hover:opacity-95"
                >
                  Agendar cita
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <div className="bg-slate-200/50 px-5 py-16">
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
    </div>
  );
}
