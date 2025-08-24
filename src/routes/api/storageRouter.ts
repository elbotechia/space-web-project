import { Router } from "express";
import { upload } from "../../config";
import { getAllStorages, createStorage, deleteStorage } from "../../controllers/storageController";
import { handleValidateStorage } from "../../validators/handleValidateStorage";

export class StorageRouter {
  public router: Router;
  constructor() {
    this.router = Router();
    this.routes();
  }

  private routes() {
    this.router.get("/", getAllStorages);
    this.router.post("/", upload.single("file"), handleValidateStorage, createStorage);
    this.router.delete("/:id", deleteStorage);
  }
}
