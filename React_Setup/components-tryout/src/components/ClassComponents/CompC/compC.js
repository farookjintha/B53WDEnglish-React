import React from "react";

// Class Component
class CompC extends React.Component {
  constructor(props) {
    super(props); // to call the parent's (React.Component) properties.
  }

  render() {
    return (
      <div>
        <h2>CompC</h2>
      </div>
    );
  }
}

export default CompC;
