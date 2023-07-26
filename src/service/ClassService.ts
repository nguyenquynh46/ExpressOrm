import {Class} from "../entity/Class";
import {AppDataSource} from "../data-source";
class ClassService{
    private classResponsive;
    constructor() {
        this.classResponsive= AppDataSource.getMetadata(Class)
    }
    getAll=async (req,res)=>{
        await this.classResponsive.find()
    }
}