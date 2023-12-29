import {useSelector, useDispatch} from 'react-redux';
import { increment, decrement, reset } from '../../store/slices/counterSlice';
import { increment_product } from '../../store/slices/cartSlice';


const CompC = () => {

    const dispatch = useDispatch();
    const countObj = useSelector(store => store.count);

    console.log('Count Value in CompC: ', countObj)


    return (
        <div>
            <h1>CompC</h1>
            <h2>Count Value: {countObj.count}</h2>
            <button onClick={() => dispatch(increment())}>INCREMENT</button>
            <button onClick={() => dispatch(decrement())}>DECREMENT</button>
            <button onClick={() => dispatch(reset())}>RESET</button>


            {/* Cart Operation */}
            {/* <button onClick={() => dispatch(increment_product({productId: 123}))}>INCREMENT</button> */}
        </div>
    )
}

export default CompC;