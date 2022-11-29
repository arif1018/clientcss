import axios from "axios";

const BG_API_URL = "api/burderngroup/";

const addburdernGroupData = async (Data) => {
  const response = await axios.post(BG_API_URL + "addburderngroup/", Data);

  return response.data;
};

const getburdernGroupData = async () => {
  const response = await axios.get(BG_API_URL + "getburderngroup/");

  return response.data;
};

const burderGroupServices = { addburdernGroupData, getburdernGroupData };

export default burderGroupServices;
