import {Request, Response } from 'express';
import pool from '../database'

class SubjectsController {

   public list(req: Request, res: Response) {
    const materias =  pool.query('select * from materias', function(err, results, fields) {
        res.json(results);
        console.log(err);
      });
    }

    public getId(req: Request, res: Response){
        const materias =  pool.query('select * from materias where id_materia = ?',req.params.id, function(err, results, fields) {
            res.json(results);
            console.log(err);
          });
    }

    public create(req: Request, res: Response) {
        pool.query('INSERT INTO materias set ?', [req.body], function(err, results, fields) {
            console.log(err);
          });
        //await pool.execute('INSERT INTO estudiantes (numero_documento, tipo_documento, nombre, apellido, codigo) values ("' + req.body.numero_documento+'","'+req.body.tipo_documento+'","'+req.body.nombre+'","'+req.body.apellido+'","'+req.body.codigo+'");');
        res.json({ text: 'Se guardo un estudiante' });
    }

    public delete(req: Request, res: Response) {
        res.json({text: 'Eliminado una materia ' + req.params.id});
    }

    public update(req: Request, res: Response) {
        res.json({text: 'actualizando una materia '  + req.params.id});
    }
} 

export const subjectsController = new SubjectsController();