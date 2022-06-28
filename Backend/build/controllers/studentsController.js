"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentsController = void 0;
const database_1 = __importDefault(require("../database"));
class StudentsController {
    list(req, res) {
        const estudiantes = database_1.default.query('select * from estudiantes', function (err, results, fields) {
            if (err) {
                res.status(400).json({
                    status: 'error 400',
                    message: err.message
                });
            }
            else if (!results) {
                res.status(204).json({
                    status: '204',
                    result: 'No se encontró ningun registro que coincida con los parametros dados'
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
        const estudiantes = database_1.default.query('select * from estudiantes where id_estudiante = ?', req.params.id, function (err, results, fields) {
            if (err) {
                res.status(400).json({
                    status: 'error 400',
                    message: err.message
                });
            }
            else if (!results) {
                res.status(204).json({
                    status: '204',
                    result: 'No se encontró ningun registro que coincida con los parametros dados'
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
    getByCode(req, res) {
        const estudiantes = database_1.default.query('select * from estudiantes where codigo = ?', req.params.id, function (err, results, fields) {
            if (err) {
                res.status(400).json({
                    status: 'error 400',
                    message: err.message
                });
            }
            else if (!results) {
                res.status(204).json({
                    status: '204',
                    result: 'No se encontró ningun registro que coincida con los parametros dados'
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
    getDocument(req, res) {
        const estudiantes = database_1.default.query('select * from estudiantes where numero_documento = ?', req.params.id, function (err, results, fields) {
            if (err) {
                res.status(400).json({
                    status: 'error 400',
                    message: err.message
                });
            }
            else if (!results) {
                res.status(204).json({
                    status: '204',
                    result: 'No se encontró ningun registro que coincida con los parametros dados'
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
    async create(req, res) {
        database_1.default.query('INSERT INTO estudiantes set ?', [req.body], function (err, results, fields) {
            if (err) {
            }
            else if (!results) {
                res.status(400).json({
                    status: 'error 400',
                    message: err
                });
            }
            else {
                res.status(200).json({
                    status: '200',
                    message: 'Se agrego un nuevo estudiante'
                });
            }
        });
        //await pool.execute('INSERT INTO estudiantes (numero_documento, tipo_documento, nombre, apellido, codigo) values ("' + req.body.numero_documento+'","'+req.body.tipo_documento+'","'+req.body.nombre+'","'+req.body.apellido+'","'+req.body.codigo+'");');
    }
    delete(req, res) {
        res.json({ text: 'Eliminado un estudiante ' + req.params.id });
    }
    updateStudent(req, res) {
        const { id } = req.params;
        database_1.default.query('UPDATE estudiantes set ? WHERE id_estudiante = ?', [req.body, id], (err, results, fields) => {
            if (err) {
            }
            else if (!results) {
                res.status(400).json({
                    status: 'error 400',
                    message: err
                });
            }
            else {
                res.status(200).json({
                    status: '200',
                    message: 'Se actualizo la informacion de un estudiante'
                });
            }
        });
    }
    setState(req, res) {
        const { id } = req.params;
        database_1.default.query('UPDATE estudiantes set estado = ? WHERE id_estudiante = ?', [req.body.estado, id], (err, results, fields) => {
            if (err) {
            }
            else if (!results) {
                res.status(400).json({
                    status: 'error 400',
                    message: err
                });
            }
            else {
                res.status(200).json({
                    status: '200',
                    message: 'Se actualizo el estado de un estudiante'
                });
            }
        });
    }
}
exports.studentsController = new StudentsController();
