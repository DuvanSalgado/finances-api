import { Module } from '@nestjs/common';
import { ExpenseProvider } from './domain/provide/expense.provide';
import { ExpensesController } from './expenses.controller';

@Module({
  controllers: [ExpensesController],
  providers: [ExpenseProvider],
})
export class ExpensesModule {}
