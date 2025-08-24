"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainController = void 0;
class MainController {
    getIndex(req, res) {
        res.sendFile("index.html", { root: 'build/public' });
    }
}
exports.MainController = MainController;
//# sourceMappingURL=mainController.js.map