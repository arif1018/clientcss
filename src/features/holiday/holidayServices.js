import axios from "axios";

const HOLIDAY_API_URL = "api/holiday/";

const addholidaData = async (userData) => {
  const response = await axios.post(HOLIDAY_API_URL + "addholiday/", userData);

  return response.data;
};

const getholidaData = async () => {
  const response = await axios.get(HOLIDAY_API_URL + "getholiday/");

  return response.data;
};

const holidayServices = { addholidaData, getholidaData };

export default holidayServices;
