"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.inscriptionController = void 0;
const database_1 = __importDefault(require("../database"));
class InscriptionController {
    list(req, res) {
        const inscripciones = database_1.default.query('select * from inscripcion_materias', (err, results, fields) => {
            res.json(results);
            console.log(err);
            if (err) {
                res.status(400).json({
                    status: 'error 400',
                    message: err.message
                });
                return;
            }
            else if (!results) {
                res.status(204).json({
                    status: '204',
                    result: 'No se encontrĂ³ ningun registro que coincida con los parametros dados'
                });
            }
            else {
                res.status(200).json({
                    status: '200',
                    result: results
                });
            }
        });
    }
    getId(req, res) {
        const inscripciones = database_1.default.query('select * from inscripcion_materias where id_materia = ? and id_estudiante = ?', [req.params.idm, req.params.ide], (err, results, fields) => {
            console.log(err);
            if (err) {
                res.status(400).json({
                    status: 'error 400',
                    message: err.message
                });
                return;
            }
            else if (!results) {
                res.status(204).json({
                    status: '204',
                    result: 'No se encontrĂ³ ningun registro que coincida con los parametros dados'
                });
            }
            else {
                res.status(200).json({
                    status: '200',
                    result: results
                });
            }
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
            }
            else {
                res.status(200).json({
                    status: '200',
                    message: 'Se realizĂ³ la inscripcion de materia'
                });
            }
        });
    }
    delete(req, res) {
        res.json({ text: 'Eliminado una materia ' + req.params.idm });
    }
    update(req, res) {
        database_1.default.query('UPDATE inscripcion_materias set ? WHERE id_materia = ? AND id_estudiante = ?', [req.body, req.params.idm, req.params.ide], (err, results, fields) => {
            console.log(err);
            if (err) {
                res.status(400).json({
                    status: 'error 400',
                    message: err.message
                });
                return;
            }
            else {
                res.status(200).json({
                    status: '200',
                    message: 'Se actualizĂ³ la inscripciĂ³n de materia ' + req.params.idm
                });
            }
        });
    }
    patch(req, res) {
        database_1.default.query('UPDATE inscripcion_materias set estado_inscripciĂ³n = ? WHERE id_materia = ? AND id_estudiante = ?', [req.body.estado_inscripciĂ³n, req.params.idm, req.params.ide], (err, results, fields) => {
            console.log(err);
            if (err) {
                res.status(400).json({
                    status: 'error 400',
                    message: err.message
                });
                return;
            }
            else {
                res.status(200).json({
                    status: '200',
                    message: 'Se cambĂ­o el estado de la inscripciĂ³n'
                });
            }
        });
    }
}
exports.inscriptionController = new InscriptionController();
