import React, { Component } from "react";
import { Link } from "react-router-dom";
import { NavBar, Button } from "antd-mobile";
import { createForm } from "rc-form";
import { provinceLite } from "antd-mobile-demo-data";
import axios from "axios";
import { Picker } from 'antd-mobile';

const college = [
  {
    label: '马克思主义学院',
    value: '马克思主义学院'
  },
  {
    label: '历史文化学院',
    value: '历史文化学院'
  },
  {
    label: '美术与设计学院',
    value: '美术与设计学院'
  },
  {
    label: '法政与公共管理学院',
    value: '法政与公共管理学院'
  },
  {
    label: '化学与材料科学学院',
    value: '化学与材料科学学院'
  },
  {
    label: '体育学院',
    value: '体育学院'
  },
  {
    label: '国际文化交流学院',
    value: '国际文化交流学院'
  },
  {
    label: '初等教育系',
    value: '初等教育系'
  },
  {
    label: '软件学院',
    value: '软件学院'
  },
  {
    label: '教育学院',
    value: '教育学院'
  },
  {
    label: '外国语学院',
    value: '外国语学院'
  },
  {
    label: '新闻传播学院',
    value: '新闻传播学院'
  },
  {
    label: '数学科学学院(田家炳教育书院)',
    value: '数学科学学院(田家炳教育书院)'
  },
  {
    label: '生命科学学院',
    value: '生命科学学院'
  },
  {
    label: '计算机与网络空间安全学院、计算机教学部',
    value: '计算机与网络空间安全学院、计算机教学部'
  },
  {
    label: '教师教育学院',
    value: '教师教育学院'
  },
  {
    label: '大学外语教学部',
    value: '大学外语教学部'
  },
  {
    label: '汇华学院',
    value: '汇华学院'
  },
  {
    label: '文学院',
    value: '文学院'
  },
  {
    label: '音乐学院',
    value: '音乐学院'
  },
  {
    label: '商学院',
    value: '商学院'
  },
  {
    label: '物理学院',
    value: '物理学院'
  },
  {
    label: '资源与环境科学学院',
    value: '资源与环境科学学院'
  },
  {
    label: '职业技术学院、中燃工学院',
    value: '职业技术学院、中燃工学院'
  },
  {
    label: '学前教育学院（旅游系）',
    value: '学前教育学院（旅游系）'
  },
  {
    label: '公共体育教学部',
    value: '公共体育教学部'
  }
]


class Zhuce extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      college: "你选择的学院为：",
      tel: "",
      pwd: "",
      repwd: "",
      trueNum: "",
      checkNum: ""
    };
  }

  handlePickerChange = vs => {
    this.setState({
      college: vs
    })
  };
  nameChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }
  // collegeChange = (e) => {
  //   this.setState({
  //     college: e.target.value
  //   })
  // }
  telChange = (e) => {
    this.setState({
      tel: e.target.value
    })
  }
  pwdChange = (e) => {
    this.setState({
      pwd: e.target.value
    })
  }
  repwdChange = (e) => {
    this.setState({
      repwd: e.target.value
    })
  }

  numChange = (e) => {
    this.setState({
      checkNum: e.target.value
    }, () => {
    })
  }

  getCode = () => {
    let url = `http://139.155.44.190:3005/users/Getnum?tel=${this.state.tel}`;
    axios(url)
      .then(
        data => {
          this.setState({
            trueNum: data.data.trueNum
          })
        }
      )
  }
  getConnect = () => {
    let text = { name: this.state.name, pwd: this.state.pwd, repwd: this.state.repwd };
    let send = JSON.stringify(text);
    if (this.checkNum === "") {
      window.alert("验证码不能为空");
    }
    else if (this.state.checkNum == this.state.trueNum) {
      axios(`http://139.155.44.190:3005/users/addUser?name=${this.state.name}&pwd=${this.state.pwd}&tel=${this.state.tel}&college=${this.state.college}`)
        .then(
          data => {
            if (data.data.ok == 1) {
              window.alert("注册成功");
              window.location.href = "http://localhost:3000/";
            }
            else if (data.data.ok == 0) {
              window.alert("注册失败，用户名已存在");
            }
          }
        )
    }
    else {
      window.alert("请输入正确的验证码");
    }
  }
  state = {
    colorValue: ["#00FF00"],
  };
  onClick = () => {
    setTimeout(() => {
      this.setState({
        data: provinceLite,
      });
    }, 120);
  };
  onChangeColor = (color) => {
    this.setState({
      colorValue: color,
    });
  };
  render() {
    const { getFieldProps } = this.props.form;
    return (
      <div style={{ position: "relative" }}>
        <NavBar
          style={{ backgroundColor: "#37376F", color: "#fff", position: "sticky ", top: "20", zIndex: 10, textAlign: "center", height: "7vh" }}
          leftContent={[
            <Link to="/"><span style={{ fontSize: "17px", color: "white" }} className="iconfont icon-ico_leftarrow"></span></Link>
          ]}
        >
          <span>用户注册</span>
        </NavBar>
        <input style={{ width: "75vw", height: "6vh", marginLeft: "10vw", marginTop: "10vh", border: "none", borderRadius: "3vw", paddingLeft: "5vw" }} className="iconfont icon-wode" count={100} onChange={this.nameChange} placeholder="请输入昵称"></input>
        {/* <input onChange={this.collegeChange} style={{ width: "75vw", height: "6vh", marginLeft: "10vw", marginTop: "3vh", border: "none", borderRadius: "3vw", paddingLeft: "5vw" }} className="iconfont icon-wode" count={100} placeholder="请输入所在学院"></input> */}
        {/* <input style={{ width: "50vw", height: "6vh", marginLeft: "10vw", marginTop: "3vh", border: "none", borderRadius: "3vw", paddingLeft: "5vw" }} className="iconfont icon-wode" count={100} placeholder={this.state.college}></input> */}
        {/* <Link to='/choosecollege'> */}
        {/* <span style={{ marginTop: "5vh", height: "5vh", marginLeft: "5%" }}>选择学院</span> */}
        <div style={{ display: 'flex' }}>
          <input style={{ width: "50vw", height: "6vh", marginLeft: "10vw", marginTop: "3vh", border: "none", borderRadius: "3vw", paddingLeft: "5vw" }} className="iconfont icon-wode" count={100} placeholder={this.state.college}></input>
          <Picker
            onOk={this.handlePickerChange}
            data={college}
            title="选择学院"
            cols={1}
          >
            <Button color="primary" style={{ height: "6vh", width: '20vw', marginTop:'3vh',marginLeft: "20%", borderRadius: '2vw', backgroundColor: '#37376f', color: '#fff', }}>
              选择学院
            </Button>
          </Picker>
        </div>
        {/* </Link> */}
        <input style={{ width: "75vw", height: "6vh", marginLeft: "10vw", marginTop: "3vh", border: "none", borderRadius: "3vw", paddingLeft: "5vw" }} className="iconfont icon-wode" count={100} onChange={this.telChange} placeholder="请输入手机号"></input>
        <input style={{ width: "50vw", height: "6vh", marginLeft: "10vw", marginTop: "3vh", border: "none", borderRadius: "3vw", paddingLeft: "5vw" }} className="iconfont icon-wode" count={100} onChange={this.numChange} placeholder="请输入验证码"></input>
        <button onClick={this.getCode} style={{ marginTop: "5vh", height: "6vh", width: '20vw', marginLeft: "5%", borderRadius: '2vw', backgroundColor: '#37376f', color: '#fff', borderColor: '#37376f', borderWidth: 1, borderStyle: 'solid' }}>获取验证码</button>
        <input type="password" style={{ width: "75vw", height: "6vh", marginLeft: "10vw", marginTop: "3vh", border: "none", borderRadius: "3vw", paddingLeft: "5vw" }} className="iconfont icon-wode" count={100} onChange={this.pwdChange} placeholder="请输入密码"></input>
        <input type="password" style={{ width: "75vw", height: "6vh", marginLeft: "10vw", marginTop: "3vh", border: "none", borderRadius: "3vw", paddingLeft: "5vw" }} className="iconfont icon-wode" count={100} onChange={this.repwdChange} placeholder="请再次输入密码"></input>
        <div style={{ width: "70%", textAlign: "center", marginTop: "6vh", }}>
          <Button onClick={this.getConnect} style={{ background: "#37376f", marginLeft: "40%" }}>
            <span style={{ color: "white", textAlign: "center" }}>注册</span>
          </Button>
        </div>
      </div>
    );
  }
}
const ZhuceWrapper = createForm()(Zhuce);
const TestWrapper = createForm()(Zhuce);
export default ZhuceWrapper