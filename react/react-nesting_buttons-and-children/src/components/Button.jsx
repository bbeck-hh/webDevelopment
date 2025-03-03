export function Button({ children }) {
    return (
        <button className="button" type="button">
            <p>{children}</p>
        </button>
    );
}