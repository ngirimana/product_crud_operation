
import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
 name : {
    type: String,
    required: [ true, 'Enter Product  name' ],
    
  },
 price: {
    type: String,
    required:true,
},
  description:{
    type: String,
    required: [ true, 'Enter Product Description name' ],
  },
 
  image:{
    type:String,
    required:true,
  }
  
});
const ProductModel = mongoose.model('Product', productSchema);

export default ProductModel;