const {Product} = require('../models/product.model');

module.exports.createProduct = (req,res) =>{
    const {title,price,description} = req.body;

    Product.create({
        title,
        price,
        description

    })
    .then(product => res.json(product))
    .catch(err=>res.json(err))
}

module.exports.getAllProducts = (req,res) => {
    Product.find({})
        .then(product => res.json(product))
        .catch(err=>res.json(err))
}

module.exports.getProduct = (req,res) => {
    Product.findOne({_id:req.params.id})
        .then(product => {
            res.json(product)
            // console.log(product)
        })
        .catch(err=>{
            res.status(400).send('Error Id no disponible en la base de datos')
            // console.log('entro al error' +err)
            // res.json(err)
        })
}