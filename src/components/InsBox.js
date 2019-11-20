import React from "react";

class InsBox extends React.Component {
  render() {
    const iconStyle = {
      width: "250px",
      height: "250px",
      margin: "0 auto",
      fontSize: "160px",
      textAlign: "center",
      lineHeight: "250px",
      background: "#ebebeb",
      borderRadius: "5px",
      color: this.props.color
    };
    return (
      <li style={{ width: "290px", height: "400px" }}>
        <p
          style={{
            textAlign: "center",
            fontSize: "24px",
            marginBottom: "15px"
          }}
        >
          {this.props.title}
        </p>
        <div className={this.props.icon} style={iconStyle} />
      </li>
    );
  }
}

export default InsBox;
