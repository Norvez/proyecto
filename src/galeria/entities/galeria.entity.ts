import { Company } from "src/company/entities/company.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity('galerias')
export class Galeria {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    url: string;
    
    @ManyToOne(() => Company, company => company.galeria)
    company: Company;
}