import React from 'react'
import { IoClose } from 'react-icons/io5'

import Input from './Input'
import Button from './Button'

export default function ProfileModal({ isOpen, onClose, onClick }: PropsProfileModal) {
    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 flex justify-center items-center bg-black/30 w-full min-h-screen">
                    <div className="grid p-8 gap-5 bg-white md:w-sm">
                        <div className="flex items-center justify-between text-black">
                            <h2 className="md:text-2xl">Editar Perfil</h2>
                            <IoClose size={30} onClick={onClose} className="cursor-pointer"/>
                        </div>

                        <form className="grid gap-2">
                            <Input
                                label='Nombre'
                                type='text'
                                value={""}
                                onChange={() => console.log("")}
                                error=''
                            />
                            <Input
                                label='Apellidos'
                                type='text'
                                value={""}
                                onChange={() => console.log("")}
                                error=''
                            />
                            <Input
                                label='Télefono'
                                type='text'
                                value={""}
                                onChange={() => console.log("")}
                                error=''
                            />
                            <Input
                                label='Correo'
                                type='text'
                                value={""}
                                onChange={() => console.log("")}
                                error=''
                            />
                            <Input
                                label='Contraseña'
                                type='text'
                                value={""}
                                onChange={() => console.log("")}
                                error=''
                            />
                        </form>
                        <Button
                            text="Confirmar"
                            onClick={onClick}
                        />
                    </div>
                </div>
            )}
        </>
    )
}
