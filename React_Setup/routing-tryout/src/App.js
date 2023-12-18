import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home/home";
import Profile from "./components/Profile/profile";
import Messages from "./components/Messages/messages";

// import { myFunc2, myFunc3 } from "./utils/someFunction";
// import myFunc1 from "./utils/someFunction";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/header";

function App() {
  let greetings = "Welcome, John!";

  // myFunc1();

  // myFunc2();

  // myFunc3();
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home greetings={greetings} />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/messages" element={<Messages />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

// http://localhost:3000/ -> Home
// http://localhost:3000/profile -> Profile
// http://localhost:3000/messages -> Messages
