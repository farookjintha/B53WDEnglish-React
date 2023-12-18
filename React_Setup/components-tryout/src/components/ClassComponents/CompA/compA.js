import React from "react";
import CompB from "../CompB/compB";

// Class Component
class CompA extends React.Component {
  constructor(props) {
    console.log("Constructor is called - CompA");
    super(props); // to call the parent's (React.Component) properties.

    //State variables
    this.state = {
      count: 0,
      name: "",
    };
  }

  // COMPONENT LIFECYCLE

  componentDidMount = () => {
    console.log("Component Did Mount is called... - CompA");
  };

  componentDidUpdate = () => {
    console.log("Component Did Update is called... - CompA");
  };

  componentWillUnmount = () => {
    console.log("Component Will Unmount is called...  - CompA");
  };

  handleIncrement = () => {
    // logic to increment counter;
    this.setState({ ...this.state, count: this.state.count + 1 });
    // console.log("State: ", this.state);
  };

  handleDecrement = () => {
    this.setState({ ...this.state, count: this.state.count - 1 });
  };

  handleReset = () => {
    this.setState({ ...this.state, count: 0 });
  };

  handleInput = (value) => {
    this.setState({ ...this.state, name: value });
    // console.log("State: ", this.state);
  };

  render() {
    console.log("Render is called - CompA");
    return (
      <div>
        <h2>CompA</h2>
        <div className="counter-container">
          <h3>Counter in Class Component A</h3>
          <h4>Count : {this.state.count}</h4>
          <button onClick={() => this.handleIncrement()}>Increment</button>
          <button onClick={() => this.handleDecrement()}>Decrement</button>
          <button onClick={() => this.handleReset()}>Reset</button>

          <h4>Name: {this.state.name}</h4>
          <input
            placeholder="Enter name"
            onChange={(e) => this.handleInput(e.target.value)}
          />
        </div>
        {/* Count is sent as props to CompB */}
        {/* <CompB count={this.state.count} /> */}
        {this.state.count < 15 && <CompB count={this.state.count} />}
      </div>
    );
  }
}

export default CompA;

// myObj = {
//   message: "",
//   author: "",
// };

// myObj = {
//   ...myObj,
//   message: "All is well",
// };

// myObj = {
//   ...myObj,
//   author: "Mr.XYZ",
// };

// console.log(myObj);
