let initialValue = [];
const cartReducer = (state = initialValue, action) => {
    switch(action.type){
        case 'ADD_ITEM_TO_CART' : {
            //logic
        }
        case 'REMOVE_ITEM_FROM_CART':{
            //logic
        }
        case 'EMPTY_CART': {
            //logic
        }
        default: {
            return state
        }
    }
}

export default cartReducer;