import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ClassesService } from './classes.service';
import { ClassesController } from './classes.controller';
import { Classe, ClasseSchema } from './entities/class.entity';


@Module({
 imports: [MongooseModule.forFeature([{ name: Classe.name, schema: ClasseSchema }])],

  controllers: [ClassesController],
  providers: [ClassesService]
})
export class ClassesModule {}
