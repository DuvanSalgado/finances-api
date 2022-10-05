// eslint-disable-next-line prettier/prettier
import { Injectable } from '@nestjs/common';
import { IExpenseRepository } from './domain/repository/expenses.repository';

@Injectable()
export class ExpensesService implements IExpenseRepository {
  getAllExpenses(): any {
    return ' hola desde el servicio de expenses!!';
  }

  createExpenses() {
    return true;
  }

  updateExpense() {
    return true;
  }

  deteleExpense() {
    return true;
  }
}
