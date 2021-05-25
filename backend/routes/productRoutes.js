import express from 'express'
import {
  getProductById,
  getProducts,
} from '../controllers/productController.js'
const router = express.Router()

//fetch all products
router.route('/').get(getProducts)

//fetch single product
router.route('/:id').get(getProductById)

export default router
