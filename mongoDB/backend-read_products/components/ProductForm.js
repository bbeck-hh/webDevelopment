import Button from "@/components/Button";
import styled from "styled-components";
import { mutate } from "swr";

export default function ProductForm() {
    async function handleSubmit(event) {
        event.preventDefault(); // Verhindert das Standardverhalten des Formulars
        const formData = new FormData(event.target); // Extrahiert die Formulardaten
        const product = {
            name: formData.get("name"),
            description: formData.get("description"),
            price: formData.get("price"),
            currency: formData.get("currency"),
        };

        console.log("Produktdaten:", product);

        const response = await fetch("/api/products", {
            method: "POST",
            body: JSON.stringify(product),
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (response.ok) {
            console.log("Product created");
            mutate("/api/products"); // Aktualisiert die SWR-Daten on the fly
        } else {
            console.error("Product not created");
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <StyledList>
                    <li>
                        <label htmlFor="name-id">Enter new Product</label>
                        <input type="text" name="name" id="name-id" />
                    </li>
                    <li>
                        <label htmlFor="description-id">Enter Description</label>
                        <input type="text" name="description" id="description-id" />
                    </li>
                    <li>
                        <label htmlFor="price-id">Enter Price</label>
                        <input type="text" name="price" id="price-id" />
                    </li>
                    <li>
                        <label htmlFor="currency-id">Enter Currency</label>
                        <select name="currency" id="currency-id" defaultValue="EUR">
                            <option value="EUR">EUR</option>
                            <option value="USD">US Dollar</option>
                            <option value="BTC">Bitcoin</option>
                        </select>
                    </li>
                </StyledList>
                <StyledButtonWrapper>
                    <Button type="submit">Add Product</Button>
                </StyledButtonWrapper>
            </form>
        </>
    );
}

const StyledList = styled.ul`
    list-style-type: none;
    padding: 0;

    li {
        display: flex;
        flex-direction: column;
        margin-bottom: 1rem;
    }

    label {
        margin-bottom: 0.5rem;
        font-weight: bold;
    }

    input,
    select {
        padding: 0.5rem;
        border: 1px solid #ccc;
        border-radius: 4px;
    }

    /* Anpassung für größere Viewports */
    @media (min-width: 768px) {
        li {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
        }

        label {
            margin-bottom: 0; /* Entfernt den unteren Abstand */
            margin-right: 1rem; /* Abstand zwischen Label und Input */
            flex: 0 0 15rem; /* Gleiche Breite für alle Labels */
        }

        input,
        select {
            flex: 1; /* Inputs füllen den restlichen Platz */
        }
    }
`;

const StyledButtonWrapper = styled.div`
    display: flex;
    justify-content: center; /* Zentriert den Button horizontal */
    margin-top: 1rem; /* Abstand nach oben */
`;