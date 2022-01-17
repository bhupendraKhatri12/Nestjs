import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";



@Entity("giraffe")
class GiraffeEntity {
    @PrimaryGeneratedColumn()
   public id:number;

   @Column()
   public name:String;
  

   @Column()
   public height:number;

   @Column()
   public iscute:boolean;

}

export default GiraffeEntity;