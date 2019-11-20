import React from "react";
import InsBox from "./InsBox";

class Instructions extends React.Component {
  render() {
    return (
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <p
          style={{
            textAlign: "center",
            fontSize: "30px",
            fontWeight: "500",
            marginBottom: "30px"
          }}
        >
          Instructions
        </p>
        <ul
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap"
          }}
        >
          <InsBox
            title="Enter two Github users"
            icon="iconfont icon-users"
            color="#ffbf74"
          />
          <InsBox title="Battle" icon="iconfont icon-battle" color="#727272" />
          <InsBox
            title="See the winner"
            icon="iconfont icon-winner"
            color="#ffd700"
          />
        </ul>
      </div>
    );
  }
}

export default Instructions;
