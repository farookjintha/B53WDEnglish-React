import {useEffect, useState} from 'react';
import { addUser, deleteUser, getAllUsers, updateUser } from '../../services/userService';
import './compA.css'

const CompA = () => {

    const [users, setUsers] = useState([]);
    const [newUser, setNewUser] = useState({});

    // {
    //     "name": "Priya",
    //     "email": "priya@gmail.com",
    //     "mobileNumber": "+912334567890",
    //     "bloodGroup": "O+ve",
    //     "profession": "Architect"
    // }

    useEffect(() => {
        gettingAllUsers();
    }, []);


    const gettingAllUsers = async () => {
        try{
            const allUsers  = await getAllUsers();
            console.log('Users:', allUsers);
            setUsers(allUsers.data);
        }catch(error){
            console.log('Error while Getting All Users')
        }
    }

    const handleChangeInNewUser = (value) => { 
        return setNewUser(user => {
           return {...user, ...value}
        })
    }



    const handleUserRegistration = async (e) => {
        try{
            e.preventDefault();

            const {name, email, mobileNumber, profession, bloodGroup} = newUser;

            if(name && email && mobileNumber && profession && bloodGroup){
                const response  = await addUser(newUser);
                if(response.data){
                    gettingAllUsers();
                    setNewUser({
                        name: '',
                        email: '',
                        mobileNumber: '',
                        profession: '',
                        bloodGroup: ''
                    })
                }
            }else{
                console.log('All fields are required!')
            }

        }catch(error){

        }
    }

    // const addingNewUser = async () => {
    //     try{
    //         const newUser = {
    //             "name": "XYZ",
    //             "username": "XYZ",
    //             "email": "xyzzzz@melissa.tv",
    //             "address": {
    //                 "street": "XYZ Plains",
    //                 "suite": "Suite 879",
    //                 "city": "Wisokyburgh",
    //                 "zipcode": "10566-7771",
    //                 "geo": {
    //                     "lat": "-43.9409",
    //                     "lng": "-34.4118"
    //                 }
    //             },
    //             "phone": "012-692-6593 x09125",
    //             "website": "anastasia.xyzz",
    //             "company": {
    //                 "name": "xyz-Crist",
    //                 "catchPhrase": "Zyz didactic contingency",
    //                 "bs": "synergize scalable supply-chains"
    //             }
    //         }
    //         const response  = await addUser(newUser);
    //         console.log('Adding User Response: ', response)
    //     }catch(error){
    //         console.log('Error while adding user')
    //     }
    // }

    // const updatingExistingUser = async() => {
    //     try{
    //         const updatingUser = {
    //             "id": 2,
    //             "name": "Ervin Howell ABCCCCC",
    //             "username": "Antonette",
    //             "email": "Shanna@melissa.tv",
    //             "address": {
    //                 "street": "Victor Plains",
    //                 "suite": "Suite 879",
    //                 "city": "Wisokyburgh",
    //                 "zipcode": "90566-7771",
    //                 "geo": {
    //                     "lat": "-43.9509",
    //                     "lng": "-34.4618"
    //                 }
    //             },
    //             "phone": "010-692-6593 x09125",
    //             "website": "anastasia.net",
    //             "company": {
    //                 "name": "Deckow-Crist",
    //                 "catchPhrase": "Proactive didactic contingency",
    //                 "bs": "synergize scalable supply-chains"
    //             }
    //         }
    //         const response  = await updateUser(2, updatingUser);
    //         console.log('Updating User Response: ', response)
    //     }catch(error){
    //         console.log('Error while updating user')
    //     }
    // }

    // const deletingExistingUser = async() => {
    //     try{
    //         const response  = await deleteUser(2);
    //         console.log('Deleting User Response:', response);
    //     }catch(error){
    //         console.log('Error while deleting user')
    //     }
    // }
    
    return (
        <div>
            <h2>USERS</h2>

            {/* <button onClick={addingNewUser}>Add new user</button>
            <button onClick={updatingExistingUser}>Update user</button>
            <button onClick={deletingExistingUser}>Delete User</button> */}

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

        {/* {
        "name": "Priya",
        "email": "priya@gmail.com",
        "mobileNumber": "+912334567890",
        "bloodGroup": "O+ve",
        "profession": "Architect"
    } */}

            <div className='registration-container'>
                <h1>User Registration</h1>
                <div className='form-container'>
                    <form className='form' onSubmit={(e) => handleUserRegistration(e)}>
                        <div>
                            <label>Name: </label>
                            <input type='text' value={newUser.name} placeholder='Enter name' onChange={(e) => handleChangeInNewUser({name: e.target.value})} />
                        </div>
                        <div>
                            <label>Email: </label>
                            <input type='email' value={newUser.email} placeholder='Enter email' onChange={(e) => handleChangeInNewUser({email: e.target.value})}  />
                        </div>
                        <div>
                            <label>Mobile Number: </label>
                            <input type='text' value={newUser.mobileNumber} placeholder='Enter mobile number' onChange={(e) => handleChangeInNewUser({mobileNumber: e.target.value})}  />
                        </div>
                        <div>
                            <label>Blood Group: </label>
                            <input type='text' value={newUser.bloodGroup} placeholder='Enter blood group' onChange={(e) => handleChangeInNewUser({bloodGroup: e.target.value})}  />
                        </div>
                        <div>
                            <label>Profession: </label>
                            <input type='text' value={newUser.profession} placeholder='Enter profession' onChange={(e) => handleChangeInNewUser({profession: e.target.value})}  />
                        </div>
                        <div>
                            
                            <button type='submit'>Register</button>
                        </div>
                    </form>
                </div>
            </div>

        
        </div>
    )
}

export default CompA;