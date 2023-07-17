const fs = require('fs')
const path = require('path')

const data = () => {
    return [
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
    ]
}

const pathDBProducts = path.join(__dirname, '..', 'db', 'data.data')

exports.setup = () => {
    fs.writeFile(pathDBProducts, JSON.stringify(data()), () => {
        console.log("writing mock data ")
    })
}