import { PrismaClient } from '@prisma/client';
import { TagInput, UserInput } from '../graphql/typeDefs';
export declare function createTag(prisma: PrismaClient, { title, domain }: TagInput, userInput: UserInput): Promise<import(".prisma/client").Tag>;
