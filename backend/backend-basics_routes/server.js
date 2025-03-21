import { createServer } from "node:http";

export const server = createServer((req, res) => {

    console.log(`Inhalt req: $`);


    const partOfApi = "/api/fish/";

    // Überprüfen, ob die URL mit dem API-Pfad beginnt
    if (req.url.startsWith(partOfApi)) {

        const id = req.url.slice(partOfApi.length); // Extrahiere die ID aus der URL

        switch (id) {
            case "1":
                res.statusCode = 200;
                res.end("Hering");
                break;
            case "2":
                res.statusCode = 200;
                res.end("Butt");
                break;
            case "3":
                res.statusCode = 200;
                res.end("Aal");
                break;
            case "4":
                res.statusCode = 200;
                res.end("Sprotte");
                break;
            default:
                res.statusCode = 404;
                res.end("404 Not Found");
        }
    } else {
        // Wenn die URL nicht mit dem API-Pfad beginnt
        res.statusCode = 404;
        res.end("Kein Fisch gefangen -> 404 Not Found");
    }
});