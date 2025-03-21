import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => {
    if (!res.ok) {
        throw new Error(`Failed to fetch: ${res.statusText}`);
    }
    return res.json();
});

export default function Products() {
    // Fetching the data with useSWR
    // The key is the URL of the API
    // The fetcher function is called with the URL as an argument
    const { data, error } = useSWR("/api/products", fetcher);

    if (error) return <div>Failed to load</div>;
    if (!data) return <div>Loading...</div>;

    return (
        <div>
            <h1>Products</h1>
            <ul>
                {/*
                 Displaying the data
                 The data is an array of products
                 The map function is used to iterate over the array
                 The key is the product id
                 The product name, price, and currency are displayed */}
                {data.map((product) => (
                    <li key={product.id}>
                        {product.name} - {product.price} {product.currency}
                    </li>
                ))}
            </ul>
        </div>
    );
}