'use client'

import React from 'react'
import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { IoCalendarClearOutline, IoHomeOutline, IoBriefcaseOutline, IoPersonOutline } from "react-icons/io5";
import { Links } from '@/types/Navbar/navbar';
import { FaBars } from 'react-icons/fa';

export default function Navbar() {

    const pathname = usePathname();
    const links: Links[] = [
        { href: "/", label: "Inico", icon: <IoHomeOutline size={24} /> },
        { href: "/appointments", label: "Agendar cita", icon: <IoCalendarClearOutline size={24} /> },
        { href: "/services-doc", label: "Servicios", icon: <IoBriefcaseOutline size={24} /> },
        { href: "/contact", label: "Contacto", icon: <IoPersonOutline size={24} /> },
    ];

    return (
        <>
            <motion.nav
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="hidden justify-between items-center py-4 px-4 md:flex"
            >
                <Image src={'/logo.png'} alt="logo" width={100} height={100} />
                <div className="flex gap-5">
                    {links.map(({ href, label, icon }) => (
                        <div key={href}>
                            <Link href={href} className="flex gap-2">
                                {icon}
                                <p className="flex flex-col">
                                    {label}
                                    {pathname === href && (
                                        <motion.span
                                            className="relative left-0 bottom-0 h-0.5 w-full bg-black"
                                            layoutId="underline"
                                            transition={{
                                                type: "spring",
                                                visualDuration: 0.5,
                                                bounce: 0.3,
                                            }}
                                        >
                                        </motion.span>
                                    )}
                                </p>
                            </Link>
                        </div>
                    ))}
                </div>
            </motion.nav>
        </>
    );
}
