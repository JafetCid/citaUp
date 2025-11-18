'use client';
import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';
import { Links } from '@/types/components/Navbar/navbar';
import { IoCalendar, IoHome } from 'react-icons/io5';

export default function ClientLayout({ children }: { children: React.ReactNode }) {

    const pathname = usePathname();
    const isDoctorRoute = pathname.startsWith("/auth") || pathname.startsWith("/doctor");

    const navLinks = [
        { href: "/", label: "Inicio", icon: <IoHome size={20} className="text-white" /> },
        { href: "/appointments", label: "Agendar cita", icon: <IoCalendar size={20} className="text-white" /> },
    ];

    return (
        <>
            {!isDoctorRoute && <Sidebar navLinks={navLinks}/>}
            {!isDoctorRoute && <Navbar href="/" navLinks={navLinks}/>}
            <main>{children}</main>
            {!isDoctorRoute && <Footer />}
        </>
    );
}