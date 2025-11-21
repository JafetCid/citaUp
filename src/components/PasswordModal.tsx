import React from 'react'
import { IoClose } from 'react-icons/io5'

import Input from './Input'
import Button from './Button'
import { SubmitHandler, useForm } from 'react-hook-form'
import { PasswordModalForm } from '@/types/validations/passwordModal/passwordModal'
import { zodResolver } from '@hookform/resolvers/zod'
import { passwordModalFormSchema } from '@/lib/validations/passwordModalForm'

export default function PasswordModal({ isOpen, onClose, onClick }: PropsProfileModal) {

    const { register, handleSubmit, formState: { errors }, reset } = useForm<PasswordModalForm>({
        resolver: zodResolver(passwordModalFormSchema),
    });

    const onSubmit: SubmitHandler<PasswordModalForm> = (data) => {
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
                            <h2 className="md:text-2xl">Editar Contraseña</h2>
                            <IoClose size={30} onClick={() => { onClose(); reset(); }} className="cursor-pointer"/>
                        </div>

                        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-2">
                            <Input
                                label='Nueva contraseña'
                                type='password'
                                name="password"
                                register={register}
                                error={errors.password?.message}
                            />
                            <Input
                                label='Confirmar contraseña'
                                type='password'
                                name="confirmPassword"
                                register={register}
                                error={errors.confirmPassword?.message}
                                
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
