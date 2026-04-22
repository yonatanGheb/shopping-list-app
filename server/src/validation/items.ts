import { z } from "zod";
import { HttpError } from "../middleware/errorHandler.js";

const createItemSchema = z.object({
  name: z.string().trim().min(1, "name is required"),
});

const updateItemBoughtSchema = z.object({
  bought: z.boolean(),
});

export type CreateItemBody = z.infer<typeof createItemSchema>;
export type UpdateItemBody = z.infer<typeof updateItemBoughtSchema>;

export function parseCreateItemBody(body: unknown): CreateItemBody {
  const r = createItemSchema.safeParse(body);
  if (!r.success) {
    const msg = r.error.issues[0]?.message ?? "Invalid request body";
    throw new HttpError(400, msg);
  }
  return r.data;
}

export function parseUpdateBoughtBody(body: unknown): UpdateItemBody {
  const r = updateItemBoughtSchema.safeParse(body);
  if (!r.success) {
    const msg = r.error.issues[0]?.message ?? "Invalid request body";
    throw new HttpError(400, msg);
  }
  return r.data;
}
