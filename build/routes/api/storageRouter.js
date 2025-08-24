"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StorageRouter = void 0;
const express_1 = require("express");
const config_1 = require("../../config");
const storageController_1 = require("../../controllers/storageController");
const handleValidateStorage_1 = require("../../validators/handleValidateStorage");
class StorageRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    routes() {
        this.router.get("/", storageController_1.getAllStorages);
        this.router.post("/", config_1.upload.single("file"), handleValidateStorage_1.handleValidateStorage, storageController_1.createStorage);
        this.router.delete("/:id", storageController_1.deleteStorage);
    }
}
exports.StorageRouter = StorageRouter;
//# sourceMappingURL=storageRouter.js.map