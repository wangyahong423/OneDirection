import { NavBar, SearchBar, ActionSheet, WingBlank } from 'antd-mobile';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
let wrapProps;
if (isIPhone) {
  wrapProps = {
    onTouchStart: e => e.preventDefault(),
  };
}
export default class Tiezi extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      list: [],
      arr: [],
      color: [],
      yonghu: [],
      pic: '',
      name: ''
    };
  }
  componentDidMount() {
    let url = `http://139.155.44.190:3005/learn/list`;
    let url2 = `http://139.155.44.190:3005/learnlike/list`;
    let url3 = `http://139.155.44.190:3005/users/getName`;
    let url4 = `http://139.155.44.190:3005/users/list`;
    let url5 = `http://139.155.44.190:3005/learntalk/list`;

    axios(url3)
      .then((res) => {
        this.setState({
          name: res.data.name
        });
        axios(url4)
          .then((res) => {
            this.setState({
              arr: res.data
            });
            this.state.arr.forEach((item) => {
              if (item.name == this.state.name) {
                this.setState({
                  pic: 'http://139.155.44.190:3005' + item.pic,
                  head: 'http://139.155.44.190:3005/head/' + item.head,
                  level: item.level
                })
              }
            })
            axios(url2)
              .then((res) => {
                this.setState({
                  likeNum: res.data
                });
                var likeList = [];
                for (var i = 0; i < res.data.length; i++) {
                  if (res.data[i].name == this.state.name) {
                    likeList.push(res.data[i]);
                  }
                }
                this.setState({
                  like: likeList
                });
                axios(url5)
                  .then((res) => {
                    this.setState({
                      comNum: res.data
                    });
                    axios(url)
                      .then((res) => {
                        var brr = [];
                        console.log('res:', res.data);
                        res.data.forEach((item) => {
                          if (item.name == this.state.name) {
                            item.like = false;
                            for (var j = 0; j < this.state.like.length; j++) {
                              if (item.id == this.state.like[j].lid) {
                                item.like = true;
                                break;
                              }
                              else {
                                item.like = false;
                              }
                            }
                            var likeNum = 0;
                            for (var z = 0; z < this.state.likeNum.length; z++) {
                              if (item.id == this.state.likeNum[z].lid) {
                                likeNum++;
                              }
                            }
                            item.likeNum = likeNum;
                            var comNum = 0;
                            for (var z = 0; z < this.state.comNum.length; z++) {
                              if (item.id == this.state.comNum[z].lid) {
                                comNum++;
                              }
                            }
                            item.comNum = comNum;
                            brr.push(item);
                          }
                        });
                        this.setState({
                          data: brr
                        })
                        console.log('data:', this.state.data);
                      });
                  });
              });
          });
      });

  }

  like = (idx) => {
    var crr = '';
    if (this.state.data[idx].like == false) {
      crr = this.state.data;
      crr[idx].like = true;
      crr[idx].likeNum++;
      this.setState({
        data: crr
      })
      let url1 = `http://139.155.44.190:3005/learnlike/add?lid=${this.state.data[idx].id}&name=${this.state.name}&lname=${this.state.name}`;
      axios(url1)
        .then((res) => {
          console.log(url1);
          let url2 = `http://139.155.44.190:3005/users/list`;
          axios(url2)
            .then((res) => {
              this.setState({
                lvlist: res.data
              });
              this.state.lvlist.map((item) => {
                if (item.name == this.state.name) {
                  this.setState({
                    lvnum: item.lvnum + 1
                  })
                  console.log('lvnum:', this.state.lvnum);
                  let url = `http://139.155.44.190:3005/users/changeLvnum?lvnum=${this.state.lvnum}&name=${this.state.name}`;
                  axios(url)
                    .then((res) => {
                    });
                  if (this.state.lvnum == 15) {
                    alert("恭喜你提升为二级用户，快去解锁新的头像吧！")
                    window.location.reload();
                  }
                  else if (this.state.lvnum == 30) {
                    alert("恭喜你提升为三级用户，快去解锁新的头像吧！")
                    window.location.reload();
                  }
                  else if (this.state.lvnum == 45) {
                    alert("恭喜你提升为四级用户，快去解锁新的头像吧！")
                    window.location.reload();
                  }
                  else if (this.state.lvnum == 60) {
                    alert("恭喜你提升为五级用户，快去解锁新的头像吧！")
                    window.location.reload();
                  }
                  else if (this.state.lvnum == 75) {
                    alert("恭喜你提升为六级用户，快去解锁新的头像吧！")
                    window.location.reload();
                  }
                  else if (this.state.lvnum == 90) {
                    alert("恭喜你提升为七级用户，快去解锁新的头像吧！")
                    window.location.reload();
                  }
                  else if (this.state.lvnum == 105) {
                    alert("恭喜你提升为八级用户，快去解锁新的头像吧！")
                    window.location.reload();
                  }
                  else if (this.state.lvnum == 120) {
                    alert("恭喜你提升为九级用户，快去解锁新的头像吧！")
                    window.location.reload();
                  }
                  else if (this.state.lvnum == 135) {
                    alert("恭喜你提升为十级用户，快去解锁新的头像吧！")
                    window.location.reload();
                  }
                }
              })
              let url11 = `http://139.155.44.190:3005/users/list`;
              axios(url11)
                .then((res) => {
                  this.setState({
                    todo: res.data
                  })
                  this.state.todo.map((item) => {
                    if (item.name == this.state.name) {
                      this.setState({
                        lvnum: item.lvnum//修改
                      })
                      var num = Math.floor(this.state.lvnum / 15);
                      let url3 = `http://139.155.44.190:3005/users/list`;
                      axios(url3)
                        .then((res) => {
                          this.setState({
                            lvlist: res.data
                          })
                          this.state.lvlist.map((item) => {
                            if (item.name == this.state.name) {
                              if (num < 10) {
                                this.setState({
                                  level: num + 1
                                })
                              }
                              else {
                                this.setState({
                                  level: 10
                                })
                              }
                              let url3 = `http://139.155.44.190:3005/users/changeLv?level=${this.state.level}&name=${this.state.name}`;
                              axios(url3)
                                .then((res) => {
                                  if (res.data.ok) {
                                  } else {
                                    alert(res.data.msg);
                                  }
                                });
                            }
                          })
                        })
                    }
                  })
                });
            })
        })
      console.log('data:', this.state.data);
    } else if (this.state.data[idx].like == true) {
      crr = this.state.data;
      crr[idx].like = false;
      crr[idx].likeNum--;
      this.setState({
        data: crr
      })
      let url2 = `http://139.155.44.190:3005/learnlike/delete?lid=${this.state.data[idx].id}&name=${this.state.name}`
      axios(url2)
        .then((res) => {
          console.log(url2);
        });
    }
  }

  change = (id) => {
    let url10 = `http://139.155.44.190:3005/learn/change?cnum=${0}&lid=${this.state.data[id].id}`
    axios(url10)
      .then((res) => {
        console.log(url10);
      })

  }

  changeLike = (id) => {
    var crr = this.state.data;
      crr[id].likenum=0;
      this.setState({
        data: crr
      })
    let url10 = `http://139.155.44.190:3005/learn/changeLike?likenum=${0}&lid=${this.state.data[id].id}`
    axios(url10)
      .then((res) => {
        console.log(url10);
      })
  }

  delete = (idx) => {
    confirmAlert({
      title: 'Confirm to submit',
      message: '你确定要删除吗？',
      buttons: [
        {
          label: '确定',
          onClick: this.opntion1.bind(this, (this.state.data[idx].id))
        },
        {
          label: '取消',
          onClick: this.opntion2
        }
      ]
    });
  };

  opntion1 = (id) => {
    let url = `http://139.155.44.190:3005/learn/deleteLearn?id=${id}`;
    let url1 = `http://139.155.44.190:3005/learntalk/deleteAll?lid=${id}`;
    let url2 = `http://139.155.44.190:3005/learnlike/deleteAll?lid=${id}`;
    axios(url1)
      .then((res) => {
        axios(url2)
          .then((res) => {
            axios(url)
              .then((res) => {
                alert(res.data.msg);
                window.location.reload();
              });
          });
      });
  }
  opntion2 = () => {

  }

  render() {
    return (
      <div>
        <NavBar style={{ backgroundColor: '#37376F', color: '#fff', position: 'sticky ', top: '0', zIndex: 10, textAlign: 'center', height: '7vh' }}
          leftContent={[
            <Link to="/My"><span style={{ fontSize: '17px', color: 'white' }} className="iconfont icon-ico_leftarrow"></span></Link>
          ]}>
          社区动态</NavBar>
        <div style={{ width: '100vw', backgroundColor: '#EFEFF4' }}>
          <div>
            {
              this.state.data.map((item, idx) =>
                <div style={{ background: '#fff', color: 'black', marginBottom: '1vh' }}>
                  <div style={{ float: "left", flex: 'row', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                    <img src={this.state.pic} style={{ height: '7vh', width: '12vw', borderRadius: '50%', marginLeft: 15, marginTop: 5 }} />
                    {
                      item.head != 'http://139.155.44.190:3005/head/null'
                        ? <img src={this.state.head} style={{ height: '10vh', width: '15vw', borderRadius: '50%', position: 'absolute', left: 4, top: -3 }} />
                        : null
                    }
                  </div>
                  <div>
                    <span style={{ fontSize: '2.5vh', lineHeight: 2.5, marginLeft: '1vw' }}>{item.name}</span>
                    {
                      item.level > 10
                        ? <span style={{ fontSize: '2.5vh', marginLeft: '2vw', color: 'red' }}>Lv.{item.level}</span>
                        : <span style={{ position: 'relative' }}>
                          <img src={`http://139.155.44.190:3005/level/lv${this.state.level}.png`} style={{ width: '8vw', height: '5vw', marginLeft: '2vw', position: 'absolute', top: -4 }} />
                        </span>
                    }
                    {this.state.name == item.name
                      ? <span onClick={this.delete.bind(this, (idx))} style={{ float: 'right', marginRight: '2vw', color: '#999999', fontSize: 30 }}>×</span>
                      : <span style={{ float: 'right', marginRight: '2vw', color: '#fff', fontSize: 30 }}>×</span>
                    }
                  </div>
                  <div style={{ marginLeft: 76, color: 'gray', fontSize: '2vw' }}>{item.time}</div>
                  <Link to={`/xuexiyouknow/${item.id}`}>
                    <p style={{ marginLeft: 25, color: 'black', marginTop: 20, fontSize: '17px', width: '87vw', overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{item.content}</p>
                  </Link>
                  <div style={{ marginTop: 20,position:'relative'}}>
                    <Link to={`/xuexiyouknow/${item.id}`}>
                      {/* <div style={{position:'relative'}}> */}
                      <sapn className="iconfont icon-pinglun" style={{ marginLeft: '27%', fontSize: '24px', color: 'black' }}></sapn>
                      <span style={{ marginLeft: '3%', color: '#000000' }}>{item.comNum}</span>
                      {item.cnum > 0
                        ? <div onClick={this.change.bind(this, (idx))} style={{ color: '#fff', marginLeft: '2vw', height: 20, width: 20, borderRadius: 10, backgroundColor: 'red', textAlign: 'center',position:'absolute',top:'0.5vh',left:'35vw'}}>+{item.cnum}</div>
                        : null
                      }
                      {/* </div> */}
                    </Link>
                    <sapn className="iconfont icon-dianzan" onClick={this.like.bind(this, (idx))} style={item.like ? { color: 'red', fontSize: '24px', marginLeft: '26%' } : { fontSize: '24px', marginLeft: '26%' }}></sapn>
                    <span style={{ marginLeft: '-10%' }}>{item.likeNum}</span>
                    {item.likenum > 0
                      ? <div onClick={this.changeLike.bind(this, (idx))} style={{ color: '#fff', marginLeft: '2vw', height: 20, width: 20, borderRadius: 10, backgroundColor: 'red', textAlign: 'center' ,position:'absolute',top:'0.5vh',left:'70vw'}}>+{item.likenum}</div>
                      : null
                    }
                  </div>
                  <div style={{ width: '100%', height: '2vh', backgroundColor: 'white' }}>
                  </div>
                </div>
              )}
          </div>
        </div>
      </div>
    )
  }
}
