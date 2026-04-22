import mongoose, { type InferSchemaType } from "mongoose";

const shoppingItemSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    bought: {
      type: Boolean,
      default: false,
    },
  },
  {
    versionKey: false,
    timestamps: { createdAt: true, updatedAt: false },
  }
);

export type ShoppingItemLean = InferSchemaType<typeof shoppingItemSchema> & {
  _id: mongoose.Types.ObjectId;
};

export const ShoppingItem = mongoose.model("ShoppingItem", shoppingItemSchema);
