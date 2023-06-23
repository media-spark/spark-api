import { Demo } from './demo.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DemoService } from './demo/demo.service';
import { DemoController } from './demo/demo.controller';
import config from './database.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    TypeOrmModule.forFeature([Demo])
  ],
  controllers: [AppController, DemoController],
  providers: [AppService, DemoService],
})
export class AppModule {}
