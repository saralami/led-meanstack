import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppService } from './app.service';
import { ClassesModule } from './classes/classes.module';
import { ClassesController } from './classes/classes.controller';
import { ClassesService } from './classes/classes.service';
import { StudentsModule } from './students/students.module';
import { ClasseSchema } from './classes/entities/class.entity';
import { StudentSchema } from './students/entities/student.entity';

@Module({
  imports: [
   ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.DB_URL),
    ClassesModule,
    MongooseModule.forFeature([
      { name: 'Classe', schema: ClasseSchema },
      { name: 'Student', schema: StudentSchema },
    ]),
    StudentsModule],
   controllers: [AppController, ClassesController],
   providers: [AppService, ClassesService],
})
export class AppModule {}








