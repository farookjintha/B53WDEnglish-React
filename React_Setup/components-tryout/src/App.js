import logo from "./logo.svg";
import "./App.css";
import CompA from "./components/ClassComponents/CompA/compA";
import FuncCompA from "./components/FunctionalComponents/FuncCompA/funcCompA";

function App() {
  let myName = "John";
  return (
    <div className="App">
      <h1>Components Tryout</h1>
      <FuncCompA />
      {/* <CompA myName={myName} /> */}
    </div>
  );
}

export default App;
