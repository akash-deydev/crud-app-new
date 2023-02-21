import axios from "axios";

const API_URL = "http://localhost:3002/users"

export const addUser = async (data) => {
    try {
        return await axios.post(API_URL, data)
    } catch (error) {
        console.log("Error while calling the add user api" + error.message)
    }

}

export const getUsers = async () => {
    try {
        return await axios.get(API_URL)
    } catch (error) {
        console.log("Error while calling get users api" + error.message)
    }

}

export const getUser = async (id) => {
    try {
        return await axios.get(`${API_URL}/${id}`)
    } catch (error) {
        console.log("Error while calling get user api" + error.message)
    }
}

export const editUser = async (userId, data) => {
    try {
        await axios.put(`${API_URL}/${userId}`, data)
    } catch (error) {
        console.log("Error while calling edit user api" + error.message)
    }
}

export const deleteUser = async (id) => {
    try {
        return await axios.delete(`${API_URL}/${id}`)
    } catch (error) {
        console.log("Error while calling the Delete user api" + error.message)
    }
}