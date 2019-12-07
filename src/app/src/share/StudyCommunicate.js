import React, { Component } from 'react'
import { NavBar, SearchBar, WingBlank, SegmentedControl} from 'antd-mobile';
import {HashRouter as Router,Route,Link} from 'react-router-dom';
export default class MaterialSharing extends Component {
    constructor() {
        super();
        this.state = {
            color1: true,
            color2: true,
            color3: true,
            color4: true,
        }
      }
      changeColor1= ()=> {
        this.setState({
            color1: !this.state.color1,
        })
      }
      changeColor2= ()=> {
        this.setState({
            color2: !this.state.color2,
        })
      }
      changeColor3= ()=> {
        this.setState({
            color3: !this.state.color3,
        })
      }
      changeColor4= ()=> {
        this.setState({
            color4: !this.state.color4,
        })
      }
    render() {
        let Zan1={
            color: this.state.color1?'#000':'red' ,
            marginLeft: '11vw',
            fontSize:"3.2vh"
        }
        let Zan2={
            color: this.state.color2?'#000':'red' 
        }
        let Zan3={
            color: this.state.color3?'#000':'red' 
        }
        let Zan4={
            color: this.state.color4?'#000':'red'  
        }
        return (
        <div>
               <NavBar style={{backgroundColor:'#37376F',color:'#fff',position:'sticky ',top:'0',zIndex:10,textAlign:'center',height:'7vh'}}
                leftContent={[
                    <Link to="/Share"><span style={{fontSize:'17px',color:'white'}} className="iconfont icon-ico_leftarrow"></span></Link>
                ]}>
                学习交流</NavBar> 
            <div style={{marginTop:"-6vh"}}>
                <WingBlank><div className="sub-title"></div></WingBlank>
                <SearchBar placeholder="搜索" maxLength={8} />
            </div>
            <div style={{width:"96vw",paddingBottom:"1vh",backgroundColor:"#fff",borderRadius:"2vh",margin:"2vw"}}>
                <div style={{height:"10vh",width:"90vw"}}>
                    <img src={(`studyCommunicate/1.jpg`)} style={{height:"8vh",width:"8vh",borderRadius:"50%",margin:"1vh",float:"left"}}></img>
                    <div style={{height:"8vh",width:"60vw",float:"left"}}>
                        <p style={{margin:"2vh 0 0 2vh",fontSize:"2vh",float:"left"}}>薄荷水加冰</p>
                        <p style={{fontSize:"1vh",float:"left",margin:"6vh 0 0 -9vh"}}>2018-4-05</p>
                    </div>
                </div>
                <div style={{width:"90vw",margin:"3vw"}}>
                    <span>
                        大二就要分方向了，希望学长学姐可以给出一些建议，拜托了！!
                    </span>
                    <hr></hr>
                    <span className="iconfont icon-zhuanfa"style={{fontSize:"4vw",margin:"0 12vw 0 13vw"}}>
                    </span>
                    <Link to="/CommunicataDetails">
                    <span className="iconfont icon-pinglun"style={{fontSize:"6vw",margin:"0 12vw 0 13vw"}}>
                    </span>
                    </Link>
                    
                    <span  style={Zan1} onClick={()=>this.changeColor1()} className="iconfont icon-dianzan">
                    </span>  
                </div>            
            </div>
            <div style={{width:"96vw",paddingBottom:"1vh",backgroundColor:"#fff",borderRadius:"2vh",margin:"2vw"}}>
                <div style={{height:"10vh",width:"90vw"}}>
                    <img src={(`studyCommunicate/1.jpg`)} style={{height:"8vh",width:"8vh",borderRadius:"50%",margin:"1vh",float:"left"}}></img>
                    <div style={{height:"8vh",width:"60vw",float:"left"}}>
                        <p style={{margin:"2vh 0 0 2vh",fontSize:"2vh",float:"left"}}>薄荷水加冰</p>
                        <p style={{fontSize:"1vh",float:"left",margin:"6vh 0 0 -9vh"}}>2018-4-05</p>
                    </div>
                </div>
                <div style={{width:"90vw",margin:"3vw"}}>
                    <span>
                        大二就要分方向了，希望学长学姐可以给出一些建议，拜托了！!
                    </span>
                    <hr></hr>
                    <span className="iconfont icon-zhuanfa"style={{fontSize:"4vw",margin:"0 12vw 0 13vw"}}>
                    </span>
                    <Link to="/CommunicataDetails">
                    <span className="iconfont icon-pinglun"style={{fontSize:"6vw",margin:"0 12vw 0 13vw"}}>
                    </span>
                    </Link>
                    
                    <span  style={Zan1} onClick={()=>this.changeColor1()} className="iconfont icon-dianzan">
                    </span>  
                </div>            
            </div>
           
            <div style={{width:"96vw",paddingBottom:"1vh",backgroundColor:"#fff",borderRadius:"2vh",margin:"2vw"}}>
                <div style={{height:"10vh",width:"90vw"}}>
                    <img src={(`studyCommunicate/1.jpg`)} style={{height:"8vh",width:"8vh",borderRadius:"50%",margin:"1vh",float:"left"}}></img>
                    <div style={{height:"8vh",width:"60vw",float:"left"}}>
                        <p style={{margin:"2vh 0 0 2vh",fontSize:"2vh",float:"left"}}>薄荷水加冰</p>
                        <p style={{fontSize:"1vh",float:"left",margin:"6vh 0 0 -9vh"}}>2018-4-05</p>
                    </div>
                </div>
                <div style={{width:"90vw",margin:"3vw"}}>
                    <span>
                        大二就要分方向了，希望学长学姐可以给出一些建议，拜托了！!
                    </span>
                    <hr></hr>
                    <span className="iconfont icon-zhuanfa"style={{fontSize:"4vw",margin:"0 12vw 0 13vw"}}>
                    </span>
                    <Link to="/CommunicataDetails">
                    <span className="iconfont icon-pinglun"style={{fontSize:"6vw",margin:"0 12vw 0 13vw"}}>
                    </span>
                    </Link>
                    
                    <span  style={Zan1} onClick={()=>this.changeColor1()} className="iconfont icon-dianzan">
                    </span>  
                </div>            
            </div>
            <div style={{width:"96vw",paddingBottom:"1vh",backgroundColor:"#fff",borderRadius:"2vh",margin:"2vw"}}>
                <div style={{height:"10vh",width:"90vw"}}>
                    <img src={(`studyCommunicate/1.jpg`)} style={{height:"8vh",width:"8vh",borderRadius:"50%",margin:"1vh",float:"left"}}></img>
                    <div style={{height:"8vh",width:"60vw",float:"left"}}>
                        <p style={{margin:"2vh 0 0 2vh",fontSize:"2vh",float:"left"}}>薄荷水加冰</p>
                        <p style={{fontSize:"1vh",float:"left",margin:"6vh 0 0 -9vh"}}>2018-4-05</p>
                    </div>
                </div>
                <div style={{width:"90vw",margin:"3vw"}}>
                    <span>
                        大二就要分方向了，希望学长学姐可以给出一些建议，拜托了！!
                    </span>
                    <hr></hr>
                    <span className="iconfont icon-zhuanfa"style={{fontSize:"4vw",margin:"0 12vw 0 13vw"}}>
                    </span>
                    <Link to="/CommunicataDetails">
                    <span className="iconfont icon-pinglun"style={{fontSize:"6vw",margin:"0 12vw 0 13vw"}}>
                    </span>
                    </Link>
                    
                    <span  style={Zan1} onClick={()=>this.changeColor1()} className="iconfont icon-dianzan">
                    </span>  
                </div>            
            </div>
            <Link to ="Communicate">
            <div style={{position:"fixed",top:"88%",left:"80vw"}}>
                <span className="iconfont icon-jiahao" style={{fontSize:"8vh",color:"#37376F"}}></span>
            </div>
            </Link>
        </div>
        )
    }
}
