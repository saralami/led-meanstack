import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

export type ClasseDocument = Classe & Document;

@Schema()
export class Classe {

 //  @Prop({_id: false,})
   //id: string;

  @Prop()
  libelle: string;

  @Prop()
  description: string;

  @Prop()
  status: string;



}

export const ClasseSchema = SchemaFactory.createForClass(Classe);
