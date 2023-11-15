import { Module } from '@nestjs/common';
import { ServicioService } from './servicios.service';
import { ServiciosController } from './servicios.controller';
import { Servicio } from './entities/servicio.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports:[TypeOrmModule.forFeature([Servicio])],
  controllers: [ServiciosController],
  providers: [ServicioService],
})
export class ServiciosModule {}
