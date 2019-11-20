import React from "react";
// 头部
class Header extends React.Component {
  render() {
    return (
      <div style={{ overflow: "hidden", height: "150px" }}>
        {this.props.children}
      </div>
    );
  }
}

export default Header;
