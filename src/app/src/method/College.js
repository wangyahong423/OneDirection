import { NavBar} from 'antd-mobile';
import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import '../App.css';

export default class College extends Component {
    render() {
        return (
            <div>
                <NavBar
                    style={{ backgroundColor: '#37376F', color: '#fff',position:'sticky ',top:'0',zIndex:10,textAlign:'center',height:'7vh'}}
                    leftContent={[
                    <Link to="/login"><span style={{fontSize:'17px',color:'white'}} className="iconfont icon-ico_leftarrow"></span></Link>
                ]}>
                    学院
                </NavBar>
                <div  className='collegeImg'>
                    <Link to='/collegeHistory'>
                        <div className='collegejieshao' >
                            <p to='/activate' className='collegeword'>历史介绍</p>
                        </div>
                    </Link>
                    <Link to='/collegeTeachers'>
                        <div className='collegejieshao'>
                            <p to='/invest' className='collegeword'>学院领导</p>
                        </div>
                    </Link>
                    <Link to='/collegeMajor'>
                        <div className='collegejieshao' >
                            <p to='/loss' className='collegeword'>专业介绍</p>
                        </div>
                    </Link>
                    <Link to='/collegeOther'>
                        <div className='collegejieshao' >
                            <p to='/loss' className='collegeword'>其他学院</p>
                        </div>
                    </Link>    
                </div>
            </div>
        )
    }
}
