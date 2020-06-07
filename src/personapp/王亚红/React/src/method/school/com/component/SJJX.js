import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { NavBar, Carousel } from 'antd-mobile';
import '../../../../App.css';
import { SearchBar } from 'antd-mobile';
import { List } from 'antd-mobile';
const Item = List.Item;
const Brief = Item.Brief;


export default class SJJX extends Component {

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
                    实践教学
                </NavBar>
                <div style={{ marginTop: '3vh' }}>
                    <div style={{ height: '60vh', width: '94vw', marginLeft: '3vw',lineHeight:'2.5vh'}}>
                        <li style={{ fontSize: 12, listStyle: 'none',marginTop: '1vh',lineHeight:'3vh'}}>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;实践教学是高等学校本科人才培养过程的重要组成部分，对于培养学生综合运用所学理论知识和技能解决实际问题,提高实践能力、创新能力、协作能力等具有重要意义。2018年教育 部召开的新时代全国高等学校本科教育工作会议和教育部印发的“新时代高教40条”，对高校的实践育人工作提出了明确要求。
                        </li>
                        <li style={{ fontSize: 12, listStyle: 'none', marginTop: '1vh',lineHeight:'3vh'}}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我校历来重视本科生的实践教学,基于"OBE"理念， 以“学生中心，产出导向，持续改进"为指导思想，以京津冀协同发展和服务雄安新区建设为契机，加强与省内外知名中小学、著名工业企业、商业公司等单位的密切合作，使我校的实践教学能够满足各专业人才培养的需求。学校通过加大资金投入不断完善实践教学的设施、设备及环境建设。
                        </li>
                        <li style={{ fontSize: 12, listStyle: 'none', marginTop: '1vh',lineHeight:'3vh'}}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我校构建了"实验、实训、实习、毕业论文(设计)、第二课堂"五位一体的实践教学体系， 主要包括:专业技能实训(包括军事技能训练和各专业技术课教学)、、实验教学、行业认知实习、毕业实习(含专业综合实习、顶岗实习和教育实习)、学科竞赛、学生社会实践、毕业论文(设计)等。2018年1月3日，中国教育报以“建立教育协同发展的'命运共同体'--河北师范大学'顶岗实习工作纪实"为题，头版头条报道我校顶岗实习工作, 并以“供给侧改革在教育领域的生动实践”为题，配发评论员文章。
                        </li>
                    </div>
                </div>
            </div>
        )
    }
}
