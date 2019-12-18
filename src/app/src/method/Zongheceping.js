import { NavBar } from 'antd-mobile';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../App.css';

export default class Zongheceping extends Component {
    render() {
        return (
            <div>
                <NavBar
                    style={{ backgroundColor: '#37376F', color: '#fff', position: 'fixed ', width: '100%', top: '0', zIndex: 10, textAlign: 'center', height: '7vh' }}
                    leftContent={[
                        <Link to="/study"><span style={{ fontSize: '17px', color: 'white' }} className="iconfont icon-ico_leftarrow"></span></Link>
                    ]}>
                    综合学生测评
                </NavBar>
                <div className='cepingImg'>
                    <div className='cepingBox' >
                        <div className='cepingword'>
                            <p>综合测评地内容包括品德表现测评、学业表现测评、文体表现测评和能力表现测评四个方面。品德表现测评主要评估学生政治表现、思想修养和道德品质；学业表现测评朱要评估学生的学习成绩与学习效果；文体表现测评主要评估学生在文体活动中的表现及成绩；能力表现测评主要评估学生的职业技能、组织管理以及创新等能力。</p>
                            <p style={{ marginTop: '-2vh' }}>综合测评成绩的构成和比例为：满分为100分，其中品德测评得分占10%，学业测评得分占60%，文体测评得分占15%，能力测评得分占15%。</p>
                            <p style={{ marginTop: '-2vh' }}>综合测评成绩的计算公式：综合测评得分=品德表现测评得分*10%+学业表现测评得分*60%+文体表现测评得分*15%+能力表现测评得分*15%。</p>
                            <p style={{ marginTop: '-2vh', color: 'red' }}>一、品德表现测评得分途径：</p>
                            <p style={{ marginTop: '-2.7vh' }}>1.社会实践。受院级、校级、市级、省级（及以上）表彰奖励者分别加分。顶岗支教，优秀实习生。</p>
                            <p style={{ marginTop: '-2.7vh' }}>2.热心公益，积极参加志愿服务活动，义务献血。</p>
                            <p style={{ marginTop: '-2.7vh' }}>3.见义勇为、拾金不昧、助人为乐等行为受表扬。</p>
                            <p style={{ marginTop: '-2.7vh' }}>4.校级文明宿舍、优良学风星级宿舍。</p>
                            <p style={{ marginTop: '-2vh', color: 'red' }}>二、能力表现测评得分途径：基本分50分+奖励分（奖励分满分50，最低0分）</p>
                            <p style={{ marginTop: '-2.7vh' }}>1.按《职业素质培养方案》单项验收为优秀、良好、合格者。</p>
                            <p style={{ marginTop: '-2.7vh' }}>2.参加与职业技能相关的各类竞赛活动（如朗诵、演讲、书法等）。</p>
                            <p style={{ marginTop: '-2.7vh' }}>3.参加各种征文比赛、知识竞赛和社会调查报告评选者。</p>
                            <p style={{ marginTop: '-2.7vh' }}>4.在公开发行的刊物上发表非学术性文章和文艺作品者。</p>
                            <p style={{ marginTop: '-2.7vh' }}>5.参加科技成果展览评比及建模大赛、数控大赛、“挑战杯”等各种竞赛活动者。</p>
                            <p style={{ marginTop: '-2.7vh' }}>6.担任学生干部工作满一年且能履行职责者。</p>
                            <p style={{ marginTop: '-2.7vh' }}>7.被评为优秀共产党员者。</p>
                            <p style={{ marginTop: '-2vh', color: 'red' }}>三、学业表现测评得分途径：基本分90分+奖励分（奖励分满分10，最低0分）</p>
                            <p style={{ marginTop: '-2.7vh' }}>1.在公开出版发行的刊物（有CN或ISSN登记号）上发表专业学术论文著。</p>
                            <p style={{ marginTop: '-2.7vh' }}>2.科研成果获得国家专利者。</p>
                            <p style={{ marginTop: '-2.7vh' }}>3.在国家英语等级考试中，通过英语四级、英语六级。外语专业过级加分标准有外语学院自定。</p>
                            <p style={{ marginTop: '-2.7vh' }}>4.在计算机等级考试中，通过一、二、三级者分别加分。</p>
                            <p style={{ marginTop: '-2vh', color: 'red' }}>四、文体表现测评得分途径：基本分50分+奖励分（奖励分满分50，最低0分）</p>
                            <p style={{ marginTop: '-2.7vh' }}>1.参加体育竞赛的运动员；参加院级及以上竞赛担任裁判、礼宾人员等。</p>
                            <p style={{ marginTop: '-2.7vh' }}>2.在各种体育竞赛中获得名次的运动员。</p>
                            <p style={{ marginTop: '-2.7vh' }}>3.参加文艺演出或竞赛者。</p>
                            <p style={{ marginTop: '-2.7vh' }}>4.在文艺竞赛中获得名次的演出者。</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
