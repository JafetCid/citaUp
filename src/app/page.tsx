"use client"

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-white text-slate-900">
      <section className="container mx-auto px-6 lg:px-20 py-16">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-around">
          {/* contenido del texto */}
          <div className="space-y-6 flex flex-col items-center text-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight">
                Agenda fácil,
                <br />
                rápido y <span className="text-blue-600">sin</span>
                <br />
                <span className="text-blue-600">complicaciones</span>
              </h1>
            </motion.div>

            <motion.p
              className="text-slate-600 max-w-xl"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12 }}
            >
              Gestiona tus citas de manera eficiente y olvídate del estrés.
              <br />
              Nuestra plataforma te permite agendar en segundos.
            </motion.p>

            <div className="flex flex-wrap gap-3 justify-center">
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="/appointments"
                  className="inline-block bg-gradient-to-r from-blue-600 to-sky-400 text-white px-6 py-2.5 rounded-md shadow-md hover:opacity-95"
                >
                  Agendar cita
                </Link>
              </motion.div>
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
  );
}