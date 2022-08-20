import { Document } from 'mongoose';
export interface IClasse extends Document{
    readonly libelle: string;
    readonly description: string;
    readonly status: string;
}
