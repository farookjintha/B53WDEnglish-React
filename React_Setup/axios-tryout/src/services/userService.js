import axios from 'axios';

const BASE_URL = 'http://localhost:8001/v1';

// GET

export const getAllUsers = async () => {
    //logic to get all users
    // axios.get();
    try{
        const response = await axios.get(`${BASE_URL}/users`);
        return response.data
    }catch(error){
        console.log('Error: ', error)
    }
}


// POST

export const addUser = async (data) => {
// logic to add new user
    try{
        const response = await axios.post(`${BASE_URL}/users`, data);
        
        return response;
    }catch(error){
        console.log('Error: ', error)
    }
}



// PUT

export const updateUser = async (userId, data) => {
    // logic to update user
    try{
        const response = await axios.put(`${BASE_URL}/users/${userId}`, data);
        return response;
    }catch(error){
        console.log('Error: ', error)
    }
    
}



// DELETE

export const deleteUser = async (userId) => {
    try{
        const response = await axios.delete(`${BASE_URL}/users/${userId}`);
        return response;
    }catch(error){
        console.log('Error: ', error)
    }
}
