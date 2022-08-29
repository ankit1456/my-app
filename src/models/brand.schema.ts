import mongoose from 'mongoose';

export const BrandSchema = new mongoose.Schema({
  brandName: {
    type: String,
    required: [true, 'brand name is required'],
  },
  created: {
    type: Date,
    default: Date.now,
  },
});
