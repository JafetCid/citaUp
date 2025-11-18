import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { IoCalendar, IoHome } from "react-icons/io5";

export default function DoctorLayout({ children }: { children: React.ReactNode }) {

    const navLinksDoctor = [
        { href: "/doctor/welcome", label: "Inicio", icon: <IoHome size={20} className="text-white" /> },
        { href: "/doctor/appointments", label: "Agendar cita", icon: <IoCalendar size={20} className="text-white" /> },
        { href: "/doctor/profile", label: "Perfil", icon: <IoCalendar size={20} className="text-white" /> },
    ];

    return (
        <main>
            <Sidebar navLinks={navLinksDoctor} />
            <Navbar href="/doctor/welcome" navLinks={navLinksDoctor} />
            {children}
        </main>
    );
}