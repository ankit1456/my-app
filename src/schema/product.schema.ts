import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
    unique: true,
  },
  description: String,
  price: {
    type: Number,
    required: true,
  },
  brand: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Brand',
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
