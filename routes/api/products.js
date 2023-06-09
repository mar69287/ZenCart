const express = require('express');
const router = express.Router();
const productsCtrl = require('../../controllers/api/products')

router.get('/', productsCtrl.index);
router.get('/category/:category', productsCtrl.getCategory);
router.get('/search/:searchText', productsCtrl.getSearch);
router.get('/:id',  productsCtrl.show);

module.exports = router;