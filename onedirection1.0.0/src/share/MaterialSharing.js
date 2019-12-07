import React, { Component } from 'react'
import { NavBar, SearchBar, WingBlank, SegmentedControl} from 'antd-mobile';
import {HashRouter as Router,Route,Link} from 'react-router-dom';
import '../share.css'

export default class MaterialSharing extends Component {
    constructor() {
        super();
        this.state = {
            backgroundColor1: true,
            backgroundColor2: true,
            backgroundColor3: true,
        }
      }
      changeHeight= ()=> {
        this.setState({
            backgroundColor1: !this.state.backgroundColor1,
            backgroundColor2: this.state.backgroundColor2,
            backgroundColor3: this.state.backgroundColor3,
        })
      }
      changeHeight1= ()=> {
        this.setState({
            backgroundColor1: this.state.backgroundColor1,
            backgroundColor2: !this.state.backgroundColor2,
            backgroundColor3: this.state.backgroundColor3,
        })
      }
      changeHeight2= ()=> {
        this.setState({
            backgroundColor1: this.state.backgroundColor1,
            backgroundColor2: this.state.backgroundColor2,
            backgroundColor3: !this.state.backgroundColor3,
        })
      }
    render() {
        let Word={
            backgroundColor: this.state.backgroundColor1?  'transparent' : '#98B4E7'
        }
        let PDF={
            backgroundColor: this.state.backgroundColor2? 'transparent' : '#98B4E7'
        }
        let PPT={
            backgroundColor: this.state.backgroundColor3? 'transparent' : '#98B4E7'
        }
        return (
            <div>
            {/* <NavBar style={{backgroundColor:'#37376F',color:'#fff',position:'sticky ',top:'0',zIndex:10,textAlign:'center',height:"7vh"}}
                leftContent={[
                    <Link to="/Share"><span className="iconfont icon-ico_leftarrow"></span></Link>
                ]}>
                资料共享</NavBar>  */}
                <NavBar
                    style={{ backgroundColor: '#37376F', color: '#fff',position:'sticky ',top:'0',zIndex:10,textAlign:'center',height:'7vh'}}
                    leftContent={[
                        <Link to="/Share"><span style={{fontSize:'17px',color:'white'}} className="iconfont icon-ico_leftarrow"></span></Link>
                    ]}>
                        资料共享
                </NavBar> 
                <div>
                    <SearchBar placeholder="搜索" maxLength={8} />
                    <div className="three"  style={Word} onClick={()=>this.changeHeight()}>
                        <Link to ="/Word">
                            <span style={{color:"#000"}}>Word</span>
                        </Link>
                    </div>
                    <div className="three" style={PDF} onClick={()=>this.changeHeight1()}>
                        <Link to ="/PDF">
                            <span style={{color:"#000"}}>PDF</span>
                        </Link>
                    </div>
                    <div className="three" style={PPT} onClick={()=>this.changeHeight2()}>
                        <Link to ="/PPT">
                            <span style={{color:"#000"}}>PPT</span>
                        </Link>
                    </div>
                </div>
           
        </div>
      
        )
    }

}
