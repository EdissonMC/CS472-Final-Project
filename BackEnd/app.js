
const express = require('express')
const app = express()


//

// routes
app.get('/products',(req, res)=>{
    res.send("products")
})

app.get('/orders',(req, res)=>{
    res.send("products")
})



// SETUP
const PORT= process.env.PORT
app.listen(3000,()=>{
    console.log(`listening in port ${PORT}`)
})

