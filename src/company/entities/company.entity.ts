import { Galeria } from "src/galeria/entities/galeria.entity";
import { Servicio } from "src/servicios/entities/servicio.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity('company')
export class Company {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    Headerlogo: string;
    @Column()
    title: string;
    @Column()
    Descripcion: string;
    @Column()
    FooterCopyRightTex: string;
    @Column()
    FooterteamMenbers: string;
    @Column()
    HeaderCompanyName: string;
    
    
    @OneToMany(() => Galeria, galeria => galeria.company)
    galerias: Galeria[];

    @OneToMany(() => Servicio, servicio => servicio.company)
    servicios: Servicio[];
}