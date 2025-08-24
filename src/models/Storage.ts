import mongoose, { Document, Schema } from "mongoose";
import mongooseDelete from "mongoose-delete";

export interface IStorage extends Document {
  path: string;
  filename: string;
  url: string;
}

const StorageSchema = new Schema<IStorage>({
  path: { type: String, required: true },
  filename: { type: String, required: true },
  url: { type: String, required: true },
}, { timestamps: true });

StorageSchema.plugin(mongooseDelete, { overrideMethods: "all" });

export const StorageModel = mongoose.model<IStorage>("Storage", StorageSchema);
