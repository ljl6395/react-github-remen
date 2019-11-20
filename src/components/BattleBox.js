import React from "react";

class BattleBox extends React.Component {
  render() {
    const boxStyle = {
      height: "460px",
      width: "290px",
      background: "#ebebeb",
      marginBottom: "15px",
      paddingTop: "40px",
      borderRadius: "5px"
    };
    const { item, score } = this.props;
    const winEle = (
      <p style={{ textAlign: "center", fontSize: "30px" }}>Winner</p>
    );
    const loserEle = (
      <p style={{ textAlign: "center", fontSize: "30px" }}>Loser</p>
    );
    return (
      <div>
        <li style={boxStyle}>
          {item.public_repos - score > 0 ? winEle : loserEle}

          <div
            style={{
              width: "150px",
              height: "150px",
              margin: "0 auto",
              marginTop: "30px"
            }}
          >
            <img
              style={{ width: "150px", height: "150px" }}
              src={item.avatar_url}
              alt=""
            />
          </div>
          <p style={{ textAlign: "center", marginTop: "20px" }}>
            Score {item.public_repos}
          </p>
          <h3 style={{ textAlign: "center", marginTop: "15px" }}>
            <a href={item.html_url} style={{ color: "#bd3251" }}>
              {item.name}
            </a>
          </h3>
          <ul style={{ marginLeft: "20px", marginTop: "15px" }}>
            <li style={{ marginBottom: "5px" }}>
              <span
                className="iconfont icon-name"
                style={{ color: "#fec077", fontSize: "20px" }}
              />{" "}
              {item.name}
            </li>
            <li style={{ marginBottom: "5px" }}>
              <span
                className="iconfont icon-forks"
                style={{ color: "#ffd700", fontSize: "20px" }}
              />{" "}
              {item.location}
            </li>
            <li style={{ marginBottom: "5px" }}>
              <span
                className="iconfont icon-stars"
                style={{ color: "#86c5f4", fontSize: "20px" }}
              />{" "}
              {item.followers} followers
            </li>
            <li style={{ marginBottom: "5px" }}>
              <span
                className="iconfont icon-issues"
                style={{ color: "#f09fa6", fontSize: "20px" }}
              />{" "}
              {item.following} following
            </li>
            <li style={{ marginBottom: "5px" }}>
              <span
                className="iconfont icon-issues"
                style={{ color: "#f09fa6", fontSize: "20px" }}
              />{" "}
              {item.public_repos} repositories
            </li>
          </ul>
        </li>
      </div>
    );
  }
}

export default BattleBox;
