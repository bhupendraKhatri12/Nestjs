import {Injectable} from "@nestjs/common";
import {Dog } from "./interface/dog.interface";


@Injectable()
export class DogsService { 


    private dog  = Dog;

   public  async getdog() {
        return this.dog;
    }

}
