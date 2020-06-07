import { NavBar } from 'antd-mobile';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../../App.css'

export default class StudyJiangxuejin extends Component {
    render() {
        return (
            <div>
                <NavBar
                    style={{ backgroundColor: '#37376F', color: '#fff', position: 'fixed', top: '0', zIndex: 10, textAlign: 'center', height: '7vh', width: '100%' }}
                    leftContent={[
                        <Link to="/study"><span style={{ fontSize: '17px', color: 'white' }} className="iconfont icon-ico_leftarrow"></span></Link>
                    ]}>
                    奖学金
                </NavBar>
                <div className='cepingImg'>
                    <div className='cepingBox' >
                        <div className='cepingword'>
                            <p>为了激励广大学生奋发向上，刻苦学习，充分调动学生学习的积极性和主动性，根据国家教育部、财政部有关规定制定。</p>
                            <p style={{ marginTop: '-2vh', color: 'red' }}>第一条 </p>
                            <p style={{ marginTop: '-2.7vh' }}>本办法适用于我校在籍的全日制本、专科学生</p>
                            <p style={{ marginTop: '-2vh', color: 'red' }}>第二条 </p>
                            <p style={{ marginTop: '-2.7vh' }}>奖学金分一、二、三等，奖金分别为2000元、1000元、500元。一等奖学金按学生总人数的5%评定；二等奖学金按学生总人数的10%评定；三等奖学金按学生总人数的25%评定。设单项奖，奖金额度为300元，单项奖按学生总数的5%评定。</p>
                            <p style={{ marginTop: '-2vh', color: 'red' }}>第三条 </p>
                            <p style={{ marginTop: '-2.7vh' }}>学生从第二学年开始每学年以学生年级（班级）为单位进行奖学金评定。年级（班级）奖学金评定小组由辅导员、学生干部代表和普通学生代表5-7人组成，其中普通学生代表不得少于小组成员中学生人数的1/2。评选结果经学院领导小组审核并签署意见后，交学生处审核，报主管校长审批</p>
                            <p style={{ marginTop: '-2vh', color: 'red' }}>第四条 </p>
                            <p style={{ marginTop: '-2.7vh' }}>获得奖学金的同学，学校同时发给荣誉证书，并填写学生奖学金登记表，存入学生本人档案</p>
                            <p style={{ marginTop: '-2vh', color: 'red' }}>第五条 </p>
                            <p style={{ marginTop: '-2.7vh' }}>同一学年内，获得学校奖学金（单项奖除外）的学生不能同时获得其他类别的奖学金，但家庭经济困难的学生可以同时申请并获得各种级别的助学金。获得学校奖学金的学生可以同时获得校、院级三好学生，但奖金不重复发放，取最高项。</p>
                            <p style={{ marginTop: '-2vh', color: 'red' }}>第六条 </p>
                            <p style={{ marginTop: '-2.7vh' }}>奖学金评选的基本条件：</p>
                            <p style={{ marginTop: '-2.7vh' }}>1、坚持四项基本原则，努力学习社会主义理论，关心时事政治，积极参加政治学习，团结同学，尊敬师长，自觉遵守国家法律、法规和学校规章制度，拥护党的路线、方针、政策，思想品德品质良好</p>
                            <p style={{ marginTop: '-2.7vh' }}>2、学习目的明确，学习态度端正，热爱所学专业，学习努力，较好地掌握了所学基础理论和知识，有一定分析、解决问题的能力。</p>
                            <p style={{ marginTop: '-2.7vh' }}>3、积极参加学校、学院组织的活动，热心公益事业。</p>
                            <p style={{ marginTop: '-2.7vh' }}>4、积极参加体育锻炼，身体健康，体育成绩合格。</p>
                            <p style={{ marginTop: '-2.7vh' }}>5、一、二、三等奖学金获得者按学业成绩（公公必修课程和专业必修、选修课程成绩）平均学分绩排名产生。单项奖奖励在思想品德、劳动卫生、科研创新、文体活动、社会实践、职业素质、顶岗支教方面能力突出、有较大贡献的学生，由年级（班级）奖学金评定小组评选产生。</p>
                            <p style={{ marginTop: '-2vh', color: 'red' }}>第七条</p>
                            <p style={{ marginTop: '-2.7vh' }}>凡有以下情况之一者，一年内取消一、二、三等奖的评定资格，已发奖学金的予以收回：</p>
                            <p style={{ marginTop: '-2.7vh' }}>1、体育成绩不达标者；</p>
                            <p style={{ marginTop: '-2.7vh' }}>2、学年内有两门（含两门）以上考试不及格者；</p>
                            <p style={{ marginTop: '-2.7vh' }}>3、受到学校通报（含通报）以上批评及各种处分者；</p>
                            <p style={{ marginTop: '-2.7vh' }}>4、无故欠缴学费者；</p>
                            <p style={{ marginTop: '-2.7vh' }}>5、有不良诚信记录者。</p>
                            <p style={{ marginTop: '-2vh', color: 'red' }}>第八条</p>
                            <p style={{ marginTop: '-2.7vh' }}>本办法由学生工作部负责解释，自印发之日起施行</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
