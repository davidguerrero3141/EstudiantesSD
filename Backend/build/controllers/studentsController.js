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
            res.json(results);
            console.log(err);
        });
    }
    getId(req, res) {
        const estudiantes = database_1.default.query('select * from estudiantes where id_estudiante = ?', req.params.id, function (err, results, fields) {
            res.json(results);
            console.log(err);
        });
    }
    getByCode(req, res) {
        const estudiantes = database_1.default.query('select * from estudiantes where codigo = ?', req.params.id, function (err, results, fields) {
            res.json(results);
            console.log(err);
        });
    }
    getDocument(req, res) {
        const estudiantes = database_1.default.query('select * from estudiantes where numero_documento = ?', req.params.id, function (err, results, fields) {
            res.json(results);
            console.log(err);
        });
    }
    async create(req, res) {
        database_1.default.query('INSERT INTO estudiantes set ?', [req.body], function (err, results, fields) {
            console.log(err);
        });
        //await pool.execute('INSERT INTO estudiantes (numero_documento, tipo_documento, nombre, apellido, codigo) values ("' + req.body.numero_documento+'","'+req.body.tipo_documento+'","'+req.body.nombre+'","'+req.body.apellido+'","'+req.body.codigo+'");');
        res.json({ text: 'Se guardo un estudiante' });
    }
    delete(req, res) {
        res.json({ text: 'Eliminado un estudiante ' + req.params.id });
    }
    updateStudent(req, res) {
        const { id } = req.params;
        database_1.default.query('UPDATE estudiantes set ? WHERE id_estudiante = ?', [req.body, id], (err, results, fields) => {
            console.log(err);
        });
        res.json({ text: 'actualizando el estudiante: ' + req.params.id });
    }
    setState(req, res) {
        const { id } = req.params;
        database_1.default.query('UPDATE estudiantes set estado = ? WHERE id_estudiante = ?', [req.body.estado, id], (err, results, fields) => {
            console.log(err);
        });
        res.json({ text: 'cambiando el estado del estudiante: ' + req.params.id });
    }
}
exports.studentsController = new StudentsController();
