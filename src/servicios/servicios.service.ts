import { Injectable } from '@nestjs/common';
import { CreateServicioDto } from './dto/create-servicio.dto';
import { UpdateServicioDto } from './dto/update-servicio.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Servicio } from './entities/servicio.entity';


@Injectable()
export class ServicioService {
  constructor(
    @InjectRepository(Servicio)
    private servicioRepository: Repository<Servicio>
    ){}

    
  findAll() {
    return this.servicioRepository.find();
  }

  findOne(id: number) {
    return this.servicioRepository.findOneBy({id});
  }
  
  create(createServicioDto: CreateServicioDto) {
    const addedServicio = this.servicioRepository.create(createServicioDto);
    this.servicioRepository.save(addedServicio);
    return addedServicio;
  }

  async update(id: number, updateServicioDto: UpdateServicioDto) {
    const updatedServicio = await this.servicioRepository.update({id},updateServicioDto);
    return updatedServicio;
  }

  remove(id: number) {
    return this.servicioRepository.delete(id);
  }
}