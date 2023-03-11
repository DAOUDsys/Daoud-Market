import express from "express";
import Product from "../models/product.js";
import {
  deleteProduct,
  updateProduct,
  getProduct,
  addProduct,
  searchProduct,
  getAllProducts,
} from "../controller/product.js";
import { protect, authorize } from "../middleware/auth.js";

const productsRouter = express.Router();

productsRouter.route("/search").get(searchProduct);
productsRouter
  .route("/")
  .post(protect, authorize("admin", "dealer"), addProduct)
  .get(getAllProducts);
productsRouter
  .route("/:id")
  .get(getProduct)
  .put(protect, authorize("admin"), updateProduct)
  .delete(protect, authorize("admin"), deleteProduct);

export default productsRouter;
