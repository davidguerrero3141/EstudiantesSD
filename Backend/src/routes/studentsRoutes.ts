import {Router} from 'express';

class StudentsRoutes{
    
    public router: Router = Router();
    
    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', (req, res) => res.send('Estudiantes'));
    }
}

const studentsRoutes = new StudentsRoutes();
export default studentsRoutes.router;