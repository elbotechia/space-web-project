import { Router, Request, Response } from "express";
import { MainController } from "../controllers/mainController";
import { ApiRouter } from "./apiRouter";

export class MainRouter {
    public router: Router;
    private mainController: MainController;
    private apiRouter: ApiRouter;

    constructor() {
        this.router = Router();
        this.apiRouter = new ApiRouter();
        this.mainController = new MainController();
        this.initializeRoutes();
    }

    private initializeRoutes(): void {
        this.router.get("/", (req: Request, res: Response) => {
            this.mainController.getIndex(req, res);
        });
        this.router.use("/api", this.apiRouter.getRouter());
    }
}
