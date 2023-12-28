let initialValue = [];

const userReducer = (state = initialValue, action) => {
    switch(action.type){
        case 'ADD_USER' : {
            //logic
        }
        case 'REMOVE_USER':{
            //logic
        }
        case 'UPDATE_USER_BY_ID': {
            //logic
        }
        default: {
            return state
        }
    }
}

export default userReducer;