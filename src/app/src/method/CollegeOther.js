import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import { NavBar,List,SearchBar,Accordion } from 'antd-mobile';
import '../App.css';

export default class CollegeOther extends Component {
    render() {
        return (
            <div>
                <NavBar
                    style={{ backgroundColor: '#37376F', color: '#fff',position:'fixed ',top:'0',zIndex:10,textAlign:'center',height:'7vh',width:'100vw'}}
                    leftContent={[
                        <Link to="/college"><span style={{fontSize:'17px',color:'white'}} className="iconfont icon-ico_leftarrow"></span></Link>
                    ]}>
                        其他学院
                </NavBar>
                <div style={{height:'86vh'}}>
                    <Accordion accordion openAnimation={{}} className="my-accordion" onChange={this.onChange}>
                        <Accordion.Panel header="马克思主义学院">
                            <List className="my-list">
                                <List.Item >
                                    <textarea cols="2" rows="10" style={{width:'88vw',textIndent:'2em',lineHeight:'5vh'}} >
                                    河北师范大学马克思主义学院是河北师范大学直属的二级机构，是全校思想政治理论课教学和马克思主义理论研究的专门机构，是马克思主义理论学科博士、硕士点的依托单位，是马克思主义理论和思想政治教育专业人才培养单位。经过历代学人几十年的艰苦创业和全面建设，马克思主义学院在人才队伍建设、科学研究、课程建设和学科建设等方面，取得了一系列成绩，实现了跨越式发展。
                                    </textarea>
                                </List.Item>
                            </List>
                        </Accordion.Panel>
                        <Accordion.Panel header="历史学院" className="pad">
                            <List className="my-list">
                                <List.Item>
                                    <textarea cols='2' rows="10" style={{width:'88vw',textIndent:'2em',lineHeight:'5vh'}} >
                                    河北师范大学历史文化学院由原河北师范学院历史系、原河北师范大学历史系于1996年合并而成，一直是学校的重点学科。张恒寿、王树民、胡如雷、黄德禄等曾在此弘文励教，苑书义、沈长云等仍耕耘在教学科研第一线，这些史学名家为学科发展奠定了坚实基础。多年来几代学人筚路蓝缕，以启山林，学院目前呈现出良好的发展态势，在2012年教育部组织的第三轮全国学科评估中，中国史排名第22位，世界史排名第26位，考古学排名第13位。
                                    </textarea>
                                </List.Item>
                            </List>
                        </Accordion.Panel>
                        <Accordion.Panel header="美术与设计学院" className="pad">
                            <List className="my-list">
                                <List.Item>
                                    <textarea cols='2' rows="10" style={{width:'88vw',textIndent:'2em',lineHeight:'5vh'}} >
                                    河北师范大学美术与设计学院创建于1970年。经历了文艺军体系、艺术系的奠基与创业阶段，美术系、工艺美术系、广告系以及美术学院、艺术设计学院等独立发展阶段，于2009年12月合并组建美术与设计学院。
                                    经过40余年的建设和发展，学院积累了优良的教书育人传统和较为丰富的培养美术人才的经验，具有比较合理的办学模式、教学方法和优良的学风传承，有着良好的社会声誉。学院培养了大批优秀美术人才，包括中央美术学院中国画学院院长唐勇力、首都师范大学美术学院院长刘进安、中国艺术研究院研究生学院副院长陈孟昕、当代著名艺术家岳敏君、中央美术学院美术馆馆长张子康、湖北美术馆馆长冀少峰，著名油画家武明中等具有很高知名度的美术教育家、画家，对河北美术事业发展发挥了重要作用，对中国当代美术创作与教育也产生了深远影响。
                                    </textarea>
                                </List.Item>
                            </List>
                        </Accordion.Panel>
                        <Accordion.Panel header="法政与公共管理学院" className="pad">
                            <List className="my-list">
                                <List.Item>
                                    <textarea cols='2' rows="10" style={{width:'88vw',textIndent:'2em',lineHeight:'5vh'}} >
                                    法政与公共管理学院组建于2016年1月，由原法政学院的法学、政治学和原公共管理学院的公共管理等三个学科专业重组整合而成。目前学院教职工总数为73人，其中专任教师64人，教授17人，副教授23人，具有博士学位35人。
                                    学院现拥有法学、政治学与行政学、行政管理、劳动与社会保障、公共事业管理等5个本科专业，法学、政治学、公共管理3个硕士一级学科授权点，公共管理硕士(MPA)和法律硕士2个专业学位授权点。在校全日制本科生、硕士研究生1000余名。
                                    </textarea>
                                </List.Item>
                            </List>
                        </Accordion.Panel>
                        <Accordion.Panel header="化学与材料科学学院" className="pad">
                            <List className="my-list">
                                <List.Item>
                                    <textarea cols='2' rows="10" style={{width:'88vw',textIndent:'2em',lineHeight:'5vh'}} >
                                    河北师范大学化学与材料科学学院于1996年6月由原河北师范大学化学系、河北师范学院化学系、河北教育学院化学系合并而成。学院从1951年开始招收化学专业本科生。
                                    学院拥有化学一级学科博士学位授权点和硕士学位授权点，现拥有无机化学省级重点学科、无机纳米材料和有机功能分子两个省级重点实验室和国家级化学实验教学示范中心等教学科研平台，是基础教育师资、化学研究和高水平人才培养的重要基地。学院建有国家科学教育国培计划示范性集中培训基地和河北省中学化学骨干教师培训基地。
                                    </textarea>
                                </List.Item>
                            </List>
                        </Accordion.Panel>
                        <Accordion.Panel header="体育学院" className="pad">
                            <List className="my-list">
                                <List.Item>
                                    <textarea cols='2' rows="10" style={{width:'88vw',textIndent:'2em',lineHeight:'5vh'}} >
                                    河北师范大学体育学院始建于1931年的河北省立女子师范学院体育系，已有80余年的办学历史，是我国近、现代培养体育人才的摇篮。目前，体育学院是河北省唯一体育学博士学位和体育学硕士一级学科授权单位；拥有体育教育训练学博士后科研流动站。学院师资力量雄厚，培养体育专业人才的在职教职工84人，其中专任教师75人。在职教职工中，正高职人员15人，副高职人员31人，河北省突贡专家1人，博士研究生导师4人，各类硕士研究生导师31人，博士教师15人。
                                    </textarea>
                                </List.Item>
                            </List>
                        </Accordion.Panel>
                        <Accordion.Panel header="国家文化交流学院" className="pad">
                            <List className="my-list">
                                <List.Item>
                                    <textarea cols='2' rows="10" style={{width:'88vw',textIndent:'2em',lineHeight:'5vh'}} >
                                    河北师范大学国际文化交流学院成立于1999年，是以汉语国际教育人才培养和留学生教育为基础，以汉语国际教育教学、留学预科教学、各类语言培训为主干，集系统学历教育、语言技能培训和出国短期集训培养于一体的学院。
                                    </textarea>
                                </List.Item>
                            </List>
                        </Accordion.Panel>
                        <Accordion.Panel header="初等教育系" className="pad">
                            <List className="my-list">
                                <List.Item>
                                    <textarea cols='2' rows="10" style={{width:'88vw',textIndent:'2em',lineHeight:'5vh'}} >
                                    初等教育系成立于2019年，设置小学教育专业，成立理论、小学语文、小学数学、小学英语、小学艺术和小学综合六个研究室以及河北省小学教育研究和河北教师发展与校长领导力培育两个中心。根据学校强化鲜明教师教育特色的战略部署，力争通过五年左右的时间，达到“省内一流，全国知名”的建设水平；力争通过十年左右的时间，达到集小学教师培养、小学教育研究和小学教育服务三位一体，走在全国同类院校前列的建设水平。
                                    </textarea>
                                </List.Item>
                            </List>
                        </Accordion.Panel>
                        <Accordion.Panel header="软件学院" className="pad">
                            <List className="my-list">
                                <List.Item>
                                    <textarea cols='2' rows="10" style={{width:'88vw',textIndent:'2em',lineHeight:'5vh'}} >
                                    软件学院以学科专业建设为龙头，以推进科技创新、培养模式创新和发展方式创新为核心，紧密跟踪软件技术发展趋势，着力培养行业紧缺的软件工程师。专业依托软件行业前沿态势，面向人工智能、数据科学两大领域，开设了“人工智能、HTML5与移动互联网开发、JAVA与移动智能设备开发、软件测试”四个专业方向。培养方案及课程体系紧贴市场需求，由学校与企业联合制定，并与国际接轨。课程体系在符合教育部专业规范的前提下，突出需求导向和应用性导向，加大实践课程比例，并依据市场需求变化及时进行动态调整，时刻保证专业课程设置及教学内容紧跟国际技术前沿，注重学生实践技能与创新精神的合力培养，确保为社会提供德才兼备的应用技能型高级软件人才。
                                    </textarea>
                                </List.Item>
                            </List>
                        </Accordion.Panel>
                        <Accordion.Panel header="教育学院" className="pad">
                            <List className="my-list">
                                <List.Item>
                                    <textarea cols='2' rows="10" style={{width:'88vw',textIndent:'2em',lineHeight:'5vh'}}>
                                    河北师范大学教育学院由原河北师范大学教育系、教科所、原河北师范学院教育教学部和原河北教育学院教管系于1998年合并而成，1999年完成了机构及人员的实质性合并。除各职能部门外,我院现设五个本科专业：心理学（含心理学和应用心理学）、教育学、学前教育学和公共事业管理（师范类）。目前，全院有教职工76人,其中教授19人，副教授23人，讲师20人，助教1人，博导1人、硕导28人， 河北省教学名师1名，河北省突出贡献中青年专家2人、校级学术带头人6人、校级中青年骨干教师7人。具有博士学位的教师9人，具有硕士学位的35人。
                                    </textarea>
                                </List.Item>
                            </List>
                        </Accordion.Panel>
                        <Accordion.Panel header="外国语学院" className="pad">
                            <List className="my-list">
                                <List.Item>
                                    <textarea cols='2' rows="10" style={{width:'88vw',textIndent:'2em',lineHeight:'5vh'}}>
                                    河北师范大学外国语学院历史悠久，前身可追溯至1902年北京顺天府学堂的英语科。1998年11月，三所高校的外语系合并组建外国语学院。学院是河北省高校外语教学研究会、河北省翻译工作者协会等会长单位。学院为河北师范大学外语与翻译实验中心和河北师范大学出国外语考试中心所在单位。
                                    </textarea>
                                </List.Item>
                            </List>
                        </Accordion.Panel>
                        <Accordion.Panel header="新闻传播学院" className="pad">
                            <List className="my-list">
                                <List.Item>
                                    <textarea cols='2' rows="10" style={{width:'88vw',textIndent:'2em',lineHeight:'5vh'}} >
                                    新闻传播学院成制于2004年，是河北师范大学最具发展活力的非师范专业学院之一，2014年起确定为省委宣传部与河北师范大学共建单位。学院设有新闻学、广告学、广播电视编导、播音与主持艺术、戏剧影视文学等5个本科专业，以及艺术学理论硕士一级授权点、新闻与传播专业硕士授权点。学院现有教职工44人，其中教授7人、副教授23 人，硕士研究生导师21人，在校本科生872人，研究生57人。
                                    </textarea>
                                </List.Item>
                            </List>
                        </Accordion.Panel>
                        <Accordion.Panel header="数学科学学院" className="pad">
                            <List className="my-list">
                                <List.Item>
                                    <textarea cols='2' rows="10" style={{width:'88vw',textIndent:'2em',lineHeight:'5vh'}}>
                                    数学与信息科学学院（田家炳教育书院）成立于2000年。数学学科的发展源于上世纪五十年代成立的河北师范大学数学系和河北师范学院数学系。河北师范大学数学系成立于1950年初，由天津河北师范学院筹备建立的理化系在1952年分立的数学系发展而来，1956年8月迁至石家庄建立石家庄师范学院数学系，并于1962年更名为河北师范大学数学系；河北师范学院数学系源于1951年河北师范专科学校的数学科，1956年改为河北北京师范学院数学系，1961年北京铁道师范学院数学系并入，1969年迁至张家口市宣化更名为河北师范学院数学系，1981年迁至石家庄市。河北教育学院数学系成立于1986年。1998年11月原河北师范大学数学系、河北师范学院数学系、河北教育学院数学系合并成立了河北师范大学数学系，2000年1月与计算机系合并成立数学与信息科学学院,2019年4月计算机系从数学与信息科学学院分离并入计算机与网络安全管理学院。
                                    </textarea>
                                </List.Item>
                            </List>
                        </Accordion.Panel>
                        <Accordion.Panel header="生命科学学院" className="pad">
                            <List className="my-list">
                                <List.Item>
                                    <textarea cols='2' rows="10" style={{width:'88vw',textIndent:'2em',lineHeight:'5vh'}}>
                                    河北师范大学生命科学学院其前身为1951年成立的河北北京师范专科学校生物系；1956年，从北京搬至石家庄更名为石家庄师范学院生物系；1960年更名为石家庄师范大学生物系；1962年更名为河北师范大学生物系；2000年更名为河北师范大学生命科学学院。
                                    学院现有在职教职工125人，专任教师91人，其中教授40人，副教授31人。包括中科院院士1人、国务院特殊津贴专家2人、国家“万人计划”教学名师1人、国家“百千万”人才工程入选者1人、河北省有突出贡献中青年专家5人、河北省政府特殊津贴专家5人、河北省巨人计划创新团队2人、河北省百人计划5人、河北省新世纪“三三三人才工程”一层次1人、二层次2人、河北省青年拔尖人才4人、教育部新世纪优秀人才支持计划5人、河北省杰出青年科学基金获得者7人、河北省高校“百名优秀创新人才支持计划”6人。多人次入选河北省教学名师。
                                    </textarea>
                                </List.Item>
                            </List>
                        </Accordion.Panel>
                        <Accordion.Panel header="计算机与网络空间安全学院、计算机教学部" className="pad">
                            <List className="my-list">
                                <List.Item>
                                    <textarea cols='2' rows="10" style={{width:'88vw',textIndent:'2em',lineHeight:'5vh'}}>
                                    河北师范大学在计算机人才培养方面历史悠久，计算机科学与技术专业从1985年开始招生，网络工程专业从2003年开始招生，随后，电子商务专业、物联网工程专业、信息安全专业随着国家经济发展和战略需要陆续开设并招生，另外计算机应用专业硕士学位研究生从2003年开始招生。
                                    为适应国家战略，促进学科发展和人才培养，河北师范大学计算机与网络空间安全学院于2019年4月组建成立。学院拥有计算机科学与技术和网络空间安全硕士学位授权一级学科及电子信息硕士（计算机技术领域）专业学位授予权。中国计算机学会石家庄会员活动中心、石家庄计算机学会等学术团体挂靠学院。学院拥有河北省网络与信息安全重点实验室、河北省计算机教学实验示范中心、河北省计算机虚拟仿真实验中心3个省级科研和教学平台。
                                    </textarea>
                                </List.Item>
                            </List>
                        </Accordion.Panel>
                        <Accordion.Panel header="教师教育学院" className="pad">
                            <List className="my-list">
                                <List.Item>
                                    <textarea cols='2' rows="10" style={{width:'88vw',textIndent:'2em',lineHeight:'5vh'}}>
                                    教师教育学院秉承“实践型”教师教育改革理念，坚持职前职后衔接、培养培训一体的开放式办院体系，以培养“为中国而教”的“四有”好老师为目标，对内承担全校本科师范生教师教育类课程的设置实施、公费师范生教育培养统筹、全日制教育硕士研究生、课程与教学论（学科方向）硕士研究生、农村教育硕士教育培养以及教育专业博士联合培养等工作；对外承担国培省培计划、河北省教育家型校长培养工程等职后培训工作，融教学、科研、管理、服务于一体。
                                    </textarea>
                                </List.Item>
                            </List>
                        </Accordion.Panel>
                        <Accordion.Panel header="大学外语教学部" className="pad">
                            <List className="my-list">
                                <List.Item>
                                    <textarea cols='2' rows="10" style={{width:'88vw',textIndent:'2em',lineHeight:'5vh'}}>
                                    河北师范大学大学外语教学部由原河北师范大学、河北师范学院、河北教育学院、河北师范大学职业技术学院的外语教学部合并而来。1982年，原河北师范学院外语系的公共外语教研室从外语系分离出来，成立了“大学外语教学部”。1984年，原河北师范大学外语系的公共外语教研室从外语系分离出来，成立了“公共外语教学部”并于1990年更名为“大学外语教学部”。1996年四校合并，在原河北师范大学、河北师范学院的外语教学部的基础上组建了新的“大学外语教学部”，分东、西校区办公。2003年，大学外语教学部开始招收专接本英语专业学生，2006年创设“商务英语”和“科技英语”专业。2007年7月，大学外语教学部与外国语学院合并，部分教师和专业并入外国语学院。2010年初，随着职业技术学院基础部英语教师并入大学外语教学部，合并工作全部完成。2018年10月25日大学外语教学部开始第二次独立办学。
                                    </textarea>
                                </List.Item>
                            </List>
                        </Accordion.Panel>
                        <Accordion.Panel header="汇华学院" className="pad">
                            <List className="my-list">
                                <List.Item>
                                    <textarea cols='2' rows="10" style={{width:'88vw',textIndent:'2em',lineHeight:'5vh'}}>
                                    河北师范大学汇华学院成立于2001年6月，是河北省政府批准、教育部确认的全日制本科层次的独立学院。汇华学院坐落于石家庄市西南高教区。学院师资力量雄厚，教学设备齐全，校园环境优雅，是一所园林式书院。学院现设有9个学部，53个本科专业，覆盖经济学、法学、教育学、文学、历史学、理学、工学、管理学、艺术学等9大学科门类，在校生11000余人。汇华学院秉承河北师范大学优良传统，充分发挥校本部雄厚的教育资源优势，选聘优秀教师担任全部主干课程的教学。学院现聘任专任教师705人，其中教授111人、副教授306人，具有博士学位的225人、硕士学位的372人。
                                    </textarea>
                                </List.Item>
                            </List>
                        </Accordion.Panel>
                        <Accordion.Panel header="文学院" className="pad">
                            <List className="my-list">
                                <List.Item>
                                    <textarea cols='2' rows="10" style={{width:'88vw',textIndent:'2em',lineHeight:'5vh'}}>
                                    文学院是河北师范大学核心学院之一。学院秉承“怀天下，求真知”的校训，坚持“立足河北，面向全国，服务于京津冀一体化发展战略，为基础教育培养骨干师资，为高等院校培养基础师资，为党政机关、企事业单位输送有文化底蕴的复合型中文人才，积极服务国家经济建设和社会发展”的总体办学理念。
                                    </textarea>
                                </List.Item>
                            </List>
                        </Accordion.Panel>
                        <Accordion.Panel header="音乐学院" className="pad">
                            <List className="my-list">
                                <List.Item>
                                    <textarea cols='2' rows="10" style={{width:'88vw',textIndent:'2em',lineHeight:'5vh'}}>
                                    河北师范大学音乐学院前身是创建于1970年的河北师范大学音乐系。1996年，原河北师范大学音乐系和河北师范学院音乐系合并成为新的河北师范大学音乐系，并于2001年成立音乐学院。经过40多年的办学实践，学院现已成为培养音乐师资和音乐人才的重要基地，已发展成为省内办学实力最强的高师音乐院系。学院现有教职工69人，其中专任教师57人，教授10人，副教授30人。在校本科生626人，研究生112人。
                                    </textarea>
                                </List.Item>
                            </List>
                        </Accordion.Panel>
                        <Accordion.Panel header="商学院" className="pad">
                            <List className="my-list">
                                <List.Item>
                                    <textarea cols='2' rows="10" style={{width:'88vw',textIndent:'2em',lineHeight:'5vh'}}>
                                    河北师范大学商学院成立于2004年6月，是河北省重要的经济学、管理学研究基地和经管类高级人才培养培训基地。
                                    学院设有理论经济学和工商管理2个一级学科学术硕士学位授权点，以及工商管理硕士（MBA）、金融硕士（MF）、会计硕士（MPAcc）3个专业硕士学位授权点；有金融工程、国际经济与贸易、人力资源管理、会计学、物流管理、市场营销等6个本科专业；有河北省小额贷款研究咨询中心、河北师范大学经济研究中心、河北师范大学现代管理研究中心、河北师范大学金融数据分析中心等4个研究中心；有河北省实验教学示范中心1个，包括金融、贸易、ERP综合实训等8个经济管理类实验室；有“河北省管理教育创新高地”、“河北省品牌特色专业”和“河北省综合改革试点专业”各1个；是“全国现代管理领域专业技术人才知识更新工程”河北省教学基地。南京大学中国智库研究与评价中心CTTI来源智库、河北省“现代服务与公共政策”软科学研究基地设在商学院。
                                    </textarea>
                                </List.Item>
                            </List>
                        </Accordion.Panel>
                        <Accordion.Panel header="物理学院" className="pad">
                            <List className="my-list">
                                <List.Item>
                                    <textarea cols='2' rows="10" style={{width:'88vw',textIndent:'2em',lineHeight:'5vh'}}>
                                    物理科学与信息工程学院成立于1952年，1998年，原河北师范大学物理系、河北师范学院物理系、河北教育学院物理系合并为河北师范大学物理系，2005年3月更名为物理科学与信息工程学院。    
                                    学院有一支教学经验丰富、学术造诣深厚、职称、年龄结构合理的师资队伍。学院现有专业教师72人，其中教授26人，副教授30人，讲师16人。学院有高级实验师10人、实验师2人。其中，有博士学位的教师44人，博士导师11人。中国科学院院士孙义燧先生等8位知名专家学者被聘为我院名誉教授或兼职教授。   
                                    </textarea>
                                </List.Item>
                            </List>
                        </Accordion.Panel>
                        <Accordion.Panel header="资源与环境科学学院" className="pad">
                            <List className="my-list">
                                <List.Item>
                                    <textarea cols='2' rows="10" style={{width:'88vw',textIndent:'2em',lineHeight:'5vh'}}>
                                    河北师范大学资源与环境科学学院是1998年11月由地理学系和人口研究所合并而成。地理系的前身为1930年始建的河北女子师范学院史地系；人口研究所的前身为1978年始建的河北师范大学人口理论研究组。学院现有地理科学、地理信息科学、人文地理与城乡规划、环境科学4个本科专业。
                                    </textarea>
                                </List.Item>
                            </List>
                        </Accordion.Panel>
                        <Accordion.Panel header="职业技术学院、中燃工学院" className="pad">
                            <List className="my-list">
                                <List.Item>
                                    <textarea cols='2' rows="10" style={{width:'88vw',textIndent:'2em',lineHeight:'5vh'}}>
                                    河北师范大学职业技术学院成立于1984年，是全国最早建立的11所高职高师院校之一。在长期的办学实践中，学院坚持以立德树人为根本，以服务经济社会发展为宗旨，以促进学生就业创业发展为导向，以提升基础能力和加强内涵建设为主线，主动适应经济社会教育发展需要，为河北省乃至全国培养了数以万计综合素质高，实践技能强，基础理论扎实，具有创新意识的中高等职业教育“双师型”师资和经济社会发展需要的应用型人才，深受社会欢迎，学院已建设成为“发展定位准确、办学特色鲜明、品牌效应突出”、河北一流、全国知名的职业教育师资和应用型人才培养、培训基地、职业教育教学研究中心。
                                    学院现设有机械工艺技术、通信工程、机械工程、汽车维修工程教育、应用电子技术教育、电气工程及其自动化等6个本科专业，拥有职业技术教育学硕士学科点和教育硕士（职业技术教育领域）专业学位培养点。职业技术教育学学科被评为省级重点建设学科，学院被批准为河北省高等学校人文社会科学重点研究基地。
                                    </textarea>
                                </List.Item>
                            </List>
                        </Accordion.Panel>
                        <Accordion.Panel header="学前教育学院（旅游系）" className="pad">
                            <List className="my-list">
                                <List.Item>
                                    <textarea cols='2' rows="10" style={{width:'88vw',textIndent:'2em',lineHeight:'5vh'}}>
                                    2018年10月，我校学前教育专业从教育学院划出，组建实体化的学前教育学院，与旅游系一起办学。目前，学前教育学院（旅游系）为学前教育学院和旅游系 “一套班子，两块牌子”，一并运行。
                                    旅游系成立于2010年1月，是河北省最早从事旅游研究和河北省高校最早的乙级旅游规划资质单位，在业内有着较高的学术影响和良好的声誉，毕业生遍及省内外各级旅游管理部门、景区、学校以及酒店、航空等领域。目前，设有旅游管理、旅游管理与服务教育、烹饪与营养教育等本科专业，以及旅游管理、公共管理航空与旅游管理方向专业硕士学位授权点。
                                    </textarea>
                                </List.Item>
                            </List>
                        </Accordion.Panel>
                        <Accordion.Panel header="公共体育教育部" className="pad">
                            <List className="my-list">
                                <List.Item>
                                    <textarea cols='2' rows="10" style={{width:'88vw',textIndent:'2em',lineHeight:'5vh'}}>
                                    公共体育教学部是由原河北师范大学公共体育教育部、河北师范学院体育教学部、河北教育学院体育教研室、河北职业技术师范学院基础部体育教研室合并而成。公共体育教学部围绕立德树人，以学生为中心，通过《大学体育》使学生掌握科学锻炼的基础知识、基本技能和有效方法，至少学会1-2项终身受益的体育锻炼项目，促进学生的德、智、美全面发展和健康生活方式的养成。
                                    </textarea>
                                </List.Item>
                            </List>
                        </Accordion.Panel>
                    </Accordion>
                </div>
            </div>
        )
    }
}
