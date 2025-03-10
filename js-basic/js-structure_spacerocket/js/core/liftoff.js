import { getRocket } from "./rocket.js";

export function liftoff() {
  const rocket = getRocket();
  console.log(`Ab geht das Ding nach oben :-)`);


  if (rocket.countdown !== rocket.requiredCountdown) {
    throw new Error("Cannot lift off without the correct countdown sequence.");
  }

  if (!rocket.fuel) {
    throw new Error("Cannot lift off without fuel.");
  }

  rocket.liftoff = true;
}
