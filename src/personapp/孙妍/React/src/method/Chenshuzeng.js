import { NavBar,SearchBar,Flex} from 'antd-mobile';
import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import '../App.css';

export default class Chenshuzeng extends Component {
    render() {
        return (
            <div>
                <NavBar
                    style={{ backgroundColor: '#37376F', color: '#fff',position:'sticky ',top:'0',zIndex:10,textAlign:'center',height:'7vh'}}
                    leftContent={[
                    <Link to="/alumnus"><span style={{fontSize:'17px',color:'white'}} className="iconfont icon-ico_leftarrow"></span></Link>
                ]}>
                    陈书增
                </NavBar>
                <div className='lizhanshu' >
                    <img style={{height:'20vh',width:'30vw',marginLeft:'35%',marginTop:'30%'}} src='gonglve/陈书增.jpg'></img>
                    <p style={{color:'white',textAlign:'center',fontSize:'18px'}}>【陈/书/增】</p>
                    <hr style={{width:'80vw',textAlign:'center'}} />
                    <p style={{width:'70vw',color:'white',textAlign:'left',marginLeft:'15vw',lineHeight:'3vh'}}>陈书增，男，汉族，1965年10月生，河北内丘人，1986年6月加入中国共产党，1986年7月参加工作，河北师范学院中文系中文专业毕业，大学学历，中国社会科学院法学硕士学位。</p>
                    <p style={{width:'70vw',color:'white',textAlign:'left',marginLeft:'15vw',lineHeight:'3vh'}}>现任河北省政协秘书长、党组成员、机关党组书记。</p>
                    <hr style={{width:'80vw',textAlign:'center'}} />
                </div>
            </div>
        )
    }
}
