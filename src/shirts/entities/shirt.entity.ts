import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class shirts {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    

    @Column()
    imagen: string;
    
    @Column()
    name: string;

    

}
