import { NavBar,SearchBar,Flex} from 'antd-mobile';
import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import '../../App.css'

export default class Fanqianwen extends Component {
    render() {
        return (
            <div>
                <NavBar
                    style={{ backgroundColor: '#37376F', color: '#fff',position:'sticky ',top:'0',zIndex:10,textAlign:'center',height:'7vh'}}
                    leftContent={[
                    <Link to="/alumnus"><span style={{fontSize:'17px',color:'white'}} className="iconfont icon-ico_leftarrow"></span></Link>
                ]}>
                    范千文
                </NavBar>
                <div className='lizhanshu' >
                    <img style={{height:'20vh',width:'30vw',marginLeft:'35%',marginTop:'30%'}} src='gonglve/范千文.jpg'></img>
                    <p style={{color:'white',textAlign:'center',fontSize:'18px'}}>【范/千/文】</p>
                    <hr style={{width:'80vw',textAlign:'center'}} />
                    <p style={{width:'70vw',color:'white',textAlign:'left',marginLeft:'15vw',lineHeight:'3vh'}}>范千文，男，汉族，1954年7月生，中共党员，河北井陉矿区人。大学学历，法学硕士。研究员。</p>
                    <p style={{width:'70vw',color:'white',textAlign:'left',marginLeft:'15vw',lineHeight:'3vh'}}>现任石家庄铁道大学党委副书记兼纪委书记，分管学生、纪检、监察、审计工作。971年7月参加工作，1976年6月加入中国共产党。曾任井径矿区北寨、南寨学校副校长。1979年7月毕业于河北师范大学化学系，1999年1月，获河北师范大学法学硕士。毕业后在河北医科大学工作，1984年5月调至河北省教育厅招生办工作，历任河北省教育厅学生处副处长、处长。2004年10月起任石家庄铁道学院党委副书记。2010年3月任石家庄铁道大学党委副书记兼纪委书记。</p>
                    <hr style={{width:'80vw',textAlign:'center'}} />
                </div>
            </div>
        )
    }
}
