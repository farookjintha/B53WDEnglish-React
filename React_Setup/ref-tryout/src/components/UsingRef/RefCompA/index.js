import {useRef} from 'react';
import './refCompA.css'

const RefCompA = () => {
    const countRef = useRef(0);
    const boxRef = useRef(null);


    const handleIncrement = () => {
        // logic to update ref value;
        countRef.current = countRef.current + 1;
        console.log('currentRef: ', countRef.current);
    }

    const toggleBG = () => {
        if(boxRef.current.style.backgroundColor === 'red'){
            boxRef.current.style.backgroundColor = 'white'
        }else{
            boxRef.current.style.backgroundColor = 'red'
        }
    }

    console.log('Rendering (useRef)...')
    return (
        <div>
            <h1>Using Ref</h1>
            <div className='box1' ref={boxRef}>
    
            </div>

            <button onClick={toggleBG}>Toggle Background </button>
            <button onClick={handleIncrement}> INCREMENT </button>
        </div>
    )
}

export default RefCompA;