import { isValidObjectId } from "mongoose";
import { HttpError } from "../middleware/errorHandler.js";

export function requireObjectId(
  id: string | string[] | undefined
): string {
  const raw = Array.isArray(id) ? id[0] : id;
  if (raw == null || raw.length === 0) {
    throw new HttpError(400, "id is required");
  }
  if (!isValidObjectId(raw)) {
    throw new HttpError(400, "Invalid id");
  }
  return raw;
}
