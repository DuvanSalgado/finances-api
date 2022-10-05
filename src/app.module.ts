import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ExpensesModule } from './expenses/expenses.module';
@Module({
  imports: [
    ExpensesModule,
    MongooseModule.forRoot(
      'mongodb+srv://finances-api:kXLDhLT1L1zJh1ib@finances.fnrzxkl.mongodb.net',
    ),
  ],
})
export class AppModule {}
