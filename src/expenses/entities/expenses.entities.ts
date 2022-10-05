import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Expenses extends Document {
  @Prop({ index: true })
  date: Date;

  @Prop({ index: true })
  description: string;

  @Prop({ index: true })
  mont: number;

  @Prop({ index: true })
  type: string;

  value: number;
}

export const ExpenseSchema = SchemaFactory.createForClass(Expenses);
