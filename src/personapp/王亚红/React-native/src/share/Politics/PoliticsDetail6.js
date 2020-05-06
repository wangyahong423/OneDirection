import React, { Component } from 'react'
import { Text, View, ScrollView, Dimensions,StyleSheet } from 'react-native'
import { Accordion } from '@ant-design/react-native';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class PoliticsDetail5 extends Component {
    constructor() {
        super();
        this.state = {
            todo: ['答案'],
            activeSections: [],
            todo: [{
                header: '参考答案',
                content1: '一、单项选择题：',
                content2: '1. 【答案解析】本题正确选项为 A 选项，本题考查的是实践和认识的关系。实践是认识的基础，是认识的来源。袁隆平的话表明，只有通过实践才能获得认识，实践是认识的来源。A选项正确。实践水平的提高并不是依赖于认识水平的提高，B选项错误。正确的认识促进实践发展，错误的认识阻碍实践发展，C选项错误。两次飞跃中第二次飞跃更为重要，D选项错误。',
                content3: '2. 【答案解析】本题正确选项为 D 选项，社会意识的相对独立性主要表现为：社会意识与社会存在发展的不平衡性；社会意识内部各种形式之间的相互影响及各自具有的历史继承性；社会意识对社会存在的能动的反作用。其中，社会意识对社会存在的能动的反作用是社会意识相对独立性的突出表现。D选项正确。',
                content4: '3. 【答案解析】本题正确选项为 A 选项，机器人的使用会导致资本构成中劳动力数量的降低，所以会导致资本技术构成提高，A选项正确。在资本主义条件下，剩余价值的来源只能是剩余劳动，并不会发生改变，B选项错误。劳动生产率提高会导致个别商品价值降低，C选项错误。个别企业提高劳动生产率是个别价值低于社会价值，从而获得超额剩余价值，也就是超额利润，而不是社会平均利润，D选项错误。',
                content5: '4. 【答案解析】本题正确选项为 B 选项。马克思主义政党是工人阶级的先锋队，说明马克思主义政党的阶级基础是工人阶级。B选项正确。马克思主义政党是工人阶级的先锋队，并不等同于整个工人阶级，A选项错误。马克思主义政党工人阶级的先进性决定了马克思主义政党的先进性，C、D选项错误。',
                content6: '5. 【答案解析】本题正确选项为 D 选项，毛泽东在《论十大关系》中论述的第一大关系，即重工业、轻工业和农业的关系。D选项正确。',
                content7: '6. 【答案解析】本题正确选项为 C 选项，党的十三大首次系统阐述了社会主义初级阶段理论，小平同志在十三大召开前夕的论述，首次把社会主义初级阶段作为事关全局的基本国情加以把握。',
                content8: '7. 【答案解析】本题正确选项为 A 选项，实现城镇化首要任务是要降低农村人口比例，实现农业人口市民化。因此，A选项正确。',
                content9: '8. 【答案解析】本题正确选项为 D 选项，高度自治不是完全自治，而是中央政府授予香港的地方事务管理权，也不是中央授权之外的剩余权力，因此，ABC都是错误说法。',
                content10: '9. 【答案解析】本题正确选项为 A 选项，近代以来，中国面临两大历史任务：争取民族独立、人民解放，实现国家富强、人民富裕。其中，第一项历史任务是实现中华民族伟大复兴的前提。题干中的工业救国等只看到了第二项，忽视了第一项历史任务。A选项正确。',
                content11: '10. 【答案解析】本题正确选项为 B 选项，辛亥革命是一次比较完全意义上的革命，因为辛亥革命推翻了君主专制制度，但并没有从根本上完成反帝反封建的任务。故B选项正确。',
                content12: '11. 【答案解析】本题的确选项为 B 选项，第一次世界大战中，西方资本主义国家为各自利益彼此厮杀，暴露了资产阶级民主的弱点，使中国的先进分子对西方资产阶级民主主义产生怀疑。B选项正确。',
                content13: '12. 【答案解析】本题正确选项为 D 选项，古田会议确立了人民军队建设的基本原则，核心内容党指挥枪，重申了党对红军实行绝对领导，D选项正确。',
                content14: '13. 【答案解析】本题正确选项为 A 选项，爱国主义是个人实现人生价值的力量源泉。A选项正确。',
                content15: '14. 【答案解析】本题正确选项为 C 选项，劳动以及通过劳动对社会和他人作出的贡献，是社会评价一个人的人生价值的普遍标准。劳动和贡献的尺度是社会评价人生价值的基本尺度。C选项正确。',
                content16: '15. 【答案解析】本题正确选项为 C 选项，2014年4月15日，中共中央党总书记、中央国家安全委员会主席习近平主持召开中央国家安全委员会第一次会议并发表重要讲话，他强调要准确把握国家安全形势变化新特点新趋势，坚持总体国家安全观。C选项正确。',
                content17: '16. 【答案解析】本题正确选项为 D 选项，近年来，中东地区局势持续动荡，恐怖主义、分离主义愈加猖獗，教派矛盾不断升级使得"重返亚太"战略受到牵制。D选项正确。',
                content18: '二、多项选择题：',
                content19: '17. 【答案解析】本题正确选项为 ABD 选项，事物的发展是一个螺旋式上升和波浪式前进的过程，C选项错误。',
                content20: '18. 【答案解析】本题正确选项为 ABCD 选项，"平衡"要精确把握亊物的度，准确掌握辩证否定的方式和方向，善于协调亊物内部各种因素的相互关系，全面理解绝对运动和相对静止的辩证关系。ABCD选项正确。',
                content21: '19. 【答案解析】本题正确选项为 BCD 选项，杰出人物会对历史发展起到一定的积极作用，但并不能决定和修改历史发展的基本方向和基本趋势。A选项错误。',
                content22: '20. 【答案解析】本题正确选项为 ABCD 选项，资本积累会导致资本有机构成提高，产生相对过剩人口，即失业人口，并形成与资本主义生产周期性特征相适应的相对过剩人口规律。相对过剩人口即劳动力供给超过了资本对它的需求形成的过剩人口。ABCD选项正确。',
                content23: '21. 【答案解析】本题正确选项为 ABCD 选项，微观规制主要是国家运用法律手段规范市场秩序，限制垄断，保护竞争，维护社会公众的合法权益。ABCD选项正确。',
                content24: '22. 【答案解析】本题正确选项为 ACD 选项，人才是综合国力竞争的主要内容之一，是国家竞争力的重要体现，是第一资源和国家战略资源，也是推进中国特色社会主义事业的关键因素。科学技术是先进生产力的集中体现和主要标志。因此，B项错误。',
                content25: '23. 【答案解析】本题正确选项为 AC 选项，我国实行农村经营方式的多样化，是以家庭联产承包责任制为基础的，是在保证农民对土地承包权的前提下进行的经营方式的改变，实行承包权和经营权的分离，并没有改变土地的集体所有权性质，因此，BD错误，正确选项为AC。',
                content26: '24. 【答案解析】本题正确选项为 ABD 选项，提高基层人大代表特别是一线工人、农民、知识分子代表比例，有利于推动人民群众最关心最直接最现实问题的解决，调到基层群众参政议政的积极性与主动性，更为充分地发挥全国人大的民意反映与监督职能。人民群众通过选举人大代表间接参与国家管理，因此，不能保证群众直接参加国家管理。',
                content27: '25. 【答案解析】本题正确选项为 ACD 选项，经济新常态的特征是不同于过去三十年的特征：一是从高速增长转为中高速增长；二是经济结构不断优化升级，第三产业消费需求逐步成为主体；三是从要素驱动、投资驱动转向创新驱动。B是新常态对世界市场的影响，不属于新常态的主要特点。',
                content28: '26. 【答案解析】本题的正确选项为 ABCD 选项，积极培育和践行社会主义核心价值观，有利于巩固马克思主义在意识形态领域的指导地位，有利于巩固全党全国人民团结奋斗的共同思想基础，有利于聚焦实现中华民族伟大复兴中国梦的强大正能量，有利于促进人的全面发展和引领社会全面进步。',
                content29: '27. 【答案解析】本题正确选项为 BCD 选项，甲午中日战争后，签订《马关条约》，割台湾岛日本。甲午战争后，中国的民族意识开始普遍觉醒。帝国主义列强对中国的争夺和瓜分的图谋，也在甲午战争爆发后达到高潮。1859年江海关英籍税务监督李泰国(1832～1898)被委派为总税务司，负责募用外国人在各口岸任税务司，从此，外籍税务司管理中国海关便成为制度了。1861年起，广州副税务司英人赫德任总税务司（初为代理），一直管理中国海关近半个世纪，A选项错误。',
                content30: '28. 【答案解析】本题的正确选项为 ABD 选项，1946年的政协决议虽然还不是中国共产党所主张的新民主主义纲领，但它否定了国民党的一党专政、个人独裁的政治制度，否定了国民党的反人民的内战政策，迫使国民党承认党派存在的合法性和各党派的平等地位，确定了民主改革的总方向。宪法草案的一些规定对于解放区民主政权的存在和发展可以起到一种保障作用。C选项不能作为共产党赞成协议的原因。',
                content31: '29. 【答案解析】本题的正确选项为 AC 选项，题干中所体现出的说法的错误在于没有把毛泽东思想与毛泽东的思想区分开来，没有把毛泽东晚年的错误与毛泽东思想的科学体系区分开来，并未体现BD选项内容。',
                content32: '30. 【答案解析】本题的正确选项为 ABD 选项，个人品德具有鲜明的特点：其一，实践性。个人品德不是个人的某种先天禀赋，而是个人在社会实践中通过社会道德要求的内化的一种特殊品性；不是一种单纯的道德意识现象，而是在社会生活中表现出的一种行为方式。其二，综合性。个人品德不是某种道德要素的表现，而是个人的道德知识、道德情感、道德意志、道德行为的综合表现；不是个别的具体行为，而是个人行为的统一整体。其三，稳定性。个人品德不是偶然的、短暂的道德行为心理现象，而是在实践活动中表现出来的行为的稳定倾向。因此，本题正确答案是选项ABD。',
                content33: '31. 【答案解析】本题的正确选项为 AC 选项，本题考查权力与权利的关系。权利与权力的关系主要表现为四个方面：权力来源于权利；权力服务于权利；权力应当以权利为界限；权力必须受到权利的制约。因此，本题正确答案是选项AC。',
                content34: '32. 【答案解析】本题的正确选项为 ABCD 选项，两个纪念日的设立，彰显了中国作为反法西斯主要战场的伟大发明，是对抗击日本帝国主义侵略付出巨大牺牲和作出巨大贡献的人们的敬重和缅怀，是对南京大屠杀中大量死难同胞的告慰和尊重，有助于向中国人民和世界各国人民传播历史亊实的真相。ABCD选项正确。',
                content35: '33. 【答案解析】本题的正确选项为 BCD 选项，亚太经济合作组织（APEC）第二十二次领导人非正式会议通过的《北京反腐败宣言》达成了就追逃、追赃开展执法合作的重要共识，加强了涉腐、涉案赃款跨境流动的信息共享，将形成携手打击跨境腐败的网络，但不能杜绝跨国腐败行为的发生，A选项明显错误。',
                content36: '三、分析题：',
                content37: '34. 【参考答案】'
                　　+'(1)（1）以上材料体现了矛盾的同一性和斗争性相互联结、相互制约的原理。矛盾的同一性和斗争性是相互联结、相互制约的。同一性不能脱离斗争性而存在，没有斗争性就没有同一性，因为矛盾的同一性是以差别和对立为前提的，是包含差别和对立的同一；斗争性也不能脱离同一性而存在，斗争性寓于同一性之中。无条件的绝对的斗争性与有条件的相对的同一性相结合，构成事物的矛盾运动，推动事物的发展。同一性规定着事物的发展方向。'
                　　+'这一原理要求我们在分析和解决矛盾时，必须从对立中把握同一，从同一种把握对立。这是辩证认识的实质所在。'
                　　+'对于材料中所提到的"互联网到底是阿里巴巴的宝库，还是潘多拉的魔盒"，是指我们应该辩证的看待互联网有利影响和负面影响。我们应该看到互联网有利的促进了经济的发展，为我们的生活带来了便利，但同时由于使用不当，也产生了一些负面影响。只有辩证的看待互联网所带来的影响，我们才能正确的对待和使用互联网。'
                　　+'(2)"蚂蚁"和"大象"正是矛盾双方，它们的同一性和斗争性促进了经济社会的发展。其同一性对事物发展的作用表现在：①由于矛盾双方相互依存，互为存在的条件，矛盾双方可以相互吸取有利于自身的因素而得到发展；②由于矛盾双方互相包含，矛盾双方可以相互吸取有利于自身的因素而发展；③由于矛盾双方彼此相通，矛盾双方可以向着自己的对立面转化而得到发展。斗争性对事物发展的作用主要表现在：①斗争推动矛盾双方力量对比发生变动，造成事物的量变；②斗争促使矛盾双方地位或性质转化，实现事物的质变。'
                　　+'材料中被比喻为"大象"的传统龙头企业以及互联网上的"小蚂蚁"企业，正是在其斗争性和同一性的共同作用下，不断发展。'
                　　,
                content38: '35. 【参考答案】'
                　　+'(1)（1）坚持"让大猫和小猫都有路走"说明发展大中型企业与小微企业的重要性。大中型企业和小微企业都是社会主义市场经济的重要组成部分，是我国经济社会发展的重要基础。大企业是我国经济的脊梁，小微企业是血肉。没有大企业，国民经济站不起来，相反，如果小微企业发展不起来，国民经济也难以持续健康发展。发展社会主义经济，必须两者兼顾，相互促进，共同发展，才能促进国民经济持续健康的发展，实现"两个一百年目标"。'
                　　+'(2)非公有制经济是促进经济社会发展的重要力量，在支撑增长、促进创新、扩大就业，增加税收等方面具有重要作用。要坚持权利平等、机会平等、规则平等，废除对非公有制经济各种形式的不合理规定，消除各种隐性壁垒，制定公有制经济企业进入特许经营领域具体办法，保证各种所有制经济依法平等使用生产要素，公开公平公正参与市场竞争。鼓励发展非公有资本控股的混合所有制经济，鼓励有条件的私有企业建立现代企业制度，促进非公有制经济发展。',
                content39: '36. 【参考答案】'
                    +'(1)（1）五四以前的新文化运动虽然对封建专制主义、伦理道德和封建迷信愚昧进行了批判，但是它的过度批判孔学，也体现了出了一定局限性。当时新文化运动的倡导者中，有的人看问题很片面，坏就是绝对的坏，好就是绝对的好。这种缺乏科学批判精神、形式主义地看问题的方法，影响了这个运动后来的发展。'
                　　+'在新文化运动的推动和影响下，中国涌现出了一批青年革命民主主义者，其中的先进分子接受俄国十月革命影响，为马克思主义在中国传播准备了思想和文化的条件。五四运动后，马克思主义与中国工人运动的结合为中国共产党的成立和新民主主义革命做了思想上和组织上的准备。'
                　　+'(2)共同点：孔子和马克思都主张建立一个人与人之间平等和睦自由的理想世界，都看到了"物质的重要性"。马克思主义中国化的过程中吸取了包括儒家思想在内的中国传统文化的精髓。以孔子为代表的中国传统思想中有着朴素的共产主义思想以及以人为本的关怀。'
                　　+'不同点：1）孔子的思想是为封建社会的统治者服务的，马克思的思想是为无产阶级服务的。'
                　　+'2）孔子所设想的理想世界是一种空想，而马克思为这个理想世界找到了一条现实的路径。马克思通过揭示"剩余价值理论"说明了资本主义社会资本增殖的不合理性，又通过创立"历史唯物主义"揭示了随着生产力的不断发展共产主义社会取代资本主义社会的历史必然性。'
                　　+'3）孔子所说的"物质的重要性"是从纯粹的物质财富的数量的重要性上强调的，马克思强调的"物质的重要性"是强调生产力作为人类社会发展的决定性力量在推动人类社会发展中的作用。'
                　　+'马克思主义作为一种外来思想文化传入中国的，要使它能为中国人民广泛接受，并在实践中发挥指导作用，必须找到一种为中国人民所能理解和接受的民族形式。这就要求以马克思主义为指导，对中国文化进行认真的清理，剔除糟粕，吸收精华，将马克思主义与中国优秀文化相结合，使马克思主义植根于中国优秀文化的土壤之中而得以生长繁荣。'
                　　,
                content40: '37. 【参考答案】'
                    +'(1)法治不仅是宏大的，也是具体的；它关乎国家治理更关乎百姓福祉。法治有助于理清政府与市场的边界。法治有利于保障人权。法治关乎安全感。法律有利于平衡权利与义务的关系。'
                　　+'（2）党的领导是中国特色社会主义最本质的特征，是社会主义法治最根本的保证。把党的领导贯彻到依法治国全过程和各方面，是我国社会主义法治建设的一条基本经验。坚持党的领导，是社会主义法治的根本要求，是全面推进依法治国的题中应有之义。党的领导和社会主义法治是一致的，社会主义法治必须坚持党的领导，党的领导必须依靠社会主义法治。只有在党的领导下依法治国、厉行法治，人民当家作主才能充分实现，国家和社会生活法治化才能有序推进。'
                　　+'依法执政，既要求党依据宪法法律治国理政，也要求党依据党内法规管党治党。必须坚持党领导立法、保证执法、支持司法、带头守法，把依法治国基本方略同依法执政基本方式统一起来，把党总揽全局、协调各方同人大、政府、政协、审判机关、检察机关依法依章程履行职能、开展工作统一起来，把党领导人民制定和实施宪法法律同党坚持在宪法法律范围内活动统一起来，善于使党的主张通过法定程序成为国家意志，善于使党组织推荐的人选通过法定程序成为国家政权机关的领导人员，善于通过国家政权机关实施党对国家和社会的领导，善于运用民主集中制原则维护中央权威、维护全党全国团结统一。'
                　　,
                content41: '38. 【参考答案】'
                    +'(1)毛泽东和蒙哥马利的"对话"折射了西方人内心深处的"国强必霸"逻辑。西方的发展史就是一部侵略史，他们依据自身发展的逻辑来担忧中国将来也会走他们的老路。改革开放以来，中国与世界的交往越来与紧密，综合国力不断增强。中国一直奉行独立自主的和平外交政策，坚持走和平发展道路。中国65年的发展道路证明了毛泽东的论述的正确性。中国的崛起不仅没有给世界带来威胁，反而带来了更多的机遇，中国的和平发展道路促进了世界经济的发展。'
                　　+'(2)中国外交政策的宗旨是维护世界和平，促进共同发展。中国坚定不移走和平发展道路，始终是维护世界和平，促进共同发展的坚定力量。坚持在和平共处五项原则的基础上发展同所有国家的关系，坚持平等互信、包容互鉴、合作共赢的精神，在获取自身利益时兼顾对方利益，在谋求自身发展时，促进共同发展。当前，中国人民正朝着实现"两个一百年"的目标奋进，推动建设和谐世界，强调政治上民主平等、经济上互利共赢、文明上，包容开放，安全方面，和睦互信。有利的说明了中国是一只和平、可亲的、文明的狮子。'
            }]
        }
    }
    _renderHeader = section => {
        return (
            <View style={styles.header}>
                <Text style={{ color: 'white' }}>{section.header}</Text>
            </View>
        );
    };

    _renderContent = section => {
        return (
            <View style={styles.content}>
                <Text style={[{ color: 'red',marginTop:5*s }, styles.contentText]}>&emsp;&emsp;{section.content1}</Text>
                <Text style={styles.contentText}>&emsp;&emsp;{section.content2}</Text>
                <Text style={styles.contentText}>&emsp;&emsp;{section.content3}</Text>
                <Text style={styles.contentText}>&emsp;&emsp;{section.content4}</Text>
                <Text style={styles.contentText}>&emsp;&emsp;{section.content5}</Text>
                <Text style={styles.contentText}>&emsp;&emsp;{section.content6}</Text>
                <Text style={styles.contentText}>&emsp;&emsp;{section.content7}</Text>
                <Text style={styles.contentText}>&emsp;&emsp;{section.content8}</Text>
                <Text style={styles.contentText}>&emsp;&emsp;{section.content9}</Text>
                <Text style={styles.contentText}>&emsp;&emsp;{section.content10}</Text>
                <Text style={styles.contentText}>&emsp;&emsp;{section.content11}</Text>
                <Text style={styles.contentText}>&emsp;&emsp;{section.content12}</Text>
                <Text style={styles.contentText}>&emsp;&emsp;{section.content13}</Text>
                <Text style={styles.contentText}>&emsp;&emsp;{section.content14}</Text>
                <Text style={styles.contentText}>&emsp;&emsp;{section.content15}</Text>
                <Text style={styles.contentText}>&emsp;&emsp;{section.content16}</Text>
                <Text style={styles.contentText}>&emsp;&emsp;{section.content17}</Text>
                <Text style={[{ color: 'red',marginTop:5*s }, styles.contentText]}>&emsp;&emsp;{section.content18}</Text>
                <Text style={styles.contentText}>&emsp;&emsp;{section.content19}</Text>
                <Text style={styles.contentText}>&emsp;&emsp;{section.content20}</Text>
                <Text style={styles.contentText}>&emsp;&emsp;{section.content21}</Text>
                <Text style={styles.contentText}>&emsp;&emsp;{section.content22}</Text>
                <Text style={styles.contentText}>&emsp;&emsp;{section.content23}</Text>
                <Text style={styles.contentText}>&emsp;&emsp;{section.content24}</Text>
                <Text style={styles.contentText}>&emsp;&emsp;{section.content25}</Text>
                <Text style={styles.contentText}>&emsp;&emsp;{section.content26}</Text>
                <Text style={styles.contentText}>&emsp;&emsp;{section.content27}</Text>
                <Text style={styles.contentText}>&emsp;&emsp;{section.content28}</Text>
                <Text style={styles.contentText}>&emsp;&emsp;{section.content29}</Text>
                <Text style={styles.contentText}>&emsp;&emsp;{section.content30}</Text>
                <Text style={styles.contentText}>&emsp;&emsp;{section.content31}</Text>
                <Text style={styles.contentText}>&emsp;&emsp;{section.content32}</Text>
                <Text style={styles.contentText}>&emsp;&emsp;{section.content33}</Text>
                <Text style={styles.contentText}>&emsp;&emsp;{section.content34}</Text>
                <Text style={styles.contentText}>&emsp;&emsp;{section.content35}</Text>
                <Text style={[{ color: 'red',marginTop:5*s }, styles.contentText]}>&emsp;&emsp;{section.content36}</Text>
                <Text style={styles.contentText}>&emsp;&emsp;{section.content37}</Text>
                <Text style={styles.contentText}>&emsp;&emsp;{section.content38}</Text>
                <Text style={styles.contentText}>&emsp;&emsp;{section.content39}</Text>
                <Text style={styles.contentText}>&emsp;&emsp;{section.content40}</Text>
                <Text style={styles.contentText}>&emsp;&emsp;{section.content41}</Text>
            </View>
        );
    };

    _updateSections = activeSections => {
        this.setState({ activeSections });
    };
    render() {
        return (
            <ScrollView>
                <View style={{ justifyContent: 'center', flex: 1, alignItems: 'center', marginBottom: 20 }}>
                    <View style={{ width: '95%', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16, fontWeight: 'bold' }}>一、单项选择题：1～16 小题，每小题 1 分，共 16 分。下列每题给出的四个选项中，只有一个选项是符合题目要求的。</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. 中国工程院院士袁隆平曾结合自己的科研经历，语重心长地对年轻人说："书本知识非常重要，电脑技术也很重要，但是书本电脑里面种不出水稻来，只有在田里才能种出水稻来。"这表明{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.实践是人类知识的基础和来源{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.实践水平的提高有赖于认识水平的提高{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.理论对实践的指导作用没有正确与错误之分{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.由实践到认识的第一次飞跃比认识到实践的第二次飞跃更重要</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. 社会存在决定社会意识，社会意识是社会存在的反。社会意识具有相对独立性，即它在反映社会存在的同时，还有自己特有的发展形式和规律。社会意识相对独立性最突出的表现是{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.社会意识与社会存在发展的不完全同步性{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.社会意识内部各种形式之间的相互作用和影响{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.社会意识各种形式各自有其历史继承性{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.社会意识对社会存在具有能动的反作用</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. 第二次世界大战以后，资本主义国家经历了第三次科技革命，机器大工业发展到自动化阶段。智能化工厂创造出了较高的生产率，显露出巨大的竞争力，企业在"机器换人"中取得了一定的经济效益。这意味着率先使用机器人的个别企业{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.资本技术构成的提高{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.剩余价值来源的改变{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.所生产商品价值的提高{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.获得更多的社会平均利润</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4. 马克思主义政党是科学社会主义与工人运动相结合的产物，是工人阶级的先锋队。这表明{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.马克思主义政党即工人阶级本身{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.马克思主义政党以工人阶级为基础{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.马克思主义政党的阶级性是其先进性的根本前提{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.马克思主义政党的先进性决定了工人阶级的先进性</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5. 新中国的工业化是在苏联的影响下起步的。走中国工业化道路，是中国共产党初步探索我国社会主义建议道路的一个重要思想。当时所讲的工业化道路问题，主要是指{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.中央和地方的关系问题{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.经济建设和国防建设的关系问题{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.沿海工业和内地工业的关系问题{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.重工业、轻工业和农业的发展关系问题</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6. 党的十三大召开前夕，邓小平强调指出："社会主义本身是共产主义的初级阶段，而我们中国又处在社会主义的初级阶段，就是不发达的阶段，一切都要从这个实际出发，根据这个实际来制定规划。"这一论述{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.首次提出了社会主义初级阶段概念{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.首次系统阐述了社会主义初级阶段理论{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.首次把社会主义初级阶段作为亊关全局的基本国情加以把握{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.首次对社会主义发展阶段进行了划分</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7. 城镇化是现代化的必由之路，解决好人的问题是推进城镇化的关键，当前，我国实现城镇化的首要任务是{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.推进农业转移人口市民化{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.使土地的城镇优先于人口的城镇化{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.促进农村劳动力向非农产业的转移{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.实现"人的无差别发展"</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8. 1997年7月1日，中国政府对香港恢复行使主权，香港特别行政区成立。香港特别行政区基本法开始实施。香港进入了"一国两制"、"港人治港"、高度自治的历史新纪元。香港特别行政区的高度自治权是{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.特别行政区的完全自治权{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.中央授权之外的剩余权力{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.特别行政区本身固有的权力{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.中央授予的地方亊务管理权</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9. 近代中国，一些爱国人士提出过工业救国、教育救国、科学救国等主张，并为此进行过努力，但这些主张并不能从根本上给濒临危亡的中国指明正确的出路，这是因为他们没有认识到{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.争取民族独立和人民解放是实现民族复兴的前提{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.中国已经被卷入世界资本主义经济体系和世界市场中{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.中国是一个经济政治发展不平衡的国家{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.资本主义制度已经过时</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10. 毛泽东在谈到辛亥革命时指出，辛亥革命有它胜利的地方，也有它失败的地方，"辛亥革命把皇帝赶跑，这不是胜利了吗？说它失败，是说辛亥革命只把一个皇帝赶跑。"毛泽东这里所说的"只把一个皇帝赶跑"是指{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.没有推翻帝制{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.反帝反封建的革命任务没有完成{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.孙中山没有继续革命{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.袁世凯窃夺了胜利果实</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11. 1914年至1918年的第一次世界大战，是一场空前残酷的大屠杀。它改变了世界政治的格局，也改变了各帝国主义国家在中国的利益格局，对中国产生了巨大的影响。大战使中国的先进分子{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.对中国传统文化产生怀疑{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.对西方资产阶级民主主义产生怀疑{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.认识到工人阶级的重要作用{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.认识到必须优先改造国民性</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;12. 1929年12月下旬，红四军党的第九次代表大会在福建上杭县古田村召开，会议总结了红军创立以来的经验，通过了著名的古田会议决议。决议的中心思想是{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.中国共产党必须服从共产国际的领导{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.武装斗争是中国革命的主要形式{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.在农村根据地广泛开展土地革命{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.用无产阶级思想进行军队和党的建设</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;13. 习近平在欧美同学会成立100周年庆祝大会上的讲话中说："希望广大留学人员继承和发扬留学报国的光荣传统，做爱国主义的坚守着和传播者，秉持‘先天下之忧而忧，后天下之乐而乐’的人生理想，始终把国家富强，民族振兴，人民幸福作为努力志向，自居使个人成功的果实结在爱国主义这棵常青树上。"个人成功的果实之所以应该结在爱国主义这棵常青树上，是因为爱国主义是{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.个人实现人生价值的力量源泉{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.个人实现人生价值的直接条件{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.个人成功的根本保障{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.个人成功的决定性因素</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;14. 钱学森曾经说过："我作为一名中国的科技工作者，活着的目的就是为人民服务，如果人民最后对我的医生所作的工作表示满意的话，那才是最高的奖赏。"这说明评价人生价值的根本尺度是{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.个体在社会中的地位{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.个体在社会中的影响{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.个体对社会和他人的生存和发展的贡献{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.个体从社会获得的满足程度</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;15. 2014年4月15日，中共中央党总书记、中央国家安全委员会主席习近平主持召开中央国家安全委员会第一次会议并发表重要讲话，他强调，全面传统安全威胁与非传统安全威胁交织的局面，要准确把握国家安全形势变化新特点新趋势，坚持{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.共同安全观{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.亚洲安全观{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.总体国家安全观{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.地区集体安全观</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;16. 近年来，中东地区局势持续动荡，恐怖主义、分离主义愈加猖獗，教派矛盾不断升级。尤其是极端恐怖势力于2014年6月29日宣布成立"伊斯兰国"（ISIS），并宣称将建立地跨西亚北非的"哈里发帝国"，对该地区的秩序造成了重大冲击，并且给美国的全球战略带来了影响，这种影响表现为美国{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A."中东收缩"战略提上议程{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B."和平演发"战略归于失败{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C."北约东扩"战略被迫搁置{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D."重返亚太"战略受到牵制16</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16, fontWeight: 'bold' }}>二、多项选择题：17～33题，每小题2分，共34分。下列每题给出的四个选项中，至少有两个选项是符合题目要求的。</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;17. 母质、气候、生物、地形、时间是土壤形成的五大关键成土因素。母质是土壤形成的物质基础和初始无机养分的最初来源。气候导致矿物的风化和合成、有机质的形成和积累、土壤中物质的迁移、分解和合成。生物包括植物、动物和微生物等，是促进土壤发生发展最活跃的因素。地形可以使物质在地表迚行再分配，使土壤及母质在接受光、热、水等条件方面发生差异。时间是阐明土壤形成发展的历史动态过程，母质、气候、生物和地形等对成土过程的作用随着时间延续而加强。土壤生成过程说明{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.亊物总是作为过程而存在{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.时间是物质运动的存在形式{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.亊物的发展总是呈现出线性上升的态势{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.亊物的产生总是多种因素相互作用的结果</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;18. 平衡是事物发展的一种状态，小到体操中人在平衡木上的行走，杂技中的骑车走钢丝、独轮车表演，直升机在空中的悬停等，大到人类的生存、地球的运转、天体的运行等等，都是保持平衡的一种状态。世间的万事万物，之所以能不停地运动、发展、前进，一个重要原因就在于保持了平衡。要使"平衡"成为人们的"大智慧"，就要{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.精确把握亊物的度{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.准确掌握辩证否定的方式和方向{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.善于协调亊物内部各种因素的相互关系{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.全面理解绝对运动和相对静止的辩证关系</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;19. 马克思主义从必然性与偶然性的辩证统一中理解杰出人物的历史作用，认为{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.杰出人物能修改历史发展的基本方向{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.杰出人物的历史作用受到一定历史条件的制约{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.杰出人物历史作用的形成和发挥与其顺应人民群众的意愿密不可分{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.杰出人物会因其智慧、性格因素对社会进程发生影响</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;20. 马克思指出："资本主义积累不断地并且同它的能力和规模化成比例地生产出相对的，即超过资本增殖的平均需要的，因而是过剩的或追加的工人人口。""过剩的工人人口是积累或资本主义基础上的财富发展的必然产物，但是这种过剩人口反过来又成为资本主义积累的杠杆，甚至成为资本主义生产方式存在的一个条件。"上述论断表明{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.资本主义生产周期性特征需要有相对过剩的人口规律与之相适应{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.资本主义社会过剩人口之所以是相对的，是因为它不为资本价值增殖所需要{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.资本主义积累必然导致工人人口的供给相对于资本的需要而过剩{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.资本主义积累使得资本主义社会的人口失业规模呈现越来越大的趋势。</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;21. 国家垄断资本主义是国家政权和私人垄断资本融合在一起的垄断资本主义。第二次世界大战结束以来，在国家垄断资本主义获得充分发展的同时，资本主义国家通过宏观调节和微观规制对生产、流通、分配和消费各个环节的干预也更加深入。其中，微观规制的类型主要有{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.社会经济规制{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.公共亊业规制{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.公众生活规制{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.反托拉斯法</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;22. 2014年5月22日，习近平在上海召开的外国专家座谈会上指出，"要实行更加开放的人才政策，不唯地域地引进人才，不求所有开发人才，不拘一格用好人才。"当前，我们之所以比历史上任何时期都更加强调重视人才，用好人才，是因为人才是{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.第一资源和国家战略资源{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.先进生产力的集中体现{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.国家竞争力的重要体现{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.推进中国特色社会主义亊业的关键因素</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;23. 到2012年底，我国仍在耕地上从事农业生产经营的农民家庭约1.9亿户，所经营的耕地面积占农村家庭承包耕地面积的92.5%；仍实行由集体统一经营的村、组约有2000个；已发展起农民专业合作社68.9万个，入社成员5300多万户；各类农业产业化经营组织30余万个，带动的农户约1.18亿户；约有2556万亩耕地由企业租赁经营。上述现象表明在我国农村{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.家庭承包经营仍然是最基本的经营形势{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.土地的集体所有权性质已经发生变化{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.农业经营主体呈现多样化趋势{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.土地经营权的流转使农民失去了对土地的承包权</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;24. 与十一届全国人民代表大会相比，十二届人代会在代表结构与组成上，呈现"两升一降"的变化，来自一线的工人、农民代表401名，占代表总数的13.42%，提高了5.18个百分点；专业技术人员代表610名，占代表总数的20.42%，提高了1.2个百分点；党政领导干部代表1042名，占代表总数的34.88%，降低了6.93个百分点。提高基层人大代表特别是一线工人，农民，知识分子代表比例，降低党政领导干部代表比例，有利于{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.推动人民群众最关心最直接最现实问题的解决{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.调动基层群众参政议政的积极性与主动性{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.保证人民群众直接参加国家管理{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.更为充分地发挥全国人大的民意反映与监督职能</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;25. 国家统计局发布的最新数据显示，2014年前三季度我国GDP增长为7.4%，其中第三季度增长为7.3%，创下了2009年一季度以来的新低。总体上看，虽然经济增速有所减缓，但国民经济继续运行在合理区间，稳重有进的态势没有变，今后一个时段经济保持平稳较快发展的可能性仍比较大。这是一种趋势性的变化，是经济到了新的发展阶段表现出来的一种新常态。我国经济新常态的主要特点是{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.经济结构不断优化升级{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.中国经济对世界市场的需求减弱{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.经济发展动力从要素驱动、投资驱动转向创新驱动{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.经济增长速度从高速增长转为中速增长</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;26. 人类社会发展的历史表明，对一个民族、一个国家来说，最持久、最深层次的力量是全社会共同认可的核心价值观。面对世界范围思想文化交流交融交锋形势下价值观较量的新态势，面对改革开放和发展社会主义市场经济条件下思想意识多元多样多变的新特点，积极培育和践行社会主义核心价值观，有利于{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.巩固马克思主义在意识形态领域的指导地位{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.巩固全党全国人民团结奋斗的共同思想基础{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.聚集实现中华民族伟大复兴中国梦的强大正能量{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.促进人的全面发展和引领社会全面进步</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;27. 甲午，对中国人民和中华民族具有特殊含义，在我国近代史上也具有特殊含义。1894年7月，日本发动甲午战争，清朝在战争中战败。这场战争对中国的影响主要有{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.中国海关的行政权落入外国人手中{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.中国人开始有了普遍的民族意识觉醒{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.台湾被日本侵占{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.帝国主义列强掀起瓜分中国的狂潮</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;28. 1946年1月10日，政治协商会议在重庆开幕，出席会议的有国民党，共产党，民主同盟，青年党和无党派人士的代表38人。会议通过了宪法草案，政府组织案，国民大全案，和平建国纲领，军事问题案五项协议。按照协议规定建立的政治体制相当于英国、法国的议会制和内阁制，不是新民主义性质的而且国民党在政府中占着明显的优势。对政协的上述协议，共产党赞同并决心严格履行，这是因为它有利于{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.推进民主政治的发展和进步{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.打破国民党一党独裁的局面{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.改变国共两党军事力量对比{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.保障解放区政权的合法地位</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;29. 1976年，针对当时存在的是否还要坚持毛泽东思想的问题，邓小平指出："有些同志说，我们只拥护‘正确的毛泽东思想’，而不拥护‘错误的毛泽东思想’。这种说法也是错误的。""这种说法"之所以错误，是因为{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.没有把毛泽东思想与毛泽东的思想区分开来{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.没有把毛泽东思想与有中国特色的社会主义理论区分开来{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.没有把毛泽东晚年的错误与毛泽东思想的科学体系区分开来{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.没有把毛泽东与党的其他领导人对毛泽东思想的贡献区分开来</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;30. 个人品德是通过社会道德教育和个人自觉的道德修养所形成的稳定的心理状态和行为习惯。它是个体对某种道德要求认同和践履的结果，集中体现了道德认知、道德情感、道德意志和道德行为的内在统一。这表明个人品德是{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.在实践活动锤炼而成的特殊品质{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.在实践活动表现出来的行为的稳定倾向{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.偶然的、短暂的道德行为现象{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.个人行为的统一整体及知、情、意、行的综合体现</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;31. 1763年，老威廉·皮特在《论英国人个人居家安全的权利》的演讲中说："即使最穷的人，他在小屋里也能够对抗国王的权威。屋子可能很破旧，屋顶可能摇摇欲坠；风可以吹进这所房子，雨可以淋进这所房子，但是国王不能踏进这所房子，他的千军万马也不敢跨过这件破房子的门槛。"这段话后来被浓缩成"风能进，雨能进，国王不能进"。这凸显了权力和权利的关系是{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.权力应当以权利为界限{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.权力决定权利{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.权力必须受到权利的制约{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.权力优先于权利</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;32. 2014年2月27日，十二届全国人大常委会第七次会议通过决定，将9月3日确定为中国人民抗日战争胜利纪念日，将12月13日确定为南京大屠杀死难者国家公祭日，设立这两个纪念日{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.彰显了中国作为反法西斯主要战场的伟大发明{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.是对抗击日本帝国主义侵略付出巨大牺牲和作出巨大贡献的人们的敬重和缅怀{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.是对南京大屠杀中大量死难同胞的告慰和尊重{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.有助于向中国人民和世界各国人民传播历史亊实的真相</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;33. 2014年11月5日至11日，亚太经济合作组织（APEC）第二十二次领导人非正式会议在北京召开，这是一次开创性的历史盛会，硕果累累，其中，《北京反腐败宣言》的通过尤为引人注目，该《宣言》通过的意义在于，各成员国{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.杜绝了跨国腐败行为的发生{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.将形成携手打击跨境腐败的网络{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.达成了就追逃、追赃开展执法合作的重要共识{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.加强了涉腐、涉案赃款跨境流动的信息共享</Text>

                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16, fontWeight: 'bold' }}>三、分析题：34～38小题，每小题10分，共50分。要求结合所学知识分析材料并回答问题。</Text>
                        <View>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;34.结合材料回答问题：</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;材料1：</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2014年11月19日，首届世界互联网大会在浙江乌镇召开，习近平总书记在致大会的贺词中指出，互联网真正让世界变成了地球村，让国际社会越来越成为你中有我、我中有你的命运共同体、李克强总理20日下午在杭州会见出席大会的中外代表并同他们座谈，他表示，互联网是人类最伟大的发明之一，改变了人类世界的空间轴、时间轴和思想维度。中国接入互联网20年来，已发展成为世界互联网大国，不仅培育起一个巨大市场，也促生了许多新技术、新产品、新业态、新模式，创造了上千万就业岗位，很多人特别是年轻人，大学生因此实现了事业梦，人生梦。
                                {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;目前，全世界网民数量达到了30亿人，普及率达40%，全球范围内实现了网络互联、信息互通。即使是世界上最偏僻的一角，只要接入互联网，就接入了人类这个大家庭。同住地球村的"居民"，借助互联网的力量极大的拉近了距离，互联经济已经成为世界经济发展速度最快、潜力最大、合作最活跃的领域之一，形成了世界网络大市场；一个短小的视频通过全世界网民的点击，可以一夜之间成为全球流行文化的宠儿；提供高速的移动通信和无线宽带服务，几乎已是各国旅游"设施"的标配。
        　                      {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;当然，互联网发展过程中也产生了一系列问题，如网络信息安全、网络犯罪等，甚至对国家主权、安全、发展利益形成了新的挑战。互联网到底是阿里巴巴的宝库，还是潘多拉的魔盒？这取决于"命运共同体"如何认真应对，谋求共治。从这样的视野来看，已走过20年岁月的中国互联网，站在了大有可为的新起点上。
                            </Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>摘编自《人民日报》（2014年11月21日）</Text>

                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;材料2：</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;中国互联网从1994年全功能接入国际互联网至今，实现了20年的高速发展，不仅在技术层面一再突破，而且带来了新的思维理念，有人把它概括为"互联网思维"。对何谓"互联网思维"目前还没有定论。然而，打破思维定势，主动革新自我是互联网思维不变的主题，意味着"便捷、互动、用户至上"等理念。这些理念让人们不断感受到互联网带来的变化与变革。
                                {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果把沃尔玛等传统龙头企业比多大象，那么互联网上的小商户只能叫蚂蚁。数百万只蚂蚁聚合起来，吃掉大象并非没有可能。试想，如果没有互联网，任何一家传统商业企业要想把数百万个商家和近亿客户装进来是不可想象的。
                                {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;既然去中心的互联网更有利于"蚂蚁"生存，"大象"要彻底摆脱危机，可能就要让自己某种程度上也变成"蚂蚁"，至少自身要具备"蚂蚁"的特性。道理很简单，在互联网环境下与灵活的"蚂蚁军团"作战，庞大的体量以及传统组织形式带来的大企业病，很可能让"大象"的优势转变为劣势。只有彻底改变基因，让"大象"内部产生无数个热衷创业的"蚂蚁"，这仗才有的打，毕竟，和蚂蚁打仗，大象有力用不上，但更庞大、更强大的蚁群则成为最后的胜者。
                            </Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>摘编自《人民日报》（2014年5月5日、5月26日等）</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;(1)联系自身实际，分析为什么"互联网到底是阿里巴巴的宝库，还是潘多拉的魔盒"取决于互联网的"命运共同体"？（5分）</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;(2)怎样以辩证的思维方式认识与处理"蚂蚁"与"大象"的关系？（5分）</Text>
                        </View>
                        <View>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;35.结合材料回答问题：</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;让大猫小猫都有路走</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Text>

                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;材料2：</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;计划经济时期全靠国家管理市场，市场边角被忽略，很多小商品没人去生产，有些新的市场需求也没人去注意。非公有制经济的特点是只要市场有需求，它就会去满足。要保证各种所有制经济依法平等使用生产要素，公平参与市场竞争，同等收到法律保护，就需要重视中小企业融资难的问题，经济学家成思危讲过这样一则寓言：著名科学家牛顿养了两只猫。一只大猫一只小猫。他在墙上开了两个洞，一个大洞。一个小洞，有人笑话他说，你还是大科学家呢，开一个洞就够了，小猫也可以走大洞嘛。牛顿说不对，如果两个猫同时要出去，那大洞肯定被大猫占住了，小猫就无路可走。要真正解决小微企业的问题，就要建立真正为小微企业服务的小型银行，让大银行服务大企业，小银行服务小企业。因为从商业角度说，大银行本身就嫌平爱富，嫌小爱大。小微企业市场风险很大，交易成本也高。跟大企业签一个1亿元的合同，相当于跟小企业签20个500万的合同。现在居民和企业手中有大量存款，而小微企业却贷不到款。这就需要一条通道，这条通道就是社区银行等中小银行。发展民营的、小型的金融机构有利于解决好小微企业的融资困难。大企业是我国经济的脊梁，小微企业是血肉。没有大企业国民经济站不起来，但是如果小微企业垮了，那国民经济不成了骨头架子了吗？十八届三中全会以来，国务院陆续出台了关于大力扶持小微企业健康发展的多项政策，国务院常务会议也多次强调要加快发展民营银行等中小金融机构，为小微企业减负添力。2014年11月，李克强总理在浙江考察时再次对民营银行长期致力于服务小微企业给与了充分肯定。为小微企业打开直接融资大门，是开创性的制度安排。一大批有巨大市场潜力的小微企业将会成长为支撑中国经济转型升级的参天大树。
                            </Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>摘编自光明网(2013年11月15日)、新华网（2014年11月21日）</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(1)现阶段我国发展社会主义市场经济为什么应坚持"让大猫小猫都有路走"？（6分）</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(2)如何更好地发挥非公有制经济在经济发展中的作用？（4分）</Text>
                        </View>
{/* 36 */}
                        <View>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;36.结合材料回答问题：</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1925年郭沫若在一篇文章中讲述了这样一个故事：</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;十月十五日丁祭过后的第二天，孔子和他的得意门生颜回、子路、子贡三位在上海的文庙里吃着冷肉的时候，有四位年轻的大班抬了一乘朱红漆的四轿，一直闯进庙来，里面走出一位脸如螃蟹，胡须满腮的西洋人来，原来这位胡子螃蟹脸就是马克思。
                                {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;孔子一见来的是马克思，他便禁不得惊喜着叫出：啊啊，有朋自远方来，不亦乐乎呀！你来到敝庙来，有什么见教呢？
        　                      {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;马克思说：我是特为领教而来，我们的主义已经传到你们中国，我希望在你们中国能够实现，但是近来有些人说，我的主义和你的思想不同，所以在你的思想普遍着的中国，我的主义是没有实现的可能性，因此我便来直接领教你：究竟你的思想是怎么样？和我的主义怎样不同？
        　                      {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;孔子说：难得你今天亲自到了我这里来，太匆促了，不好请你演讲，至少请你作一番谈话罢。你的理想的世界是怎样的呢？
        　                      {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;马克思说：我的理想的世界，是我们生存在这里面，万人要能和一人一样自由平等地发展他们的才能，人人都各能尽力做事而不望报酬，人人都各能得生活的保障而无饥寒的忧虑，这就是我所谓"各尽所能，各取所需"的共产社会。
        　                      {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;孔子说：你这个理想社会和我的大同世界竟是不谋而合，你请让我背一段我的旧文章给你听罢。"大道之行也，天下为公，选贤与能，讲信修睦；故人不独亲其亲，不独子其子，使老有所终，壮有所用，幼有所长，矜寡孤独废疾者皆有所养，男有分，女有归；货恶其弃于地也不必藏于己；力恶其不出于身也不必为己；是故谋闭而不兴，盗窃乱贼而不作，故外户而不闭，是谓大同"，这不是和你的理想完全一致的吗？
        　                      {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;马克思说我的理想和有些空想家不同，我的理想不是虚构出来的，也并不是一步可以跳到的。我们先从历史上证明社会的产业有逐渐增值之可能，其次是逐渐增值的财产逐渐集中于少数人之手中，于是使社会生出贫乏病来，社会上的争斗便永无宁日。
        　                      {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;孔子说：我从前也早就说过"不患寡而患不均，不患贫而患不安"的呀！
        　                      {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;孔子的话还没有十分钟落脚，马克思早反对起来了：不对，不对！你和我的见解终竟是两样，我是患寡且患不均，患贫且患不安的，你要晓得，寡了便不均起来，贫了便是不安的根本。所以我对于私产的集中虽是反对，对于产业的增值却不惟不敢反对，而且还极力提倡，所以我们一方面用莫大的力量去剥夺私人的财产，而同时也要以莫大的力量来增值社会的产业。
        　                      {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;孔子说：尊重物质本是我们中国的传统思想，洪范八政食货为先，管子也说过"仓源实而知礼节，衣食足而知荣辱"，我的思想乃至我国的传统思想，根本和你一样，总要先把产业提高起来，然后才来均分。
        　                      {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;马克思到此才感叹起来：我不想在两千年前，在遥远的东方，已经有了你这样的一个老同志！你我的见解完全一致的，怎么有人曾说我的思想和你的不合，和你们中国的国情不合，不能施行于中国呢？
                            </Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;(1)"马克思进文庙"的历史背景是什么？（4分）</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;(2)如何理解孔子与马克思对话中谈到的他们之间思想上的"不同"与"一致"？（6分）</Text>
                        </View>

                        <View>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;37.结合材料回答问题：</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;材料1：</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2014年10月闭幕的十八届四中全会，是党在中央全会上第一次专题讨论已发治国的问题，体现了对法治的高度重视。会议结束后，微博上的各种评论满是对法治进步的热望："想要法治的果实，就要给它阳光雨露""期待法治进入与人民互动的2.0时代""法治不仅是宏大的，也是具体的；它关乎国家治理，更关于百姓福祉"……
                                {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;《韩非子》有句名言"国无常强，无常弱。奉法者强则国强，奉法者弱则过弱"。尊奉法律，需要执政者，治理者发力，引导之，提倡之，遵守法律，需要全体公民给力，用法律来定分止争，维护之，践行之。网络上已经有人以普通人"小明"为例，演绎"四中全会与你我有啥关系"。有认识，法治于人就如同空气，你可能不会时时刻刻意识到它的存在，可一旦缺少就立刻窒息。的确，从出生到成长，从成家到立业，舞步需要法治的护航：加强对财产权的保护，完善教育、医疗、视频安全等方面的法律法规，提高环境污染的违法成本……四中全会促动"法治的春天"有着温暖人心的春意。当越来越多人在法治的护佑下感受着畅快的呼吸，法治才能成为内心时时恪守的律令。
                                {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;也不用回避中国的法治还有很多问题，从"暂行50多年"的高温条例，到保护个人信息安全等方面尚无完善法律，中国的法治进程需要紧跟时代的步伐。四中全会从立法、司法、执法、守法等方面开出来药方，但最根本的还是提升全社会对法治的信心与信任，正如党的十八届四中全会公报所说，法律的权威源自于人民内心的拥护和真诚信仰。这才是法治的力量所在，尊严所系。
                            </Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>摘自《人民日报》2014年10月24日</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;材料2：</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;法治是人类为了征服自己，由人类自己立法进行自我管理，这远比征服自然困难得多。特别是约束公权力，非有高度的觉悟，顽强的毅力和坚强的意志难以成其事。任何国家法治的确立都不是在一盘散沙的状态下随随便便建立起来的，而是必须有坚定有力的集中统一领导和部署。
                                {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;迄今为止，尚未有法治成功的国家是在群龙无首，四分五裂的状态下实现法治的。恰恰相反，就法治发达国家的经验来看，这些国家的法治之所以能够最终确立，都是自上而下，从官到民表现出对法治制作的追求，付出巨大的努力。在中国这个拥有13忆人口，情况极其复杂的大国建设法治，更需要有自上而下将强统一的领导，要有统一的意志，坚决果断一体推行。正是基于这样的情况，十八界四中全会指出，全面推进依法治国，必须坚持党的领导。
                            </Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>摘自《人民日报》2014年10月29日</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;(1)如何理解"法治关乎国家治理，更关乎百姓福祉"？（6分）</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;(2)为什么"全面推进依法治国，必须坚持党的领导"（4分）</Text>
                        </View>

                        <View>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;38.结合材料回答问题：</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;材料1：</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1960年5月27日，毛泽东与来华访问的英国元帅蒙哥马利，围绕"50年以后中国的命运"有一段深刻的对话。蒙哥马利说，我有一个有趣的问题想问下主席：中国大概需要50年，一切事情就办得差不多了。到那时候，你看中国的前途将会怎样？历史的教训是，当一个国家非常强大的时候，就倾向于侵略，是不是？要向外国侵略，就会被打回来；外国是外国人住的地方，别人不能去，没有权利也没有理由硬挤进去，如果去，就要被赶走，这是历史教训。如果我们占人家一寸土地，我们就是侵略者。
                                {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"蒙哥马利之问"折射的是一些西方人内心深处的"国强必霸"逻辑。然而，这样的逻辑与中国人千百年来的民族心理完全不在一个"频道"上。正如习近平所说，"中华民族的血液中没有侵略他人，称霸世界的基因。"
                                {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;600多年前，郑和受命出使西洋，足迹遍布30多个国家和地区。明朝初期的中国，是综合国力位居世界前列的强国。但是，与地理大发现时期欧洲国家的殖民政策不同。郑和船队始终奉行"共享太平之福"的宗旨，尊重当地习惯，平等开展多边贸易，把中国的建筑、绘画、雕刻、服饰等领域的精湛技术带入亚非国家，促进了中外文化的双向交流和共同进步。郑和下西洋的"和平之旅"永载史册。
        　                      {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;明朝洪武年间，缅甸与百夷(今缅甸北部)交战，明太祖未发一兵，派李思聪、钱古训二人劝和。二人先奉劝缅甸"两国之民居处虽分，惟存关市之讥。是其和也，其或纷争不已，天将昭鉴福善祸淫"，又告诫百夷"莫如守全，以图绵长，不亦美乎"。双方均为道义所感悟，最终罢战息兵。
        　                      {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;孙中山先生曾在日本演说，"东方的文化是王道，主张仁义道德，西方的文化是霸道，主张功利强权。讲仁义道德，是由正义公理来感化人，讲功利强权，是用洋枪大炮来压迫人。"近代中国遭受列强欺凌，无数仁人志士高喊"落后就要挨打""振兴中华"，但只是为了获得免于被欺凌的自由，为了以平等的姿态屹立于世界民族之林。正如"和平学之父"约翰·加尔通所说，有些人总希望有一个暴力选择，但中国以自己特有的视角来观察现实，阴阳平衡、尊重智慧、众生平等理念被视为理所当然，和平关系的普遍原则以相互合作、平等互利为起点。
        　                      {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;拿破仑说，中国是一头沉睡的狮子，当这头睡狮醒来时，世界都会为之发抖。今年3月，习近平同志在法国巴黎向世界宣示，中国这头狮子已经醒了，但这是一只和平的、可亲的、文明的狮子。读懂了"和"文化是中国人千百年来流淌的血脉，就感受到了走向世界的中国那种无法改变的"和"的气度与内质。
                            </Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>摘编自《人民日报》（2010年12月22日，2014年5月20日）</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;(1)毛泽东和蒙哥马利的"对话"反映了什么？（4分）</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;(2)如何理解习近平所说"中国这头狮子已经醒了，但这是一只和平的、可亲的、文明的狮子"？（6分）</Text>
                        </View>

                        <Accordion
                            sections={this.state.todo}
                            activeSections={this.state.activeSections}
                            renderHeader={this._renderHeader}
                            renderContent={this._renderContent}
                            onChange={this._updateSections}
                        />

                    </View>
                </View>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    header: {
        width: '20%',
        height: 50 * s,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10 * s,
        marginLeft:'40%',
        marginBottom:20*s,
        marginTop:10
    },
    headerText: {
        fontSize: 20
    },
    content: {
        backgroundColor: '#ffffff',
        padding: 10 * s
    },
    contentText: {
        fontSize: 16
    }
})
