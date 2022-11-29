import axios from "axios";

const BRANCH_API_URL = "/api/branches/";

const AddBrancheData = async (brData) => {
  const response = await axios.post(BRANCH_API_URL + "addbranch/", brData);
  return response.data;
};

const getAllBranches = async () => {
  const response = await axios.get(BRANCH_API_URL + "getbranch/");
  return response.data;
};

const branchService = { AddBrancheData, getAllBranches };

export default branchService;
