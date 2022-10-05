// eslint-disable-next-line prettier/prettier
import { Body, Controller, Delete, Get, Inject, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { Put } from '@nestjs/common/decorators';
import { CreateExpenseDto } from './domain/dto/create-expense.dto';
import { IExpenseRepository } from './domain/repository/expenses.repository';

@Controller('expenses')
export class ExpensesController {
  constructor(
    @Inject('expenseRepository')
    private readonly expenseService: IExpenseRepository,
  ) {}

  @Get()
  getAllExpenses(): any {
    return this.expenseService.getAllExpenses();
  }

  @Post()
  @UsePipes(ValidationPipe)
  createExpenses(@Body() createExpenseDto: CreateExpenseDto) {
    return createExpenseDto;
  }

  @Put(':id')
  updateExpense(@Param() id: string, @Body() expenses: any) {
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
