import axios from "axios"

const PAIDLEAVE_API_URL = "/api/paidleave/"


const addPaidLeaveData = async(userData)=>{
    const response = await axios.post(PAIDLEAVE_API_URL + "addpaidleave/", userData)

    return response.data

}


const getPaidLeaveData = async()=>{
    const response = await axios.get(PAIDLEAVE_API_URL + "getpaidleave/")

    return response.data

}

const paidLeaveServices = { addPaidLeaveData ,getPaidLeaveData}

export default paidLeaveServices
