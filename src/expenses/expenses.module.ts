import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose/dist';
import { ExpenseProvider } from './domain/provide/expense.provide';
import { Expenses, ExpenseSchema } from './entities/expenses.entities';
import { ExpensesController } from './expenses.controller';

@Module({
  controllers: [ExpensesController],
  providers: [ExpenseProvider],
  imports: [
    MongooseModule.forFeature([
      {
        name: Expenses.name,
        schema: ExpenseSchema,
      },
    ]),
  ],
})
export class ExpensesModule {}
