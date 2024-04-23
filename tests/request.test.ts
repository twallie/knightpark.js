import { test } from 'vitest';
import { getParkingData } from '../src/request';

test('Can make a request', async () => {
	const request = await getParkingData();
})
