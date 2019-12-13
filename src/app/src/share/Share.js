import { NavBar} from 'antd-mobile';
import React, { Component } from 'react';
import {HashRouter as Router,Route,Link} from 'react-router-dom';
export default class Share extends Component {
    render(){
        return (      
        <div className='communicateImg'>
              <NavBar style={{backgroundColor:'#37376F',color:'#fff',position:'sticky ',top:'0',zIndex:10,textAlign:'center',height:'7vh'}}>
                学习交流</NavBar> 
                <div>
                    <Link to="/MaterialSharing">
                        <div className="resourceShare">
                            <span className="iconfont icon-shuji"></span>
                            <p style={{fontSize:"22px",margin:"27% auto",textAlign:"center"}}>资源共享</p>
                        </div>  
                    </Link>
                    <Link to="/StudyCommunicate">
                        <div className="StudyCommunicate">
                            <span className="iconfont icon-changyongtubiao-xianxingdaochu-zhuanqu-"></span>
                            <p style={{fontSize:"22px",margin:"27% auto",textAlign:"center"}}>学习交流</p>
                        </div>  
                    </Link>
                </div>                
            </div>

        )
    }
}
