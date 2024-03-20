import { describe, it, expect } from "vitest";
import { getGarages } from "../src/main";

describe("basic functions", () => {
    it("gets general parking information", async () => {
        console.log(await getGarages());
    });
});
