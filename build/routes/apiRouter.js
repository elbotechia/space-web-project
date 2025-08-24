"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiRouter = void 0;
const express_1 = require("express");
const storageRouter_1 = require("./api/storageRouter");
class ApiRouter {
    constructor() {
        this.storageRouter = new storageRouter_1.StorageRouter().router;
        this.router = (0, express_1.Router)();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.use("/storage", this.storageRouter);
    }
    getRouter() {
        return this.router;
    }
}
exports.ApiRouter = ApiRouter;
//# sourceMappingURL=apiRouter.js.map