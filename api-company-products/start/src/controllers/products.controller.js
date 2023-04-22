import ProductModel from "../models/Product.js";

export const createProduct = async (req, res) => {
  const { name, category, price, imgURL } = req.body;

  try {
    const newProduct = new ProductModel({
      name,
      category,
      price,
      imgURL,
    });

    const productSaved = await newProduct.save();

    res.status(201).json(productSaved);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

export const getProducts = async (req, res) => {
  const products = await ProductModel.find();
  return res.json(products);
};

export const getProductById = async (req, res) => {
  const { productId } = req.params;

  const product = await ProductModel.findById(productId);
  res.status(200).json(product);
};

export const updateProductById = async (req, res) => {
  const updatedProduct = await ProductModel.findByIdAndUpdate(
    req.params.productId,
    req.body,
    { new: true }
  );
  res.status(204).json(updatedProduct);
};

export const deleteProductById = async (req, res) => {
  const { productId } = req.params;
  await ProductModel.findByIdAndDelete(productId);
  res.status(204).json();
};
