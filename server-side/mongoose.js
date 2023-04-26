const mongoose = require('mongoose')

const Product = require('./models/product')

mongoose.connect('mongodb+srv://shiba-website:XcAOCEU47u23fWYm@cluster0.7cy61.mongodb.net/?retryWrites=true&w=majority').then(() =>{
    console.log('Connected to database!')
}).catch(() =>{
    console.log('Connection failed!')
})
// connection between our backend and MongoDB database. 
// don't have to open, or close each time we create a new product.
// All managed by Mongoose.


const createProduct = async (req, res, next) =>{
    const createdProduct = new Product({
        name: req.body.name,
        price: req.body.prices
    })

    const result = await createdProduct.save() // 'save()', mongoose method, return promise

    res.json(result)
}

exports.createProduct = createProduct