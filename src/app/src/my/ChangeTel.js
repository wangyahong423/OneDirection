import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { NavBar } from 'antd-mobile';
export default class ChangeTel extends Component {
    render() {
        return (
            <div style={{ backgroundColor: "#fff", height: "100vh", width: "100vw" }}>
                <NavBar
                    style={{ backgroundColor: '#37376F', color: '#fff', height: '7vh', zIndex: 10, textAlign: 'center' }}
                    leftContent={[
                        <Link to="/Zhanghao"><span className="iconfont icon-ico_leftarrow"></span></Link>
                    ]}
                >
                    <span>绑定手机号</span>
                </NavBar>
                <div>
                    <input style={{ height: "5vh", width: "55vw", margin: "15vh 5vw 0 10vw", border: "none", borderBottom: "1px solid #D1D1D1", color: "#949494" }} value="请输入手机号">
                    </input>
                    <button style={{ height: "5vh", width: "25vw", border: "none", borderRadius: "4vw", fontSize: "2vh" }}>获取验证码
                    </button>
                    <input style={{ height: "5vh", width: "80vw", margin: "15vh 5vw 10vh 10vw", border: "none", borderBottom: "1px solid #D1D1D1", color: "#949494" }} value="请输入验证码">
                    </input>
                    <button style={{ height: "5vh", width: "70vw", marginLeft: "15vw", border: "1px solid #D1D1D1", borderRadius: "4vw" }}>完成</button>
                </div>
            </div>
        )
    }
}
