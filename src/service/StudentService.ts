import {Student} from "../entity/Student";
import {AppDataSource} from "../data-source";
import {Like} from "typeorm"
import {Between} from "typeorm"

import {Request, Response} from "express";

class StudentService {
    private studentRepository;

    constructor() {
        this.studentRepository = AppDataSource.getRepository(Student);
    }

    getAll = async () => {
        return await this.studentRepository.find(
            {
                relations: {
                    class: true,
                },
            }
        );
    }
    add = async (house) => {
        return await this.studentRepository.save(house)

    }
    delete = async (id) => {
        return await this.studentRepository.delete(id)
    }
    update = async (id, data) => {
        return await this.studentRepository.update(id, data)
    }
    findByName = async (name) => {
        return await this.studentRepository.find({
            relations: {
                class: true,
            },
            where:
                {
                    name: Like(`%${name}%`)
                }
        })

    }
    findByPrice = async (minScore, maxScore) => {
        return await this.studentRepository.find({
            relations: {
                class: true,
            },
            where:
                {
                    score: Between(minScore, maxScore)
                }
        })
    }
    orderByPrice = async () => {
        return this.studentRepository.find({
            order: {price: "ASC"}
        });
    }
}

export default new StudentService()