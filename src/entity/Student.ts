import {Column, Entity, ManyToOne, PrimaryGeneratedColumn, RelationOptions } from "typeorm";
import {Class} from "./Class";

@Entity()
export class Student {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({type: 'varchar', length: 255})
    name: string;
    @Column()
    age: number;
    @Column()
    score: number
    @ManyToOne(() => Class, (class1) => class1.id)
    class: Class
}
