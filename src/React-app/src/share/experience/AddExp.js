import React, { Component } from 'react';
import { NavBar } from 'antd-mobile';
import { List, TextareaItem } from 'antd-mobile';
import { createForm } from 'rc-form';
import axios from "axios";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
class AddExp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
      name: '',
      todo: [],
      time: new Date().toLocaleString()
    }
  }
  componentDidMount() {
    let url3 = `http://139.155.44.190:3005/users/getName`;
    let url1 = `http://139.155.44.190:3005/users/list`;
    axios(url3)
      .then((res) => {
        this.setState({
          name: res.data.name
        })
        axios(url1)
          .then((res) => {
            res.data.forEach((item) => {
              if (item.name == this.state.name) {
                this.setState({
                  card: item.card
                })
              }
            })
            console.log('card:', this.state.card)
          })
      })
  }
  handleRegister = () => {
    if (this.state.content) {
      let url = `http://139.155.44.190:3005/experience/add?content=${this.state.content}&name=${this.state.name}&time=${this.state.time}&card=${this.state.card}`;
      axios(url)
        .then((res) => {
          if (res.data.ok) {
            alert(res.data.msg);
            let url2 = `http://139.155.44.190:3005/users/list`;
            axios(url2)
              .then((res) => {
                console.log('lvlist:', res.data);
                console.log('name:', this.state.name);
                res.data.map((item) => {
                  console.log('itemname:', item.name);
                  console.log('lvnum:', item.lvnum)
                  var lvnum = 0;
                  if (item.name == this.state.name) {
                    lvnum = item.lvnum + 2;
                    console.log(item.name);
                    console.log('num:', lvnum);
                    let url3 = `http://139.155.44.190:3005/users/changeLvnum?lvnum=${lvnum}&name=${this.state.name}`;
                    axios(url3)
                      .then((res) => {
                        if (res.data.ok) {
                        } else {
                          alert(res.data.msg);
                        }
                      });
                    if (this.state.lvnum == 15) {
                      alert("恭喜你提升为二级用户，快去解锁新的头像吧！");
                      window.location.reload();
                    }
                    else if (lvnum == 16) {
                      alert("恭喜你提升为二级用户，快去解锁新的头像吧！");
                      window.location.reload();
                    }
                    else if (this.state.lvnum == 30) {
                      alert("恭喜你提升为三级用户，快去解锁新的头像吧！");
                      window.location.reload();
                    }
                    else if (lvnum == 31) {
                      alert("恭喜你提升为三级用户，快去解锁新的头像吧！");
                      window.location.reload();
                    }
                    else if (this.state.lvnum == 45) {
                      alert("恭喜你提升为四级用户，快去解锁新的头像吧！");
                      window.location.reload();
                    }
                    else if (lvnum == 46) {
                      alert("恭喜你提升为四级用户，快去解锁新的头像吧！");
                      window.location.reload();
                    }
                    else if (this.state.lvnum == 60) {
                      alert("恭喜你提升为五级用户，快去解锁新的头像吧！");
                      window.location.reload();
                    }
                    else if (lvnum == 61) {
                      alert("恭喜你提升为五级用户，快去解锁新的头像吧！");
                      window.location.reload();
                    }
                    else if (this.state.lvnum == 75) {
                      alert("恭喜你提升为六级用户，快去解锁新的头像吧！");
                      window.location.reload();
                    }
                    else if (lvnum == 76) {
                      alert("恭喜你提升为六级用户，快去解锁新的头像吧！");
                      window.location.reload();
                    }
                    else if (this.state.lvnum == 90) {
                      alert("恭喜你提升为七级用户，快去解锁新的头像吧！");
                      window.location.reload();
                    }
                    else if (lvnum == 91) {
                      alert("恭喜你提升为七级用户，快去解锁新的头像吧！");
                      window.location.reload();
                    }
                    else if (this.state.lvnum == 105) {
                      alert("恭喜你提升为八级用户，快去解锁新的头像吧！");
                      window.location.reload();
                    }
                    else if (lvnum == 106) {
                      alert("恭喜你提升为八级用户，快去解锁新的头像吧！");
                      window.location.reload();
                    }
                    else if (this.state.lvnum == 120) {
                      alert("恭喜你提升为九级用户，快去解锁新的头像吧！");
                      window.location.reload();
                    }
                    else if (lvnum == 121) {
                      alert("恭喜你提升为九级用户，快去解锁新的头像吧！");
                      window.location.reload();
                    }
                    else if (this.state.lvnum == 135) {
                      alert("恭喜你提升为十级用户，快去解锁新的头像吧！");
                      window.location.reload();
                    }
                    else if (lvnum == 136) {
                      alert("恭喜你提升为十级用户，快去解锁新的头像吧！");
                      window.location.reload();
                    }
                  }
                })
                let url11 = `http://139.155.44.190:3005/users/list`;
                axios(url11)
                  .then((res) => {
                    console.log('todo', res.data);
                    res.data.map((item) => {
                      if (item.name == this.state.name) {
                        var levelnum = 0;
                        levelnum = item.lvnum;
                        console.log('lvnum11:', levelnum);
                        var num = Math.floor(levelnum / 15);
                        console.log('num', num);
                        let url3 = `http://139.155.44.190:3005/users/list`;
                        axios(url3)
                          .then((res) => {
                            res.data.map((item) => {
                              if (item.name == this.state.name) {
                                var level = 0;
                                if (num < 10) {
                                  level = num + 1;
                                }
                                else {
                                  level = 10;
                                }
                                console.log('lv', level);
                                let url3 = `http://139.155.44.190:3005/users/changeLv?level=${level}&name=${this.state.name}`;
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
                  })

              })

            let url4 = `http://139.155.44.190:3005/experience/list`;
            axios(url4)
              .then((res) => {
                var id = 0;
                for (var i = 0; i < res.data.length; i++) {
                  if (res.data[i].name == this.state.name && res.data[i].time == this.state.time) {
                    id = res.data[i].id;
                    break;
                  }
                }
                let url5 = `http://139.155.44.190:3005/follow/list`;
                axios(url5)
                  .then((res) => {
                    var arr = [];
                    for (var j = 0; j < res.data.length; j++) {
                      if (res.data[j].nname == this.state.name) {
                        arr.push(res.data[j]);
                      }
                    }
                    console.log(arr, id);
                    for (var z = 0; z < arr.length; z++) {
                      var experience = arr[z].experience;
                      if (experience == null || experience == "") {
                        experience = id;
                      }
                      else {
                        experience = experience + ',' + id;
                      }
                      let url45 = `http://139.155.44.190:3005/follow/changeEE?lname=${arr[z].lname}&nname=${this.state.name}&experience=${experience}`;
                      axios(url45)
                        .then((res) => {
                          console.log(url45);
                        });
                    }

                  })
              })
          } else {
            alert(res.data.msg);
          }
        })
    }
    else {
      alert("未填写内容")
    }
  }

  componentWillUnmount() {
    this.setState = (state, callback) => {
      return;
    }
  }

  getContent = (e) => {
    this.setState({
      content: e.target.value
    })
  }
  render() {
    const { getFieldProps } = this.props.form;
    return (
      <div style={{ position: 'relative' }}>
        <NavBar
          style={{ backgroundColor: '#37376F', color: '#fff', position: 'sticky ', top: '20', zIndex: 10, textAlign: 'center', height: '7vh' }}
          rightContent={[
            <Link to="/experience"><span style={{ fontSize: '15px', color: 'white' }} onClick={this.handleRegister}>发送</span></Link>
          ]}
          leftContent={[
            <Link to="/experience"><span style={{ fontSize: '15px', color: 'white' }}>取消</span></Link>
          ]}
        >
          <span>发表状态</span>
        </NavBar>
        <List renderHeader={() => ' '} onChange={this.getContent}>
          <TextareaItem
            {...getFieldProps(' ', {
              initialValue: '',
            })}
            rows={10}
            count={500}
          />
        </List>
      </div>
    );
  }
}
const AddWrapper = createForm()(AddExp);
export default AddWrapper;