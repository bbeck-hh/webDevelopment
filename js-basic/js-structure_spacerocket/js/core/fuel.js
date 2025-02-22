import { getRocket } from "./rocket.js";

export function fuel() {
  const rocket = getRocket();
  console.log(`Beim tanken`);

  if (rocket.countdown > 0) {
    throw new Error("Cannot fuel after countdown has started.");
  }

  rocket.fuel = true;
}
