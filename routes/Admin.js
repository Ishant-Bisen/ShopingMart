const {Router} = require("express");
const router = Router();
const productModal = require("../database/Schemas/Product")

router.post("/product" , async (req, res) =>{
    try{
        const product = await productModal.findOne({name : req.body.name});
        console.log(">>>>>>>>>>>>>>>>>>>" , product);
        
        if (product) return res.status(400).send("Product is already exist");
        const newProduct = await productModal.create({
             name : req.body.name,
            images  : req.body.images,
            rating : req.body.rating,
            category : req.body.category,
            quantity : req.body.quantity,
            cost : req.body.cost,
            details : req.body.details,
            highlights : req.body.highlights,
            paymentOptions : req.body.paymentOptions,
            sellers : req.body.sellers
        })
        return res.status(200).json(newProduct);
    }catch (error){
        return res.status(500).send(`Unable to fetch products: ${error}`);
    }
})

module.exports = router;


