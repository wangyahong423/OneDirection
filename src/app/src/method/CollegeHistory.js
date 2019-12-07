import React, { Component } from 'react'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import { NavBar, Flex, WhiteSpace, List,SearchBar } from 'antd-mobile';
import '../App.css';

export default class CollegeHistory extends Component {
    render() {
        return (
            <div>
                <NavBar
                    style={{ backgroundColor: '#37376F', color: '#fff',position:'sticky ',top:'0',zIndex:10,textAlign:'center',height:'7vh'}}
                    leftContent={[
                        <Link to="/college"><span style={{fontSize:'17px',color:'white'}} className="iconfont icon-ico_leftarrow"></span></Link>
                    ]}>
                        历史介绍
                </NavBar> 
                <div  className='jianjieImg'>
                    <div className='jianjieBox' >
                        <div className='cword'>
                            <p>河北师范大学软件学院是为适应我国经济结构的战略性调整和软件产业发展对人才的迫切需要，在深度整合学校优势学科资源和企业丰富实践经验的基础上发展起来的一个新工科学院。</p>
                            <p style={{marginTop:'-3vh'}}>软件学院以学科专业建设为龙头，以推进科技创新、培养模式创新和发展方式创新为核心，紧密跟踪软件技术发展趋势，着力培养行业紧缺的软件工程师。专业依托软件行业前沿态势，面向人工智能、数据科学两大领域，开设了“人工智能、HTML5与移动互联网开发、JAVA与移动智能设备开发、软件测试”四个专业方向。培养方案及课程体系紧贴市场需求，由学校与企业联合制定，并与国际接轨。课程体系在符合教育部专业规范的前提下，突出需求导向和应用性导向，加大实践课程比例，并依据市场需求变化及时进行动态调整，时刻保证专业课程设置及教学内容紧跟国际技术前沿，注重学生实践技能与创新精神的合力培养，确保为社会提供德才兼备的应用技能型高级软件人才。</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
