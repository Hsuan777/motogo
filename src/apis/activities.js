import req from "./https";
const apiGetActivities = () => req("get", "/activities");
const apiGetActivity = (id) => req("get", `/activities/${id}`);

export { apiGetActivities, apiGetActivity };
