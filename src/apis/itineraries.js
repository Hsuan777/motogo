import req from "./https";
const apiGetItineraries = () => req("get", "/itineraries");
const apiGetItinerary = (id) => req("get", `/itineraries/${id}`);
const apiGetItineraryPhotos = (name) => req("get", `/itineraries/place/${name}`);

export { apiGetItinerary, apiGetItineraries, apiGetItineraryPhotos };
