import { getParkingData } from "./request";
import { Root as Response } from "./response-type";

type GarageName =
	| "Garage A"
	| "Garage B"
	| "Garage C"
	| "Garage D"
	| "Garage H"
	| "Garage I";

export class Garage {
	public name: GarageName;
	public occupied: number | undefined;
	public total: number | undefined;

	private fullRequest: Response | undefined;

	constructor(name: GarageName) {
		this.name = name;
	}

	public async refresh(): Promise<void> {
		this.fullRequest = await getParkingData();

		for (const element of this.fullRequest) {
			if (element.location.name === this.name) {
				this.occupied = element.location.counts.occupied;
				this.total = element.location.counts.total;
			}
		}
	}
}
