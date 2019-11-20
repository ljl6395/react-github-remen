import React from "react";
import $ from "jquery";
// 导航栏
class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.navLi = [
      {
        title: "All",
        src:
          "https://api.github.com/search/repositories?q=stars:%3E1&sort=stars&order=desc&type=Repositories"
      },
      {
        title: "JavaScript",
        src:
          "https://api.github.com/search/repositories?q=stars:%3E1+language:javascript&sort=stars&order=desc&type=Repositories"
      },
      {
        title: "Ruby",
        src:
          "https://api.github.com/search/repositories?q=stars:%3E1+language:ruby&sort=stars&order=desc&type=Repositories"
      },
      {
        title: "Java",
        src:
          "https://api.github.com/search/repositories?q=stars:%3E1+language:java&sort=stars&order=desc&type=Repositories"
      },
      {
        title: "CSS",
        src:
          "https://api.github.com/search/repositories?q=stars:%3E1+language:css&sort=stars&order=desc&type=Repositories"
      },
      {
        title: "Python",
        src:
          "https://api.github.com/search/repositories?q=stars:%3E1+language:python&sort=stars&order=desc&type=Repositories"
      }
    ];
    this.state = {};
  }

  componentDidMount() {
    $(".navbar")
      .find("li:first a")
      .addClass("red");
  }

  handleClick = async e => {
    this.props.getData(e.target.name);
    console.log("我是哪个元素", e.target.parentNode);
    $(".navbar")
      .find("a")
      .removeClass("red");
    e.target.classList.add("red");
  };

  render() {
    const navbarStyle = {
      display: "flex",
      justifyContent: "center",
      marginTop: "30px"
    };
    const navbarLiStyle = {
      padding: "0 5px",
      cursor: "pointer",
      fontSize: "20px"
    };

    const navList = this.navLi.map(item => (
      <li style={navbarLiStyle} key={item.title}>
        <a name={item.src} onClick={this.handleClick}>
          {item.title}
        </a>
      </li>
    ));

    return (
      <ul className="navbar" style={navbarStyle}>
        {navList}
      </ul>
    );
  }
}

export default Navbar;
