/**
 * ---------------------------------------------------------
 * Project: ISAG AB
 * Developer Full Stack: Darwin Rengifo
 * Create Date: 2025-10-27
 * Design Name: omrade.schema.ts
 * Tools: TypeScript, Zod
 * Description:
 * Definierar valideringsscheman för skapande, uppdatering och borttagning
 * av "Område"-poster. Säkerställer att fält som kod, namn och avsnittId
 * är giltiga innan data skickas till API:t.
 * -----------------------------------------------------------
 */
import { z } from 'zod';
import { kodSchema, namnSchema, idParams } from './common.schema';

export const createOmradeSchema = {
  body: z.object({
    avsnittId: z.number().int().positive(),
    kod: kodSchema,
    namn: namnSchema,
  }),
};

export const updateOmradeSchema = {
  ...idParams,
  body: z
    .object({
      avsnittId: z.number().int().positive().optional(),
      kod: kodSchema.optional(),
      namn: namnSchema.optional(),
    })
    .refine((b) => Object.keys(b).length > 0, 'No fields to update'),
};

export const deleteOmradeSchema = {
  ...idParams,
};
