import React, { Component } from 'react';
import { NavBar, ActionSheet } from 'antd-mobile';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

export default class CommunicataDetails extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      todo: [],
      clicked2: true,
      lid: parseInt(''),
      name: '',
      content: '',
      yonghu: [],
      pic: '',
      photo: [],
      time: new Date().toLocaleString()
    };
  }
  dataList = [
    { url: 'cTTayShKtEIdQVEMuiWt', title: '朋友圈' },
    { url: 'umnHwvEgSyQtXlZjNJTt', title: '微信好友' },
    { url: 'SxpunpETIwdxNjcJamwB', title: 'QQ' },
  ].map(obj => ({
    icon: <img src={`https://gw.alipayobjects.com/zos/rmsportal/${obj.url}.png`} alt={obj.title} style={{ width: 36 }} />,
    title: obj.title,
  }));
  addItem = () => {
    let url = `http://139.155.44.190:3005/learntalk/add?lid=${this.state.lid}
    &name=${this.state.name}&content=${this.state.content}&time=${this.state.time}`;
    axios(url)
      .then((res) => {
        if (res.data.ok) {
          alert(res.data.msg);
          window.location.reload();
        } else {
          alert(res.data.msg);
        }
      })
  }
  componentDidMount() {
    var id = this.props.match.params.id;
    let url = `http://139.155.44.190:3005/learn/list/` + id;
    let url1 = `http://139.155.44.190:3005/learntalk/list/`;
    let url3 = `http://139.155.44.190:3005/users/getName`;
    let url4 = `http://139.155.44.190:3005/users/list`;
    axios(url3)
      .then((re) => {
        axios(url4)
          .then((res) => {
            res.data.map(item => {
              if (item.name == re.data.name) {
                this.setState({
                  pic: 'http://139.155.44.190:3005' + item.pic,
                  head: 'http://139.155.44.190:3005/head/' + item.head,
                  level:item.level
                })
              }
              item.pic = 'http://139.155.44.190:3005' + item.pic
              item.head = 'http://139.155.44.190:3005/head/' + item.head
            })
            this.setState({
              yonghu: res.data
            })
            console.log(res.data);
            console.log('yonghu:', this.state.yonghu);
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
                      todo: res.data
                    })
                    var arr = [];
                    this.state.todo.map((item) => {
                      if (item.lid == id) {
                        arr.push(item);
                      }
                      this.setState({
                        todo: arr
                      })
                    })
                    console.log('todo:', this.state.todo);
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
                    console.log('photo:', this.state.photo);

                    this.state.todo.forEach(item => {
                      for (var i = 0; i < this.state.yonghu.length; i++) {
                        if (item.name == this.state.yonghu[i].name) {
                          item.level = this.state.yonghu[i].level;
                          item.head = this.state.yonghu[i].head;
                          break;
                        }
                      }
                      this.setState({
                        todo: this.state.todo
                      })
                    })
                    console.log('head:', this.state.todo)
                    this.setState({
                      todo: this.state.todo
                    })
                  })

              })


          })
      })

  }

  getContent = (e) => {
    this.setState({
      lid: this.props.match.params.id,
      content: e.target.value,
    })
  }
  changeColor() {
    this.setState({
      clicked2: !this.state.clicked2
    })
  }

  delete = (idx) => {
    confirmAlert({
      title: 'Confirm to submit',
      message: '你确定要删除吗？',
      buttons: [
        {
          label: '确定',
          onClick: this.opntion1.bind(this, (this.state.todo[idx].id))
        },
        {
          label: '取消',
          onClick: this.opntion2
        }
      ]
    });
  };

  opntion1 = (id) => {
    let url = `http://139.155.44.190:3005/learntalk/delete?id=${id}`;
    axios(url)
      .then((res) => {
        alert(res.data.msg);
        window.location.reload();
      });
  }
  opntion2 = () => {

  }

  render() {
    return (
      <div style={{ position: 'relative' }}>
        <NavBar
          style={{ backgroundColor: '#37376F', color: '#fff', position: 'sticky ', top: 0, zIndex: 18, textAlign: 'center', height: '7vh' }}
          leftContent={[
            <Link to="/tiezi"><span style={{ fontSize: '17px', color: 'white' }} className="iconfont icon-ico_leftarrow"></span></Link>
          ]}
        >
          <span>详情</span>
        </NavBar>
        <div>
          {
            this.state.data.map((item, idx) =>
              <div style={{ background: '#fff', color: 'black' }}>
                <div style={{ float: "left", position: "relative" }}>
                  <img src={this.state.pic} style={{ height: '7vh', width: '12vw', borderRadius: '50%', marginLeft: 15, marginTop: 9 }} />
                  {
                    this.state.head != 'http://139.155.44.190:3005/head/null'
                      ? <img src={this.state.head} style={{ height: '10vh', width: '15vw', borderRadius: '50%', position: 'absolute', left: 6, top: -3 }} />
                      : null
                  }
                </div>
                <div>
                </div>
                <p style={{ marginLeft: 95, fontSize: '2.5vh', lineHeight: 2.5, marginTop: 6 }}>{item.name}</p>
                {
                  this.state.level > 10
                    ? <span style={{ fontSize: '2.5vh', marginLeft: '2vw', color: 'red' }}>Lv.{this.state.level}</span>
                    : <span style={{ position: 'relative' }}>
                      <img src={`http://139.155.44.190:3005/level/lv${this.state.level}.png`} style={{ width: '8vw', height: '5vw', marginLeft: '11vw', position: 'absolute', top: -52 }} />
                    </span>
                }
                <div style={{ marginLeft: 95, color: 'gray', fontSize: '2vw', marginTop: "-5vw" }}>{item.time}</div>
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
            <div style={{ background: '#fff', color: 'black', marginBottom: '1vh' }}>
              <div style={{ float: "left", position: 'relative' }}>
                <img src={this.state.photo[idx]} style={{ height: '5vh', width: '10vw', borderRadius: '50%', marginLeft: 15, marginTop: 9 }} />
                {
                  item.head != 'http://139.155.44.190:3005/head/null'
                    ? <img src={item.head} style={{ height: '8vh', width: '13vw', borderRadius: '50%', position: 'absolute', left: 6, top: -3 }} />
                    : null
                }
              </div>
              <div style={{ height: '1px', width: '100%' }}></div>
              {
                item.name == this.state.data[0].name
                  ? <span style={{ fontSize: '2.5vh', lineHeight: 2.5, marginLeft: '3vw', color: 'red' }}>{item.name}</span>
                  : <span style={{ fontSize: '2.5vh', lineHeight: 2.5, marginLeft: '3vw' }}>{item.name}</span>
              }
              {
                item.level > 10
                  ? <span style={{ fontSize: '2.5vh', marginLeft: '2vw', color: 'red' }}>Lv.{item.level}</span>
                  : <span style={{ position: 'relative' }}>
                    <img src={`http://139.155.44.190:3005/level/lv${item.level}.png`} style={{ width: '8vw', height: '5vw', marginLeft: '2vw', position: 'absolute', top: -4 }} />
                  </span>
              }
              <span onClick={this.delete.bind(this, (idx))} style={{ float: 'right', marginRight: '2vw', color: '#999999', fontSize: 30 }}>×</span>
              <div style={{ height: '2px', width: '100%' }}></div>
              <div style={{ marginLeft: 85, marginTop: '-10px', fontSize: '2.3vh' }}>{item.content}</div>
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

