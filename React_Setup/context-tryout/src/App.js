import logo from "./logo.svg";
import "./App.css";
import CompA from "./components/CompA";

import { createContext, useEffect, useState } from "react";

export const AppContext = createContext(null); // creating the context

let listOfProfiles = [
  {
    id: "ABC123",
    name: "John",
    email: "john@gmail.com",
  },
  {
    id: "XYZ1234",
    name: "Arjun",
    email: "arjun@gmail.com",
  },
  {
    id: "EFG12345",
    name: "Priya",
    email: "priya@gmail.com",
  },
];
function App() {
  const [profiles, setProfiles] = useState(listOfProfiles);

  const addProfile = (profile) => {
    setProfiles([...profiles, profile]);
  };

  useEffect(() => {
    console.log("Updated Profiles: ", profiles);
  }, [profiles]);

  return (
    <AppContext.Provider value={{ profiles, addProfile }}>
      <div className="App">
        <CompA />
      </div>
    </AppContext.Provider>
  );
}

export default App;

// creating the context -> createContext()
// providing the context -> <Context.Provider value={someData}> </Context.Provider>
// consuming the context -> useContext
