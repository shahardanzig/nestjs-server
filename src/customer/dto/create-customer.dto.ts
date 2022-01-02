import { IsNotEmpty, IsString } from "class-validator";

export class CreateCustomerDto {

    @IsString()
    @IsNotEmpty()
    customer_id: string;
  
    @IsString()
    @IsNotEmpty()
    first_name: string;
  
    @IsString()
    @IsNotEmpty()
    last_name: string;
  
    @IsString()
    @IsNotEmpty()
    email: string;
  
    @IsString()
    @IsNotEmpty()
    gender: string;
  
    @IsString()
    @IsNotEmpty()
    country: string;
  
    @IsString()
    @IsNotEmpty()
    city: string;
  
    @IsString()
    @IsNotEmpty()
    street: string;
  
    @IsString()
    @IsNotEmpty()
    phone: string;
}