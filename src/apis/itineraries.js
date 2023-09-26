import req from "./https";
// Map 相關資訊 API
const apiGetItineraries = () => req("get", "/itineraries");

export { apiGetItineraries };
