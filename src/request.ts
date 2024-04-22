
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
export const getParkingData = async () => {
	const response = await fetch("https://secure.parking.ucf.edu/GarageCounter/GetOccupancy");	

	const body = await response.json();
	console.log(body);
}
