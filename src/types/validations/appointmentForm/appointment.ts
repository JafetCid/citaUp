export interface AppointmentsForm { 
    name: string;
    email: string;
    phoneNumber: number | string;
    date: number | string;
    hour: number | string;
    service: string;
    comments: string;
}