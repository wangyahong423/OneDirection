import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, ImageBackground, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { Actions } from 'react-native-router-flux';
const { width, height } = Dimensions.get('window');
const s = width / 460;

export default class Second extends Component {
    render() {
        return (
            <ImageBackground style={{ width: '100%', height: height }} source={require('../../../assets/gonglve/beijing.jpg')}>
                <View style={{ width: width, height: 60 * s, flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                    <TouchableOpacity
                        onPress={() => Actions.pop()}
                        style={{ position: "absolute", position: "absolute", left: 10 * s, }}>
                        <Icon name="reply" style={{ fontSize: 35 * s }} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 20 * s }}>第二课堂</Text>
                </View>
                <View style={styles.box}>
                    <ScrollView>
                        <View style={styles.block}>
                            <Text style={styles.word}>&emsp;&emsp;{`为具体实施《河北师范大学普通全日制本科学生第二课堂学分管理办法》，特制定本细则。`}</Text>
                            <Text style={[styles.word, { color: 'red' }]}>&emsp;&emsp;{`一、专业特色活动`}</Text>
                            <Text style={styles.word}>&emsp;&emsp;{`专业特色活动包括第二课堂特色项目、博雅讲堂和“叩响音乐之门”等活动。`}</Text>
                            <Text style={styles.word}>&emsp;&emsp;{`1、第二课堂特色项目是指由学校教务处批准、各二级学院（系）承办的各类提升学生专业和综合素养，强化专业共同核心能力的特色活动。各二级学院项目负责人根据学生参与活动的表现进行分值认定，并将认定结果录入系统，根据学生活动表现，每位学生本项最高累计认定分值不超过2分。`}</Text>
                            <Text style={styles.word}>&emsp;&emsp;{`2、“博雅讲堂”是由各相关单位组织的，旨在培养学生的综合素质，使学生在道德、情感、理智等方面全面发展的通识教育类讲座。学生参加在教务处备案的“博雅讲堂”讲座满6次，计1分，不满6次不计分，每位学生本项最高累计认定分值不超过2分。次数以考勤机数据为准。（讲座次数可与学院组织的学术报告会等累加，最高累计认定分值不超过2分）`}</Text>
                            <Text style={styles.word}>&emsp;&emsp;{`3、“叩响音乐之门”校园音乐鉴赏会，旨在为学生提供一个音乐艺术文化素养教育的活性演示平台，使同学们近距离接触音乐、了解音乐、喜欢音乐，进而陶冶情操、启迪智慧、净化心灵。学生参加音乐鉴赏会活动满6次（含6次）以上，计1学分。次数以考勤机数据为准。`}</Text>
                            <Text style={[styles.word, { color: 'red' }]}>&emsp;&emsp;{`二、科学研究`}</Text>
                            <Text style={styles.word}>&emsp;&emsp;{`科学技术研究涵盖学生发表或参与的学术论文、论著作品、专利、技术成果开发转让、科研创新项目以及其他科研活动等。`}</Text>
                            <Text style={styles.word}>&emsp;&emsp;{`1、学术论文是指在国际、国内正式刊物上，有内部准印证及学术会议论文集等非正式刊物上发表的学术论文。发表EI或SCI或CSSCI收录的文章，第一、二、三作者分别计6分、5分、4分，其他作者计3分；在核心期刊发表文章，第一、二、三作者分别计4分、3.5分、3分，其他作者计2.5分；在一般刊物、学术论文集中发表文章，第一、二、三作者分别计3.5分、3分、2.5分，其他作者计2分。`}</Text>
                            <Text style={styles.word}>&emsp;&emsp;{`2、论著作品应为正规出版物。出版论著作品，第一、二、三作者分别计6分、5分、4分，其他作者计3分。`}</Text>
                            <Text style={styles.word}>&emsp;&emsp;{`3、专利包括发明专利、实用新型专利、外观设计专利等。发明专利的第一、二、三专利人，分别计6分、5分、4分；实用新型专利的第一、二、三专利人，分别计3分、2分、1分；外观设计专利的第一、二、三专利人，分别计2分、1.5分、1分。`}</Text>
                            <Text style={styles.word}>&emsp;&emsp;{`4、技术成果开发、转让包括技术转让、开发转让、一般性研制等。技术转让的第一、二、三转让人，分别计4分、3分、2分；开发转让的第一、二、三转让人，分别计3分、2分、1分；一般性研制的第一、二、三转让人，分别计2分、1.5分、1分。`}</Text>
                            <Text style={styles.word}>&emsp;&emsp;{`5、学术论文发表以录用通知书或正式发表为准；专利获准以收到交证书费的收录通知书或正式的专利证书为准；技术成果的开发推广，以学校或个人应收到的分成部分经费为准；技术成果转让，以双方签订的技术成果转让合同书和进入学校的转让经费为准。`}</Text>
                            <Text style={styles.word}>&emsp;&emsp;{`6、发表学术研究成果要讲究真实性和诚信，杜绝抄袭他人论文和其他弄虚作假行为，一经发现，经调查取证确实，学校将严肃教育批评，按有关校纪校规处理。`}</Text>
                            <Text style={styles.word}>&emsp;&emsp;{`7、科研创新项目包括大学生创新创业训练计划、挑战杯、创青春等科研创新等项目。参加国家级项目并结项，项目负责人计6分，其它参与者等差递减0.5分；参加省级项目并结项，项目负责人计5分，其它参与者等差递减0.5分；参加市厅级项目并结项，项目负责人计4分，其它参与者等差递减0.5分；参加校级项目并结项，项目负责人计2分，其它参与者分别加1.5分、1分、0.5分、0.2分。比赛设特等奖，在一等奖的基础上酌情加0.5分。同一项目计分只取前5名。`}</Text>
                            <Text style={styles.word}>&emsp;&emsp;{`8、同一学生作为主持人的不同项目，可累计计分；同一学生作为参与人的不同项目，只认定最高分值，不累计。`}</Text>
                            <Text style={styles.word}>&emsp;&emsp;{`9、在结项基础上获奖者，可累加相应的获奖等级分数。获得国家一、二、三等奖的项目负责人分别累加到6分、5分、4分，其它参与者等差递减0.5分；获得省级一、二、三等奖的项目负责人分别累加到5分、4分、3分，其它参与者等差递减0.5分；获得校级一、二、三等奖的项目负责人分别累加到3分、2.8分、2.6分，其它参与者等差递减0.5分。如比赛设特等奖，在一等奖的基础上酌情加0.5分。同一项目计分只取前5名。`}</Text>
                            <Text style={styles.word}>&emsp;&emsp;{`10、同一项目获得不同级别奖励的，只认定最高分值，不累计。`}</Text>
                            <Text style={styles.word}>&emsp;&emsp;{`11、学生参与学院（系）组织的学术报告会、专题研讨、研究生课题讨论会等满6次（含6次）计1分，不满6次不得分。每位学生本项最高累计认定分值不超过2分。次数以考勤机数据为准。（参会次数可与“博雅讲堂”累加，最高累计认定分值不超过2分）`}</Text>
                            <Text style={styles.word}>&emsp;&emsp;{`12、学生参与学院教师的科研项目等其他科研活动，由学院（系）团委根据学生参与的内容、时间等进行审核认定，每位学生最高累计认定分值不超过1分。`}</Text>
                            <Text style={[styles.word, { color: 'red' }]}>&emsp;&emsp;{`三、竞赛项目`}</Text>
                            <Text style={styles.word}>&emsp;&emsp;{`竞赛项目主要指学校主管部门或各学院（系）认定的由国家级（及以上）、省级、市级和校级组织主办和承办的各类学科竞赛、技能竞赛、文体竞赛、创新创业竞赛等。国家级、省级、市级、校级的界定标准是由对应行政部门组织，并下发通知，经院、校层层选拔，代表学校（学院）参加的比赛及评选。`}</Text>
                            <Text style={styles.word}>&emsp;&emsp;{`1、参加国家级及以上比赛计1.5分，获一、二、三等奖及优秀奖分别计6分、5分、4分、3分；参加省级比赛计1分，获一、二、三等奖及优秀奖分别计5分、4分、3分、2分；参加市级比赛计0.5分，获一、二、三等奖及优秀奖分别计3分、2.5分、2分、1.5分；参加校级比赛计0.2分，获一、二、三等奖及优秀奖分别计2分、1.5分、1分、0.5分。`}</Text>
                            <Text style={styles.word}>&emsp;&emsp;{`2、比赛设特等奖，在一等奖的基础上酌情加0.5分。单项奖按优秀奖计分。金、银、铜奖分别按一、二、三等奖计分。`}</Text>
                            <Text style={styles.word}>&emsp;&emsp;{`3、技能证书包括全国计算机等级证书、全国大学外语等级证书、计算机技术与软件资格（水平）考试证书、普通话证书等。`}</Text>
                            <Text style={styles.word}>&emsp;&emsp;{`4、获得全国计算机四级、三级、二级证书分别计3分、2分、1分；获得全国大学生外语六级、四级证书分别计1分、0.5分；获得全国大学生英语口语B级（含）以上计1分；获得计算机技术与软件资格（水平）考试高级、中级、初级证书分别计3分、2分、1分。获得普通话一级乙等（含）以上计0.5分（播音与主持艺术专业除外）。`}</Text>
                            <Text style={styles.word}>&emsp;&emsp;{`5、艺术、体育类学生获得全国大学生外语六级、四级证书分别计1.5分、1分。`}</Text>
                            <Text style={styles.word}>&emsp;&emsp;{`6、同一学生的同一证书的不同等级，只认定最高的分值，不累计。`}</Text>
                            <Text style={[styles.word, { color: 'red' }]}>&emsp;&emsp;{`五、校园文化活动`}</Text>
                            <Text style={styles.word}>&emsp;&emsp;{`校园文化活动涵盖学生参与的科技文化艺术节、社会实践、调研征文活动和共同成长小组等。`}</Text>
                            <Text style={styles.word}>&emsp;&emsp;{`1、参加科技文化艺术节系列活动者，获一、二、三等奖及优秀奖分别计2分、1.5分、1分、0.5分，特色展示项目的核心成员，计0.5分。`}</Text>
                            <Text style={styles.word}>&emsp;&emsp;{`2、参加大学生寒暑期社会实践、行走课堂等实践活动并按要求完成实践任务者，计0.5分；获得市级以上、校级、院级表彰奖励者，分别计2分、1.5分、1分。同时获得多级表彰的，只认定最高分值，不累计。`}</Text>
                            <Text style={styles.word}>&emsp;&emsp;{`3、参加“调研河北”等主题调研或者主题征文等活动的，获得省级一、二、三等奖分别计1分、0.8分、0.6分；获得市级一、二、三等奖分别计0.8分、0.6分、0.4分；获得校级一、二、三等奖分别计0.6分、0.4分、0.2分。同一活动获得不同级别奖励的，只认定最高分值，不累计。`}</Text>
                            <Text style={styles.word}>&emsp;&emsp;{`4、参加校团委组织的共同成长小组，获得校级表彰的，活动负责人（或活动核心成员）计1分；其它成员计0.5分。`}</Text>
                            <Text style={[styles.word, { color: 'red' }]}>&emsp;&emsp;{`六、创业实践`}</Text>
                            <Text style={styles.word}>&emsp;&emsp;{`创业实践包括学生参加创客训练营、自主成立初创企业和自主创办注册公司等实践活动。`}</Text>
                            <Text style={styles.word}>&emsp;&emsp;{`1、学生积极参加大学生创客训练营并获得结业证书，计0.5分。`}</Text>
                            <Text style={styles.word}>&emsp;&emsp;{`2、学生团队自主成立初创企业，未取得营业执照或取得营业执照未满6个月，但是入驻大学生创业孵化园并稳定经营6个月以上，顺利通过孵化园中期审核，负责人计2分，其他参与人计1分。`}</Text>
                            <Text style={styles.word}>&emsp;&emsp;{`3、学生自主创办注册公司，取得营业执照并稳定经营6个月以上，提交营业执照和近6个月财务报表，招生就业处审核通过，负责人计3分，其他参与人计2分。`}</Text>
                        </View>
                    </ScrollView>
                </View>
            </ImageBackground>
        )
    }
}
const styles = StyleSheet.create({
    box: {
        height: '100%',
        backgroundColor: 'rgba(255,255,255,0.4)'
    },
    block: {
        width: '80%',
        marginTop: '7%',
        margin: '10%',
        // alignItems: 'center'
    },
    word: {
        fontSize: 18
    }
});
