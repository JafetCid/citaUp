'use client';
import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    
    const pathname = usePathname();
    const isDoctorRoute = pathname.startsWith("/auth") || pathname.startsWith("/doctor");

    return (
        <>
            {!isDoctorRoute && <Sidebar/>}
            {!isDoctorRoute && <Navbar/>}
            <main>{children}</main>
            {!isDoctorRoute && <Footer/>}
        </>
    );
}