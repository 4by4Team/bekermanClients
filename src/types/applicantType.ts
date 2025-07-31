import { Course } from "./CoursesType";
import { User } from "./userType";

export enum ApplicationStatus {
    PENDING = "PENDING",
    APPROVED = "APPROVED",
    REJECTED = "REJECTED",
}
export interface Applicant {
    id: number;
    userId: number;
    courseId: number;
    status: ApplicationStatus;
    appliedAt: Date;
    updatedAt: Date;
    user: User;
    course: Course;
}
