'use client'

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";
import { Links } from '@/types/components/Navbar/navbar';
import { usePathname } from "next/navigation";
import { IoCalendarClearOutline, IoHomeOutline } from "react-icons/io5";

export default function Navbar() {

    const pathname = usePathname();
    const links: Links[] = [
        { href: "/", label: "Inicio", icon: <IoHomeOutline size={24} /> },
        { href: "/appointments", label: "Agendar cita", icon: <IoCalendarClearOutline size={24} /> },
    ];

    return (
        <div className="hidden w-full bg-white md:block md:absolute z-10">
            <motion.nav
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="justify-between items-center py-4 px-10 md:flex"
            >
                <Image src={'/logo.png'} alt="logo" width={100} height={100} />
                <div className="flex gap-5">
                    {links.map(({ href, label, icon }) => (
                        <div key={href}>
                            <Link href={href} className="flex gap-2">
                                {icon}
                                <motion.p className="flex flex-col">
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
                                </motion.p>
                            </Link>
                        </div>
                    ))}
                </div>
            </motion.nav>
            {/* <div className="bg-black/10 h-px"></div> */}
        </div>
    );
}