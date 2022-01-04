import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Customer, CustomerDocument } from './schema/customer.schema';
import { revisedData } from '../assets/data';

@Injectable()
export class CustomerService {

    constructor(
        @InjectModel(Customer.name)
        private customerModel: Model<CustomerDocument>
    ) {
        // const customers = revisedData.map(x => ({
        //     _id: x.customer_id,
        //     ...x
        // }));
        // this.insertMany(customers);
    }

    async getAllCustomers(): Promise<Customer[]> {
        return await this.customerModel.find().exec();
    }

    async create(createCustomerDto: CreateCustomerDto): Promise<Customer> {
        const createdCustomer = new this.customerModel(createCustomerDto);
        return createdCustomer.save();
    }

    async delete(customerId: ObjectId): Promise<Customer> {
        return await this.customerModel.findOneAndDelete({ _id: customerId }).exec();
    }

    async update(customerId: ObjectId, updateCustomerDto: UpdateCustomerDto): Promise<Customer> {
        return await this.customerModel.findOneAndUpdate({ _id: customerId }, { $set: updateCustomerDto }, { new: true }).exec();
    }

    async insertMany(customers: Customer[]): Promise<any> {
        return await this.customerModel.insertMany(customers);
    }
}
