import { PrismaClient } from '@prisma/client';
export declare function createProject(prisma: PrismaClient, { name, title, }: {
    name: string;
    title: string;
}): Promise<import(".prisma/client").Project>;
