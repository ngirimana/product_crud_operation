import express from 'express';
import {addProduct,getAllProducts,updateProduct,deleteProduct} from "../controllers/ProductsController.js"
const productRouter = express.Router();

productRouter.post('/add-product',addProduct);
productRouter.get('/all',getAllProducts);
productRouter.patch('/all/:productId',updateProduct);
productRouter.delete('/all/delete/:productId',deleteProduct);

export default productRouter