'use client';

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { IoExit } from "react-icons/io5";

import Cookies from "js-cookie";
import { motion } from "framer-motion";
import { PropsNavbar } from "@/types/components/Navbar/navbar";
import { logout } from "@/lib/api/logout";

export default function Navbar({ navLinks, href, showLogOut = false }: PropsNavbar) {

    const router = useRouter();
    const pathname = usePathname();

    const handleLogout = async () => {
        const res = await logout();
        console.log(res);
        Cookies.remove("token");
        window.location.href = "/auth/login"; // redirige al login
    }

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
                    <Link href={href as string} aria-label="Ir al inicio" className="inline-flex items-center gap-3">
                        <div className="rounded-full bg-white/25 backdrop-blur px-1.5 py-1 border border-white/12 shadow-sm">
                            <Image src="/logo.png" alt="Logo" width={100} height={80} priority />
                        </div>
                    </Link>
                </div>

                {/* Desktop links */}
                <div className="hidden md:flex items-center gap-4">
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

                    {showLogOut && (
                        <button onClick={handleLogout} className="flex gap-2 items-center cursor-pointer">
                            <IoExit size={22} className="text-white" />
                            <span className="text-white text-sm font-medium">LogOut</span>
                        </button>
                    )}
                </div>
            </motion.nav>
        </header>
    );
}