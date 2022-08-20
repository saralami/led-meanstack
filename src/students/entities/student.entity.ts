import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';


export type StudentDocument = Student & Document;

@Schema()
export class Student {

  @Prop()
  firstname: string;

  @Prop()
  lastname: string;

  @Prop()
  classe: string;

  @Prop()
  status: string;



}

export const StudentSchema = SchemaFactory.createForClass(Student);
