const { Router } = require("express");
const router = Router();
const productModel = require("../database/Schemas/Product"); 
const cartModal = require("../database/Schemas/Cart")

router.get("/product", async (req, res) => {
    try {
        const products = await productModel.find(); 
        return res.status(200).json(products);
    } catch (error) {
        return res.status(500).json({ error: `Unable to fetch products: ${error.message}` }); 
    }
});

router.get("/product/filter", async (req, res) => {
    try {
        const filter = req.query;
        const products = await productModel.find(filter); 
        return res.status(200).json(products);
    } catch (error) {
        return res.status(500).json({ error: `Unable to fetch products: ${error.message}` }); 
    }
});

router.post("/cart/add" , async (req, res) => {
    try{
       const addedProduct = await cartModal.findOne({productId : req.body.productId})
       console.log(" >>>>>>>>>>>>>>>>>>>>>" , addedProduct);
       
       if(!addedProduct){
           const cart = await cartModal.create({
              productId : req.body.productId,
              quantity : 1
           })
       }else{
        const quantity = addedProduct.quantity+1;
        const cart = await cartModal.updateOne({
            productId : req.body.productId,
            quantity : quantity
         })         
       }
       return res.status(200);
    }catch(error){
      return res.status(500).json("unable to add cart")
    }
})



module.exports = router;
