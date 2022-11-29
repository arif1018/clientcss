import axios from "axios"

const REGISTER_API_URL = "/api/clients/"


const getAllCleints = async () => {
    const response = await axios.get(REGISTER_API_URL + "getallclients/")

    return response.data
}

const addClient = async (clientData) => {

    const response = await axios.post(REGISTER_API_URL + "addclient/", clientData)

    return response.data
}

const deleteClient = async (clientData) => {
    const response = await axios.delete(REGISTER_API_URL + "updateclient/" + clientData)
    return response.data

}


const getSingleClient = async (clientID) => {
    const response = await axios.get(`/api/clients/clientdata/${clientID.id}`)
    
    return response.data
}

const updateClient = async (clientID, clientData) => {

    const response = await axios.put(`/api/clients/updateclient/${clientID}`, clientData)

    return response.data

}

const clientsService = { getAllCleints, addClient, deleteClient, getSingleClient, updateClient }

export default clientsService
