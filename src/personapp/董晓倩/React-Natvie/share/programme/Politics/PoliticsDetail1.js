import React, { Component } from 'react'
import { Text, View, ScrollView, TouchableOpacity, AsyncStorage, StyleSheet, Dimensions } from 'react-native'
import { Accordion } from '@ant-design/react-native';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class PoliticsDetail1 extends Component {
    constructor() {
        super();
        this.state = {
            todo: ['答案'],
            activeSections: [],
            todo: [{
                header: '参考答案',
                content1: '一、单项选择题：',
                content2: '1. 【答案解析】本题正确选项为 C 选项，《共产党宣言》是恩格斯与马克思合作拟定的;《家庭、私有制和国家的起源》是用唯物史观阐明了国家的实质和其消亡的必然性;《反杜林论》 总结了马克思主义诞生后无产阶级革命的经验和自然科学发展的成就，第一次全面系统地阐述了马克思主义的三个组成部分，是一部马克思主义的百科全书;《自然辩证法》是恩格斯多年来对自然科学研究的总结。',
                content3: '2. 【答案解析】本题正确选项为 D 选项，对人工智能的评价需要主体的参与，是对客观事物的属性及其满足主体需要的价值性评价。',
                content4: '3. 【答案解析】本题正确选项为 D 选项，商品价值量是以简单劳动为尺度计算的，复杂劳动等于自乘的或多倍的简单劳动，复杂劳动转化为简单劳动是在商品交换过程中市场机制自发 实现的。',
                content5: '4. 【答案解析】本题正确选项为 A 选项。关于无产阶级革命的发生，马克思、恩格斯曾经从自由竞争的资本主义时代条件出发，认为无产阶级革命至少将在几个主要的资本主义国家同 时发生。列宁认真总结了当时变化了的新情况，深刻论述了社会主义革命可以首先在一个或者几个国家获得胜利。1915 年，他在《论欧洲联邦口号》一文中明确指出：“经济和政治发展的不平衡是资本主义的绝对规律。由此就应得出结论：社会主义可能首先在少数甚至在单 独一个资本主义国家内获得胜利”。',
                content6: '5. 【答案解析】本题正确选项为 C 选项，搞清楚什么是社会主义、怎样建设社会主义，关键是要在坚持社会主义基本制度的基础上进一步认清社会主义的本质。邓小平根据马克思主义 的基本原理和社会主义的实践经验，对这个问题进行了不懈的探索，作出了科学的回答。',
                content7: '6. 【答案解析】本题正确选项为 A 选项，全面提升实体经济要以加快发展先进制造业为重点。要推动产业优化升级，加快发展先进制造业，推动互联网、大数据、人工智能和实体经济深度融合，在中高端消费、创新引领、绿色低碳、共享经济、线代供应链、人力资本服务等领域培育新增长点、形成新动能。',
                content8: '7. 【答案解析】本题正确选项为 B，习近平总书记在 2018 年 12 月 29 日全国政协新年茶话会上的重要讲话中，指出：2019 年，人民政协将迎来 70 周年华诞，要把加强思想政治引领、广泛凝聚共识作为履职工作的中心环节。',
                content9: '8. 【答案解析】本题正确选项为 B 选项，《告台湾同胞书》发表 40 周年纪念会 1 月 2 日上午举行。中共中央总书记、国家主席、中央军委主席习近平出席纪念会并发表重要讲话。习近平在讲话中强调，两岸长期存在的政治分歧问题是影响两岸关系行稳致远的总根子，总不能 一代一代传下去。',
                content10: '9. 【答案解析】本题正确选项为 D 选项，近代以来中华民族面临的两大历史任务，就是争取民族独立、人民解放和实现国家富强、人民富裕。两个任务既相互区别又紧密联系。两大历 史任务的主题、内容与实现方式都不一样，前一个任务是从根本上推翻半殖民地半封建的统 治秩序，改变落后的生产关系和上层建筑;后一个任务是要改变近代中国经济、文化落后的 地位和状况，发展社会生产力，实现中国的现代化。前一个任务为后一个任务扫除障碍，创 造必要的前提;后一个任务是前一个任务的最终目的和必然要求。',
                content11: '10. 答案解析】本题正确选项为 A 选项，近代以来，中国历史上出现了两次论战，本题考查的是第二次论战的焦点内容，以孙中山为代表的资产阶级革命派和以康梁为代表的改良派之间论战的焦点。改良派说，革命会引起下层社会暴乱，招致外国的干涉、瓜分，使中国“血流成河”、“亡国灭种”，所以要爱国就不能革命，只能改良、立宪。革命派针锋相对地指出，清政府是帝国主义的“鹰犬”，因此爱国必须革命，只有通过革命，才能“免瓜分之祸”，获得民族独立和社会进步。BC 选项也是论战内容，但并非焦点。D 选项论战双方均未提出。',
                content12: '11. 【答案解析】本题的正确选项为 B 选项，资产阶级改良派和革命派都没有提出团结、联系群众，只有我们党提出了。A 选项说的是农村包围城市、武装夺取政权的道路。C 选项说的是三大法宝之一。D 选项的方法资产阶级革命派用过，故排除。',
                content13: '12. 【答案解析】本题正确选项为 A 选项，即进入了全面建设社会主义的历史阶段。B 选项的内容和 D 选项的内容在新中国成立的时候就完成了，故排除。C 选项的内容要到 1957 年， “一五”计划完成，故排除。',
                content14: '13. 【答案解析】本题正确选项为 B 选项，建设中国特色社会主义法治体系是中国特色社会主义的本质要求和重要保障，推进国家治理体系和治理能力现代化的重要举措，全面依法治国 的总抓手。',
                content15: '14. 【答案解析】本题正确选项为 A 选项，新中国是中国共产党领导的社会主义国家，祖国的命运与党的命运、社会主义的命运密不可分。当代中国，爱国主义的本质就是坚持爱国和爱 党、爱社会主义高度统一。',
                content16: '15. 【答案解析】本题正确选项为 C 选项，本题为时政题目，思想政治理论课是爱国主义教育的主阵地。',
                content17: '16. 【答案解析】本题正确选项为 C 选项，本题为时政题目，美国退出《中导条约》真实目的就是通过“自我松绑”放手发展先进导弹，谋求单方面军事优势。',
                content18: '二、多项选择题：',
                content19: '17. 【答案解析】本题正确选项为 AB 选项，时间和空间是物质运动的存在形式。物质运动与时间和空间的不可分割证明了时间和空间的客观性。C 选项错误，物质世界是客观的，不以人的意志为转移。D 选项错误，实践是认识发展的动力，空间观念随着实践的发展而拓展。',
                content20: '18. 【答案解析】本题正确选项为 BC 选项，人们的现实社会关系具有多样性和复杂性的特征、归根到底受生产关系的制约。',
                content21: '19. 【答案解析】本题正确选项为 AD 选项，经济是基础,文化是经济基础的反映，一定的文化由一定的经济所决定的，文化具有相对独立性。C 选项错误，生产方式是社会历史发展的决定力量。',
                content22: '20. 【答案解析】本题正确选项为 ACD，产业资本在循环过程中要经历三个不同阶段，与此相联系的是资本依次政治性三种不同职能。第一个阶段是购买阶段，执行时货币资本的职能; 第二阶段是生产阶段，执行的是生产资本的职能;第三阶段是售卖阶段，执行的是商品资本的职能。',
                content23: '21. 【答案解析】本题正确选项为 ABD，经济全球化背景下，表现为国际分工进一步深化;贸易全球化;金融全球化;企业生产经营全球化，但是不能应对全球经济波动和经济危机，因 此 C 选项错误。',
                content24: '22. 【答案解析】本题正确选项为 ACD，本题考查新时代我国社会主要矛盾的变化。进入新时代我国社会的主要矛盾是人民日益增长的美好生活的需要和不充分不平衡发展之间的矛盾。 因此 ACD 正确，B 已满足“从有到优”的需求是错的，我们新时代正在满足这个需求。',
                content25: '23. 【答案解析】本题正确选项为 ABC，支持深圳建设中国特色社会主义先行示范区有利于在更高起点、更高层次、更高目标上推进改革开放，形成全面深化改革、全面扩大开放新格局; 有利于更好实施粤港澳大湾区战略，丰富“一国两制”事业发展新实践;有利于率先探索全面建设社会主义现代化强国新路径，为实现中华民族伟大复兴的中国梦提供有力支撑。',
                content26: '24. 【答案解析】本题正确选项为 ABCD，进入新时代，为了确保到 2020 年现行标准下农村贫困人口实现脱贫，贫困县全部摘帽的目标，要动员全党全国全社会力量，坚持精准扶贫、精 准脱贫，坚持中央统筹、省负总责、市县抓落实的工作机制，强化党政一把手负总责的责任 制，注重扶贫同扶志、扶智相结合，深入实施东西部扶贫协作，重点攻克深度贫困地区脱贫 任务，确保到 2020 年我国现行标准下农村贫困人口实现脱贫，贫困县全部摘帽，解决区域性整体贫困，做到脱真贫、真脱贫。',
                content27: '25. 【答案解析】本题正确选项为 ABCD，我国建立以国家公园为主体的自然保护地体系，有利于推进自然生态保护，建立美丽新中国;有利于保护重要的自然生态系统和独特的自然遗产; 有利于促进人与自然和谐共生;有利于维护国家生态安全。因此，本题全选。',
                content28: '26. 【答案解析】本题的正确选项为 ACD 选项，“一国两制”是一个完整的概念。其中，“一国”是根，根深才能叶茂;“一国”是本，本固才能枝荣。在香港贯彻落实“一国两制”方针， 有“三条底线”绝对不能触碰：绝对不能允许任何危害国家主权安全、绝对不能允许挑战中央权力和香港特别行政区基本法权威、绝对不能允许利用香港对内地进行渗透破坏的活动。',
                content29: '27. 【答案解析】本题正确选项为 ABD，列强不能瓜分中国的原因有中国人民进行了持久的反抗，列强在争夺中的矛盾不平衡、不协调和中国长期以来是一个统一大国。其中，中国人民 进行了持久的反抗是根本原因。C 选项的内容表述错误，中国的封建势力与列强勾结在了一起。',
                content30: '28. 【答案解析】本题的正确选项为 ABC，即主义从中国实际出发学习运用马克思主义理论， 重视对马克思主义基本理论的学习和提出知识分子在同劳动群众相结合的思想。D 选项明确提出马克思主义与中国实际相结合的命题是毛泽东同志在六届六中全会上提出来的，故排除。1938 年 10 月，毛泽东在中共六届六中全会的政治报告《论新阶段》中指出：“离开中国特点来谈马克思主义，只是抽象的空洞的马克思主义。因此，马克思主义的中国化，使之 在每一表现中带着必须有的中国的特性，即是说，按照中国的特点去应用它，成为全党亟待 了解并亟待解决的问题。',
                content31: '29. 【答案解析】本题的正确选项为 BCD，抗美援朝战争是一场抗击美国侵略者的正义战争， 这场战争的胜利，不仅支援了朝鲜人民、保卫了中国的国家安全，而且为维护亚洲和世界的 和平做出了重要贡献。这一胜利极大地增强了中国人民的民族自信心和民族自豪感。全世界 对新中国刮目相看，新中国的国际威望空前提高。从此，帝国主义不敢轻易做侵犯新中国的 尝试，我国的经济建设和社会改革赢得了一个相对稳定的和平环境。',
                content32: '30. 【答案解析】本题的正确选项为 ABCD，2019 年 10 月中共中央、国务院印发了《新时代公民道德建设实施纲要》,《纲要》指出，新时代公民道德建设的重点任务是：筑牢理想信念之基;培育和践行社会主义核心价值观;传承中华传统美德;弘扬民族精神和时代精神。',
                content33: '31. 【答案解析】本题的正确选项为 BCD，A 权利行使的方式具有唯一性表述错误。权利行使的方式分为口头方式、书面方式和行为方式，有时口头方式和书面方式可以兼用。',
                content34: '32. 【答案解析】本题的正确选项为 ACD，本题为时政题目。',
                content35: '33. 【答案解析】本题的正确选项为 ABCD，本题为时政题目。',
                content36: '三、分析题：',
                content37: '34. 【参考答案】'
                　　+'(1) 自然界中的“一物降一物” 平衡法则所体现的唯物辩证法原理是矛盾的普遍性及矛盾的同一性和斗争性原理。'
                　　+'矛盾反映了事物内部和事物之间对立统一的关系，矛盾的普遍性是指矛盾存在于一切事 物之中，存在于一切事物发展过程始终，即所谓矛盾无处不在，无时不有，自然界中的事物 也是如此。'
                　　+'同一性和斗争性是矛盾的两种基本属性，是矛盾双方相互联系的两个方面，同一性是指 矛盾双方相互依存、相互贯通的性质和趋势。斗争性是矛盾着的对立面之间相互排斥、相互 分离的性质和趋势。'
                　　+'矛盾的同一性和斗争性是相互联结、相互制约的。同一性不能脱离斗争性而存在，没有斗争性就没有同一性，因为矛盾的同一性是以差别和对立为前提的，是包含差别和对立的同一;斗争性也不能脱离同一性而存在，斗争性寓于同一性之中。矛盾的斗争性是无条件的绝对的，同一性是有条件的相对的。无条件的绝对的斗争性与有条件的相对的同一性相结合， 构成事物的矛盾运动，推动事物的发展。'
                　　+'运用矛盾的同一性和矛盾的斗争性原理指导实践，还要正确把握和谐对事物的作用。它还说明和谐作为矛盾的一种特殊表现形式，体现着矛盾双方的相互依存、相互促进、共同发展。但和谐并不意味着矛盾的绝对同一。和谐是相对的有条件的，只有在矛盾双方处于平衡、 协调、合作的情况下，事物才展现出和谐状态。社会的和谐、人与自然的和谐，都是在不断解决矛盾的过程中实现的。'
                　　+'(2) 创新就是破除与客观事物进程不相符合的旧观念、旧理论、旧模式、旧做法，在继承'
                　　+'历史发展成果的基础上，发现和运用事物的新联系、心归来，更有效地进行认识世界和改造 世界的活动。创新是社会发展的不竭动力，人类发展进步的历史就是不断创新的历史。'
                　　+'“跳出传统思维模式，创新之路会越走越宽”就是理论创新和实践创新相互促进、发展的 过程。第一，实践创新为理论创新提供不竭的动力源泉。第二，理论创新为实践创新提供科 学的行动指南。第三，我们要努力实现理论创新和实践创新的良性互动。所谓良性互动是指 两者之间存在良好的、积极的相互作用和相互影响，或者说二者之间形成相互激发、共同促 进的因果关系，而这种良性互动需要人的努力才能完成。',
                content38: '35. 【参考答案】'
                　　+'(1)中国特色社会主义制度是党和人民在长期实践探索中形成的科学制度体系，我国国家治理一切工作和活动都依照中国特色社会主义制度展开，我国国家治理体系和治理能力是中 国特色社会主义制度及其执行能力的集中体现。'
                　　+'中国特色社会主义制度坚持把根本政治制度、基本政治制度同法律体系、基本经济制度 以及各方面体制机制等具体制度有机结合起来，坚持把国家层面民主制度同基层民主制度有 机结合起来。坚持把党的领导、人民当家作主、依法治国有机结合起来，既坚持了社会主义的根本性质，又借鉴了古今中外制度建设的有益成果，符合我国国情，集中体现了中国特色 社会主义的特点和优势。'
                　　+'新中国成立 70 年来，我们党领导人民创造了世所罕见的经济快速发展奇迹和社会长期稳定，中华民族迎来了从站起来、富起来到强起来的伟大飞跃。实践证明，中国特色社会主 义制度和国家治理体系是以马克思主义为指导、植根中国大地、具有深厚中华文化根基、深 得人民拥护的制度和治理体系，是具有强大生命力和巨大优越性的制度和治理体系，是能够 持续推动拥有近十四亿人口大国进步和发展、确保拥有五千多年文明史的中华民族实现“两 个一百年”奋斗目标进而实现伟大复兴的制度和治理体系。'
                　　+'(3)完善和发展中国特色社会主义制度，推进国家治理体系和治理能力现代化，这两句话是一个整体，前一句规定了根本方向，后一句规定了实现路径，我们是在中国特色社会主义道路这个方向上推进国家治理体系和治理能力现代化。推进国家治理体系和治理能力现代化，是完善和发展中国特色社会主义制度的必然要求，是实现社会主义现代化的应有之义。',
                content39: '36. 【参考答案】'
                    +'(1) 中共中央在北京香山只有半年时间，但这里是我们党领导解放战争走向全国胜利、新民主主义革命取得伟大胜利的总指挥部，是中国革命重心从农村转向城市的重要标志，在中 国共产党历史、中华人民共和国历史上具有非常重要的地位。'
                　　+'在这里，发布向全国进军的命令，吹响了“打过长江去，解放全中国”的伟大号角，中 国人民解放军以摧古拉朽之势向全国各地胜利大进军，彻底结束了国民党在大陆的统治。'
                　　+'在这里，毛泽东同志发表了《论人民民主专政》，为新中国的建立奠定理论基础和政策基础。'
                　　+'在这里，中共中央同各民主党派、各界人士共同筹备中国人民政治协商会议，制定通过 了起到临时宪法作用的《中国人民政治协商会议共同纲领》，确定了新中国的国体和整体，制定了一系列基本政策，描绘了建立建设新中国的宏伟蓝图。'
                　　+'(2)中华人民共和国成立，宣告中国人民当家作主的时代到来了，中国历史开辟了新纪元。 第一，帝国主义列强压迫中国、奴役中国人民的历史从此结束，中华民族一洗近百年来'
                　　+'蒙受的屈辱，开始以崭新的姿态自立于世界的民族之林。'
                　　+'第二，本国封建主义、官僚资本主义统治历史从此结束，长期以来受尽压迫和欺凌的广 大中国人民在政治上翻了身，第一次成为新社会、新国家的主任。'
                　　+'第三，军阀割据、战乱频仍、匪患不断的历史从此结束，国家基本统一，民族团结，社 会政治局面趋向稳定，各族人民开始过上安居乐业的生活。'
                　　+'第四，从根本上改变了中公社会的发展方向，为实现由新民主主义向社会主义的过渡， 创造了条件。'
                　　+'第五，中国共产党成为全国范围内的执政党，为进行社会主义现代化建设，提供了根本的政 治保证。',
                content40: '37. 【参考答案】'
                    +'(1)张富清“服务人民、奉献社会”的高尚的人生追求，充分说明了理想信念是共产党人的精神之“钙”。理想信念是人生发展的内在动力。'
                　　+'首先，理想信念昭示奋斗目标。人生是一个在实践中奋斗的过程。要使生命富有意义， 就必须在有意义的奋斗目标的指引下，沿着正确的人生道路前进。理想信念对人生历程起着导向的作用，是人的思想和行为的定向器。'
                　　+'其次，理想信念提供前进动力。理想信念是激励人们向着既定目标奋斗前进的动力。一个人有了坚定正确的理想信念，就会以惊人的毅力和不懈的努力，成就事业、创造奇迹。'
                　　+'最后，理想信念提高精神境界。理想信念是衡量一个人精神境界高下的重要标尺。人生是物质生活与精神生活相辅相成的统一过程。理想信念作为人的精神世界的核心，一方面能 使人的精神生活的各个方面统一起来，使人的内心世界成为一个健康有序的系统，保持心灵 的充实和安宁，避免内心世界的空虚和迷茫;另一方面又引导着人们不断地追求更高的人生 目标，提升精神境界，塑造高尚人格。一个人的理想越崇高，信念越坚定，精神境界和人格 就会越高尚。'
                　　+'(3)法律为道德提供保障，道德为法律提供思想指引和价值遵循。国家勋章和国家荣誉称号制度是我国宪法规定的重要的国家制度，体现了党和人民的意志。国家勋章和国家荣誉称号与社会核心价值观是息息相通，国家颁发国家勋章和国家荣誉称号，有利于宣传和弘扬社会主义核心价值观，是宣传崇尚“服务人民，奉献社会”的高尚人生追求的重要途径;有利于培育良好的社会风气，让弘扬社会主义核心价值观真正落到实处。有利于增进社会团结， 为决胜全面建成小康社会、夺取新时代中国特色社会主义伟大胜利、实现中华民族伟大复兴的中国梦树立强大的精神支柱，注入伟大的时代力量。',
                content41: '38. 【参考答案】'
                    +'(1) 今世界正处于大发展、大变革、大调整的时代，也处于不稳定、不确实、不消停的时代。当前，各国经济社会发展联系日益密切，全球治理体系和国际秩序变革加速推进你中有 我，我中有你，是一个命运共同体，在全球化背景下,各国的发展不可能独善其身，更不是你争我夺的“零和博弈”，合作共赢成为必然选择。一直以来中国不断扩大市场开放,完善开放格局,优化营商环境,持续推动共建“一带一路”高质量发展，深化多双边合作，连续举办进口博览会,是国际贸易发展史上一大创举，是中国着眼于推动新一轮高水平对外开放作出的重大决策，是中国主动向世界开放市场的重大举措。'
                　　+'事实证明，中国才是国际合作的倡导者和多边主义的支持者。第一，中国为世界和平与 发展注入了正能量。中国坚持独立自主的和平外交政策，坚持和平共处五项原则。中国始终 是世界和平的建设者。第二,中国的发展是世界的机遇。中国是世界经济增长的主要稳定器和动力源。中国始终是全球发展的贡献者。第三，中国梦与世界梦息息相通，中国追求国家 富强、民族振兴、人民幸福,将为建设更加美好的世界贡献力量。'
                　　+'(2) 进博会的成功举办，进一步搭建了全球共享共创的务实合作平台和发展平台，不仅使全球展客商获得了可观的经济效益，也促进了世界各国间的文化交流，产生了良好的文化效 应。'
                　　+'一是弘扬了中华优秀传统文化。中华优秀传统文化博大精深，源远流长，是中华民族的 血脉，也为世界文化的发展作出了重要的贡献。'
                　　+'二是促进了世界各国文化的交融。进博会不仅是全球经贸交易的盛会，也是世界文化交 流的盛会。进博会成为全球文化交流的广阔平台，不断加深彼此了解和互信，充分体现了人类对美好生活的向往这一共同价值追求，其所彰显的互利共赢、共享未来的合作理念，也获 得了广泛认同。'
                　　+'三是打造了“文化+”的特色品牌。随着中国在世界的影响力越来越大，中华文化的传 播也越来越广泛，全球越来越多的企业在商品中加入了中国元素，既满足了中国消费者的需 要，也为越来越多渴望了解中华文化的世界各国消费者提供了选择，可以预见，蕴含中国元 素的文化品牌必将会日益绽放出独特的魅力和光彩。'
                　　+'四是拓展了文化的交流合作平台。推动世界各国间的文化、经贸交流，需要有良好的平 台作支撑。进博会作为世界上第一个以进口为主题的国家级展会，有国际贸易和国际文化交 流两条主线，二者相互交汇，互为补充，拓展了文化和经贸交流的平台。'
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
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. 恩格斯于 1820 年 11 月 28 日出生在德国巴门市的一个工厂主家庭。他称自己一生所做的事就是“拉第二小提琴"。 恩格斯不仅与马克思一起创立马克思主义，参加并指导国际工人运动,而且在传播和发展马克思主义方面作出了杰出的贡献。恩格斯全面阐述马克思主义理论体系的著作是( ){'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.《共产党宣言》&nbsp;&nbsp;&nbsp;&nbsp;B.家庭、私有制和国家的起源{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.《反杜林论》&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;D.《自然辩证法》</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. 逐渐“飞入寻常百姓家”的人工智能对人类的社会生活产生了巨大影响，对此，技术乐观派 认为人工智能为人类发展更新了“发动机”，悲观派则认为人工智能的发展可能导致“人类的终结“。对人工智能社会效用的评价是( ){'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.事物的发展变化以时间地点和条件为转移{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.事物的普遍联系是通过中介来实现的{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.任何实体事物都是普遍联系之网上的一个网结{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.事物的变化和发展是一个过程</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. 在相同的劳动时间里，复杂劳动创造的价值大于简单劳动创造的价值。在以私有制为基础 的商品经济条件下，复杂劳动转化为简单劳动( ){'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.社会生产力和生产关系的现存冲突{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.经济基础与上层建筑的现存冲突{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.人类社会与自然界的现存冲突{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.社会存在与社会意识的现存冲突</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4. 十月革命之前，列宁总结当时变化了的新情况，得出“社会主义可能首先在少数甚至在单独一个资本主文国家内获得胜利”的结论。列宁得出这个结论的理论依据是( ){'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.使用价值和价值之间的矛盾{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.私人劳动和社会劳动之间的矛盾{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.具体劳动和抽象劳动的矛盾{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.脑力劳动和体力劳动的矛盾</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5. “什么是社会主义?怎样建设社会主义?”是邓小平在领导改革开放的现代化建设这一 新的革命过程中，不断提出和反复思考的、首要的基本理论问题，搞清楚这一问题的关键是{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.坚持和发展中国特色社会主义{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.实现社会主义现代化{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.推进马克思主义中国化时代化大众化{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.坚持以经济建设为中心</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6. 实体经济是一国经济的立身之本和财富之源，是国家强盛的重要支撑，党的十九大报告指 出，建设现代化经济体系必须着力发展实体经济，全面提升实体经济发展水平，我国全面提 升实体经济的重点是( ){'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.政治安全&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B.经济安全{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.人民安全&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;D.军事、文化、社会安全</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7. 2019 年 9 月 20 日，习近平在中央政协工作会议暨庆祝中国人民政治协商会议成立 70 周年大会上的讲话中，提出了新时代加强和改进人民政协工作的总体要求，指出新时代做好人民 政协工作的中心环节是( ){'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.全面加强党的执政本领{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.坚持党要管党、全面从严治党{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.坚持解放思想、改革创新{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.全面推进党的政治建设</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8. 1979 年 1 月 1 日,全国人民代表大会常务委员会发表《告台湾同胞书》，郑重宣示争取祖国和平统一的大政方针，揭开了两岸关系发展新的历史篇章。2019 年 1 月 2 日,习近平在《告台湾同胞书》发表 40 周年纪念会上的讲话中指出:“在一个中国原则基础上,台湾任何政党、团体同我们的交往都不存在障碍。以对话取代对抗、以合作取代争斗、以双赢取代零和,两岸关系才能行稳致远。”影响两岸关系行稳致远的总根子是( ){'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.确保国家粮食安全&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B.建立新型土地承包关系{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.转移农村剩余劳动力&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;D.推进农业农村现代化</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9. 近代以来中华民族面临着争取民族独立、人民解放和实现国家富强、人民富裕两大历史任 务。近代中国的历史表明,要争得民族独立和人民解放,必须首先( ){'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.触及封建制度根本{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.采纳了维新派提出的开国会等政治主张{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.一定程度上反映了资产阶级的政治和经济诉求{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.带有彻底性和不妥协性</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10. 1905 年至 1907 年间,资产阶级革命派和改良派进行了一场大论战 ,双方论战的焦点是( ){'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.安源路矿工人罢工&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B.香港海员罢工{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.京汉铁路工人罢工&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;D.开滦五矿工人罢工</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11. 中国共产党一经成立,中国革命就展现了新的面貌。不久中国共产党就开始采取民族资产阶级,小资产阶级的政党和政治派别没有采取过也不可能采取的路线，即( ){'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.为了团结国民党共同抗日{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.不赞成张学良、杨虎城的主张{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.工作重心转向城市斗争{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.接受了共产国际的指示</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;12. 1956 年社会主义改造基本完成。随着中国建立了社会主义基本政治制度, 社会主义基本经济制度也建立起来。中国社会主义基本制度的建立,标志着( ){'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.结束国共内战&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B.商讨联合抗日{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.寻求外国援助&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;D.争取和平民主</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;13. 全面推进依法治国，涉及立法、执法、司法、守法等各个方面，涉及中国特色社会主义事业“五位一体” 总体布局的各个领域，必须加强顶层设计、统筹谋划，在实际工作中必须有一个总揽全局、 牵引各方的总抓手。全面依法治国的总抓手是( ){'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.依法治国和以德治国相结合{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.家庭、私有制和国家的起源{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.把全面深化教育体制改革作为根本任务{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.把培养社会主义建设者和接班人作为根本任务</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;14. 习近平在纪念五四运动 100 周年大会上的讲话中指出:“爱国主义是我们民族精神的核心， 是中华民族团结奋斗、自强不息的精神纽带。”“对每一个中国人来说，爱国是本分，也是职责，是心之所系、情之所归。对新时代中国青年来说，热爱祖国是立身之本、成才之基。” 当代中国爱国主义的本质就是( ){'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.建设中国特色社会主义法治体系{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.维护社会和谐和民族平等的统一{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.对民族和文化的归属感、认同感的统一{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.坚持立足民族和面向世界的统一</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;15. 2019 年 11 月,中共中央、国务院印发的《新时代爱国主义教育实施纲要》指出，爱国主义是中华民族的民族心、民族魂，是中华民族最重要的精神财富，是中国人民和中华民族维护民族独立和民族尊严的强大精神动力。新时代爱国主义教育要面向全体人民、聚焦青少年。 当前，对青少年进行爱国主义教育的主阵地是( ){'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.手机和互联网&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B.精品读物{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.思想政治理论课&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;D.传统节日纪念活动</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;16. 2019 年 8 月 2 日,美国宣布正式退出《中导条约》(全称《苏联和美国消除两国中程和中短程导弹条约》)。其真实原因是( ){'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.俄罗斯首先违约&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B.谋求全球战略平衡与稳定{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.自我松绑谋求绝对军事优势&nbsp;&nbsp;D.其他国家不受条约限制</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16, fontWeight: 'bold' }}>二、多项选择题：17～33题，每小题2分，共34分。下列每题给出的四个选项中，至少有两个选项是符合题目要求的。</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;17. 虚拟现实投术是一种运用计算机仿真系统创建多源信思融合的交互式三维动态实景以及动作仿真的技术，可以给使用者提供沉浸性，多感知性，交互性的互动体验，虚拟现实技术所构造的虚拟环境说明(){'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.物质世界不再具有客观实在性{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.物质世界的存在形式具有多样性{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.信息是独立于物质和意识的第三种存在状态{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.人们可以通过实践创造出自然界原本不存在的现实状态</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;18. 基因编辑是应对遗传性疾病的一种潜在治疗办法，但其技术运用极具争议，这不仅是因为基因的变化会传给后代并最终有可能影响整个基因库，而且更重要的是基因编辑会产生长远而深刻的社会影响，可能衍生出一系列棘手的伦理、法律和安全难题，正因如此，许多国家对人类基因编辑技术制定了相应的伦理、法律规范。人类严格控制基因编辑行为的原因在于(){'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.人的实践活动要遵循真理尺度与价值尺度的统一{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.基因编辑技术可能突破人类的伦理道德底线{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.科学技术有时表现为异己的、敌对的力量{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.人的实践活动是合规律性与合目的性的统一</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;19. 资本主义的生产目的是追逐利润最大化。为了获得尽可能多的利润,分布在不同部门(行业)的资本家之间必然展开激烈的竞争,而竞争的结果必将导致利润率的平均化。利润率平均化的过程意味着(){'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.某企业工人创造的剩余价值有被其他资本家侵占的可能{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.各部门内不同资本家的等量投资所得到的利润大体上均等{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.各部门资本家在加强对工人阶级的剥削上有着共同的阶级利益{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.不从事直接生产的银行资本家所获得的利润总是低于平均利润</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;20. 资本主义必然为社会主义所代替,并不意味着资本主义将在短期内自行消亡。资本主义向社会主义的过渡必然是一个复杂的、长期的历史过程,其原因在于(){'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.任何社会形态的存在都有绝对稳定性{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.资本主义的发展具有不平衡性{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.资本主义社会具有一定的自我调节能力{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.当代资本主义的发展还显示出生产关系对生产力容纳的空间</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;21. 习近平指出:“当代中国的伟大社会变革,不是简单延续我国历史文化的母版，不是简单套用马克思主义经典作家设想的模板,不是其他国家社会主义实践的再现，不是国外现代化发展的翻版,”这对我们理解科学社会主义一般原则的启示是(){'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.科学社会主义绝不是一成不变的教条{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.科学社会主义与资本主义生产方式没有必然的联系{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.科学社会主义是人类优秀文化传统的历史延续{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.科学社会主义在不同的时代具有不同的内容和形式</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;22. 中国特色社会主义进入新时代，我国社会主要矛盾已经转化为人民日益增长的美好生活需要和不平衡不充分的发展之间的矛盾。但是，我国社会主要矛盾的变化没有改变我们对我国社会主义所处历史阶段的判断,依据是(){'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.我国总体上仍处于不发达阶段{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.我国仍然面临极其复杂的国际环境{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.我国仍然是世界上最大的发展中国家{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.我国社会主要矛盾的变化只是社会主义初级阶段这个历史阶段中的变化</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;23. 改革开放40年来,我国民营经济从小到大、从弱到强,不断发展壮大。截至2017年底,我国民营企业数量超过2700万家,个体工商户超过6500万户,注册资本超过165万亿元。概括起来说,民营经济具有“五六七八九”的特征,即贡献了50%以上的税收,60%以上的国内生产总值,70%以上的技术创新成果,80%以上的城镇劳动就业,90%以上的企业数量。我国经济发展能够创造中国奇迹,民营经济功不可没。这表明,民营经济已成为(){'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.实现中华民族伟大复兴中国梦的重要力量{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.推动社会主义市场经济发展的重要力量{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.建设现代化经济体系的重要主体{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.控制国民经济命脉的主导力量</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;24. 国家治理体系是在党领导下管理国家的制度体系,是一整套紧密相连、相互协调的国家制度;国家治理能力则是运用国家制度管理社会各方面事务的能力。二者的关系主要表现为(){'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.国家治理体系和治理能力是相辅相成的有机整体{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.好的国家治理体系可以提高国家治理能力{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.提高国家治理能力可以充分发挥国家治理体系的效能{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.国家治理体系越完备国家治理能力就一定越强</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;25. 全免准确的理解和把握“一国”与“两制”的关系，应在坚持“一国”基础上，实现“两制”之间的和谐相处、相互促进。为此，必须做到(){'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.把利用国际有利条件和发挥港澳优势有机结合起来{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.把坚持“一国”原则和尊重“两制”差异有机结合起来{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.把维护中央权力和保障特别行政区高度自治权有机结合起{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.把发挥祖国内地坚强后盾作用和提高港澳自身竞争力有机结合起来</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;26. 坚定文化自信，是事关国运兴衰，事关文化安全、事关民族精神独立性的大问题。坚定中国特色社会主义道路自信、理论自信、制度自信，说到底就是要坚定文化自信。讲文化自信，我们有充足的理由和充足底气，因为中国特色社会主义文化(){'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.源自于博大精深的中华优秀传统文化{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.承继于激昂向上的革命文化{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.熔铸于生机勃勃的社会主义先进文化{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.植根于中国特色社会主义伟大实践</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;27. 1927年10月,毛泽东率领湘赣边界秋收起义的工农革命军，开始创建以宁冈为中心的井冈山农村革命根据地，走农村包围城市、武装夺取政权的革命新道路。毛泽东确定在井冈山建立根据地，是因为这个地区(){'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.有较好的群众基础{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.地势险要且易守难攻{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.易于部队筹款筹粮{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.敌人的统治力量比较薄弱</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;28. 1949年10月1日，首都军民30万人齐集北京天安门广场，欢庆中华人民共和国的诞生。中华人民共和国的成立，标志着(){'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.新民主主义革命取得了基本的胜利{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.半殖民地半封建社会的结束{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.中国共产党的地位发生了根本性的变化{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.社会主义基本制度的确立</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;29. 我国经济体制的改革首先在农村取得突破性进展。党的十一届三中全会曾指出：“我国农业近二十年来的发展速度不快，它同人民的需要和四个现代化的需要之间存在着极其殴打其的矛盾。”当时我国农业和农村经济发展面临的主要问题有{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.农民的温饱问题尚未完全解决{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.农村的土地改革尚未完成{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.人民公社体制亟待改革{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.乡镇企业管理体制亟待改革</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;30. 2018年4月，十三届全国人民代表大会第一次会议通过《宪法修正案》。把国家倡导的社会主义核心价值观正式写入宪法，进一步凸显了社会主义核心价值观的重大意义。社会主义核心价值观是{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.坚持和发展中国特色社会主义的价值遵循{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.构建人类命运共同的行动指南{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.增进社会团结和谐的最大公约数{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.提高国家文化软实力的迫切要求</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;31. 中国特色社会主义法制道路的一个鲜明特点，就是坚持依法治国和以德治国相结合。法制和德治，是治国理政不可或缺的两种方式。这是因为法制和德治{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.发挥作用方式东同{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.调整范围不同{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.所处地位不同{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.实现途径不同</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;32. 2018年6月22日至23日，中央外事工作会议在北京召开，习近平总书记在会上发表重要讲话，强调要深入分析世界转型过渡期国际形势的演变规律，准确把握历史交汇期，我国外部环境的基本特征，统筹谋划和推进对外工作，其基本要求是(){'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.既要把握国际环境总体稳定的大势，又要重视国际安全挑战错综复杂的局面{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.既要把握经济全球化持续发展的大势，又要重视世界经济格局深刻演变的动向{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.既要把握世界多极化加速推进的大势，又要重视大国关系深入调整的态势{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.既要把握各种文明交流互整的大势，又要重视不同思想文化相互激荡的态势</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;33. 2018年是中日和平友好条约缔结40周年，日本首相安倍晋三于10月25日至27日对中国进行正式访问。习近平主席、李克强总理分别与其进行了会晤、会谈。中日双方就改善、发展两国关系及共同关心的国际和地区问题交换了意见，在政治、经济、安全及其他国际问题上达成诸多共识，取得务实成果，这些成果主要有(){'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.双方一致确认将恪守中日四个政治文件的各项原则{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.签署了中日两国海上搜寻救助合作协定{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.签署了中日双边本币互换协议{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.双方一致同意将2019年作为“中日青少年交流促进年”</Text>

                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16, fontWeight: 'bold' }}>三、分析题：34～38小题，每小题10分，共50分。要求结合所学知识分析材料并回答问题。</Text>
                        <View>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;34.结合材料回答问题：</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;材料1：</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1978年，中国正徘徊在一个新的十字路口，中国发展的逻辑是什么，中国现代化到底要通过何种方式抵达?自近代以来盘桓在中华民族头上的问题，再次成为时代之问。
                                {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;时间定格在这一刻。中国上百台印刷机转动，不同的报头之下，出现了同一个标题;校园的阅报栏前挤满年轻的面孔，无数学子闻风而至，阅读同一篇文章;千百人重新铺展稿纸，千百支笔重新抖落尘埃，准备书写同一个主题;被一种沉重的沉默笼罩的中国大地，随着第一声响动，忽然爆发出轰鸣。
        　                      {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这是1978年5月，一篇名为《实践是检验真理的唯一标准》的特约评论员文章在《光明日报》一版刊发，掀起了席卷中国的真理标准大讨论，成为那支撬动改革开放的哲学杠杆。
        　                      {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这场讨论，成为拨乱反正、改革开放的哲学宣言，不但为十一届三中全会的召开凝聚了思想共识，而且确立了中国改革进程的理论原则和思维模式。
        　                      {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这场讨论，推动了马克思主义中国化的进一步深入，既成为改革开放的前奏，也成为中国特色社会主义的前奏，使中国在道路探索上实现了理论创新与实践检验的良性互动。
        　                      {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这场讨论，成为中国社会思想现代化的重要一环，解放思想的力量、实事求是的精神，强有力地推动着中国由传统型社会向现代型社会演进，从封闭型社会向开放型社会过渡。
                            </Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;摘编自《光明日报》(2018年5月11日)</Text>

                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;材料2：</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;实践没有止境，理论创新也没有止境。世界每时每刻都在发生变化，中国也每时每刻都在发生变化，我们必须在理论上跟上时代，不断认识规律，不断推进理论创新、实践创新、制度创新、文化创新以及其他各方面创新。
                                {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;时代是思想之母，时间是理论之源。只要我们善于聆听时代声音，勇于坚持真理，修正错误，二十一世纪中国的马克思主义一定能够展现出更强大、更有说服力的真理力量!
                            </Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>摘自习近平《决胜全面建成小康社会夺取新时代中国特色社会主义伟大胜利——在中国共产党第十九次全国代表大会上的报告》</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;(1)如何理解“实践是检验真理的唯一标准”?(5分)</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;(2)从实践标准的绝对性与相对性的关系，谈谈你对“实践没有止境，理论创新也没有止境”的认识。(5分)</Text>
                        </View>
                        <View>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;35.结合材料回答问题：</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;材料1：</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;深圳故事始于改革开放之初。当时，以时任广东省委第一书记习仲勋同志为代表的改革先行者向中央提出创办对外加工贸易区的设想建议，邓小平同志审时度势，创造性地提出“可以划出一块地方，就叫做特区”。1980年，深圳蛇口工业区一声炮响，拉开了经济特区建设大幕。特区建立前，深圳还只是一个仅有两条小巷和一条200米长小街的小渔村;今天的深圳，已是一座充满魅力、动力、活力和创新力的现代化国际化大都市，创造了工业化、城市化、现代化发展的奇迹，被誉为中国改革开放的“样板间”。如果把视线聚焦到党的十八大以来这五年多，深圳故事更是精彩纷呈。五年来，深圳扎实践行习近平新时代中国特色社会主义思想，不断在高质量发展中发力，发展动力持续增强，百姓福祉稳步改善，城市文明进一步提升，绿色发展特质更加凸显。在中国特色社会主义新时代，深圳依然是改革开放的排头兵。
                                {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;作为我国改革开放的重要起源地和中国特色社会主义的忠实践行地，深圳故事连着中国故事，深圳的成就是中华民族实现从站起来到富起来、并迎来从富起来到强起来伟大飞跃的生动缩影。改革开放40年来，接可比价格计算，我国国内生产总值年均增长约9.5%，7亿多人成功脱贫;中国成为世界第二大经济体，连绩多年对世界经济增长贡献率超过30%，特别是党的十八大以来，以习近平同志为核心的党中央以前所未有的决心和力度，把改革开放提升到新的战略高度，推动党和国家事业取得历史性成就、发生历史性变革。40年的辉煌成就充分证明，改革开放是决定当代中国命运的关键抉择，是当代中国发展进步的活力之源。
                            </Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;摘编自《人民日报》(2018年4月10日、5月21日)</Text>

                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;材料2：</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2012年12月，习近平总书记在党的十八大后首次离京考察，首站即到改革开放中得风气之先的深圳，现场回顾中国改革开放的历史进程，宣示继续推进改革开放的坚定信念，他指出，改革开放是我们党的历史上一次伟大觉醒，正是这个伟大觉醒孕育了新时期从理论到实践的伟大创造，现在我国改革开放已进入攻坚期和深水区，我们必须以更大的政治勇气和智慧，不失时机深化重要领域改革。
                                {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;时隔近6年，习近平总书记予2018年10月再次南下广东，他考察调研时指出，党的十八大后我考察调研的第一站就是深圳，改革开放40周年之际再来这里，就是要向全世界宣示中国改革不停顿，开放不止步，我们要不忘改革开放初心，认真总结改革开放40年成功经验，提升改革开放质量和水平，他反复强调，进入新时代，国际国内形势发生广泛而深刻变化，改革发展面临着新形势任务新挑战，必须以改革开放的眼光看待改革开放，抓住机遇、迎接挑战，高举新时代改革开放旗帜，继续全面深化改革，全面扩大开放。

                            </Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>摘编自《人民日报》(2018年10月26日)，人民网(2018年10月26日)</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(1)为什么说“改革开放是决定当代中国命运的关键抉择”?(5分)</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(2)如何理解进入新时代必须“以改革开放的眼光看待改革开放”?(5分)</Text>
                        </View>
{/* 36 */}
                        <View>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;36.结合材料回答问题：</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;材料1：</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;马克思主义不仅深刻改变了世界，也深刻改变了中国，中华民族在几千年的历史进程中创造了灿烂的中华文明，为人类文明进步作出了重大贡献。1840年鸦片战争以后，西方列强凭着坚船利炮野蛮轰开了中国的大门，中华民族陷入内忧外患的悲惨境地。
                                {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;近代以后，争取名族独立、人民解放和实验国家富强，人民幸福就成为中国人民的历史任务。在旧式的农民战争走到尽头，不触动封建根本的自强运动和改良主义屡屡碰壁，资产阶级革命派领导的革命和西方资本主义的其它种种方案纷纷破产的情况下，十月革命一声炮响，为中国送来了马克思列宁主义，给苦苦探寻救亡图存出路的中国人民指明了前进方向，提供了全新选择。
        　                      {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;中国共产党诞生后，中国共产党人把马克思列宁主义基本原理同中国革命和建设具体实际结合起来，团结带领人民经过长期奋斗，完成新民主主义革命和社会主义革命，建立起中华人民共和国和社会主义基本制度，进行了社会主义的艰辛探索，实现了中华民族从东亚病夫到站起来的伟大飞跃。
        　                      {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;改革开放以来，中国共产党人把马克思列宁主义基本原理同中国改革开放的具体实际结合起来，团结带领人民进行建设中国特色社会主义新的伟大实践，使中国大踏步赶上了时代，实现了中华民族从站起来到富起来的伟大飞跃。
                            </Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;材料2：</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;经过长期努力，中国特色社会主义进入了新时代，这是我国发展新的历史方位。
                                {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;中国特色社会主义进入新时代，意味着近代以来久经磨难的中华民族迎来了从站起来、富起来到强起来的伟大飞跃，迎来了实现中华民族伟大复兴的光明前景，意味着科学社会主义在二十一世纪的中国焕发出强大生机活力，在世界上高高举起了中国特色社会主义伟大旗帜，意味着中国特色社会主义道路、理论、制度、文化不断发展，拓展了发展中国家走向现代化的途径，给世界上那些希望加快发展又希望保持自身独立性的国家和民族提供了全新选择，为解决人类问题贡献了中国智慧和中国方案。
                            </Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>摘自习近平《决胜全面建成小康社会度夺取新时代中国特色社会主义伟大胜利——在中国共产党第十九次全国代表大会上的报告》</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;(1)如何理解马克思列宁主义给中国人民“指明了前进方向，提供了全新选择”?(5分)</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;(2)中华民族实现了从东亚病夫到站起来，从站起来到富起来的伟大飞跃，并迎来了从富起来到强起来的伟大飞跃说明了什么?</Text>
                        </View>

                        <View>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;37.结合材料回答问题：</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2018年9月30日，在我国第五个烈士纪念日到来之时，党和国家领导人同各界代表向天安门广场人民英雄纪念碑敬献花篮，表达着13亿多人民对英烈的深切缅怀和崇高敬意。
                                {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;人民英雄纪念碑基座上镶嵌的8幅革命历史浮雕，镌刻了从虎门销烟到解放战争时期为争取民族独立和人民幸福而牺牲的人民英雄。这一纪念中国革命胜利的全景图，凝聚了无数先烈的铁骨精魂，更象征着中国人民不忘历史、砥砺奋进的民族精神。
                                {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;欲知大道，必先为史。习近平总书记指出:“历史是一面镜子。以史为鉴，才能避免重蹈覆辙。对历史，我们要心怀敬畏、心怀良知。历史无法改变，但未来可以塑造。”
        　                      {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;“天地英雄气，千秋尚凛然。”一个有希望的民族不能没有英雄，一个有前途的国家不能没有先锋。英雄烈士的事迹和精神是中华民族共同的历史记忆和宝贵的精神财富。
        　                      {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;一段时间以来，历史虚无主义思潮沉渣泛起。社会上质疑英雄烈士、歪曲历史的现象和行为不时出现，造成了极其恶劣的社会影响，引起了社会舆论的高度关注。
        　                      {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在社会各界不断的呼声中，2018年4月27日，十三届全国人大常委会第二次会议全票表决通过了《中华人民共和国英雄烈士保护法》，英雄烈士的姓名、肖像、名誉、荣誉受法律保护，禁止歪曲、丑化、亵渎、否定英雄烈士的事迹和精神，宣扬、美化侵略战争和侵略行为将被依法惩处直至追究刑责。
        　                      {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;英雄烈士保护法生效一个月后，最高人民法院、最高人民检察院相继下发通知要求依法惩处侵害英雄烈士权益、形象等违法行为;文化和旅游部部署县查处抹黑英雄烈士等英雄烈士等违法违规经营行为;各主要互联网文化单位纷纷采取措施清理违规信息、视频和账号;多地检察机关针对侵害英雄烈士名誉等问题依法启动诉讼程序。
        　                      {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;“昨天你用生命捍卫我我们，今天我们用法律保护你。”网友真挚的话语道出了人们对英雄烈士的敬意和爱戴。
        　                      {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;从设立烈士纪念日“立大德于社会”，到缅怀英雄烈士仪式“扬大义于国家”，再到制定英雄烈士保护法“布大信于天下”，一系列致敬英烈、崇尚英雄的国家行动，筑起了民族复兴征程的闪亮灯塔。
                            </Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>摘编自(光明日报》(2018年4月6日)，《人民日报》(2018年6月13日、10月1日等)</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;(1)如何理解“英雄烈士的事迹和精神是中华民族共同的记忆和宝贵的精神财富”?(5分)</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;(2)从法律社会作用的角度，分析为什么要用法律的名义保护英雄烈士?(5分)</Text>
                        </View>

                        <View>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;38.结合材料回答问题：</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2018年，中国相继举办了四大主场外交活动:博鳌亚洲论坛年会、上海合作组织峰会、中非合作论坛峰会、中国国际进口博览会。习近平悉数出席并作重要主旨演讲，深入阐述了构建人类命运共同体重要思想，为世界发展提供了中国智慧、中国方案，产生了日益广泛而深远的国际影响。主场外交是党的十八大以来中国外交一大亮点，已成为全新的“中国名片”。
                                {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;坚持开放共赢共创美好未来
                                {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;欲知大道，必先为史。习近平总书记指出:2018年4月10日，习近平在博鳌亚洲论坛年会开幕式上发表题为《开放共创繁荣创新引领未来》的主旨演讲，强调“中国开放的大门不会关闭，只会越开越大!”“让我们坚持开放共赢，勇于变革创新，向着构建人类命运共同体的目标不断迈进，共创亚洲和世界的美好未来!”
        　                      {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;“天地英雄气，千秋尚凛然。”一个有希望的民族不能没有英雄，一个有前途的国家不能没有先锋。英雄烈士的事迹和精神是中华民族共同的历史记忆和宝贵的精神财富。
        　                      {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;一段时间以来，历史虚无主义思潮沉渣泛起。社会上质疑英雄烈士、歪曲历史的现象和行为不时出现，造成了极其恶劣的社会影响，引起了社会舆论的高度关注。
        　                      {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在社会各界不断的呼声中，2018年4月27日，十三届全国人大常委会第二次会议全票表决通过了《中华人民共和国英雄烈士保护法》，英雄烈士的姓名、肖像、名誉、荣誉受法律保护，禁止歪曲、丑化、亵渎、否定英雄烈士的事迹和精神，宣扬、美化侵略战争和侵略行为将被依法惩处直至追究刑责。
        　                      {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;英雄烈士保护法生效一个月后，最高人民法院、最高人民检察院相继下发通知要求依法惩处侵害英雄烈士权益、形象等违法行为;文化和旅游部部署县查处抹黑英雄烈士等英雄烈士等违法违规经营行为;各主要互联网文化单位纷纷采取措施清理违规信息、视频和账号;多地检察机关针对侵害英雄烈士名誉等问题依法启动诉讼程序。
        　                      {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;面向未来，习近平为各国携手构建新型国际关系、构建人类命运共同体进一步明确了路径:相互尊重、平等相待;对话协商、共担责任;同舟共济、合作共赢;兼容并蓄、和而不同;敬畏自然、珍爱地球。
        　                      {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;弘扬“上海精神”增添时代内涵
        　                      {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2018年6月10日，上海合作组织扩员后的首次峰会在青鸟举行，习近平在题为《弘扬“上海精神”构建命运共同体》的重要讲话中强调，“上海精神”是上合组织的灵魂和共同财富，必须加以坚持和弘扬，习近平提出的发展观、安全观、合作观、文明观和全球治理观，为“上海精神”增添了新的时代内涵，赋予上合组织新的历史使命。
        　                      {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;习近平呼吁各方齐心协力构建命运共同体，经各方协商一致，“确定人类命运共同体的共同理念”被写入青岛宣言，成为上合组织8国最重要的政治共识和努力目标。
        　                      {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;中非携手同心共同促进发展
        　                      {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2018年9月3日，习近平在中非合作论坛北京峰会发表题为《携手共命运同心促发展》的主旨讲话，对中非特色鲜明的合作共赢之路，做出清晰概括：真诚友好、平等相待，义利相兼，以义为先;发展为民，务实高效，开放包容、兼收并蓄。习近平提出要携手打造责任共担，合作共赢、幸福共享、文化共兴，安全共筑、和谐共生的中非命运共同体;在中非合作计划全面落实的基础上，未来三年和今后一段时间重点实施“人大行动”为构建更加紧密的中非命运共同体指明了行动路径，为推动构建人类命运共同体树立了典范。
        　                      {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;扩大对外开放机遇世界共享
        　                      {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2018年11月5日，首届中国国际进口博览会在上海隆重举行。习近平《共建创新包容的开放型世界经济》的主旨演讲中强调更高水平的脚步不会停滞!中国推动建设开放型世界经济的脚步不能停滞!中国推动构建人类命运共同体的脚步不会停滞!习近平同时强调，中国国际进口博览会不是中国的独唱，而是各国合唱，中国将在激发进口潜力，持续放宽市场准入，营造国际一流营商环境，打造对外开放新高地，推动多边和双边合作深入发展等方面加大进一步开放的力度。与世界各国向着构建人类命运共同体目标不懈奋进，开创人类更加美好的未来。
                            </Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;摘编自《人民日报》</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;(1)为什么说主场外交已成为全新的“中国名片”?(4分)?(5分)</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;(2)中国主场外交贯穿着怎么样的外交关系理念?中国为世界发展提供了哪些智慧和方案?(6分)</Text>
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
