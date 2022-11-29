import axios from "axios";

const PAYROLL_API_URL = "/api/payroll/";

const addPayRollData = async (Data) => {
  const response = await axios.post(PAYROLL_API_URL + "addpayroll/", Data);
  return response.data;
};

const getPayRollData = async () => {
  const response = await axios.get(PAYROLL_API_URL + "getpayroll/");
  return response.data;
};

const payrollServices = { addPayRollData, getPayRollData };

export default payrollServices;
