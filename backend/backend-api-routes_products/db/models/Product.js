// DB Model
// Model for the products collection in the MongoDB database
// The productSchema defines the structure of the documents in the products collection
import mongoose from 'mongoose';
const { Schema } = mongoose;

const productSchema = new Schema(
    {
        product: { type: String, required: true },
        description: String,
        price: Number,
    }
);

// The model is used to create, read, update, and delete documents in the products collection
// Model definition
const Product = mongoose.models.Product || mongoose.model('Product', productSchema);

export default Product;
// The Product model is exported so that it can be used in other parts of the application
