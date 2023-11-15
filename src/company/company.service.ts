import { Injectable } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Company } from './entities/company.entity';

@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(Company)
    private companyRepository: Repository<Company>
    ){}

    
  findAll() {
    return this.companyRepository.find({relations:['galerias', 'servicios']});
  }

  findOne(id: number) {
    return this.companyRepository.findOneBy({id});
  }
  
  create(createCompanyDto: CreateCompanyDto) {
    const addedCompany = this.companyRepository.create(createCompanyDto);
    this.companyRepository.save(addedCompany);
    return addedCompany;
  }

  async update(id: number, updateCompanyDto: UpdateCompanyDto) {
    const updatedCompany = await this.companyRepository.update({id},updateCompanyDto);
    return updatedCompany;
  }

  remove(id: number) {
    return this.companyRepository.delete(id);
  }
}
