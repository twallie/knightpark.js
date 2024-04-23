"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request_1 = require("./request");
const createParking = (garage) => {
    return {
        name: garage,
        get occupied() {
            const request = (0, request_1.getParkingData)();
            for (const element of request) {
                if (element.location.name === this.name) {
                    return element.location.counts.occupied;
                }
            }
        },
    };
};
