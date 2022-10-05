import { ApiProperty } from '@nestjs/swagger';
// eslint-disable-next-line prettier/prettier
import { IsDateString, IsNumberString, IsString } from 'class-validator';
export class CreateExpenseDto {
  @ApiProperty()
  @IsDateString()
  readonly date: Date;

  @ApiProperty()
  @IsString()
  readonly description: string;

  @IsNumberString()
  @ApiProperty()
  readonly value: number;

  @IsNumberString()
  @ApiProperty()
  readonly mont: number;

  @IsString()
  @ApiProperty()
  readonly type: string;
}
