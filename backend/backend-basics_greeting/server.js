import { createServer } from "node:http";

export const server = createServer((req, res) => {
    console.log(`Der Code läuft auf dem Server`);
    console.log(`Der Request-URL ist: ${req.url}`);
    res.end('Hallo Nase');
});

