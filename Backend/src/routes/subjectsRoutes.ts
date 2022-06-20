import {Router} from 'express';

class SubjectsRoutes{
    
    public router: Router = Router();
    
    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', (req, res) => res.send('Materias'));
    }
}

const subjectsRoutes = new SubjectsRoutes();
export default subjectsRoutes.router