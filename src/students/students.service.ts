import { Injectable, Param } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

import { Model } from 'mongoose';

import { InjectModel } from '@nestjs/mongoose';

import { Student, StudentDocument } from './entities/student.entity';


@Injectable()
export class StudentsService {

  constructor(@InjectModel(Student.name) private studentModel: Model<StudentDocument>) {}

  create(createStudentDto: CreateStudentDto): Promise<Student>  {
    return new this.studentModel(createStudentDto).save();
  }

  findAll() {
    return this.studentModel.find();
 }



findOne(_id: string) {
  return this.studentModel.findOne({ _id });

}
  update(_id: string, updateStudentDto: UpdateStudentDto) {
    return this.studentModel.updateOne( { _id }, { $set: { ...updateStudentDto } } );

  }

  remove(_id: string) {
    return this.studentModel.deleteOne( { _id });
  }
}
