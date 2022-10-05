import { IsNumber, IsString } from 'class-validator';

export class CreateExpenseDto {
  readonly date: Date;

  @IsString()
  readonly description: string;

  @IsNumber()
  readonly value: number;
}
