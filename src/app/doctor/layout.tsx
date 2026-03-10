import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { AuthProvider } from "@/store/authContext";
import { IoCalendar, IoHome } from "react-icons/io5";

export default function DoctorLayout({ children }: { children: React.ReactNode }) {

    const navLinksDoctor = [
        { href: "/doctor/welcome", label: "Inicio", icon: <IoHome size={20} className="text-white" /> },
        { href: "/doctor/appointments", label: "Agendar cita", icon: <IoCalendar size={20} className="text-white" /> },
        { href: "/doctor/profile", label: "Perfil", icon: <IoCalendar size={20} className="text-white" /> },
    ];

    return (
        <AuthProvider>
            <main className="min-h-screen">
                <Sidebar navLinks={navLinksDoctor} showLogOut={true} />
                <Navbar href="/doctor/welcome" navLinks={navLinksDoctor} showLogOut={true} />
                {children}
            </main>
        </AuthProvider>
    );
}