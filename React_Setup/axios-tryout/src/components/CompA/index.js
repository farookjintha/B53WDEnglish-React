import {useEffect, useState} from 'react';
import { addUser, deleteUser, getAllUsers, updateUser } from '../../services/userService';
import './compA.css'

const CompA = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        gettingAllUsers();
    }, []);


    const gettingAllUsers = async () => {
        try{
            const allUsers  = await getAllUsers();
            console.log('Users:', allUsers);
            setUsers(allUsers);
        }catch(error){
            console.log('Error while Getting All Users')
        }
    }

    const addingNewUser = async () => {
        try{
            const newUser = {
                "name": "XYZ",
                "username": "XYZ",
                "email": "xyzzzz@melissa.tv",
                "address": {
                    "street": "XYZ Plains",
                    "suite": "Suite 879",
                    "city": "Wisokyburgh",
                    "zipcode": "10566-7771",
                    "geo": {
                        "lat": "-43.9409",
                        "lng": "-34.4118"
                    }
                },
                "phone": "012-692-6593 x09125",
                "website": "anastasia.xyzz",
                "company": {
                    "name": "xyz-Crist",
                    "catchPhrase": "Zyz didactic contingency",
                    "bs": "synergize scalable supply-chains"
                }
            }
            const response  = await addUser(newUser);
            console.log('Adding User Response: ', response)
        }catch(error){
            console.log('Error while adding user')
        }
    }

    const updatingExistingUser = async() => {
        try{
            const updatingUser = {
                "id": 2,
                "name": "Ervin Howell ABCCCCC",
                "username": "Antonette",
                "email": "Shanna@melissa.tv",
                "address": {
                    "street": "Victor Plains",
                    "suite": "Suite 879",
                    "city": "Wisokyburgh",
                    "zipcode": "90566-7771",
                    "geo": {
                        "lat": "-43.9509",
                        "lng": "-34.4618"
                    }
                },
                "phone": "010-692-6593 x09125",
                "website": "anastasia.net",
                "company": {
                    "name": "Deckow-Crist",
                    "catchPhrase": "Proactive didactic contingency",
                    "bs": "synergize scalable supply-chains"
                }
            }
            const response  = await updateUser(2, updatingUser);
            console.log('Updating User Response: ', response)
        }catch(error){
            console.log('Error while updating user')
        }
    }

    const deletingExistingUser = async() => {
        try{
            const response  = await deleteUser(2);
            console.log('Deleting User Response:', response);
        }catch(error){
            console.log('Error while deleting user')
        }
    }
    
    return (
        <div>
            <h2>USERS</h2>

            <button onClick={addingNewUser}>Add new user</button>
            <button onClick={updatingExistingUser}>Update user</button>
            <button onClick={deletingExistingUser}>Delete User</button>


            <div className='users-container'>
                {
                    users.length && users.map((user, index) => (
                        <div className='user-container' key={index}>
                            <h3>Name: {user.name}</h3>
                            <h3>Email: {user.email}</h3>
                        </div>
                    ))
                }
            </div>

        
        </div>
    )
}

export default CompA;