import React from "react";

// Top
class Top extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          marginTop: "50px",
          fontSize: "18px"
        }}
      >
        <span
          style={{ marginRight: "10px", cursor: "pointer" }}
          onClick={this.props.showPop}
          className="pop"
        >
          Popular
        </span>
        <span
          onClick={this.props.showBat}
          style={{ cursor: "pointer" }}
          className="bat"
        >
          Battle
        </span>
      </div>
    );
  }
}

export default Top;
