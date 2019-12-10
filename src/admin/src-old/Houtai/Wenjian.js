import React, { Component } from 'react'
import { SearchBar } from 'antd-mobile';
import {Link} from 'react-router-dom';
export default class Wenjian extends Component {
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
                    <p style={{fontSize:16,float:"left",marginLeft:"8%",marginTop:"1.5%"}}>文件管理</p>
                </div>
                <div className="homediv2">
                    <ul>
                    <Link to="/home">
                        <p className="iconfont icon-fangzi" style={{fontSize:18,marginTop:"15%",color:"#555151"}}>用户管理</p>
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
                        <p className="iconfont icon-fangzi" style={{fontSize:18,marginTop:"8%",color:"#456ab5"}}>文件管理</p>
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
                            marginLeft:"12%",
                            marginTop:"1%"}}>
                    </SearchBar>
                    <button style={{marginTop:"1.8%",marginLeft:"5%",borderRadius:"4px",fontSize:12,width:"4.2%",height:"5%",backgroundColor:"blue",color:"white",borderColor:"blue"}}>倒序</button>
                    <button style={{marginTop:"1.8%",marginLeft:"5%",borderRadius:"4px",fontSize:12,width:"4.2%",height:"5%",backgroundColor:"white"}}>全部</button>
                    <button style={{marginTop:"1.8%",marginLeft:"5%",borderRadius:"4px",fontSize:12,width:"4.5%",height:"5%",backgroundColor:"blue",color:"white",borderColor:"blue"}}>已处理</button>
                    <button style={{marginTop:"1.8%",marginLeft:"5%",borderRadius:"4px",fontSize:12,width:"4.5%",height:"5%",backgroundColor:"white"}}>未处理</button>
                    <div style={{height:600,width:"100%",float:"left"}}>
                        <p className="iconfont icon-ppt1" style={{float:"left",marginLeft:"28%",marginTop:"1.2%",fontSize:100}}></p>
                        <p className="iconfont icon-pdf" style={{float:"left",marginLeft:"10%",marginTop:"2%",fontSize:90}}></p>
                        <p className="iconfont icon-Word" style={{float:"left",marginLeft:"10%",marginTop:"1%",fontSize:110}}></p>
                        <div className="homedivlist" style={{marginTop:"-8%"}}>
                            <p style={{float:"left",marginLeft:"10%",marginTop:"2%",fontSize:18}}>1</p>
                            <p style={{float:"left",marginLeft:"14%",marginTop:"2%",fontSize:18}}>我的PPT.pptx</p>
                            <p style={{float:"left",marginLeft:"14%",marginTop:"2%",fontSize:18}}>2019/12/4</p>
                            <button style={{borderRadius:2,backgroundColor:"red",color:"white",fontSize:18,width:"10%",height:"60%",marginTop:"1.5%",marginLeft:"20%",borderColor:"red"}}>删除
                            </button>
                        </div>
                        <div className="homedivlist" style={{marginTop:"-4%"}}>
                            <p style={{float:"left",marginLeft:"10%",marginTop:"2%",fontSize:18}}>1</p>
                            <p style={{float:"left",marginLeft:"14%",marginTop:"2%",fontSize:18}}>我的PPT.pptx</p>
                            <p style={{float:"left",marginLeft:"14%",marginTop:"2%",fontSize:18}}>2019/12/4</p>
                            <button style={{borderRadius:2,backgroundColor:"red",color:"white",fontSize:18,width:"10%",height:"60%",marginTop:"1.5%",marginLeft:"20%",borderColor:"red"}}>删除
                            </button>
                        </div>
                        <div className="homedivlist" style={{marginTop:"0%"}}>
                            <p style={{float:"left",marginLeft:"10%",marginTop:"2%",fontSize:18}}>1</p>
                            <p style={{float:"left",marginLeft:"14%",marginTop:"2%",fontSize:18}}>我的PPT.pptx</p>
                            <p style={{float:"left",marginLeft:"14%",marginTop:"2%",fontSize:18}}>2019/12/4</p>
                            <button style={{borderRadius:2,backgroundColor:"red",color:"white",fontSize:18,width:"10%",height:"60%",marginTop:"1.5%",marginLeft:"20%",borderColor:"red"}}>删除
                            </button>
                        </div>
                        <div className="homedivlist" style={{marginTop:"0%"}}>
                            <p style={{float:"left",marginLeft:"10%",marginTop:"2%",fontSize:18}}>1</p>
                            <p style={{float:"left",marginLeft:"14%",marginTop:"2%",fontSize:18}}>我的PPT.pptx</p>
                            <p style={{float:"left",marginLeft:"14%",marginTop:"2%",fontSize:18}}>2019/12/4</p>
                            <button style={{borderRadius:2,backgroundColor:"red",color:"white",fontSize:18,width:"10%",height:"60%",marginTop:"1.5%",marginLeft:"20%",borderColor:"red"}}>删除
                            </button>
                        </div>
                        <div className="homedivlist" style={{marginTop:"0%"}}>
                            <p style={{float:"left",marginLeft:"10%",marginTop:"2%",fontSize:18}}>1</p>
                            <p style={{float:"left",marginLeft:"14%",marginTop:"2%",fontSize:18}}>我的PPT.pptx</p>
                            <p style={{float:"left",marginLeft:"14%",marginTop:"2%",fontSize:18}}>2019/12/4</p>
                            <button style={{borderRadius:2,backgroundColor:"red",color:"white",fontSize:18,width:"10%",height:"60%",marginTop:"1.5%",marginLeft:"20%",borderColor:"red"}}>删除
                            </button>
                        </div>
                        <div className="homedivlistbottom" style={{marginTop:"0%"}}>
                        <p style={{float:"left",marginLeft:"10%",marginTop:"2%",fontSize:18}}>1</p>
                            <p style={{float:"left",marginLeft:"14%",marginTop:"2%",fontSize:18}}>我的PPT.pptx</p>
                            <p style={{float:"left",marginLeft:"14%",marginTop:"2%",fontSize:18}}>2019/12/4</p>
                            <button style={{borderRadius:2,backgroundColor:"red",color:"white",fontSize:18,width:"10%",height:"60%",marginTop:"1.5%",marginLeft:"20%",borderColor:"red"}}>删除
                            </button>
                        </div>                   
                    </div>
                    <p style={{float:"left",marginTop:"-3.7%",marginLeft:"34%",fontSize:12}}>共49条</p>
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
