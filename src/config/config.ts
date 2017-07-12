import {IConfig} from './config.interface';

export const config: IConfig = {
  sql: {
    autoSchemaSync: true,
    autoMigrationsRun: true,
    database: 'database',
    host: 'localhost',
    password: 'development',
    port: 5432,
    type: 'postgres',
    username: 'user'
  }
};
