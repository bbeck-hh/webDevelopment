// Implement the launch sequence function here and export it as the default export.
// Schritt 1: Nutzlast laden
import { countdown } from './core/countdown.js';
import { deployPayload } from './core/deploy.js';
import { fuel } from './core/fuel.js';
import { liftoff } from './core/liftoff.js';
import { loadPayload } from './core/load.js';
import { FISHSAT, NFSAT } from './payload/satellites.js';

// Nutzlast vorbereiten
const payload = [NFSAT, FISHSAT];

// Hauptfunktion launch() als Standardexport
export default function launch() {
    // 1. Nutzlast laden
    loadPayload(payload[1]);
    console.log(`Nutzlast laden und wähle Satellite: ${payload[1].type} `);

    // 2. Tanken
    fuel();

    // 3. Countdown starten (5 Sekunden)
    for (let i = 5; i > 0; i--) {
        countdown();
    }

    // 4. Abheben
    liftoff();

    // 5. Nutzlast
    deployPayload(payload);
}
