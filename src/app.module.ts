import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GaleriaModule } from './galeria/galeria.module';
import { ServiciosModule } from './servicios/servicios.module';
import { CompanyModule } from './company/company.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Galeria } from './galeria/entities/galeria.entity';
import { Servicio } from './servicios/entities/servicio.entity';
import { Company } from './company/entities/company.entity';

@Module({
  imports: [GaleriaModule, ServiciosModule, CompanyModule,
  TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password:'admi',
    database:'manytomany',
    entities: [Galeria, Servicio, Company,],
    autoLoadEntities: true,
    synchronize: true
  }),
],
controllers: [AppController],
providers: [AppService],
})
export class AppModule {}
