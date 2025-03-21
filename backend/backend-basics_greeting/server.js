import { createServer } from "node:http";

export const server = createServer((req, res) => {
    // Server
    //console.log(`Server.js - Der Code läuft auf dem Server`);
    console.log(`Server.js - Der Request-URL ist: ${req.url}`);

    // Client
    res.end('Hallo Nase');
});

