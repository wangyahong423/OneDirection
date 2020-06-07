import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { NavBar, Carousel } from 'antd-mobile';
import '../../../App.css';
import { SearchBar } from 'antd-mobile';
import { List } from 'antd-mobile';
import { nonsense } from 'antd-mobile/lib/picker';
const Item = List.Item;
const Brief = Item.Brief;


export default class JXJY extends Component {

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
                    继续教育
                </NavBar>

                <div style={{ marginTop: '3vh' }}>
                    <i className="iconfont icon-jiantou" style={{ marginLeft: '5vw' }}></i>
                    <a style={{ color: 'orange', fontWeight: 'bold', marginLeft: '5vw', fontSize: 12 }}>
                        相&nbsp;关&nbsp;链&nbsp;接：
                    </a>
                    <a href="http://cjxy.hebtu.edu.cn/" style={{ color: 'blue', fontSize: 12 }}>
                        继续教育学院
                    </a>
                    <a style={{ color: 'green' }}>
                        &nbsp;&nbsp;&nbsp;||
                    </a>
                    <a href="http://dgsxb.hebtu.edu.cn/" style={{ color: 'blue', fontSize: 12 }}>
                        &nbsp;&nbsp;&nbsp;顶岗支教指导中心
                    </a>
                </div>

                <div style={{ marginTop: '1vh' }}>
                    <i className="iconfont icon-jiantou" style={{ marginLeft: '5vw' }}></i>
                    <a style={{ color: 'orange', fontWeight: 'bold', marginLeft: '5vw', fontSize: 12 }}>
                        相&nbsp;关&nbsp;链&nbsp;接：
                    </a>
                    <a href="http://gszx.hebtu.edu.cn/"  style={{ color: 'blue', fontSize: 12 }}>
                        高师培训中心
                    </a>
                    <a style={{ color: 'green' }}>
                        &nbsp;&nbsp;&nbsp;||
                    </a>
                    <a href="http://www.hbte.com.cn/"  style={{ color: 'blue', fontSize: 12 }}>
                        &nbsp;&nbsp;&nbsp;中小学教师继续教育中心
                    </a>
                    <div style={{marginTop:'2vh',height:'100vh',width:'94vw',marginLeft:'3vw'}}>
                        <li style={{ fontSize: 12, marginTop: '2vh' ,listStyle:'none',lineHeight:'3vh',fontWeight:500}}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;河北师范大学是一所具有百年历史和光荣传统的省属重点大学。学校研究生教育始于1978年，经过30多年的发展,逐步形成结构合理,门类齐全的学科体系。学校现有博士学位授权- -级学科11个，博士专业学位授权点1个，可招收培养博士生的专业50多个;硕士学位授权-级学科29个,可招收培养硕士生的专业130多个，学科专业覆盖哲学、经济学、法学、教育学、文学、历史学、理学、工学、管理学、艺术学等10大学科门类。现有国家重点学科1个,博士后科研流动站9个,河北省"双一流"建设学科7个、省高校国家重点学科培育项目1个、省高校强势特色学科4个、省高校重点学科14个，有教育部重点实验室1个、教育部人文社会科学重点研究基地1个、省级重点实验室8个。
                        </li>
                        <li style={{ fontSize: 12, marginTop: '2vh' ,listStyle:'none',lineHeight:'3vh',fontWeight:500}}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;河北师范大学师资力量雄厚, 拥有支高水平的研究生 导师队伍。截止2018年12月 ， 学校共有导师895人,其中博士研究生导师149人，硕士研究生导师746人。学校拥有一大批国内外著名学者，其中中国科学院院士1人，省级以上各类优秀专家113人次。
                        </li>
                    </div>
                </div>
            </div>
        )
    }
}
