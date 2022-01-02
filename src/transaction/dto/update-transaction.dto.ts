import { Type } from "class-transformer";
import { IsNotEmpty, IsNumber, IsNumberString, IsOptional, IsString } from "class-validator";

export class UpdateTransactionDto {
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    customer_id: string;

    @IsOptional()
    @Type(() => Number)
    @IsNumber({ maxDecimalPlaces: 2 })
    total_price: number;

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    currency: string;

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    cerdit_card_type: string;

    @IsOptional()
    @Type(() => Number)
    @IsNumber({ maxDecimalPlaces: 2 })
    cerdit_card_number: number;
}