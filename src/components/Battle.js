import React from "react";
import axios from "axios";
import Instructions from "./Instructions";
import Players from "./Players";
import BattleBox from "./BattleBox";

class Battle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url1: "",
      url2: "",
      clean: false,
      item1: "",
      item2: "",
      scoreFir: 0,
      scoreSec: 0
    };
  }

  getUrl1 = async val => {
    await this.setState({ url1: val });
    console.log(this.state.url1);
  };

  getUrl2 = async val => {
    await this.setState({ url2: val });
    console.log(this.state.url2);
  };

  isClean = val => {
    this.setState({ clean: val });
  };

  resetBtn = () => {
    this.setState({
      url1: "",
      url2: "",
      clean: false,
      item1: "",
      item2: "",
      scoreFir: 0,
      scoreSec: 0
    });
  };

  fetch = async () => {
    const { url1, url2 } = this.state;
    try {
      const res = await axios.get(url1);
      console.log("=======", res.data);
      await this.setState({
        item1: res.data,
        scoreFir: res.data.public_repos
      });
      console.log(this.state.item1, this.state.scoreFir);
    } catch (e) {
      console.log(e);
    }

    try {
      const res = await axios.get(url2);
      console.log("=======", res.data);
      await this.setState({
        item2: res.data,
        scoreSec: res.data.public_repos
      });
      console.log(this.state.item2, this.state.scoreSec);
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    const viewOne = (
      <div>
        <Instructions />
        <Players
          url1={this.getUrl1}
          url2={this.getUrl2}
          clean={this.isClean}
          fetchNow={this.fetch}
        />
      </div>
    );

    const resetBtnStyle = {
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
    const viewTwo = (
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "700px",
            margin: "0 auto"
          }}
        >
          <BattleBox item={this.state.item1} score={this.state.scoreSec} />
          <BattleBox item={this.state.item2} score={this.state.scoreFir} />
        </div>
        <div onClick={this.resetBtn} style={resetBtnStyle}>
          RESET
        </div>
      </div>
    );
    return <div>{this.state.clean ? viewTwo : viewOne}</div>;
  }
}

export default Battle;
