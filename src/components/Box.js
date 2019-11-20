import React from "react";
// 卡片
class Box extends React.Component {
  render() {
    const { msg, index } = this.props;

    const boxStyle = {
      height: "460px",
      width: "290px",
      background: "#ebebeb",
      marginBottom: "15px",
      borderRadius: "5px"
    };
    return (
      <li style={boxStyle}>
        <p style={{ textAlign: "center", marginTop: "50px", fontSize: "36px" }}>
          #{index + 1}
        </p>
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
            src={msg.owner.avatar_url}
            alt=""
          />
        </div>
        <h3 style={{ textAlign: "center", marginTop: "15px" }}>
          <a href={msg.html_url} style={{ color: "#bd3251" }}>
            {msg.name}
          </a>
        </h3>
        <ul style={{ marginLeft: "20px", marginTop: "15px" }}>
          <li style={{ marginBottom: "5px" }}>
            <span
              className="iconfont icon-name"
              style={{ color: "#fec077", fontSize: "20px" }}
            />{" "}
            {msg.name}
          </li>
          <li style={{ marginBottom: "5px" }}>
            <span
              className="iconfont icon-forks"
              style={{ color: "#ffd700", fontSize: "20px" }}
            />{" "}
            {msg.forks_count}
          </li>
          <li style={{ marginBottom: "5px" }}>
            <span
              className="iconfont icon-stars"
              style={{ color: "#86c5f4", fontSize: "20px" }}
            />{" "}
            {msg.stargazers_count}
          </li>
          <li style={{ marginBottom: "5px" }}>
            <span
              className="iconfont icon-issues"
              style={{ color: "#f09fa6", fontSize: "20px" }}
            />{" "}
            {msg.open_issues_count}
          </li>
        </ul>
      </li>
    );
  }
}

export default Box;
