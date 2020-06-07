import { NavBar } from 'antd-mobile';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../App.css';

export default class StudyZhuxuejin extends Component {
    render() {
        return (
            <div>
                <NavBar
                    style={{ backgroundColor: '#37376F', color: '#fff', position: 'fixed', top: '0', zIndex: 10, textAlign: 'center', height: '7vh', width: '100%' }}
                    leftContent={[
                        <Link to="/study"><span style={{ fontSize: '17px', color: 'white' }} className="iconfont icon-ico_leftarrow"></span></Link>
                    ]}>
                    助学金
                </NavBar>
                <div className='zhuxuejinImg'>
                    <div className='zhuxuejinBox' >
                        <div className='cepingword'>
                            <p style={{ marginLeft: "10vh", color: 'red' }}>第一章  总则</p>
                            <p style={{ marginTop: '-2vh', color: 'red' }}>第一条</p>
                            <p style={{ marginTop: '-2vh' }}>为体现党和政府对家庭经济困难学生的关怀，帮助他们顺利完成学业，根据《河北省财政厅、教育厅关于印发〈河北省普通本科高校、高等职业学校国家助学金实施办法〉的通知》（冀财教[2017]12号）文件精神，结合学校实际，制定本办法。</p>
                            <p style={{ marginTop: '-2vh', color: 'red' }}>第二条</p>
                            <p style={{ marginTop: '-2.7vh' }}>国家助学金由中央和省政府共同出资设立，用于资助我校具有中华人民共和国国籍的全日制本专科学生（以下简称学生）中的家庭经济困难学生。</p>
                            <p style={{ marginTop: '-2vh', color: 'red' }}>第三条</p>
                            <p style={{ marginTop: '-2.7vh' }}>学校按照省财政厅、教育厅分配给我校的国家助学金名额，依据学生人数和院（系）实际情况，分配各学院受助名额。</p>
                            <p style={{ marginLeft: "1vh", color: 'red' }}>第二章  资助标准与申请条件</p>
                            <p style={{ marginTop: '-2.7vh', color: 'red' }}>第四条</p>
                            <p style={{ marginTop: '-2.7vh' }}>国家助学金主要资助家庭经济困难学生的生活费用开支，资助标准分为3档。1档为每生每年2000元，资助对象为一般困难学生；2档为每生每年3000元，资助对象为困难学生；3档为每生每年4000元，资助对象为特别困难学生。</p>
                            <p style={{ marginTop: '-2.7vh', color: 'red' }}>第五条</p>
                            <p style={{ marginTop: '-2.7vh' }}>国家助学金的申请条件：</p>
                            <p style={{ marginTop: '-2.7vh' }}>（一）热爱社会主义祖国，拥护中国共产党的领导；</p>
                            <p style={{ marginTop: '-2.7vh' }}>（二）遵守宪法和法律，遵守学校规章制度；</p>
                            <p style={{ marginTop: '-2.7vh' }}>（三）诚实守信，道德品质优良；</p>
                            <p style={{ marginTop: '-2.7vh' }}>（四）勤奋学习，积极上进；</p>
                            <p style={{ marginTop: '-2.7vh' }}>（五）家庭经济困难，生活俭朴。</p>
                            <p style={{ marginLeft: "1vh", color: 'red' }}>第三章  申请与评审</p>
                            <p style={{ marginTop: '-2.7vh', color: 'red' }}>第六条</p>
                            <p style={{ marginTop: '-2.7vh' }}>国家助学金每学年评审一次，坚持公开、公平、公正的原则。同一学年内，申请并获得国家助学金的学生，可同时申请并获得各种奖学金。</p>
                            <p style={{ marginTop: '-2.7vh', color: 'red' }}>第七条</p>
                            <p style={{ marginTop: '-2.7vh' }}>学生根据本办法规定的国家助学金申请条件，填写《普通本科高校、高等职业学校国家助学金申请表》（附件），交年级（班级）评定小组。评定小组由辅导员、学生干部代表和普通学生代表5-7人组成，其中普通学生代表不得少于小组成员中学生人数的1/2。评定小组在广泛听取学生意见的基础上严格按照评选条件进行评选推荐，推荐结果报学院学生工作领导小组。</p>
                            <p style={{ marginTop: '-2.7vh', color: 'red' }}>第八条</p>
                            <p style={{ marginTop: '-2.7vh' }}>学院学生工作领导小组确定推荐结果，并将推荐结果在学院公示至少3个工作日，公示无异议后报学生处。学生处对学生情况和学院意见进行审核，报学校学生资助工作领导小组审批。</p>
                            <p style={{ marginTop: '-2.7vh', color: 'red' }}>第九条</p>
                            <p style={{ marginTop: '-2.7vh' }}>对国家助学金评审结果有异议的学生，可在公示期向所在学院学生工作领导小组提出申诉，学院学生工作领导小组应及时研究并予以答复。如对答复仍有异议，可向学生处提请复议。</p>
                            <p style={{ marginLeft: "5vh", color: 'red' }}>第四章  发放与管理</p>
                            <p style={{ marginTop: '-2.7vh', color: 'red' }}>第十条</p>
                            <p style={{ marginTop: '-2.7vh' }}>待资金拨付后，学校按学期将国家助学金拨付到受助学生银行卡中。</p>
                            <p style={{ marginTop: '-2.7vh', color: 'red' }}>第十一条</p>
                            <p style={{ marginTop: '-2.7vh' }}>各单位要切实加强管理，认真做好国家助学金的评审和发放工作，确保国家助学金真正用于资助家庭经济困难学生。</p>
                            <p style={{ marginLeft: "9vh", color: 'red' }}>第五章  附则</p>
                            <p style={{ marginTop: '-2.7vh', color: 'red' }}>第十二条</p>
                            <p style={{ marginTop: '-2.7vh' }}>本办法由学生处负责解释。</p>
                            <p style={{ marginTop: '-2.7vh', color: 'red' }}>第十三条</p>
                            <p style={{ marginTop: '-2.7vh' }}>本办法自印发之日起施行，《河北师范大学本专科生国家助学金实施办法（暂行）》（校学字[2017]4号）同时废止。</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
