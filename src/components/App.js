import { hot } from "react-hot-loader/root";
import React from "react";
import $ from "jquery";
import Header from "./Header";
import Top from "./Top";
import Navbar from "./Navbar";
import ContentBox from "./ContentBox";
import Battle from "./Battle";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      src: "",
      isShow: true,
      loading: false
    };
  }

  componentDidMount() {
    $(".pop").addClass("topStyle");
  }

  handleGetData = val => {
    // console.log(val)
    this.setState({ src: val });
  };

  showPop = () => {
    this.setState({ isShow: true });
    $(".bat").removeClass("topStyle");
    $(".pop").addClass("topStyle");
  };

  showBat = () => {
    this.setState({ isShow: false });
    $(".pop").removeClass("topStyle");
    $(".bat").addClass("topStyle");
  };

  render() {
    const element1 = (
      <div>
        <Header>
          <Top showPop={this.showPop} showBat={this.showBat} />
          {this.state.loading ? "" : <Navbar getData={this.handleGetData} />}
        </Header>
        {this.state.loading ? (
          <div className="load-style">Loading...</div>
        ) : (
          <ContentBox getSrc={this.state.src} />
        )}
      </div>
    );
    const element2 = (
      <div>
        <Header>
          <Top showPop={this.showPop} showBat={this.showBat} />
        </Header>
        {this.state.loading ? (
          <div className="load-style">Loading...</div>
        ) : (
          <Battle />
        )}
      </div>
    );
    return <div>{this.state.isShow ? element1 : element2}</div>;
  }
}

export default hot(App);
