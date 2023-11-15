import { Company } from "src/company/entities/company.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('servivios')
export class Servicio {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    url: string;
    
    @ManyToOne(() => Company, company => company.servicio)
    company: Company;
}