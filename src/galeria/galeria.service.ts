import { Injectable } from '@nestjs/common';
import { CreateGaleriaDto } from './dto/create-galeria.dto';
import { UpdateGaleriaDto } from './dto/update-galeria.dto';
import { Galeria } from './entities/galeria.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class GaleriaService {

 constructor(
    @InjectRepository(Galeria)
    private galeriaRepository: Repository<Galeria>
    ){}

    
  findAll() {
    return this.galeriaRepository.find();
  }

  findOne(id: number) {
    return this.galeriaRepository.findOneBy({id});
  }
  
  create(createGaleriaDto: CreateGaleriaDto) {
    const addedGaleria = this.galeriaRepository.create(createGaleriaDto);
    this.galeriaRepository.save(addedGaleria);
    return addedGaleria;
  }

  async update(id: number, updateGaleriaDto: UpdateGaleriaDto) {
    const updatedGaleria = await this.galeriaRepository.update({id},updateGaleriaDto);
    return updatedGaleria;
  }

  remove(id: number) {
    return this.galeriaRepository.delete(id);
  }
}
