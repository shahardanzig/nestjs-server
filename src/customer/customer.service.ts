import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { Customer, CustomerDocument } from './schema/customer.schema';

@Injectable()
export class CustomerService {

    constructor(@InjectModel(Customer.name) private customerModel: Model<CustomerDocument>) {}
    
    async create(createCustomerDto: CreateCustomerDto): Promise<Customer> {
        const createdCustomer = new this.customerModel(createCustomerDto);
        return createdCustomer.save();
    }
}
