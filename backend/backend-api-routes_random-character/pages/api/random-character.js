import Chance from "chance";
import useSWR from "swr";

// write a handler function that returns a random character
const fetcher = (url) => fetch(url).then((res) => {
    if (!res.ok) {
        throw new Error(`Failed to fetch: ${res.statusText}`);
    }
    return res.json();
});

// create a new instance of the Chance library
const chance = new Chance();

// responds with a 200 status code and a random character
export default function handlerRandomCharacter() {
    // Fetching the data with useSWR
    // The key is the URL of the API
    // The fetcher function is called with the URL as an argument
    const { data, error } = useSWR("/api/random-character", fetcher);

    if (error) return <div>Failed to load</div>;
    if (!data) return <div>Loading...</div>;


    const character = {
        firstName: chance.first(),
        lastName: chance.last(),
        // ... some more keys here ...
    };

    return (
        <div>
            <h1>Random Character</h1>
            <p>{data.character}</p>
        </div>
    );
}







