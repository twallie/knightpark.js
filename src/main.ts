import type { Garage } from "./types";

export const getGarages = async () => {
    const response = await fetch(
        "https://secure.parking.ucf.edu/GarageCounter/GetOccupancy",
        {
            method: "GET",
        }
    );
    const body = JSON.parse(await response.text());

    const garages: Garage[] = [];
    for (const element of body) {
        const { location } = element;
        const { name } = location;
        const { occupied, total, reserved } = location.counts;
        const { last_contact_timestamp: lastContacted } =
            location.extended_properties;

        const garage: Garage = {
            name,
            occupied,
            total,
            reserved,
            lastContacted,
        };
        garages.push(garage);
    }

    return garages;
};
