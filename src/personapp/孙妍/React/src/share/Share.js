import { NavBar } from 'antd-mobile';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class Share extends Component {
    render() {
        return (
            <div className='communicateImg'>
                <NavBar style={{ backgroundColor: '#37376F', color: '#fff', position: 'sticky ', top: '0', zIndex: 10, textAlign: 'center', height: '7vh' }}>
                    学习交流</NavBar>
                <div>
                    <Link to="/cet46">
                        <div className="resourceShare">
                            <span className="iconfont icon-shuji"></span>
                            <p style={{ fontSize: "22px", margin: "20% auto", textAlign: "center" }}>四六级资料</p>
                        </div>
                    </Link>
                    <Link to="/programme">
                        <div className="StudyCommunicate">
                            <span className="iconfont icon-shuji"></span>
                            <p style={{ fontSize: "22px", margin: "20% auto", textAlign: "center" }}>考研</p>
                        </div>
                    </Link>
                    <Link to="/notes">
                        <div className="StudyCommunicate2">
                            <span className="iconfont icon-shuji"></span>
                            <p style={{ fontSize: "22px", margin: "20% auto", textAlign: "center" }}>笔记</p>
                        </div>
                    </Link>
                     <Link to="/experience">
                        <div className="StudyCommunicate3">
                            <span className="iconfont icon-shuji"></span>
                            <p style={{ fontSize: "22px", margin: "20% auto", textAlign: "center" }}>经验分享</p>
                        </div>
                    </Link>
                </div>
            </div>
        )
    }
}
