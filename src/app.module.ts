import { Demo } from './demo.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DemoService } from './demo/demo.service';
import { DemoController } from './demo/demo.controller';
import { ProofOfConceptModule } from './proof-of-concept/proof-of-concept.module';
import { MongooseModule } from '@nestjs/mongoose';
import * as dotenv from 'dotenv';
import config from './database.config';

dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    TypeOrmModule.forFeature([Demo]),
    
    MongooseModule.forRoot(`${process.env.MONGODB_URI}`),
    ProofOfConceptModule,
  ],
  controllers: [AppController, DemoController],
  providers: [AppService, DemoService],
}) 
export class AppModule {}
