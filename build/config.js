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
exports.db = exports.connectMongoose = exports.upload = void 0;
const multer_1 = __importDefault(require("multer"));
const mongoose_1 = __importDefault(require("mongoose"));
const knex_1 = __importDefault(require("knex"));
const storage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "build/public/uploads");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname);
    }
});
exports.upload = (0, multer_1.default)({ storage });
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/spaceweb";
const connectMongoose = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongoose_1.default.connect(MONGO_URI);
        console.log("MongoDB connected");
    }
    catch (error) {
        console.error("MongoDB connection error:", error);
    }
});
exports.connectMongoose = connectMongoose;
exports.db = (0, knex_1.default)({
    client: "sqlite3",
    connection: {
        filename: "./database/dbespacial.db"
    },
    useNullAsDefault: true
});
//# sourceMappingURL=config.js.map