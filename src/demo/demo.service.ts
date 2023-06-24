import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Demo } from 'src/demo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DemoService {
    constructor(
        @InjectRepository(Demo)
        private demoRepository: Repository<Demo>
    ){}
    
    async findAll(): Promise<Demo[]>{
        return this.demoRepository.find();
    }
}
