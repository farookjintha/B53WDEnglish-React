let initialValue = 0;

const countReducer = (state = initialValue, action) => {
    switch(action.type){
        case 'INCREMENT' : {
            return state + 1;
        }
        case 'DECREMENT':{
            return state - 1;
        }
        case 'RESET': {
            return 0;
        }
        case 'INCREMENT_BY_10': {
            return state + 10;
        }
        case 'INCREMENT_BY_100': {
            return state + 100;
        }
        default: {
            return state
        }
    }
}

export default countReducer;