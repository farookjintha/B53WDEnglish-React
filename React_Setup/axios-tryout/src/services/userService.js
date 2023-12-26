import axios from 'axios';

// GET

export const getAllUsers = async () => {
    //logic to get all users
    // axios.get();
    try{
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        return response.data
    }catch(error){
        console.log('Error: ', error)
    }
}


// POST

export const addUser = async (data) => {
// logic to add new user
    try{
        const response = await axios.post('https://jsonplaceholder.typicode.com/users', data);
        
        return response;
    }catch(error){
        console.log('Error: ', error)
    }
}



// PUT

export const updateUser = async (userId, data) => {
    // logic to update user
    try{
        const response = await axios.put(`https://jsonplaceholder.typicode.com/users/${userId}`, data);
        return response;
    }catch(error){
        console.log('Error: ', error)
    }
    
}



// DELETE

export const deleteUser = async (userId) => {
    try{
        const response = await axios.delete(`https://jsonplaceholder.typicode.com/users/${userId}`);
        return response;
    }catch(error){
        console.log('Error: ', error)
    }
}
