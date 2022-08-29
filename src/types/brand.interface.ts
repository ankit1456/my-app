import { Document } from 'mongoose';

export interface Brand extends Document {
  brandName: string;
  created: Date;
}
