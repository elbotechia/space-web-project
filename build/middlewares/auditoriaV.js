"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.auditoriaVMiddleware = auditoriaVMiddleware;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
function auditoriaVMiddleware(req, res, next) {
    console.log("Registro en auditoria V");
    const auditoriaVPath = path_1.default.join(__dirname, "../../json/vData.json");
    let objAuditoriaV = [];
    if (fs_1.default.existsSync(auditoriaVPath)) {
        objAuditoriaV = JSON.parse(fs_1.default.readFileSync(auditoriaVPath, "utf-8"));
    }
    let comprobar = false;
    for (let obj of objAuditoriaV) {
        if (obj.url === "/create") {
            obj.conteo++;
            comprobar = true;
            break;
        }
    }
    if (!comprobar) {
        const objAuditoriaAux = {
            url: "/create",
            conteo: 1,
            usuario: 48
        };
        objAuditoriaV.push(objAuditoriaAux);
    }
    fs_1.default.writeFileSync(auditoriaVPath, JSON.stringify(objAuditoriaV, null, " "));
    next();
}
//# sourceMappingURL=auditoriaV.js.map