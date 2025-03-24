import dbConnect from "@/db/connect";
import Product from "@/db/models/Product";

export default async function handler(request, response) {
  // Key id! not from mongoDB
  const { id } = request.query
  await dbConnect();
  if (request.method === "GET") {
    // Get all products from the database
    const product = await Product.findById(id);
    return response.status(200).json(product);
  }
  response.status(405).json({ message: 'Method not allowed' });
}