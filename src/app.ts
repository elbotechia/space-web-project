import dotenv from 'dotenv'
dotenv.config()
import path from 'path';
import express, { Application, Router } from 'express'
import { auditoriaVMiddleware } from './middlewares/auditoriaV';
import cors from 'cors'
import morgan from 'morgan'
import { MainRouter } from './routes/mainRouter'
import { connectMongoose } from './config';


export class Server {

    app:Application=express()
    PORT:Number = Number(process.env.PORT) || 3000
    mainPath: string="/"
    apiPath: string="/api"
    mainRouter = new MainRouter()
    constructor(){
        this.middlewares()
        this.routes()
    }

    middlewares(){
    this.app.use(cors())
    this.app.use(morgan('dev'))
    this.app.use(express.json())
    this.app.use(auditoriaVMiddleware)
    this.app.use(express.static(path.resolve("build/public")))

    this.app.use(express.static(path.resolve("uploads")))    
}

    routes(){
        this.app.use(this.mainPath, this.mainRouter.router)
    }


    async listen() {
        await connectMongoose();
        this.app.listen(this.PORT, () => {
            console.log(`Server is running on port ${this.PORT}`);
        });
    }

}