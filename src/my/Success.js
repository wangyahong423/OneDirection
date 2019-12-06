import React, { Component } from 'react';
import { BrowserRouter as Router,Route,Link} from 'react-router-dom';
import { NavBar, Icon, Tabs ,Carousel} from 'antd-mobile';


export default class Success extends Component {
    render() {
        return (
            <div>
            <NavBar
                style={{ backgroundColor: '#37376F', color: '#fff',position:'sticky ',top:'20',zIndex:10,textAlign:'center',height:'7vh'}}
                leftContent={[
                <Link to="/Yonghu"><span className="iconfont icon-ico_leftarrow"></span></Link>
            ]}
                >
                <span>用户反馈</span>
                </NavBar>
                <img src={require('./img/My3.jpg')} style={{height:"30vh",width:"86vw",margin:"8vh 7vw 0 7vw"}}></img>
                <div style={{textAlign:"center"}}>
                    <p style={{fontSize:"4vh",color:"#37376F"}}>校园新生通</p>
                    <div style={{paddingTop:"4vh",height:"20vh",width:"80vw",backgroundColor:"#343466",marginLeft:"10vw",color:"#fff",fontSize:"3vh"}}>
                        <p>提交成功！</p>
                        <p>我们会尽快理您的建议的！</p>
                    </div>
                </div>
                </div>
        )
    }
}
