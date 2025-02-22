import { getRocket } from "./rocket.js";

export function deployPayload() {
  const rocket = getRocket();
  console.log(`Was ist mit der Nutzlast? ${rocket.payload.length} `);

  if (!rocket.liftoff) {
    throw new Error("Cannot deploy payload while still on ground.");
  }

  if (!rocket.payload.length) {
    throw new Error(
      "No payload found. Make sure to load payload before deploying."
    );
  }
  console.log(`Nutzlast ist eingesetzt`);

  rocket.payloadDeployed = true;
}
