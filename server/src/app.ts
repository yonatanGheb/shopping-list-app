import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { itemsRouter } from "./routes/items.js";
import { errorHandler } from "./middleware/errorHandler.js";
import { notFoundHandler } from "./middleware/notFoundHandler.js";

export function createApp() {
  const app = express();

  const clientOrigin = process.env.CLIENT_ORIGIN ?? "http://localhost:5173";
  app.use(
    cors({
      origin: clientOrigin,
    })
  );
  app.use(express.json());

  app.get("/health", (_req, res) => {
    res.json({
      ok: true,
      db: mongoose.connection.readyState === 1,
    });
  });

  app.use("/items", itemsRouter);
  app.use(notFoundHandler);
  app.use(errorHandler);

  return app;
}
