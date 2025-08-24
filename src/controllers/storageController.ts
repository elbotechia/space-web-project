import { Request, Response } from "express";
import { StorageModel } from "../models/Storage";

export const getAllStorages = async (req: Request, res: Response) => {
  const storages = await StorageModel.find();
  res.json(storages);
};

export const createStorage = async (req: Request, res: Response) => {
  if (!req.file) return res.status(400).json({ error: "No file uploaded" });
  const { path, filename } = req.file;
  const url = `/uploads/${filename}`;
  const storage = new StorageModel({ path, filename, url });
  await storage.save();
  res.status(201).json(storage);
};

export const deleteStorage = async (req: Request, res: Response) => {
  const { id } = req.params;
  const storage = await (StorageModel as any).delete({ _id: id });
  if (!storage || storage.deletedCount === 0) return res.status(404).json({ error: "Not found" });
  res.json({ success: true });
};
