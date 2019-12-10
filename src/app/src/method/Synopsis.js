import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import { NavBar} from 'antd-mobile';

export default class Synopsis extends Component {
    render() {
        return (
            <div>
                <NavBar
                    style={{ backgroundColor: '#37376F', color: '#fff',position:'sticky ',top:'0',zIndex:10,textAlign:'center',height:'7vh'}}
                    leftContent={[
                        <Link to="/school"><span style={{fontSize:'17px',color:'white'}} className="iconfont icon-ico_leftarrow"></span></Link>
                    ]}>
                        学校简介
                </NavBar>
                <div  className='jianjieImg'>
                    <div className='jianjieBox' >
                        <div className='jianjieword'>
                            <p>河北师范大学是河北省人民政府与教育部共建的省属重点大学，河北省“双一流”建设一层次高校。学校起源于1902年创建于北京的顺天府学堂和1906年创建于天津的北洋女师范学堂，具有117年的发展历史和光荣的办学传统。1996年6月，原河北师范大学、河北师范学院与创建于1952年的河北教育学院、创建于1984年的河北职业技术师范学院合并，组建成新的河北师范大学。校友中有老一代革命家邓颖超、刘清扬、郭隆真、杨秀峰、康世恩、荣高棠等，有学界名人梁漱溟、张申府、汤用彤等，有中科院院士严陆光、郝柏林、李树深、贺泓等，也有许绍发、蔡振华等一批体育界精英。新中国成立以来，学校共为国家培养了26万余名各类专业人才。</p>
                        </div>
                    </div>
                </div> 
            </div>
        )
    }
}
