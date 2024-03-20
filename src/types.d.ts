export interface Garage {
    name: string;
    occupied: number;
    total: number;
    reserved: number;
    lastContacted: string;
}

export function getGarages(): Garage[];
