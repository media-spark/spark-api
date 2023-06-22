import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CompanyDocument = Company & Document;

@Schema()
export class Company {
  @Prop()
  name: string;

  @Prop()
  permalink: string;

  // Ajoutez d'autres propriétés en fonction de votre schéma de données

  @Prop()
  number_of_employees: number;

  @Prop()
  founded_year: number;

  // etc...
}

export const CompanySchema = SchemaFactory.createForClass(Company);
