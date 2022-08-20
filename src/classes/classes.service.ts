import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { CreateClassDto } from './dto/create-class.dto';
import { UpdateClassDto } from './dto/update-class.dto';
import { Classe, ClasseDocument } from './entities/class.entity';

@Injectable()
export class ClassesService {

constructor(@InjectModel(Classe.name) private classeModel: Model<ClasseDocument>) {}

    async createClasse(createClassDto: CreateClassDto): Promise<Classe> {
       return new this.classeModel(createClassDto).save();
    }

  findAll() {
    return this.classeModel.find();

  }

  findOne(_id: string) {
    return this.classeModel.findOne({ _id });

  }

  update(_id: string, updateClassDto: UpdateClassDto) {
    return this.classeModel.updateOne( { _id }, { $set: { ...updateClassDto } } );

  }

  remove(_id: string) {
    return this.classeModel.deleteOne( { _id });
  }
}


