import { Router } from "express";
import {
  getItems,
  createItem,
  updateItemBought,
  deleteItem,
} from "../controllers/itemsController.js";
import { asyncHandler } from "../middleware/asyncHandler.js";

export const itemsRouter = Router();

itemsRouter.get("/", asyncHandler(getItems));
itemsRouter.post("/", asyncHandler(createItem));
itemsRouter.put("/:id", asyncHandler(updateItemBought));
itemsRouter.delete("/:id", asyncHandler(deleteItem));
