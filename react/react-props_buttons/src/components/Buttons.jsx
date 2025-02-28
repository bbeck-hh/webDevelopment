export function Button({ color, disabled, text, onSchnurr }) {
    return (
        <button
            style={{
                backgroundColor: color,
                height: "80px",
                cursor: "pointer",
            }}
            disabled={false}
            onClick={onSchnurr}>
            {text}
        </button>
    );
}