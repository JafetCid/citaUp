'use client';

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { motion } from "framer-motion";
import { IoCalendar, IoHome } from "react-icons/io5";
import { Links } from '@/types/components/Navbar/navbar';

const navLinks: Links[] = [
    { href: "/", label: "Inicio", icon: <IoHome size={20} className="text-white" /> },
    { href: "/appointments", label: "Agendar cita", icon: <IoCalendar size={20} className="text-white" /> },
    // { href: "/services-doc", label: "Servicios", icon: <IoBriefcaseOutline size={20} className="text-white" /> },
];

export default function Navbar() {
    const pathname = usePathname();

    return (
        <header className="hidden md:block z-10">
            <motion.nav
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
                role="navigation"
                aria-label="Barra de navegación"
                className="w-full flex items-center justify-between py-3 px-3 md:px-6 bg-transparent"
            >
                <div className="flex items-center gap-3">
                    <Link href="/" aria-label="Ir al inicio" className="inline-flex items-center gap-3">
                        <div className="rounded-full bg-white/25 backdrop-blur px-1.5 py-1 border border-white/12 shadow-sm">
                            <Image src="/logo.png" alt="Logo" width={100} height={80} priority />
                        </div>
                        {/* <span className="hidden md:inline text-white font-semibold drop-shadow-sm">CitaUp</span> */}
                    </Link>
                </div>

                {/* Desktop links */}
                <nav className="hidden md:flex items-center gap-4">
                    {navLinks.map(({ href, label, icon }) => {
                        const isActive = pathname === href;
                        return (
                            <Link key={href} href={href} className="relative inline-flex items-center gap-2 text-sm font-medium text-white/95 hover:text-white rounded-md px-3 py-2">
                                <span className="opacity-90">{icon}</span>
                                <span>{label}</span>
                                {isActive && (
                                    <motion.span
                                        layoutId="nav-underline"
                                        className="absolute -bottom-0.5 left-2 right-2 h-px rounded-lg bg-white"
                                        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                                    />
                                )}
                            </Link>
                        );
                    })}
                </nav>
            </motion.nav>
        </header>
    );
}