# Frontend (isag) - Kort README för `src`

Denna README förklarar huvudmappen `src` i frontend-delen av projektet. Språk: enkel svenska (nivå grundläggande).

OBS: `node_modules` ingår ej.

**Översikt**
- **Projekt**: Frontend i React (TypeScript + Vite).
- **Huvudmapp**: `src` — all applikationskod finns här.

**Viktiga filer i `src`**

- `main.tsx`: Appens startpunkt i webben. Monterar React-appen och renderar `App`.
- `App.tsx`: Huvudkomponenten som sätter upp routing och övergripande layout.
- `index.css`: Globala stilar för applikationen.

- `api/`:
  - `auth.ts`: Funktioner för att prata med backend-auth endpoints (inloggning, token, etc.).

- `components/`:
  - `ProtectedRoute.tsx`: Komponent som blockerar sidor för icke-autentiserade användare.
  - `inputs/AmplifiedInput.tsx`: Specialiserat input-fält.
  - `krav/KravBreadcrumbs.tsx`: Breadcrumbs-komponent för krav-sektionen.
  - `layout/` (t.ex. `Header.tsx`, `MainLayout.tsx`, `MenubarNav.tsx`): Layout-komponenter för navigering och sidmall.
  - `toast/useBrindToast.tsx`: Hook och komponenter för notifikationer/toasts.
  - `ui/`: Små UI-komponenter (knappar, kort, dialoger, input, select, osv.).

- `contexts/`:
  - `AuthProvider.tsx`: Context som håller auth-status och användarinformation.
  - `authTypes.ts`: Typer för auth-context.

- `hooks/`:
  - `useAuth.ts`: Hook för att använda autentiseringslogik i komponenter.
  - `useAvsnitt.ts`, `useDel.ts`, `useKrav.ts`, `useOmrade.ts`, `useStycke.ts`, `useSvar.ts`: Hooks för att hämta/hantera data för respektive domän-objekt.
  - `useSortedArray.ts`: Hjälphook för sortering.

- `lib/`:
  - `axios.ts`: Konfigurerad Axios-instans för API-anrop.
  - `utils.ts`: Hjälpfunktioner som används i appen.

- `pages/`:
  - `Dashboard.tsx`: Huvudvy efter inloggning.
  - `Home.tsx`: Startsida.
  - `Login.tsx`: Inloggningssida.
  - `UploadExcelPage.tsx`: Sida för uppladdning av Excel-filer.
  - `krav/`: Sidor relaterade till krav.
  - `navigationtree/`: Sidor och komponenter för navigeringsträdet.

- `controllers/` (i frontend-mapp): Logik/organisering av klientkod för tex krav eller navigationtree.

**Hur komponenterna samarbetar (enkelt)**
- `main.tsx` startar appen och visar `App`.
- `App.tsx` använder `AuthProvider` för att hantera inloggning och skyddar rutter med `ProtectedRoute`.
- Sidor (`pages`) använder `hooks` för att hämta och manipulera data via `api/*` som använder `lib/axios.ts`.
- UI-komponenterna i `components/ui` används överallt för konsistent design.

**Köra frontend (lokalt)**
1. Öppna en terminal i `isag/frontend`.
2. Installera beroenden och starta dev-servern:

```pwsh
cd c:/Darwin/Desarrollo/Proyectos/Web/isag/frontend
npm install
npm run dev
```

Byt `npm` mot `pnpm` eller `yarn` om du använder det.

**Notera**
- Denna README är avsedd som en enkel, grundläggande översikt av `src`.
- För detaljer, öppna de listade filerna och katalogerna i koden.
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
