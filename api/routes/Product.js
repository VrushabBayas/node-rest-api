const express = require('express');
const router = express.Router();


router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "Handeling  GET request  to /products"
    });
});
router.post('/', (req, res, next) => {
    res.status(200).json({
        message: "Handeling  POST request  to /products"
    });
});

router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    if (id === 'special') {
        res.status(200).json({
            message: "You discoverd the spcial id",
            id: id
        });
    } else {
        res.status(200).json({
            message: "You Passed  the   id",
            id: id
        });

    }
});

router.patch('/:productId', (req, res, next) => {
    res.status(200).json({
        message: "Updated Product",
    });

});

router.delete('/:productId', (req, res, next) => {
    res.status(200).json({
        message: " Product Deleted",
    });

});

module.exports = router;