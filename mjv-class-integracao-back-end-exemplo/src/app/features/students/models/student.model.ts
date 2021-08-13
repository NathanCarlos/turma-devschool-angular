export interface Student {
    id?: number;
    name: string;
    email: string;
    password: string;
    monthlyPayment: number;
    inclusionDate: Date | string;
    lastMontlhyPayment: Date| string;
    validRegistration: boolean;
    course: string;
}