import {useState} from 'react';

const CompA = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1)
    };

    const handleDecrement = () => {
        setCount(count - 1)

    };

    const handleReset = () => {
        setCount(0)

    };

    const handleIncrementBy10 = () => {
        setCount(count + 10)
    };

    return (
        <div>
            <h1>Count using State and Handler Functions</h1>
            <h3>Count: {count}</h3>
            <div>
                <button onClick={handleIncrement}>Increment</button>
                <button onClick={handleDecrement}>Decrement</button>
                <button onClick={handleReset}>Reset</button>
                <button onClick={handleIncrementBy10}>Increment by 10</button>
            </div>
        </div>
    )
};

export default CompA;