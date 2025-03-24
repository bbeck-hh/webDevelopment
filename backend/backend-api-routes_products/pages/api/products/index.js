import Product from "@/db/models/Product";
import { getAllProducts } from "@/services/productServices";
import dbConnect from "@db/connect"

// This is the API route that will return all products
// The URL for this route is /api/products
export default function handelerAllProducts(req, res) {
    const products = getAllProducts();
    res.status(200).json(products);
}


export default async function handler(req, res) {
    await dbConnect();

    if (req.method === 'GET') {
        // todo Alle Produkte aus der DB holen und returnen
        const products = await Product.find(products);
        res.status(200).json(products);
        return
    }


    res.status(405).json({ message: 'Method not allowed' });
}