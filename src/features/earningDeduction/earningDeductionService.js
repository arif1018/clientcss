import axios from "axios"

const EARNINGDEDUCTION_API_URL = "/api/earningdeduction/"
const addEarningDeductionData = async(earningDeductionData)=>{
        const response = await axios.post(EARNINGDEDUCTION_API_URL + 'addearningdeduction/', earningDeductionData)
        return response.data
}

const getEarningDeductionData = async()=>{
        const response = await axios.get(EARNINGDEDUCTION_API_URL + 'getearningdeduction/')
        return response.data
}

const earningDeductionServices = {addEarningDeductionData, getEarningDeductionData}

export default earningDeductionServices