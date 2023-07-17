


exports.getProducts = (req, res) => {
    res.status(200).json([
        {
            id: "001", //should be unique
            name: "Laptop",
            price: 700,
            image: "https://png.pngtree.com/element_our/20190524/ourmid/pngtree-2-5d-electronic-device-laptop-vector-element-image_1101889.jpg"
        },
        {
            id: "001", //should be unique
            name: "Laptop",
            price: 700,
            image: "https://png.pngtree.com/element_our/20190524/ourmid/pngtree-2-5d-electronic-device-laptop-vector-element-image_1101889.jpg"
        }
    ])
}


exports.deleteProduct = (req,res)=>{
    console.log(req.params.id)
    res.json({res:"product deleted"})
}


exports.createProduct = (req,res)=>{
    res.json({res:"product created"})
}