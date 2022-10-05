import { Provider } from '@nestjs/common';
import { RepositoryProvider } from 'src/expenses/constants/expenses.enum';
import { ExpensesService } from 'src/expenses/expenses.service';

export const ExpenseProvider: Provider = {
  useClass: ExpensesService,
  provide: RepositoryProvider.expenseRepository,
};
