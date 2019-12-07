import React, { Component} from 'react'
import {Link} from 'react-router-dom'
export default class Login extends Component {
    
    render() {
        
        return (
            <>
                <div className="loginimg">
                    <div className="iconfont icon-denglu-hyl" style={{fontSize:200,color:"gray"}}>
                    </div>
                    <input placeholder="请输入用户名" style={{width:200,height:30}}>
                    </input>
                    <p></p>
                    <input placeholder="请输入密码" style={{width:200,height:30}}>
                    </input>
                    <p></p>
                    <Link to="/home">
                        <button style={{width:"6%",height:"3.5%",borderRadius:3,backgroundColor:"gray",borderColor:"black",color:"black"}}>登录</button>
                    </Link>
                </div>
            </>
        )
    }
}
