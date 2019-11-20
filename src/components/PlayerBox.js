import React from "react";

class PlayerBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submitStyle: {
        flex: 1,
        height: "38px",
        marginLeft: "10px",
        borderRadius: "2px",
        display: "inline-block",
        background: "#ddd",
        color: "#bbb",
        lineHeight: "38px",
        textAlign: "center",
        cursor: "pointer"
      },
      isShow: true,
      msg: "",
      string: "",
      imgSrc: "",
      url: ""
    };
  }

  handleSubmit = async () => {
    await this.setState({
      msg: this.state.string
    });
    if (this.state.msg) {
      this.setState({
        isShow: false
      });
    }
    this.setState({
      imgSrc: `https://github.com/${this.state.msg}.png?size=200`,
      url: `https://api.github.com/users/${this.state.msg}?client_id=YOUR_CLIENT_ID&client_secret=YOUR_SECRET_ID`
    });

    this.props.light(this.state.isShow, this.state.url);
  };

  handleX = async () => {
    await this.setState({
      isShow: true,
      string: "",
      msg: "",
      submitStyle: {
        flex: 1,
        height: "38px",
        marginLeft: "10px",
        borderRadius: "2px",
        display: "inline-block",
        background: "#ddd",
        color: "#bbb",
        lineHeight: "38px",
        textAlign: "center",
        cursor: "pointer"
      }
    });

    this.props.light(this.state.isShow);
    this.setState({ url: "" });
  };

  handleChange(e) {
    if (e.target.value) {
      this.setState({
        submitStyle: {
          flex: 1,
          height: "38px",
          marginLeft: "10px",
          borderRadius: "2px",
          display: "inline-block",
          background: "black",
          color: "white",
          lineHeight: "38px",
          textAlign: "center",
          cursor: "pointer"
        }
      });
    } else {
      this.setState({
        submitStyle: {
          flex: 1,
          height: "38px",
          marginLeft: "10px",
          borderRadius: "2px",
          display: "inline-block",
          background: "#ddd",
          color: "#bbb",
          lineHeight: "38px",
          textAlign: "center",
          cursor: "pointer"
        }
      });
    }
    this.setState({ string: e.target.value });
    // console.log(e.target.value);
  }

  render() {
    const inputEle = (
      <div style={{ display: "flex", flexWrap: "nowrap" }}>
        <input
          type="text"
          placeholder="gitHub username"
          style={{
            flex: 4,
            height: "36px",
            border: "1px solid #ddd",
            borderRadius: "2px",
            fontSize: "18px",
            lineHeight: "36px",
            paddingLeft: "5px"
          }}
          onChange={this.handleChange.bind(this)}
        />
        <div style={this.state.submitStyle} onClick={this.handleSubmit}>
          SUBMIT
        </div>
      </div>
    );
    const styleX = {
      height: "25px",
      width: "25px",
      borderRadius: "calc(50%)",
      background: "red",
      color: "white",
      position: "absolute",
      right: "8px",
      top: "22.5px",
      textAlign: "center",
      lineHeight: "25px",
      cursor: "pointer"
    };
    const finalEle = (
      <div
        style={{
          // width: "525px",
          height: "70px",
          background: "#ddd",
          borderRadius: "5px",
          position: "relative",
          flex: 1
        }}
      >
        <img
          style={{
            height: "50px",
            width: "50px",
            borderRadius: "25px",
            marginTop: "10px",
            marginLeft: "10px"
          }}
          src={this.state.imgSrc}
          alt=""
        />
        <span
          style={{
            color: "red",
            fontSize: "20px",
            display: "inline-block",
            position: "absolute",
            top: "22.5px",
            left: "70px"
          }}
        >
          {this.state.msg}
        </span>
        <div onClick={this.handleX} style={styleX}>
          <strong>X</strong>
        </div>
      </div>
    );
    return (
      <div style={{ flex: 1 }}>
        <p style={{ fontSize: "24px", marginBottom: "5px" }}>
          Player {this.props.num}
        </p>
        {this.state.isShow ? inputEle : finalEle}
      </div>
    );
  }
}

export default PlayerBox;
