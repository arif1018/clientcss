import axios from "axios";

const GLACOUNT_API_URL = "api/glAcount/";

const addglAcountData = async (Data) => {
  const response = await axios.post(GLACOUNT_API_URL + "addglAcount/", Data);

  return response.data;
};

const getglAcountData = async () => {
  const response = await axios.get(GLACOUNT_API_URL + "getglAcount/");

  return response.data;
};

const glAccountServices = { addglAcountData, getglAcountData };

export default glAccountServices;
