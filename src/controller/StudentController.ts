import {Request, Response} from "express";
import studentService from "../service/StudentService";

class StudentController {
    private studentService;

    constructor() {
        this.studentService = studentService;
    }

    findAll = async (req: Request, res: Response) => {
        let listHouse = await this.studentService.getAll();
        res.json(listHouse);
    }
    add = async (req: Request, res: Response) => {
        let listHouse = await this.studentService.add(req.body);
        res.json(listHouse);
    }
    delete =async (req: Request, res: Response) => {
        await this.studentService.delete(req.params.id);
        res.json('xoá thành công');
    }
    update = async (req: Request, res: Response) => {
        let result = await this.studentService.update(req.params.id, req.body);
        res.json(result)
    }
    findByName = async (req,res)=>{
        let result = await  this.studentService.findByName(req.query.name);
        console.log(req.query.name)
        res.json(result)
    }
    findByPrice = async (req,res)=>{
        let result = await  this.studentService.findByPrice(req.query.minScore,req.query.maxScore);
        res.json(result)
    }
    orderByPrice = async (req,res)=>{
        let result = await  this.studentService.orderByPrice();
        res.json(result)
    }
}
export default new StudentController();




