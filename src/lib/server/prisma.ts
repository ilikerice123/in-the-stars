// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { PrismaClient } from '@prisma/client';

const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV === 'development') {
	global.prisma = prisma;
}

export { prisma };
