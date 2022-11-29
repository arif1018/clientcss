import axios from "axios"

const INVOICEPROFILE_API_URL = "/api/invoiceprofile/"


const addInvoiceProfileData = async(invoiceProfileData)=>{
        const response = await axios.post(INVOICEPROFILE_API_URL + "addinvoiceprofile/",invoiceProfileData)
        return response.data
}

const getInvoiceProfileData = async()=>{
        const response = await axios.get(INVOICEPROFILE_API_URL + "getinvoiceprofile/")
        return response.data
}

const invoiceProfileServices = {addInvoiceProfileData, getInvoiceProfileData}

export default invoiceProfileServices