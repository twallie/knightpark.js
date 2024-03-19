import { describe, it, expect } from "vitest";
import { getParkingInfo } from "../src/main";

describe("basic functions", () => {
  it("gets general parking information", async () => {
    console.log(await getParkingInfo());
  });
});
