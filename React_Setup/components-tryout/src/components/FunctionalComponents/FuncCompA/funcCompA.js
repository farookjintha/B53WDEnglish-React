import { useState, useEffect } from "react";
import FuncCompB from "../FuncCompB/funcCompB";

const FuncCompA = () => {
  //   const [value, fnToChangeValue] = useState(initialValue);
  const [count, setCount] = useState(0);
  const [counter, setCounter] = useState(100);
  const [name, setName] = useState("");
  //   const [userDetails, setUserDetails] = useState({});
  //   const [products, setProducts] = useState([]);
  let email = "john@gmail.com";

  const printEmail = () => {
    console.log("Printing Email (Function): ", email);
  };

  const handleIncrementFromChild = (value) => {
    setCount(value);
  };

  const handleClick = () => {
    setCount(count + 1);
  };

  const handleInput = (value) => {
    setName(value);
  };

  const handleCounter = () => {
    setCounter(counter + 1);
  };
  // Type 1: useEffect without dependency Array;
  useEffect(() => {
    console.log("useEffect without dependency: Type 1 is called");
  });

  // Type 2: useEffect with empty dependency array;
  useEffect(() => {
    console.log("useEffect with empty dependency: Type 2 is called");
  }, []);

  // Type 3: useEffect with state in dependency array;
  useEffect(() => {
    console.log("useEffect with state in dependency: Type 3 is called");
  }, [count, counter]);

  return (
    <div>
      <h1>FuncCompA</h1>
      {/* <button onClick={handleClick}>Increment</button> */}
      {/* <button onClick={handleCounter}>Increment Counter</button> */}

      <h2>Name: {name}</h2>
      <h2>Count: {count}</h2>
      <h2>Counter: {counter}</h2>

      <input onChange={(e) => handleInput(e.target.value)} />

      {count < 15 && (
        <FuncCompB
          email={email}
          count={count}
          handleIncrementFromChild={handleIncrementFromChild}
          printEmail={printEmail}
        />
      )}
    </div>
  );
};

export default FuncCompA;

// To maintain state in FC -> useState();

// To handle lifecycle in FC -> useEffect();

// Type 1: useEffect without dependency Array;

// useEffect(() => {

// })

// Type 2: useEffect with empty dependency array;

// useEffect(() => {

// }, [])

// Type 3: useEffect with state in dependency array;

// useEffect(() => {

// }, [state])

// Type 3: useEffect with return statement;

// useEffect(() => {
// return ()
// }, [])
