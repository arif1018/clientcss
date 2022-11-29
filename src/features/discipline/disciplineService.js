import axios from "axios"

const DISCIPLINE_API_URL = "/api/discipline/"
const addDisciplineData = async(disciplineData)=>{
        const response = await axios.post(DISCIPLINE_API_URL + 'adddiscipline/', disciplineData)
        return response.data
}

const getDisciplineData = async()=>{
        const response = await axios.get(DISCIPLINE_API_URL + 'getdiscipline/')
        return response.data
}

const disciplineServices = {addDisciplineData, getDisciplineData}

export default disciplineServices