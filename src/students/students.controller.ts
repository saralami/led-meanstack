import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StudentsService } from './students.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

@Controller('students')
export class StudentsController {
  constructor(private readonly StudentsService: StudentsService) {}

  @Post()
  async createStudent(@Body() createStudentDto: CreateStudentDto) {

       const newStudent = await this.StudentsService.create(createStudentDto);
       return newStudent;
   }

  @Get()
  findAll() {
    return this.StudentsService.findAll();
  }


  @Get(':id')
     findOne(@Param('id') id: string) {
     return this.StudentsService.findOne(id);
   }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStudentDto: UpdateStudentDto) {
    return this.StudentsService.update(id, updateStudentDto);
  }

  @Delete(':id')
     remove(@Param('id') id: string) {
     return this.StudentsService.remove(id);
   }
}
