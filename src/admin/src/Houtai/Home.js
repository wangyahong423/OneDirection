import React, { Component } from 'react'
import { SearchBar } from 'antd-mobile';
import {Link} from 'react-router-dom';
export default class Home extends Component {
    render() {
        return (
            <>
            <div>
                <div style={{height:40,width:"100%",backgroundColor:"#3f6ab5"}}>
                    <h3 style={{float:"left",marginTop:"0.5%",marginLeft:"1%"}}>LOGO</h3>
                    <h3 style={{float:"left",marginTop:"0.35%",marginLeft:"1%"}}>|</h3>
                    <Link to="/" style={{color:"white"}}>
                        <button style={{float:"right",fontStyle:"none",backgroundColor:"#3f6ab5",marginTop:"0.5%",marginRight:"0.5%",borderColor:"#3f6ab5"}}>退出</button>
                    </Link>
                    <h3 style={{float:"right",marginTop:"0.5%",marginRight:"1%"}}>Admin</h3>
                    <p className="iconfont icon-lingdang-hyl" style={{fontSize:30,float:"right",marginRight:"1%"}}></p>
                </div>
                <div className="homediv1">
                    <p className="iconfont icon-fangzi" style={{fontSize:30,float:"left",marginLeft:"1%",marginTop:"0.7%"}}></p>
                    <p style={{fontSize:23,float:"left",marginLeft:"1%",marginTop:"1%"}}>概览</p>
                    <p style={{fontSize:16,float:"left",marginLeft:"8%",marginTop:"1.5%"}}>用户管理</p>
                </div>
                <div className="homediv2">
                    <ul>
                    <Link to="/home">
                        <p className="iconfont icon-fangzi" style={{fontSize:18,marginTop:"15%",color:"#456ab5"}}>用户管理</p>
                        <p style={{marginTop:"-28%",fontSize:25,color:"#555151"}}>___________</p>
                    </Link>
                    <Link to="/yonghu">
                        <p className="iconfont icon-fangzi" style={{fontSize:18,marginTop:"8%",color:"#555151"}}>用户反馈</p>
                        <p style={{marginTop:"-28%",fontSize:25,color:'#555151'}}>___________</p>
                    </Link>
                    <Link to="/xuexi">
                        <p className="iconfont icon-fangzi" style={{fontSize:18,marginTop:"8%",color:"#555151"}}>学习交流</p>
                        <p style={{marginTop:"-28%",fontSize:25,color:"#555151"}}>___________</p>
                    </Link>
                    <Link to="/wenjian">
                        <p className="iconfont icon-fangzi" style={{fontSize:18,marginTop:"8%",color:"#555151"}}>文件管理</p>
                        <p style={{marginTop:"-28%",fontSize:25,color:"#555151"}}>___________</p>
                    </Link>
                    <Link to="/Shequ">
                        <p className="iconfont icon-fangzi" style={{fontSize:18,marginTop:"8%",color:"#555151"}}>社区管理</p>
                        <p style={{marginTop:"-28%",fontSize:25,color:"#555151"}}>___________</p>
                    </Link>
                    <Link to="/Guanliyuan">
                        <p className="iconfont icon-fangzi" style={{fontSize:18,marginTop:"8%",color:"#555151"}}>管理员</p>
                        <p style={{marginTop:"-28%",fontSize:25,color:"#555151"}}>___________</p>
                    </Link>
                    </ul>
                </div>
                <div className="homediv3">
                    <SearchBar placeholder="搜索" 
                        style={{width:"30%",
                            float:"left",
                            marginLeft:"32%",
                            marginTop:"1%"}}>
                    </SearchBar>
                    <div style={{height:600,width:"100%",float:"left"}}>
                        <div className="homedivlisttop">
                            <p style={{float:"left",marginLeft:"8%",marginTop:"4%"}}>头像</p>
                            <p style={{float:"left",marginLeft:"12%",marginTop:"4%"}}>名字</p>
                            <p style={{float:"left",marginLeft:"12%",marginTop:"4%"}}>电话</p>
                            <p style={{float:"left",marginLeft:"12%",marginTop:"4%"}}>学院</p>
                            <p style={{float:"left",marginLeft:"12%",marginTop:"4%"}}>性别</p>
                            <p style={{float:"left",marginLeft:"12%",marginTop:"4%"}}>密码</p>
                        </div>
                        <div className="homedivlist">
                            <img src="dhauhsda" style={{float:"left",marginLeft:"10.5%",marginTop:"2%"}}></img>
                            <p style={{float:"left",marginLeft:"12%",marginTop:"2%"}}>张三</p>
                            <p style={{float:"left",marginLeft:"10%",marginTop:"2%"}}>13788888888</p>
                            <p style={{float:"left",marginLeft:"7%",marginTop:"2%"}}>软件学院</p>
                            <p style={{float:"left",marginLeft:"11%",marginTop:"2%"}}>男</p>
                            <p style={{float:"left",marginLeft:"12%",marginTop:"2%"}}>888886</p>
                        </div>
                        <div className="homedivlist">
                            <img src="dhauhsda" style={{float:"left",marginLeft:"10.5%",marginTop:"2%"}}></img>
                            <p style={{float:"left",marginLeft:"12%",marginTop:"2%"}}>张三</p>
                            <p style={{float:"left",marginLeft:"10%",marginTop:"2%"}}>13788888888</p>
                            <p style={{float:"left",marginLeft:"7%",marginTop:"2%"}}>软件学院</p>
                            <p style={{float:"left",marginLeft:"11%",marginTop:"2%"}}>男</p>
                            <p style={{float:"left",marginLeft:"12%",marginTop:"2%"}}>888886</p>
                        </div>
                        <div className="homedivlist">
                            <img src="dhauhsda" style={{float:"left",marginLeft:"10.5%",marginTop:"2%"}}></img>
                            <p style={{float:"left",marginLeft:"12%",marginTop:"2%"}}>张三</p>
                            <p style={{float:"left",marginLeft:"10%",marginTop:"2%"}}>13788888888</p>
                            <p style={{float:"left",marginLeft:"7%",marginTop:"2%"}}>软件学院</p>
                            <p style={{float:"left",marginLeft:"11%",marginTop:"2%"}}>男</p>
                            <p style={{float:"left",marginLeft:"12%",marginTop:"2%"}}>888886</p>
                        </div>
                        <div className="homedivlist">
                            <img src="dhauhsda" style={{float:"left",marginLeft:"10.5%",marginTop:"2%"}}></img>
                            <p style={{float:"left",marginLeft:"12%",marginTop:"2%"}}>张三</p>
                            <p style={{float:"left",marginLeft:"10%",marginTop:"2%"}}>13788888888</p>
                            <p style={{float:"left",marginLeft:"7%",marginTop:"2%"}}>软件学院</p>
                            <p style={{float:"left",marginLeft:"11%",marginTop:"2%"}}>男</p>
                            <p style={{float:"left",marginLeft:"12%",marginTop:"2%"}}>888886</p>
                        </div>
                        <div className="homedivlist">
                            <img src="dhauhsda" style={{float:"left",marginLeft:"10.5%",marginTop:"2%"}}></img>
                            <p style={{float:"left",marginLeft:"12%",marginTop:"2%"}}>张三</p>
                            <p style={{float:"left",marginLeft:"10%",marginTop:"2%"}}>13788888888</p>
                            <p style={{float:"left",marginLeft:"7%",marginTop:"2%"}}>软件学院</p>
                            <p style={{float:"left",marginLeft:"11%",marginTop:"2%"}}>男</p>
                            <p style={{float:"left",marginLeft:"12%",marginTop:"2%"}}>888886</p>
                        </div>
                        <div className="homedivlist">
                            <img src="dhauhsda" style={{float:"left",marginLeft:"10.5%",marginTop:"2%"}}></img>
                            <p style={{float:"left",marginLeft:"12%",marginTop:"2%"}}>张三</p>
                            <p style={{float:"left",marginLeft:"10%",marginTop:"2%"}}>13788888888</p>
                            <p style={{float:"left",marginLeft:"7%",marginTop:"2%"}}>软件学院</p>
                            <p style={{float:"left",marginLeft:"11%",marginTop:"2%"}}>男</p>
                            <p style={{float:"left",marginLeft:"12%",marginTop:"2%"}}>888886</p>
                        </div>
                        <div className="homedivlist">
                            <img src="dhauhsda" style={{float:"left",marginLeft:"10.5%",marginTop:"2%"}}></img>
                            <p style={{float:"left",marginLeft:"12%",marginTop:"2%"}}>张三</p>
                            <p style={{float:"left",marginLeft:"10%",marginTop:"2%"}}>13788888888</p>
                            <p style={{float:"left",marginLeft:"7%",marginTop:"2%"}}>软件学院</p>
                            <p style={{float:"left",marginLeft:"11%",marginTop:"2%"}}>男</p>
                            <p style={{float:"left",marginLeft:"12%",marginTop:"2%"}}>888886</p>
                        </div>
                        <div className="homedivlistbottom">
                            <img src="dhauhsda" style={{float:"left",marginLeft:"10.5%",marginTop:"2%"}}></img>
                            <p style={{float:"left",marginLeft:"12%",marginTop:"2%"}}>张三</p>
                            <p style={{float:"left",marginLeft:"10%",marginTop:"2%"}}>13788888888</p>
                            <p style={{float:"left",marginLeft:"7%",marginTop:"2%"}}>软件学院</p>
                            <p style={{float:"left",marginLeft:"11%",marginTop:"2%"}}>男</p>
                            <p style={{float:"left",marginLeft:"12%",marginTop:"2%"}}>888886</p>
                        </div>
                    </div>
                    <p style={{float:"left",marginTop:"-3.7%",marginLeft:"34%",fontSize:12}}>共42条</p>
                    <button style={{float:"left",marginTop:"-4%",marginLeft:"38%",width:"1.8%",height:"4%",borderRadius:3,borderColor:"white",backgroundColor:"white",fontSize:11,color:"gary"}}>1</button>
                    <button style={{float:"left",marginTop:"-4%",marginLeft:"40%",width:"1.8%",height:"4%",borderRadius:3,borderColor:"white",backgroundColor:"white",fontSize:11,color:"gary"}}>2</button>
                    <button style={{float:"left",marginTop:"-4%",marginLeft:"42%",width:"1.8%",height:"4%",borderRadius:3,borderColor:"white",backgroundColor:"white",fontSize:11,color:"gary"}}>3</button>
                    <button style={{float:"left",marginTop:"-4%",marginLeft:"44%",width:"1.8%",height:"4%",borderRadius:3,borderColor:"white",backgroundColor:"white",fontSize:11,color:"gary"}}>4</button>
                    <button style={{float:"left",marginTop:"-4%",marginLeft:"46%",width:"1.8%",height:"4%",borderRadius:3,borderColor:"white",backgroundColor:"white",fontSize:11,color:"gary"}}>5</button>
                    <button style={{float:"left",marginTop:"-4%",marginLeft:"48%",width:"1.8%",height:"4%",borderRadius:3,borderColor:"white",backgroundColor:"white",fontSize:11,color:"gary"}}>6</button>
                    <button style={{float:"left",marginTop:"-4%",marginLeft:"50%",width:"1.8%",height:"4%",borderRadius:3,borderColor:"white",backgroundColor:"white",fontSize:11,color:"gary"}}>...</button>
                    <button style={{float:"left",marginTop:"-4%",marginLeft:"52%",width:"1.8%",height:"4%",borderRadius:3,borderColor:"white",backgroundColor:"white",fontSize:11,color:"gary"}}>9</button>
                    <button style={{float:"left",marginTop:"-4%",marginLeft:"54%",width:"1.8%",height:"4%",borderRadius:3,borderColor:"white",backgroundColor:"white",fontSize:11,color:"gary"}}>10</button>  
                </div>
            </div>
            </>
        )
    }
}
