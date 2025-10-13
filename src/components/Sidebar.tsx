'use client'

import React, { useState } from 'react'
import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { IoCalendarClearOutline, IoHomeOutline, IoBriefcaseOutline, IoPersonOutline } from "react-icons/io5";
import { Links } from '@/types/Navbar/navbar';

export default function Sidebar() {

    const pathname = usePathname();

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const links: Links[] = [
        { href: "/", label: "Inico", icon: <IoHomeOutline size={24} /> },
        { href: "/appointments", label: "Agendar cita", icon: <IoCalendarClearOutline size={24} /> },
        { href: "/services-doc", label: "Servicios", icon: <IoBriefcaseOutline size={24} /> },
        { href: "/contact", label: "Contacto", icon: <IoPersonOutline size={24} /> },
    ];

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <motion.nav
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="flex justify-between items-center py-4 px-4 md:hidden"
            >
                <Image src={'/logo.png'} alt="logo" width={100} height={100} />
                <button
                    onClick={toggleSidebar}
                    className="relative z-50 w-7 h-5 flex flex-col justify-between items-center"
                >
                    <span
                        className={`block h-1 w-full bg-black rounded transform transition duration-300 ease-in-out ${isOpen ? "rotate-45 translate-y-2" : ""
                            }`}
                    ></span>
                    <span
                        className={`block h-1 w-full bg-black rounded transition-all duration-300 ease-in-out ${isOpen ? "opacity-0" : "opacity-100"
                            }`}
                    ></span>
                    <span
                        className={`block h-1 w-full bg-black rounded transform transition duration-300 ease-in-out ${isOpen ? "-rotate-45 -translate-y-2" : ""
                            }`}
                    ></span>
                </button>

                {/* Sidebar */}
                <div
                    className={`fixed top-0 right-0 h-screen w-64 bg-white shadow-lg transform transition-transform duration-700 ease-in-out
                    ${isOpen ? "translate-x-0 p-8" : "translate-x-full p-8"}
                    `}
                >
                    <div className="flex flex-col gap-6 pt-10">
                        {links.map(({ href, label, icon }) => (
                            <div key={href}>
                                <Link href={href} className="flex gap-2">
                                    {icon}
                                    <p className="flex flex-col">
                                        {label}
                                        {pathname === href && (
                                            <motion.span
                                                initial={{ width: 0 }}
                                                animate={{ width: "100%" }}
                                                transition={{ duration: 0.3, ease: "easeOut" }}
                                                className="relative left-0 bottom-0 h-0.5 w-full bg-black"
                                            >
                                            </motion.span>
                                        )}
                                    </p>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.nav>
        </>
    );
}
