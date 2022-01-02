import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId, Schema } from 'mongoose';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { Transaction, TransactionDocument } from './schema/transaction.schema';

@Injectable()
export class TransactionService {

    constructor(
        @InjectModel(Transaction.name)
        private transactionModel: Model<TransactionDocument>
    ) { }

    async getAllTransactions(): Promise<Transaction[]> {
        return await this.transactionModel.find().exec();
    }

    async create(createTransactionDto: CreateTransactionDto): Promise<Transaction> {
        const createdTransaction = new this.transactionModel(createTransactionDto);
        return createdTransaction.save();
    }

    async delete(transactionId: ObjectId): Promise<Transaction> {
        return await this.transactionModel.findOneAndDelete({ _id: transactionId }).exec();
    }

    async update(transactionId: ObjectId, updateTransactionDto: UpdateTransactionDto): Promise<Transaction> {
        return await this.transactionModel.findOneAndUpdate({ _id: transactionId }, { $set: updateTransactionDto }, { new: true }).exec();
    }
}
