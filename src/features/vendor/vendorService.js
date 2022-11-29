import axios from "axios";

const VENDOR_API_URL = "/api/vendor/";

const addVendorData = async (vendorData) => {
  const response = await axios.post(VENDOR_API_URL + "addvendor/", vendorData);
  return response.data;
};

const getVendorData = async () => {
  const response = await axios.get(VENDOR_API_URL + "getvendor/");
  return response.data;
};

const vendorServices = { addVendorData, getVendorData };

export default vendorServices;
