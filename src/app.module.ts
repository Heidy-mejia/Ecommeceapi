import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PantsModule } from './pants/pants.module';
import { ShirtsModule } from './shirts/shirts.module';
import { ShoesModule } from './shoes/shoes.module';
import { DressesModule } from './dresses/dresses.module';
import { SkirtsModule } from './skirts/skirts.module';




@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '12345678',
      database: 'ecomerce-apipru',
      entities: [],
      synchronize: true,
      autoLoadEntities: true,
    }),
    PantsModule,
    ShirtsModule,
    ShoesModule,
    DressesModule,
    SkirtsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
