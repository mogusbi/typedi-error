import {urlencoded} from 'body-parser';
import * as express from 'express';
import * as helmet from 'helmet';
import * as morgan from 'morgan';
import {useContainer, useExpressServer} from 'routing-controllers';
import {Container} from 'typedi';
import {QuestionController, UserController} from '../controllers';

useContainer(Container);

const config: express.Application = express();

config
  .use(morgan('dev'))
  .use(helmet())
  .use(urlencoded({
    extended: false
  }));

const app: express.Application = useExpressServer(config, {
  controllers: [
    QuestionController,
    UserController
  ],
  routePrefix: '/api/1.0'
});

export {app};
