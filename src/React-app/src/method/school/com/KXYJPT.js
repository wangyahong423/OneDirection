import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { NavBar, Carousel } from 'antd-mobile';
import '../../../App.css';
import { SearchBar } from 'antd-mobile';
import { List } from 'antd-mobile';
const Item = List.Item;
const Brief = Item.Brief;


export default class KXJYPT extends Component {

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
            <div style={{ backgroundColor: 'white' }}>
                <NavBar
                    style={{ backgroundColor: '#37376F', color: '#fff', position: 'sticky ', top: '0', zIndex: 10, textAlign: 'center', height: '7vh' }}
                    leftContent={[
                        <Link to="/kxyj"><span style={{ fontSize: '17px', color: 'white' }} className="iconfont icon-ico_leftarrow"></span></Link>
                    ]}>
                    科学研究平台
                </NavBar>
                <div style={{ backgroundColor: 'white', height: '5vh' }}>
                    <div style={{
                        backgroundColor: '#cccccc', height: '3.5vh',
                        marginLeft: '-5vh', fontSize: 13, fontWeight: 800, lineHeight: '3.5vh',
                        borderRadius: 50, width: '100vw', marginTop: 10
                    }}>
                        <span style={{ marginLeft: '12vw', color: '#b89c6d', marginTop: 10 }}>教&nbsp;育&nbsp;部&nbsp;重&nbsp;点&nbsp;实&nbsp;验&nbsp;室</span>
                    </div>
                </div>
                <div style={{ backgroundColor: '#eae9f1' }}>
                    <li style={{ fontSize: 12, listStyle: 'none', marginLeft: '5vw', lineHeight: '4vh' }}>
                        分子细胞生物学实验室
                    </li>
                </div>
                <div style={{ backgroundColor: 'white', height: '5vh' }}>
                    <div style={{
                        backgroundColor: '#cccccc', height: '3.5vh',
                        marginLeft: '-5vh', fontSize: 13, fontWeight: 800, lineHeight: '3.5vh',
                        borderRadius: 50, width: '100vw', marginTop: 10
                    }}>
                        <span style={{
                            marginLeft: '12vw',
                            color: '#d02c09', marginTop: 10
                        }}>
                            教育部重点研究基地
                        </span>
                    </div>
                </div>
                <div style={{ backgroundColor: '#eae9f1' }}>
                    <li style={{ fontSize: 12, listStyle: 'none', marginLeft: '5vw', lineHeight: '4vh' }}>
                        河北师范大学中国共产党革命精神与文化资源研究中心
                    </li>
                </div>

                <div style={{ backgroundColor: 'white', height: '5vh' }}>
                    <div style={{
                        backgroundColor: '#cccccc', height: '3.5vh',
                        marginLeft: '-5vh', fontSize: 13, fontWeight: 800, lineHeight: '3.5vh',
                        borderRadius: 50, width: '100vw', marginTop: 10
                    }}>
                        <span style={{
                            marginLeft: '12vw',
                            color: '#ee32e8', marginTop: 10
                        }}>
                            省级协同创新中心
                        </span>
                    </div>
                </div>
                <div style={{ backgroundColor: '#eae9f1', }}>
                    <li style={{ fontSize: 12, listStyle: 'none', marginLeft: '5vw', lineHeight: '4vh' }}>
                        河北省细胞信号与环境适应协同创新中心
                    </li>
                    <li style={{ fontSize: 12, listStyle: 'none', marginLeft: '5vw', lineHeight: '4vh' }}>
                        河北省数字教育协同创新中心
                    </li>
                    <li style={{ fontSize: 12, listStyle: 'none', marginLeft: '5vw', lineHeight: '4vh' }}>
                        燕赵文化研究协同创新中心
                    </li>
                </div>

                <div style={{ backgroundColor: 'white', height: '5vh' }}>
                    <div style={{
                        backgroundColor: '#cccccc', height: '3.5vh',
                        marginLeft: '-5vh', fontSize: 13, fontWeight: 800, lineHeight: '3.5vh',
                        borderRadius: 50, width: '100vw', marginTop: 10
                    }}>
                        <span style={{
                            marginLeft: '12vw',
                            color: '#3d3c1d', marginTop: 10
                        }}>
                            河北省新型智库
                        </span>
                    </div>
                </div>
                <div style={{ backgroundColor: '#eae9f1' }}>
                    <li style={{ fontSize: 12, listStyle: 'none', marginLeft: '5vw', lineHeight: '4vh' }}>
                        长城文化安全研究中心
                    </li>
                </div>

                <div style={{ backgroundColor: 'white', height: '5vh' }}>
                    <div style={{
                        backgroundColor: '#cccccc', height: '3.5vh',
                        marginLeft: '-5vh', fontSize: 13, fontWeight: 800, lineHeight: '3.5vh',
                        borderRadius: 50, width: '100vw', marginTop: 10
                    }}>
                        <span style={{
                            marginLeft: '12vw',
                            color: '#979797', marginTop: 10
                        }}>
                            省级重点实验室
                        </span>
                    </div>
                </div>
                <div style={{ backgroundColor: '#eae9f1' }}>
                    <li style={{ fontSize: 12, listStyle: 'none', marginLeft: '5vw', lineHeight: '4vh' }}>
                        河北省计算数学与应用实验室
                    </li>
                    <li style={{ fontSize: 12, listStyle: 'none', marginLeft: '5vw', lineHeight: '4vh' }}>
                        新型薄膜材料实验室
                    </li>
                    <li style={{ fontSize: 12, listStyle: 'none', marginLeft: '5vw', lineHeight: '4vh' }}>
                        无机纳米材料实验室
                    </li>
                    <li style={{ fontSize: 12, listStyle: 'none', marginLeft: '5vw', lineHeight: '4vh' }}>
                        分子细胞生物学实验室
                    </li>
                </div>
                <div style={{ backgroundColor: 'white', height: '5vh' }}>
                    <div style={{
                        backgroundColor: '#cccccc', height: '3.5vh',
                        marginLeft: '-5vh', fontSize: 13, fontWeight: 800, lineHeight: '3.5vh',
                        borderRadius: 50, width: '100vw', marginTop: 10
                    }}>
                        <span style={{
                            marginLeft: '12vw',
                            color: '#343434', marginTop: 10
                        }}>
                            河北省软科学研究基地
                        </span>
                    </div>
                </div>
                <div style={{ backgroundColor: '#eae9f1' }}>
                    <li style={{ fontSize: 12, listStyle: 'none', marginLeft: '5vw', lineHeight: '4vh' }}>
                        河北师范大学现代服务与公共政策研究基地
                    </li>
                </div>

                <div style={{ backgroundColor: 'white', height: '5vh' }}>
                    <div style={{
                        backgroundColor: '#cccccc', height: '3.5vh',
                        marginLeft: '-5vh', fontSize: 13, fontWeight: 800, lineHeight: '3.5vh',
                        borderRadius: 50, width: '100vw', marginTop: 10
                    }}>
                        <span style={{
                            marginLeft: '12vw',
                            color: '#e3f547', marginTop: 10
                        }}>
                            河北省哲学社会科学研究基地
                        </span>
                    </div>
                </div>
                <div style={{ backgroundColor: '#eae9f1' }}>
                    <li style={{ fontSize: 12, listStyle: 'none', marginLeft: '5vw', lineHeight: '4vh' }}>
                        河北师范大学燕赵文化遗产保护与研究基地
                    </li>
                </div>

                <div style={{ backgroundColor: 'white', height: '5vh' }}>
                    <div style={{
                        backgroundColor: '#cccccc', height: '3.5vh',
                        marginLeft: '-5vh', fontSize: 13, fontWeight: 800, lineHeight: '3.5vh',
                        borderRadius: 50, width: '100vw', marginTop: 10
                    }}>
                        <span style={{
                            marginLeft: '12vw',
                            color: '#214d29', marginTop: 10
                        }}>
                            省、厅级主管部门批设研究机构
                        </span>
                    </div>
                </div>
                <div style={{ backgroundColor: '#eae9f1' }}>
                    <li style={{ fontSize: 12, listStyle: 'none', marginLeft: '5vw', lineHeight: '4vh' }}>
                        河北省数学研究中心
                    </li>
                    <li style={{ fontSize: 12, listStyle: 'none', marginLeft: '5vw', lineHeight: '4vh' }}>
                        教育科学研究所
                    </li>
                    <li style={{ fontSize: 12, listStyle: 'none', marginLeft: '5vw', lineHeight: '4vh' }}>
                        古籍整理研究所
                    </li>
                    <li style={{ fontSize: 12, listStyle: 'none', marginLeft: '5vw', lineHeight: '4vh' }}>
                        国家天文台-河北师范大学空间科学联合研究中心
                    </li>
                    <li style={{ fontSize: 12, listStyle: 'none', marginLeft: '5vw', lineHeight: '4vh' }}>
                        河北省特种经济动物研究所
                    </li>
                    <li style={{ fontSize: 12, listStyle: 'none', marginLeft: '5vw', lineHeight: '4vh' }}>
                        河北省杂交小麦研究所
                    </li>
                    <li style={{ fontSize: 12, listStyle: 'none', marginLeft: '5vw', lineHeight: '4vh' }}>
                        河北师范大学人口研究所
                    </li>
                    <li style={{ fontSize: 12, listStyle: 'none', marginLeft: '5vw', lineHeight: '4vh' }}>
                        河北省职业技术教育研究所
                    </li>
                    <li style={{ fontSize: 12, listStyle: 'none', marginLeft: '5vw', lineHeight: '4vh' }}>
                        河北省高校社科信息研究中心
                    </li>
                </div>

                <div style={{ backgroundColor: 'white', height: '5vh' }}>
                    <div style={{
                        backgroundColor: '#cccccc', height: '3.5vh',
                        marginLeft: '-5vh', fontSize: 13, fontWeight: 800, lineHeight: '3.5vh',
                        borderRadius: 50, width: '100vw', marginTop: 10
                    }}>
                        <span style={{
                            marginLeft: '12vw',
                            color: '#ccf2e5', marginTop: 10
                        }}>
                            教育厅高等学校人文社会科学重点研究基地
                        </span>
                    </div>
                </div>
                <div style={{ backgroundColor: '#eae9f1' }}>
                    <li style={{ fontSize: 12, listStyle: 'none', marginLeft: '5vw', lineHeight: '4vh' }}>
                        河北师范大学中国畿辅学研究中心
                    </li>
                    <li style={{ fontSize: 12, listStyle: 'none', marginLeft: '5vw', lineHeight: '4vh' }}>
                        河北师范大学县域历史文化研究中心
                    </li>
                    <li style={{ fontSize: 12, listStyle: 'none', marginLeft: '5vw', lineHeight: '4vh' }}>
                        河北师范大学基层治理研究中心
                    </li>
                    <li style={{ fontSize: 12, listStyle: 'none', marginLeft: '5vw', lineHeight: '4vh' }}>
                        河北师范大学职业教育研究中心
                    </li>
                    <li style={{ fontSize: 12, listStyle: 'none', marginLeft: '5vw', lineHeight: '4vh' }}>
                        河北师范大学全人教育研究中心
                    </li>
                    <li style={{ fontSize: 12, listStyle: 'none', marginLeft: '5vw', lineHeight: '4vh' }}>
                        河北师范大学公共政策评估中心
                    </li>
                </div>
                <div style={{ backgroundColor: 'white', height: '5vh' }}>
                    <div style={{
                        backgroundColor: '#cccccc', height: '3.5vh',
                        marginLeft: '-5vh', fontSize: 13, fontWeight: 800, lineHeight: '3.5vh',
                        borderRadius: 50, width: '100vw', marginTop: 10
                    }}>
                        <span style={{
                            marginLeft: '12vw',
                            color: '#634449', marginTop: 10
                        }}>
                            校内研究机构
                        </span>
                    </div>
                </div>
                <div style={{ backgroundColor: '#eae9f1' }}>
                    <li style={{ fontSize: 12, listStyle: 'none', marginLeft: '5vw', lineHeight: '4vh' }}>
                        西柏坡精神研究基地
                    </li>
                    <li style={{ fontSize: 12, listStyle: 'none', marginLeft: '5vw', lineHeight: '4vh' }}>
                        移动物联网研究院    
                    </li>
                    <li style={{ fontSize: 12, listStyle: 'none', marginLeft: '5vw', lineHeight: '4vh' }}>
                    燕赵文化研究中心
                    </li>
                    <li style={{ fontSize: 12, listStyle: 'none', marginLeft: '5vw', lineHeight: '4vh' }}>
                    梁漱溟研究中心
                    </li>
                    <li style={{ fontSize: 12, listStyle: 'none', marginLeft: '5vw', lineHeight: '4vh' }}>
                    环境史研究中心
                    </li>
                    <li style={{ fontSize: 12, listStyle: 'none', marginLeft: '5vw', lineHeight: '4vh' }}>
                    生态环境研究中心
                    </li>
                    <li style={{ fontSize: 12, listStyle: 'none', marginLeft: '5vw', lineHeight: '4vh' }}>
                    语言研究所
                    </li>
                    <li style={{ fontSize: 12, listStyle: 'none', marginLeft: '5vw', lineHeight: '4vh' }}>
                    新药研发中心
                    </li>
                    <li style={{ fontSize: 12, listStyle: 'none', marginLeft: '5vw', lineHeight: '4vh' }}>
                    科技与社会发展研究所
                    </li>
                    <li style={{ fontSize: 12, listStyle: 'none', marginLeft: '5vw', lineHeight: '4vh' }}>
                    张岱年研究中心
                    </li>
                    <li style={{ fontSize: 12, listStyle: 'none', marginLeft: '5vw', lineHeight: '4vh' }}>
                    马克思主义研究所
                    </li>
                    <li style={{ fontSize: 12, listStyle: 'none', marginLeft: '5vw', lineHeight: '4vh' }}>
                    世界政治与经济研究所
                    </li>
                    <li style={{ fontSize: 12, listStyle: 'none', marginLeft: '5vw', lineHeight: '4vh' }}>
                    元曲研究所
                    </li>
                    <li style={{ fontSize: 12, listStyle: 'none', marginLeft: '5vw', lineHeight: '4vh' }}>
                    泥河湾考古研究所
                    </li>
                    <li style={{ fontSize: 12, listStyle: 'none', marginLeft: '5vw', lineHeight: '4vh' }}>
                    河北省文化遗产保护研究中心
                    </li>
                    <li style={{ fontSize: 12, listStyle: 'none', marginLeft: '5vw', lineHeight: '4vh' }}>
                    避暑山庄学研究中心
                    </li>
                    <li style={{ fontSize: 12, listStyle: 'none', marginLeft: '5vw', lineHeight: '4vh' }}>
                    比较诗学研究中心
                    </li>
                    <li style={{ fontSize: 12, listStyle: 'none', marginLeft: '5vw', lineHeight: '4vh' }}>
                    音乐教育研究所
                    </li>
                    <li style={{ fontSize: 12, listStyle: 'none', marginLeft: '5vw', lineHeight: '4vh' }}>
                    中国画艺术研究所
                    </li>
                    <li style={{ fontSize: 12, listStyle: 'none', marginLeft: '5vw', lineHeight: '4vh' }}>
                    美术研究所
                    </li>
                    <li style={{ fontSize: 12, listStyle: 'none', marginLeft: '5vw', lineHeight: '4vh' }}>
                    书法艺术研究所
                    </li>
                    <li style={{ fontSize: 12, listStyle: 'none', marginLeft: '5vw', lineHeight: '4vh' }}>
                    现代管理研究中心
                    </li>
                    <li style={{ fontSize: 12, listStyle: 'none', marginLeft: '5vw', lineHeight: '4vh' }}>
                    经济研究中心
                    </li>
                    <li style={{ fontSize: 12, listStyle: 'none', marginLeft: '5vw', lineHeight: '4vh' }}>
                    数学研究所
                    </li>
                    <li style={{ fontSize: 12, listStyle: 'none', marginLeft: '5vw', lineHeight: '4vh' }}>
                    量子器件研究中心
                    </li>
                    <li style={{ fontSize: 12, listStyle: 'none', marginLeft: '5vw', lineHeight: '4vh' }}>
                    药物研究所
                    </li>
                    <li style={{ fontSize: 12, listStyle: 'none', marginLeft: '5vw', lineHeight: '4vh' }}>
                    分子细胞生物学研究所
                    </li>
                    <li style={{ fontSize: 12, listStyle: 'none', marginLeft: '5vw', lineHeight: '4vh' }}>
                    网络技术研究所
                    </li>
                    <li style={{ fontSize: 12, listStyle: 'none', marginLeft: '5vw', lineHeight: '4vh' }}>
                    社会发展研究所
                    </li>
                    <li style={{ fontSize: 12, listStyle: 'none', marginLeft: '5vw', lineHeight: '4vh' }}>
                    非物质文化遗产研究中心
                    </li>
                    <li style={{ fontSize: 12, listStyle: 'none', marginLeft: '5vw', lineHeight: '4vh' }}>
                    黑城学研究中心
                    </li>
                    <li style={{ fontSize: 12, listStyle: 'none', marginLeft: '5vw', lineHeight: '4vh' }}>
                    河北省小额贷款研究咨询中心
                    </li>
                    <li style={{ fontSize: 12, listStyle: 'none', marginLeft: '5vw', lineHeight: '4vh' }}>
                    体育法学研究中心
                    </li>
                    <li style={{ fontSize: 12, listStyle: 'none', marginLeft: '5vw', lineHeight: '4vh' }}>
                    印尼研究中心
                    </li>
                    <li style={{ fontSize: 12, listStyle: 'none', marginLeft: '5vw', lineHeight: '4vh' }}>
                    秘鲁研究中心
                    </li>
                    <li style={{ fontSize: 12, listStyle: 'none', marginLeft: '5vw', lineHeight: '4vh' }}>
                    河北省金融数据研究中心
                    </li>
                    <li style={{ fontSize: 12, listStyle: 'none', marginLeft: '5vw', lineHeight: '4vh' }}>
                    中国畿辅学研究中心
                    </li>
                    <li style={{ fontSize: 12, listStyle: 'none', marginLeft: '5vw', lineHeight: '4vh' }}>
                    燕赵音乐文化研究所
                    </li>
                    <li style={{ fontSize: 12, listStyle: 'none', marginLeft: '5vw', lineHeight: '4vh' }}>
                    国际岩画直接断代研究中心
                    </li>
                    <li style={{ fontSize: 12, listStyle: 'none', marginLeft: '5vw', lineHeight: '4vh' }}>
                    宗教文化研究所
                    </li>
                    <li style={{ fontSize: 12, listStyle: 'none', marginLeft: '5vw', lineHeight: '4vh' }}>
                    河北省创新驱动发展案例中心
                    </li>
                    <li style={{ fontSize: 12, listStyle: 'none', marginLeft: '5vw', lineHeight: '4vh' }}>
                    河北省产业优化研究中心
                    </li>
                    <li style={{ fontSize: 12, listStyle: 'none', marginLeft: '5vw', lineHeight: '4vh' }}>
                    中俄远东研究中心
                    </li>
                    <li style={{ fontSize: 12, listStyle: 'none', marginLeft: '5vw', lineHeight: '4vh' }}>
                    中华优秀传统文化传承与发展研究中心
                    </li>
                    <li style={{ fontSize: 12, listStyle: 'none', marginLeft: '5vw', lineHeight: '4vh' }}>
                    美术考古研究所
                    </li>
                    <li style={{ fontSize: 12, listStyle: 'none', marginLeft: '5vw', lineHeight: '4vh' }}>
                    工业设计研究中心
                    </li>
                </div>
                <div style={{ backgroundColor: 'white', height: '5vh' }}>
                    <div style={{
                        backgroundColor: '#cccccc', height: '3.5vh',
                        marginLeft: '-5vh', fontSize: 13, fontWeight: 800, lineHeight: '3.5vh',
                        borderRadius: 50, width: '100vw', marginTop: 10
                    }}>
                        <span style={{
                            marginLeft: '12vw',
                            color: '#7be1ed', marginTop: 10
                        }}>
                            挂靠学会
                        </span>
                    </div>
                </div>
                <div style={{ backgroundColor: '#eae9f1' }}>
                    <li style={{ fontSize: 12, listStyle: 'none', marginLeft: '5vw', lineHeight: '4vh' }}>
                    中国诗经学会
                    </li>
                    <li style={{ fontSize: 12, listStyle: 'none', marginLeft: '5vw', lineHeight: '4vh' }}>
                    河北省数学会
                    </li>
                    <li style={{ fontSize: 12, listStyle: 'none', marginLeft: '5vw', lineHeight: '4vh' }}>
                    河北省史学会
                    </li>
                    <li style={{ fontSize: 12, listStyle: 'none', marginLeft: '5vw', lineHeight: '4vh' }}>
                    河北省哲学学会
                    </li>
                    <li style={{ fontSize: 12, listStyle: 'none', marginLeft: '5vw', lineHeight: '4vh' }}>
                    河北省心理学会
                    </li>
                    <li style={{ fontSize: 12, listStyle: 'none', marginLeft: '5vw', lineHeight: '4vh' }}>
                    河北省教师教育学会
                    </li>
                    <li style={{ fontSize: 12, listStyle: 'none', marginLeft: '5vw', lineHeight: '4vh' }}>
                    河北省遗传学会
                    </li>
                    <li style={{ fontSize: 12, listStyle: 'none', marginLeft: '5vw', lineHeight: '4vh' }}>
                    河北省细胞生物学学会
                    </li>
                    <li style={{ fontSize: 12, listStyle: 'none', marginLeft: '5vw', lineHeight: '4vh' }}>
                    河北省电教技术学会
                    </li>
                    <li style={{ fontSize: 12, listStyle: 'none', marginLeft: '5vw', lineHeight: '4vh' }}>
                    河北省莎士比亚学会
                    </li>
                    <li style={{ fontSize: 12, listStyle: 'none', marginLeft: '5vw', lineHeight: '4vh' }}>
                    石家庄市化学学会
                    </li>
                    <li style={{ fontSize: 12, listStyle: 'none', marginLeft: '5vw', lineHeight: '4vh' }}>
                    石家庄生物学会
                    </li>
                    <li style={{ fontSize: 12, listStyle: 'none', marginLeft: '5vw', lineHeight: '4vh' }}>
                    石家庄市地理学会
                    </li>
                    <li style={{ fontSize: 12, listStyle: 'none', marginLeft: '5vw', lineHeight: '4vh' }}>
                    石家庄市计算机学会
                    </li>
                </div>
            </div>

        )
    }
}
