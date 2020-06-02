import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, useRouteMatch } from 'react-router-dom';
import { NavBar, Carousel } from 'antd-mobile';
import '../../../../App.css';
import { SearchBar } from 'antd-mobile';
import { List, Accordion } from 'antd-mobile';

const Item = List.Item;
const Brief = Item.Brief;


export default class KCSZ extends Component {
    onChange = (key) => {
        console.log(key);
    }
    render() {
        return (
            <div>
                <NavBar
                    style={{ backgroundColor: '#37376F', color: '#fff', position: 'sticky ', top: '0', zIndex: 10, textAlign: 'center', height: '7vh' }}
                    leftContent={[
                        <Link to="/bks"><span style={{ fontSize: '17px', color: 'white' }} className="iconfont icon-ico_leftarrow"></span></Link>
                    ]}>
                    课程设置
                </NavBar>
                <Accordion defaultActiveKey="1" onChange={this.onChange}>
                    <Accordion.Panel header="1、通识课程平台" >
                        <div style={{ height: '60vh', width: '94vw', marginLeft: '3vw', lineHeight: '2.5vh' }}>
                            <li style={{ fontSize: 12, listStyle: 'none', marginTop: '1vh', lineHeight: '3vh' }}>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;通识平台课程是面向全校学生开设的通识教育课程，分为通识必修课和通识选修课，旨在夯实基础,拓宽口径,加强科学精神和人文精神的融通,强调学生掌握宽厚的文、理学科知识背景,促使学生全面发展。
                        </li>
                            <li style={{ fontSize: 12, listStyle: 'none', marginTop: '1vh', lineHeight: '3vh' }}>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;( 1 )通识必修课程
                        </li>
                            <li style={{ fontSize: 12, listStyle: 'none', marginTop: '1vh', lineHeight: '3vh' }}>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;通识必修课程,是全校所有学生必须修读的基础理论、基本技能方面的课程。由于各专业不同特点导致所开课程存在一定的差异,各学院应根据所属专业性质，具体确定通识教育必修课程的科目和层次。
                        </li>
                            <li style={{ fontSize: 12, listStyle: 'none', marginLeft: '5vw', marginTop: '1vh' }}>
                                ( 2 )通识选修课程
                        </li>
                            <li style={{ fontSize: 12, listStyle: 'none', marginTop: '1vh', lineHeight: '3vh' }}>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;通识选修课程面向全校学生开设，通过文理交叉，学科融合，实现课程的有机结合，旨在通过跨专业、跨学科设置课程引导学生在本科教育阶段，获得广泛的知识,了解不同学科领域的多种分析方法和这些方法的运用及其价值,为学生终身学习和发展以及创新潜能培养搭建必需的方法和视野平台。培养学生关注并尊重跨学科领域问题的意识和能力，致力于培养兼具科学精神和人文素养的人格健全的人才。通识选修课程分为文史经典与文化传承，哲学智慧与艺术感悟，科学技术与创新实践，社会发展与社会治理，自我管理与持续发展等五个模块。
                        </li>
                        </div>
                    </Accordion.Panel>
                </Accordion>

                <Accordion defaultActiveKey="1" onChange={this.onChange}>
                    <Accordion.Panel header="2、大类平台课程" >
                    <div style={{ height: '15vh', width: '94vw', marginLeft: '3vw', lineHeight: '2.5vh' }}>
                        <li style={{ fontSize: 12, listStyle: 'none', marginTop: '1vh', lineHeight: '3vh' }}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;大类平台课程属必修课程，是相近学科的共同基础课程，也是学生进入相关院系的基础平台。为了巩固学生的基础学科知识，拓宽学生的专业选择，通过学科的融合与交叉，加强对学生的综合培养，应根据院系专业特点和相互之间的关联，按照培养大类打通设计，构建文史、数理、经管等大类通识平台课程。
                        </li>
                    </div>
                    </Accordion.Panel>
                </Accordion>

                <Accordion defaultActiveKey="1" onChange={this.onChange}>
                    <Accordion.Panel header="3、学科平台课程" >
                    <div style={{ height: '10vh', width: '94vw', marginLeft: '3vw', lineHeight: '2.5vh' }}>
                        <li style={{ fontSize: 12, listStyle: 'none', marginTop: '1vh', lineHeight: '3vh' }}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;学科平台课程属必修课程,是各学院根据一级学科特点，按照加强学科基础知识、拓宽专业面的原则,为学院各专业方向设置的共同的基础性课程。
                        </li>
                    </div>
                    </Accordion.Panel>
                </Accordion>

                <Accordion defaultActiveKey="1" onChange={this.onChange}>
                    <Accordion.Panel header="4、专业课程模块" >
                    <div style={{ height: '60vh', width: '94vw', marginLeft: '3vw', lineHeight: '2.5vh' }}>
                        <li style={{ fontSize: 12, listStyle: 'none', marginTop: '1vh', lineHeight: '3vh' }}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;专业课程模块是本科教育质量的保证,各学院要本着“专业是课程的一种组织形式,课程是专业的构成要素"的指导思想,按照各专业的特点、人才培养目标、规格及要求，审慎设置各专业课程模块。专业课程模块包括专业必修课程和专业选修课程。
                        </li>
                        <li style={{ fontSize: 12, listStyle: 'none', marginTop: '1vh', lineHeight: '3vh' }}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(1 )专业必修课程:
                        </li>
                        <li style={{ fontSize: 12, listStyle: 'none', marginTop: '1vh', lineHeight: '3vh' }}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;专业必修课程是保证专业培养特色的主干课程,各专业要对现有专业主干课程进行认真研究,广泛借鉴国内、外的先进经验，进一步整合优化专业必修课程,发挥其骨干作用。
                        </li>
                        <li style={{ fontSize: 12, listStyle: 'none', marginTop: '1vh', lineHeight: '3vh' }}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(2 )专业选修课程:
                        </li>
                        <li style={{ fontSize: 12, listStyle: 'none', marginTop: '1vh', lineHeight: '3vh' }}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;专业选修课程是在实现专业培养目标的前提下，通过开设具有知识覆盖面和学术深度的课程，深化拓展学生的专业知识与能力，使学生能够根据自身的兴趣自主选修，达到一专多能的目的。专业选修课程原则上应分专业方向或系列，体现"专而尖"的特点。各学院要认真梳理、凝练适应社会需求的学科专业方向课程，优化组合若干特色鲜明的专业选修方向，从而建立专业课程群，确定若干个专业方向。同时，为利用高水平、高质量的研究生培养资源带动本科生教育,提高本科生的专业水平，可将部分研究生课程纳入高年级本科生开放，建设本硕共享课程。
                        </li>
                    </div>
                    </Accordion.Panel>
                </Accordion>

                <Accordion defaultActiveKey="1" onChange={this.onChange}>
                    <Accordion.Panel header="5、教师教育课程模块" >
                    <div style={{ height: '12vh', width: '94vw', marginLeft: '3vw', lineHeight: '2.5vh' }}>
                        <li style={{ fontSize: 12, listStyle: 'none', marginTop: '1vh', lineHeight: '3vh' }}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;教师教育课程旨在培养学生掌握较扎实的教育教学基本理论和较强的教育教学实践能力， 强调理论与实际相结合，某些课程的实践环节要在教育实习或顶岗实习中完成,使教育理论与教学见习、实习相互促动，提高教师教育的针对性和实效性。
                        </li>
                    </div>
                    </Accordion.Panel>
                </Accordion>

                <Accordion defaultActiveKey="1" onChange={this.onChange}>
                    <Accordion.Panel header="6、实践教学课程" >
                    <div style={{ height: '19vh', width: '94vw', marginLeft: '3vw', lineHeight: '2.5vh' }}>
                        <li style={{ fontSize: 12, listStyle: 'none', marginTop: '1vh', lineHeight: '3vh' }}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;实践教学课程旨在培养学生实践动手能力和创新精神，是保证人才培养质量的关键。实践教学分为第一课堂与第二课堂，其中第-课堂主要包括实验课程、各类实习、实训、课程设计、毕业论文(设计)及其它实践活动。第二课堂由专业特色活动、科学研究、竞赛项目、专业技能、校园文化活动、创新创业等六大开放模块构成,学生必须选择完成第二课堂活动的4个学分方可毕业。
                        </li>
                    </div>
                    </Accordion.Panel>
                </Accordion>

                <Accordion defaultActiveKey="1" onChange={this.onChange}>
                    <Accordion.Panel header="7、综合素质课程模块" >
                    <div style={{ height: '19vh', width: '94vw', marginLeft: '3vw', lineHeight: '2.5vh' }}>
                        <li style={{ fontSize: 12, listStyle: 'none', marginTop: '1vh', lineHeight: '3vh' }}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;综合索质课程是学校面向全体学生免费开设的课程,该类课程要求学生必须修读，未修读或修读成绩不合格者不能毕业。该类课程学分作为辅助学分，不计入最低毕业总学分之中。
                        </li>
                    </div>
                    </Accordion.Panel>
                </Accordion>
            </div>
        )
    }
}
