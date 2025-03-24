import dbConnect from "@/db/connect";
import Product from "@/db/models/Product";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    // Get all products from the database
    const products = await Product.find({});
    return response.status(200).json(products);
  }
  response.status(405).json({ message: 'Method not allowed' });
}