import { describe, test } from 'vitest';
import { Garage } from '../src/garage';

test("Garage class", () => {
	describe("Refresh works", async () => {
		const g = new Garage("Garage A");
		console.log(g.total);
		await g.refresh();
		console.log(g.total);
	});
})
