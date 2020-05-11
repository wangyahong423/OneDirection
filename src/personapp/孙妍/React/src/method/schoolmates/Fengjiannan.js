import { NavBar,SearchBar,Flex} from 'antd-mobile';
import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import '../../App.css'

export default class Fengjiannan extends Component {
    render() {
        return (
            <div>
                <NavBar
                    style={{ backgroundColor: '#37376F', color: '#fff',position:'sticky ',top:'0',zIndex:10,textAlign:'center',height:'7vh'}}
                    leftContent={[
                    <Link to="/alumnus"><span style={{fontSize:'17px',color:'white'}} className="iconfont icon-ico_leftarrow"></span></Link>
                ]}>
                    冯健男
                </NavBar>
                <div className='lizhanshu' >
                    <img style={{height:'20vh',width:'30vw',marginLeft:'35%',marginTop:'30%'}} src='gonglve/冯建男.jpg'></img>
                    <p style={{color:'white',textAlign:'center',fontSize:'18px'}}>【冯/健/男】</p>
                    <hr style={{width:'80vw',textAlign:'center'}} />
                    <p style={{width:'70vw',color:'white',textAlign:'left',marginLeft:'15vw',lineHeight:'3vh'}}>冯健男，湖北黄梅人。中共党员。1949年毕业于北京大学西方语言文学系。</p>
                    <p style={{width:'70vw',color:'white',textAlign:'left',marginLeft:'15vw',lineHeight:'3vh'}}>1949年参军南下，历任中南军大广西分校宣教干事，中南军区《战士报》、《解放军文艺》编辑，张家口地区文联、河北省文联干部，河北师范大学中文系教师、系主任，教授。中国新文学学会副会长，河北省文学学会会长。</p>
                    <hr style={{width:'80vw',textAlign:'center'}} />
                </div>
            </div>
        )
    }
}
