import React, { Component } from 'react'
import {BrowserRouter as Router,Link} from 'react-router-dom';
import { NavBar, Icon,Tabs,Carousel,List} from 'antd-mobile';

export default class Subject extends Component {
    render() {
        return (
            <div>
                <div>
                    <NavBar
                        style={{ backgroundColor: '#37376F', color: '#fff',position:'sticky ',top:'0',zIndex:10,textAlign:'center',height:'7vh'}}
                        leftContent={[
                            <Link to="/school"><span style={{fontSize:'17px',color:'white'}} className="iconfont icon-ico_leftarrow"></span></Link>
                        ]}>
                            学科专业
                    </NavBar>
                    <div  className='jianjieImg'>
                        <div className='jianjieBox' >
                            <div className='jianjieword'>
                                <p>我校于1981年获批硕士学位授权单位，是全国首批硕士学位授权单位之一；1998年，学校获批博士学位授权单位。经过三十多年的努力，学校的学科建设取得了长足的进步和发展。</p>
                                <p>学位授权点方面，学校现有博士学位授权一级学科11个，硕士学位授权一级学科29个；博士专业学位授权类别1种，硕士专业学位授权类别14种；学科专业覆盖哲学、经济学、法学、教育学、文学、历史学、理学、工学、管理学、艺术学等十大学科门类。</p>
                                <p>重点学科方面，学校现有国家重点学科1个，河北省“双一流”建设学科7个，河北省高校国家重点学科培育项目1个，河北省强势特色学科4个，省级重点学科14个，校级重点学科18个。</p>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        )
    }
}
