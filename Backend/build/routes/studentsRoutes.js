"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const studentsController_1 = require("../controllers/studentsController");
class StudentsRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', studentsController_1.studentsController.list);
        this.router.get('/:id', studentsController_1.studentsController.getId);
        this.router.post('/', studentsController_1.studentsController.create);
        this.router.delete('/:id', studentsController_1.studentsController.delete);
        this.router.put('/:id', studentsController_1.studentsController.update);
    }
}
const studentsRoutes = new StudentsRoutes();
exports.default = studentsRoutes.router;
