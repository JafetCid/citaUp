'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  IoCalendar,
  IoHome,
  IoBriefcase,
} from 'react-icons/io5';
import { Links } from '@/types/components/Navbar/navbar';

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const links: Links[] = [
    { href: '/', label: 'Inicio', icon: <IoHome size={24} color='white' /> },
    { href: '/appointments', label: 'Agendar cita', icon: <IoCalendar size={24} color='white' /> },
    // { href: '/services-doc', label: 'Servicios', icon: <IoBriefcase size={24} color='white' /> },
  ];

  const toggleSidebar = () => setIsOpen((prev) => !prev);

<<<<<<< HEAD
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="md:hidden  flex justify-between rounded-r-full items-center py-4 px-4 "
    >
      {/* Toggle button */}
      <button
        onClick={toggleSidebar}
        aria-label="Abrir menú"
        className="relative z-20 w-7 h-5 flex flex-col justify-between items-center "
      >
        <span
          className={`block h-1 w-full bg-white rounded transform transition duration-300 ease-in-out ${
            isOpen ? 'rotate-45 translate-y-2' : ''
          }`}
        />
        <span
          className={`block h-1 w-full bg-white rounded transition-all duration-300 ease-in-out ${
            isOpen ? 'opacity-0' : 'opacity-100'
          }`}
        />
        <span
          className={`block h-1 w-full bg-white rounded transform transition duration-300 ease-in-out ${
            isOpen ? '-rotate-45 -translate-y-2' : ''
          }`}
        />
      </button>
=======
    const links: Links[] = [
        { href: "/", label: "Inico", icon: <IoHomeOutline size={24} /> },
        { href: "/appointments", label: "Agendar cita", icon: <IoCalendarClearOutline size={24} /> },
    ];
>>>>>>> 1e7bafb2a9d9f8eb7b40cfc33c5c1afea053d622

      {/* Sidebar */}
      <motion.div
        initial={false}
        animate={{ x: isOpen ? 0 : 300 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className="fixed top-0 right-0  h-screen w-64 bg-[#08c9e7]  dark:bg-indigo-950 shadow-lg z-10 p-8"
      >
        <div className="flex flex-col gap-6 pt-10">
          {links.map(({ href, label, icon }) => {
            const isActive = pathname === href;
            return (
              <Link key={href} href={href} className="flex text-white items-center gap-3 group">
                {icon}
                <div className="flex flex-col">
                  <span className="text-sm font-medium">{label}</span>
                  {isActive && (
                    <motion.span
                      layoutId="underline"
                      className="h-0.5 w-full bg-white"
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                    />
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      </motion.div>
    </motion.nav>
  );
}
