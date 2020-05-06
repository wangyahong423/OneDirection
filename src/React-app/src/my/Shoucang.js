import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { NavBar } from 'antd-mobile';
import axios from 'axios';

export default class Shoucang extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      name: ''
    }
  }
  componentDidMount() {
    let url1 = `http://139.155.44.190:3005/users/getName`;
    let url = `http://139.155.44.190:3005/collect/list`;

    axios(url1)
      .then((res) => {
        this.setState({
          name: res.data.name
        })
        axios(url)
          .then((res) => {
            this.setState({
              data: res.data
            })
            var arr = [];

            this.state.data.map((item) => {
              if (item.name == this.state.name) {
                arr.push(item);
              }
              this.setState({
                data: arr
              })
            })
          })
      })


  }
  delFile = (filepath) => {
    let url1 = `http://139.155.44.190:3005/collect/delete?filepath=${filepath}&name=${this.state.name}`;
    axios(url1)
      .then((res) => {
      })
    window.location.reload();
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
        <div style={{ marginTop: "7vh" }}>
          {
            this.state.data.map((item) => (
              <div>
                <div className="data1">
                  <div style={{ float: "left" }}>
                    <div className="iconfont icon-wenjian"></div>
                    <div className="shoucangFont" style={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap"
                    }}>
                      <span>{item.filepath}</span><br />
                    </div>
                  </div>
                  <button style={{ height: "7vw", width: '10vw', display: "inline", margin: "3vh 1vw 0 3vw", float: "left", backgroundColor: "#437DFF", border: "none", borderRadius: "1vw", color: '#fff', fontSize: "1vh" }} onClick={this.delFile.bind(this, (item.filepath))}>取消<br />收藏</button>
                  <button style={{ height: "7vw", width: '10vw', display: "inline", margin: "3vh 0 0 0", float: "left", backgroundColor: "#437DFF", border: "none", borderRadius: "1vw", fontSize: "1vh" }}>
                    <a href={"http://139.155.44.190:3005/files/" + item.filepath} style={{ color: 'white', fontSize: "3vw" }}>下载</a> </button>
                </div>
              </div>
            ))
          }
        </div>
      </div >
    );
  }
}
