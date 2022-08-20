import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ClassesService } from './classes.service';
import { CreateClassDto } from './dto/create-class.dto';
import { UpdateClassDto } from './dto/update-class.dto';

@Controller('classes')
export class ClassesController {
  constructor(private readonly ClassesService: ClassesService) {}

  @Post()
  async createClasse(@Body() createClasseDto: CreateClassDto) {

       const newClasse = await this.ClassesService.createClasse(createClasseDto);
       return newClasse;
   }


   @Get()
  findAll() {
   return this.ClassesService.findAll();
  }

  @Get(':id')
     findOne(@Param('id') id: string) {
     return this.ClassesService.findOne(id);
   }

   @Patch(':id')
   update(@Param('id') id: string, @Body() updateClassDto: UpdateClassDto) {
     return this.ClassesService.update(id, updateClassDto);
   }

   @Delete(':id')
     remove(@Param('id') id: string) {
     return this.ClassesService.remove(id);
   }
}
