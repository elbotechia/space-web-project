"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainRouter = void 0;
const express_1 = require("express");
const mainController_1 = require("../controllers/mainController");
const apiRouter_1 = require("./apiRouter");
class MainRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.apiRouter = new apiRouter_1.ApiRouter();
        this.mainController = new mainController_1.MainController();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get("/", (req, res) => {
            this.mainController.getIndex(req, res);
        });
        this.router.use("/api", this.apiRouter.getRouter());
    }
}
exports.MainRouter = MainRouter;
//# sourceMappingURL=mainRouter.js.map