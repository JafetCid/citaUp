import React from 'react'
import { IoClose } from 'react-icons/io5'

import Input from './Input'
import Button from './Button'
import { SubmitHandler, useForm } from 'react-hook-form'
import { ProfileModalForm } from '@/types/validations/profileModal/profileModal'
import { profileModalFormSchema } from '@/lib/validations/profileModalsForm'
import { zodResolver } from '@hookform/resolvers/zod'

export default function ProfileModal({ isOpen, onClose, onClick }: PropsProfileModal) {

    const { register, handleSubmit, reset, formState: { errors } } = useForm<ProfileModalForm>({
        resolver:  zodResolver(profileModalFormSchema),
    });

    const onSubmit: SubmitHandler<ProfileModalForm> = (data) => {
        console.log(data);
        onClose();
        reset();
    }

    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 flex justify-center items-center bg-black/50 w-full min-h-screen">
                    <div className="grid p-8 gap-5 bg-white md:w-sm">
                        <div className="flex items-center justify-between text-black">
                            <h2 className="md:text-2xl">Editar Perfil</h2>
                            <IoClose size={30} onClick={() => { onClose(); reset(); }} className="cursor-pointer"/>
                        </div>

                        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-2">
                            <Input
                                label='Nombre'
                                type="text"
                                name="name"
                                register={register}
                                error={errors.name?.message}
                            />
                            <Input
                                label='Apellidos'
                                type="text"
                                name="lastName"
                                register={register}
                                error={errors.lastName?.message}
                            />
                            <Input
                                label='Télefono'
                                type="text"
                                name="phoneNumber"
                                register={register}
                                error={errors.phoneNumber?.message}
                            />
                            <Input
                                label='Correo'
                                type="email"
                                name="email"
                                register={register}
                                error={errors.email?.message}
                            />
                            <Input
                                label='Contraseña'
                                type="password"
                                name="password"
                                register={register}
                                error={errors.password?.message}
                            />
                        </form>
                        <Button
                            text="Confirmar"
                            onClick={handleSubmit(onSubmit)}
                        />
                    </div>
                </div>
            )}
        </>
    )
}
