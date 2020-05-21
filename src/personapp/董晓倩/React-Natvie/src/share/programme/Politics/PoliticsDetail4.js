import React, { Component } from 'react'
import { Text, View, ScrollView, Dimensions,StyleSheet } from 'react-native'
import { Accordion } from '@ant-design/react-native';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class PoliticsDetail4 extends Component {
    constructor() {
        super();
        this.state = {
            todo: ['答案'],
            activeSections: [],
            todo: [{
                header: '参考答案',
                content1: '一、单项选择题：',
                content2: '1. 【答案解析】本题正确选项为 A 选项，大气污染防治需要“天帮忙”和“人的努力”。“天帮忙”体现了我们必须尊重客观规律，“人努力”体现的是发挥主观能动性。人的主观能动性的发挥必须在尊重客观规律的前提下才能实现。所以正确答案是A选项。',
                content3: '2. 【答案解析】本题正确选项为 C 选项，意识是对物质世界的能动反映，既有正确的反映，也有歪曲的错误反映。鬼神观念是就是意识对客观物质世界的歪曲反映。题干认为鬼神也是对外在的真实反映错在认为意识是直观的反映否认了能动的反映。',
                content4: '3. 【答案解析】本题正确选项为 D 选项，生产价格=预付资本（不变资本+可变资本）+平均利润。不变资本就是购买生产资料的资本15万元，可变资本就是购买劳动力的资本为5万元。平均利润率=平均利润/预付资本=10%，得出平均利润为2万元。因为生产价格=20+2=22万元。',
                content5: '4. 【答案解析】本题正确选项为 B 选项。第二次世界大战后，资本主义所有制发生了新的变化，法人资本主义所有制的崛起并成为居主导地位的资本所有制形式。其性质是一种基于资本雇佣劳动的垄断资本集体所有制，仍体现着资本剥削雇佣劳动的关系。所以，选项B正确。',
                content6: '5. 【答案解析】本题正确选项为 C 选项，新民主主义社会存在五种经济成分，社会主义性质的国营经济（主导）、半社会主义性质的合作社经济、农民和手工业者的个体经济、私人资本主义经济和国家资本主义经济。三种主要的经济成分是社会主义经济、个体经济和资本主义经济。其中两种过渡性质的经济成分是合作社经济和国家资本主义经济。国家资本主义经济是私人资本主义向国营经济的过渡形式的经济;合作社经济是个体经济向集体经济过渡的形式。所以，选项C正确。',
                content7: '6. 【答案解析】本题正确选项为 B 选项，供给侧结构性改革的根本，是使我国供给能力更好的满足人民日益增长、不断升级和个性化的物质文化和生态环境需要，从而实现社会主义生产目的。供给侧结构性改革的根本目的是提高供给质量满足需要，使供给能力更好满足人民日益增长的物质文化需要。所以，选项B正确。',
                content8: '7. 【答案解析】本题正确选项为 B 选项，“四个全面”战略布局是一个整体，它既包括战略目标，又包括战略举措。全面建成小康社会是重大战略目标，在“四个全面”战略布局中居于引领地位。全面深化改革、全面依法治国、全面从严治党是三大战略就举措，为全面建成小康社会提供重要保障；全面深化改革是增强中国特色社会主义生机活力、推动事业发展的强大动力。全面依法治国是实现国家长治久安的重要保障。全面从严治党，为全面建成小康社会、全面深化改革、全面依法治国提供根本保证。所以，选项D正确。',
                content9: '8. 【答案解析】本题正确选项为 A 选项，从题干我们得知强调的是全国家庭承包经营耕地流转和土地承包经营权。实行实行农村土地所有权、承包权、经营权分置是深化农村改革方面作出的重大制度创新，有利于促进土地经营权在更大范围的优化配置。因此正确答案为Ｂ。',
                content10: '9. 【答案解析】本题正确选项为 B 选项，帝国主义列强对中国的争夺和瓜分的图谋，在１８９４年中日甲午战争爆发后达到高潮。1898年至1899年，各国开始竞相租借港湾和划分势力范围，从而掀起了瓜分中国的狂潮。因此，正确答案是D选项。',
                content11: '10. 【答案解析】本题正确选项为 B 选项，1919年上半年召开的巴黎“和平会议”上，中国政府代表提出废除外国在中国的势力范围、撤退外国在中国军队和巡警，撤销领事裁判权，归还租借、取消“二十一”条等，遭到拒绝。巴黎和会的外交失败是中国五四运动的直接导火索，也是陈独秀认识发生的直接原因。因而正确答案是A选项。',
                content12: '11. 【答案解析】本题正确选项为 B 选项，毛泽东思想成熟成熟的标志是毛泽东在《新民主主义论》中形成了完整的新民主主义革命的理论。毛泽东思想形成的标志是农村包围城市道路的实践和理论的阐述。',
                content13: '12. 【答案解析】本题正确选项为 A 选项，刘邓大军挺进大别山标志着人民解放战争战略进攻的序幕由此拉开。',
                content14: '13. 【答案解析】本题正确选项为 B 选项，信念是人类特有的一种精神现象。信念是认识、情感和意志的有机统一体，是人们在一定的认识基础上确立的对某种思想或事物的坚定不移并身体力行的心理状态和精神状态。信念具有多样性，是认知、情感和意志的有机统一体，有科学的信念和非科学的信念之分。信仰是信念最集中、最高的表现形式，ＢＣＤ项本身说法错误。信念具有不同的层次和类型，不同的人会有思想观念。利益需要、人生经历等方面你的差异，即使实在相同的环境中，信念也不近相同。',
                content15: '14. 【答案解析】本题正确选项为 D 选项，人生价值评价的根本尺度，是看一个人的人生活动是否符合社会发展的客观规律，是否通过实践促进了历史的进步，因此，根本制度是Ａ选项历史标准。',
                content16: '15. 【答案解析】本题正确选项为 A 选项，时政热点。“九二共识”是两岸关系正常交往的基础和前提，其核心是认同大陆和台湾同属一个中国。当前正是由于台湾新领导没有明确承认“九二共识”，没有指明其核心内涵，才导致两岸制度化沟通和协商谈判机制的中断。因而正确答案为A选项。',
                content17: '16. 【答案解析】本题正确选项为 A 选项，时政热点。中东问题主要是指阿以矛盾，核心是巴勒斯坦问题。任何时候都不能忽视巴勒斯坦问题，必须把解决巴勒斯坦问题放在重要而突出的位置。',
                content18: '二、多项选择题：',
                content19: '17. 【答案解析】本题正确选项为 ABC 选项，题干中有一句关键性的总结句“显微镜在生物科学发现中的作用表明”可见突出的是实践中介的作用。选项A强调的是主体、客体、中介的三者统一，是正确的。B强调的是中介的正确作用，也是正确的。C中实践条件的进步就是指的显微镜的作用，所以也是正确的。D本身说法错误，人类基本的实践活动是生产实践。',
                content20: '18. 【答案解析】本题正确选项为 BCD 选项，历史人物是一定历史事件的主要倡导者、组织领导者是历史进程的影响者，它可以加速或延缓历史任务的解决，但不能决定历史发展的基本趋势。A选项认为历史人物不能决定历史方向，是正确的。B选项强调历史人物的影响作用也是正确的。C选项强调了正面历史人物的作用，也正确。D选项没有看到历史人物的两面性，错误。',
                content21: '19. 【答案解析】本题正确选项为 CD 选项，所谓的资本原始积累就是通过暴力手段将生产资料与生产者分离开。资本原始积累的主要途径一是用暴力手段剥夺农民的土地，二是用暴力手段掠夺货币财富。A选项用资本手段获取市场暴利，是资本主义生产方式存在以后的现象。B选项用剥削手段榨取剩余价值，也是资本主义生产方式存在后的。C选项用野蛮手段进行殖民掠夺，是原始积累的方式。D选项用暴力手段剥夺农民土地也是原始积累的方式。',
                content22: '20. 【答案解析】本题正确选项为 BCD 选项，这道题考核的是资本有机构成的提高的基本含义。A选项一个社会增长财富和消除贫困的根本途径，应该是生产力水平的提高。B选项不以人的意志为转移的一般趋势，说明这是一个客观趋势。C选项社会产生相对过剩人口的一个重要原因，阐明了资本有机构成提高的原因。D选项由资本的本性决定的，资本逐利的本性必然导致资本家会提高技术水平，也就是提高资本有机构成。',
                content23: '21. 【答案解析】本题正确选项为 ABCD 选项，在实施新经济政策期间，列宁对苏维埃俄国如何建设社会主义进行了深刻的理论思考，提出了许多精辟的论述。首先，允许多种经济成分并存，可以利用商品、货币和市场发展经济；其次，把大力发展生产力、提高劳动生产率放在首要地位；再次，把建设社会主义作为一个长期探索、不断实践的过程；最后，可以利用资本主义来建设社会主义。正确答案为ABCD。',
                content24: '22. 【答案解析】本题正确选项为 ABC 选项，思想路线的核心是实事求是，所以选项A错误。党的基本路线与以经济建设为中心，改革开放统一于中国特色社会主义的伟大实践是兴国、立国、强国的重大法宝，是实现科学发展的政治保证，是党和国家的生命线和人民的幸福线。选项BCD正确。',
                content25: '23. 【答案解析】本题正确选项为 ABCD 选项，“一带一路”是中共中央应对全球形势深刻变化和我国发展面临的新形势、新任务、新要求，统筹国际国内两个大局做出的战略决策。“一带一路”战略构想的原则和方式是要诚心诚意对待沿线国家，做到言必信、行必果。本着互利共赢的原则同沿线国家开展合作，让沿线国家得益于我国发展。汇集各方力量，引导、协调和组织政治力量、智库媒体、工商企业、民间组织等参与“一带一路”建设框架内个领域交流合作，营造良好的政治、舆论、商业、民意氛围。我们欢迎周边国家参与到合作中来，通过一带一路建设，共同打造开放、包容、均衡、普惠的区域合作框架。ＡＢＣＤ都符合。',
                content26: '24. 【答案解析】本题正确选项为 ABCD 选项，建立环保督查制度工作机制是完善生态文明制度体系的重要举措，有利于完善领导干部目标责任考核制度，落实环境保护主体责任，强化领导责任和监管责任。同时题干强调环保部门牵头到中央主导从以查企业为主转变为“查督并举，以督政为主”也体现了在处理生态文明时政府和市场的关系。因此，ＡＢＣＤ都正确。',
                content27: '25. 【答案解析】本题正确选项为 ACD 选项，创新是引领发展的第一动力，坚持创新发展，是分析近代以来世界发展历程特别是总结我国改革开放成功实践得出的结论，是应对发展环境变化、增强发展动力、更好引领新常态的根本之策，树立创新发展理念，就必须把创新摆在摆在国家发展全局的核心位置。B选项不符合题干，正确答案为ACD。',
                content28: '26. 【答案解析】本题正确选项为 ABCD 选项，本题考查的是党的十八届六中全会。其中关于加强和规范党内政治生活得而要求是着力维护党中央权威、保证党的团结统一、保持党的先进性和纯洁性；着力增强党自我净化、自我完善、自我革新、自我提高能力；着力提高党的领导水平和执政水平、增强拒腐防变和抵御风险能力；着力增强政治生活的政治性、时代性、原则性、战斗性。ＡＢＣＤ都符合。',
                content29: '27. 【答案解析】本题正确选项为 ABC 选项，帝国主义侵略势力不但操纵了中国的财政和经济命脉，而且逐步控制了中国政治。列强控制中国经济的方式有控制中国的交通运输业、在中国设立银行、控制中国的关税和盐税。Ｄ选项不是控制中国的经济方式，而是文化方面，排除、正确答案为ＡＢＣ。',
                content30: '28. 【答案解析】本题正确选项为 ABD 选项，本题考查的是纪念孙中山诞辰１５０周年。习近平主席提到孙中山是伟大的爱国主义者，创立兴中会、同盟会，提出民族、民权、民生的三民主义，积极传播革命思想，广泛联合革命力量，连续发动武装起义，为推进民主革命四处奔走、大声疾呼。中国共产党成立后，孙中山先生同中国共产党人真诚合作，在中国共产党帮助下，把旧三民主义发展为新三民主义，实行联俄、联共、扶助农工三大政策。Ｃ选项三大政策不是孙中山提出的，只是实行。正确答案为ＡＢＤ。',
                content31: '29. 【答案解析】本题正确选项为 ABCD 选项，中共十一届三中全会是新中国成立以来党的历史上具有深远意义的伟大转折，会议形成了以邓小平为核心的党的中央领导集体，揭开了社会主义改革开放的序幕。重新确立了马克思主义的思想路线、政治路线、组织路线。十一届三中全会后，党和国家按照实事求是、有错必纠的原则开始拨乱反正。ABCD都符合。',
                content32: '30. 【答案解析】本题正确选项为 AC 选项，“灋，刑也，水之如平”体现的是C选项，正义神圣；“刑”既有刑戮、罪罚之意，也有规范之意；“廌”也称“獬豸”，是神话中的独角兽，它公正不阿，善断是非曲直体现的是A选项。B、D选项题干都没有体现，正确答案为AC。',
                content33: '31. 【答案解析】本题正确选项为 ABCD 选项，尊重他人权利本身就是一项义务，只有尊重他人权利，每个人的权利才能真正获得并最终实现自我权力，我们有行使个人权利的自由，但也有尊重他人的义务，因为不尊重他人权利，可能丧失自己的权利；尊重他人权利既是一项法律义务，又是一项道德义务；权利实现的内在动力是公民权利意识的重要内容;尊重他人权利是公民权利意识的重要内容。',
                content34: '32. 【答案解析】本题正确选项为 ABD 选项，时政热点。重新调整划设战区，组建战区联合作战指挥机构，是党中央、中央军委和习主席着眼实现中国梦强军梦作出的战略决策，是全面实施改革强军战略的标志性举措，是构建我军联合作战体系的历史性进展，对确保我军能打仗、打胜仗，有效维护国家安全，具有重大而深远的意义。C选项不符合题意，没有体现国际合作与交流。所以正确答案是ABD选项。',
                content35: '33. 【答案解析】本题正确选项为 ACD 选项，时政热点。英国“脱欧”事件的因素主要有：英国政府认为欧盟的规则时常对企业造成障碍，阻碍其走向成功;过去10年移民问题及其对社会造成的负面影响，让英国人积怨已深。他们很担心未来20年如果继续留欧，移民问题会更严重;英国与欧盟的关系从一开始就是复杂的，而且一直在变化。英国人琢磨了许久也曾多次被拒绝，才终于在1973年加入欧盟的前身欧洲共同体。此后，去留问题的辩论从没停止。欧盟顺境时，疑欧声音小，欧盟问题多时，疑欧派势头就大。B选项说法错误，英国不是始终反对欧洲一体化的。所以正确答案是ACD选项。',
                content36: '三、分析题：',
                content37: '34. 【参考答案】'
                　　+'(1) ①真理是人们对于客观世界的正确认识，价值是客观物质世界对于人的满足。真理和价值在实践基础上是辩证统一的。成功的实践必然是以真理和价值的辩证统一为前提的；价值的形成和实现以坚持真理为前提，而真理又必然是具有价值的。'
                　　+'②对于人工智能的看法既需要遵循真理尺度也需要遵循价值尺度，由于价值评价具有主体性的特征，依主体的特点而转移。不同的人因为自身的需要、社会特点不同，因而对人工智能产生不同的看法和评价。'
                　　+'唯物辩证法认为，矛盾是普遍存在的，矛盾存在于一切事物的发展过程中，每一事物的发展过程中都存在着自始至终的矛盾运动，即所谓矛盾无处不在，无时不有。矛盾推动事物的发展，而且事物发展的根本原因不在事物的外部，而在于事物内部的矛盾性。事物的内部矛盾是事物发展的内因。内因即内部矛盾是事物存在的基础，是一事物区别于他事物的内在本质，是事物变化的根据，它规定着事物发展的方向，所以它是事物发展的根本原因。人工智能作为新发明不可避免的带来新问题，但同时也会带来新的解决办法，但无论如何，用好人工智能，关键还在使用人工智能的人类自身。',
                content38: '35. 【参考答案】'
                　　+'(1)①农村贫困人口脱贫是全面建成小康社会最艰巨的任务。消除贫困、改善民生、逐步实现共同富裕，是社会主义的本质要求，是我们党的重要使命。'
                　　+'②全面建成小康社会需要坚持以人民为中心的发展思想，强调共享发展必须把增进人民福祉、促进人的全面发展作为发展的出发点和落脚点，坚持发展为了人民、发展依靠人民、发展成果由人民共享。'
                　　+'③当前虽然我国农村经济快速发展，但是仍然存在大量贫困人口，这是制约全面建成小康社会的短板问题。我们不能一边宣布全面建成了小康社会，另一边还有几千万人口的生活水平处在扶贫标准线以下，这既影响人民群众对全面建成小康社会的满意度，也影响国际社会对我国全面建成小康社会的认可度。'
                　　+'(2)扶贫开发事关全面建成小康社会，事关增进人民福祉，事关巩固党的执政基础，事关国家长治久安。必须坚决打赢脱贫攻坚战：'
                    +'①脱贫致富要充分发挥政治优势和制度优势，推进精准扶贫脱贫，创新扶贫工作机制和模式，采取超常规措施，根据具体情况加大旅游业等特色产业的发展，加大扶贫攻坚力度。赤溪村从“输血”帮扶到“换血”搬迁再到“造血”开发就是不断创新工作机制和模式。'
                    +'②坚持党的领导，充分发挥党的领导核心作用，在党的领导下有序推进。'
                    +'③坚持解放思想、转变观念，扶贫攻坚、农村人口脱贫不能拘泥于固定模式，应该结合农村具体实际、具体情况，不断改变思维，创新模式，找到适合自己的扶贫攻坚的道路。'
                    +'④各级党委和政府特别是贫困地区的党委和政府加强对扶贫攻坚任务的重视，使扶贫攻坚的任务真正落实到实处。',
                content39: '36. 【参考答案】'
                    +'(1)①长征的胜利宣告了国民党反动派消灭中国共产党和红军的图谋彻底失败，宣告了中国共产党和红军肩负着民族希望胜利实现了北上抗日的战略转移，实现了中国共产党和中国革命事业从挫折走向胜利的伟大转折，开启了中国共产党为实现民族独立、人民解放而斗争的新的伟大进军。'
                　　+'②长征途中，我们党通过艰苦卓绝的实践探索，成功把解决生存危机同拯救民族危亡联系在一起，把长征的大方向同建立抗日前进阵地联系在一起，实现了国内革命战争向抗日民族战争的转变，为夺取中国人民抗日战争胜利、进而夺取新民主主义革命胜利打下了坚实基础。'
                　　+'③长征的胜利，不仅保存了革命力量，而且使我们党找到了中国革命力量生存发展新的落脚点，找到了中国革命事业胜利前进新的出发点。长征的胜利，使我们党以陕甘宁革命根据地为中心，推动一大批革命根据地如雨后春笋般建立和发展起来，革命的火种在神州大地渐成燎原之势，有力推动了新的革命高潮到来。'
                　　+'(2)长征永远在路上。一不论我们的事业发展到哪一步，不论我们取得了多大成就，我们都要大力弘扬伟大长征精神，在新的长征路上继续奋勇前进。今天我们必须走好“两个百年”的新长征道路。'
                　　+'①必须坚定共产主义远大理想和中国特色社会主义共同理想，为崇高理想信念而矢志奋斗。'
                　　+'③必须把人民放在心中最高位置，坚持一切为了人民、一切依靠人民，为人民过上更加美好生活而矢志奋斗。'
                　　+'④必须把握方向、统揽大局、统筹全局，为实现我们的总任务、总布局、总目标而矢志奋斗。'
                　　+'⑤必须建设同我国国际地位相称、同国家安全和发展利益相适应的巩固国防和强大军队，为维护国家安全和世界和平而矢志奋斗。'
                　　+'⑥必须加强党的领导，坚持全面从严治党，为推进党的建设新的伟大工程而矢志奋斗。',
                content40: '37. 【参考答案】'
                    +'(1)“工匠精神”实质上是从业人员在职业生活中爱岗敬业、服务群众、奉献社会的职业道德。这些具备“工匠精神”的从业人员热爱自己的岗位，干一行爱一行，爱一行钻一行，精益求精，尽职尽责。'
                　　+'(2)社会主义职业道德包括爱岗敬业、诚实守信、办事公道、服务群众、奉献社会。爱岗敬业反映的从业人员对待自己的职业的一种态度，也是一种道德需要。体现的是从业者热爱自己的工作岗位、对工作负责。诚实守信是从业者的道德操守和人格力量。办事公道要求从业者公平、公正。奉献社会要求从业人员在自己的工作岗位上奉献社会，这也是职业道德的最高要求。工匠精神正是对职业道德集中体现。在全面建设小康社会的今天，我们需要具备工匠精神的从业人员，大力弘扬工匠精神，从而呼吁职业道德。',
                content41: '38. 【参考答案】'
                    +'(1)①当前世界经济在深度调整中曲折复苏，正处于新旧增长动能转换的关键时期。上一轮科技和产业革命提供的动能面临消退，新一轮增长动能尚在孕育。现在，保护主义抬头，国际贸易和投资低迷，多边贸易体制发展面临瓶颈，区域贸易安排丛生，导致规则碎片化。地缘政治因素错综复杂，政治安全冲突和动荡、难民危机、气候变化、恐怖主义等地区热点和全球性挑战，对世界经济的影响不容忽视。'
                　　+'②面对当前世界经济的复杂形势和风险挑战，二十国集团将共同推动世界经济走上强劲、可持续、平衡、包容增长之路。'
                　　+'第一，建设创新型世界经济，开辟增长源泉。创新是从根本上打开增长之锁的钥匙。'
                　　+'第二，建设开放型世界经济，拓展发展空间。世界经济发展的历史证明，开放带来进步，封闭导致落后。'
                　　+'第三，建设联动型世界经济，凝聚互动合力。在经济全球化时代，没有哪一个国家可以独善其身，协调合作是必然选择。我们要在世界经济共振中实现联动发展。'
                　　+'第四，建设包容型世界经济，夯实共赢基础。消除贫困和饥饿，推动包容和可持续发展。'
                　　+'(2)①“合作之桥”、“友谊之桥”体现了中国与其它国家的合作共赢、包容互鉴、平等互信的关系。'
                    +'②我国坚定不移奉行独立自主的和平外交政策，始终不渝走和平发展道路，实施互利共赢的开放战略，在和平共处五项原则基础上全面发展同各国的友好合作，推动建立以合作共赢为核心的新型国际关系，真正做到人类命运共同体。在发展自身的同时也自觉承担国际责任，履行国际义务，以自身发展带动世界发展，着眼世界和平、发展的情怀。'
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
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. 某地区进入供暖季后常常出现雾霾，而一旦出现大风天气或等到春暖花开后，雾霾就会散去或减少，从该地区较长时间的数据变化看，经过人们努力治霾，污染物排放总量在持续走低；但在某些时段，环境空气质量污染指数会迅速攀升，甚至“爆表”。这种看似“矛盾”的现象凸显了大气污染防治的一大特点：天帮忙很重要，但人努力才是根本。“人努力”与“天帮忙”之间的关系对我们正确处理主观能动性和客观规律之间辩证关系的启示是{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.尊重事物的客观规律是正确发挥主观能动性的前提{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.人类有意识的思想活动是掌握客观规律的根本前提{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.认识活动是客观规律性与主观能动性相统一的基础{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.尚未认识的外在自然规律对人的实践活动起着至关重要的作用</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. 有人认为，既然人的意识是对客观外部世界的反映，那么人脑里的“鬼”、“神”意识就是对外在世界上鬼、神真实存在的反映。这种观念的错误在于{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.夸大意识的能动作用{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.把意识看成是物质的产物{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.认为意识是对存在的直观反映{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.混淆了人类意识自然演化的阶段</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. 某企业投资汽车生产，生产一辆汽车所耗费的生产资料价值为15万元，支付给工人的工资为5万元，假定市场的平均利润率为10%，那么，在自由竞争条件下，该汽车的生产价格是{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.20万元{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.20.5万元{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.21.5万元{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.22万元</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4. 从历史发展的角度看，资本主义生产资料所有制是不断演进和变化的。当今资本主义社会居主导地位的资本所有制形式是{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.私人资本所有制{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.法人资本所有制{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.私人股份资本所有制{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.垄断资本私人所有制</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5. 从中华人民共和国成立到社会主义改造基本完成，是我国从新民主主义到社会主义的过渡时期，这一时期，个体经济向社会主义集体经济过渡的形式是{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.国营经济{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B..私人资本主义经济{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.合作社经济{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.国家资本主义经济</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6. 2016年是“十三五”规划开局之年，也是推进供给侧结构性改革的攻坚之年。推进供给侧结构性改革是适应我国经济发展新常态的重大决策，其根本目的是{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.加快政府职能转变{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.提高供给质量满足需要{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.深化价格、财税、金融、社保等领域基础性改革{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.推进“去产能、去库存、去杠杆、降成本、补短板”</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7. 协调推进“四个全面”战略布局，是党的十八大以来党中央从实现“两个一百年”奋斗目标、实现中华民族伟大复兴的中国梦的战略高度，统敌国内国际两个大局，把握我国发展新征确定的治国理政新方略。在“四个全面”战略布局中居于引领地位的是{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.全面从严治党{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.全面深化改革{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.全面依法治国{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.全面建成小康社会</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8. 随着工业化、城镇化的深入推进，大量农民转向非农产业，我国农村土地流转现象日益普遍，农业经营方式发生深刻变化，截至2016年6月，全国家庭承包经营耕地流转已超过30%，流转土地4.6亿亩。当前，为解决拥有土地承包经营权的人不再种地、种地的人又没有相应权利这一突出问题，我国在深化农村改革方面作出的重大制度创新是{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.实行农村耕地保护制度{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.实行农村土地所有权、承包权、经营权分置{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.实行农村家庭联产承包责任制{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.实行农村集体经营性建设用地入市</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9. 帝国主义侵略中国的最终目的，是要瓜分中国、灭亡中国。1895年中国在甲午战争中战败后，列强掀起了瓜分中国的狂潮，这集中表现在{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.从侵占中国周边邻国发展到蚕食中国边疆地区{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.设立完全由外国人直接控制和统治的租界{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.外国资本在中国近代工业中争夺垄断地位{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.竞相租借港湾和划分势力范围</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10. 第一次世界发现，德国战败，1918年12月，陈独秀在《每周评论》中说，大战结果是“公理战胜强权”，并把美国总统威尔逊称作是“现在世界上第一个好人”，然而，陈独秀在1919年5月4日出版的《每周评论》中的一篇文章又写道：“什么公理，什么永久和平，什么威尔逊总统十四条宣言，都成了一文不值的空话”，导致陈独秀的认识发生变化的直接原因{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.中国巴黎和会外交失败{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.日本对德宣战，出兵山东{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.苏俄宣布废除从前同中国签订的一切不平等条约{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.美国不愿放弃在华种种特权</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11. 毛泽东思想是马克思主义中国化的第一大理论成果，是在中国革命和建设的实践中逐步形成和发展起来的。在土地革命和解放战争后期和抗日战争时期，毛泽东思想得到了多方面展开而达到成熟，其标志是{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.农村包围城市武装夺取政权理论的科学概论{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.新民主主义理论的系统阐释{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.人民民主专政理论的完整论述{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.思想政治工作和文化工作理论的系统提出</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;12. 1947年6月底，根据中共中央的决策和部署，刘伯承、邓小平率领的晋冀鲁豫野战军主力，实施中央突破，千里跃进大别山；陈毅、粟裕指挥的华东野战军主力为东路，挺进苏鲁豫皖地区；陈康、谢富治指挥的晋冀鲁豫野战军一部为西路，挺进豫西，三路大军相互策应，机动歼敌，迫使国民党军处于被动地位，这表明{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.人民解放军在数量上已经超过国民党军队{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.人民解放战争战略进攻的序幕由此揭开{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.人民解放军同国民党军队进行战略决战的时机已经成熟{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.人民解放战争进入战略相持阶段</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;13. 信念是认识、情感和意志的有机统一体，是人们在一定的认识基础上确立的对某种思想或事物的坚定不移并身体力行的心理状态和精神状态，信念是人们追求理想目标的强大动力，决定事业的成败。信念有不同的层次和类型，其中 {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.高层次的信念决定低层次的信念{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.低层次的信念代表了一个人基本信仰{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.相同社会环境中生活的人们的信念始终一致{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.各种信念没有科学与非科学之分</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;14. 社会主义核心价值观，为人们确定和实现人生价值提供了基本遵循。人生价值评价主要是看一个人的人生活动是否符合社会的客观规律，其评价的根本尺度是{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.历史标准{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.政治标准{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.经济标准{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.文化标准</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;15. 自2016年5月20日台湾地区新领导人就职以来，两岸制度化沟通和协商谈判机制中断。其根本原因在于{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.台湾当局没有明确承认“九二共识”及其核心意涵{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.美国高规格“礼遇”台湾当局领导人过境{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.台湾当局减少了赴台旅游大陆游客的配额{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.台湾在美国测试新的导弹防御系统</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;16. 第二次世界大战后，中东经历了长期和频率的战争与冲突，是世界最动荡的地区，被称为“火药库”。2016年11月29日，联合国举行“声援巴勒斯坦人民国际日”纪念大会，中国国家主席习近平向大会致贺电，表示中国作为联合国安理会常任理事国，愿同国际社会一道，为早日实现中东全面、公正、和平作出不懈努力。中东问题的核心是{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.巴勒斯坦问题{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.教派冲突问题{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.恐怖主义问题{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.伊朗核问题</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16, fontWeight: 'bold' }}>二、多项选择题：17～33题，每小题2分，共34分。下列每题给出的四个选项中，至少有两个选项是符合题目要求的。</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;17. 生物学史，可以说是显微镜的发展史。17世纪中叶，英国科学家使用诞生不久的显微镜观察软木塞，发现了植物细胞，开启了近现代生物学的大门。此后，显微镜的放大能力和成像质量不断提升，人类对细胞的认知也随之深刻和全面。20世纪中叶，科学家们利用X射线晶体学发现了DNA（脱氧核糖核酸）双螺旋结构，人类的观察极限从亚细胞结构推向了分子结构。我国科学家的重要科研成果“剪接体的高分辨率三维结构”的背后，也站着一个默默无闻的英雄——冷冻电子显微镜。显微镜在生物科学发现中的作用表明{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.实践主体、客体和中介三者的有机统一构成实践的基本结构{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.实践的主体和客体正是依靠中介系统才能够相互作用{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.人类认识水平的提高与实践条件的进步有着直接的关系{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.探索未知世界的科学实验是人类最基本的实践活动</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;18. 唯物史观在坚持人民群众是历史的创造者这一基本前提下，高度重视个人在历史上的作用。历史人物是一定历史事件的主要倡导者、组织领导者或思想理论、科学文化的重要代表人物。下列关于历史人物历史作用的正确认识是{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.历史人物不论发挥什么样的作用都不能决定和改变历史发展的总进程和总方向{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.历史人物会因其智慧、性格等因素对社会进程发生影响{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.具有进步意义的历史人物往往能够首先发现或提出历史进程中新的历史任务{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.历史人物对历史发展的作用都是积极的</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;19. 马克思指出，所谓资本原始积累“只不过是生产者和生产资料分离的历史过程。这个过程所以表现为‘原始的’，因为它形成资本以及与之相适应的生产方式的前史，”资本原始积累的主要途径有{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.用资本手段获取市场暴利{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.用剥削手段榨取剩余价值{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.用野蛮手段进行殖民掠夺{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.用暴力手段剥夺农民土地</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;20. 当今世界正处在新科技革命和产业革命的交汇点以机器人技术为代表的科技产业发展十分迅速。机器人在生产过程中的广泛使用，使资本有机构成不断提高。然而就一般意义而言，资本有机构成的提高实际上是{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.一个社会增长财富和消除贫困的根本途径{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.不以人的意志为转移的一般趋势{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.社会产生相对过剩人口的一个重要原因{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.由资本的本性决定的</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;21. 1921年3月，俄共（布）召开十大，决定从战时共产主义政策过渡到新经济政策。在实施新经济政策期间，列宁对苏维埃俄国如何建设社会主义进行了深刻的理论思考，提出了许多精辟的论述，其主要内容包括{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.允许多种经济成分并存，可以利用商品、货币和市场发展经济{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.把大力发展生产力、提高劳动生产率放在首要地位{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.把建设社会主义作为一个长期探索、不断实践的过程{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.可以利用资本主义来建设社会主义</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;22. 在中国共产党成立98周年大会上，习近平总书记强调指出：“坚持不忘初心、继续前进，要坚持党的基本路线不动摇，不断把中国特色社会主义伟大事业推向前进。”改革开放以来，党和国家领导人一再强调要毫不动摇地坚持党的基本路线，这主要是因为，实践已经证明党的基本路线是{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.思想路线的核心{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.兴国、立国、强国的重大法宝{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.实现科学发展的政治保证{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.党和国家的生命线，人民的幸福线</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;23. “一带一路”倡议提出三年来，已经有100多个国家和国际组织参与其中，我国同沿线30多个国家签署共合作协议，与20多个国家开展了国际产能合作，一批有影响力的标志性项目逐步落地。截至2016年7月，我国对“一带一路”相关国家的投资累计已达511亿美元，占同期对外直接投资总额的12%；与沿线国家新签承包工程合同1.25万份，累计合同额2790亿美元。我国推进“一带一路”建设旨在{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.探索国际合作及全球治理新模式{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.沿线各国共同繁荣{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.打造开放、包容、均衡、普惠的区域经济合架构{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.统筹国内国际两个大局</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;24. 2016年7月以来，中央陆续派出环保督察组进驻各地进行现场督察，掀起了一场新治污问责风暴，环保督察，从环保部门牵头到中央主导从以查企业为主转变为“查督并举，以督政为主”，这是我国环境监管模式的重大变革和完善生态文明制度体系的重要举措。建立环保督察工作机制有利于{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.完善领导干部目标责任考核制度{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.落实环境保护主体责任{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.强化领导责任和监管责任{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.处理好政府与市场的关系</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;25. 党的十八届五中全会提出“创新、协调、绿色、开放、共享”的新发展理念，把创新作为引领发展的第一动力。在这一新发展理念的指导下，2016年5月党中央和国务院颁布了《国家创新驱动发展战略纲要》，把创新作为引领发展的第一动力是{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.提高核心竞争力的必然选择{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.构建和谐世界的内在要求{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.引领经济发展新常态的根本之策{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.分析世界发展历程和总结我国改革开放实践得出的结论</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;26. 严肃党内政治生活是我们党的优良传统和政治优势，也是全面从严治党的基础，党的十八届六中全会通过了《关于新形势下党内政治生活的若干准则》和《中国共产党党内监督条例》，提出了新形势下加强和规范党内政治生活的新要求，其主要内容是{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.着力维护党中央权威、保证党的团结统一、保持党的先进性和纯洁性{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.着力增强党自我净化、自我完善、自我革新、自我提高能力{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.着力提高党的领导水平和执政水平、增强拒腐防变和抵御风险能力{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.着力增强政治生活的政治性、时代性、原则性、战斗性</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;27. 在半殖民半封建社会的条件下，中国不可能在独立的基础上与外国发生经济往来。资本-帝国主义列强同中国发生经济关系，不是为了推动中国经济的发展，而是为了控制中国的经济。列强控制中国经济的方式有{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.控制中国的交通运输业{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.在中国设立银行{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.控制中国的关税和盐税{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.在中国设立出版机构宣传西学</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;28. 孙中山先生是伟大的民族英雄，伟大的爱国主义者，中国民主革命的伟大先躯，一生以革命为已任，立场救国救民，为中华民族作出了彪炳史册的贡献。孙中山先生的伟大表现在{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.坚定维护民主共和国制度和国家完整统一{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.发动了推翻北流军阀统治为目标的北伐战争{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.重新解释三民主义并提出了联俄、联共、扶助农工三大政策{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.领导了辛亥革命</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;29. 1978年12月18日到22日，常的十一届三中全会在北京召开，会议的主要任务是确定把全党工作重点转移到社会主义现代化建设上来，这样全会是新中国成立以来党的历史上具有深远意义的伟大转折，全会结束了粉碎“四人帮”后两年党和国家工作在徘徊中前进的局面，标志着中国共产党{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.揭开了社会主义改革开放的序幕{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.开始了在思想、政治、组织等领域的全面拨乱反正{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.形成了以邓小平为核心的党的中央领导集体{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.重新确立了马克思主义的思想路线、政治路线、组织路线</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;30. 我国法律文化有悠久的历史和传承，据《说文解字》阐释，汉语中“法”的古体是“灋”。“灋，刑也，水之如平，从水，廌所以触不直者去之,从去。”在古代，“法”主要表现为“刑”或“刑律”，“刑”既有刑戮、罪罚之意，也有规范之意；“廌”也称“獬豸”，是神话中的独角兽，它公正不阿，善断是非曲直。上述材料表明在传统文化中人们对法律的理解和诉求是{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.法律寄托着惩恶扬善、匡扶正义的价值追求{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.法律体现了君权神授的思想{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.法律富含这公平如水、正义神圣的深刻意蕴{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.法律具有至高无上的地位</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;31. 公共生活中个人权利与他人权利发生冲突在所难免，比如学生宿舍里有人看书，有人休息，有人要听音乐……对解决权利冲突要有正确的认识，虽然每个人都有行使个人权利的自由，但也要尊重他人的权利。这是因为 {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.不尊重他人权利，就有可能丧失自己的权利{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.尊重他人权利既是一项法律义务，也是一项道德义务{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.权利实现的内在动力是人们彼此之间对各自权利的相互尊重{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.尊重他人权利是公民权利意识的重要内容</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;32. 中国人民解放军战区成立大会与2016年2月1日在北京隆重举行。中共中央总书记、国家主席、中央军委主席习近平向东部战区、南部战区、西部战区、北部战区、中部战区授予军旗并发布训令。建立五大战区及组建战区联合作战指挥机构是{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.全面实施改革强军战略的标志性举措{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.构建我军联合作战体系的历史性选择{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.加强国际军事合作与交流的重大步骤{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.为实现中国梦强军梦作出的战略决策</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;33. 2016年6月23日，英国举行脱离欧盟全民公投，脱欧阵营以51.9%对留欧阵营48.1%的微弱得票优势胜出，英国成为首个投票脱离欧盟的国家，为欧洲一体化进程带来变化。导致英国“脱欧”的因素主要有{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.英国不愿受欧盟某些监管规则束缚{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.英国始终反对欧洲一体化{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.欧洲遭遇史上最大难民潮冲击{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.英国“疑欧主义”传统</Text>

                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16, fontWeight: 'bold' }}>三、分析题：34～38小题，每小题10分，共50分。要求结合所学知识分析材料并回答问题。</Text>
                        <View>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;34.结合材料回答问题：</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2008年，斯坦福大学的计算机科学家设计出了第一个专家系统：1982年，加州理工学院物理学家提出了新的神经网络模型；1997年，IBM“深蓝”电脑线路国际教程世界观军卡斯帕罗夫；2011年，IBM超级计算机“沃森”在美国电视答题节目中战胜两种人类冠军；2013年，机器在人脸识别上超过人类；仅一年后，机器人在物体识别上也战胜……未来人工智能继续超越人类的可能性很高。
                                {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在人工智能应用前景充满无限可能的情况下，其潜在风险也引发了广泛讨论。2016年2月，在美国加州发生了一起死人驾驶汽车因躲避路上障碍物而撞上公交车的交通事故。这凸显出人中智能设备在应对人类社会各种场景时面临的挑战，人们还担心人工智能技术成熟后的问题，比如将机器人用于战争是否会带来像核武器一样的后果。
        　                      {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;有学者表示，人机对弈是人类思考自身作用契机。人工智能的目的是帮助人类，创造出比李世石更优秀的棋手应该是人类的胜利，也有学者认为，在面对复杂的伦理问题时，人工智能技术可能会陷入不可预知的选择困境，著名物理学家霍金也发出警告；“我不认为人工智能的进步一定会是良性的。”
        　                      {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;德国人工智能研究所柏林分析所长汉斯·乌斯克莱特强调说，人工智能的研究方向不是要取代人类，而是要与人类互补，增强人类的能力，人工智能不会取代人类，因为只有人类才具有创造力和目标，而机器只关注如何解决眼前遇到的问题。要让人工智能避免犯下道德层面的错误，关键在于人类自己，在美国《连线》杂志创始主编凯文·凯利看来，每个发明都不可避免带来新问题，但同时也会带来新的解决方案，解决这些问题的方式不是减少技术的使用，而是通过改进技术来提供解决方案，他认为，即使新的技术发展带来的49%是问题，但它首先带来了51%的好处，这正是人类进步的动力。
        　                      {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;从这个意义上讲，“阿尔法围棋”和李世石无论谁胜谁败，人类都是最后的赢家，总之，用好人工智能，关键还在人类自身。
                            </Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;(1)从真理和价值辩证关系的视角看，为什么人们对人工智能技术会产生多种多样的看法和评价？（4分）</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;(2)如何理解“用好人工智能，关键还在人类自身”？（6分）</Text>
                        </View>
                        <View>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;35.结合材料回答问题：</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在宁德地委强力推动下，赤溪村打响了以转变观念为突破口的“横血”破坚战——“挪穷窝”：用移民搬迁的方式把分散的14个自然村集中起来：通路、通电。搬迁成功了，生活环境改善了，新问题又来了：搬了穷富。靠着人均不足1亩的土地，如何维持穷根，走一条自我致富之路？赤溪村两委干部再次帮助群众转变观念，因地制宜培育旅游特色优势产业。今天，生态旅游已成为赤溪人致富的主导产业，2015年全村人均统统入达1.3万多元，其中45%以上来自旅游业。
                                {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;三十多年来，赤溪村干部群众在党的扶贫政策支持下，在社会各方的大力帮助下，从“输血”帮扶到“换血”搬迁再到“造血”开发，走出了一条适合自身特色的扶富乱贫之路，把一个远近闻名的贫困村建成了小康村。2016年2月19日，习近平总书记问赤溪村干部群众进行在线支流时指出：“‘中国扶贫第一村’这个评价是很高的，滴水穿石、久久为功、弱鸟先飞，你们的实践印证了现在的扶贫方针，就是要精准扶贫。”
                                {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;赤溪村矢志不渝推进扶贫开发、脱贫致富的艰辛历程，正是中国特色扶贫开发探索之路的一个缩影。改革开放以来，我们党成功走出了一条中国特色扶贫开发道路。使七亿多农村贫困人口成功脱贫，为全面建成小康社会打下了坚实基础。当前，我国脱贫攻坚已进入冲刺阶段。习近平总书记指出：“全面建成小康社会，关键是要把经济社会发展的‘短板’尽快补齐”，而“农村贫困人口脱贫是最突出的短板”，“脱贫攻坚战的充锋号已经吹响，我们要立下愚公移山志，咬定目标、苦干实干，坚决打赢脱贫坚战。”
                            </Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>摘编自人民网（2016年2月1日、11月9日）、新华网（2016年7月25日）、央视网（2016年8月6日）等</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(1)如何理解农村贫困人口脱贫是我国全面建成小康社会“最突出的短板”？（5分）</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(2)赤溪村脱贫致富之路对当前我国实施精准扶贫、打赢脱贫攻坚战有何启示？（5分）</Text>
                        </View>
{/* 36 */}
                        <View>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;36.结合材料回答问题：</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;长征途中，我们党通过艰苦卓绝的实践探索，不断打开战局的最重要的保证。联系在一起，把长征的大方向同建立抗日前进阵地联系在一起。实现了国内革命战争的抗日民族战争的转变，为夺取中国人民抗日战争胜利，进而夺取新民主主义革命胜利打下了坚实基础。
                                {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;长征的胜利，不仅保存了革命力量，而且使我们党找到了中国革命力量生存发展的落脚点，打到了中国革命事业胜利前进新的出发点，从长征的终点出发，我们党领导中国人民展开了中国革命波澜壮阔的新画卷。
        　                      {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;历史是不断向前的、要达到理想的彼岸，就要沿着我们确定的道路不断前进，每一代人有每一代人的长征路，每一代人都要走好自己的长征路。今天，我们这一代人的长征，就是要实现“两个一百年”奋斗目标，实现中华民族伟大复兴的中国梦。
        　                      {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;实现伟大的理想，没有平坦的大道可走，夺取坚持和发展中国特色社会主义伟大事业新发展，夺取推进党的建设新的伟大工程新成效，夺取具有许多新历史特点的伟大斗争新胜利，我们还有许多“雪山”、“草地”需要跨越，还有许多“娄山关”、“晴子口”需要征服，一切贫图安逸、不愿继续艰苦奋斗的想法都是要不得的，一切骄傲自满、不愿继续开拓前进的想法都是要不得的。
        　                      {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;长征永远在路上。一个不记得来路的民族，是没有出路的民族。不论我们的事业发展到哪一步，不论我们取得了多大成就，我们都要大力弘扬伟大长征精神，在新的长征路上继续奋勇前进。
                            </Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>摘自习近平《在纪念红军长征胜利80周年大会上的讲话》</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;(1)为什么说长征的胜利既是“中国革命力量生存发展新的落脚点”，也是“中国革命事业胜利前进新的出发点”？（6分）</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;(2)如何理解“长征永远在路上”？（4分）</Text>
                        </View>

                        <View>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;37.结合材料回答问题：</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;他说：“每每看到自己生产的发动机把卫星送到太空，就有一种成功后的自豪感，这种自豪感用金钱买不到。”这也代表了大国工匠们的心声。
                                {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;“工匠精神”是一种工作态度。在工匠们的心目中，制作出来的产品没有最好。只有更好。高凤林在36年的工作中，攻克了200多项技术难关，经他的手创造了140多发火箭的发动机，焊接的焊缝总长达送到12万多米，没有出现过一次质量问题。他先后获得过部院科技进步一等奖、国家科技进步二等奖、2014年纽伦堡国际发展展览全会奖等30多得奖励，而这没有一丝不苟的工作态度显然是无法做到的。
                                {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;欲知大道，必先为史。习近平总书记指出:“历史是一面镜子。以史为鉴，才能避免重蹈覆辙。对历史，我们要心怀敬畏、心怀良知。历史无法改变，但未来可以塑造。”
        　                      {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;随着时代的发展，工匠的工作或许会逐渐被机器所取代，但是“工匠精神”却不可能被代替。我国作为一个拥有“四大发明”的文明古国，具有历史悠久而技艺高超的手工业，薪火相传的能工巧匠们留下了数不胜数的传世佳作。我们今天弘扬“工匠精神”，不仅是对传统工的技艺的留恋，而且是对一切职业的道德呼唤。“工匠精神”，不仅仅是制造业的需要，也不仅仅是企业家的需要，它代表一个时代的气质，是我们每一个人的事业追求与人生态度。
                            </Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>摘编自《中国青年报》（2015年5月11日）、央视网（2016年4月22日、10月9日）等</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;(1)工匠精神”的实质是什么？（5分）</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;(2)为什么说弘扬“工匠精神”是“对职业的道德呼唤”？（5分）</Text>
                        </View>

                        <View>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;38.结合材料回答问题：</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在中国的精心组织和与会各方的共同努力下，杭州峰会取得了丰硕成果，发表了二十国集团领导人杭州峰会公报》，就推动世界经济增长达成许多重要会议，胜利判断，结构性改革、新工业革命、数字经济等新方式。制定并通过了《二十国集团制造增长量图》、《二十国集团深化结构性改革议程》、《2016年二十国集团创新行动计划》、《二十国集团新工业革命行动计划》、《二十国集团落实2030年可持续发展议程行动计划》等28份成果文件，明确了世界经洗涤剂的前进方向和具体行动计划，以期为世界经济开辟新道路，拓展新疆界；第一次把发展问题置于全球宏观政策框架突出位置，第一次就落实联合力2030年可持续发展议程制定行动计划，第一次集体支持非洲和最不发达国家工业化。在二十国集团历史上具有重要开创性意义；强调二十国集团成员虽然国情不同、发展阶段不同、面临的现实挑战不同，但推动经济增长的愿望相同，应对危机挑战的利益相同，各方应该“彼此包容，守望相助”，“坚定前行、共抵彼岸”，习近平主席特地用“桥”来比喻二十国集团，称其为“友谊之医桥”、“合作之桥”和“未来之桥”。
                                {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;中国在本次峰会上发挥的巨大作用，得到与会国家和国际组织领导人的高度认可，联合国秘书长潘基文高度赞赏杭州峰会，称中国作为G20轮值主席国，作出了杰出贡献，尤其是推动峰会在“说易行难”的可持续发展议题上制定行动计划，更是历史性的贡献，为全世界出卓越领导力。
                            </Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>摘编身《人民日报》（2016年9月4日、9月5日、9月6日）</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;(1)结合当前国际环境，分析二十国集团领导人杭州峰会主题的现实意义。（6分）</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;(2)习近平主席用“桥”比喻二十国集团，体现出中国怎样的外交理念与世界情怀？（6分）</Text>
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
