import { Type } from "class-transformer";
import { IsInt, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateTransactionDto {
    @IsString()
    @IsNotEmpty()
    customer_id: string;

    @Type(() => Number)
    @IsNumber({ maxDecimalPlaces: 2 })
    total_price: number;

    @IsString()
    @IsNotEmpty()
    currency: string;

    @IsString()
    @IsNotEmpty()
    cerdit_card_type: string;

    @Type(() => Number)
    @IsInt()
    cerdit_card_number: number;
}