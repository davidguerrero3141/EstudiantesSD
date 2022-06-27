"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.subjectsController = void 0;
const database_1 = __importDefault(require("../database"));
class InscriptionController {
    list(req, res) {
        const materias = database_1.default.query('select * from inscripcion_materias', (err, results, fields) => {
            res.json(results);
            console.log(err);

        });
    }
    getId(req, res) {
        const materias = database_1.default.query('select * from inscripcion_materias where id_materia = ? and id_estudiante = ?', [req.params.idm, req.params.ide], (err, results, fields) => {
            res.json(results);
            console.log(err);
        });
    }
    create(req, res) {
        database_1.default.query('INSERT INTO inscripcion_materias set ?', [req.body], (err, results, fields) => {
            console.log(err);
            if (err) {
                res.status(400).json({
                    status: 'error 400',
                    message: err.message
                });
                return;
            } else {
                res.status(200).json({
                    status: '200',
                    message: 'Se realizó la inscripcion de materia'
                });
            }
        });
        // res.json({ text: 'Se realizó la inscripcion de materia' });
    }
    delete(req, res) {
        res.json({ text: 'Eliminado una materia ' + req.params.idm });
    }
    update(req, res) {
        const { id } = req.params;
        database_1.default.query('UPDATE inscripcion_materias set ? WHERE id_materia = ? AND id_estudiante = ?', [req.body, req.params.idm, req.params.ide], (err, results, fields) => {
            console.log(err);
        });
        res.json({ text: 'actualizando inscripción de materia ' + req.params.idm });
    }
    patch(req, res) {
        const { id } = req.params;
        database_1.default.query('UPDATE inscripcion_materias set estado_inscripción = ? WHERE id_materia = ? AND id_estudiante = ?', [req.body.estado_inscripción, req.params.idm, req.params.ide], (err, results, fields) => {
            console.log(err);

        });
        res.json({ text: 'actualizando cambiado el estado de inscripcion de la materia ' + req.params.idm });
    }
}
exports.inscriptionController = new InscriptionController();
