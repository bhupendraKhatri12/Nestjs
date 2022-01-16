import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { DogsService } from './dogs/dogs.service';
import { GiraffeService } from './giraffe/giraffe.service';
import { ConfigModule } from '@nestjs/config';
import { DogsModule } from './dogs/dogs.module';
import { DatabaseModule } from './database/database.module';
import { TodosService } from './todo/todo.service';
import { TodoModule } from './todo/todo.module';

import * as Joi from 'joi';


@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '../.env',
      validationSchema: Joi.object({
        POSTGRES_HOST: Joi.string().required(),
        POSTGRES_PORT: Joi.number().required(),
        POSTGRES_USER: Joi.string().required(),
        POSTGRES_PASSWORD: Joi.string().required(),
        POSTGRES_DB: Joi.string().required(),
        PORT: Joi.number(),
      }),
    }),
  TodoModule,DatabaseModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule { }
