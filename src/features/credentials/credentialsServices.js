import axios from "axios";

const HOLIDAY_API_URL = "api/credentials/";

const addCredentialsData = async (Data) => {
  const response = await axios.post(HOLIDAY_API_URL + "addcredentials/", Data);

  return response.data;
};

const getCredentialsData = async () => {
  const response = await axios.get(HOLIDAY_API_URL + "getcredentials/");

  return response.data;
};

const credentialsServices = { addCredentialsData, getCredentialsData };

export default credentialsServices;
