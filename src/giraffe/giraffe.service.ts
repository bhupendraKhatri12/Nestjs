import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import CreateGiraffe from './creategiraffe';
import GiraffeEntity from './giraffe.entity';
import {UpdateGiraffe} from './updategiraffe';
import { threadId } from 'worker_threads';
import { throwError } from 'rxjs';


@Injectable()
export class GiraffeService {

    constructor(@InjectRepository(GiraffeEntity) private girafferepo: Repository<GiraffeEntity>) { }


    //findall
    getAllGiraffee() {
        return this.girafferepo.find();
    }


    //find by all
    async getgiraffeebyid(id: number) {
        const giraffe = await this.girafferepo.findOne(id);
        if (giraffe) {
           
            return giraffe;
        }
        throw new HttpException("Giraffe not Found", HttpStatus.NOT_FOUND);
    }



//create 
async createGiraffe(giraffe:CreateGiraffe)
{

    const newgiraffe = await this.girafferepo.create(giraffe);
    await this.girafferepo.save(newgiraffe);

    return newgiraffe;
}


//Update 
async update(id:number,post:UpdateGiraffe)
{
    await this.girafferepo.update(id,post);
    const updatedgiraffee = await this.girafferepo.findOne(id);
    if(updatedgiraffee)
    {
        return updatedgiraffee;
    }

    throw  new  HttpException('Giraffen found', HttpStatus.NOT_FOUND);
}


//delete

async declete(id:number)
{
    const deletedgiraffe   = await  this.girafferepo.delete(id);
    if(!deletedgiraffe){
        throw new HttpException("Giraffe not found", HttpStatus.NOT_FOUND);
    }
}




}
