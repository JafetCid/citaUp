'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Card from "@/components/Card";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)] overflow-hidden">
      {/* #505a90 o [#00BCD4] */}
      <Navbar />

      <section className="container  px-4 sm:px-6 lg:px-20 py-30">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
          {/* Left: content */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="w-full lg:w-1/2"
          >
            <div className="text-center lg:text-left">
              <motion.h1
                initial={{ opacity: 0, y: -16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-3xl dark:text-[var(--text-primary)] sm:text-4xl lg:text-5xl  font-extrabold leading-tight "
              >
                Agenda fácil,
                <br />
                rápido y <span className="text-[var(--text-primary)]">sin</span><br />
                <span className="text-[var(--text-primary)]">complicaciones</span>
              </motion.h1>

              <motion.p className="mt-4 dark:text-[var(--text-primary)] text-sm sm:text-base">
                Gestiona tus citas de manera eficiente y olvídate del estrés.<br />
                Nuestra plataforma te permite agendar en segundos.
              </motion.p>

              <div className="mt-6 flex justify-center lg:justify-start gap-4">
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    href="/signup"
                    className="inline-flex items-center gap-3 bg-[#007bff] text-white px-6 py-3 rounded-lg shadow-xl"
                  >
                    <span className="font-semibold">Comenzar (Prueba)</span>
                  </Link>
                </motion.div>
              </div>

              <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  { title: "Colaborativo", desc: "Equipos" },
                  { title: "Automatiza", desc: "Recordatorios" },
                  { title: "Seguridad", desc: "ISO-level" },
                ].map(({ title, desc }, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-lg bg-white/20 border border-white/10 text-center"
                  >
                    <div className="text-lg font-bold text-white">{title}</div>
                    <div className="text-xs text-slate-900">{desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: image */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.08 }}
            className="w-full lg:w-1/2 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[640px]">
              <div className="rounded-xl overflow-hidden shadow-3xl">
                <Image
                  src="/persons.png"
                  alt="Personas"
                  width={640}
                  height={480}
                  className="object-cover w-full h-[320px] sm:h-[420px]"
                  priority
                />
              </div>

              <div className="absolute right-2 bottom-2 sm:-right-6 sm:-bottom-8 w-56 p-4 rounded-xl bg-black/60 border border-white/10 shadow-lg">
                <div className="text-xs text-slate-300">Siguiente cita</div>
                <div className="mt-1 font-semibold text-white">Carlos Méndez</div>
                <div className="text-sm text-slate-300">2:00 PM — 30 oct</div>
              </div>
            </div>
          </motion.div>
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
      </section>
      
    </main>
  );
}