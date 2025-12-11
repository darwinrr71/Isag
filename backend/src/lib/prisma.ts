/**
 * ---------------------------------------------------------
 * Project: ISAG AB
 * Developer Full Stack: Darwin Rengifo
 * Create Date: 2025-10-27
 * Design Name: prisma.ts
 * Tools: TypeScript, Prisma ORM
 * Description:
 * Initierar och exporterar en enda instans av PrismaClient
 * för att hantera databasanslutningar effektivt i hela projektet.
 * Säkerställer stabil och återanvändbar åtkomst till databasen.
 * -----------------------------------------------------------
 */
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default prisma;
