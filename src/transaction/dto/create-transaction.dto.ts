import { Type } from "class-transformer";
import { IsEnum, IsInt, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { CardType } from "../enum/card-type.enum";

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

    @IsNotEmpty()
    @IsEnum(CardType)
    cerdit_card_type: string;

    @Type(() => Number)
    @IsInt()
    cerdit_card_number: number;
}