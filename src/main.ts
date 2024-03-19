exports.getParkingInfo = async () => {
  const response = await fetch(
    "https://secure.parking.ucf.edu/GarageCounter/GetOccupancy",
    {
      method: "GET",
    }
  );
  const body = JSON.parse(await response.text());
  return body;
};
