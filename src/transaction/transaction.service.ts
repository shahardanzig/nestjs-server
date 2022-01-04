import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { Transaction, TransactionDocument } from './schema/transaction.schema';
import { revisedData } from '../assets/data';
import { DisplayTransaction } from './interface/display-transaction.interface';

@Injectable()
export class TransactionService {

    constructor(
        @InjectModel(Transaction.name)
        private transactionModel: Model<TransactionDocument>
    ) {
        // this.insertMany(revisedData);
     }

    async getAllTransactions(): Promise<DisplayTransaction[]> {
        const transactions = await this.transactionModel.find().populate('customer_id', 'first_name last_name email').exec();
        return transactions.map(transaction => ({
            customer_id: (transaction.customer_id as any)._id.toString(),
            customer_name: `${transaction.customer_id.first_name} ${transaction.customer_id.last_name}`,
            customer_email: transaction.customer_id.email,
            cerdit_card_number: transaction.cerdit_card_number,
            cerdit_card_type: transaction.cerdit_card_type,
            currency: transaction.currency,
            total_price: transaction.total_price
        }))
    }

    async create(createTransactionDto: CreateTransactionDto): Promise<Transaction> {
        const createdTransaction = new this.transactionModel({
            _id: createTransactionDto.customer_id,
            ...createTransactionDto
        });
        return createdTransaction.save();
    }

    async delete(transactionId: ObjectId): Promise<Transaction> {
        return await this.transactionModel.findOneAndDelete({ _id: transactionId }).exec();
    }

    async update(transactionId: ObjectId, updateTransactionDto: UpdateTransactionDto): Promise<Transaction> {
        return await this.transactionModel.findOneAndUpdate({ _id: transactionId }, { $set: updateTransactionDto }, { new: true }).exec();
    }

    async insertMany(transactions: Transaction[]): Promise<any> {
        return await this.transactionModel.insertMany(transactions);
    }
}