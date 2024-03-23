export interface Garage {
    name: string;
    occupied: number;
    total: number;
    reserved: number;
    lastContacted: string;
}

export interface UCFParkingDataElement {
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

export type UCFParkingAPIData = UCFParkingDataElement[];

export function getGarages(): Promise<Garage[]>;
export function getUCFParkingAPIData(): Promise<UCFParkingAPIData>;
