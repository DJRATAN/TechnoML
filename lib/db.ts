import { PrismaClient } from "@prisma/client";

// in development mode
declare global {
    var prisma: PrismaClient | undefined;
}
export const db = globalThis.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalThis.prisma = db;


// in producion mode
// export const dbs = new PrismaClient();