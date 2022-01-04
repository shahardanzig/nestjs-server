import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Customer } from './schema/customer.schema';

@Controller('customer')
export class CustomerController {
    constructor(private customerService: CustomerService) { }

    @Get('/all')
    async getAll(): Promise<Customer[]> {
        return await this.customerService.getAllCustomers();
    }

    @Post('/create')
    async create(@Body() createCustomerDto: CreateCustomerDto): Promise<Customer> {
        return await this.customerService.create(createCustomerDto);
    }

    @Delete('/:customerId')
    async delete(@Param('customerId') customerId: ObjectId): Promise<Customer> {
        return await this.customerService.delete(customerId);
    }

    @Post('/update/:customerId')
    async update(
        @Param('customerId') customerId: ObjectId,
        @Body() updateCustomerDto: UpdateCustomerDto
    ): Promise<Customer> {
        return await this.customerService.update(customerId, updateCustomerDto);
    }
}