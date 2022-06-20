import {Request, Response } from 'express';

class SubjectsController {

    index(req: Request, res: Response) {
        res.send('materias')
    }
} 

export const subjectsController = new SubjectsController();