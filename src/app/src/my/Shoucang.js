import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { NavBar, Icon, Tabs, WingBlank, SearchBar } from 'antd-mobile';
import axios from 'axios';

export default class Shoucang extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    }
  }
  componentDidMount() {
    let url = `http://localhost:3005/collect/list`;
    axios(url)
      .then((res) => {
        this.setState({
          data: res.data
        })
      })
  }
  delFile = (filepath, name) => {
    let url1 = `http://localhost:3005/collect/delete?filepath=${name}&name=李四`;
    axios(url1)
      .then((res) => {
        if (res.err) {
          alert('收藏失败');
        } else {
          console.log(1);
          alert('收藏成功');
        }
      })
    console.log(this.state.name);

  }
  render() {
    return (
      <div style={{ position: 'relative' }}>
        <NavBar
          style={{ backgroundColor: '#37376F', color: '#fff', position: 'fixed ', width: "100vw", top: '0', zIndex: 10, textAlign: 'center', height: '7vh' }}
          leftContent={[
            <Link to="/my"><span style={{ fontSize: '17px', color: 'white' }} className="iconfont icon-ico_leftarrow"></span></Link>
          ]}
        >
          <span>我的收藏</span>
        </NavBar>
        <div style={{ position: 'fixed', top: '0', width: "100vw" }}>
          <WingBlank><div className="sub-title"></div></WingBlank>
          <SearchBar placeholder="搜索" maxLength={8} />
        </div>
        <div style={{ marginTop: "13vh" }}>
          {
            this.state.data.map((item) => (
              <div>
                <div className="data1">
                  <div style={{ float: "left" }}>
                    <div className="iconfont icon-wenjian"></div>
                    <div className="shoucangFont">
                      <span>{item.filepath}</span><br />
                    </div>
                  </div>
                  <span className="iconfont icon-collection" style={{ fontSize: "25px" }} onClick={this.delFile.bind(this, (item.filepath, item.name))}></span><br />
                </div>
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}
