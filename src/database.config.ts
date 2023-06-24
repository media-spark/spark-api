import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Demo } from './demo.entity';

const config: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'lucky.db.elephantsql.com',
  username: 'cbivixig',
  password: 'EZL1onFeA9_-p2mN4NYslkofdYpDtS53',
  database: 'cbivixig',
  entities: [Demo],
  synchronize: false,
};

export default config;
