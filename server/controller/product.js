import asyncHandler from "../middleware/async.js";
import Product from "../models/product.js";

// @desc     add product
// @route    POST api/v1/products
// @access   Privet-Admin
export const addProduct = asyncHandler(async (req, res, next) => {
  const product = await Product.create(req.body);

  res.status(201).json({ success: true, data: product });
});
// @desc     GET all Products
// @route    GET api/v1/Products
// @access   public
export const getAllProducts = asyncHandler(async (req, res, next) => {
  const page = req.query.page || 1;
  try {
    const limit = 18;
    const startIndex = (Number(page) - 1) * limit; // get the starting index for every page
    const total = await Product.countDocuments({});

    const data = await Product.find()
      .sort({ _id: -1 })
      .limit(limit)
      .skip(startIndex);

    res.status(200).json({
      data,
      currentPage: Number(page),
      numberOfPages: Math.ceil(total / limit),
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});
// @desc     Get product
// @route    GET api/v1/products/:id
// @access   Public
export const getProduct = asyncHandler(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  res.status(200).json({ success: true, data: product });
});
// @desc     Search for product
// @route    GET api/v1/products/search/?name={}&category={}
// @access   Public
export const searchProduct = asyncHandler(async (req, res, next) => {
  const page = req.query.page || 1;
  try {
    const name = new RegExp(req.query.name, "i");
    const category = req.query.category || "";
    const data = await Product.find({
      $or: [{ name }, { categories: { $in: category } }],
    });

    const limit = 18;
    const startIndex = (Number(page) - 1) * limit; // get the starting index for every page
    const total = await Product.countDocuments({});

    res.status(200).json({
      data,
      currentPage: Number(page),
      numberOfPages: Math.ceil(total / limit),
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});
// @desc     Update product
// @route    PUT api/v1/products/:id
// @access   Privet-Admin
export const updateProduct = asyncHandler(async (req, res, next) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({ success: true, data: product });
});
// @desc     Delete product
// @route    DELETE api/v1/products/:id
// @access   Privet-Admin
export const deleteProduct = asyncHandler(async (req, res, next) => {
  await Product.findByIdAndDelete(req.params.id);
  res.status(201).json({ success: true, data: {} });
});
