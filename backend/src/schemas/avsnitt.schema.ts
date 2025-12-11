/**
 * ---------------------------------------------------------
 * Project: ISAG AB
 * Developer Full Stack: Darwin Rengifo
 * Create Date: 2025-10-27
 * Design Name: avsnitt.schema.ts
 * Tools: TypeScript, Zod
 * Description:
 * Definierar valideringsscheman för skapande, uppdatering och borttagning
 * av "Avsnitt"-poster. Säkerställer att fält som delId, kod och namn
 * har giltiga värden innan data skickas till API:t.
 * -----------------------------------------------------------
 */
import { z } from 'zod';
import { kodSchema, namnSchema, idParams } from './common.schema';

export const createAvsnittSchema = {
  body: z.object({
    delId: z.number().int().positive(),
    kod: kodSchema,
    namn: namnSchema,
  }),
};

export const updateAvsnittSchema = {
  ...idParams,
  body: z
    .object({
      delId: z.number().int().positive().optional(),
      kod: kodSchema.optional(),
      namn: namnSchema.optional(),
    })
    .refine((b) => Object.keys(b).length > 0, 'No fields to update'),
};

export const deleteAvsnittSchema = {
  ...idParams,
};
