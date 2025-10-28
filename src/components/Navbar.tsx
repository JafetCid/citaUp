'use client';

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { IoCalendar, IoHome, IoBriefcaseOutline } from "react-icons/io5";
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import { Links } from '@/types/components/Navbar/navbar';
import Sidebar from "./Sidebar";

const navLinks: Links[] = [
  { href: "/", label: "Inicio", icon: <IoHome size={20} className="text-white" /> },
  { href: "/appointments", label: "Agendar cita", icon: <IoCalendar size={20} className="text-white" /> },
  // { href: "/services-doc", label: "Servicios", icon: <IoBriefcaseOutline size={20} className="text-white" /> },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-4 top-6 z-50">
      <motion.nav
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        role="navigation"
        aria-label="Barra de navegación"
        className="w-full flex items-center justify-between py-2 px-3 md:px-6 bg-transparent backdrop-blur-sm"
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
        <nav className="hidden md:flex items-center gap-4" aria-hidden={open}>
          {navLinks.map(({ href, label, icon }) => {
            const isActive = pathname === href;
            return (
              <Link key={href} href={href} className="relative inline-flex items-center gap-2 text-sm font-medium text-white/95 hover:text-white focus:outline-none focus:ring-2 focus:ring-amber-300/30 rounded-md px-3 py-2">
                <span className="opacity-90">{icon}</span>
                <span>{label}</span>
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-3 left-2 right-2 h-1 rounded-t-lg bg-gradient-to-r from-amber-300 to-emerald-300"
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Mobile button */}
        <Sidebar />
      </motion.nav>

      {/* Mobile panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="md:hidden bg-black/70 backdrop-blur-md border-b border-white/6"
          >
            <div className="p-4">
              <div className="flex flex-col gap-2">
                {navLinks.map(({ href, label, icon }) => (
                  <Link key={href} href={href} onClick={() => setOpen(false)} className={`flex items-center gap-3 px-3 py-2 rounded-md hover:bg-white/6 text-white ${pathname === href ? 'bg-white/8' : ''}`}>
                    <span className="opacity-90">{icon}</span>
                    <span className="font-medium">{label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
