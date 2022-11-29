import axios from "axios"

const MAILINGLABEL_API_URL = "api/mailinglabel/"


const addMailingLabelData = async(Data)=>{
    const response = await axios.post(MAILINGLABEL_API_URL + "addmailinglabel/", Data)

    return response.data

}


const getMailingLabelData = async()=>{
    const response = await axios.get(MAILINGLABEL_API_URL + "getmailinglabel/")

    return response.data

}

const mailingLabelServices = { addMailingLabelData ,getMailingLabelData}

export default mailingLabelServices
