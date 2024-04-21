import { Prisma } from "@prisma/client";


export class User implements Prisma.UserCreateInput {
    name: string;
    email: string;
    register_date?: string | Date;
    last_login: string | Date;
    status: string;
}