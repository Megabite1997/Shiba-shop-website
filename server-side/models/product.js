const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {type: String, required: true},
    price: {type: Number, reuquired: true}
})

// to be able to use this schema, blueprint, for a product we want to create
// Need to add a model based on the schema.

module.exports =  mongoose.model('Product', productSchema)
// first argument is the name of the schema, this will become the name of the collection
// without the capital, and become plural form --> 'products'

