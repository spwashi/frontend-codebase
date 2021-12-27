import { PrismaClient } from '@prisma/client';
export declare function signUserUp(prisma: PrismaClient, userInput: {
    username: string;
    name?: string | undefined;
}, passwordInput: {
    password: string;
    passwordConfirm?: string | undefined;
}, projectInput: {
    name: string;
}): Promise<import(".prisma/client").User>;
