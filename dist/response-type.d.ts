export type Root = Root2[];
export interface Root2 {
    location: Location;
}
export interface Location {
    available_count_offset: number;
    counts: Counts;
    extended_properties: ExtendedProperties;
    id: number;
    is_out_of_service: boolean;
    name: string;
    plugin: any;
}
export interface Counts {
    location_name: string;
    api_location_id: number;
    parking_location_id: number;
    available: number;
    occupied: number;
    out_of_service: boolean;
    display_on_web: boolean;
    reserved: number;
    event_reserved: number;
    event_id: number;
    event_name?: string;
    timestamp: string;
    total: number;
    vacant: number;
    timeStampDate: string;
    timeStampTime: string;
}
export interface ExtendedProperties {
    entry_lane_ids: any;
    exit_lane_ids: any;
    last_contact_timestamp: string;
    next_scheduled_reset_limit: any;
    reset_time: any;
    reset_value: string;
}
