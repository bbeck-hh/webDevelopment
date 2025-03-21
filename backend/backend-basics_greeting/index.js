import { server } from "./server.js";

const port = 8000;
server.listen(port, () => {
    console.log(`Juchuu. Server is listening on port: ${port}`);
});
