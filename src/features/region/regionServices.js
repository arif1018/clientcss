import axios from "axios";

const REGION_API_URL = "api/region/";

const addRegionData = async (Data) => {
  const response = await axios.post(REGION_API_URL + "addregion/", Data);
  return response.data;
};

const getRegionData = async () => {
  const response = await axios.get(REGION_API_URL + "getregion/");
  return response.data;
};

const holidayServices = { addRegionData, getRegionData };

export default holidayServices;
