import {Router} from "express";
import studentController from "../controller/StudentController";



const studentRouter = Router();
studentRouter.get('/', studentController.findAll);
studentRouter.post('/', studentController.add);
studentRouter.delete('/:id', studentController.delete);
studentRouter.put('/:id', studentController.update);
studentRouter.get('/search', studentController.findByName);
studentRouter.get('/search1', studentController.findByPrice);
studentRouter.get('/order', studentController.orderByPrice);

export default studentRouter;