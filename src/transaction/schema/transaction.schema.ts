import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as moongoseSchema} from 'mongoose';
import { Customer } from '../../customer/schema/customer.schema';
import { CardType } from '../enum/card-type.enum';

export type TransactionDocument = Transaction & Document;

@Schema()
export class Transaction {
  @Prop({ type: moongoseSchema.Types.ObjectId, ref: 'Customer' })
  customer_id: Customer;

  @Prop({ required: true })
  total_price: number;

  @Prop({ required: true })
  currency: string;

  @Prop({ required: true, enum: CardType })
  cerdit_card_type: CardType;

  @Prop({ required: true })
  cerdit_card_number: number;
}

export const TransactionSchema = SchemaFactory.createForClass(Transaction);