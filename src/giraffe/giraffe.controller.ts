import {Get, Controller, Post , Put ,Delete } from "@nestjs/common";



@Controller("giraffe")
export class  Giraffe {


    //get the giraffe
@Get()
getGiraffe():any{
    return " all giraffe";
}

@Get(":id")
getoneGiraffe():any{
    return "one giraffe";
}

//Post the giraffe
@Post()
postGiraffe():any {
    return "Post giraffe"
}


// Update the Giraffe
@Put()
updateGiraffe():any
{
    return " Update giraffe";
}

//Delete the Giraffe
@Delete()
deleteGiraffe():any {
return " Delete Giraffe ";
}



}

