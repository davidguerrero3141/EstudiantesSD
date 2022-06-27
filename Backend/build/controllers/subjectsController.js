"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.subjectsController = void 0;
const database_1 = __importDefault(require("../database"));
class SubjectsController {
    list(req, res) {
        const materias = database_1.default.query('select * from materias', (err, results, fields) => {
            res.json(results);
            console.log(err);
        });
    }
    getId(req, res) {
        const materias = database_1.default.query('select * from materias where id_materia = ?', req.params.id, (err, results, fields) => {
            res.json(results);
            console.log(err);
        });
    }
    create(req, res) {
        database_1.default.query('INSERT INTO materias set ?', [req.body], (err, results, fields) => {
            console.log(err);
        });
        res.json({ text: 'Se guardo una materia' });
    }
    delete(req, res) {
        res.json({ text: 'Eliminado una materia ' + req.params.id });
    }
    update(req, res) {
        const { id } = req.params;
        database_1.default.query('UPDATE materias set ? WHERE id_materia = ?', [req.body, id], (err, results, fields) => {
            console.log(err);
        });
        res.json({ text: 'actualizando una materia ' + req.params.id });
    }
    patch(req, res) {
        const { id } = req.params;
        database_1.default.query('UPDATE materias set estado = ? WHERE id_materia = ?', [req.body.estado, id], (err, results, fields) => {
            console.log(err);
        });
        res.json({ text: 'actualizando cambiado el estado de una materia ' + req.params.id });
    }
}
exports.subjectsController = new SubjectsController();
