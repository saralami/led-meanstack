// export class CreateClassDto {


// }


import { IsNotEmpty, IsString } from "class-validator";
export class CreateClassDto {
    @IsString()
    @IsNotEmpty()
    readonly libelle: string;
    @IsString()
    @IsNotEmpty()
    readonly description: string;
    @IsString()
    @IsNotEmpty()
    readonly status: string;
}

