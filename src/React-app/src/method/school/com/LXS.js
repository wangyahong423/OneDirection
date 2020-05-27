import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { NavBar, Carousel } from 'antd-mobile';
import '../../../App.css';
import { SearchBar } from 'antd-mobile';
import { List } from 'antd-mobile';
const Item = List.Item;
const Brief = Item.Brief;


export default class LXS extends Component {

    state = {
        value: '',
    };
    onChange = (value) => {
        this.setState({ value });
    };
    clear = () => {
        this.setState({ value: '' });
    };
    render() {
        return (
            <div>
                <NavBar
                    style={{ backgroundColor: '#37376F', color: '#fff', position: 'sticky ', top: '0', zIndex: 10, textAlign: 'center', height: '7vh' }}
                    leftContent={[
                        <Link to="/rcpy"><span style={{ fontSize: '17px', color: 'white' }} className="iconfont icon-ico_leftarrow"></span></Link>
                    ]}>
                    留学生教育
                </NavBar>
                <div style={{ marginTop: '4%' }}>
                    <span style={{ fontSize: '12px' }}>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;河北师范大学于.上世纪80年代开始招收海外留学生，是河北省第一批接收外国留学生的省属重点大学之-， 目前共培养了来自42个国家的3000余名留学生。河北师范大学根据留学生不同的学习目的、不同的汉语水平、不同的专业背景等具体情况，提供语言进修和学历学位教育两大类项目。其中语言进修教育项目分别设置长期和短期语言课程教学;学历学位教育项目依托学校各招生专业分别提供学士、硕士、博士的课程教学和科学研究。
                    </span>
                </div>

                <div style={{ marginTop: '3vh' }}>
                    <i className="iconfont icon-jiantou" style={{ marginLeft: '15vw' }}></i>
                    <a href="http://rsc.hebtu.edu.cn/" style={{ color: 'orange', fontWeight: 'bold', marginLeft: '5vw' }}>
                        相&nbsp;关&nbsp;链&nbsp;接：
                    </a>
                    <a style={{ color: 'blue' }}>
                        国&nbsp;际&nbsp;文&nbsp;化&nbsp;交&nbsp;流&nbsp;学&nbsp;院
                    </a>
                    <div style={{ backgroundColor: '#cccccc', height: '3.5vh', marginTop: '2vh', fontSize: 13, fontWeight: 800, borderRadius: 20 ,lineHeight:'3vh'}}>
                        <span style={{ marginLeft: '2vw', color: 'green' }}>一、语&nbsp;言&nbsp;进&nbsp;修&nbsp;教&nbsp;育&nbsp;项&nbsp;目</span>
                    </div>
                    <div style={{ height: '40vh', width: '94vw', marginLeft: '3vw',lineHeight:'2.5vh'}}>
                        <li style={{ fontSize: 12, listStyle: 'none', marginLeft: '5vw', marginTop: '1vh' }}>
                            1、长期语言课程
                        </li>
                        <li style={{ fontSize: 12, listStyle: 'none', marginTop: '1vh' }}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;学习时间为1个学期(约20周)以上不等,根据汉语水平不同，设有初级、中级和高级三种不同级别，分别提供听、说、读、写以及中国传统文化知识在内的全方位汉语言及汉文化学习内容。
                        </li>
                        <li style={{ fontSize: 12, listStyle: 'none', marginTop: '1vh' }}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;学校同时也开设HSK考试培训，学生可以根据需要自主选择相应级别，报名参加培训。除以上语言课程外，学院还设有免费的自主选修课程，内容包括中国武术、舞蹈、民歌或中国剪纸、国画、书法等课程。
                        </li>
                        <li style={{ fontSize: 12, listStyle: 'none', marginLeft: '5vw', marginTop: '1vh' }}>
                            2、短期语言课程
                        </li>
                        <li style={{ fontSize: 12, listStyle: 'none', marginTop: '1vh' }}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;学习时间1周至3个月不等，主要为有兴趣接触中国文化，但又没有太多时间在中国学习的个人及团组开设。
                        </li>
                        <li style={{ fontSize: 12, listStyle: 'none', marginTop: '1vh' }}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;短期学习团安排包括:语言文化课程、文化活动、旅游参观、实地考察等。
                        </li>
                    </div>
                    <div style={{ backgroundColor: '#cccccc', height: '3.5vh', marginTop: '2vh', fontSize: 13, fontWeight: 800, borderRadius: 20 ,lineHeight:'3vh'}}>
                        <span style={{ marginLeft: '2vw', color: '#91183b' }}>二、学&nbsp;历、&nbsp;学&nbsp;位&nbsp;教&nbsp;育&nbsp;项&nbsp;目</span>
                    </div>
                    <div style={{ height: '36vh', width: '94vw', marginLeft: '3vw' ,lineHeight:'2.5vh'}}>
                        <li style={{ fontSize: 12, listStyle: 'none', marginTop: '1vh' }}>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;河北师范大学接收来自世界各地的留学生攻读学士、硕士、博士学位课程，根据修读专业或专业方向，分别设计相应的培养计划.
                        </li>
                        <li style={{ fontSize: 12, listStyle: 'none', marginTop: '1vh' }}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;本科:学制4年，修满相应学分，通过毕业论文答辩，可取得毕业证书，符合学士学位规定条件者, 授予学士学位证书。
                        </li>
                        <li style={{ fontSize: 12, listStyle: 'none', marginTop: '1vh' }}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;学校同时也开设HSK考试培训，学生可以根据需要自主选择相应级别，报名参加培训。除以上语言课程外，学院还设有免费的自主选修课程,内容包括中国武术、舞蹈、民歌或中国剪纸、国画、书法等课程。
                        </li>
                        <li style={{ fontSize: 12, listStyle: 'none', marginTop: '1vh' }}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;硕士研究生:根据不同专业，学制有2年和3年两种，修满相应学分,通过毕业论文答辩,可取得毕业证书，符合硕士学位规定条件者，授予硕士学位证书。博士研究生:学制4年,修满相应学分，取得一定的科研成绩，完成博士学位论文，通过论文答辩,可取得毕业证书和博士学位证书。
                        </li>
                    </div>
                </div>
            </div>
        )
    }
}
