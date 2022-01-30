import { model, Schema } from "mongoose";

const BookSchema: Schema = new Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  coverImage: {
    type: String,
    required: true,
  },
  comments: {
    type: Array,
    required: true, 
  },
  amount: {
    type: Number,
    required: true,
  },
  usersID: {
    type: Array,
    default: []
  },
},
{ timestamps: true },
);

export default model('Book', BookSchema);