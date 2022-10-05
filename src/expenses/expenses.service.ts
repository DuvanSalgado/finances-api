// eslint-disable-next-line prettier/prettier
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { CreateExpenseDto } from './domain/dto/create-expense.dto';
import { IExpenseRepository } from './domain/repository/expenses.repository';
import { Expenses } from './entities/expenses.entities';

@Injectable()
export class ExpensesService implements IExpenseRepository {
  constructor(
    @InjectModel(Expenses.name) private readonly expenseModel: Model<Expenses>,
  ) {}

  async getExpenseType(type: string) {
    const expense = await this.expenseModel.find({ type: type });
    return expense;
  }

  async createExpenses(
    _createExpenseDto: CreateExpenseDto,
  ): Promise<Expenses & { _id: Types.ObjectId }> {
    const expense = await this.expenseModel.create(_createExpenseDto);
    return expense;
  }

  updateExpense() {
    return true;
  }

  deteleExpense() {
    return true;
  }
}
