import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { NavBar, Carousel } from 'antd-mobile';
import '../../../../App.css';
import { SearchBar } from 'antd-mobile';
import { List } from 'antd-mobile';
const Item = List.Item;
const Brief = Item.Brief;


export default class JXDD extends Component {

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
                        <Link to="/bks"><span style={{ fontSize: '17px', color: 'white' }} className="iconfont icon-ico_leftarrow"></span></Link>
                    ]}>
                    教学督导
                </NavBar>
                <div style={{ marginTop: '3vh' }}>
                    <div style={{ height: '60vh', width: '94vw', marginLeft: '3vw',lineHeight:'2.5vh'}}>
                        <li style={{ fontSize: 16, listStyle: 'none',marginTop: '1vh',lineHeight:'3vh',
                            fontWeight:550,color:'pink'}}>
                        一、教学督导委员会
                        </li>
                        <li style={{ fontSize: 12, listStyle: 'none',marginTop: '1vh',lineHeight:'3vh'}}>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;主任&nbsp;&nbsp;:&nbsp;&nbsp;林广瑞&nbsp;&nbsp;&nbsp;&nbsp;赵彦民
                        </li>
                        <li style={{ fontSize: 12, listStyle: 'none', marginTop: '1vh',lineHeight:'3vh'}}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;成员&nbsp;&nbsp;:&nbsp;&nbsp;孙梅艳&nbsp;&nbsp;&nbsp;&nbsp;孙&nbsp;&nbsp;鸿&nbsp;&nbsp;&nbsp;&nbsp;史锦秀&nbsp;&nbsp;&nbsp;&nbsp;程培社&nbsp;&nbsp;&nbsp;&nbsp;车文芬&nbsp;&nbsp;&nbsp;&nbsp;刘秀萍&nbsp;&nbsp;&nbsp;&nbsp;程海魁&nbsp;&nbsp;&nbsp;&nbsp;高永昌&nbsp;&nbsp;&nbsp;&nbsp;杨述韬&nbsp;&nbsp;&nbsp;&nbsp;付尊英&nbsp;&nbsp;&nbsp;&nbsp;南月省&nbsp;&nbsp;&nbsp;&nbsp;赵其林&nbsp;&nbsp;&nbsp;&nbsp;张庆秀&nbsp;&nbsp;&nbsp;&nbsp;郭泽英&nbsp;&nbsp;&nbsp;&nbsp;姜玉兴&nbsp;&nbsp;&nbsp;&nbsp;戴俊奎&nbsp;&nbsp;&nbsp;&nbsp;
                        </li>
                        <li style={{ fontSize: 16, listStyle: 'none',marginTop: '1vh',lineHeight:'3vh',
                            fontWeight:550,color:'pink'}}>
                       二、教学督导委员会主要工作职责
                        </li>
                        <li style={{ fontSize: 12, listStyle: 'none', marginTop: '1vh',lineHeight:'3vh'}}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;教学督导专家围绕课程教学开展活动。通过课堂听课、开展专项检查与调研等多种形式，深入教学第一线了解教师教学水平、讲课质量、教学态度、教学秩序及教学管理等情况，分析和评估课堂教学效果,检查教学环境和教学条件，听取教师的意见和建议，了解学生学习情况并听取学生对教学工作的意见。及时向管理部门反馈有关情况，为学校发展和教育教学改革提出建议和决策咨询，在督促教师遵守本科教学工作规范,指导教师提高教学水平，促进学风建设和改进学校教育教学管理水平等方面发挥应有的作用。
                        </li>
                    </div>
                </div>
            </div>
        )
    }
}
