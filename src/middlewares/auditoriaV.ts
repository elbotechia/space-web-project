import { Request, Response, NextFunction } from "express";
import fs from "fs";
import path from "path";

interface AuditoriaObj {
	url: string;
	conteo: number;
	usuario: number;
}

export function auditoriaVMiddleware(req: Request, res: Response, next: NextFunction): void {
	console.log("Registro en auditoria V");
	const auditoriaVPath = path.join(__dirname, "../../json/vData.json");
	let objAuditoriaV: AuditoriaObj[] = [];
	if (fs.existsSync(auditoriaVPath)) {
		objAuditoriaV = JSON.parse(fs.readFileSync(auditoriaVPath, "utf-8"));
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
		const objAuditoriaAux: AuditoriaObj = {
			url: "/create",
			conteo: 1,
			usuario: 48
		};
		objAuditoriaV.push(objAuditoriaAux);
	}

	fs.writeFileSync(auditoriaVPath, JSON.stringify(objAuditoriaV, null, " "));
	next();
}
