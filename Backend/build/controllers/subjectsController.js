"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.subjectsController = void 0;
class SubjectsController {
    index(req, res) {
        res.send('materias');
    }
}
exports.subjectsController = new SubjectsController();
