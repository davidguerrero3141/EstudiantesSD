import {Request, Response } from 'express';
import pool from '../database'

class InscriptionController {
    
    public list(req: Request, res: Response) {
     const inscripciones =  pool.query('select * from inscripcion_materias', (err, results, fields) => {
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
                result: 'No se encontró ningun registro que coincida con los parametros dados'
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
                    result: 'No se encontró ningun registro que coincida con los parametros dados'
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
                    message: 'Se realizó la inscripcion de materia'
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
                    message: 'Se actualizó la inscripción de materia ' + req.params.idm
                });
            }
        });
        
    }

    public patch(req: Request, res: Response) {
       
        pool.query('UPDATE inscripcion_materias set estado_inscripción = ? WHERE id_materia = ? AND id_estudiante = ?', [req.body.estado_inscripción, req.params.idm, req.params.ide], (err, results, fields) => {
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
                    message: 'Se cambío el estado de la inscripción'
                });
            }
        });
        
    }
} 

export const inscriptionController = new InscriptionController();