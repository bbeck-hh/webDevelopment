import React from "react";

const Main = ({ children }) => {
    return (
        <main style={{ padding: "1rem", maxWidth: "800px", margin: "0 auto" }}>
            {children}
        </main>
    );
};

export default Main;