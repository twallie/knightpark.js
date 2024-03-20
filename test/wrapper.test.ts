import { describe, it, assert } from "vitest";
import { getGarages } from "../src/wrapper";

describe("basic functions", () => {
    it("gets polished garage information - getGarages()", async () => {
        const result = await getGarages();

        for (const garage of result) {
            assert(garage.name.length > 0, "Name of garage is not empty");

            assert(garage.total > 0, "Total number of spots is greater than 0");

            assert(
                garage.occupied <= garage.total,
                "Reported occupied spots does not exceed the total number of spots"
            );
            assert(
                garage.occupied >= 0,
                "Number of occupied spots is greater than or equal to 0"
            );

            assert(
                garage.reserved >= 0,
                "Number of reserved spots is greater than or equal to 0"
            );

            assert(
                garage.lastContacted.length > 0,
                "The length of the string timestamp for when the garage was last contacted is greater than 0"
            );
        }
    });
});
