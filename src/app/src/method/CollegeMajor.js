import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import { NavBar,List,Accordion } from 'antd-mobile';
import '../App.css';

export default class CollegeStudents extends Component {
    render() {
        return (
            <div>
                <NavBar
                    style={{ backgroundColor: '#37376F', color: '#fff',position:'sticky ',top:'0',zIndex:10,textAlign:'center',height:'7vh'}}
                    leftContent={[
                        <Link to="/college"><span style={{fontSize:'17px',color:'white'}} className="iconfont icon-ico_leftarrow"></span></Link>
                    ]}>
                        专业介绍
                </NavBar> 
                <div  className='teacherImg'>
                        <div className='teacherword'>                        
                            <Accordion style={{marginTop:'11vh',width:'100vw'}} accordion openAnimation={{}} className="my-accordion" onChange={this.onChange}>
                                <Accordion.Panel header="HTML5与移动互联网开发方向：">
                                    <List className="my-list">
                                        <List.Item >
                                            <textarea cols="2" rows="13" style={{width:'90vw',border:'none',textIndent:'2em',lineHeight:'4vh'}}>
                                                涉及的内容包括：1.大前端开发，基于HTML5、CSS3、JavaScript，完成各种Web前端程序开发（Web网站和移动Web App）；2.基于Node.js的Web全栈开发，前端+后端开发（Angular/React/Vue、Node.js、MySQL/MongoDB）；3.混合应用开发，使用HTML5+CSS+JavaScript技术来开发移动端App；4.微信开发，微信公众号（服务号、订阅号）开发和微信小程序开发；能够掌握现有的第三方平台的基本使用，并能够以此为基础进行各种应用开发；就业范围（前端工程师、Node工程师、微信开发、混合应用开发等）。
                                            </textarea>
                                        </List.Item>
                                    </List>
                                </Accordion.Panel>
                                <Accordion.Panel header="软件测试方向：" className="pad">
                                    <List className="my-list">
                                        <List.Item>
                                            <textarea cols='2' rows='13' style={{width:'90vw',border:'none',textIndent:'2em',lineHeight:'4vh'}}>
                                            涉及的内容包括：1.UI端自动化测试，基于Java、TestNG、Ant、Selenium，实现基于界面的无人值守自动化测试；2.接口自动化测试，基于Java、HttpClient、Jenkins、ReportNG实现基于数据驱动的接口测试的自动化平台；3.移动端自动化测试，基于Monkey、MonkeyRunner、UiAutomator、Robotium、Appium的移动端测试，掌握常见的po模型、关键字模型、服务自动化、持续集成；4.性能测试，能够掌握性能测试的全流程、主流工具（ LoadRunnner、JMeter）使用、测试脚本开发、场景设计以及测试结果分析，掌握如何在真实项目中进行性能测试，以及如何对结果进行分析与调优；就业范围（测试开发工程师、性能测试工程师、移动端测试工程师）。
                                            </textarea>
                                        </List.Item>
                                    </List>
                                </Accordion.Panel>
                                <Accordion.Panel header="人工智能方向：" className="pad">
                                    <List className="my-list">
                                        <List.Item>
                                            <textarea cols='2' rows='13' style={{width:'90vw',border:'none',textIndent:'2em',lineHeight:'4vh'}}>
                                            涉及的内容包括：1.Python系列科学计算工具的原理与使用，包括Python基础语法与标准库，Numpy、Scipy、Matplotlib、SKLearn等常用科学计算工具，以及Pytorch、TensorFlow等深度学习框架。2.经典神经网络模型，包括场景的诸如K近邻法、朴素贝叶斯模型、决策树模型、聚类模型、降维与压缩模型等，通过学习经典模型可以掌握人工智能与机器学习中的基本概念，并可使用这些模型完成对实际数据的建模分析。3.数字图像处理，主要包括数字图像的基本概念以及对数字图像的多种变换、滤波、压缩、分割等。4.深度学习，包括神经网络的基础内容以及前言领域的部分成果分析，通过学习深度学习课程，可完成部分计算机视觉与自然语言处理的任务。5.推荐系统，主要包括协同过滤、基于内容的推荐、基于关联规则的推荐等。
                                            </textarea>
                                        </List.Item>
                                    </List>
                                </Accordion.Panel>
                                <Accordion.Panel header="Java与移动智能设备开发：" className="pad">
                                    <List className="my-list">
                                        <List.Item>
                                            <textarea cols='2' rows='13' style={{width:'90vw',border:'none',textIndent:'2em',lineHeight:'4vh'}}>
                                            涉及的内容包括：1.Java企业级应用开发，基于Java语言开发平台，通过使用JavaSE、Servlet、JSP、MySql等实现中小企业的WEB应用开发。2.基于SSH或SSM的大型Web开发框架，使用Struts2或SpringMVC、Spring、Hibernate或Mybatis等主流大型WEB框架实现大型的重量级企业应用开发。3.基于Android开发平台，通过四大组件灵活实现手机应用绚烂多彩的界面设计与开发；通过图形图像处理、基本动画操作、多媒体应用、手机传感器等，实现丰富多彩的Android手机的娱乐或游戏应用开发。4.借助百度地图、极光推送、OkHttp、SmartRefreshLayout、EventBus、Glide、Gson等在手机上实现灵活地图定位、导航、二维码识别、高效率信息传输等各种客户端应用功能。5.综合使用Java技术和Android技术，实现企业后台管理与Android手机客户端的灵活交互和各种应用功能。
                                            </textarea>
                                        </List.Item>
                                    </List>
                                </Accordion.Panel>
                            </Accordion>
                        </div>
                </div>
            </div>
        )
    }
}
