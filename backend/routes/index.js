var express = require('express');
var router = express.Router();
const Product = require('../model/Product');

// CREATE
router.post('/', async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json({
      success: true,
      message: 'Product created successfully',
      data: product
    });
  }
  catch (err) {
    res.status(500).json({
      success: false,
      message: 'Failed to create product',
      error: err.message
    });
  }
});

// READ ALL
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({
      success: true,
      message: 'Products fetched successfully',
      data: products
    });
  }
  catch (err) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetched product',
      error: err.message
    });
  }
});

// READ SINGLE
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if(!product){
      return res.status(404).json({message: 'Product Not Found'});
    }
    res.json({
      success: true,
      message: 'Product fetched successfully',
      data: product
    });
  }
  catch (err) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetched product',
      error: err.message
    });
  }
});

// UPDATE
router.put('/:id', async (req, res) => {
  try {
    const { name, price, category } = req.body;

    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      { name, price, category },
      { new: true, runValidators: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ success: false, message: 'Product not found' });
    }

    res.status(200).json({
      success: true,
      message: 'Product updated successfully',
      data: updatedProduct
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Failed to update product',
      error: err.message
    });
  }
});

// DELETE
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Product.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: 'Product not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Product deleted successfully',
      data: deleted
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Failed to delete product',
      error: err.message
    });
  }
});

module.exports = router;
