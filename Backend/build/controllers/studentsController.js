"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentsController = void 0;
class StudentsController {
    index(req, res) {
        res.send('Estudiantes');
    }
}
exports.studentsController = new StudentsController();
