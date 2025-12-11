/**
 * ---------------------------------------------------------
 * Project: ISAG AB
 * Developer Full Stack: Darwin Rengifo
 * Create Date: 2025-10-27
 * Design Name: del.schema.ts
 * Tools: TypeScript, Zod
 * Description:
 * Definierar valideringsscheman för skapande, uppdatering och borttagning
 * av "Del"-poster. Säkerställer att kod och namn har giltiga värden innan
 * data skickas till API:t.
 * -----------------------------------------------------------
 */
import { z } from 'zod';
import { kodSchema, namnSchema, idParams } from './common.schema';

// POST /del
export const createDelSchema = {
  body: z.object({
    kod: kodSchema,
    namn: namnSchema,
  }),
};

// PUT /del/:id
export const updateDelSchema = {
  ...idParams,
  body: z
    .object({
      kod: kodSchema.optional(),
      namn: namnSchema.optional(),
    })
    .refine((b) => Object.keys(b).length > 0, 'No fields to update'),
};

// DELETE /del/:id
export const deleteDelSchema = {
  ...idParams,
};
