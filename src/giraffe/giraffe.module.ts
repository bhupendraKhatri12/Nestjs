import { Module } from '@nestjs/common';
import { Giraffe } from './giraffe.controller';
import { GiraffeService } from './giraffe.service';
import GiraffeEntity from './giraffe.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
    imports: [TypeOrmModule.forFeature([
        GiraffeEntity])],
    controllers: [Giraffe]
    , providers: [GiraffeService],
    exports: [GiraffeService]
})
export class GiraffeModule { }
