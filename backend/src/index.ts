/**
 * ---------------------------------------------------------
 * Project: ISAG AB
 * Developer Full Stack: Darwin Rengifo
 * Create Date: 2025-07-21
 * Design Name: index.ts
 * Tools: express, dotenv, cors
 * Description:
 * This file initializes the Express application and sets up the middleware and
 * routes.
 * It loads environment variables using dotenv and configures CORS to allow
 * requests
 * from the frontend URL. The application uses JSON and URL-encoded body parsers.
 * It mounts the authentication and API routers, allowing for a clean separation of
 * concerns.
 * -----------------------------------------------------------
 */
// Import types and the global declaration file
import './types/types';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import authRouter from './routes/authRoutes';
import apiRouter from './routes/apiRoutes';
//import aggregateRouter from './routes/aggregateRoutes'; // <-- Ny import

dotenv.config();

const app = express();

app.use(cors({ origin: process.env.FRONTEND_URL }));

/** Strict limits are implemented on the size of request bodies (e.g., JSON or file uploads). This helps prevent Denial of Service (DoS) attacks that attempt to overwhelm the server with massive payloads. */
app.use(express.json({ limit: '100kb' }));
app.use(express.urlencoded({ extended: true, limit: '100kb' }));

// Mounts the authentication router at the root of the site
// Mounts the API router under the '/api' prefix
app.use('/api', authRouter);
app.use('/api', apiRouter);

// Exports the app so that vite-plugin-node can serve it
export { app };
