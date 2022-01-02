import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TransactionDocument = Transaction & Document;

@Schema()
export class Transaction {
  @Prop({ required: true })
  customer_id: string;

  @Prop({ required: true })
  total_price: number;

  @Prop({ required: true })
  currency: string;

  @Prop({ required: true })
  cerdit_card_type: string;

  @Prop({ required: true })
  cerdit_card_number: number;
}

export const TransactionSchema = SchemaFactory.createForClass(Transaction);