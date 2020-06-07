import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { NavBar, Carousel } from 'antd-mobile';
import '../../../App.css';
import { SearchBar } from 'antd-mobile';
import { List } from 'antd-mobile';
const Item = List.Item;
const Brief = Item.Brief;


export default class SZDW extends Component {

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
                    师资队伍
                </NavBar>
                <div style={{ marginTop: '4%' }}>
                    <span style={{ fontSize: '12px' }}>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;近年来学校加大引进和培养优秀人才力度,加强师资队伍建设,师资队伍水平稳步提高。学校现有在职教职工2606名，其中专任教师1617人，教授391人，副教授651人，中科院院士1人，在职省级以上各类优秀专家170余人。
                    </span>
                </div>

                <div style={{ marginTop: '3vh' }}>
                    <i className="iconfont icon-jiantou" style={{ marginLeft: '25vw', color: "blue" }}></i>
                    <a href="http://rsc.hebtu.edu.cn/" style={{ color: 'orange', fontWeight: 'bold', marginLeft: '5vw' }}>
                        相&nbsp;关&nbsp;链&nbsp;接：
                    </a>
                    <a>
                        人&nbsp;事&nbsp;处
                    </a>
                    <div style={{
                        backgroundColor: 'white', height: '3.5vh', marginTop: '2vh',
                        fontSize: 13, fontWeight: 800, lineHeight: '3.5vh',
                        width:'96vw',marginLeft:'2vw'
                    }}>
                        <span style={{ marginLeft: '2vw' }}>中国科学院院士</span>
                    </div>
                    <a style={{ fontSize: 12, marginLeft: '5vw', lineHeight: '3vh' }}>孙大业</a>

                    <div style={{
                        backgroundColor: 'white', height: '3.5vh',
                        marginTop: 2, fontSize: 13, fontWeight: 800, lineHeight: '3.5vh',
                        width:'96vw',marginLeft:'2vw'
                    }}>
                        <span style={{ marginLeft: '2vw' }}>国务院特殊津贴专家</span>
                    </div>
                    <li style={{ fontSize: 12, marginLeft: '5vw', lineHeight: '3vh' ,
                        listStyle:"none"}}>
                    孙大业&nbsp;&nbsp;&nbsp;&nbsp;蒋春澜&nbsp;&nbsp;&nbsp;&nbsp;王长华&nbsp;&nbsp;&nbsp;&nbsp;戴建兵&nbsp;&nbsp;&nbsp;&nbsp;杨欢进&nbsp;&nbsp;&nbsp;&nbsp;路&nbsp;&nbsp;&nbsp;紫&nbsp;&nbsp;&nbsp;&nbsp;黄华方
                    </li>
                    <li style={{ fontSize: 12, marginLeft: '5vw', lineHeight: '3vh' ,
                        listStyle:"none"}}>
                    张&nbsp;&nbsp;&nbsp;&nbsp;骥&nbsp;&nbsp;&nbsp;&nbsp;王宏斌&nbsp;&nbsp;&nbsp;&nbsp;白云乡&nbsp;&nbsp;&nbsp;&nbsp;高&nbsp;&nbsp;&nbsp;&nbsp;亭&nbsp;&nbsp;&nbsp;&nbsp;孙&nbsp;&nbsp;&nbsp;&nbsp;颖&nbsp;&nbsp;&nbsp;&nbsp;唐贵德
                    </li>

                    <div style={{
                        backgroundColor: 'white', height: '3.5vh',
                        marginTop: 2, fontSize: 13, fontWeight: 800, lineHeight: '3.5vh',
                        width:'96vw',marginLeft:'2vw'
                    }}>
                        <span style={{ marginLeft: '2vw' }}>国家“百千万人才工程”入选者、国家有突出贡献中青年专家</span>
                    </div>
                    <a style={{ fontSize: 12, marginLeft: '5vw', lineHeight: '3vh' }}>孙&nbsp;&nbsp;颖</a>

                    <div style={{
                        backgroundColor: 'white', height: '3.5vh',
                        marginTop: 2, fontSize: 13, fontWeight: 800, lineHeight: '3.5vh',
                        width:'96vw',marginLeft:'2vw'
                    }}>
                        <span style={{ marginLeft: '2vw' }}>国家"万人计划”教学名师</span>
                    </div>
                    <a style={{ fontSize: 12, marginLeft: '5vw', lineHeight: '3vh' }}>段相林</a>

                    <div style={{
                        backgroundColor: 'white', height: '3.5vh',
                        marginTop: 2, fontSize: 13, fontWeight: 800, lineHeight: '3.5vh',
                        width:'96vw',marginLeft:'2vw'
                    }}>
                        <span style={{ marginLeft: '2vw' }}>国家级教学名师</span>
                    </div>
                    <a style={{ fontSize: 12, marginLeft: '5vw', lineHeight: '3vh' }}>路&nbsp;&nbsp;紫</a>

                    <div style={{
                        backgroundColor: 'white', height: '3.5vh',
                        marginTop: 2, fontSize: 13, fontWeight: 800, lineHeight: '3.5vh',
                        width:'96vw',marginLeft:'2vw'
                    }}>
                        <span style={{ marginLeft: '2vw' }}>燕赵学者</span>
                    </div>
                    <a style={{ fontSize: 12, marginLeft: '5vw', lineHeight: '3vh' }}>蒋春澜</a>

                    <div style={{
                        backgroundColor: 'white', height: '3.5vh',
                        marginTop: 2, fontSize: 13, fontWeight: 800, lineHeight: '3.5vh',
                        width:'96vw',marginLeft:'2vw'
                    }}>
                        <span style={{ marginLeft: '2vw' }}>省管优秀专家</span>
                    </div>
                    <li style={{ fontSize: 12, marginLeft: '5vw', lineHeight: '3vh',
                        listStyle:"none"}}>
                    孙大业&nbsp;&nbsp;&nbsp;&nbsp;李建强&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;蒋春澜&nbsp;&nbsp;&nbsp;&nbsp;王长华&nbsp;&nbsp;&nbsp;&nbsp;杨欢进&nbsp;&nbsp;&nbsp;&nbsp;白云乡&nbsp;&nbsp;&nbsp;&nbsp;王宏斌
                    </li>
                    <li style={{ fontSize: 12, marginLeft: '5vw', lineHeight: '3vh',
                        listStyle:"none"}}>
                    朱兴华&nbsp;&nbsp;&nbsp;&nbsp;徐&nbsp;&nbsp;&nbsp;&nbsp;莉&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;高&nbsp;&nbsp;&nbsp;亭&nbsp;&nbsp;&nbsp;&nbsp;蒋世国
                    </li>

                    <div style={{
                        backgroundColor: 'white', height: '3.5vh',
                        marginTop: 2, fontSize: 13, fontWeight: 800, lineHeight: '3.5vh',
                        width:'96vw',marginLeft:'2vw'
                    }}>
                        <span style={{ marginLeft: '2vw' }}>河北省有突出贡献中青年专家</span>
                    </div>
                    <a style={{ fontSize: 12, marginLeft: '5vw', lineHeight: '3vh' }}>
                    孙大业&nbsp;&nbsp;&nbsp;&nbsp;蒋春澜&nbsp;&nbsp;&nbsp;&nbsp;王长华&nbsp;&nbsp;&nbsp;&nbsp;戴建兵&nbsp;&nbsp;&nbsp;&nbsp;邓明立&nbsp;&nbsp;&nbsp;&nbsp;刘敬泽&nbsp;&nbsp;&nbsp;&nbsp;杨欢进
                    </a>
                    <a style={{ fontSize: 12, marginLeft: '5vw', lineHeight: '3vh' }}>
                    唐贵德&nbsp;&nbsp;&nbsp;&nbsp;安&nbsp;&nbsp;&nbsp;&nbsp;忠&nbsp;&nbsp;&nbsp;&nbsp;孟令鹏&nbsp;&nbsp;&nbsp;&nbsp;崔素娟&nbsp;&nbsp;&nbsp;&nbsp;路&nbsp;&nbsp;&nbsp;&nbsp;紫&nbsp;&nbsp;&nbsp;&nbsp;何玉秀&nbsp;&nbsp;&nbsp;&nbsp;张&nbsp;&nbsp;&nbsp;&nbsp;骥
                    </a>
                    <a style={{ fontSize: 12, marginLeft: '5vw', lineHeight: '3vh' }}>
                    王宏斌&nbsp;&nbsp;&nbsp;&nbsp;李正栓&nbsp;&nbsp;&nbsp;&nbsp;刘&nbsp;&nbsp;&nbsp;&nbsp;虹&nbsp;&nbsp;&nbsp;&nbsp;王玉平&nbsp;&nbsp;&nbsp;&nbsp;徐&nbsp;&nbsp;&nbsp;&nbsp;莉&nbsp;&nbsp;&nbsp;&nbsp;葛京凤&nbsp;&nbsp;&nbsp;&nbsp;韩来平
                    </a>
                    <a style={{ fontSize: 12, marginLeft: '5vw', lineHeight: '3vh' }}>
                    高&nbsp;&nbsp;&nbsp;&nbsp;亭&nbsp;&nbsp;&nbsp;&nbsp;尚忠林&nbsp;&nbsp;&nbsp;&nbsp;王静红&nbsp;&nbsp;&nbsp;&nbsp;石国兴&nbsp;&nbsp;&nbsp;&nbsp;侯登录&nbsp;&nbsp;&nbsp;&nbsp;常彦忠
                    </a>

                    <div style={{
                        backgroundColor: 'white', height: '3.5vh',
                        marginTop: 2, fontSize: 13, fontWeight: 800, lineHeight: '3.5vh',
                        width:'96vw',marginLeft:'2vw'
                    }}>
                        <span style={{ marginLeft: '2vw' }}>河北省政府特殊津贴专家</span>
                    </div>
                    <a style={{ fontSize: 12, marginLeft: '5vw', lineHeight: '3vh' }}>
                    汤文强&nbsp;&nbsp;&nbsp;&nbsp;孙&nbsp;&nbsp;&nbsp;&nbsp;玉&nbsp;&nbsp;&nbsp;&nbsp;邢建昌&nbsp;&nbsp;&nbsp;&nbsp;刁哲军&nbsp;&nbsp;&nbsp;&nbsp;米据生&nbsp;&nbsp;&nbsp;&nbsp;郭&nbsp;&nbsp;&nbsp;&nbsp;毅&nbsp;&nbsp;&nbsp;&nbsp;郭宝亮
                    </a>
                    <a style={{ fontSize: 12, marginLeft: '5vw', lineHeight: '3vh' }}>
                    谢启光&nbsp;&nbsp;&nbsp;&nbsp;谭&nbsp;&nbsp;&nbsp;&nbsp;克
                    </a>

                    <div style={{
                        backgroundColor: 'white', height: '3.5vh',
                        marginTop: 2, fontSize: 13, fontWeight: 800, lineHeight: '3.5vh',
                        width:'96vw',marginLeft:'2vw'
                    }}>
                        <span style={{ marginLeft: '2vw' }}>国家“百千万人才工程”入选者、国家有突出贡献中青年专家</span>
                    </div>
                    <a style={{ fontSize: 12, marginLeft: '5vw', lineHeight: '3vh' }}>孙&nbsp;&nbsp;颖</a>

                    <div style={{
                        backgroundColor: 'white', height: '3.5vh',
                        marginTop: 2, fontSize: 13, fontWeight: 800, lineHeight: '3.5vh',
                        width:'96vw',marginLeft:'2vw'
                    }}>
                        <span style={{ marginLeft: '2vw' }}>国家“百千万人才工程”入选者、国家有突出贡献中青年专家</span>
                    </div>
                    <a style={{ fontSize: 12, marginLeft: '5vw', lineHeight: '3vh' }}>孙&nbsp;&nbsp;颖</a>

                    <div style={{
                        backgroundColor: 'white', height: '3.5vh',
                        marginTop: 2, fontSize: 13, fontWeight: 800, lineHeight: '3.5vh',
                        width:'96vw',marginLeft:'2vw'
                    }}>
                        <span style={{ marginLeft: '2vw' }}>国家“百千万人才工程”入选者、国家有突出贡献中青年专家</span>
                    </div>
                    <a style={{ fontSize: 12, marginLeft: '5vw', lineHeight: '3vh' }}>孙&nbsp;&nbsp;颖</a>

                    <div style={{
                        backgroundColor: 'white', height: '3.5vh',
                        marginTop: 2, fontSize: 13, fontWeight: 800, lineHeight: '3.5vh',
                        width:'96vw',marginLeft:'2vw'
                    }}>
                        <span style={{ marginLeft: '2vw' }}>国家“百千万人才工程”入选者、国家有突出贡献中青年专家</span>
                    </div>
                    <a style={{ fontSize: 12, marginLeft: '5vw', lineHeight: '3vh' }}>孙&nbsp;&nbsp;颖</a>

                    <div style={{
                        backgroundColor: 'white', height: '3.5vh',
                        marginTop: 2, fontSize: 13, fontWeight: 800, lineHeight: '3.5vh',
                        width:'96vw',marginLeft:'2vw'
                    }}>
                        <span style={{ marginLeft: '2vw' }}>国家“百千万人才工程”入选者、国家有突出贡献中青年专家</span>
                    </div>
                    <a style={{ fontSize: 12, marginLeft: '5vw', lineHeight: '3vh' }}>孙&nbsp;&nbsp;颖</a>

                    <div style={{
                        backgroundColor: 'white', height: '3.5vh',
                        marginTop: 2, fontSize: 13, fontWeight: 800, lineHeight: '3.5vh',
                        width:'96vw',marginLeft:'2vw'
                    }}>
                        <span style={{ marginLeft: '2vw' }}>国家“百千万人才工程”入选者、国家有突出贡献中青年专家</span>
                    </div>
                    <a style={{ fontSize: 12, marginLeft: '5vw', lineHeight: '3vh' }}>孙&nbsp;&nbsp;颖</a>

                    <div style={{
                        backgroundColor: 'white', height: '3.5vh',
                        marginTop: 2, fontSize: 13, fontWeight: 800, lineHeight: '3.5vh',
                        width:'96vw',marginLeft:'2vw'
                    }}>
                        <span style={{ marginLeft: '2vw' }}>国家“百千万人才工程”入选者、国家有突出贡献中青年专家</span>
                    </div>
                    <a style={{ fontSize: 12, marginLeft: '5vw', lineHeight: '3vh' }}>孙&nbsp;&nbsp;颖</a>

                    <div style={{
                        backgroundColor: 'white', height: '3.5vh',
                        marginTop: 2, fontSize: 13, fontWeight: 800, lineHeight: '3.5vh',
                        width:'96vw',marginLeft:'2vw'
                    }}>
                        <span style={{ marginLeft: '2vw' }}>国家“百千万人才工程”入选者、国家有突出贡献中青年专家</span>
                    </div>
                    <a style={{ fontSize: 12, marginLeft: '5vw', lineHeight: '3vh' }}>孙&nbsp;&nbsp;颖</a>

                    <div style={{
                        backgroundColor: 'white', height: '3.5vh',
                        marginTop: 2, fontSize: 13, fontWeight: 800, lineHeight: '3.5vh',
                        width:'96vw',marginLeft:'2vw'
                    }}>
                        <span style={{ marginLeft: '2vw' }}>国家“百千万人才工程”入选者、国家有突出贡献中青年专家</span>
                    </div>
                    <a style={{ fontSize: 12, marginLeft: '5vw', lineHeight: '3vh' }}>孙&nbsp;&nbsp;颖</a>

                    <div style={{
                        backgroundColor: 'white', height: '3.5vh',
                        marginTop: 2, fontSize: 13, fontWeight: 800, lineHeight: '3.5vh',
                        width:'96vw',marginLeft:'2vw'
                    }}>
                        <span style={{ marginLeft: '2vw' }}>国家“百千万人才工程”入选者、国家有突出贡献中青年专家</span>
                    </div>
                    <a style={{ fontSize: 12, marginLeft: '5vw', lineHeight: '3vh' }}>孙&nbsp;&nbsp;颖</a>

                </div>
            </div>
        )
    }
}
