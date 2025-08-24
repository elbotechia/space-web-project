"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleValidateStorage = handleValidateStorage;
function handleValidateStorage(req, res, next) {
    if (!req.file) {
        return res.status(400).json({ error: "File is required" });
    }
    next();
}
//# sourceMappingURL=handleValidateStorage.js.map