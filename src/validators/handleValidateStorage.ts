import { Request, Response, NextFunction } from "express";

export function handleValidateStorage(req: Request, res: Response, next: NextFunction) {
  if (!req.file) {
    return res.status(400).json({ error: "File is required" });
  }
  next();
}
