import { Request, Response } from 'express';

import pool from '../database'

class StudentsController {

    public list(req: Request, res: Response) {
        const estudiantes = pool.query('select * from estudiantes', function (err, results, fields) {
            if (err) {
                res.status(400).json({
                    status: 'error 400',
                    message: err.message
                });
            } else if (!results) {
                res.status(204).json({
                    status: '204',
                    result: 'No se encontró ningun registro que coincida con los parametros dados'
                });
            } else {
                res.status(200).json({
                    status: '200',
                    result: results
                });
            }
        });

    }

    public getId(req: Request, res: Response) {
        const estudiantes = pool.query('select * from estudiantes where id_estudiante = ?', req.params.id, function (err, results, fields) {
            if (err) {
                res.status(400).json({
                    status: 'error 400',
                    message: err.message
                });
            } else if (!results) {
                res.status(204).json({
                    status: '204',
                    result: 'No se encontró ningun registro que coincida con los parametros dados'
                });
            } else {
                res.status(200).json({
                    status: '200',
                    result: results
                });
            }
        });
    }

    public getByCode(req: Request, res: Response) {
        const estudiantes = pool.query('select * from estudiantes where codigo = ?', req.params.id, function (err, results, fields) {
            if (err) {
                res.status(400).json({
                    status: 'error 400',
                    message: err.message
                });
            } else if (!results) {
                res.status(204).json({
                    status: '204',
                    result: 'No se encontró ningun registro que coincida con los parametros dados'
                });
            } else {
                res.status(200).json({
                    status: '200',
                    result: results
                });
            }
        });
    }

    public getDocument(req: Request, res: Response) {
        const estudiantes = pool.query('select * from estudiantes where numero_documento = ?', req.params.id, function (err, results, fields) {
            if (err) {
                res.status(400).json({
                    status: 'error 400',
                    message: err.message
                });
            } else if (!results) {
                res.status(204).json({
                    status: '204',
                    result: 'No se encontró ningun registro que coincida con los parametros dados'
                });
            } else {
                res.status(200).json({
                    status: '200',
                    result: results
                });
            }
        });
    }

    public async create(req: Request, res: Response) {
        pool.query('INSERT INTO estudiantes set ?', [req.body], function (err, results, fields) {
            if (err) {
            } else if (!results) {
                res.status(400).json({
                    status: 'error 400',
                    message: err
                });
            } else {
                res.status(200).json({
                    status: '200',
                    message: 'Se agrego un nuevo estudiante'
                });
            }

        });
        //await pool.execute('INSERT INTO estudiantes (numero_documento, tipo_documento, nombre, apellido, codigo) values ("' + req.body.numero_documento+'","'+req.body.tipo_documento+'","'+req.body.nombre+'","'+req.body.apellido+'","'+req.body.codigo+'");');
 
    }

    public delete(req: Request, res: Response) {
        res.json({ text: 'Eliminado un estudiante ' + req.params.id });
    }

    public updateStudent(req: Request, res: Response) {
        const { id } = req.params;
        pool.query('UPDATE estudiantes set ? WHERE id_estudiante = ?', [req.body, id], (err, results, fields) => {
            if (err) {
            } else if (!results) {
                res.status(400).json({
                    status: 'error 400',
                    message: err
                });
            } else {
                res.status(200).json({
                    status: '200',
                    message: 'Se actualizo la informacion de un estudiante'
                });
            }
        });
    }

    public setState(req: Request, res: Response) {
        const { id } = req.params;
        pool.query('UPDATE estudiantes set estado = ? WHERE id_estudiante = ?', [req.body.estado, id], (err, results, fields) => {
            if (err) {
            } else if (!results) {
                res.status(400).json({
                    status: 'error 400',
                    message: err
                });
            } else {
                res.status(200).json({
                    status: '200',
                    message: 'Se actualizo el estado de un estudiante'
                });
            }
        });
    }
}



export const studentsController = new StudentsController();