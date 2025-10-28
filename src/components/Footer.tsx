import React from 'react'
import { IoChatbubbleSharp, IoLogoFacebook, IoLogoWhatsapp } from 'react-icons/io5'

export default function Footer() {
    return (
        <>
            <div className="w-full h-px bg-white"></div>
            <div className="flex flex-col p-5 items-center bg-[var(--background)] dark:bg-[var(--background)] dark:text-[var(--text-primary)]">
                <span> © 2025 - CitaUp</span>
                <span>Todos los derechos reservados</span>

                <div className="flex gap-5">
                    {/* <IoChatbubbleSharp size={24} /> */}
                    <IoLogoWhatsapp size={24} className="cursor-pointer hover:-translate-y-1 hover:transition-all hover:duration-300" />
                    <IoLogoFacebook size={24} className="cursor-pointer hover:-translate-y-1 hover:transition-all hover:duration-300" />
                </div>
            </div>
        </>
    )
}
