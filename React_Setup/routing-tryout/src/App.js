import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home/home";
import Profile from "./components/Profile/profile";
import Messages from "./components/Messages/messages";

// import { myFunc2, myFunc3 } from "./utils/someFunction";
// import myFunc1 from "./utils/someFunction";
import { useState, useEffect } from "react";

import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/header";

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

  // useEffect(() => {
  //   setProfiles(listOfProfiles);
  // }, []);

  // myFunc1();

  // myFunc2();

  // myFunc3();
  return (
    // <BrowserRouter>
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home profiles={profiles} />} />
        <Route
          path="/profiles/:profileId"
          element={<Profile profiles={profiles} />}
        />
        <Route path="/messages" element={<Messages />} />
      </Routes>
    </div>
    // </BrowserRouter>
  );
}

export default App;

// http://localhost:3000/ -> Home
// http://localhost:3000/profile -> Profile
// http://localhost:3000/messages -> Messages
