import { getAllProducts } from "@/services/productServices";

// This is the API route that will return all products
// The URL for this route is /api/products
export default function handelerAllProducts(req, res) {
    const products = getAllProducts();
    res.status(200).json(products);
}
