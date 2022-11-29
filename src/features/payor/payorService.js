import axios from "axios"

const PAYOR_API_URL = "/api/payor/"

const addPayorData = async(payorData)=>{
        const response = await axios.post(PAYOR_API_URL + 'addpayor/', payorData)
        return response.data
}

const getPayorData = async()=>{
        const response = await axios.get(PAYOR_API_URL + 'getpayor/')
        return response.data
}

const payorServices = {addPayorData,getPayorData}

export default payorServices