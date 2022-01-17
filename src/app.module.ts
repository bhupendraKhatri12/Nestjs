import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { GiraffeService } from './giraffe/giraffe.service';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { TodosService } from './todo/todo.service';
import { TodoModule } from './todo/todo.module';
import { ModuleService } from './controller/module/module.service';
import { GiraffeModule } from './giraffe/giraffe.module';
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
  TodoModule,DatabaseModule, GiraffeModule],
  controllers: [],
  providers: [AppService, ModuleService],
})
export class AppModule { }
