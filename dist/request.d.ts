import { Root } from "./response-type";
/**
 *
 * Wraps the UCF Parking API and delivers a raw JSON representation
 * of what is stored.
 *
 * ## Disclaimer
 * KnightPark cannot vouch for the reliability of the UCF API, and sometimes
 * things about it just don't make very much sense at all.
 *
 */
export declare const getParkingData: () => Promise<Root>;
