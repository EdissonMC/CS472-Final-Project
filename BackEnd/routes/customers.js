const express = require('express')
const routers = express.Router()

routers.get('/', (req, res) => {
    res.status(200).json([
        {
            id: 'C001',//should be unique
            name: "John",
            username: "john",//should be unique
            phone: "123",
            password: "123"
        },
        {
            id: 'C001',//should be unique
            name: "John",
            username: "john",//should be unique
            phone: "123",
            password: "123"
        }])
})

module.exports = routers