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
          <div className="flex flex-col items-center gap-8 md:flex-row md:justify-around">
            {/* contenido del texto */}
            <div className="space-y-6 flex flex-col text-center md:justify-start">
              <motion.div
                initial={{ opacity: 0, y: -16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <h1 className="text-4xl font-extrabold leading-tight md:text-start lg:text-5xl">
                  Agenda fácil,
                  <br />
                  rápido y <span className="text-blue-600">sin</span>
                  <br />
                  <span className="text-blue-600">complicaciones</span>
                </h1>
              </motion.div>

              <motion.p
                className="text-slate-600 max-w-xl md:text-start"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.12 }}
              >
                Gestiona tus citas de manera eficiente y olvídate del estrés.
                <br />
                Nuestra plataforma te permite agendar en segundos.
              </motion.p>

              <div className="flex w-full justify-center md:justify-start">
                <Link
                  href="/appointments"
                  className="inline-block bg-gradient-to-r from-blue-600 to-sky-400 text-white px-6 py-2.5 rounded-md shadow-md hover:opacity-95"
                >
                  Agendar cita
                </Link>
              </div>
            </div>


            {/* imagen */}
            <div className="flex justify-center">
              <div className="w-full max-w-[560px]">
                <Image
                  src="/CitaUp.png"
                  alt="Ilustración CitaUp"
                  width={560}
                  height={420}
                  className="rounded-md object-contain w-full h-auto"
                  priority
                />
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
