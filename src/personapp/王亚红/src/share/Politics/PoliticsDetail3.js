import React, { Component } from 'react'
import { Text, View, ScrollView, Dimensions,StyleSheet } from 'react-native'
import { Accordion } from '@ant-design/react-native';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class PoliticsDetail3 extends Component {
    constructor() {
        super();
        this.state = {
            todo: ['答案'],
            activeSections: [],
            todo: [{
                header: '参考答案',
                content1: '一、单项选择题：',
                content2: '1. 【答案解析】本题正确选项为 A 选项，在纪念马克思诞辰200周年讲话当中，明确提出马克思恩格斯领导创建了世界上第一个无产阶级政党--共产主义者同盟，领导了世界上第一个国际工人组织--国际工人协会，热情支持世界上第一次工人阶级夺取政权的革命--巴黎公社革命，满腔热情、百折不挠推动各国工人运动发展。正确答案为A选项。',
                content3: '2. 【答案解析】本题正确选项为 A 选项，橘生南则为橘，与北则为枳，体现在不同地点环境不一样所产生的结果不同。根据题干正确答案为A。',
                content4: '3. 【答案解析】本题正确选项为 A 选项，社会基本矛盾是对社会历史发展起根本推动作用的矛盾。社会基本矛盾包含两对，生产力和生产关系、经济基础和上层建筑，而两对矛盾当中更为根本的为"生产力和生产关系"之间的矛盾。',
                content5: '4. 【答案解析】本题正确选项为 B 选项。此题属于知识点记忆题。以私有制为基础的商品经济中，商品生产者的劳动具有两重性：既是具有社会性质的社会劳动，又是具有私人性质的私人劳动。私人劳动和社会劳动的矛盾构成私有制商品经济的基本矛盾。正确答案为B选项。',
                content6: '5. 【答案解析】本题正确选项为 C 选项，知识点记忆题。坚持和发展中国特色社会主义，是改革开放以来我们党全部理论和实践的鲜明主题，也是习近平新时代中国特色社会主义思想的核心要义。正确答案为C选项。',
                content7: '6. 【答案解析】本题正确选项为 C 选项，总体国家安全观，是指坚持国家利益至上，以人民安全为宗旨，以政治安全为根本，统筹外部安全和内部安全、国土安全和国民安全、传统安全和非传统安全、自身安全和共同安全，完善国家安全制度体系，加强国家安全能力建设，坚决维护国家主权、安全、发展利益。正确答案为C选项。',
                content8: '7. 【答案解析】本题正确选项为 B 选项，"坚持党要管党、全面从严治党"是新时代党的建设的根本方针，正确答案为B选项。',
                content9: '8. 【答案解析】本题正确选项为 D 选项，实施乡村振兴战略的根本目的是推进农业农村现代化，解决"三农"问题，提升农民的获得感。正确答案为D选项。',
                content10: '9. 【答案解析】本题正确选项为 A 选项，戊戌变法要求通过变法，发展资本主义，一定程度上反映了资产阶级的政治经济诉求，在经济和政治上一定程度冲击了封建制度，但是由于其不彻底性和妥协性，不敢彻底否定封建主义。正确答案为A选项。',
                content11: '10. 【答案解析】本题正确选项为 C 选项，在纪念刘少奇同志诞辰120周年座谈会上的讲话习近平主席提出，刘少奇同志根据党的指示回国，参与领导闻名全国的安源路矿工人大罢工，这是中国共产党第一次独立领导并完全取胜的斗争。正确答案为C选项。',
                content12: '11. 【答案解析】本题的正确选项为 B 选项，抗日战争时期，中华民族与日本帝国主义的矛盾上升为主要矛盾，中国共产党从民族大义出发，为了团结国民党共同抗日采取和平的方式解决西安事变。正确答案为B选项。',
                content13: '12. 【答案解析】本题正确选项为 D 选项，1945年，抗日战争胜利后，中国广大人民热切希望实现和平、民主，中国共产党从全国人民的利益和愿望出发，毛泽东毅然赴重庆与国民党进行谈判。正确答案为D。',
                content14: '13. 【答案解析】本题正确选项为 B 选项，上层建筑为经济基础服务，我国是社会主义国家，我们所培养的人才是为社会主义所服务的，我国的教育应该培养成为社会主义的建设者和接班人。正确答案为B选项。',
                content15: '14. 【答案解析】本题正确选项为 D 选项，伟大是对人生价值的崇高评价，评价人生价值的正确标准是从个人为他人所做的贡献和服务，人生价值强调社会价值的重要性但并不否定自我价值。正确答案为D选项。',
                content16: '15. 【答案解析】本题正确选项为 C 选项，时政热点。白皮书指出，中美两国经济发展阶段、经济制度不同，存在经贸摩擦是正常的，关键是如何增进互信、促进合作、管控分歧。正确答案为C选项。',
                content17: '16. 【答案解析】本题正确选项为 D 选项，时政热点。2018年4月27日，韩国总统文在寅与朝鲜最高领导人金正恩在韩朝边境板门店"和平之家"举行首脑会谈后签署的联合声明《为实现半岛和平、繁荣和统一的板门店宣言》，又称《板门店宣言》。正确答案为D。',
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
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. 马克思主义的产生具有深刻的社会根源、阶级基础和思想渊源,其创始人马克思1818年5月5日出生在德国特利尔城的一个律师家庭,恩格斯1820年11月28日出生在德国巴门市的一个工厂主家庭,他们放弃了舒适安逸的生活,毅然选择了充满荆鯨坎坷的革命道路,创立了科学社会主义,马克思、恩格斯之所以能够创立科学社会主义，主要是因为{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.德国是当时最为发达的资本主义国家{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.他们对时代有着超越常人的认知能力{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.社会历史条件和个人努力的相互作用{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.他们拥有优良的家庭背景和教育经历</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. “马者所以命形也;白者所以命色也。命色者非命形也,故曰白马非马。”从唯物辩证法的观点看,“白马非非马”这一命题的错误在于{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.颠倒了事物形态和功能之间的关系{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.割裂了事物共性和个性之间的联系{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.混淆了事物内容和形式之间的区别{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.模糊了事物本质和现象之间的联系</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. 坚持以人民为中心,就必须坚持人民主体地位,坚持立党为公、执政为民,践行全心全意为人民服务的根本宗旨,把党的群众路线贯彻到治国理政全部活动之中,把人民对美好生活的向往作为奋斗目标。“坚持以人民为中心”的理论基础是唯物史观关于{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.总体的人在总体的历史过程中的主体地位的原理{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.人的本质是一切社会关系的总和的原理{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.人民群众的活动受到社会历史条件制约的原理{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.人民群众是历史的创造者的原理</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4. 资本论(德文版)第一卷于1867年9月在汉堡出版,其影响力历经150年风雨而不衰,至今对我们分析、理解现实经济问题依然具有很强的指导意义。马克思主义政治经济学的理论十分丰富,其中“理解政治经济学的枢纽”的理论是{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.剩余价值理论{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.价值规律理论{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.劳动二重性理论{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.商品二因素理论</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5. 经济建设是全党的中心工作,坚持以经济建设为中心不动摇,就必须坚持以经济体制改革为重点不动摇。当前,我国深化经济体制改革的重点是{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.建立更加有效的区域协调发展新机制{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.扩大优质增量供给,实现供需动态平衡{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.加快培育国际经济合作和竞争新优势{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.完善产权制度和要素市场化配置"</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6. 实现人民民主，保证人民当家做主，实现形式是丰富多样的。经过长期探索，我国在通过依法选举让人民的代表来参与国家生活和社会生活管理的同时,找到了一种保证人民在日常政治生活中有广泛持续深入参与权力的,特有民主形式。这一特有民主形式是{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.竞争性民主{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.协商民主{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.票决民主{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.判断民主</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7. 党的十八大以来,我国大力实行创新驱动发展战略,加快创新型国家建设步伐,成果丰硕,天宫、蛟龙、天眼、悟空、墨子。大飞机等重大科技成果相继问世。我国实施创新驱动发展战略所坚持的方针是{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.原始创新、集成创新、引进消化吸收再创新{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.企业为主体、市场为导向、产学研相结合{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.自主创新、重点跨越、支撑发展、引领未来{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.集中力量、重点突破、实现跨越式发展</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8. 解决台湾问题,实现祖国完全统一,是全体中华儿女共同愿望,是中华民族根本利益所在,党的十八大以来,在习近平同志为核心的党中央坚强领导下,在两岸同胞共同努力下,两岸关系取得重要积极成果，两岸关系和平发展的政治基础是{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.深化两岸利益融合,共创两岸互利双嬴,增进两岸同胞{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.相互尊重,求同存异{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.增强两岸同胞的民族认同、文化认同、因家认同{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.坚持“九二共识”反对“台独”</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9. 近代中国半殖民地半封建社会的矛盾,呈现出错综复杂的状况。其中,贯穿整个中国半殖民地半封建社会的时钟,并对中国近代社会的发展变化起着决定性作用的最主要矛盾是{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.帝国主义和中华民族的矛盾{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.无产阶级和资产阶级的矛盾{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.封建主义与人民大众的矛盾{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.农民阶级与地主阶级的矛盾</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10. 19世纪60年代到90年代,清朝统治阶级内部的洋务派兴办近代企业,建立新式海陆军,创办新式学堂派遣留学生。洋务派兴办洋务新政的主要目的是{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.迎合帝国主义{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.维护封建统治{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.对抗顽固派{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.发展资本主义</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11. 中国共产党在领导人民革命的过程中,积累了丰富的经验,锻造出了有效的克敌制胜的武器。武装斗争就是中国共产党在中国革命中战胜敌人的重要法宝之一,其实质是{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.无产阶级领导的反帝国主义战争{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.资产阶级领导的反封建战争{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.工农联合的反军阀战争斗{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.工人阶级领导的农民战争</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;12. 20世纪40年代前期,为了提高广大党员的思想建设水平中国共产党在全觉范围内开展了一场整风运动{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.反对主观主义以整顿学风{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.反对宗教主义以整顿觉风{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.反对党八股以整顿文风{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.反对主观主义以整顿学风</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;13. 社会公德是指人们在社会公共生活和社会交往中要遵守的行为准则,利益公共秩序、社会和谐稳定的起码要求。社会公德{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.遵纪守法{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.助人为乐{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.爱护公物{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.文明礼貌</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;14. 习近平总书记在《关于中共中央关于全面推进》{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.维护社会公平正义的决定因素{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.社会公正的最终目标{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.维护社会公平正义的最后一道防线{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.社会公正的唯一标准</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;15. 2017年中央一号文件继续聚焦“三农”工作,提出新的历史阶段我国农业农村工作的主线是{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.深入推进农业供给侧结构性改革{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.发展农村新产业新形态{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.确保国家粮食安全{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.改善找农业生产环境</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;16. 2017年12月1日,中国共产党与世界政党高层对话在北京开幕。来自120多个国家近300个政党和政治组织的领导人分享治党治国经验,共商合作发展大计,本次对话会的主题是{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.为完善全球经济治理贡献智慧和力量{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.构建人类命运共同体,共同建设美好世界{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.从严治党执政党的使命{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.中国改革:执政党的角色</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16, fontWeight: 'bold' }}>二、多项选择题：17～33题，每小题2分，共34分。下列每题给出的四个选项中，至少有两个选项是符合题目要求的。</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;17. 2017年6月,我国科学家利用“墨子号”量子科学实验卫星在国际上率先成功实现了千公里级的星地双向量子纠缠分发,“量子纠缠”就是两个或多个粒子共同组成的量子状态,无论粒子之间相隔多远,测量其中一个粒子必然会影响其他粒子。“量子纠缠”现象虽然未被完全认知,但它仍然能够说明(){'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.世界的真正统一性在于它的物质性{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.事物联系的主观性和偶然性{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.事物联系的复杂性和多样性{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.物质世界联系的客观性和普遍性</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;18. 社会形态的变更其具有客观性和必然性,但这并不否定人们历史活动的能动性,并不排斥人们在遵循社会发展规律的基础上,带有某种社会形态的历史选择性。人们历史活动的能动性和选择性主要体现在(){'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.社会发展的客观过程由每一个参与历史活动的个人的主观意志所决定{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.社会形态更替的过程是主体能动性与客观规律性相统一的过程{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.资本家对工人的剥削程度{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.社会发展的客观必然性为人们的历史选择题供的基础、范围和可能性空间</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;19. 为了追逐最大化的利润,咱们家总是想方设法地进行资本积累,而资本积累的源泉是剩余价值。一般而言,资本积累规模的大小取决于(){'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.所用费用及所费资本之间的差距{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.劳动生产率的高低{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.资本家垫付资金的大小{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.不从事直接生资本家对工人的剥削程度产的银行资本家所获得的利润总是低于平均利润</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;20. 与第二次世界大战之前的资本主义相比,当代资本主义生产关系中的社会阶层、阶级结构发生了很多新的变化,主要表现在(){'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.知识型和服务型劳动者数量随科技根本不断深入而持续地増加{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.资本家由从前的直接生产经营者变成了以剪息票为生的食利者{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.职工持股和参与决策使得劳动者成为资本家集团的重要力量{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.资本家对工人的剥削程度</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;21. 列宁指出:“一切民族都将走向社会主义,这是不可避免的。但是一切的民族的走法却不会完全一样在民主的这种形式或那种形式上,在无产阶级专政的这种或那种形态上,在社会生活各方面稍微改造的速度上,每个民族都会有自己的特点。”这一论述从历史唯物主义的高度介绍了各民族发展道路多样性的内涵。下列关于受力发展道路多样性特点的正确观点有(){'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.时代和实践的不断是造成社会主义发展道路多样性的现实原因{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.历史文化传统的差异性是造成不同国家社会主义发展道路多样性的重要条件{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.各国民族因素和地理环境的不同是造成社会主义发展道路多样性的决定因素{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.各国生产力发展状况和社会发展阶段决定了社会主义发展道路具有不同的特点</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;22. 从现在到2020年,是全面建成小康社会的决胜期,也是确保实现第一个百年目第二个百年目标打好基础的关键阶段,而对各种严竣复杂的挑战,如期全面建成小康社会必须打好的攻坚战有{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.防范化解重大风险{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.污染防治{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.产业结构调整{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.精准扶贫</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;23. 积极发展混合所有制经济,是完善我国基本经济制度的重要途径。2017年9月11日,我国首条由民营资本控股的高铁一—杭绍台高铁项目在浙江杭州签约。该项目预计总投资超过400亿元,其中民营联合体占比51%。,中国铁路总公司占比15%,各级地方政府合计占比34%。本项目坚持风险分担、利益共享原则。构建政府和社会资本都能接受的投资回报机制。这是我国发展混合所有制经济的一个典型案例。发展混合所有制经济有利于{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.改善企业股杈结构和公司治理结构{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.各种所有制资本、取长补短、互相促进、共同发展{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.发挥国有资本的带动力和影响力{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.各种所有制企业公平参与市场竞争</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;24. {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.完善部门职责,分散交叉的环保监督体系{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.完善生态环境损害责任终身追究制度{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.完善生态环境保护管理制度{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.完善经济社会发展考核评价体</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;25. 党的十九大提出以党的政治建设为统领,全面推进党的政治建设、思想建设组织建设、作风建设、纪律建设，把制度建设贯穿其中，并特别强调把党的政治建设摆在首位。之所以要把党的政治建设摆在首位，是因为{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.旗帜鲜明讲政治是我们当党作为马克思主义政党的根本要求{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.坚定政治立场是党的根本宗旨{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.政治建设是党的根本性建设,决定党的建设方向和效果{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.政治属性是党政的第一属性</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;26. 全国提高对外开放水平,需要实施更为主动的开放战略。近年来,我国坚持引进来和走出去并重,全面开放进一步深化。据统计,2016年中国企业对外直接投资1832亿美元,连续两年位列世界第二;中国境外企业销售额1.5万亿美元,向所在国缴纳税费400亿元,雇佣外方员工150万人:我国高技术服务业实际使用外资超过955亿元人民币,同比增长86%,在全国引资东道主中排名第三位,高附加值以及服务行业的外国直接投资流入量持续増长,这表明{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.我国对外直接投资已经完全转向高端{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.我国防范经济风险和外部冲击的能力已经形成{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.我国吸引外资的结构和质量正在不断优化{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.我国国际投资合作水平进一步提高</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;27. 忠诚于党、听党指挥是我军的光荣传统,1929年12月下旬,红四军党的第九次代表大会在福建上杭县古田村召开,这次会议史称古田会议。会议通过的毛泽东起草的决议案,确立了思想建党,政治建军原则，规定红军是一个执行革命的政治任务的武装集团,必须{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.实行全国军事的总动员{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.担负打仗、筹款和做群众工作的任务{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.加强政治工{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.绝对服从共产党的领导</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;28. 抗日民主根据地是认真贯彻和实现中国共产党全面抗战路线,坚持抗战和争取胜利的坚强阵地,中国共产党高度重视抗日民主根据地的政权建设。其主要举措有{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.在少数民族聚居地区试行民族区域自治{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.各级抗日民主政权机构领导人通过人民选举产生{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.实行工农兵代表大会制度{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.抗日民主政府在工作人员分配上实行“三三制”原则</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;29. 从1953年开始,在过渡时期总路线的指引下,中国共产党领导人民开始进行有计划的社会主义建设和有系统的社会主义改造,当时中国之所以要着力进行和可能进行社会主义改造,主要是因为{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.资本主义国家的封锁和遏制,社会主义国家的同情和援助{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.资本主义经济力量弱小,发展困难{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.对个体农业进行社会主义改造,是实现国家工业化的一个必要条件{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.社会主义性质的国营经济力量相对来说比较强大</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;30. “天下之事,不难于立法,而难于法之必行。”法律的生命力在于实施,法律的权威也在于实施,守法是法律实施和实现的基本途径。对守法的正确理解是{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.守法是遵守宪法和法律{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.守法是行使法定的权力,履行法定的义务{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.守法意味着一切组织和个人严格依法办事的活动和状态{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.守法的主体是一切组织和个人</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;31. 我国民法通则、合同法、物权法中,都有要求民事主体在进行民事活动时应当尊重社会公德,不得损害公共利益和经济秩序的內容,已经具有“公序良俗”的含义。2007年10月1日起施行的民法总则明确规定民事主体从事民事活动,不得违反法律,不得违背公序良俗”,从民法基本原则的高度确立了禁止违反序良俗的原则。这一规定体现了{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.道德为法律提供价值基础{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.对传统民法上的公序良俗原则的继承和发展{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.法律为道德建设提供制度保障{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.依法治国和以德治国的有机统一</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;32. 2017年4月1日,中共中央、国务院发布通知,决定设立河北雄安新区。这是以习近平同志为核心的党中央作出的一项重大的历史性战略选择,是千年大计、国家大事。雄安新区的设立有利于{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.集中疏解北京的非首都功能{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.调整优化京津冀城市布局和空间结构{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.探索沿海和内地对外开放新模式{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.探索人口经济密集地区优化开发新模式</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;33. 2017年9月5日,新兴市场国家与发展中国家对话会在金砖国家领导人厦门会晤期间举行。金砖国家领导人和受邀的埃及、几内亚、墨西哥、塔吉克斯坦、泰国五国领导人出席会议,开启了“金砖+”合作模式。其重大意义在于{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.全面提升了金砖机制的代表性和影响力{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.对南南合作形成了有机补充{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.进一步推动了全球治理体系的改善{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.破解了南北对话的僵局</Text>

                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16, fontWeight: 'bold' }}>三、分析题：34～38小题，每小题10分，共50分。要求结合所学知识分析材料并回答问题。</Text>
                        <View>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;34.回答问题：</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;(1)如何理解“抓住了主要矛盾,一切问题就迎刃而解”?(6分)</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;(2)根据矛盾主要方面在事物发展中的地位和作用原理,说明为什么“发展是解决我国一切问题的基础和关键”。(4分)</Text>

                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;35.回答问题：</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;(1)如何理解“中国特色社会主义进入新时代”?(5分)</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;(2)为什么说习近平中国特色社会主义新思想是马克思主义中国化最新成果?(5分)</Text>

                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;36.回答问题：</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;(1)为什么说中国共产党“应运而生”?(4分)</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;(2)中国共产党为什么能由“简”而“巨”,团结带领人民取得举世瞩目的伟大成就? (6分)</Text>

                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;37.回答问题：</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;(1)为什么说青年时代树立正确的理想信念能为人的一生提供“无穷的力量”?(6分)</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;(2)青年如何在中国梦的实践中放飞青春梦想?。(4分)</Text>

                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;38.回答问题：</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;(1)为何要引导经济全球化释放更多的“正面效应”?(5分)</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;(2)如何理解“一带一路”不是中国的独奏而是沿线国家的合唱？(5分)</Text>
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
