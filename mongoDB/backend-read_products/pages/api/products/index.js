import dbConnect from "@/db/connect";
import Product from "@/db/models/Product";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    // Get all products from the database
    const products = await Product.find();
    return response.status(200).json(products);
  }

  if (request.method === "POST") {
    // Create a new product
    const productData = request.body;
    await Product.create(productData);

    return response.status(201).json({ status: "Product created" });
  }


  response.status(405).json({ message: 'Method not allowed' });
}