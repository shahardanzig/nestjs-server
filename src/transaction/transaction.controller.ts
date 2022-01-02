import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { Transaction } from './schema/transaction.schema';
import { TransactionService } from './transaction.service';

@Controller('transaction')
export class TransactionController {
    constructor(private transactionService: TransactionService) { }

    @Get('/all')
    async getAll(): Promise<Transaction[]> {
        return await this.transactionService.getAllTransactions();
    }

    @Post('/create')
    async create(@Body() createTransactionDto: CreateTransactionDto): Promise<Transaction> {
        return await this.transactionService.create(createTransactionDto);
    }

    @Delete('/:transactionId')
    async delete(@Param('transactionId') transactionId: ObjectId): Promise<Transaction> {
        return await this.transactionService.delete(transactionId);
    }

    @Post('/update/:transactionId')
    async update(
        @Param('transactionId') transactionId: ObjectId,
        @Body() updateTransactionDto: UpdateTransactionDto
    ): Promise<Transaction> {
        return await this.transactionService.update(transactionId, updateTransactionDto);
    }
}
