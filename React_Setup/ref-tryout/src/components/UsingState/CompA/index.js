import {useState} from 'react'
import './compA.css';

const CompA = () => {
    const [count, setCount] = useState(0);
    const [bgChange, setBgChange] = useState(false);

    const handleIncrement = () => {
        setCount(count + 1);
    }

    const toggleBG = () => {
        setBgChange(!bgChange);

        // if(bgChange === true){
        //     setBgChange(false)
        // }else{
        //     setBgChange(true);
        // }
    }

    console.log('Rendering....')

    return (
        <div>
            <h1>Using State</h1>
            <div className='box1' style={{'background-color': bgChange ? `red`: 'white'}}>
    
            </div>
            <h2>Count: {count}</h2>
            
            <button onClick={toggleBG}>Toggle Background </button>
            <button onClick={handleIncrement}> INCREMENT </button>
        </div>
    )
}

export default CompA;