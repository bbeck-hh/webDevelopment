import Chance from "chance";
import { createServer } from "node:http";

const chance = new Chance();

export const server = createServer((_, res) => {
    // Generiere zufällige Daten mit Chance bei jedem Reload
    const name = chance.name();
    const age = chance.age({ type: "adult" });
    const profession = chance.profession({ rank: true });

    // Erstelle die Antwort-String
    const responseString = `Moin, mein Name ist ${name} und ich bin ${age} Jahre alt.Ich bin ein ${profession}.`;

    // Sende die Antwort
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end(responseString);
});