'use client';
import Button from '@/components/Button';
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

export default function LoginPage() {

    const router = useRouter();
    const [email,setEmail]=React.useState('');
    const [password,setPassword]=useState('');


    const handleLogin = async()=>{
        router.push("/doctor/welcome");
        // e.preventDefault();

        // const res= await fetch('/api/auth/login',{
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({email, password})

        // });
        // const data= await res.json();
        // console.log(data);
        // if (data.success) {
        //     // Redirigir o actualizar la UI
        //     console.log('Login exitoso');
        // } else {
        //     console.log('Error de login:', data.message);
        // }
    }
    return (
        <main className="min-h-screen  flex items-center">
            <section className="container mx-auto px-6 lg:px-20 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Illustration */}
                    <div className="order-2 lg:order-1 flex justify-center lg:justify-center">
                        <div className="max-w-md">
                            <Image src="/logo-salud.png" alt="Ilustración calendario" width={520} height={380} className="object-contain" />
                        </div>
                    </div>

                    {/* Form */}
                    <div className="order-1 lg:order-2">
                        <div className="max-w-md text-[var(--text-primary)] mx-auto">
                            <h1 className="text-2xl lg:text-3xl font-extrabold">Iniciar sesión</h1>
                            <p className="text-sm  mt-2">Accede a tu cuenta para gestionar y agendar citas rápidamente.</p>

                            <form className="mt-6 bg-white rounded-2xl p-6 shadow-md space-y-4">
                                <label className="flex flex-col">
                                    <span className="text-sm font-medium text-slate-700">Correo electrónico</span>
                                    <input name="email" type="email" required placeholder="tu@ejemplo.com" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 px-3 py-2 text-[var(--text-secondary)] rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-200" />
                                </label>

                                <label className="flex flex-col">
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm font-medium text-slate-700">Contraseña</span>
                                        <a href="#" className="text-sm text-[var(--accent)]">¿Olvidaste tu contraseña?</a>
                                    </div>
                                    <input name="password" type="password" required placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)}  className="mt-1 px-3 py-2 text-[var(--text-secondary)] rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-200" />
                                </label>

                                <div className="flex items-center justify-between">
                                    <label className="inline-flex items-center gap-2 text-sm">
                                        <input type="checkbox" className="form-checkbox h-4 w-4 text-sky-600" />
                                        <span className="text-[var(--text-secondary)]">Recuérdame</span>
                                    </label>
                                    <button className="text-sm text-[var(--accent)]">Ayuda</button>
                                </div>

                                <div className="space-y-2">
                                    <Button text="Log In" style="w-full" onClick={handleLogin}/>
                                    {/* <button type="submit" onClick={handleLogin} className="w-full cursor-pointer bg-gradient-to-r from-blue-600 to-sky-400 text-white px-4 py-2.5 rounded-md font-medium">Log In</button> */}

                                    <button type="button" className="w-full cursor-pointer border border-slate-200 px-4 py-2.5 text-[var(--text-secondary)]     rounded-md flex items-center justify-center gap-2">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M21 12.3c0-.7-.1-1.3-.2-1.9H12v3.6h5.6c-.2 1.1-.8 2-1.6 2.7l2.6 2c1.5-1.4 2.5-3.5 2.5-6.4z" fill="#4285F4" />
                                            <path d="M12 22c2.7 0 5-0.9 6.7-2.4l-2.6-2c-0.7 0.5-1.8 1-4.1 1-3.1 0-5.6-2.1-6.5-5l-2.8 2.1C5.9 19.8 8.7 22 12 22z" fill="#34A853" />
                                            <path d="M5.5 13.3c-0.2-0.6-0.4-1.3-0.4-2s0.2-1.4 0.4-2l-2.8-2.1C2 8.9 1.5 10.3 1.5 12s0.5 3.1 1.2 4.2l2.8-2.1z" fill="#FBBC05" />
                                            <path d="M12 5.5c1.5 0 2.8 0.5 3.9 1.5l2.9-2.9C17 2 14.7 1 12 1 8.7 1 5.9 3.2 4.2 6.3l2.8 2.1C6.4 7.6 8.9 5.5 12 5.5z" fill="#EA4335" />
                                        </svg>
                                        Log in with Google
                                    </button>
                                </div>

                                <p className="text-sm text-slate-600 text-center">¿No tienes cuenta? <a href="/auth/signup" className="text-sky-600">Regístrate</a></p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}