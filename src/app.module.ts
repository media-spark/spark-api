import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProofOfConceptModule } from './proof-of-concept/proof-of-concept.module';
import { MongooseModule } from '@nestjs/mongoose';
import * as dotenv from 'dotenv';

dotenv.config();

@Module({
  imports: [
    MongooseModule.forRoot(`${process.env.MONGODB_URI}`),
    ProofOfConceptModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
