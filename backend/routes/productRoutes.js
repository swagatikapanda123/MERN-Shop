import express from 'express'
import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'
const router = express.Router()

//fetch all products
router.get(
  '/',
  asyncHandler(async (req, res) => {
    const products = await Product.find({})
    //throw new Error('some error')
    res.json(products)
  })
)

//fetch single product
router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)
    if (product) {
      res.json(product)
    } else {
      res.status(404)
      throw new Error('Product not found')
    }
  })
)

export default router
