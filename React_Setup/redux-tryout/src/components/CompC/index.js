import {useSelector, useDispatch} from 'react-redux';

const CompC = () => {
    const dispatch = useDispatch(); // dispatching the action
   const countValue =  useSelector((store) => store.count);

   console.log('Count Value: ', countValue)


    return (
        <div>
            <h1>CompC</h1>
            <h2>Count Value: {countValue}</h2>
            <button onClick={() => dispatch({type: 'INCREMENT'})}>INCREMENT</button>
            <button onClick={() => dispatch({type: 'DECREMENT'})}>DECREMENT</button>
            <button onClick={() => dispatch({type: 'RESET'})}>RESET</button>
        </div>
    )
}

export default CompC;