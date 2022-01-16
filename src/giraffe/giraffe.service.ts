import { Injectable } from '@nestjs/common';
import { giraffe } from "./giraffeinterface.interface"
@Injectable()
export class GiraffeService {

    giraffe: giraffe = {
        id: 45,
        name: "Cutey"
    }

    async getname() {
        return this.giraffe.name;
    }
}
