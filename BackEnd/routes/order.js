const express = require('express')
const routers= express.Router()

routers.get('/', (req, res) => {
    res.status(200).json([
        {
            id: "001", //should be unique
            createdTime: "2023-07-13T01:34:39.303Z",
            products: [
                { productId: "001", name: "Laptop", price: 700, image: "https://example.com/laptop.png", quantity: 2 }
            ],
            totalPrice: 1400, //
        },
        {
            id: "001", //should be unique
            createdTime: "2023-07-13T01:34:39.303Z",
            products: [
                { productId: "001", name: "Laptop", price: 700, image: "https://example.com/laptop.png", quantity: 2 }
            ],
            totalPrice: 1400, //
        }
    ])
})

module.exports = routers