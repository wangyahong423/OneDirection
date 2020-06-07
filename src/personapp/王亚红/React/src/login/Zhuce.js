import React, { Component } from "react";
import { Link } from "react-router-dom";
import { NavBar, Button} from "antd-mobile";
import { createForm } from "rc-form";
import { provinceLite } from "antd-mobile-demo-data";
import axios from "axios";
import { Form, Input} from "antd"
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
      college: "你选择的学院为",
      tel: "",
      pwd: "",
      repwd: "",
      trueNum: "",
      checkNum: "",
      code: '',
      inpcode: '',//用户输入的验证码
      codeLength: 4,
      fontSizeMin: 20,
      fontSizeMax: 22,
      backgroundColorMin: 240,
      backgroundColorMax: 250,
      colorMin: 10,
      colorMax: 20,
      lineColorMin: 40,
      lineColorMax: 180,
      contentWidth: 96,
      contentHeight: 38,
      showError: false, // 默认不显示验证码的错误信息
    };
  }

  componentWillMount() {
    this.canvas = React.createRef()
  }

  componentDidMount() {
    this.drawPic()
  }
  // 生成一个随机数
  randomNum = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min)
  }

  drawPic = () => {
    this.randomCode()
  }

  // 生成一个随机的颜色
  randomColor(min, max) {
    const r = this.randomNum(min, max)
    const g = this.randomNum(min, max)
    const b = this.randomNum(min, max)
    return `rgb(${r}, ${g}, ${b})`
  }

  drawText(ctx, txt, i) {
    ctx.fillStyle = this.randomColor(this.state.colorMin, this.state.colorMax)
    const fontSize = this.randomNum(this.state.fontSizeMin, this.state.fontSizeMax)
    ctx.font = fontSize + 'px SimHei'
    const padding = 10;
    const offset = (this.state.contentWidth - 40) / (this.state.code.length - 1)
    let x = padding;
    if (i > 0) {
      x = padding + (i * offset)
    }
    let y = this.randomNum(this.state.fontSizeMax, this.state.contentHeight - 5)
    if (fontSize > 40) {
      y = 40
    }
    const deg = this.randomNum(-10, 10)
    // 修改坐标原点和旋转角度
    ctx.translate(x, y)
    ctx.rotate(deg * Math.PI / 180)
    ctx.fillText(txt, 0, 0)
    // 恢复坐标原点和旋转角度
    ctx.rotate(-deg * Math.PI / 180)
    ctx.translate(-x, -y)
  }

  drawLine(ctx) {
    // 绘制干扰线
    for (let i = 0; i < 1; i++) {
      ctx.strokeStyle = this.randomColor(this.state.lineColorMin, this.state.lineColorMax)
      ctx.beginPath()
      ctx.moveTo(this.randomNum(0, this.state.contentWidth), this.randomNum(0, this.state.contentHeight))
      ctx.lineTo(this.randomNum(0, this.state.contentWidth), this.randomNum(0, this.state.contentHeight))
      ctx.stroke()
    }
  }

  drawDot(ctx) {
    // 绘制干扰点
    for (let i = 0; i < 100; i++) {
      ctx.fillStyle = this.randomColor(0, 255)
      ctx.beginPath()
      ctx.arc(this.randomNum(0, this.state.contentWidth), this.randomNum(0, this.state.contentHeight), 1, 0, 2 * Math.PI)
      ctx.fill()
    }
  }

  reloadPic = () => {
    this.drawPic()
    this.props.form.setFieldsValue({
      sendcode: '',
    });
  }

  // 输入验证码
  changeCode = e => {
    if (e.target.value.toLowerCase() !== '' && e.target.value.toLowerCase() !== this.state.code.toLowerCase()) {
      this.setState({
        // 设置用户输入的验证码
        inpcode: e.target.value.toLowerCase(),
        showError: true
      })
    } else if (e.target.value.toLowerCase() === '') {
      this.setState({
        inpcode: e.target.value,
        showError: false
      })
    } else if (e.target.value.toLowerCase() === this.state.code.toLowerCase()) {
      this.setState({
        inpcode: e.target.value,
        showError: false
      })
    }
  }

  // 随机生成验证码
  randomCode() {
    let random = ''
    // 去掉了I l i o O,可自行添加
    const str = 'QWERTYUPLKJHGFDSAZXCVBNMqwertyupkjhgfdsazxcvbnm1234567890'
    for (let i = 0; i < this.state.codeLength; i++) {
      const index = Math.floor(Math.random() * 57);
      random += str[index];
    }
    this.setState({
      code: random
    }, () => {
      const canvas = this.canvas.current;
      const ctx = canvas.getContext('2d');
      ctx.textBaseline = 'bottom'
      // 绘制背景
      ctx.fillStyle = this.randomColor(this.state.backgroundColorMin, this.state.backgroundColorMax)
      ctx.fillRect(0, 0, this.state.contentWidth, this.state.contentHeight)
      // 绘制文字
      for (let i = 0; i < this.state.code.length; i++) {
        this.drawText(ctx, this.state.code[i], i)
      }

      this.drawLine(ctx)
      this.drawDot(ctx)
    })
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

  getConnect = () => {
    let text = { name: this.state.name, pwd: this.state.pwd, repwd: this.state.repwd };
    let send = JSON.stringify(text);
    if (this.state.inpcode === "") {
      window.alert("验证码不能为空");
    }
    else {
      if (this.state.inpcode == this.state.code.toLowerCase()) {
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
      else{
        window.alert('请输入正确的验证码！')
      }
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
    const { current } = this.state;
    const suffix =
      <div>
        <canvas
          onClick={this.reloadPic}
          ref={this.canvas}
          width='100'
          height='40'>
        </canvas>
      </div>

    const { getFieldDecorator } = this.props.form;
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
        <div style={{ display: 'flex' }}>
          <input style={{ width: "50vw", height: "6vh", marginLeft: "10vw", marginTop: "3vh", border: "none", borderRadius: "3vw", paddingLeft: "5vw" }} className="iconfont icon-wode" count={100} placeholder={this.state.college}></input>
          <Picker
            onOk={this.handlePickerChange}
            data={college}
            title="选择学院"
            cols={1}
          >
            <Button color="primary" style={{ height: "6vh", width: '20vw', marginTop: '3vh', marginLeft: "20%", borderRadius: '2vw', backgroundColor: '#37376f', color: '#fff', }}>
              选择学院
            </Button>
          </Picker>
        </div>
        <input style={{ width: "75vw", height: "6vh", marginLeft: "10vw", marginTop: "3vh", border: "none", borderRadius: "3vw", paddingLeft: "5vw" }} className="iconfont icon-wode" count={100} onChange={this.telChange} placeholder="请输入手机号"></input>
        <Form.Item className='for-form'>
          {getFieldDecorator('sendcode', {
            rules: [
              { required: true, message: '请输入校验码!' },
              {
                validator: (rule, value, callback) => {
                  if (value) {
                    if (value.toLowerCase() === this.state.code.toLowerCase()) {
                      callback()
                      this.setState({
                        sendcode: value,
                        showError: false
                      })
                    } else {
                      callback('请输入正确的验证码')
                      this.setState({
                        showError: true
                      })
                    }
                  } else {
                    callback()
                  }
                }
              }
            ],
          })(
            <Input
              size='large'
              id='toyan'
              suffix={suffix}
              onChange={this.changeCode}
              placeholder="请输入验证码"
            />,
          )}
        </Form.Item>
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