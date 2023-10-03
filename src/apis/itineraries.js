import req from "./https";
const apiGetItineraries = () => req("get", "/itineraries");
const apiGetItinerary = (id) => req("get", `/itineraries/${id}`);

export { apiGetItinerary, apiGetItineraries };
