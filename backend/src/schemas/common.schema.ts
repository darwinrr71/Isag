/**
 * ---------------------------------------------------------
 * Project: ISAG AB
 * Developer Full Stack: Darwin Rengifo
 * Create Date: 2025-10-27
 * Design Name: common.schema.ts
 * Tools: TypeScript, Zod
 * Description:
 * Innehåller gemensamma valideringsscheman som används i flera moduler,
 * inklusive grundläggande regler för kod, namn och ID-parametrar.
 * Säkerställer att data följer rätt format innan vidare behandling.
 * -----------------------------------------------------------
 */
import { z } from 'zod';

export const kodSchema = z.string().min(1, 'kod is required').max(64, 'kod too long');
export const namnSchema = z.string().min(1, 'namn is required').max(255, 'namn too long');

// Para params.id
export const idParams = {
  params: z.object({
    id: z
      .string()
      .regex(/^\d+$/)
      .transform((v) => Number.parseInt(v, 10))
      .refine((v) => Number.isInteger(v) && v > 0, 'Invalid id'),
  }),
};
