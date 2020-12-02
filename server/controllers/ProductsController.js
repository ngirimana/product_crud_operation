import lodash from 'lodash';
import dotenv from 'dotenv';
import Product from '../models/product.js';

dotenv.config();


 export const addProduct = async (req, res) => {
  try {
    let {
        name,
        price,
        description,
        image
       
    } = req.body;
   
    const newProduct = await Product.create({
          name,
         price,
        description,
        image
    });
    const data = lodash.pick(
        newProduct,
        'id',
        "name"  ,
        "price",
        "description",
        "image"
    );
   
    return res.status(201).json({
        status: 201,
        message: 'Product added successfully',
       
        data,

      });
    } catch (error) {
      return res.status(400).json({
        status:400,
        "message":error
      })
    }
  };

  export const getAllProducts=async (req,res)=> {
    try{
     const products= await Product.find();
    if(products.length){
      return res.status(200).json({
        status:200,
        message:'Products retrieved successfully',
        data:products,
        }
      )
    }
    else{
        return res.status(404).json({
          status:404,
          error:"Products not found"
        })
    }}
   catch (error) {
    return res.status(500).json({
          status:500,
          eror:error,
        })
    }
  }

  export const updateProduct=async (req,res)=>{
    try {
      const { productId } = req.params;
    const singleproduct = await Product.findOne( {_id:productId});
    if(singleproduct){
       const updatedProduct = await Product.findByIdAndUpdate(productId, req.body, {
        new: true,
        runValidators: true,
      });
       return res.status(200).json({
        status:200,
        message:'Product updated successfully',
        data:updatedProduct,
        }
      )
    }
    else{
       return res.status(404).json({
          status:404,
          error:"Products not found"
        })
    }
    } catch (error) {
       return res.status(500).json({
          status:500,
          eror:error,
        })
    }
      
    }
     export const deleteProduct=async (req,res)=>{
    try {
      const { productId } = req.params;
      const singleproduct = await Product.findOne( {_id:productId});
     if(singleproduct){
       await Product.deleteOne({ _id: productId });
       return res.status(200).json({
        status:200,
        message:'Product deleted successfully',
        }
      )
    }
    else{
       return res.status(404).json({
          status:404,
          error:"Products not found"
        })
    }
    } catch (error) {
       return res.status(500).json({
          status:500,
          eror:error,
        })
    }
      
    }
    

  
  