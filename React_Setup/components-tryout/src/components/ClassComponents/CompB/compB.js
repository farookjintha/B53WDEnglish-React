import React from "react";
import CompC from "../CompC/compC";

// Class Component
class CompB extends React.Component {
  constructor(props) {
    super(props); // to call the parent's (React.Component) properties.

    this.state = {
      childCount: 0,
    };
  }

  componentDidUpdate = () => {
    console.log("Component Did Update is called - CompB in Child Component");
  };

  componentWillUnmount = () => {
    console.log("Component Will Unmount is called - CompB");
  };

  handleIncrement = () => {
    this.setState({ ...this.state, childCount: this.state.childCount + 1 });
  };

  render() {
    console.log("Render is called in CompB");

    return (
      <div>
        <h2>CompB</h2>
        <button onClick={() => this.handleIncrement()}>
          Incrment in Child
        </button>
        <h4>Child Count: {this.state.childCount}</h4>
        <CompC />
      </div>
    );
  }
}

export default CompB;
