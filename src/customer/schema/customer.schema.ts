import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CustomerDocument = Customer & Document;

@Schema()
export class Customer {

  @Prop({ required: true })
  customer_id: string;

  @Prop({ required: true })
  first_name: string;

  @Prop({ required: true })
  last_name: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  gender: string;

  @Prop({ required: true })
  country: string;

  @Prop({ required: true })
  city: string;

  @Prop({ required: true })
  street: string;

  @Prop({ required: true })
  phone: string;
}

export const CustomerSchema = SchemaFactory.createForClass(Customer);