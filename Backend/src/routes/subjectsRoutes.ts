import {Router} from 'express';
import {subjectsController} from '../controllers/subjectsController'

class SubjectsRoutes{
    
    public router: Router = Router();
    
    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/',subjectsController.index);
    }
}

const subjectsRoutes = new SubjectsRoutes();
export default subjectsRoutes.router