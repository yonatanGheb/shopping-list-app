import type { Request, Response } from "express";
import { ShoppingItem, type ShoppingItemLean } from "../models/ShoppingItem.js";
import { HttpError } from "../middleware/errorHandler.js";
import { requireObjectId } from "../validation/params.js";
import {
  parseCreateItemBody,
  parseUpdateBoughtBody,
} from "../validation/items.js";

export async function getItems(_req: Request, res: Response): Promise<void> {
  const items = await ShoppingItem.find()
    .sort({ createdAt: 1 })
    .lean<ShoppingItemLean[]>();
  res.json(items);
}

export async function createItem(req: Request, res: Response): Promise<void> {
  const { name } = parseCreateItemBody(req.body);
  const created = await ShoppingItem.create({ name, bought: false });
  const item = await ShoppingItem.findById(created._id).lean<ShoppingItemLean>();
  if (!item) {
    throw new HttpError(500, "Failed to read created item");
  }
  res.status(201).json(item);
}

export async function updateItemBought(
  req: Request,
  res: Response
): Promise<void> {
  const id = requireObjectId(req.params.id);
  const { bought } = parseUpdateBoughtBody(req.body);

  const item = await ShoppingItem.findByIdAndUpdate(
    id,
    { $set: { bought } },
    { new: true, runValidators: true }
  ).lean<ShoppingItemLean | null>();

  if (!item) {
    throw new HttpError(404, "Item not found");
  }

  res.json(item);
}

export async function deleteItem(req: Request, res: Response): Promise<void> {
  const id = requireObjectId(req.params.id);
  const deleted = await ShoppingItem.findByIdAndDelete(id).lean<ShoppingItemLean | null>();
  if (!deleted) {
    throw new HttpError(404, "Item not found");
  }
  res.status(204).send();
}
