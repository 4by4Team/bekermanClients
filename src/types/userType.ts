import { Applicant } from "./applicantType";

export enum Role {
    ADMIN = "ADMIN",
    USER = "USER",
}

export interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    tz: string;
    password: string;
    role: Role;
    createdAt: Date;
    updatedAt: Date;
    applicants: Applicant[];
}