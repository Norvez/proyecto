import { Galeria } from "src/galeria/entities/galeria.entity";
import { Servicio } from "src/servicios/entities/servicio.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity('companies')
export class Company {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    url: string;
    
    @OneToMany(() => Galeria, galeria => galeria.company)
    galeria: Galeria;

    @OneToMany(() => Servicio, servicio => servicio.company)
    servicio: Servicio;
}