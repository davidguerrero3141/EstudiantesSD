import {Request, Response } from 'express';
import pool from '../database'

class InscriptionController {
    
    public list(req: Request, res: Response) {
     const inscripciones =  pool.query('select * from inscripcion_materias', (err, results, fields) => {
        res.json(results);
        console.log(err);
        if (err) {
            res.status(400).json({
                status: 'error 400',
                message: err.message
            });
            return;
        } else if(!results){
            res.status(204).json({
                status: '204',
                result: 'No se encontrĂ³ ningun registro que coincida con los parametros dados'
            });
        }else {
            res.status(200).json({
                status: '200',
                result: results
            });
        }
      });
    }

    public getId(req: Request, res: Response){
        const inscripciones =  pool.query('select * from inscripcion_materias where id_materia = ? and id_estudiante = ?',[req.params.idm, req.params.ide], 
        (err, results, fields) => {
            console.log(err);
            if (err) {
                res.status(400).json({
                    status: 'error 400',
                    message: err.message
                });
                return;
            } else if(!results){
                res.status(204).json({
                    status: '204',
                    result: 'No se encontrĂ³ ningun registro que coincida con los parametros dados'
                });
            }else {
                res.status(200).json({
                    status: '200',
                    result: results
                });
            }
          });
    }

    public create(req: Request, res: Response) {
        pool.query('INSERT INTO inscripcion_materias set ?', [req.body], (err, results, fields) => {
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
                    message: 'Se realizĂ³ la inscripcion de materia'
                });
            }
          });
        
    }

    public delete(req: Request, res: Response) {
        res.json({text: 'Eliminado una materia ' + req.params.idm});
    }

    public update(req: Request, res: Response) {
        pool.query('UPDATE inscripcion_materias set ? WHERE id_materia = ? AND id_estudiante = ?', [req.body, req.params.idm, req.params.ide], (err, results, fields) => {
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
                    message: 'Se actualizĂ³ la inscripciĂ³n de materia ' + req.params.idm
                });
            }
        });
        
    }

    public patch(req: Request, res: Response) {
       
        pool.query('UPDATE inscripcion_materias set estado_inscripciĂ³n = ? WHERE id_materia = ? AND id_estudiante = ?', [req.body.estado_inscripciĂ³n, req.params.idm, req.params.ide], (err, results, fields) => {
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
                    message: 'Se cambĂ­o el estado de la inscripciĂ³n'
                });
            }
        });
        
    }
} 

export const inscriptionController = new InscriptionController();