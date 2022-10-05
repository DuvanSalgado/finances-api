import { Types } from 'mongoose';
import { Expenses } from 'src/expenses/entities/expenses.entities';
import { CreateExpenseDto } from '../dto/create-expense.dto';

export interface IExpenseRepository {
  createExpenses(
    CreateExpenseDto: CreateExpenseDto,
  ): Promise<Expenses & { _id: Types.ObjectId }>;

  updateExpense(): any;
  deteleExpense(): any;

  getExpenseType(type: string): any;
}
