'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { IoExit } from 'react-icons/io5';

import Cookies from "js-cookie";
import { motion } from 'framer-motion';
import { PropsNavbar } from '@/types/components/Navbar/navbar';
import { logout } from '@/lib/api/logout';

export default function Sidebar({ navLinks, showLogOut = false }: PropsNavbar) {

    const router = useRouter();
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => setIsOpen((prev) => !prev);

    useEffect(() => {
        if (isOpen) {
            // Bloquea el scroll del body
            document.body.style.overflow = "hidden";
        } else {
            // Restaura el scroll cuando se cierra el menú
            document.body.style.overflow = "auto";
        }
    }, [isOpen]);


    const handleLogout = async () => {
        const res = await logout();
        console.log(res);
        Cookies.remove("token", { path: "/" });
        window.location.href = "/auth/login"; // redirige al login
    }

    return (
        <>
            <motion.nav
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className={`flex justify-between items-center py-4 px-4 md:hidden z-10 ${isOpen ? "touch-none overflow-y-hidden" : ""}`}
            >
                <div className="rounded-full bg-white/25 backdrop-blur px-1.5 py-1 border border-white/12 shadow-sm">
                    <Image src="/logo.png" alt="Logo" width={100} height={80} priority />
                </div>
                <button onClick={toggleSidebar} className={`relative z-20 w-7 h-5 flex flex-col justify-between items-center`}>
                    <span className={`block h-1 w-full bg-white rounded transform transition duration-300 ease-in-out ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
                    <span className={`block h-1 w-full bg-white rounded transition-all duration-300 ease-in-out ${isOpen ? "opacity-0" : "opacity-100"}`}></span>
                    <span className={`block h-1 w-full bg-white rounded transform transition duration-300 ease-in-out ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
                </button>

                {/* Sidebar */}
                <div className={`fixed top-0 right-0 h-screen w-64 bg-gray-800 text-white shadow-lg transform transition-transform duration-700 ease-in-out z-10
                    ${isOpen ? "translate-x-0 p-8" : "translate-x-full p-8"}`}
                >
                    <div className="flex flex-col gap-6 pt-10">
                        {navLinks.map(({ href, label, icon }) => (
                            <div key={label}>
                                <Link href={href} onClick={() => setIsOpen(false)} className="flex gap-2">
                                    {icon}
                                    <p className="flex flex-col">
                                        {label}
                                        {pathname === href && (
                                            <motion.span
                                                initial={{ width: 0 }}
                                                animate={{ width: "100%" }}
                                                transition={{ duration: 0.3, ease: "easeOut" }}
                                                className="relative left-0 bottom-0 h-0.5 w-full bg-white"
                                            >
                                            </motion.span>
                                        )}
                                    </p>
                                </Link>
                            </div>
                        ))}

                        {showLogOut && (
                            <button onClick={handleLogout} className="flex gap-2 items-center cursor-pointer">
                                <IoExit size={24} className="text-white" />
                                <p>LogOut</p>
                            </button>
                        )}
                    </div>
                </div>
            </motion.nav>
        </>
    );
}
