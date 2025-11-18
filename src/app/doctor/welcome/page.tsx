'use client';

import React, { useEffect, useState } from "react";
import Image from "next/image";

import { Appointment } from "@/types/views/welcome";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import { IoNotificationsOutline } from "react-icons/io5";

export default function Bienvenida() {

  const router = useRouter();

  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('http://192.168.0.8:3100/doc/welcome')
      .then((res) => res.json())
      .then((data) => setAppointments(data))
      .catch(() => setError("No se pudo cargar la información."));
  }, []);

  return (
    <main className="text-slate-900">
      <section className="container mx-auto px-6 lg:px-20 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Columna principal */}
          <div className="lg:col-span-2">
            <header className="mb-6">
              <h2 className="text-3xl text-white lg:text-4xl font-extrabold">¡Bienvenido, Jafet!</h2>
              <p className="text-slate-400 mt-2">Tu día puede, citas, organiza y listo.</p>
            </header>

            <section className="bg-white rounded-2xl p-6 shadow-xl">
              <div className="flex items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-xl font-semibold">Próximas Citas</h3>
                  <p className="text-sm text-slate-500">Aquí tienes tus próximas citas programadas</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-slate-500">Hoy</span>
                  <span className="px-3 py-1 rounded-full bg-white shadow-sm text-sm font-medium">
                    {appointments.length}
                  </span>
                </div>
              </div>

              {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

              <div className="space-y-4">
                {appointments.map((a) => (
                  <article
                    key={a.id}
                    className="group relative flex items-center justify-between gap-4 bg-white hover:bg-white transition rounded-xl p-4 shadow-md"
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-2 rounded-l-xl bg-gradient-to-b from-blue-500 to-sky-400 opacity-90" />

                    <div className="flex items-center gap-4 pl-4">
                      <div className="w-14 h-14 rounded-lg bg-blue-50 flex items-center justify-center">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                          <rect x="3" y="4" width="18" height="18" rx="3" stroke="#1F6FEB" strokeWidth="1.5" />
                          <path d="M16 2v4M8 2v4" stroke="#1F6FEB" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                      </div>
                      <div>
                        {a.name && <div className="text-sm text-slate-500">{a.name}</div>}
                        <div className="font-semibold text-slate-900">{a.title}</div>
                        <div className="text-sm text-slate-500">{a.subtitle}</div>
                      </div>
                    </div>

                    <div className="text-right pr-4">
                      <div className="text-xs text-slate-500">Consulta</div>
                      <span className="px-3 py-1 rounded-md bg-gradient-to-r from-blue-600 to-sky-400 text-white font-semibold">
                        {a.time}
                      </span>
                    </div>
                  </article>
                ))}
              </div>

              <div className="mt-6">
                <Button
                  text="Agendar nueva cita"
                  onClick={() => router.push("/doctor/appointments")}
                />
              </div>
            </section>
          </div>

          {/* Aside */}
          <aside className="space-y-6">
            <div className="hidden lg:block bg-white rounded-2xl p-6 shadow-lg text-center">
              <Image src="/CitaUp.png" alt="avatar" width={180} height={140} className="mx-auto rounded-md" />
              <div className="mt-4 font-semibold">Resumen rápido</div>
              <div className="text-sm text-slate-500 mt-2">Próximas 3 citas</div>
            </div>

            <div className="bg-white backdrop-blur-sm rounded-2xl p-4 shadow-lg">
              <div className="flex justify-between items-end">
                <div className="">
                  <h4 className="font-semibold">Solicitud de Citas</h4>
                  <p className="text-sm text-slate-500">Citas por confirmar o rechazar</p>
                </div>
                <div className="">
                  <div className="absolute flex justify-center items-center bg-blue-600 w-6 h-6 -mt-4 mr-1.5 right-0 rounded-full">
                    <p className="text-white text-sm">3</p>
                  </div>
                  <IoNotificationsOutline size={20} className="mt-0.5" />
                </div>
              </div>

              <div className="mt-4 space-y-3">
                {[
                  { name: "Luis Martinez Flores", date: "12/11/2050", time: "10:00 am" },
                  { name: "Victor Gonzalez Espinoza", date: "22/10/2026", time: "5:00 pm" },
                  { name: "Paola Martinez", date: "01/12/2025", time: "12:00 pm" },
                ].map((data, index) => (
                  <div key={index} className="w-full text-left flex gap-3 p-3 rounded-lg">

                    <div>
                      <IoNotificationsOutline size={20} className="mt-0.5" />
                    </div>
                    <div className="grid gap-1">
                      <div className="font-medium">{data.name}</div>
                      <div className="flex gap-3 text-xs text-slate-500">
                        <span>{data.date}</span>
                        <span>{data.time}</span>
                      </div>
                      <div className="flex gap-5">
                        <Button text="Aceptar" onClick={() => console.log("aceptada")} />
                        <Button text="Rechazar" buttonColor="bg-red-600 hover:bg-red-700" onClick={() => console.log("rechazada")} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}