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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteStorage = exports.createStorage = exports.getAllStorages = void 0;
const Storage_1 = require("../models/Storage");
const getAllStorages = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const storages = yield Storage_1.StorageModel.find();
    res.json(storages);
});
exports.getAllStorages = getAllStorages;
const createStorage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.file)
        return res.status(400).json({ error: "No file uploaded" });
    const { path, filename } = req.file;
    const url = `/uploads/${filename}`;
    const storage = new Storage_1.StorageModel({ path, filename, url });
    yield storage.save();
    res.status(201).json(storage);
});
exports.createStorage = createStorage;
const deleteStorage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const storage = yield Storage_1.StorageModel.delete({ _id: id });
    if (!storage || storage.deletedCount === 0)
        return res.status(404).json({ error: "Not found" });
    res.json({ success: true });
});
exports.deleteStorage = deleteStorage;
//# sourceMappingURL=storageController.js.map