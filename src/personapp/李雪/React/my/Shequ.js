import React, { Component } from 'react';
import { NavBar, ActionSheet } from 'antd-mobile';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios'
export default class CommunicataDetails extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      todo: [],
      clicked2: true,
      cid: parseInt(''),
      name: '',
      content: '',
      yonghu: [],
      pic: '',
      photo: [],
      time: new Date().toLocaleString()
    };
  }
  
  componentDidMount() {
    var id = this.props.match.params.id;
    let url = `http://139.155.44.190:3005/community/list/` + id;
    let url1 = `http://139.155.44.190:3005/communitytalk/list/`;
    let url3 = `http://139.155.44.190:3005/users/getName`;
    let url4 = `http://139.155.44.190:3005/users/list`;
    axios(url3)
      .then((re) => {
        axios(url4)
          .then((res) => {
            res.data.map(item => {
              if (item.name == re.data.name) {
                this.setState({ pic: 'http://139.155.44.190:3005' + item.pic })
              }
            })
            this.setState({
              yonghu: res.data
            })
            console.log(res.data);
            axios(url)
              .then((res) => {
                // for (var i = 0; i < res.data.length; i++) {
                //   res.data[i].pic = "http://139.155.44.190:3005" + res.data[i].pic
                // }
                this.setState({
                  data: res.data
                })
                var brr = []
                this.state.data.map((item) => {
                  if (item.id == id) {
                    brr.push(item);
                  }
                  this.setState({
                    data: brr
                  })
                })

                axios(url1)
                  .then((res) => {
                    this.setState({
                      todo: res.data.communitytalk
                    })
                    console.log(this.state.todo);
                    var arr = [];
                    this.state.todo.map((item) => {
                      if (item.cid == id) {
                        arr.push(item);
                      }
                      this.setState({
                        todo: arr
                      })
                      console.log(arr);
                    })
                    
                    var qrr = []
                    var a = 0;
                    for (var i = 0; i < this.state.todo.length; i++) {
                      for (var j = 0; j < this.state.yonghu.length; j++) {
                        if (this.state.todo[i].name == this.state.yonghu[j].name) {
                          a = this.state.yonghu[j].pic;
                          break;
                        }
                        else {
                          a = 0;
                        }
                      }
                      if (a != 0) {
                        qrr.push(a)
                      }
                    }
                    this.setState({
                      photo: qrr
                    })
                    
                  })

              })


          })
      })



  }

  getContent = (e) => {
    this.setState({
      cid: this.props.match.params.id,
      content: e.target.value,
    })
  }
  changeColor() {
    this.setState({
      clicked2: !this.state.clicked2
    })
  }
  render() {
    return (
      <div style={{ position: 'relative' }}>
        <NavBar
          style={{ backgroundColor: '#37376F', color: '#fff', position: 'sticky ', top: 0, zIndex: 18, textAlign: 'center', height: '7vh' }}
          leftContent={[
            <Link to="/shequ"><span style={{ fontSize: '17px', color: 'white' }} className="iconfont icon-ico_leftarrow"></span></Link>
          ]}
        >
          <span>详情</span>
        </NavBar>
        <div>
          {
            this.state.data.map((item, idx) =>
              <div style={{ background: '#fff', color: 'black' }}>
                <div style={{ float: "left" }}>
                  <img src={this.state.pic} style={{ height: '7vh', width: '12vw', borderRadius: '50%', marginLeft: 15, marginTop: 9 }} />
                </div>
                <div>
                </div>
                <p style={{ marginLeft: 75, fontSize: '2.5vh', lineHeight: 2.5, marginTop: 6 }}>{item.name}</p>
                <div style={{ marginLeft: 75, color: 'gray', fontSize: '2vw', marginTop: "-5vw" }}>{item.time}</div>
                <p style={{ marginLeft: 25, color: 'black', marginTop: 20, fontSize: 17 }}>{item.content}</p>
                <div style={{ width: '100%', height: '2vh', backgroundColor: 'white' }}>
                </div>
              </div>)
          }
        </div>
        <p style={{ fontSize: 15, marginLeft: 5 }}>评论列表</p>
        <hr style={{ marginTop: -5 }}></hr>
        {
          this.state.todo.map((item, idx) => (
            <div style={{ background: '#fff', color: 'black' }}>
              <div style={{ float: "left" }}>
                <img src={this.state.photo[idx]} style={{ height: '5vh', width: '10vw', borderRadius: '50%', marginLeft: 15, marginTop: 9 }} />
              </div>
              <div style={{ height: '1px', width: '100%' }}></div>
              <p style={{ marginLeft: 70, color: 'gray', fontSize: '1.5vh' }}>{item.name}</p>
              <div style={{ height: '2px', width: '100%' }}></div>
              <div style={{ marginLeft: 70, marginTop: '-10px', fontSize: '2.3vh' }}>{item.content}</div>
              <p style={{ marginLeft: 75, color: 'gray', marginTop: 7, fontSize: '2vw', }}>{item.time}</p>
              <div style={{ width: '100%', height: '2vh', backgroundColor: 'white' }}>
              </div>
            </div>
          )
          )}
      </div>
    );
  }
}

