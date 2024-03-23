import { describe, it, assert } from "vitest";
import { getGarages, getUCFParkingAPIData } from "../src/wrapper";

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
    it("gets full UCF parking API data - getUCFParkingAPIData()", async () => {
        const result = await getUCFParkingAPIData();

        for (const element of result) {
            const { location } = element;

            // checking values of location nested stuff first
            const { availableCountOffset, id, name, isOutOfService, plugin } =
                location;

            assert(
                availableCountOffset >= 0,
                "availableCountOffset should not be negative"
            );
            assert(id >= 0, "id should not be negative");
            assert(name.length > 0, "name should not be empty");
            assert(
                isOutOfService === true || isOutOfService === false,
                "isOutOfService must be a boolean"
            );
            assert(plugin === null, "plugin should be null");

            // checking nested stuff under counts
            const { counts } = location;
            const {
                available,
                occupied,
                outOfService,
                reserved,
                total,
                vacant,
                timeStampDate,
                timeStampTime,
            } = counts;

            // TODO: Rest of tests
        }
    });
});
