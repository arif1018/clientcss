import axios from "axios";

const SALESTAXCODE_API_URL = "api/salestaxcode/";

const addSalesTaxCodeData = async (Data) => {
  const response = await axios.post(SALESTAXCODE_API_URL + "addsalestaxcode/", Data);

  return response.data;
};

const getSalesTaxCodeData = async () => {
  const response = await axios.get(SALESTAXCODE_API_URL + "getsalestaxcode/");

  return response.data;
};

const salesTaxCodeServices = { addSalesTaxCodeData, getSalesTaxCodeData };

export default salesTaxCodeServices;
