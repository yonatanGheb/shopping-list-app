import type { ErrorRequestHandler } from "express";
import mongoose from "mongoose";

export class HttpError extends Error {
  constructor(
    public status: number,
    message: string
  ) {
    super(message);
    this.name = "HttpError";
  }
}

export const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
  if (err instanceof HttpError) {
    res.status(err.status).json({ error: err.message });
    return;
  }

  if (err instanceof mongoose.Error.CastError) {
    res.status(400).json({ error: "Invalid id" });
    return;
  }

  const status = 500;
  const message = "Internal server error";

  console.error(err);

  res.status(status).json({ error: message });
};
