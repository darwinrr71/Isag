# Projekt: Backend (isag) - Kort README

Detta README beskriver huvudsakliga mapparna `prisma` och `src` i backend-delen av projektet.
Språk: enkel svenska (nivå grundläggande).

OBS: `node_modules` ingår ej och nämns inte i dokumentationen.

**Översikt**

- **Projekt**: Backend för `isag`-appen. API-server skriven i TypeScript.
- **Huvudmappar**: `prisma` (databas + migrations) och `src` (applikationskod).

**Prisma**

- `prisma/schema.prisma`: Databasschema och modell-definitioner. Här definieras tabeller/entiteter och datatyper.
- `prisma/migrations/`: Mapp med migrations som visar hur databasen har ändrats över tid. Innehåller SQL-filer för varje migration.

Vad gör Prisma i projektet?

- Hanterar databasmodell och migrationer.
- Används för att köra migrations och för att skapa en Prisma Client som appen använder för att prata med databasen.

**Src**
Struktur och beskrivning av viktiga delar i `src`:

- `index.ts`: Startpunkt för backend-servern. Konfigurerar servern, middleware och rutter.

- `controllers/`:
  - `authController.ts`: Hanterar inloggning, token och autentisering-relaterade endpoints.
  - `avsnittController.ts`: CRUD-logik för "avsnitt" (sektioner).
  - `dataController.ts`: Hjälprutter för dataimport/export eller liknande funktioner.
  - `delController.ts`: CRUD-logik för "del"-entiteter.
  - `kravController.ts` och `kravController copy.ts`: Hanterar "krav" (krav-relaterade endpoints). Kan finnas en kopia för test eller äldre version.
  - `omradeController.ts`: CRUD för "område".
  - `styckeController.ts`: CRUD för "stycke".
  - `svarController.ts`: Hanterar svar-relaterade åtgärder.

- `lib/prisma.ts`: Initierar och exporterar Prisma Client för att användas i resten av appen.

- `middleware/`:
  - `auth.ts`: Middleware för att kontrollera att en användare är autentiserad (t.ex. kontroll av token).
  - `validate.ts`: Middleware för att validera request-data mot scheman.

- `routes/`:
  - `apiRoutes.ts`: Samlar API-rutter och kopplar dem till controllers.
  - `authRoutes.ts`: Rutter för autentisering (login, callback osv.).
  - `devAuth.ts`: Utvecklings-vänliga auth-rutter (för test eller lokal utveckling).

- `schemas/`:
  - `avsnitt.schema.ts`, `common.schema.ts`, `del.schema.ts`, `krav.schema.ts`, `omrade.schema.ts`, `stycke.schema.ts`, `svar.schema.ts`
  - Dessa filer definierar valideringsregler (t.ex. med Zod eller liknande) för inkommande data.

- `services/msal.ts`: Service för integration med MSAL (Microsoft Authentication Library) för autentisering mot Azure AD eller Microsoft-konton.

- `types/types.ts`: Projektspecifika TypeScript-typer och gränssnitt.

**Hur komponenterna arbetar tillsammans (enkelt)**

- `index.ts` börjar servern och använder `routes` för att registrera endpoints.
- `routes` skickar requests till `controllers`.
- `controllers` använder `lib/prisma.ts` för databasoperationer och `schemas` för validering.
- `middleware` körs före controllers för att t.ex. kontrollera autentisering eller validera data.

**Köra backend (lokalt)**

1. Öppna en terminal i `isag/backend`.
2. Installera beroenden och starta servern (exempel):

```pwsh
cd c:/Darwin/Desarrollo/Proyectos/Web/isag/backend
npm install
npm run dev
```

Anpassa kommandon efter projektets `package.json` (`dev`, `start`, eller `build`).

**Vanliga kommandon (Prisma)**

- Kör migrations:

```pwsh
npx prisma migrate dev
```

- Generera Prisma Client (om behövs):

```pwsh
npx prisma generate
```

**Notera**

- Den här README är en enkel översikt. För detaljer, titta i respektive fil i `src` och `prisma`.
