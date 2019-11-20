import React from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroller";
import Box from "./Box";
// 内容
class ContentBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url:
        "https://api.github.com/search/repositories?q=stars:%3E1&sort=stars&order=desc&type=Repositories",
      data: [],
      loading: false,
      clean: false,
      pageNum: 1,
      total: 0
      // hasMore: true,
    };
  }

  componentDidMount() {
    this.fetch();
  }

  async componentDidUpdate(prevProps) {
    if (prevProps.getSrc !== this.props.getSrc) {
      const { getSrc } = this.props;
      await this.setState({
        url: getSrc,
        clean: true
      });
      // console.log(this.state.url)
      this.fetch();
    }
  }

  fetch = async () => {
    const { url } = this.state;
    await this.setState({
      loading: true
    });

    try {
      const res = await axios.get(url);
      console.log("res", res.data);
      this.setState({
        data: res.data.items,
        total: res.total_count
      });
    } catch (e) {
      console.log(e);
    }

    this.setState({
      loading: false,
      clean: false,
      pageNum: 1
    });
  };

  getMore = async () => {
    if (this.state.total === this.state.data.length) {
      return;
    }
    const { pageNum } = this.state;
    console.log(pageNum);
    await this.setState(() => ({
      loading: true,
      pageNum: pageNum + 1
    }));

    await this.setState(() => ({
      url: `${this.state.url}&page=${this.state.pageNum}`
    }));

    console.log("pageNum", this.state.pageNum);
    // console.log('get more',this.state.url)

    try {
      const res = await axios.get(this.state.url);
      console.log("get more", this.state.url);
      console.log(typeof res.data.items);
      this.setState({
        data: this.state.data.concat(res.data.items)
      });
    } catch (e) {
      console.log(e);
    }

    // console.log(this.state.data)
    this.setState({
      loading: false
    });
  };

  render() {
    const { loading, data, clean } = this.state;
    // console.log('loading',loading)
    // <li key={item.id}>{item.name}</li>
    const list = data.map((item, key) => (
      <Box key={item.id} msg={item} index={key} />
    ));
    const contentStyle = {
      display: "flex",
      flexWrap: "wrap",
      flexDirection: "row",
      flex: 1,
      justifyContent: "space-around",
      maxWidth: "1200px",
      margin: "0 auto"
    };
    return (
      <div>
        <InfiniteScroll
          initialLoad={false}
          pageStart={0}
          loadMore={this.getMore}
          hasMore={!loading}
          loader={null}
        >
          {clean ? "" : <div style={contentStyle}>{list}</div>}
          {loading && <div className="load-style">Loading...</div>}
        </InfiniteScroll>
      </div>
    );
  }
}

export default ContentBox;
