import type { Garage } from "./types";

interface RawUCFParkingDataElement {
    location: {
        available_count_offset: number;
        counts: {
            available: number;
            occupied: number;
            out_of_service: boolean;
            reserved: number;
            timestamp: string;
            total: number;
            vacant: number;
            timeStampDate: string;
            timeStampTime: string;
        };
        extended_properties: {
            entry_lane_ids: null;
            exit_lane_ids: null;
            last_contact_timestamp: string;
            next_scheduled_reset_limit: null;
            reset_time: null;
            reset_value: string;
        };
        id: number;
        is_out_of_service: boolean;
        name: string;
        plugin: null;
    };
}

interface UCFParkingDataElement {
    location: {
        availableCountOffset: number;
        counts: {
            available: number;
            occupied: number;
            outOfService: boolean;
            reserved: number;
            timestamp: string;
            total: number;
            vacant: number;
            timeStampDate: string;
            timeStampTime: string;
        };
        extendedProperties: {
            entryLaneIds: null;
            exitLaneIds: null;
            lastContactTimestamp: string;
            nextScheduledResetLimit: null;
            resetTime: null;
            resetValue: string;
        };
        id: number;
        isOutOfService: boolean;
        name: string;
        plugin: null;
    };
}

type RawUCFParkingAPIData = RawUCFParkingDataElement[];
type UCFParkingAPIData = UCFParkingDataElement[];

function polishElement(
    element: RawUCFParkingDataElement
): UCFParkingDataElement {
    const { location } = element;
    const {
        counts,
        extended_properties: extendedProperties,
        id,
        is_out_of_service: isOutOfService,
        name,
        plugin,
    } = location;

    // I feel like there is a better way to do this,
    // but I can't think of one at the moment.
    const polishedElement: UCFParkingDataElement = {
        location: {
            availableCountOffset: location.available_count_offset,
            counts: {
                available: counts.available,
                occupied: counts.occupied,
                outOfService: counts.out_of_service,
                reserved: counts.reserved,
                timestamp: counts.timestamp,
                total: counts.total,
                vacant: counts.vacant,
                timeStampDate: counts.timeStampDate,
                timeStampTime: counts.timeStampTime,
            },
            extendedProperties: {
                entryLaneIds: extendedProperties.entry_lane_ids,
                exitLaneIds: extendedProperties.exit_lane_ids,
                lastContactTimestamp: extendedProperties.last_contact_timestamp,
                nextScheduledResetLimit:
                    extendedProperties.next_scheduled_reset_limit,
                resetTime: extendedProperties.reset_time,
                resetValue: extendedProperties.reset_value,
            },
            id,
            name,
            isOutOfService,
            plugin,
        },
    };
    return polishedElement;
}

async function getRawUCFParkingData(): Promise<RawUCFParkingAPIData> {
    const response = await fetch(
        "https://secure.parking.ucf.edu/GarageCounter/GetOccupancy",
        {
            method: "GET",
        }
    );
    const raw: RawUCFParkingAPIData = JSON.parse(await response.text());
    return raw;
}

export async function getUCFParkingAPIData(): Promise<UCFParkingAPIData> {
    const raw = await getRawUCFParkingData();
    const polished: UCFParkingAPIData = [];
    for (const element of raw) {
        const polishedElement = polishElement(element);
        polished.push(polishedElement);
    }

    return polished;
}

export const getGarages = async () => {
    const parkingAPIData = await getUCFParkingAPIData();
    const garages: Garage[] = [];
    for (const element of parkingAPIData) {
        const { location } = element;
        const { name } = location;
        const { occupied, total, reserved } = location.counts;
        const { lastContactTimestamp: lastContacted } =
            location.extendedProperties;

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
