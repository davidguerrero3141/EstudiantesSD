import {Request, Response } from 'express';

class StudentsController {

    index(req: Request, res: Response) {
        res.send('Estudiantes')
    }
} 

export const studentsController = new StudentsController();