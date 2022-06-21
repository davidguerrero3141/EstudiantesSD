"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.subjectsController = void 0;
const database_1 = __importDefault(require("../database"));
class SubjectsController {
    list(req, res) {
        const materias = database_1.default.query('select * from materias', function (err, results, fields) {
            res.json(results);
            console.log(err);
        });
    }
    getId(req, res) {
        const materias = database_1.default.query('select * from materias where id_materia = ?', req.params.id, function (err, results, fields) {
            res.json(results);
            console.log(err);
        });
    }
    create(req, res) {
        database_1.default.query('INSERT INTO materias set ?', [req.body], function (err, results, fields) {
            console.log(err);
        });
        //await pool.execute('INSERT INTO estudiantes (numero_documento, tipo_documento, nombre, apellido, codigo) values ("' + req.body.numero_documento+'","'+req.body.tipo_documento+'","'+req.body.nombre+'","'+req.body.apellido+'","'+req.body.codigo+'");');
        res.json({ text: 'Se guardo un estudiante' });
    }
    delete(req, res) {
        res.json({ text: 'Eliminado una materia ' + req.params.id });
    }
    update(req, res) {
        res.json({ text: 'actualizando una materia ' + req.params.id });
    }
}
exports.subjectsController = new SubjectsController();
