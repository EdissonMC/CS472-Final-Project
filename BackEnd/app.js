
const express = require('express')
const cors = require('cors')
const mockDataSetup= require('./utils/mockSetup')
const productRoutes = require('./routes/product')
const orderRoutes = require('./routes/order')
const customerRoutes= require('./routes/customers')

mockDataSetup.setup()

const app = express()


//middleware
app.use(express.json())
app.use(cors())

// routes PRODUCTS
app.use('/products', productRoutes)

// routes ORDERS
app.use('/orders',orderRoutes)

// routes CUSTOMERS
app.use('/customers',customerRoutes )



// SETUP
const PORT = process.env.PORT
app.listen(3000, () => {
    console.log(`listening in port ${PORT}`)
})

