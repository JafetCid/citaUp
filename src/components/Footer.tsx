import React from 'react'
import { IoChatbubbleSharp, IoLogoFacebook, IoLogoWhatsapp } from 'react-icons/io5'

export default function Footer() {
    return (
        <footer className="bg-[var(--background)] dark:bg-[var(--background)] dark:text-[var(--text-primary)]">
            <div className="w-full h-px bg-white"></div>
            <div className="flex flex-col p-5 items-center">
                <div className="flex gap-5 mb-3">
                    <IoLogoWhatsapp size={24} className="cursor-pointer hover:-translate-y-1 hover:transition-all hover:duration-300" />
                    <IoLogoFacebook size={24} className="cursor-pointer hover:-translate-y-1 hover:transition-all hover:duration-300" />
                </div>
                <span> © 2025 - CitaUp</span>
                <span>Todos los derechos reservados</span>
            </div>
        </footer>
    )
}
