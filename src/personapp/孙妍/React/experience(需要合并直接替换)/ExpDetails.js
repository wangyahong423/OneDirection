import React, { Component } from 'react';
import { NavBar, ActionSheet } from 'antd-mobile';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios'
export default class ExpDetails extends Component {
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
      pic: [],
      photo: [],
      time: new Date().toLocaleString()
    };
  }

  componentDidMount() {
    var id = this.props.match.params.id;
    let url = `http://139.155.44.190:3005/experience/list/` + id;
    let url1 = `http://139.155.44.190:3005/learntalk/list/`;
    let url3 = `http://139.155.44.190:3005/users/getName`;
    let url4 = `http://139.155.44.190:3005/users/list`;
    axios(url3)
      .then((res) => {
        this.setState({
          name: res.data.name
        })
      })
    axios(url)
      .then((res) => {
        for (var i = 0; i < res.data.length; i++) {
          res.data[i].pic = "http://139.155.44.190:3005" + res.data[i].pic;
          res.data[i].level = res.data[i].level;
          res.data[i].head = 'http://139.155.44.190:3005/head/' + res.data[i].head;
          res.data[i].card = 'http://139.155.44.190:3005/card/' + res.data[i].card;
        }
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
        axios(url4)
          .then((res) => {
            for (var i = 0; i < res.data.length; i++) {
              res.data[i].pic = "http://139.155.44.190:3005" + res.data[i].pic;
              res.data[i].level = res.data[i].level;
              res.data[i].head = 'http://139.155.44.190:3005/head/' + res.data[i].head;
              res.data[i].card = 'http://139.155.44.190:3005/card/' + res.data[i].card;
            }
            this.setState({
              yonghu: res.data
            })
            var qrr = []
            var a = 0;
            for (var i = 0; i < this.state.data.length; i++) {
              for (var j = 0; j < this.state.yonghu.length; j++) {
                if (this.state.data[i].name == this.state.yonghu[j].name) {
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
              pic: qrr
            })
            this.state.data.forEach(item => {
              for (var i = 0; i < res.data.length; i++) {
                if (item.name == res.data[i].name) {
                  item.level = res.data[i].level;
                  item.head = res.data[i].head;
                  item.card = res.data[i].card;
                  break;
                }
              }
            })
            console.log('data', this.state.data);
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
                this.state.todo.forEach(item => {
                  for (var i = 0; i < this.state.yonghu.length; i++) {
                    if (item.name == this.state.yonghu[i].name) {
                      item.level = this.state.yonghu[i].level;
                      item.head = this.state.yonghu[i].head;
                      item.card = this.state.yonghu[i].card;
                      break;
                    }
                  }
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
  render() {
    return (
      <div style={{ position: 'relative' }}>
        <NavBar
          style={{ backgroundColor: '#37376F', color: '#fff', position: 'sticky ', top: 0, zIndex: 18, textAlign: 'center', height: '7vh' }}
          leftContent={[
            <Link to="/experience"><span style={{ fontSize: '17px', color: 'white' }} className="iconfont icon-ico_leftarrow"></span></Link>
          ]}
        >
          <span>经验详情</span>
        </NavBar>
        <div style={{marginTop:'1vh'}}></div>
        {
          this.state.data.map((item, idx) =>
            <div style={{ background: '#fff', color: 'black' }}>
              <div style={{ float: "left", position: "relative" }}>
                <img src={this.state.pic[idx]} style={{ height: '7vh', width: '12vw', borderRadius: '50%', marginLeft: 15, marginTop: 5 }} />
                {
                  item.head != 'http://139.155.44.190:3005/head/null'
                    ? <img src={item.head} style={{ height: '10vh', width: '15vw', borderRadius: '50%', position: 'absolute', left: 4, top: -3 }} />
                    : null
                }
              </div>
              <div>
                <span style={{ fontSize: '2.5vh', lineHeight: 2.5, marginLeft: '3vw' }}>{item.name}</span>
                <span style={{ fontSize: '2.5vh', marginLeft: '2vw', color: 'red' }}>Lv.{item.level}</span>
                
                {/* <span style={{ fontSize: '2.5vh', marginLeft: '2vw', color: 'red' }}><img src={require(`../../images/lv${item.level}.png`)}/></span> */}
                {
                  item.card != 'http://139.155.44.190:3005/card/null' || null
                    ? <span style={{ float: 'right', marginRight: '3vw', marginTop: '1vh' }}><img style={{ width: '22vw', height: '7vh' }} src={item.card} /></span>
                    : null
                }
              </div>
              <div style={{ marginLeft: 68, color: 'gray', fontSize: '2vw' }}>{item.time}</div>
              <p style={{ marginLeft: 25, color: 'black', marginTop: 20, fontSize: 17 }}>{item.content}</p>
              <div style={{ width: '100%', height: '2vh', backgroundColor: 'white' }}>
            </div>
              
            </div>)}
       
        
        
      </div>
    );
  }
}