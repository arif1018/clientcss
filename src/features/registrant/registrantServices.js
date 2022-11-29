import axios from "axios";

const REGISTRANT_API_URL = "api/registrant/";

const addRegistrantData = async (Data) => {
  const response = await axios.post(REGISTRANT_API_URL + "addregistrant/", Data);
  return response.data;
};

const getRegistrantData = async () => {
  const response = await axios.get(REGISTRANT_API_URL + "getregistrant/");
  return response.data;
};

const registrantServices = { addRegistrantData ,getRegistrantData};

export default registrantServices;
