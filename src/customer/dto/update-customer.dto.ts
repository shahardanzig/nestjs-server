import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class UpdateCustomerDto {

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    customer_id: string;
  
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    first_name: string;
  
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    last_name: string;
  
    @IsOptional()
    @IsEmail()
    email: string;
  
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    gender: string;
  
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    country: string;
  
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    city: string;
  
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    street: string;
  
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    phone: string;
}