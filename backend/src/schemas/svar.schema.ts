/**
 * ---------------------------------------------------------
 * Project: ISAG AB
 * Developer Full Stack: Darwin Rengifo
 * Create Date: 2025-10-27
 * Design Name: svar.schema.ts
 * Tools: TypeScript, Zod
 * Description:
 * Definierar valideringsschema för "Svar"-objektet.
 * Den kontrollerar betyg (0–5), ja/nej-värde, kommentar och verifikat.
 * Används för att säkerställa korrekt struktur innan data skickas till API:t.
 * -----------------------------------------------------------
 */
import { z } from 'zod';

export const svarSchema = z.object({
  betyg: z.number().min(0).max(5).nullable(),
  jaNej: z.boolean(),
  kommentar: z.string(),
  verifikat: z.string(),
});

export type SvarInput = z.infer<typeof svarSchema>;
