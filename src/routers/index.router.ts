//
import express from 'express'
//
const router = express.Router()

// Importing Routers
import customerRouter from './customers.router'
import customerAddressRouter from './customers.addresses.router'
import manufacturersRouter from './manufacturers.router'
import productsRouter from './products.router'
import productCategoriesRouter from './product.categories.router'
import productSubcategoriesRouter from './product.subcategories.router'
import productReviewsRouter from './products.reviews.router'
import productAttributesRouter from './products.attributes.router'
import productListAttributesRouter from './products.list.attributes.router'
import paymentStatusRouter from './payment.status.router'
import shippingStatusRouter from './shipping.status.router'
import ordersRouter from './orders.router'
import orderDetailsRouter from './orders.details.router'
import orderPaymentStatusRouter from './orders.payment.status.router'
import orderShippingStatusRouter from './orders.shipping.status.router'

// Registering routes to express
router.use('/customers', customerRouter)
router.use('/addresses', customerAddressRouter)
router.use('/manufacturers', manufacturersRouter)
router.use('/products', productsRouter)
router.use('/reviews', productReviewsRouter)
router.use('/categories', productCategoriesRouter)
router.use('/subcategories', productSubcategoriesRouter)
router.use('/attributes', productAttributesRouter)
router.use('/listAttributes', productListAttributesRouter)
router.use('/paymentStatus', paymentStatusRouter)
router.use('/shippingStatus', shippingStatusRouter)
router.use('/orders', ordersRouter)
router.use('/ordersDetails', orderDetailsRouter)
router.use('/ordersPayment', orderPaymentStatusRouter)
router.use('/ordersShipping', orderShippingStatusRouter)

//
export default router
