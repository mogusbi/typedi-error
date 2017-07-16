import * as http from 'http';
import 'reflect-metadata';
import {Container} from 'typedi';
import {createConnection, useContainer} from 'typeorm';
import {config} from '../config';
import {BaseEntity, Question, User} from '../entities';
import {app} from './app';

useContainer(Container);

createConnection({
  ...config.sql,
  entities: [
    BaseEntity,
    Question,
    User
  ]
}).then(
  () => http
    .createServer(app)
    .listen(8082, () => console.log('Server started on port 8082'))
).catch(
  (err: Error) => console.error(err.message)
);
