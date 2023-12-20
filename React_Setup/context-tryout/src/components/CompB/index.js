import CompC from "../CompC";
import { AppContext } from "../../App";
import { useContext } from "react";

const CompB = () => {
  const appData = useContext(AppContext);

  console.log("App Data in CompB: ", appData);
  return (
    <div>
      CompB
      <CompC />
    </div>
  );
};

export default CompB;
