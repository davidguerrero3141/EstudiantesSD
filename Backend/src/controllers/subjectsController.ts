import {Request, Response } from 'express';
import pool from '../database'

class SubjectsController {
    
    public list(req: Request, res: Response) {
     const materias =  pool.query('select * from materias', (err, results, fields) => {
        res.json(results);
        console.log(err);
      });
    }

    public getId(req: Request, res: Response){
        const materias =  pool.query('select * from materias where id_materia = ?',req.params.id, 
        (err, results, fields) => {
            res.json(results);
            console.log(err);
          });
    }

    public create(req: Request, res: Response) {
        pool.query('INSERT INTO materias set ?', [req.body], (err, results, fields) => {
            console.log(err);
          });
        res.json({ text: 'Se guardo una materia' });
    }

    public delete(req: Request, res: Response) {
        res.json({text: 'Eliminado una materia ' + req.params.id});
    }

    public update(req: Request, res: Response) {
        const {id} = req.params;
        pool.query('UPDATE materias set ? WHERE id_materia = ?', [req.body, id], (err, results, fields) => {
            console.log(err);
        });
        res.json({text: 'actualizando una materia '  + req.params.id});
    }

    public patch(req: Request, res: Response) {
        const {id} = req.params;
        pool.query('UPDATE materias set estado = ? WHERE id_materia = ?', [req.body.estado, id], (err, results, fields) => {
            console.log(err);
        });
        res.json({text: 'actualizando cambiado el estado de una materia '  + req.params.id});
    }
} 

export const subjectsController = new SubjectsController();