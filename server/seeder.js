import fs from "fs";
import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import User from "./models/user.js";
import Product from "./models/product.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// load our env vars
dotenv.config({ path: "./config/config.env" });

// connect to database
mongoose.connect(process.env.MONGO_URI);

// read json files

const user = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/users.json`, "utf-8")
);
const product = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/products.json`, "utf-8")
);

// import data into db
const importData = async () => {
  try {
    await User.create(user);
    await Product.create(product);
    console.log("data imported... ");
    process.exit();
  } catch (error) {
    console.error(error);
  }
};

// delete data
const deleteData = async () => {
  try {
    await User.deleteMany();
    await Product.deleteMany();
    console.log("data deleted... ");
    process.exit();
  } catch (error) {
    console.error(error);
  }
};

if (process.argv[2] === "-i") {
  importData();
} else if (process.argv[2] === "-d") {
  deleteData();
}
