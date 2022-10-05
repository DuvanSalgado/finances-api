// eslint-disable-next-line prettier/prettier
import { Body, Controller, Delete, Get, Inject, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { Put } from '@nestjs/common/decorators';
import { ApiTags } from '@nestjs/swagger';
import { CreateExpenseDto } from './domain/dto/create-expense.dto';
import { IExpenseRepository } from './domain/repository/expenses.repository';
@ApiTags('Expenses')
@Controller('expenses')
export class ExpensesController {
  constructor(
    @Inject('expenseRepository')
    private readonly expenseService: IExpenseRepository,
  ) {}

  @Get(':type')
  getExpenseType(@Param('type') type: string) {
    return this.expenseService.getExpenseType(type);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createExpenses(@Body() createExpenseDto: CreateExpenseDto) {
    return this.expenseService.createExpenses(createExpenseDto);
  }

  @Put(':id')
  updateExpense(@Param('id') id: string, @Body() expenses: any) {
    return {
      id,
      expenses,
    };
  }

  @Delete(':id')
  deteleExpense(@Param() id: string) {
    return id;
  }
}
