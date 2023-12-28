let initialValue = [];

const productReducer = (state = initialValue, action) => {
    switch(action.type){
        case 'ADD_PRODUCT' : {
            //logic
        }
        case 'REMOVE_PRODUCT':{
            //logic
        }
        case 'UPDATE_PRODUCT_BY_ID': {
            //logic
        }
        default: {
            return state
        }
    }
}

export default productReducer;