/**
 * ---------------------------------------------------------
 * Project: ISAG AB
 * Developer Full Stack: Darwin Rengifo
 * Create Date: 2025-10-27
 * Design Name: stycke.schema.ts
 * Tools: TypeScript, Zod
 * Description:
 * Definierar valideringsscheman för skapande, uppdatering och borttagning
 * av "Stycke"-poster. Säkerställer att fält som kod, namn och omradeId
 * uppfyller korrekta regler innan de skickas till API:t.
 * -----------------------------------------------------------
 */
import { z } from 'zod';
import { kodSchema, namnSchema, idParams } from './common.schema';

export const createStyckeSchema = {
  body: z.object({
    omradeId: z.number().int().positive(),
    kod: kodSchema,
    namn: namnSchema,
  }),
};

export const updateStyckeSchema = {
  ...idParams,
  body: z
    .object({
      omradeId: z.number().int().positive().optional(),
      kod: kodSchema.optional(),
      namn: namnSchema.optional(),
    })
    .refine((b) => Object.keys(b).length > 0, 'No fields to update'),
};

export const deleteStyckeSchema = {
  ...idParams,
};
