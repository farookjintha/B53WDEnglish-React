 import {useReducer, useEffect} from 'react';
 import { reducer, initialValue } from './utils';
 
 const CompB = () => {
    const [state, dispatch] = useReducer(reducer, initialValue);

    useEffect(() => {
        console.log('Count Value: ', state);
    }, [state])


    return (
        <div>
            <h1>Using Reducer (useReducer Hook)</h1>
            <div>
                <h3>Count: {state}</h3>
                <div>
                <button onClick={() => dispatch({type: 'INCREMENT'})} >Increment</button>
                <button  onClick={() => dispatch({type: 'DECREMENT'})}>Decrement</button>
                <button onClick={() => dispatch({type: 'RESET'})}>Reset</button>
                <button onClick={() => dispatch({type: 'INCREMENT_BY_10'})}>Increment by 10</button>
                <button onClick={() => dispatch({type: 'INCREMENT_BY_100'})}>Increment by 100</button>

            </div>
            </div>
        </div>
    )
 }

 export default CompB