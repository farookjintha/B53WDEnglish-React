import { useEffect } from "react";

const FuncCompB = () => {
  useEffect(() => {
    console.log("useEffect in Child is called - Type 1");

    return () => {
      console.log("useEffect is called: Type 4 (While unmounting)");
    };
  }, []);
  return (
    <div>
      <h1>FuncCompB</h1>
    </div>
  );
};

export default FuncCompB;
