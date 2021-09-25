// Import the need libraries.
const express = require('express');
const { check, body } = require('express-validator');

// Import the shop controller
const shopController = require('../controllers/shop');

// Setup the router.
const router = express.Router();

// GET / aka the homepage
router.get('/', shopController.getHome);

// GET /products
router.get('/products', shopController.getProducts);

// GET /product-view/:id
router.get('/product-view/:id', shopController.getProduct);

// GET /contact
router.get('/contact', shopController.getContact);

// POST /contact
router.post(
    '/contact',
    [
        body('fname').not().isEmpty().trim().escape(),
        body('lname').not().isEmpty().trim().escape(),
        body('email').isEmail().normalizeEmail(),
        body('comment').not().isEmpty().trim().escape(),
    ],
    shopController.postContact
);

// GET /about
router.get('/about', shopController.getAbout);

// Export the router
module.exports = router;