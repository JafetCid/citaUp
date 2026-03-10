// export interface Appointment {
//     id: string;
//     title: string;
//     subtitle: string;
//     time: string;
//     name?: string;
// };

export interface Appointment {
    id: number;
    doctorId: number;
    nombrePaciente: string;
    motivo: string;
    fecha: string;
    telefonoPaciente: string;
    correoPaciente: string;
};

