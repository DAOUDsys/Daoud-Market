import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please add a name"],
  },
  price: {
    type: Number,
    min: [0, "price should be 0 or more"],
    required: [true, "please add a price"],
  },
  description: {
    type: String,
    required: [true, "please add a description"],
  },
  comments: {
    type: [String],
    default: [],
  },
  pictures: {
    type: [String],
    default: [],
  },
  categories: {
    type: [String],
    enum: [
      "Beauty",
      "Books",
      "Baby",
      "Phones",
      "Electronics",
      "Entertainment",
      "Art",
      "Health",
      "Home",
      "Music",
      "Computer",
      "Tools",
      "Games",
      "Video-Games",
      "Smart-Home",
      "Sport",
      "Clothes",
      "Men",
      "Women",
      "Office",
      "Industrial",
      "Food",
      "Kitchen",
      "Photography",
      "Wearable-Devices",
    ],
    required: [true, "please add to category"],
  },
  quantity: {
    type: Number,
    required: [true, "please add the quantity"],
  },
  sold: {
    type: Number,
    default: 0,
  },
  addedAt: {
    type: Date,
    default: Date.now,
  },
});

const Product = mongoose.model("Product", ProductSchema);
export default Product;
