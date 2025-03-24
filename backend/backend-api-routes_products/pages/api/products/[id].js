import { getProductById } from "@/services/productServices";
import Product
import dbConn from "@/db/connect";

// This is the API route that will return a product by its id
// The URL for this route is /api/products/[id]
export default function handlerProductById(req, res) {
    const { id } = req.query;
    const product = getProductById(id);
    res.status(200).json(product);
}