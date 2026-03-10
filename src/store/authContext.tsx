'use client';

import { getUser } from "@/lib/api/user";
import { axiosErrors } from "@/lib/errors";
import React, { createContext, useContext, useEffect, useState } from "react"

interface UserDoctor {
    doctor: {
        id: number,
        nombre: string,
        apellidos: string,
        correo: string,
        telefono: number,
    };
}

interface AuthContextType {
    userDoc: UserDoctor | undefined;
    setUserDoc: (user: UserDoctor) => void;
    refetch: () => Promise<void>; // opcional, para volver a cargar
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {

    const [userDoc, setUserDoc] = useState<UserDoctor | undefined>(undefined);

    const fetchUser = async () => {
        try {
            const res = await getUser();
            setUserDoc(res);

        } catch (error) {
            axiosErrors(error);
        }
    }
    useEffect(() => {
        fetchUser();
    }, []);

    return (
        <AuthContext.Provider value={{ userDoc, setUserDoc, refetch: fetchUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth debe usarse dentro de AuthProvider");
    return context;
}