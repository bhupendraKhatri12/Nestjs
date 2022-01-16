import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Todo from '../database/Entity/Todo.entity';
import { TodosService } from '../todo/todo.service';
import { TodosController } from '../app.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Todo])],
  controllers: [TodosController],
  providers: [TodosService],
})
export class TodoModule {}