import { server } from "./server.js";

const port = 8000;
server.listen(port, () => {
    // Server
    console.log(`Jucheee. Server is listening on port: ${port}`);
});
