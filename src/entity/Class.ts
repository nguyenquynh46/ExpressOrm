import {Column, Entity, PrimaryGeneratedColumn, ManyToOne} from "typeorm";

@Entity()
export class Class {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({type: 'varchar', length: 255})
    name: string;
    @Column({type: 'varchar', length: 255})
    nameTeacher: string;
    @Column()
    amount: number

}