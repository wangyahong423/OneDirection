import React, { Component } from 'react';
import {Link} from 'react-router-dom'; 
import {NavBar, Button } from 'antd-mobile';
import { createForm } from 'rc-form';
import {  provinceLite } from 'antd-mobile-demo-data';
import axios from 'axios';

// const colorStyle = {
//   display: 'inline-block',
//   verticalAlign: 'middle',
//   width: '16px',
//   height: '16px',
//   marginRight: '10px',
// };
// const colors = [
//   {
//     label:
//     (<div>
//       <span
//         style={{ ...colorStyle, }}
//       />
//       <span>马克思主义学院</span>
//     </div>),
//     value: '#FF0000',
//   },
//   {
//     label:
//     (<div>
//       <span
//         style={{ ...colorStyle,}}
//       />
//       <span>历史文化学院</span>
//     </div>),
//     value: '#00FF00',
//   },
//   {
//     label:
//     (<div>
//       <span
//         style={{ ...colorStyle,}}
//       />
//       <span>美术与设计学院</span>
//     </div>),
//     value: '#0000FF',
//   },
//   {
//     label:
//     (<div>
//       <span
//         style={{ ...colorStyle,}}
//       />
//       <span>法政与公共管理学院</span>
//     </div>),
//     value: '#0000FF',
//   },
//   {
//     label:
//     (<div>
//       <span
//         style={{ ...colorStyle,}}
//       />
//       <span>化学与材料科学学院</span>
//     </div>),
//     value: '#0000FF',
//   },
//   {
//     label:
//     (<div>
//       <span
//         style={{ ...colorStyle,}}
//       />
//       <span>体育学院</span>
//     </div>),
//     value: '#0000FF',
//   },
//   {
//     label:
//     (<div>
//       <span
//         style={{ ...colorStyle,}}
//       />
//       <span>国际文化交流学院</span>
//     </div>),
//     value: '#0000FF',
//   },
//   {
//     label:
//     (<div>
//       <span
//         style={{ ...colorStyle,}}
//       />
//       <span>初等教育系</span>
//     </div>),
//     value: '#0000FF',
//   },
//   {
//     label:
//     (<div>
//       <span
//         style={{ ...colorStyle,}}
//       />
//       <span>软件学院</span>
//     </div>),
//     value: '#0000FF',
//   },
//   {
//     label:
//     (<div>
//       <span
//         style={{ ...colorStyle,}}
//       />
//       <span>教育学院</span>
//     </div>),
//     value: '#0000FF',
//   },
//   {
//     label:
//     (<div>
//       <span
//         style={{ ...colorStyle,}}
//       />
//       <span>外国语学院</span>
//     </div>),
//     value: '#0000FF',
//   },
//   {
//     label:
//     (<div>
//       <span
//         style={{ ...colorStyle,}}
//       />
//       <span>新闻传播学院</span>
//     </div>),
//     value: '#0000FF',
//   },
//   {
//     label:
//     (<div>
//       <span
//         style={{ ...colorStyle,}}
//       />
//       <span>数学科学学院（田家炳教育学院）</span>
//     </div>),
//     value: '#0000FF',
//   },
//   {
//     label:
//     (<div>
//       <span
//         style={{ ...colorStyle,}}
//       />
//       <span>生命科学学院</span>
//     </div>),
//     value: '#0000FF',
//   },
//   {
//     label:
//     (<div>
//       <span
//         style={{ ...colorStyle,}}
//       />
//       <span>计算机与网络空间安全学院、计算机教学部</span>
//     </div>),
//     value: '#0000FF',
//   },
//   {
//     label:
//     (<div>
//       <span
//         style={{ ...colorStyle,}}
//       />
//       <span>教师教育学院</span>
//     </div>),
//     value: '#0000FF',
//   },
//   {
//     label:
//     (<div>
//       <span
//         style={{ ...colorStyle,}}
//       />
//       <span>大学外语教学部</span>
//     </div>),
//     value: '#0000FF',
//   },
//   {
//     label:
//     (<div>
//       <span
//         style={{ ...colorStyle,}}
//       />
//       <span>汇华学院</span>
//     </div>),
//     value: '#0000FF',
//   },
//   {
//     label:
//     (<div>
//       <span
//         style={{ ...colorStyle,}}
//       />
//       <span>文学院</span>
//     </div>),
//     value: '#0000FF',
//   },
//   {
//     label:
//     (<div>
//       <span
//         style={{ ...colorStyle,}}
//       />
//       <span>音乐学院</span>
//     </div>),
//     value: '#0000FF',
//   },
//   {
//     label:
//     (<div>
//       <span
//         style={{ ...colorStyle,}}
//       />
//       <span>商学院</span>
//     </div>),
//     value: '#0000FF',
//   },
//   {
//     label:
//     (<div>
//       <span
//         style={{ ...colorStyle,}}
//       />
//       <span>物理学院</span>
//     </div>),
//     value: '#0000FF',
//   },
//   {
//     label:
//     (<div>
//       <span
//         style={{ ...colorStyle,}}
//       />
//       <span>资源与环境科学学院</span>
//     </div>),
//     value: '#0000FF',
//   },
//   {
//     label:
//     (<div>
//       <span
//         style={{ ...colorStyle,}}
//       />
//       <span>职业技术学院、中燃工学院</span>
//     </div>),
//     value: '#0000FF',
//   },
//   {
//     label:
//     (<div>
//       <span
//         style={{ ...colorStyle,}}
//       />
//       <span>学前教育学院（旅游系）</span>
//     </div>),
//     value: '#0000FF',
//   },
//   {
//     label:
//     (<div>
//       <span
//         style={{ ...colorStyle,}}
//       />
//       <span>公共体育教学部</span>
//     </div>),
//     value: '#0000FF',
//   }
// ];

class Zhuce extends Component {
  constructor(props){
    super(props);
    this.state={
      name:'',
      college:'',
      tel:'',
      pwd:'',
      repwd:'',
      trueNum:"",
      checkNum:""
    }
  }
  nameChange=(e)=>{
    this.setState({
        name:e.target.value
    })
  }
  collegeChange=(e)=>{
    this.setState({
        college:e.target.value
    })
  }
  telChange=(e)=>{
    this.setState({
        tel:e.target.value
    })
  }
  pwdChange=(e)=>{
    this.setState({
        pwd:e.target.value
    })
  }
  repwdChange=(e)=>{
    this.setState({
        repwd:e.target.value
    })
  }

  numChange=(e)=>{
    this.setState({
      checkNum:e.target.value
    },()=>{
      console.log(this.state.checkNum)

    })
  }

  getCode=()=>{
    let url = `http://localhost:3005/users/Getnum?tel=${this.state.tel}`;
    axios(url)
    // .then(res=>res.json)
    .then(
        data=>{
            console.log(data);
            this.setState({
              trueNum:data.data.trueNum
            })
        }
    )
  }
  getConnect=()=>{
    console.log(this.state.checkNum,this.state.trueNum)
    let text = {name:this.state.name,pwd:this.state.pwd,repwd:this.state.repwd};
    let send = JSON.stringify(text);
    if(this.checkNum === ""){
        window.alert("验证码不能为空");
    }
    else if(this.state.checkNum == this.state.trueNum){  
        axios(`http://localhost:3005/users/addUser?name=${this.state.name}&pwd=${this.state.pwd}&tel=${this.state.tel}&college=${this.state.college}`)
        .then(
            data=>{
              console.log(1111111,data)
              console.log(22222,data.data.ok)
                if(data.data.ok == 1){
                    window.alert("注册成功");
                    window.location.href='http://localhost:3000/';
                }
                else if(data.data.ok == 0){
                  window.alert("注册失败，用户名已存在");
                }
                
            }
        )
    }
    else{
        window.alert("请输入正确的验证码");
    }
  }
  state = {
    colorValue: ['#00FF00'],
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
      <div style={{position:'relative'}}>
        <NavBar
            style={{ backgroundColor: '#37376F', color: '#fff',position:'sticky ',top:'20',zIndex:10,textAlign:'center'}}
            leftContent={[
              <Link to="/"><span style={{fontSize:'17px',color:'white'}} className="iconfont icon-ico_leftarrow"></span></Link>
            ]}
            >
            <span>用户注册</span>

        </NavBar>
        <input style={{width:'75vw',height:'6vh',marginLeft:'10vw',marginTop:'10vh',border:'none',borderRadius:'3vw',paddingLeft:'5vw'}} className="iconfont icon-wode" count={100} onChange={this.nameChange} placeholder="请输入昵称"></input>
        <input onChange={this.collegeChange} style={{width:'75vw',height:'6vh',marginLeft:'10vw',marginTop:'3vh',border:'none',borderRadius:'3vw',paddingLeft:'5vw'}} className="iconfont icon-wode" count={100} placeholder="请输入所在学院"></input>
        <input style={{width:'75vw',height:'6vh',marginLeft:'10vw',marginTop:'3vh',border:'none',borderRadius:'3vw',paddingLeft:'5vw'}} className="iconfont icon-wode" count={100} onChange={this.telChange} placeholder="请输入手机号"></input>
        <input style={{width:'50vw',height:'6vh',marginLeft:'10vw',marginTop:'3vh',border:'none',borderRadius:'3vw',paddingLeft:'5vw'}} className="iconfont icon-wode" count={100} onChange={this.numChange} placeholder="请输入验证码"></input>
        <button onClick={this.getCode} style={{marginTop:'5vh',height:'5vh',marginLeft:'5%'}}>获取验证码</button>
        <input style={{width:'75vw',height:'6vh',marginLeft:'10vw',marginTop:'3vh',border:'none',borderRadius:'3vw',paddingLeft:'5vw'}} className="iconfont icon-wode" count={100} onChange={this.pwdChange} placeholder="请输入密码"></input>
        <input style={{width:'75vw',height:'6vh',marginLeft:'10vw',marginTop:'3vh',border:'none',borderRadius:'3vw',paddingLeft:'5vw'}} className="iconfont icon-wode" count={100} onChange={this.repwdChange} placeholder="请再次输入密码"></input>
        <div style={{width:"70%",textAlign:'center',marginTop:'6vh',}}>
            <Button onClick={this.getConnect} style={{background:'#37376f',marginLeft:'40%'}}>
                <span style={{color:'white',textAlign:'center'}}>注册</span>
            </Button>
        </div>
      </div>
    );
  }
}
const ZhuceWrapper = createForm()(Zhuce);
const TestWrapper = createForm()(Zhuce);
export default ZhuceWrapper