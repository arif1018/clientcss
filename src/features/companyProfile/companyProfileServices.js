import axios from "axios"

const COMPANYPROFILE_API_URL = "/api/company/"


const getCompanyData = async()=>{
    const response = await axios.get(COMPANYPROFILE_API_URL + "getcompany/")

    return response.data
}

const addCompanyData = async(Data)=>{
    
    const response = await axios.post(COMPANYPROFILE_API_URL + "addcompany/",Data)

    return response.data
}

const companyProfileServices = { getCompanyData, addCompanyData }

export default companyProfileServices
