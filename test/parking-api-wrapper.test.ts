import { describe, it } from "vitest";
import { getGarages } from "../src/parking-api-wrapper";

describe("basic functions", () => {
    it("gets general parking information", async () => {
        console.log(await getGarages());
    });
});
