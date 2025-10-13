'use client'

import React, { useState } from 'react'
import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { IoCalendarClearOutline, IoHomeOutline, IoBriefcaseOutline, IoPersonOutline, IoMenu, IoClose } from "react-icons/io5";

type NavLink = { href: string; label: string; icon?: React.ReactNode };

export default function Navbar() {
    const pathname = usePathname() || "/";
    const [open, setOpen] = useState(false);

    const links: NavLink[] = [
        { href: "/", label: "Inicio", icon: <IoHomeOutline size={20} /> },
        { href: "/appointments", label: "Agendar cita", icon: <IoCalendarClearOutline size={20} /> },
        { href: "/services-doc", label: "Servicios", icon: <IoBriefcaseOutline size={20} /> },
        { href: "/contact", label: "Contacto", icon: <IoPersonOutline size={20} /> },
    ];

    const isActive = (href: string) => {
        if (href === "/") return pathname === "/";
        return pathname.startsWith(href);
    };

    return (
        <header className="w-full bg-white/0">
            <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="container mx-auto px-4 lg:px-20 py-3 flex items-center justify-between"
            >
                <div className="flex items-center gap-3">
                    <Link href="/" className="flex items-center gap-3">
                        <Image src="/logo.png" alt="citaUp" width={100} height={100} className="rounded-md" />
                        {/* <span className="font-bold text-lg">citaUp</span> */}
                    </Link>
                </div>

                {/* Desktop links */}
                <nav className="hidden md:flex items-center gap-6">
                    {links.map((l) => (
                        <div key={l.href} className="relative">
                            <Link href={l.href} className={`flex items-center gap-2 px-2 py-1 ${isActive(l.href) ? 'text-sky-600 font-semibold' : 'text-slate-700 hover:text-slate-900'}`} aria-current={isActive(l.href) ? 'page' : undefined}>
                                {l.icon}
                                <span>{l.label}</span>
                            </Link>

                            {isActive(l.href) && (
                                <motion.span layoutId="nav-underline" className="absolute left-0 right-0 -bottom-2 h-0.5 bg-sky-600 rounded-full"
                                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                />
                            )}
                        </div>
                    ))}
                </nav>

                {/* Actions + mobile button */}
                <div className="flex items-center gap-3">
                    <Link href="/appointments" className="hidden md:inline-flex bg-gradient-to-r from-blue-600 to-sky-500 text-white px-4 py-2 rounded-md shadow-sm">Agendar</Link>

                    <button onClick={() => setOpen(!open)} aria-label="Abrir menú" className="md:hidden p-2 rounded-md border border-slate-200">
                        {open ? <IoClose size={20} /> : <IoMenu size={20} />}
                    </button>
                </div>

                {/* Mobile menu */}
                {open && (
                    <div className="absolute left-0 right-0 top-full bg-white shadow-md md:hidden z-40">
                        <div className="px-4 py-4 space-y-2">
                            {links.map((l) => (
                                <Link key={l.href} href={l.href} className={`block px-3 py-2 rounded-md ${isActive(l.href) ? 'bg-sky-50 text-sky-600' : 'text-slate-700 hover:bg-slate-50'}`}>
                                    <div className="flex items-center gap-3">{l.icon}<span>{l.label}</span></div>
                                </Link>
                            ))}

                            <Link href="/appointments" className="block mt-2 text-center bg-blue-600 text-white px-4 py-2 rounded-md">Agendar</Link>
                        </div>
                    </div>
                )}
            </motion.div>
        </header>
    );
}
