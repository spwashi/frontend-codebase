import { PrismaClient } from '@prisma/client';
import { ConceptInput, UserInput } from '../graphql/typeDefs';
export declare function createConcept(prisma: PrismaClient, { title, src, mimeType }: ConceptInput, userInput: UserInput): Promise<import(".prisma/client").Concept>;
