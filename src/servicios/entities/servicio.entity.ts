import { Company } from "src/company/entities/company.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('servivios')
export class Servicio {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    Type: string;
    @Column()
    IcoUrl: string;
    @Column()
    Descripcion: string;
    
    @ManyToOne(() => Company, company => company.servicios)
    company: Company;
}