import { Controller, Get } from '@nestjs/common';
import { DemoService } from './demo.service';
import { Demo } from 'src/demo.entity';

@Controller('demo')
export class DemoController {
  constructor(private readonly demoService: DemoService) {}

  
  @Get()
  async findAll(): Promise<Demo[]> {
    return this.demoService.findAll();
  }
}