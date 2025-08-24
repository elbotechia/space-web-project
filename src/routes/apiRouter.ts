import { Router, Request, Response } from "express";
import {StorageRouter}  from "./api/storageRouter";

export class ApiRouter {
    public router: Router;
    private storageRouter = new StorageRouter().router;

    constructor() {
        this.router = Router();
        this.initializeRoutes();
    }

    private initializeRoutes(): void {
        this.router.use("/storage", this.storageRouter);
    }

    public getRouter(): Router {
        return this.router;
    }
}
