import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { NavBar, Carousel } from 'antd-mobile';
import '../../App.css';
import { SearchBar } from 'antd-mobile';
import { List } from 'antd-mobile';
const Item = List.Item;
const Brief = Item.Brief;


export default class Jyfw extends Component {
    
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
                        <Link to="/school"><span style={{ fontSize: '17px', color: 'white' }} className="iconfont icon-ico_leftarrow"></span></Link>
                    ]}>
                    就业服务
                </NavBar>
                
                <div style={{marginTop:'1.5vh',fontSize:10}}>
                    <i className="iconfont icon-jiantou" style={{marginLeft:'20vw',color:'blue'}}></i>
                    <a href="http://heshida.jiuyeb.cn/" style={{ color: 'orange', fontWeight: 'bold',marginLeft:'5vw'}}>
                            相&nbsp;关&nbsp;链&nbsp;接：
                    </a>
                    <a style={{color:'blue',marginLeft:'2vw',fontWeight:550}}>
                        就&nbsp;&nbsp;业&nbsp;&nbsp;创&nbsp;&nbsp;业&nbsp;&nbsp;指&nbsp;&nbsp;导&nbsp;&nbsp;中&nbsp;&nbsp;心
                    </a>
                </div>
                <div style={{marginLeft:'3vw',width:'94vw',height:'200vh',
                    backgroundColor:'#d6cccb',marginTop:'1.5vh'}}>
                    <div style={{width:'88vw',height:'200vh',
                    backgroundColor:'#d6cccb',marginLeft:'3vw'}}>
                        <li style={{listStyle:'none',lineHeight:'4vh',marginTop:'2vh',fontWeight:550}}>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;学校以“怀天下,求真知”为指引，以促进学生全面发展为宗旨,以人才培养的结构优化和质量提升为根本,强化顶层设计、分层对接，把就业创业纳入人才培养的全局统筹谋划,作为人才培养链条的重要节点整体推进，作为诸多要素相互作用的系统工程协调联动,把考生志趣、市场需求信号向优化结构、对接产业、提升质量、凝练特色传导反馈，把招收优质生源压力和高质量就业需求转化为创新发展"内生"的动力、人才培养"开放”的活力、学科优势"集成”的实力，春风化雨、久久为功,逐步使人才培养结构与社会需求统合;创新服务模式，注重全员参与、全程用力,注重分类指导、精准帮扶,注重全要素集约、线上线下覆盖，注重拓展市场、对接行业，注重就业调研、数据盘点,注重榜样示范、制度激励,构建统筹联动、扁平高效、智慧精准的指导服务体系,实施就业促进、创业引领、基层成长计划，为实现毕业生的自主发展、充分发展和全面发展夯实基础。
                        </li>
                        <li style={{listStyle:'none',lineHeight:'4vh',marginTop:'2vh',fontWeight:550}}>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;学校把深入推进创新创业教育改革作为学校综合改革的突破口，把创新精神、创业意识和创新创业实践能力作为评价人才培养质量的重要指标，打造"涵养生态、优化环境;厚植沃土、集聚要素;春华秋实、赋能成长”的创新创业工作体系， 构建"面向全体、分层施教，制度保障、培训引领，竞赛播种、园区孵化，典型示范、考核激励，导师把脉、基金风投”的创新创业工作机制，推动创新创业教育与思想政治教育、专业教育、体育、美育、劳动教育有机融合,引领创新教学与创业实践协同并进，激励大学生在创新创业中增长智慧才干、锤炼意志品质，以生动实践奋力书写创新创业生机勃发的华彩篇章。
                        </li>
                        <li style={{listStyle:'none',lineHeight:'4vh',marginTop:'2vh',fontWeight:550}}>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2013年6月8日下午,中共中央政治局常委、国务院总理李克强在，人力资源和社会保障部部长尹蔚民、教育部部长袁贵仁等同志的陪同下专程来学校考察毕业生就业工作，与毕业生和用人单位亲切交谈，对我校毕业生顶岗实习、面向基层就业给予充分肯定。
                        </li>
                        <li style={{listStyle:'none',lineHeight:'4vh',marginTop:'2vh',fontWeight:550}}>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2015年,学校入选教育部"全国毕业生就业典型经验高校”，获评中国高等教育学会创新创业教育分会"全国高等学校创业教育研究与实践先进单位" ,与河北科投集团共建的时光空间被科技部纳入“国家级科技企业孵化器”; 2016年, 学校被教育部认定为"全国首批深化创新创业教育改革示范高校”,学校创业孵化园被河北省人力资源和社会保障厅、河北省财政厅评为“河北省创业就业众创空间" , 资助经费200万元。
                        </li>
                    </div>
                </div>
            </div>
        )
    }
}
