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
                content2: '1. 【答案解析】本题正确选项为 C 选项，',
                content3: '2. 【答案解析】本题正确选项为 C 选项，',
                content4: '3. 【答案解析】本题正确选项为 A 选项，',
                content5: '4. 【答案解析】本题正确选项为 B 选项。',
                content6: '5. 【答案解析】本题正确选项为 D 选项，',
                content7: '6. 【答案解析】本题正确选项为 A 选项，',
                content8: '7. 【答案解析】本题正确选项为 B 选项，',
                content9: '8. 【答案解析】本题正确选项为 A 选项，',
                content10: '9. 【答案解析】本题正确选项为 D 选项，',
                content11: '10. 【答案解析】本题正确选项为 D 选项，',
                content12: '11. 【答案解析】本题的确选项为 B 选项，',
                content13: '12. 【答案解析】本题正确选项为 C 选项，',
                content14: '13. 【答案解析】本题正确选项为 B 选项，',
                content15: '14. 【答案解析】本题正确选项为 C 选项，',
                content16: '15. 【答案解析】本题正确选项为 C 选项，',
                content17: '16. 【答案解析】本题正确选项为 D 选项，',
                content18: '二、多项选择题：',
                content19: '17. 【答案解析】本题正确选项为 ACD 选项，',
                content20: '18. 【答案解析】本题正确选项为 ABD 选项，',
                content21: '19. 【答案解析】本题正确选项为 CD 选项，',
                content22: '20. 【答案解析】本题正确选项为 ABD 选项，',
                content23: '21. 【答案解析】本题正确选项为 ABCD 选项，',
                content24: '22. 【答案解析】本题正确选项为 BCD 选项，，',
                content25: '23. 【答案解析】本题正确选项为 ABCD 选项，',
                content26: '24. 【答案解析】本题正确选项为 BCD 选项，',
                content27: '25. 【答案解析】本题正确选项为 ACD 选项，',
                content28: '26. 【答案解析】本题的正确选项为 ABCD 选项，',
                content29: '27. 【答案解析】本题正确选项为 ACD 选项，',
                content30: '28. 【答案解析】本题的正确选项为 ABC 选项，',
                content31: '29. 【答案解析】本题的正确选项为 ACD 选项，',
                content32: '30. 【答案解析】本题的正确选项为 ABD 选项，',
                content33: '31. 【答案解析】本题的正确选项为 BCD 选项，',
                content34: '32. 【答案解析】本题的正确选项为 BCD 选项，',
                content35: '33. 【答案解析】本题的正确选项为 CD 选项，',
                content36: '三、分析题：',
                content37: '34. 【参考答案】'
                　　+'(1)同一性和斗争性是矛盾的两种基本属性，矛盾的同一性强调矛盾的对立面之间是可以相互转化的。“用孩子的眼睛看世界”和“设计前把自己想象成本人”这两个实例中，都是换位思考，从对方去考虑问题，体现的正是矛盾的对立面之间转化的原理。'
                　　+'实践是认识的基础、来源，认识反过来能够指导实践。认识世界一定要从实际出发，从实践中得来认识，然后再用认识去指导实践，改造世界。“设计前把自己想象成本人”，强调的是认识一定要从实际出发，从实践中来。材料中的研究生之所以能够在三天时间内就完成设计，就是由于她对实际生活的观察。然后用观察中得来的认识去指导她的设计。'
                　　+'(2)“用自己的设计改变生活，让生活更美好”说明实践和认识是相互作用的，认识特别是反映事物本质和规律性的理性认识，对实践具有能动的反作用。认识对实践的能动反作用，充分体现在作为认识的高级形式的理论对实践的巨大指导作用上。“用自己的设计改变生活”，体现的是认识对实践的反作用，认识能够指导人们的实践活动，从而改变世界。'
                　　+'人类的实践和认识是永无止境的过程，要求我们不断地解放思想，与时俱进，在实践的基础上不断创新。只有创新，才能使我们的思想和理论随着实际的变化而变化，随着时代的发展而发展，用发展着的理论指导新的实践，真正实现主观与客观、理论与实践的具体的历史的统一。实践是不断发展变化的，要求我们能够不断调整自身的认识，从实际出发，去认识世界和改造世界。“用自己的设计改变生活”正是体现了认识过程中要注重实际，重视创新，去发现问题，解决问题。'
                　　,
                content38: '35. 【参考答案】'
                　　+'(1)完善制约和监督机制，保证人民赋予的权力始终用来为人民谋利益。确保权力正确行使，必须让权力在阳光下运行，必须完善制约和监督机制。'
                　　+'材料中，浙江武义县后陈村通过成立村务监督委员会使得本村的创收逐年增加，并在全国推行，取得了良好效果。所以，我国农村应全面通过制度创新来保障权利在阳光下运行。要保障权力在阳光下运行，应采取如下措施：'
                　　+'第一，坚持用制度管权管事管人，保障人民知情权、参与权、表达权、监督权，是权力正确运行的重要保证。'
                　　+'第二，要确保决策权、执行权、监督权既相互制约又相互协调，确保国家机关按照法定权限和程序行使权力。'
                　　+'第三，坚持科学决策、民主决策、依法决策，健全决策机制和程序，建立决策问责和纠错制度。凡是涉及群众切身利益的决策都要充分听取群众意见，凡是损害群众利益的做法都要坚决防止和纠正。'
                　　+'第四，推进权力运行公开化、规范化，完善党务公开、政务公开、司法公开和各领域办事公开制度，健全质询、问责、经济责任审计、引咎辞职、罢免等制度，加强党内监督、民主监督、法律监督、舆论监督，让人民监督权力，让权力在阳光下运行。'
                　　+'(2)浙江武义县后陈村通过成立的全国第一个村务监督委员会，对我国建立乡村“阳光权力体系”共建和谐社会带来重要启迪，村务监督委员会这一制度创新已被写进《中华人民共和国村民委员会组织法》并在全国推行。这说明需要我国健全基层党组织领导的充满活力的基层群众自治机制，以扩大有序参与、推进信息公开、加强议事协商、强化权力监督为重点，拓宽范围和途径，丰富内容和形式，保障人民享有更多更切实的民主权利。全心全意依靠工人阶级，健全以职工代表大会为基本形式的企事业单位民主管理制度，保障职工参与管理和监督的民主权利。发挥基层各类组织协同作用，实现政府管理和基层民主有机结合。',
                content39: '36. 【参考答案】'
                    +'(1)鸦片战争后，中国逐步沦为半殖民地半封建社会，争取民族独立、人民解放，实现国家富强、人民解放，成为中国人民必须完成的历史任务。为改变中华民族的命运，中国人民和无数仁人志士进行了千辛万苦的探索和不屈不挠的斗争。太平天国运动，戊戌变法和辛亥革命，不甘屈服的中国人民进行了一次次抗争，都是为了实现中华民族的伟大复兴。'
                　　+'(2)为了实现中华民族伟大复兴，无数仁人志士奋起抗争，但一次又一次地失败了。中国共产党成立后，领导中国人民完成和推进了三件大事。第一件大事，我们党紧紧依靠人民完成了新民主主义革命，实现了民族独立、人民解放。第二件大事，我们党紧紧依靠人民完成了社会主义革命，确立了社会主义基本制度。第三件大事，我们党紧紧依靠人民进行了改革开放新的伟大革命，开创、坚持、发展中国特色社会主义。'
                　　+'这三件大事，从根本上改变了中国人民和中华民族的前途命运。贫穷落后的中国变成了一个初步繁荣昌盛，充满生机和活力的社会主义国家。面向新世纪，在中国共产党的领导下，继续坚定不移地沿着中国特色社会主义道路前进，中华民族伟大复兴的目标必将最终实现。'
                　　,
                content40: '37. 【参考答案】'
                    +'(1)自由平等观念和权利义务观念是社会主义法治观念的重要观念，自由平等观念最为核心的内容是依法享有和行使自由的观念、法律面前人人平等的观念。法律权利意味着人们可以依法作或不作一定行为，可以依法要求他人作或不作一定行为。法律通过规定权利，使人们获得某种合法的利益或自由。'
                　　+'平等权是指公民平等地享有权利，不受任何差别对待，要求国家给予同等保护的权利。它是我国宪法赋予公民的一项基本权利，是公民实现其他权利的前提与基础。我国《宪法》规定：“中华人民共和国公民在法律面前一律平等。”'
                　　+'图书馆向所有读者免费开放，体现了自由平等观念，图书馆馆长的回答“我无权拒绝他们入内阅读，但你有权选择离开”，因为每个读者都是平等的，每个读者都平等地享有权利，不受任何差别对待，有要求国家给予同等保护的权利，读者进入和离开图书馆都是其神圣的不可侵犯的权利。'
                　　+'(2)个人与他人的关系，在本质上是社会关系的表现形式，促进个人与他人的和谐应坚持以下原则：'
                　　+'第一，平等原则，平等待人是促进个人与他人和谐的前提。 第二，诚信原则，诚信是促进个人与他人和谐的保证。第三，宽容原则宽容是促进个人与他人和谐必不可少的条件。第四，互助原则，互助是促进个人与他人和谐的必然要求。'
                    +'图书馆向乞丐和拾荒者免费开放给我们的启示是：要平等的对待每一个人， 对人要诚信、宽容、互助，只有这样才能建立和谐的人际关系。',
                content41: '38. 【参考答案】'
                    +'(1)第一，导致美国全球战略重心转移的根本原因，是亚洲在崛起。第二，在亚太建立美国控制的“北约版”组织，以主导亚太事务。第三，应对中国崛起。第四，“重振美国”，维持霸权。'
                　　+'(2)美国战略重心东移，对我国的影响既有消极的一面，也有积极的一面。消极的一面：第一，加剧了地区的紧张局势，使得中国的地缘政治环境更加复杂化。第二，消耗中国的精力。随着美国的战略东移，原本本来集中精力搞经济建设的中国，现在在国防、外交等多个方面都遇到了一些麻烦和棘手的问题。第三，分化和削弱了中国与周边国家的关系。积极的一面：第一，加快了(亚太)区域内经济的一体化。第二，中国在面对美国的战略重心东移的过程中会产生压力，而这种压力又会促使中国来进行积极的应对，调整自身的结构，把这种压力变成动力。第三，美国要在亚太地区发挥积极作用，必然不能忽视中国，反而会进一步促使中、国之间的经贸及其他多个方面深层次的合作，这对中国来说也是一个机遇。'
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
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. 有一幅对联，上联“桔子洲，洲旁舟，舟行洲不行，”下联“天心阁，阁中鸽，鸽飞阁不飞。”这形象的说明了运动和静止是相互依存的静止是：{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.运动的衡量尺度{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.运动的内在原因{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.运动的普遍状态{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.运动的存在方式</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. 一位机械工程专家讲过这样一件事：“文革”中，他在农场劳动，有一天领导要他去割羊草，他没养过羊，怎么认得羊草呢?但脑子一转办法就来了，他把羊都赶去看羊吃什么就割什么。不到半天就割回了羊草。这位专家之所以这样做是因为他意识到“羊吃草”与“割羊草”两者之间存在：{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.必然联系{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.因果联系{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.本质联系</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. 《资本论》中有这样的表述“对上衣来说，无论是裁缝自己穿还是他的顾客穿，都是一样的”，这样只有因为无论谁穿：{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.上衣都起到着使用价值的作用{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.上衣都起到着价值的作用{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.上衣都是抽象劳动的结果{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.上衣都是社会劳动的结果</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4. 某资本家投资100万元，每次投资所得的利润是15万元，假定其预付资本的有机构成是4:1，那么该资本家每次投资所实现的剩余价值率为：{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.15%{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.75%{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.100%{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.125%</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5. 当今世界是开放的世界，中国的发展离不开世界，实行对外开放是我国的一项基本国策，坚持这一国策的基本立足点是：{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.内外联动，互惠互利{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.多放平衡，共同发展{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.相互借鉴，求同存异{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.独立自主，自力更生</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6. 公益性文化事业是保障公民基本文化权益的重要途径，大力发展公益文化事业始终坚持放到首位的是：{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.社会效益{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.经济效益{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.繁荣文化市场{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.创新文化体制</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7. 近年来为了缩小我国居民在收入分配方面的差距，党和政府做出了巨大的努力，如提高个税起证点，提高企业退休人员基本养老金，提高国家扶贫标准和城乡低保补助水平等，这些举措体现了：{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.初次分配注重效率{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.再次分配更注重公平{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.劳动报酬在初次分配中比重提高{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.各种生产要素都能按贡献参与分配</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8. 党的十八大报告提出为确保实现全面建成小康社会的宏伟目标到2020年，在实现国内生产总值比2010年翻一番的同时，还要实现翻一番的是：{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.城乡居民人均收入{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.城乡居民可支配收入{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.国民收入{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.财政收入</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9. 甲午战争后，维新运动迅速兴起，针对洋务派提出的“中体西用”的方针，维新派指出，“体”与“用”是不可分的。中学有中学的“体”与“用”，西学有西学的“体”与“用”，把中学之“体”与西学之“用”凑在一起，就如同让“牛体”产生“马用”一样荒谬。维新派与洋务派分歧的实质是{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.要不要社会革命{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.要不要以革命手段推翻清王朝{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.要不要在中国兴办近代企业{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.要不要学习西方的政治制度与思想文化</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10. 1948年10月2日，刘少奇同志在同华北记者团谈话时，讲了一个希腊神话故事：巨人安泰是地神之子，他在同对手搏斗时，只要身不离地，就能从大地母亲那里不断吸取力量，所向无敌;但是，只要他一离开大地，就会毫无力量。他的对手赫拉克勒斯发现了他的这一特征，在一次搏斗中突然把他举到半空中将他扼死。刘少奇借用这一神话故事强调中国共产党始终要{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.坚持理论联系实际{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.保持党的方针政策的正确{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.保持对敌人的高度警惕{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.保持同人民群众的血肉联系</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11. 全面提高公民道德素质，要坚持依法治国和以德治国相结合，加强社会公德，职业道德，家庭美德，个人品德教育，弘扬中华传统美德，弘扬时代新风。下列选项中，即是道德规范又是法律原则的是{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.爱岗敬业{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.诚实守信{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.助人为乐{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.勤俭持家</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;12. 我们要大力弘扬的时代精神是当代人民精神风貌的集中体现，是激发社会创造活力的强大力量。时代精神内涵十分丰富，其核心是{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.国际主义{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.集体主义{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.改革创新{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.开拓进取</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;13. 个体的人生活动不仅具有满足自我需要的价值属性，还必然包含着满足社会需要的价值属性。个人的需要能不能从社会中得到满足没，在多大程度上得到满足，取决于他的{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.社会影响{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.社会价值{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.社会地位{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.社会理想</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;14. “和为贵”是中华民族的传统美德，采用调解的方法解决纠纷，有利于社会和谐。调解可以在诉讼程序外进行，也可以在诉讼程序内进行，诉讼中调解是指{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.人民调解{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.行政调解{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.司法调解{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.仲裁调解</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;15. 2012年6月27日，中国宣布在南海地区对外开放九个海上区块，供与外国公司合作勘探开发。此外，海南省宣布将西沙群岛的四个区域划定为文化遗产保护区。这些决定联同设立三沙市构成了中国加强在南海地区维护主权的“组合行动”。中国在南海问题上的一贯主张是{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.使南海问题长期化{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.推动南海问题国际化{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.搁置争议，共同开发{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.建立“南海和平自由友谊合作区”</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;16.  2012年9月25日，第67届联合国大会一般性辩论在纽约联合国总部开幕。针对错综复杂的国际形势和此起彼伏的地区动荡及热点问题，本次辩论的主题是{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.改善全球经济治理{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.携手推动各国普遍安全与共同发展{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.增强联合国维和作用{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.以和平方式调解或解决国际争端或局势</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16, fontWeight: 'bold' }}>二、多项选择题：17～33题，每小题2分，共34分。下列每题给出的四个选项中，至少有两个选项是符合题目要求的。</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;17. 马克思主义是关于无产阶级和人类解放的科学，实现共产主义是全人类解放的根本体现。人类解放包括{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.从自然的压迫下解放出来{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.从客观规律的制约下解放出来{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.从旧的社会关系的束缚下解放出来{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.从旧的传统观念的禁锢下解放出来</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;18. 唯物史观第一次科学地解决了历史创造者的问题，认为人民群众是历史的创造者。人民群众{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.从量上说是指社会人的绝大多数{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.从质上说是社会X对社会历史发展起推动作用的人们{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.在任何历史时期都不包括剥削阶级{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.最稳定的主体部分始终是从事物质资料生产的劳动群众及其知识分子</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;19. 美国导演迈克尔·穆尔在他的最新记录片《资本主义：一个爱情故事》问世以来，一直颇受关注。“资本主义”为何与“爱情故事”联系起来呢?穆尔解释说，这是一种“贪欲之爱”，喜爱财富的人不仅爱他们自己的钱，也爱你口袋中的钱……很多人不敢说出它的名字，真见鬼，就说出来吧。这就是“资本主义”。对金钱的“贪欲”与资本主义连为一体，是因为{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.资本就是人格化的资本{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.赚钱体现了人的天然本性{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.资本的生命在于不断运动和不断增值{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.追逐剩余价值是资本主义生产方式的绝对规律</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;20. 伴随着生产力发展，科技进步及阶级关系调整，当代资本主义社会的劳资关系和分配关系发生了很大变化。其中资本家及其代理人为缓和劳资关系所采取的激励制度有{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.职工参与决策制度{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.职工终身雇佣制度{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.职工选举管理制度{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.职工持股制度</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;21. 自第一个社会主义国家建立以来，社会主义事业的发展并不是一帆风顺的，社会主义发展道路的多样性以及发展过程中的前进性和曲折性的时间告诉我们{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.坚持社会主义，不等于要坚持某种单一的社会主义模式{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.发展社会主义，不等于不认可西方资本主义的文明成果{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.改革有抛弃某种社会主义模式，不等于改掉或抛弃社会主义{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.某种社会主义模式的失败，不等于整个社会主义事业的成败</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;22. 党的十八大把科学发展观同马克思列宁主义、毛泽东思想、邓小平理论、“三个代表”重要思想一道确立为党必须长期坚持的指导思想，科学发展观是{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.中国革命、建设、改革经验的科学总结{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.中国特色社会主义理论体系的最新成果{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.中国国共产党集体智慧的结晶{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.指导党和国家全部工作的强大思想武器</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;23. 国务院新闻办公室发表的《西藏和平解放60年》白皮书指出:目前西藏共有各类宗教活动场所1700余处，僧尼约4.6万人，藏传佛教特有的活佛转世的活动方式得到充分尊重，寺庙学经、变戒、灌顶修行等传统宗教活动和寺庙学经考核晋升学位活动正常进行。每年到拉萨朝佛进香的信教群众达百万人次以上，上述事实表明，我国的宗教政策得到了充分贯彻，我国宗教政策主要有：{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.积极引导宗教与社会主义社会相适应{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.尊重和保护公民的宗教信仰自由{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.独立自主自办教会{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.依法管理宗教事务</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;24. 统筹区域发展，促进区域协调发展，是我国经济社会发展的一个重点原则，坚持这一原则有利于：{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.扩大内需，拉动经济增长{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.区域间优势互补，促进经济共同发展{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.不同区域人民共享改革发展成果{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.生产要素在区域间合理流动和配置</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;25. 1992年初，邓小平在南方谈话中指出：“社会主义的本质是，解放生产，发展生产力。消除剥削，消除两极分化，最终达到共同富裕。”这一概括对社会主义传统认识的突破主要体现在：{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.破除了脱离生产力水平抽象谈论社会主义的认识{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.否定了社会主义必须坚持公有制和按劳分配原则的认识{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.摆脱了长期以来忽视建设社会主义根本目的和目标的认识{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.制止了把社会主义本质等同于社会主义具体做法的认识</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;26. PM2.5(细粒颗粒)这个大家原本很陌生的专有名词，因为2011年10月我国多地灰霾天气造成严重大气污染而迅速成为社会热词。2012年2月修订的《环境空气质量标准》增加了PM2.5指标，该指标随后又被写入政府工作报告。这既折射出当前我国环境污染的严重性，同时也反映了党和政府治理环境污染、建设生态文明的决心。十八大提出的生态文明建设新要求是( ){'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.加大自然生态系统和环境保护力度{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.全面促进资源节约{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.优化国土空间开发格局{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D. 加强生态文明制度建设</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;27. 1925至1927年的大革命规模宏伟，内涵丰富，与辛亥革命相比较，其不同点在于{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.它广泛而深刻地发动了工农群众{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.它的主要斗争形式是武装斗争{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.它的革命对象是帝国主义和封建军阀{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.它是在以国共合体为基础的统一战线的组织下进行的</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;28. 1931年1月至1935年1月，以王明为代表的“左”倾错误给中国革命带来严重危害，其主要错误有{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.排斥和打击中国势力{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.将反帝反封建与反资产阶级并列{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.集中力量攻打大城市{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.主张“一切经过统一战线”</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;29. 抗日战争是近代以来中华民族反抗外敌入侵第一次取得完全胜利的民族解放战争，中国赢得抗日战争胜利的主要原因是{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.中国共产党发挥了中流砥柱的作用{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.中国的国力空前强大{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.得到了国际反法西斯力量的同情和支持{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.中国实现了空前的民族觉醒和民族团结</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;30. 以毛泽东同志为核心的党的第一代中央领导集体带领全党全国和各族人民完成了新民主主义革命，进行了社会主义改造，确立了社会主义基本制度，这一基本制度的确立：{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.为当代中国一切发展进步奠定了根本政治前提和制度基础{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.是中国历史上最深刻最伟大的社会变革{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.标志着马克思主义同中国实际第二次结合的完成{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.使广大劳动人民真正成为国家的主人</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;31. 一位社会学家发现大楼的一块玻璃坏了，起初他没太当回事，没过多久，他发现许多处窗户都破损了，经过调研后，他得出结论：一样东西如果有点破损，人们就会有意无意地加快它的破损速度，一样东西如果完好无损，或是及时维护，人们就会精心的护理。这就是著名的“破窗定律”。下列关于道德修养的名言与“破窗定律”内涵相近的是：{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.非知之难行之惟难非行之难终之斯难{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.善不可谓小而无益，不善不可谓小而无伤{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.小善虽无大益,而不可不为。细恶虽无近祸,而不可不去{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.见贤思齐焉见不贤而内自省也</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;32. “可上九天揽月，可下五洋捉鳖”，2012年6月24日在航天员的手动操作下，我国“神航号”宇宙飞船与“天宫一号”交互对接成功，向未来建设宇宙空间站迈向坚实一步。就在同一天，我国的“蛟龙号”载人潜水器成功下潜7020米的深度，再次创造历史记录。这两次成就的里程碑意义在于：{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.丰富了人类认识和开发宇宙的梦想和实践{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.丰富了人类认识和开发宇宙的梦想和实践{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.为中国在太空和海底参与国际合体提供了更多机会{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.为中国在太空和大洋这两个尚未充分利用空间的活动创造了新可能性</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;33. 2012年6.6至7日，上海合作组织成员国元首理事会第十二次会议在京举行。这是该组织发展进入第二个十年的首次峰会，与会各国元首就深化成员国友好合作以及重大国际和地区问题深入交换了意见，达成了新的重要共识。此次峰会的主要成果有：{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.首次制定了中长期战略规划{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.签订了军事同盟条约{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.签署了首个人文合作宣言{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.增加了新的观察员国和对话伙伴国</Text>

                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16, fontWeight: 'bold' }}>三、分析题：34～38小题，每小题10分，共50分。要求结合所学知识分析材料并回答问题。</Text>
                        <View>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;34.结合材料回答问题：</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;材料1：</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;小学老师雷夫.爱斯基斯在其所著的热门教育畅销书《第56号教室的奇迹》中讲过这样一个故事：
                                {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;一位从事特殊教育的优秀教师获得一个宝贵的签名球，上面有美国著名棒球队——红袜队1967年全体队员的签名，这些球员都是他的偶像，对这样一个签名球，这位教师别提有多珍爱了。当年幼的儿子找他一起玩球时，他理所当然地警告儿子：绝对不能拿签名球来玩。儿子问他理由时，他觉得儿子还太小，对球和球员一无所知，说多了儿子也不会明白，于是，他没有解释原委，只对儿子说，不能用那颗球，是因为“球上写满了字”。
        　                      {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;过了几天，儿子又找他一起玩球，当老爸再次提醒儿子不要拿写满字的球来玩时，小男孩满不在乎说：我已经把问题解决了，爸爸问怎么回事，儿子说：我把球上所有的字都擦掉了。老爸气的想痛打儿子，但他转念一想，觉得儿子根本没有做错事。因为自己并没有告诉儿子上面的字有什么意义。从那天起，他无论去什么地方，都带着那颗空白的签名球。这颗球提醒他，不管是教导学生还是子女，一定要时时从孩子的角度去看事情。
        　                      {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;不论家长还是教师，常常用成人的眼光看待孩子，用成人的思维理解孩子，用成人的保准要求孩子。岂不知，从孩子的角度看事情，用孩子的眼睛看世界，正是儿童教育应当遵循的基本规律。
                            </Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>摘编自《人民日报》(2012年3月16日)</Text>

                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;材料2：</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;某大学一研究生凭借着设计“醒目药瓶”，摘得了素有“设计界奥斯卡”美誉的2011年度“国际红点奖”概念设计类奖。
                                {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在他提供的设计图上，常见的塑料瓶盖的顶上一圈变身为一块圆圆的玻璃。“这是一面凹凸镜，有放大的功能”。他解释说，有了这个药瓶盖，老年人不需要带上老花镜来区别药的类别、服用量等。他的灵感来源于生活中对中老年人群体的关注。有一天，有位老人要吃药，可是药瓶上的字太小了，原本挂在脖子上的老花镜却不见了，急的这位老人团团转。就这样，该同学很长一段时间沉浸在老人世界中。突然有一天灵感迸发，想到“醒目药瓶”这个点子。
                                {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;有了灵感后，从设计，带写英文翻译说明，再到制作动画，一共才三天时间。也许有人要问，这样的设计看上去很简单，为什么能拿“国际红点奖”呢?他坦然，设计很简单，关键在于设计前把自己想象成老人，这一设计胜在实用。按照测算，不会给药品本身带来额外的成本，推广起来很容易，实用方便。“希望将来这款设计能推向市场，让更多人得到帮助。”
                                {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这位研究生说他没有想当名人的“野心”。只期望能从生活中的小处入手，用自己的设计改变生活，让生活更加美好。正如“红点”主席Peter Zec博士在颁奖晚会上说的那样：从同学们优秀的设计中，他高兴地看到的是他们所描绘的未来更加美好的世界。
                            </Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;(1)分析“用孩子的眼睛看世界”和“设计前把自己想象成老人”两事例所体现的认识主体的能动作用。(6分)</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;(2)“用自己的设计改变生活，让生活更美好”对我们从事实践活动有何意义?(4分)</Text>
                        </View>
                        <View>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;35.结合材料回答问题：</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;材料1：</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;浙江武义县后陈村是全县经济条件较好的村，但由于财务使用不透明，村民从上世纪90年代以来连续向县纪委、街道反映村里问题，却长期得不到彻底解决。2002年和2003年，连续两任村支书因经济问题查处。2004年初，村里有1000亩土地被征用，获补偿金1900多万元，在人均发放7000多元后，还剩1000多万元。如何处理这些集体资产成为村内一个难题。为帮助村民寻找从根本上解决问题的办法，由县纪委牵头组建的村务监督改革指导小组进驻后陈村，指导组在大量听取村民意见的基础上，决定组建一个相对独立于村委会及村党支部的监督委员会，真正能从根本上让村民有效制约村干部的权力。6月，后陈村在海选村委员基础上由群众选举产生了全国第一个村级民主监督组织——村务监督委员会，与村党支部、村委员一起称为“三委会”。
                                {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;监督会成立不久，即对村里两口池塘的承包进行了全程监督，结果每口池塘三年的承包价从2.8万升至5.8万元，2005年后陈村举行垃圾清运投标会，村委会主任主持会议，监委会主任到场监督，不到5分钟结果就出来了，没有人对投标公正性表示质疑。
                                {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;监委会成立后，后陈村每年的创收情况，包括出租土地给广告公司做广告牌、旧粮站出租、经营沙场、村留土地上的杉树出售，以及向上级部门申请到的资金补助等，每一笔都要经过监委会审核后公布。2004年，当年的招待开支是23909元，比前些年下降近一半，村干部再不能拿着发票随便报销了。在村财务公开栏前，村民告诉记者：“过去简直是胡来，集体的钱像是干部自己的，现在不一样了。”监委会主任说：“我的职责就是看他们有没有按程序办事，有没有搞暗箱操作。”
                                {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;监委会成立以来，后陈村的固定收入逐年增加，村干部连续8年实现零违纪，村民连续8年实现零上访。村两委已顺利完成了3次换届。最近的一次换届，村两委成员一个没动，全部高票当选，一次通过。
                                {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;目前，浙江省3万多个行政村，村村建立了村务监督委员会，实现了村级监督组织全覆盖，村务监督委员会这一有效而不需要太大监督成本的权力制衡制度，对建立乡村“阳光权力体系”共建和谐社会带来重要启迪。村务监督委员会这一制度创新已被写进《中华人民共和国村民委员会组织法》，并在全国推行。
                            </Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>摘编自《人民日报》2012年5月14日等</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(1)后陈村是如何通过制度创新来保障权力在阳光下运行的?(5分)</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(2)全国第一个村务监督委员会的建立对推进基层民主制度建设有何启示?(5分)</Text>
                        </View>
{/* 36 */}
                        <View>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;36.结合材料回答问题：</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;材料1：</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1910年，上海人陆士谔在幻想小说《新中国》里记载了一个神奇的梦，梦中主人公随时光穿梭，看到“万国博览会”在上海浦东举行，为方便市民参观，上海滩建成了浦东大铁桥和越江隧道，还造了地铁，工厂中的机器有鬼斧神工之妙，租界的治外法权已经收回，汉语成了世界通用的流行语言……最后梦中人一跤跌醒，却言道：“休说是梦，到那时，真有这景象也未可知。”
                                {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1920年，孙中山先生完成《建国方略》一书，书中提出了修建三峡水利、建设高原铁路系统等宏伟设想，构想了工厂遍地、机器轰鸣、高楼大厦矗立城乡、火车轮船繁忙往返的现代化景象，描绘了“万众一心，急起直追，以我五千年文明优秀之民族，应世界之潮流，而建设一政治最修明、人民最安乐之国家”的愿景。
        　                      {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1935年，方志敏在《可爱的中国》中写道：“中国一定有个可赞美的光明前途……到那时候，到处都是活跃跃的创造，到处都是日新月异的进步，欢歌将代替了悲叹，笑脸将代替了哭脸，富裕将代替了贫穷，康健将代替了疾苦，智慧将代替了愚昧，友爱将代替了仇杀，生之快乐将代替了死之悲哀，明媚的花园，将代替了凄凉的荒地!这时，我们民族就可以无愧色的立在人类的面前，而生育我们的母亲，也会最美丽地装饰起来，与世界上各位母亲平等的携手了。”“这么光荣的一天，决不在辽远的将来，而在很近的将来。”
                            </Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>摘编自《经济日报》(2012年12月12日)、《方志敏文集》</Text>

                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;材料2：</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2012年11月29日，中共中央总书记习近平到国家博物馆参观《复兴之路》展览，在十九世纪末列强割占领土、设立租借地、划定势力范围示意图前，在鸦片战争期间虎门的大炮前，在反映辛亥革民的文物和照片前，在《共产党宣言》第一个中文全译本前，在《中国共产党的第一个纲领》等反映中国共产党成立的文物和照片前，在李大钊狱中亲笔自述前，在中华人民共和国第一面五星红旗前，在党的十一届三中全会照片前，习近平不时停下脚步，认真观看，仔细询问和了解有关情况，在参观过程中，习近平发表了重要讲话，他提出，每个人都有理想和追求，都有自己的梦想，实现中华民族伟大复
                            </Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;(1)为什么“实现中华民族伟大复兴就是中华民族近代以来最伟大的梦想”?(4分)</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;(2)为什么说“现在我们比历史上任何时期都更接近中华民族伟大复兴的目标”?(6分)</Text>
                        </View>

                        <View>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;37.结合材料回答问题：</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;某图书馆向所有读者免费开放。乞丐拾荒者、和衣衫破旧的民工小心翼翼进来了，无人阻挡，于是他们便堂而皇之的在馆内读书看报，有读者对此表示不满，向馆长抱怨说：图书馆是大雅之堂，如果允许乞丐和拾荒者进入阅读，就是对其他读者的不尊重。馆长回答说：我无权拒绝他们入内阅读，但你有权选择离开。
                                {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;此事被发在微博上，顿时触动了社会的神经，引发人们对人文精神的关注和思考，中央电视台等主流媒体对此进行了报道，一场公共图书馆办馆理念的大讨论由此引发。
                                {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;公共图书馆一向更愿意向体面地文化人敞开，常在门口赫然告示：衣冠不整谢绝入内!把读者分为三六九等，拒绝部分人入内，其公益性大打折扣，而该馆长希望图书馆成为每一个读书人的天堂，，无乱任何人，只要进了图书馆，在知识面前都享有同等权利，不得有高低贵贱之分。为此，该馆在全国同行中率先推出免证阅读制度，任何人进馆借读书籍都不需要证件和费用，以体现人道、人文的公共图书馆理念和人性化的服务。
        　                      {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;对于图书馆实行免费开放可能带来的问题，该馆有关负责人感触颇深：自图书馆实行零门槛后，我们不仅没有感到压力增加，反而感觉开放的时间越长，不尊重这种权力的读者越少，我们和读者都被这种和谐的环境所改变，至于尽管要先洗手，馆内并没有硬性规定，耳濡目染的时间长了，谁也会自觉地洗手，然后在阅读。
        　                      {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;“如果没有天堂，天堂应该是图书馆的模样。”这是文学大师曾相任阿根廷国立图书馆馆长的博尔赫斯的一句名言，该图书馆向乞丐和拾荒者免费开放，不啻一轮明亮的太阳让乞丐和拾荒者在得到温暖的同时，也净化我们的心灵。
                            </Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>摘编自《中国青年》(2011年第5期)、《光明日报》(2012年5月10日)</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;(1)从法律角度如何理解“我无权拒绝他们入内阅读，但你有权选择离开”?(5分)</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;(2)图书馆想乞丐和拾荒者年费开放对我们处理人际关系有何启示?(5分)</Text>
                        </View>

                        <View>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;38.结合材料回答问题：</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;材料1：</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2012年5月，美国发布奥巴马上台后第一个《四年防务评估报告》和《国建安全战略报告》。报告指出，美国国家利益由安全、繁荣、价值和国际失序四个方面组成;美国通过对这些利益的追求，实现国家复兴和全球领导地;相比世界其他地区，亚洲是美国最有所作为的地区。同时，报告将南亚国家归为三个类别：“战略伙伴“和”可预期的战略伙伴“，虽然，美国准备让东盟所有国家成为美国的盟友或是伙伴。
                                {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;美国卡内基国际和平基金会副总裁包道格说：“过去的10年来，中国在南亚地区不断扩大其利益，取得了有效的成果，这是美国没有做到的。
                            </Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>摘编自新华网(2011年5月28日)</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;材料2：</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2011年10月以来，美国高层不断访问亚太地区的国家，参加相关的国际会议。10月下旬，国防部长帕内塔出访印尼，日本和韩国，强调美国将加大在军事部署。11月下旬到12月初，国务卿希拉里。克林顿，先后访问菲律宾、泰国，并对缅甸进行了“历史性访问”，这是1955年以来美国国务卿首次访问缅甸。同时，奥巴马也是展开亚太之行，他参加在夏威夷举行的亚太经合组织第十九次领导人非正式会议，随后出访澳大利亚并前往印尼出席东亚多边峰会，成为参加东亚峰会的首位美国总统。奥巴马在亚太之行中高调宣示，美国是“太平洋大国”，讲“留驻”亚太，通过“坚持核心原则”和与盟友及伙伴的紧密合作，在“塑造”亚太地区未来中发挥更大，更长远的作用。2012年11月8日，奥巴马连任成功不到48小时，即宣布他的首次出访选在东南亚。17日至20日，他不仅访问了泰国，而且对缅甸和柬埔寨进行了历史性首访。在这次东南亚之行中，奥巴马再次强调，美国是一个太平洋国家，亚太地区对美国创造就业机会以及塑造其安全与繁荣至关重要。
                            </Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>摘编自《人民日报》(2011年12月23日)、《参考消息》(2012年11月21日)等</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;材料3：</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;第十一届香格里拉对话暨亚洲安全会议于2012年6月1日至3日在新加坡举行。会议期间，美国国防部长帕内塔发表了题为《美国对亚太的再平衡》的演讲，重点阐释了“亚太再平衡战略”的军事计划，其中包括2020年前在亚太地区保持6个航母舰队，以及将60%的海军力量部署到亚太地区。国际舆论普遍怀疑，美国战略重心向亚太地区转移的意图是为了遏制中国。
                            </Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>摘编自新华网(2012年6月4日)</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;(1)美国将其全球战略重心转向亚太的原因何在?(5分)</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;(2)如何看待美国战略重心东移对中国周边安全的影响?(5分)</Text>
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
