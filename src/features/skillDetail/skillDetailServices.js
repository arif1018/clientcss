import axios from "axios";

const SKILLDETAIL_API_URL = "api/skilldetail/";

const addSkillDetailData = async (Data) => {
  const response = await axios.post(SKILLDETAIL_API_URL + "addskilldetail/", Data);

  return response.data;
};


const getSkillDetailData = async () => {
  const response = await axios.get(SKILLDETAIL_API_URL + "getskilldetail/");

  return response.data;
};

const skillDetailServices = { addSkillDetailData ,getSkillDetailData};

export default skillDetailServices;
