import { Request, Response } from "express"
export class MainController {
    getIndex(req: Request, res: Response) {
        res.sendFile("index.html", {root: 'build/public'})
    }
}
