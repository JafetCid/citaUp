'use client'

import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form';

import Input from '@/components/Input';
import { SignUpForm } from '@/types/views/signUp';
import { signUpRequest } from '@/lib/api/auth';
import { axiosErrors } from '@/lib/errors';

export default function SignupPage() {

	const route = useRouter();

	const { register, handleSubmit } = useForm<SignUpForm>();

	const onSubmit: SubmitHandler<SignUpForm> = async (data) => {
		const body = {
			nombre: data.name,
			apellidos: data.lastName,
			password: data.confirmPassword,
			correo: data.email,
		}

		try {
			console.log(body);
			const response = await signUpRequest(body);
			route.push("/auth/login");

		} catch (error: unknown) {
			axiosErrors(error);
		}
	}

	return (
		<main className="min-h-screen   flex items-center">
			<section className="container mx-auto px-6 lg:px-20 py-16">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
					{/* Illustration */}
					<div className="flex justify-center lg:justify-center">
						<div className="max-w-md">
							<Image src="/doc.png" alt="Ilustración signup" width={820} height={880} className="w-full h-auto lg:h-150" />
						</div>
					</div>

					{/* Signup form */}
					<div>
						<div className="max-w-md mx-auto">
							<h1 className="text-2xl lg:text-3xl text-[var(--text-primary)]  font-extrabold">Regístrate</h1>
							<p className="text-sm text-[var(--text-primary)] mt-2">Crea una cuenta y comienza a gestionar tus citas en segundos.</p>

							<form onSubmit={handleSubmit(onSubmit)} className="mt-6 bg-white rounded-2xl p-6 shadow-md space-y-4">
								<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
									<Input
										label="Nombre"
										type="text"
										placeholder="Nombre"
										name="name"
										register={register}
									/>
									<Input
										label="Apellidos"
										type="text"
										placeholder="Apellidos"
										name="lastName"
										register={register}
									/>
									{/* <label className="flex flex-col">
										<span className="text-sm font-medium text-[var(--text-secondary)]">Nombre</span>
										<input name="firstName" type="text" required placeholder="Nombre" className="mt-1 px-3 py-2 rounded-lg border text-[var(--text-secondary)] border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-200" />
										</label>

										<label className="flex flex-col">
										<span className="text-sm font-medium text-[var(--text-secondary)]">Apellido</span>
										<input name="lastName" type="text" required placeholder="Apellido" className="mt-1 px-3 py-2 text-[var(--text-secondary)] rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-200" />
										</label>*/}
								</div>

								<Input
									label="Correo electrónico"
									type="email"
									placeholder="tu@ejemplo.com"
									name="email"
									register={register}
								/>


								{/* <label className="flex flex-col">
									<span className="text-sm font-medium text-[var(--text-secondary)]">Correo electrónico</span>
									<input name="email" type="email" required placeholder="tu@ejemplo.com" className="mt-1 px-3 py-2 rounded-lg border text-[var(--text-secondary)] border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-200" />
								</label>  */}

								<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
									<Input
										label="Contraseña"
										type="password"
										placeholder="Contraseña"
										name="password"
										register={register}
									/>
									<Input
										label="Confirmar contraseña"
										type="password"
										placeholder="Contraseña"
										name="confirmPassword"
										register={register}
									/>
									{/* <label className="flex flex-col">
										<span className="text-sm font-medium text-[var(--text-secondary)]">Contraseña</span>
										<input name="password" type="password" required placeholder="Contraseña" className="mt-1 px-3 py-2 text-[var(--text-secondary)] rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-200" />
									</label>
									<label className="flex flex-col">
										<span className="text-sm font-medium text-[var(--text-secondary)]">Confirmar contraseña</span>
										<input name="confirmPassword" type="password" required placeholder="Confirmar contraseña" className="mt-1 px-3 py-2 text-[var(--text-secondary)] rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-200" />
									</label> */}
								</div>

								<div className="space-y-2">
									<button type="submit" className="w-full bg-gradient-to-r from-indigo-600 to-blue-500 text-white px-4 py-2.5 rounded-md font-medium">Crear cuenta</button>

									<button type="button" className="w-full border border-slate-200 px-4 py-2.5 text-[var(--text-secondary)] rounded-md flex items-center justify-center gap-2">
										<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M21 12.3c0-.7-.1-1.3-.2-1.9H12v3.6h5.6c-.2 1.1-.8 2-1.6 2.7l2.6 2c1.5-1.4 2.5-3.5 2.5-6.4z" fill="#4285F4" />
											<path d="M12 22c2.7 0 5-0.9 6.7-2.4l-2.6-2c-0.7 0.5-1.8 1-4.1 1-3.1 0-5.6-2.1-6.5-5l-2.8 2.1C5.9 19.8 8.7 22 12 22z" fill="#34A853" />
											<path d="M5.5 13.3c-0.2-0.6-0.4-1.3-0.4-2s0.2-1.4 0.4-2l-2.8-2.1C2 8.9 1.5 10.3 1.5 12s0.5 3.1 1.2 4.2l2.8-2.1z" fill="#FBBC05" />
											<path d="M12 5.5c1.5 0 2.8 0.5 3.9 1.5l2.9-2.9C17 2 14.7 1 12 1 8.7 1 5.9 3.2 4.2 6.3l2.8 2.1C6.4 7.6 8.9 5.5 12 5.5z" fill="#EA4335" />
										</svg>
										Regístrate con Google
									</button>
								</div>

								<p className="text-sm text-slate-600 text-center">¿Ya tienes una cuenta? <a href="/auth/login" className="text-sky-600">Inicia sesión</a></p>
							</form>
						</div>
					</div>
				</div>
			</section>
		</main>
	)
}