"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const path_1 = __importDefault(require("path"));
const express_1 = __importDefault(require("express"));
const auditoriaV_1 = require("./middlewares/auditoriaV");
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const mainRouter_1 = require("./routes/mainRouter");
const config_1 = require("./config");
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.PORT = Number(process.env.PORT) || 3000;
        this.mainPath = "/";
        this.apiPath = "/api";
        this.mainRouter = new mainRouter_1.MainRouter();
        this.middlewares();
        this.routes();
    }
    middlewares() {
        this.app.use((0, cors_1.default)());
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use(express_1.default.json());
        this.app.use(auditoriaV_1.auditoriaVMiddleware);
        this.app.use(express_1.default.static(path_1.default.resolve("build/public")));
        this.app.use(express_1.default.static(path_1.default.resolve("uploads")));
    }
    routes() {
        this.app.use(this.mainPath, this.mainRouter.router);
    }
    listen() {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, config_1.connectMongoose)();
            this.app.listen(this.PORT, () => {
                console.log(`Server is running on port ${this.PORT}`);
            });
        });
    }
}
exports.Server = Server;
//# sourceMappingURL=app.js.map