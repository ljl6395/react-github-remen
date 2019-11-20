import React from "react";
import PlayerBox from "./PlayerBox";

class Players extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      val1: true,
      val2: true,
      isShow: false,
      url1: "",
      url2: ""
    };
  }

  lightFir = async (val1, url1) => {
    await this.setState({
      val1: val1,
      url1: url1
    });
    console.log(this.state.url1);
    if (this.state.val1 === false && this.state.val2 === false) {
      this.setState({ isShow: true });
    } else {
      this.setState({ isShow: false });
    }
  };

  lightSec = async (val2, url2) => {
    await this.setState({
      val2: val2,
      url2: url2
    });
    console.log(this.state.url2);
    if (this.state.val1 === false && this.state.val2 === false) {
      this.setState({ isShow: true });
    } else {
      this.setState({ isShow: false });
    }
  };

  battleBtn = async () => {
    const { url1, url2 } = this.state;
    if (url1 && url2) {
      // console.log('......battle action')
      await this.props.url1(url1);
      await this.props.url2(url2);
      this.props.clean("true");
      this.props.fetchNow();
    }
  };

  render() {
    const battleBtnStyle = {
      width: "200px",
      height: "35px",
      borderRadius: "5px",
      lineHeight: "35px",
      fontSize: "20px",
      textAlign: "center",
      background: "black",
      color: "white",
      margin: "50px auto",
      cursor: "pointer"
    };
    const battleBtn = (
      <div onClick={this.battleBtn} style={battleBtnStyle}>
        BATTLE
      </div>
    );
    return (
      <div
        style={{ maxWidth: "1100px", margin: "0 auto", marginBottom: "150px" }}
      >
        <p
          style={{
            textAlign: "center",
            fontSize: "30px",
            fontWeight: "500",
            marginBottom: "30px"
          }}
        >
          Players
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "nowrap"
          }}
        >
          <PlayerBox num="One" light={this.lightFir} />
          <div style={{ width: "50px", height: "50px", flexShrink: 0 }} />
          <PlayerBox num="Two" light={this.lightSec} />
        </div>

        {this.state.isShow ? battleBtn : ""}
      </div>
    );
  }
}

export default Players;
