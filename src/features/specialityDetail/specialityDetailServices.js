import axios from "axios";

const SPECIALITYDETAIL_API_URL = "api/specialitydetail/";

const addSpecialityDetailData = async (Data) => {
  const response = await axios.post(SPECIALITYDETAIL_API_URL + "addspecialitydetail/", Data);

  return response.data;
};


const getSpecialityDetailData = async () => {
  const response = await axios.get(SPECIALITYDETAIL_API_URL + "getspecialitydetail/");

  return response.data;
};

const specialityDetailServices = { addSpecialityDetailData,getSpecialityDetailData };

export default specialityDetailServices;
