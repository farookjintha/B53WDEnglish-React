import { useEffect } from "react";
import FuncCompC from "../FuncCompC/funcCompC";

const FuncCompB = (props) => {
  const { email, printEmail, count, handleIncrementFromChild } = props;
  // console.log("Email in Child: ", props.email);

  // props.printEmail();

  console.log("Email in Child B: ", email);

  printEmail();

  useEffect(() => {
    console.log("useEffect in Child is called - Type 1");

    return () => {
      console.log("useEffect is called: Type 4 (While unmounting)");
    };
  }, []);

  const handleIncrement = () => {
    handleIncrementFromChild(count + 1);
  };
  return (
    <div>
      <h1>FuncCompB</h1>
      <h2>Incrementing from Child: </h2>
      <button onClick={handleIncrement}>Increment</button>
      <h2>Count (in Child): {count}</h2>
      <FuncCompC email={email} printEmail={printEmail} />
      {/* <FuncCompC email={props.email} printEmail={props.printEmail} /> */}
    </div>
  );
};

export default FuncCompB;
