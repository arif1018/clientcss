import axios from "axios"

const DROPDOWN_API_URL = "/api/dropdown/"


const addDropDownData = async(dropDownData)=>{
        const response = await axios.post(DROPDOWN_API_URL + "addDropDown/" , dropDownData)
        return response.data
}

const getDropDownData = async()=>{
        const response = await axios.get(DROPDOWN_API_URL + "getdropdown/")
        return response.data
}

const dropDownServices = {addDropDownData, getDropDownData}

export default dropDownServices