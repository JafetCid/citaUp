import React from "react";
import Image from "next/image";
// import NavAlt from "@/components/NavAlt";

const appointments = [
    { id: 1, name: "Jafet", title: "Mañana, mensual", subtitle: "Revisión mensual", time: "8:30 PM" },
    { id: 2, name: "Juan", title: "Mañana, mensual", subtitle: "Revisión mensual", time: "8:30 PM" },
    { id: 3, name: "Angel", title: "Mañana, mensual", subtitle: "Revisión mensual", time: "8:30 PM" },
    { id: 4, name: "Liz", title: "Mañana, mensual", subtitle: "Revisión mensual", time: "8:30 PM" },
    { id: 5, name: "Victor", title: "Mañana, mensual", subtitle: "Revisión mensual", time: "8:30 PM" },
    { id: 6, name: "Naydelin", title: "Mañana, mensual", subtitle: "Revisión mensual", time: "8:30 PM" },
    //   { id: 7,name:"Jafet", title: "Mañana, mensual", subtitle: "Revisión mensual", time: "8:30 PM" },
];

export default function Bienvenida() {
    return (
        <main className="text-slate-900">
            {/* <NavAlt /> */}

            <section className="container mx-auto px-6 lg:px-20 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main column */}
                    <div className="lg:col-span-2">
                        <div className="mb-6">
                            <h2 className="text-3xl lg:text-4xl font-extrabold">¡Bienvenido, {appointments[0].name}!</h2>
                            <p className="text-slate-600 mt-2">Tu día puede, citas, organiza y listo.</p>
                        </div>

                        <div className="bg-gradient-to-r from-white to-white/70 rounded-2xl p-6 shadow-xl">
                            <div className="flex items-center justify-between gap-4 mb-6">
                                <div>
                                    <h3 className="text-xl font-semibold">Próximas Citas</h3>
                                    <p className="text-sm text-slate-500">Aquí tienes tus próximas citas programadas</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="text-sm text-slate-500">Hoy</div>
                                    <div className="px-3 py-1 rounded-full bg-white shadow-sm text-sm font-medium">{appointments.length}</div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                {appointments.map((a) => (
                                    <article key={a.id} className="group relative flex items-center justify-between gap-4 bg-white/80 hover:bg-white transition rounded-xl p-4 shadow-md">
                                        <div className="absolute left-0 top-0 bottom-0 w-2 rounded-l-xl bg-gradient-to-b from-blue-500 to-sky-400 opacity-90" />

                                        <div className="flex items-center gap-4 pl-4">
                                            <div className="w-14 h-14 rounded-lg bg-blue-50 flex items-center justify-center">
                                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect x="3" y="4" width="18" height="18" rx="3" stroke="#1F6FEB" strokeWidth="1.5" />
                                                    <path d="M16 2v4M8 2v4" stroke="#1F6FEB" strokeWidth="1.5" strokeLinecap="round" />
                                                </svg>
                                            </div>
                                            <div>
                                                <div className="text-sm text-slate-500">{a.name}</div>
                                                <div className="font-semibold text-slate-900">{a.title}</div>
                                                <div className="text-sm text-slate-500">{a.subtitle}</div>
                                            </div>
                                        </div>

                                        <div className="text-right pr-4">
                                            <div className="text-xs text-slate-500">Consulta</div>
                                            <div className="inline-flex items-center gap-2">
                                                <span className="px-3 py-1 rounded-md bg-gradient-to-r from-blue-600 to-sky-400 text-white font-semibold">{a.time}</span>
                                            </div>
                                        </div>
                                    </article>
                                ))}
                            </div>

                            <div className="mt-6">
                                <button className="inline-flex items-center gap-3 bg-gradient-to-r from-indigo-600 to-blue-500 text-white px-6 py-3 rounded-full shadow-2xl transform hover:-translate-y-0.5 transition-all">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 5v14M5 12h14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    Agendar Nueva Cita
                                </button>
                            </div>
                        </div>
                    </div>

                    {/*    */}
                    <aside className="space-y-6">
                        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                            <h4 className="font-semibold">Acceso Rápido</h4>
                            <p className="text-sm text-slate-500">Atajos para tus acciones más usadas</p>

                            <div className="mt-4 space-y-3">
                                <button className="w-full text-left flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition">
                                    <div className="w-10 h-10 rounded-md bg-gradient-to-tr from-blue-50 to-sky-50 flex items-center justify-center">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="3" y="4" width="18" height="18" rx="3" stroke="#1F6FEB" strokeWidth="1.5" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="font-medium">Ver Calendario Completo</div>
                                        <div className="text-xs text-slate-500">Revisa tus agendas</div>
                                    </div>
                                </button>

                                <button className="w-full text-left flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition">
                                    <div className="w-10 h-10 rounded-md bg-gradient-to-tr from-blue-50 to-sky-50 flex items-center justify-center">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 2v20M2 12h20" stroke="#1F6FEB" strokeWidth="1.5" strokeLinecap="round" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="font-medium">Configurar Perfil</div>
                                        <div className="text-xs text-slate-500">Actualiza tus datos</div>
                                    </div>
                                </button>

                                <button className="w-full text-left flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition">
                                    <div className="w-10 h-10 rounded-md bg-gradient-to-tr from-blue-50 to-sky-50 flex items-center justify-center">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 22c1.657 0 3-1.343 3-3H9c0 1.657 1.343 3 3 3z" stroke="#1F6FEB" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M18 8a6 6 0 10-12 0v4l-2 2v1h16v-1l-2-2V8z" stroke="#1F6FEB" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="font-medium">Notificaciones</div>
                                        <div className="text-xs text-slate-500">Ver recientes</div>
                                    </div>
                                </button>
                            </div>
                        </div>

                        <div className="hidden lg:block bg-white rounded-2xl p-6 shadow-lg text-center">
                            <Image src="/CitaUp.png" alt="avatar" width={180} height={140} className="mx-auto rounded-md" />
                            <div className="mt-4 font-semibold">Resumen rápido</div>
                            <div className="text-sm text-slate-500 mt-2">Próximas 3 citas</div>
                        </div>
                    </aside>
                </div>
            </section>
        </main>
    );
}