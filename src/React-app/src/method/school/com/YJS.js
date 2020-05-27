import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { NavBar, Carousel } from 'antd-mobile';
import '../../../App.css';
import { SearchBar } from 'antd-mobile';
import { List } from 'antd-mobile';
const Item = List.Item;
const Brief = Item.Brief;


export default class YJS extends Component {

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
                    研究生教育
                </NavBar>

                <div style={{ marginTop: '3vh', width: '94vw', marginLeft: '3vw' }}>
                    <i className="iconfont icon-jiantou" style={{ marginLeft: '20vw' }}></i>
                    <a href="http://yjsy.hebtu.edu.cn/" style={{ color: 'orange', fontWeight: 'bold', marginLeft: '5vw' }}>
                        相&nbsp;关&nbsp;链&nbsp;接：
                    </a>
                    <a style={{ color: 'blue' }}>
                        研&nbsp;究&nbsp;生&nbsp;院
                    </a>
                    <li style={{ listStyle: 'none', marginTop: '2vh', lineHeight: '3vh' }}>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;河北师范大学是一所具有百年历史和光荣传统的省属重点大学。学校研究生教育始于1978年，经过30多年的发展,逐步形成结构合理,门类齐全的学科体系。学校现有博士学位授权- -级学科11个，博士专业学位授权点1个,可招收培养博士生的专业50多个;硕士学位授权-级学科29个，可招收培养硕士生的专业130多个,学科专业覆盖哲学、经济学、法学、教育学、文学、历史学、理学、工学、管理学、艺术学等10大学科门类。现有国家重点学科1个，博士后科研流动站9个,河北省"双-流"建设学科7个、省高校国家重点学科培育项目1个、 省高校强势特色学科4个、省高校重点学科14个,有教育部重点实验室1个、教育部人文社会科学重点研究基地1个、省级重点实验室8个。
                    </li>
                    <li style={{ listStyle: 'none', marginTop: '2vh', lineHeight: '3vh' }}>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;河北师范大学师资力量雄厚，拥有-支高水平的研究生导师队伍。截止2018年12月 ，学校共有导师895人，其中博士研究生导师149人，硕士研究生导师746人。学校拥有-大批国内外著名学者,其中中国科学院院士1人，省级以上各类优秀专家113人次。
                    </li>
                </div>
            </div>
        )
    }
}
