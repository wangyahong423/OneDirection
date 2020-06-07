import { NavBar, SearchBar, ActionSheet, WingBlank } from 'antd-mobile';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
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

    axios(url2)
      .then((res) => {
        this.setState({
          list: res.data
        })
        var brr = [];
        this.state.list.map((item) => {
          if (item.name == this.state.name) {
            brr.push(item);
          }
          this.setState({
            list: brr
          })
        })
        var arr = [];
        var a = 0;
        for (var i = 0; i < this.state.data.length; i++) {
          for (var j = 0; j < this.state.list.length; j++) {
            if (this.state.data[i].id == this.state.list[j].lid) {
              a = 1;
              break;
            } else {
              a = 0;
            }
          }
          if (a == 1) {
            arr.push('red');
            a = 0;
          } else {
            arr.push('black');
          }
        }
        this.setState({
          color: arr
        })
      })
    axios(url3)
      .then((re) => {
        axios(url4).then(res => {
          res.data.map(item => {
            if (item.name == re.data.name) {
              this.setState({
                pic: 'http://139.155.44.190:3005' + item.pic,
                head: 'http://139.155.44.190:3005/head/' + item.head,
                level: item.level
              })
            }
          })
        })

        axios(url)
          .then((res) => {
            var arr = [];
            res.data.map((item) => {
              if (item.name == re.data.name) {
                arr.push(item)
              }
            })
            this.setState({
              data: arr
            })
          })

      })
  }

  change = (id) => {
    let url10 = `http://139.155.44.190:3005/learn/change?newl=${false}&lid=${this.state.data[id].id}`
    axios(url10)
      .then((res) => {
      })
   
  }

  delTie = (id) => {

    let url9 = `http://139.155.44.190:3005/learn/deleteLearn?id=${id}`
    axios(url9)
      .then((res) => {
        window.location.href = "http://localhost:3000/tiezi"
        window.location.href = "http://localhost:3000/xuexi"
        window.location.reload();
      })
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
                <div style={{ background: '#fff', color: 'black', position: 'relative', height: '18vh', marginBottom: '1vh' }}>
                  <div style={{ float: "left", position: 'absolute', left: '4vw', top: '2vh' }}>
                    <img src={this.state.pic} style={{ height: '7vh', width: '12vw', borderRadius: '50%' }} />
                    {
                      this.state.head != 'http://139.155.44.190:3005/head/null'
                        ? <img src={this.state.head} style={{ height: '10vh', width: '15vw', borderRadius: '50%', position: 'absolute', left: '-2vw', top: '-2vh' }} />
                        : null
                    }
                  </div>
                  <p style={{ fontSize: '2.5vh', lineHeight: 2.5, position: 'absolute', top: '-2vh', left: '20vw' }}>{item.name}</p>
                  <img src={`http://139.155.44.190:3005/level/lv${this.state.level}.png`} style={{ width: '8vw', height: '5vw', marginLeft: '30vw', marginTop: '1.5vh' }} />
                  {
                    item.newl
                      ? <span style={{ color: 'red', fontSize: 20 }}>●</span>
                      : null
                  }
                  <div style={{ color: 'gray', fontSize: '2vw', position: 'absolute', left: '20vw', top: '7vh' }}>{item.time}</div>
                  <Link to={`/xuexiyouknow/${item.id}`} onClick={this.change.bind(this, (idx))}>
                    <p style={{
                      color: 'black', position: 'absolute', top: '9vh', left: '10vw', width: '80vw', fontSize: '17px', overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap"
                    }}>{item.content}</p>
                  </Link>
                  <span style={{ position: 'absolute', right: '5vw', top: '2vh' }}>
                    <button style={{ borderRadius: '50%', border: 'none', height: '4vh', backgroundColor: 'white' }} className='iconfont icon-chahao' onClick={this.delTie.bind(this, (item.id))}></button>
                  </span>
                  <div style={{ width: '100%', height: '2vh', backgroundColor: 'white' }}></div>
                </div>)}
          </div>
        </div>
      </div>
    )
  }
}
