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
                content2: '1. 【答案解析】本题正确选项为 B 选项，本题考查的是认识过程的反复性。人们对于一个复杂事物的认识往往要经由感性认识到理性认识、再由理性认识到实践的多次反复才能完成。这是因为在认识过程中始终存在着主观和客观的矛盾。在自然科学的发展中，对于某一自然现象的认识，往往需要经过实践、认识、再实践、再认识的多次反复，才能形成比较科学的实验。爱迪生之所以说“我一次都没有失败”，是因为他把每一次实验都看作整个实践过程中的一部分。所以，B选项正确。',
                content3: '2. 【答案解析】本题正确选项为 C 选项，自然规律与社会规律之间有一定联系，也有区别。两者之间的区别主要表现在：自然规律是作为一种盲目的无意识的力量起作用，社会规律则是通过抱有一定目的和意图的人的有意识的活动实现的。在社会规律中，既存在客观制约主观的关系，又存在着主观制约客观的关系。自然规律只要具备了同样的客观物质条件就可以完全相同的形式反复出现，社会规律则是历史的，在不同的社会、国家、民族以及不同的历史阶段都有不同的表现形式。所以，C选项正确。自然规律和社会规律都具有重复性以及不以人的意志为转移的客观性，所以AB选项错误，从认识论的角度讲，自然规律和社会规律的认识难度无法比较，所以D选项错误。',
                content4: '3. 【答案解析】本题正确选项为 B 选项，社会再生产的核心问题是社会总产品的实现问题，即社会总产品的价值补偿和实物补偿问题。社会再生产顺利进行，要求生产中所耗费的资本在价值上得到补偿。产品积压意味着商品生产者没有完成商品交换，没有得到商品的价值，也就无法实现其生产过程中的价值补偿，所以导致企业倒闭。所以，B选项正确。',
                content5: '4. 【答案解析】本题正确选项为 C 选项，当代资本主义新变化的原因主要有：首先，科学技术革命和生产力的发展，是资本主义变化的根本推动力量；其次，工人阶级争取自身权利和利益斗争的作用，是推动资本主义变化的力量；再次，社会主义制度初步显示的优越性对资本主义产生了一定影响；最后，主张改良主义的政党对资本主义制度的改革，也对资本主义的变化发挥了重要作用。所以，C选项正确。',
                content6: '5. 【答案解析】本题正确选项为 B 选项，党的十八大对建设社会主义文化强国作出进一步部署，指出，建设社会主义文化强国，关键是增强全民族文化创造活力。因此，本题正确答案是选项B。',
                content7: '6. 【答案解析】本题正确选项为 A 选项，改革开放以来，全国和地方各级人民代表大会的代表实行普遍的差额选举。因此，本题正确答案是选项A。',
                content8: '7. 【答案解析】本题正确选项为 B 选项，在我国社会主义初级阶段，实行按生产要素分配的必要性和根据是我国社会存在着生产要素的多种所有制。因此，本题正确答案是选项B。',
                content9: '8. 【答案解析】本题正确选项为 A 选项，建设社会主义文化强国是实现中华民族伟大复兴的必然要求，其关键是增强全民族文化创造活力。因此，本题正确答案是选项A。',
                content10: '9. 【答案解析】本题正确选项为 D 选项，中华民国的成立没有给人们带来预期的民族独立和社会进步。一些先进的知识分子在反思中认识到要确实改造中国，必须进行一场思想启蒙运动。陈独秀等人认为，改造国民性是政治变革的前提。所以，D选项正确。',
                content11: '10. 【答案解析】本题正确选项为 A 选项，1924年1月，国民党一大在广州召开，大会通过的宣言对三民主义作出了新的解释。这个新三民主义的政纲同中共在民主革命阶段的纲领基本一致，因而成为国共合作的政治基础。所以，A选项正确。',
                content12: '11. 【答案解析】本题的确选项为 C 选项，1930年1月，毛泽东针对党内对时局估量的悲观思想，在《星星之火，可以燎原》一文中，回答了“红旗到底打得多久”的疑问。这篇文章初步形成了以乡村为中心、先在农村建立和发展红色政权，待条件成熟时再夺取全国政权的思想。所以，C选项正确。',
                content13: '12. 【答案解析】本题正确选项为 D 选项，开展批评与自我批评是中国共产党的三大优良作风之一。毛泽东曾对批评作了形象的比喻：“房子是应该经常打扫的,不打扫就会积满了灰尘；脸是应该经常洗的，不洗也就会灰尘满面。我们同志的思想，我们党的工作，也会沾染灰尘的，也应该打扫和洗涤。”因此，本题正确答案是选项D。',
                content14: '13. 【答案解析】本题正确选项为 A 选项，社会主义法治理念包含“依法治国、执法为民、公平正义、服务大局、党的领导”五个方面的基本内涵。这五个方面，是相辅相成、不可分割的有机整体，构成社会主义法治理念的完整理论体系。依法治国是党领导人民治理国家的基本方略，是社会主义法治的核心内容；执法为民是社会主义国家人民当家作主的必然反映，是社会主义法治的本质要求；公平正义是社会主义和谐社会的基本使命，是社会主义法治的价值追求；服务大局是党和国家根本任务的必然要求，是社会主义法治的重要使命；党的领导是我国宪法确定的基本原则，是社会主义法治的根本保证。因此，本题正确答案是选项A。',
                content15: '14. 【答案解析】本题正确选项为 A 选项，道德和法律维护社会秩序的两种基本手段。公共生活中的道德和法律所追求的目标是一致的，都是通过规范人们的行为来维护公共生活中的秩序，实现经济社会的稳定和发展。虽然道德和法律发挥作用的方式有所不同，但两者互为补充、相辅相成。道德规范作用的更好发挥，需要法律支撑；而法律作用的更好实现，则需要以道德建设为重要条件。因此，本题正确答案是选项A。',
                content16: '15. 【答案解析】本题正确选项为 C 选项',
                content17: '16. 【答案解析】本题正确选项为 C 选项',
                content18: '二、多项选择题：',
                content19: '17. 【答案解析】本题正确选项为 ABD 选项，物质的运动是绝对的、无条件的、永恒的。时间和空间是物质运动的存在形式，都具有客观实在性。物质总是在一定的时间和空间中进行的，没有离开物质运动的“纯粹”的时间和空间，也没有离开时间和空间的物质运动。具体物质形态的时空是有限的，而整个物质世界的时空是无限的，题干中长江的年龄和范围体现了时空的有限性。所以，ABD选项正确。C选项否认了时空的客观性，所以错误。',
                content20: '18. 【答案解析】本题正确选项为 AD 选项，在社会发展中，所有个人都起到一定的作用。社会历史发展是无数个人合力作用的结果。唯物史观主张人民群众是历史的创造者，但是只有符合社会历史必然性、推动和促进社会历史向前发展的人才属于历史创造者之列。杰出人物对历史发展的具体过程始终起着一定的作用，但是不能决定历史发展的基本趋势。所以，AD选项正确。',
                content21: '19. 【答案解析】本题正确选项为 ABC 选项，货币是在长期交换过程中形成的固定充当一般等价物的商品。货币有五种基本职能，即价值尺度、流通手段、贮藏手段、支付手段和世界货币。“标价十两银子”体现了价值尺度职能，书生、店主、米店老板等人支付房钱和还清欠款体现了支付手段职能，十两银子在书生等人手中流通体现了流通职能，题干中并没有体现贮藏手段。所以，ABC选项正确。',
                content22: '20. 【答案解析】本题正确选项为 AC 选项，资本主义经济危机的形态也发生了变化，表现在：经济危机的四个阶段（即危机阶段、萧条阶段、复苏阶段和高涨阶段）之间的差别有所减弱；各阶段的交替过程已不如过去明显；金融危机频繁发生，对整个经济危机的影响加强。所以，AC选项正确。',
                content23: '21. 【答案解析】本题正确选项为 BCD 选项，邓小平在建设有中国特色的社会主义过程中，强调：把大力发展生产力、提高劳动生产率放在首要地位，学习和利用资本主义的文明成果，在多种经济成分并存在条件下，利用商品、货币和市场发展经济，优先发展轻工业。因此正确答案为选项BCD。',
                content24: '22. 【答案解析】本题正确选项为 AB 选项，十八届三中全会指出，公有制经济和非公有制经济都是社会主义市场经济的重要组成部分，都是我国经济社会发展的重要基础。非公有制经济不属于社会主义经济的范畴，公有制经济是社会主义经济的范畴，社会主义经济制度的基础也只能是公有制经济。因此本题答案为选项AB。',
                content25: '23. 【答案解析】本题正确选项为 ABD 选项，十八大把生态文明建设列为社会主义初级阶段总布局中，生态文明建设与经济建设之间的关系为：生态环境是经济发展的重要基础，生态文明建设应与经济建设协同发展，生态优势可以转化为经济优势。在社会主义初级阶段，根本任务是发展社会生产力，都要以经济建设为中心，生态文明建设不能取代经济建设。因此，本题正确答案为选项ABD。',
                content26: '24. 【答案解析】本题正确选项为 BCD 选项，进行西部大开放，有利于：增强西部地区的经济实力， 缩小区域发展差距，形成优势互补、良性互动、协调有序的区域发展格局。只要有利于发展社会生产力，保持国有资本在社会总资本占优势，不对个别地区的国有资本比重有要求，因此答案为BCD。',
                content27: '25. 【答案解析】本题正确选项为 ABD 选项，发挥各类社会组织的积极作用，有利于：增强公民对社会的认同感， 降低政府治理成本， 提高社会治理水平。发挥社会组织的作用，在某种程度上是弱化政府的管理权限，理清政府和市场的关系。因此答案为ABD。',
                content28: '26. 【答案解析】本题的正确选项为 ABCD 选项，我国企业走出去的战略意义在于：充分利用国外资源、 增强我国企业国际化经营能力、培育我国具有世界水平的跨国公司、拓展我国经济发展空间。因此本题正确答案为选项ABCD。',
                content29: '27. 【答案解析】本题正确选项为 BCD 选项，1912年3月，临时参议院颁布《中华民国临时约法》。这是中国历史上第一部具有资产阶级共和国宪法性质的法典，它规定了资产阶级共和国的国家、政府组织机构以及人民享有的各项民主权利。《临时约法》规定，“中华民国之主权属于国民全体”，所以选项B正确。临时约法》还规定，中华民国国民一律平等，所以选项C正确。《临时约法》以根本大法的形式废除了两千年来的封建君主专制制度，所以选项D正确。选项A在《临时约法》中并未涉及，所以不选。本题正确答案是选项BCD。',
                content30: '28. 【答案解析】本题的正确选项为 BC 选项，第二次世界大战期间的《开罗宣言》、《波茨坦公告》等有关国际条约明确规定将台湾、澎湖列岛归还中国。故本题正确答案是选项BC。',
                content31: '29. 【答案解析】本题的正确选项为 AB 选项，中国共产党为正确所做的努力，有两件事情：参加政协会议并维护政协协议；赴重庆与国民党当局进行谈判。选项CD是国共两党内战爆发后的事件，故不选。因此，本题正确答案是选项AB。',
                content32: '30. 【答案解析】本题的正确选项为 AD 选项，根据法律的规范作用的指向和侧重，可以将公共生活中法律规范的作用分为指引作用、预测作用、评价作用、强制作用和教育作用。法律的强制作用是指法律能运用国家强制力制裁违法和犯罪，保障自己得以实施的作用。法律的强制作用是法的其他作用的保障。所以选项D正确；法律的教育作用是指法律所具有的、通过其规定和实施而影响人们思想，培养和提高人们法律意识，引导人们依法行为的作用。所以选项A正确。因此，本题正确答案是选项AD。',
                content33: '31. 【答案解析】本题的正确选项为 ABCD 选项，建设中国(上海)自由贸易试验区，主要任务是要探索我国对外开放的新路径和新模式，推动加快转变政府职能和行政体制改革，促进转变经济增长方式和优化经济结构，实现以开放促发展、促改革、促创新，形成可复制、可推广的经验，服务全国的发展。建设中国(上海)自由贸易试验区有利于培育我国面向全球的竞争新优势，构建与各国合作发展的新平台，拓展经济增长的新空间，打造中国经济“升级版”。',
                content34: '32. 【答案解析】本题的正确选项为 ABCD 选项',
                content35: '33. 【答案解析】本题的正确选项为 ACD 选项，',
                content36: '三、分析题：',
                content37: '34. 【参考答案】'
                　　+'(1)矛盾是事物的普遍本质，矛盾普遍存在，我们应当正视矛盾，承认秸秆、菌渣以及山林等问题的存在；矛盾又具有特殊性，我们要分析矛盾的特殊性，要在事物发展过程中分清主次、善于利用不同的方法解决不同的矛盾，集中有限精力重点解决主要问题、突出问题，同时也要兼顾次要问题，具体问题具体分析。“巧用大循环”过程中，从秸秆到菌菇，从菌渣、猪粪到有机肥，再从有机肥到有机果业，因地制宜实现了合理循环。'
                　　+'矛盾双方就有同一性，在一定条件下可以相互转化。材料中人们在尊重客观规律的基础上，充分发挥了主观能动性，创造了实现矛盾双方相互转化的有利条件，促进了最有利于事物发展的状态。'
                　　+'矛盾推动事物的发展。内因是事物发展的根本原因，外因是事物变化的条件，内外因共同作用推动事物发展。材料中秸秆变成菌菇培育的原料再变成有机肥，有其内在关联，同时也离不开人们发挥能动性、招商引资加大投入这一重要条件。'
                　　+'(2)矛盾分析法唯物辩证法的根本方法。我们应该全面而深刻地分析事物的矛盾，善于分析矛盾的特殊性，看到矛盾双方的同一性，创造有利条件解决矛盾。一方面，我们要正确对待事物发展整个过程中的不同矛盾，全面协调解决事物发展过程中的各种矛盾；另一方面，我们又要准确把握解决问题的关键。'
                　　+'主观能动性与客观规律性是人们认识和实践的重大问题。发挥人的主观能动性必须从事物的客观实际出发、以尊重客观规律为前提，只有深刻而正确地认识、掌握和利用事物的发展规律，才能有效地发挥主观能动性。我们只有在认真分析事物发展规律的基础上，充分发挥主观能动性，将革命的热情和科学的态度结合起来，才能不断解决问题。'
                　　,
                content38: '35. 【参考答案】'
                　　+'(1)在改革开放的进程中，我们既取得了辉煌的“中国式奇迹”，又面临着诸多“中国式难题”。对此，我们应辩证对待，清醒认识。'
                　　+'十一届三中全会以来，我国通过改革开放取得了“中国式奇迹”：经济平稳较快发展。综合国力大幅提升，改革开放取得重大进展。农村综合改革、集体林权制度改革、国有企业改革不断深化，非公有制经济健康发展。开放型经济达到新水平，进出口总额跃居世界第二位。 人民生活水平显著提高。 民主法制建设迈出新步伐。 文化建设迈上新台阶。 社会建设取得新进步。这些成就都是改革开放取得的辉煌成果。'
                　　+'同时，必须清醒看到，我们工作中还存在许多不足，前进道路上还有不少困难和问题。主要是：发展中不平衡、不协调、不可持续问题依然突出，科技创新能力不强，产业结构不合理，农业基础依然薄弱，资源环境约束加剧，制约科学发展的体制机制障碍较多，深化改革开放和转变经济发展方式任务艰巨；城乡区域发展差距和居民收入分配差距依然较大；社会矛盾明显增多，教育、就业、社会保障、医疗、住房、等关系群众切身利益的问题较多，部分群众生活比较困难；一些领域存在道德失范、诚信缺失现象；少数党员干部理想信念动摇、宗旨意识淡薄，形式主义、官僚主义问题突出，奢侈浪费现象严重，反腐败斗争形势依然严峻。对这些困难和问题，我们必须高度重视，通过进一步改革认真加以解决。'
                　　+'(2)我国社会主义改造完成以后，社会主义社会的基本矛盾仍然是生产力和生产关系之间的矛盾、上层建筑和经济基础之间的矛盾，它们表现在社会生活的各个方面，是推动社会主义社会不断前进的根本动力。这就决定了我们必须通过改革推动社会发展。'
                    +'社会主义社会的基本矛盾性质是非对抗性的，具有“又相适应又相矛盾”的特点，可以通过社会主义制度本身即改革解决社会基本矛盾。也就是说，我们既不能能封闭僵化的老路，也不能走改旗易帜的邪路，只能走中国特色社会主义道路。改革必须坚持社会主义方向，是社会主义制度的自我完善和发展。全面深化改革，必须立足于我国长期处于社会主义初级阶段这个最大实际，坚持发展仍是解决我国所有问题的关键这个重大战略判断，以经济建设为中心，发挥经济体制改革牵引作用，推动生产关系同生产力、上层建筑同经济基础相适应，推动经济社会持续健康发展。'
                    +'问题就是矛盾。社会主义社会的基本矛盾是推动社会主义社会不断前进的根本动力。改革是由问题倒逼而产生，又在不断解决问题中得以深化。改革开放是坚持和发展中国特色社会主义的必由之路。没有改革开放，就没有中国的今天，也就没有中国的明天。“改革开放是一项长期的、艰巨的、繁重的事业，必须一代又一代接力干下去。旧的问题解决了，新的问题又会产生”，发展永无止境、实践永无止境，认识也永无止境。“改革开放只有进行时、没有完成时” 。'
                    ,
                content39: '36. 【参考答案】'
                    +'(1)习近平总书记指出，我们党领导人民进行社会主义建设，有改革开放前和改革开放后两个历史时期，这是两个相互联系又有重大区别的时期，但本质上都是我们党领导人民进行社会主义建设的实践探索。'
                　　+'中国特色社会主义是在改革开放新时期开创的，但也是在新中国已经建立起社会主义基本制度、并进行了20多年建设的基础上开创的。虽然这两个历史时期在进行社会主义建设的思想指导、方针政策、实际工作上有很大差别，但两者决不是彼此割裂的，更不是根本对立的。不能用改革开放后的历史时期否定改革开放前的历史时期，也不能用改革开放前的历史时期否定改革开放后的历史时期'
                　　+'(2)“两个不能否定” 体现了党在新的历史时期对当前国际形势、国内发展所面临的形势作出的又一个准确务实的判断和清晰的论述。'
                　　+'在新民主义革命时期，中国共产党领导人民经过28年艰苦卓绝的斗争推翻了长期压在中国人民头上的帝国主义、封建主义、官僚资本主义三座大山，结束了旧中国长期受外国列强欺凌的历史，真正实现了中华民族的独立。这是中华民族开始走向复兴的一个重要标志，也是中国人民追求民族独立、实现国家富强的历史起点。'
                　　+'改革开放前期，共产党领导中国人民探索的社会主义道路，是要在一穷二白的基础上，建设一个伟大的社会主义现代化强国。这是一项前无古人的艰巨工作，既没有现成的书本答案，又不能照抄外国经验。因此，改革开放以前的探索出现了许多的曲折，甚至是弯路。然而中国却依然在西方国家实行外交孤立、经济封锁、军事包围的极端困难的国际环境下，发展“两弹一星”等高端战略后盾并逐步形成了相对独立的工业体系和国民经济体系，为后来的改革开放奠定了一定的物质基础。'
                　　,
                content40: '37. 【参考答案】'
                    +'(1)个人理想要符合社会理想。并不是要排斥和抹杀个人理想，而是要摆正个人理想同社会理想的关系。个人理想只有同国家的前途、民族的命运相结合，个人的向往和追求只有同社会的需要和人民的利益相一致，才是有意义的。'
                　　+'社会理想是个人理想的凝聚和深化，代表和反映着人们的共同愿望和根本利益，归根到底要靠全体社会成员的共同努力来是此案，并具体体现在每个社会成员为实现个人理想而进行的活生生的实践中。当社会理想同个人理想有矛盾冲突的时候，有志气、有抱负的人可以作出最大的自我牺牲，使个人的理想服从于全社会的共同理想。'
                　　+'人的社会性决定了人生的社会价值是人生价值的最基本内容。一个人的价值主要是以他对社会所作的贡献为标准的，贡献越大，人生价值越大。'
                　　+'社会主义集体主义强调集体利益高于个人利益。在实际生活中，个人利益与集体利益难免发生矛盾，个人应当以大局为重，使个人利益服从集体利益，在必要时为集体的共同利益作出牺牲。'
                　　+'(2)“理想很丰满，现实很骨感”，这就是要求当代年轻人要有勇气有信心，在实践中化理想为现实。第一，正确认识理想与现实的关系是实现理想的思想基础。第二，坚定的信念是实现理想的重要条件。追求理想需要有执着的信念。没有对理想的执著，要想实现宏伟的理想是不可能的。第三，勇于实践、艰苦奋斗是实现理想的根本途径。理想必须通过实践才能转变为现实。再好的理想，如果不付诸行动，就没有实际意义。艰苦奋斗是我们的传家宝。艰苦奋斗始终是激励我们为实现国家富强、民族振奋而共同奋斗的强大精神力量',
                content41: '38. 【参考答案】'
                    +'(1)人才和人的素质的竞争成为综合国力竞争的基础内容。除了少数战略性资源外，一般的物质资源在国家实力中的地位下降，而人才、人的素质作为一种人力资源，其作用和地位上升。较之以往，人才的流动性、包括在世界范围的流动性，大大加强，所以人才的竞争在当今世界表现得越来越突出，许多国家都把教育作为国家发展和振兴的基础，大力培养人才。当今世界是一个不断开放和发展的世界，特别是在信息化日益增强的过程中，生产力水平在不断的提高，要求人们必须不断学习，增强个人知识，提高学习能力，进而适应日益发展的时代要求。当今世界是不断变化的，新的生活方式和思维方式的涌现，需要人们不断学习，不断进步，从而学习适应社会发展的需求。'
                　　+'在日益竞争激烈的社会当中，人们唯有不断学习不断进步，才能培养和锻炼自己的生活技能，提高自己认识新事物，处理新问题的能力。'
                　　+'(2)从“抢饭到抢饭碗”说明随着经济全球化的不断发展，以中国和印度为代表的发展中国家在国际舞台上正发挥着日益重要的作用，特别是以中国为代表的发展中国家的崛起深刻改变着世界的面貌，成为改革 不合理国际经济旧秩序的基本力量，发展中国家地域辽阔，资源丰富，人口众多，发展潜力巨大。20世纪90年代以来，发展中国家的总体实力增强，“二十国集团”取代“八国集团”，“金砖国家”的兴起，表明发展中国家在世界地位与作用日益增大。'
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
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. 爱迪生在发明电灯之前做了两千多实验，有个年轻的记者曾经问他为什么遭遇这么多次失败。爱迪生回答：“我一次都没有失败。我发明了电灯。这只是一段经历了两千步的历程。”爱迪生之所以说“我一次都没有失败”，是因为他把每一次实验都看作{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.认识中所获得的相对真理{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.整个实践过程中的一部分{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.对事物规律的正确反映{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.实践中可以忽略不计的偶然挫折</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. 俄国早期马克思主义理论家普列汉诺夫说，绝不会有人去组织一个“月食党”以促进或阻止月食的到来，但要进行社会革命就必须组织革命党，这是因为社会规律与自然规律有所不同，它是{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.不具有重复性的客观规律{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.由多数人的意志决定的{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.通过人的有意识的活动实现的{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.比自然规律更易于认识的规律</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. 社会生产是连续不断进行的，这种连续不断重复的生产就是再生产。每次经济危机发生期间，总有许多企业或因产品积压、或因订单缺乏等致使其无法继续进行再生产而被迫倒闭。那些因产品积压而倒闭的企业主要是由于无法实现其生产过程中的{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.劳动补偿{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.价值补偿{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.实物补尝{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.增殖补偿</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4. 与第二次世界大战前的资本主义相比，当代资本主义在许多方面已经并正在发生着深刻的变化。正确分析这些新变化发生的原因，有利于我们科学而全面地认识当代资本主义社会。导致当代资本主义新变化发生的根本推动力量是{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.改良主义政党对资本主义制度的改革{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.工人阶级争取自身权利的斗争{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.科学技术革命和生产力的发展{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.社会主义制度的优越性对资本主义的影响</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5. 1992年，党的十四大提出了我国经济体制改革的目标是建立社会主义市场经济体制。经过十四大到十八届三中全会20多年的实践，党对政府和市场的关系有了新的科学定位，提出使市场在资源配置中起{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.辅助性作用{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.决定性作用{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.基础性作用{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.补充性作用</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6. 改革开放以来，人民代表大会制度建设和人民代表大会的工作得到不断推进。全国和地方各级人民代表大会的代表{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.实行差额选举{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.按党派分配名额{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.按单位分配名额{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.实行等额选举</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7. 劳动、资本、技术、管理等生产要素是社会生产不可或缺的因素。在我国社会主义初级阶段，实行按生产要素分配的必要性和根据是{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.生产要素可以转化为生产力{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.我国社会存在着生产要素的多种所有制{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.按生产要素分配是按劳分的补充{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.增强全民族文化创造活力</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8. 文化强则中国强。建设社会主义文化强国是实现中华民族伟大复兴的必然要求，其关键是{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.增强全民族文化创造活力{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.发展新型文化业态{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.提高全民族思想道德素质和科学文化素质{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.提升国家文化软实力</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9. 1915年9月，陈独秀在上海创办《青年杂志》。他在该刊发刊词中宣称，“盖改造青年之思想，辅导青年之修养，为本志之天职。批评时政，非其旨也。”此时陈独秀把主要注意力倾注于思想变革的原因是{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.他认为批评时政不利于改造青年思想{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.他对资本阶级民主主义产生了怀疑{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.他对政治问题不感兴趣{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.他认定改造国民性是政治变革的前提</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10. 1924年1月，中国国民党第一次全国代表大会在广州召开，大会通过的宣言对三民主义作出了新的解释。新三民主义成为第一次国共合作的政治基础，究其原因，是由于新三民主义的政纲{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.同中国共产党在民主革命阶段的纲领基本一致{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.把斗争的矛头直接指向北洋军阀{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.体现了联俄、联共、扶助农工三大革命政策{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.把民主主义概括为“平均地权”</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11. 1930年1月，毛泽东在《星星之火，可以燎原》一文中写道：“我所说的中国革命高潮快要到来，决不是如有些人所谓‘有到来之可能’那样完全没有行动意义的、可望而不可即的一种空的东西。它是站在海岸遥望海中已经看得见桅杆尖头了的一只航船，它是立于高山之巅远看东方已见光芒四射喷薄欲出的一轮朝日，它是躁动于母腹中的快要成熟了的一个婴儿。”这段话是针对当时党内和红军中存在的{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.“在全国范围内先争取群众后建立政权”的理论{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.“御敌于国门之外”的主张{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.“红旗到底打得多久”的疑问{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.“一省或数省的首先胜利”的设想</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;12. “房子是应该经常打扫的，不打扫就会积满了灰尘，脸是应该经常洗的，不洗也就会灰尘满面。我们同志的思想、我们党的工作，也会沾染灰尘的，也应该打扫和洗涤。”这段话形象地反映了中国共产党在长期革命实践中历形成的{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.密切联系群众的优良作风{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.艰苦奋斗的优良作风{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.理论联系实际的优良作风{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.批评与自我批评的优良作风</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;13. 中国特色社会主义法治理念包含“依法治国、执法为民、公平正义、服务大局、党的领导”五个方面的基本内涵，它们是相辅相成、不可分割的有机整体，构成了社会主义法治理念的完整理论体系。其中，公平正义是{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.社会主义法治的价值追求{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.社会主义法治的本质要求{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.社会主义法治的核心内容{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.社会主义法治的重要使命</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;14. 近年来，从“彭宇案”掀起的轩然大波，到“扶老被诬伤老，好人败诉赔钱”等事件的一再发生，使历来推崇“助人为乐”的国人遭遇考验。2013年8月1日，《深圳特区救助人权益保护规定》的正式实施，填补了国内公民救助行为立法的空白。为此，有媒体撰文《“好人法”释放道德正能量》，认为该规定无疑会释放出挺好人、做好人的正能量，对社会风气的净化不无益处。法律之所以能释放道德正能量，是因为{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.法律是道德的归宿{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.法律是道德的基础{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.活动是道德的前提{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.法律是道德的支撑</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;15. 党群关系，关乎党和国家的存亡大计。为了实现党的十八大确定的奋斗目标，中共中央部署并在全党开展了党的群众路线教育实践活动。这次活动的主要内容是{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.建设学习型党组识{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.保持共产党员先进性{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.讲学习、讲政治、讲正气{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.为民务实清廉</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;16. 2013年6月，中国国家主席习近平与美国总统奥巴马在美国加州安纳伯格庄园会晤时，将中美新型大国关系的内涵概括为{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.共同发展、合作共赢、友好伙伴、相互尊重{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.加强对话、增加互信、发展合作、管控分歧{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.不冲突、不对抗、相互尊重、合作共赢{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.相互尊重、平等互利、密切协作、相互支持</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16, fontWeight: 'bold' }}>二、多项选择题：17～33题，每小题2分，共34分。下列每题给出的四个选项中，至少有两个选项是符合题目要求的。</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;17. 海的“贯通东流”水系的形成年代。如果说上游的沉积物从青藏高原、四川盆地顺廷而下能到达下游，这就表是胀江贯通了，这就是物源示踪。我国科学家采用这一方法以，研究长江中下游盆地沉积物的来源，从而判别长江上游的物质何时到达下游，间接指示了长江贯通东流的时限。他们经过10多年的研究，提出长江贯通东流的时间距今约2300多万年。这一研究成果从一个侧面显示出{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.时间和空间是有限的，物质运动是永恒的{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.时间和空间的通过物质运动的变化表现出来的{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.时间和空间是指标示物质运动的观念形式{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.时间和空间是物质运动的存在形式</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;18. 作家史铁生在《奶奶的星星》中讲道，奶奶告诉他的故事与通常的说法不同：一般人说，地上死一个人，天上就熄灭了一颗星星；而奶奶说，地上死一个人，天上又多了一个星星，人死了就会升到天空，变成星星给走夜道的人照个亮了。于是他“慢慢相信，每一个活过的人，都能给后人的路途上添些光亮，也许是一颗巨星，也许是一把火炬，也许只是一支含泪的烛光……”这对我们理解个人在社会历史的作用的启示有{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.历史是无数个人相互作用的合力的结果{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.杰出个人决定历史发展的走向{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.人人都是历史的创造者{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.每个人对社会发展都有或大或小的作用</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;19. 1918年，马寅初在一次演讲时，有一位老农问他：“马教授，请问什么是经济学?”马寅初笑着说：“我给这位朋友讲个故事吧：有个赶考的书生到旅店投宿，拿出十两银子，挑了该旅店标价十两银子的最好房间，店主立刻用它到隔壁的米店付了欠单，米店老板转身去屠夫处还了肉钱，屠夫马上去付清了赊欠的饲料款，饲料商赶紧到旅店还了房钱。就这样，十两银子又到了店主的手里。这时书生来说，房间不合适，要回银子就走了。你看，店主一文钱也没赚到，大家却把债务都还清了，所以，钱的流通越快越好，这就是经济学。”在这个故事中，货币所发挥的职能有{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.支付手段{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.流通手段{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.价值尺度{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.贮藏手段</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;20. 第二次世界大战结束以来，随着国家垄断资本主义的形成和发展，资产阶级国家对经济进行的干预明显加强，从而使得资本主义社会的经济调节机制发生了显著变化。与这种变化相适应，经济危机形态也发生了很大变化。其主要表现是{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.经济危机更多地表现为金融危机的频繁发生{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.经济危机通常由国家间的贸易失衡直接引发{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.经济危机各阶段的交替过程已不十分明显{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.优先发展重工业，快速实现从农业国到工业国的转变</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;21. 1926～1927年初，邓小平在莫斯科中山大学留学一年。此时正值列宁的新经济政策在莫斯科和整个苏联燎原般发展，国家经济全面开花，市场上商品丰富、品类繁多，商店、饭馆、咖啡馆随处可见。邓小平到中山大学第一天就收到了一大堆日用品，一日三餐也非常丰富。在此期间，邓小平还认真阅读和摘抄了苏联领导人关于新经济政策的许多论述。这一段经历对邓小平后来思考建设“有中国特色的社会主义”具有一定的启示。邓小平与列宁在如何建设社会主义的探索中有许多相通之处，主要有{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.优先发展重工业，快速实现从农业国到工业国的转变{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.把大力发展生产力、提高劳动生产率放在首要地位{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.学习和利用资本主义的文明成果{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.在多种经济成分并存在条件下，利用商品、货币和市场发展经济</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;22. 坚持和完善社会主义初级阶段基本经济制度，必须毫不动摇巩固和发展公有制经济，必须毫不动摇鼓励、支持、引导非公有制经济发展。这是因为，公有制经济和非公有制经济都是我国{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.经济社会发展的重要基础{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.社会主义市场经济的重要组成部分{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.社会主义经济的重要组成部分{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.社会主义经济制度的基础</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;23. 2013年9月7日，国家主席习近平在哈萨克斯坦纳扎尔耶夫大学发表演讲并回答学生提问时说，“我们既要绿水青山，也要金山银山。宁要绿水青山，不要金山银山，而且绿水青山就是金山银山。”这段话生动地反映了生态文明建设与经济建设之间的关系，即{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.生态环境是经济发展的重要基础{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.生态文明建设应与经济建设协同发展{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.生态文明建设可以取代经济建设{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.生态优势可以转化为经济优势</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;24. 2013年6月6日，《财富》全球论坛首次在中国西部内陆城市成都举行。这次论坛以“中国的新未来”为主题，集中讨论了中国西部发展对中国未来发展的重要意义。“优先推进西部大开发”是党的十八大提出的重大战略部署，把西部大开发放在区域发展总体战略的优先位置，是因为西部发展有利于{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.扩大国有资本在西部地区社会总资产中的比重{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.增强西部地区的经济实力{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.缩小区域发展差距{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.形成优势互补、良性互动、协调有序的区域发展格局</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;25. 《中共中央关于全国 》{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.增强公民对社会的认同感{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.降低政府治理成本{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.扩大政府管理权限{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.提高社会治理水平</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;26. 近年来，我国企业“走出去”的步伐明显加快。非金融类对外直接投资从2007年的248亿美元上升到2012年的773亿美元，年均增长25.5%，？？身对外投资大国行列。我国企业“走出去”战略的重要意义是{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.充分利用国外资源{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.增强我国企业国际化经营能力{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.培育我国具有世界水平的跨国公司{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.拓展我国经济发展空间</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;27. 1912年3月中华民国临时参议既颁布的《中华民间临时约法》是中国历史上第一部具有资产阶级共和国宪法性质的法典。毛泽东曾称赞它“带有革命性、民主性”。其“革命性、民主性”主要体现在{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.它不承认清政府与列强签订的一切不平等条约{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.它规定中华民国国民一律平等{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.它规定中华民国之主权属于国民全体{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.它以根本大法的形式废除了封建君主专制制度</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;28. 钓鱼岛及其附属岛屿是中国领土不可分割的一部分。中国最早发现、命名、利用和管辖钓鱼岛。1895年，请朝在甲午战争中战败，被迫与日本签署不平等的《马关条约》，割让“台湾全岛及所有附属各岛屿”。钓鱼岛等作为台湾“附属岛屿”一并被割让给日本。1941年12月，中国政府正式对日宣战，宣布废除中日之间的一切条约。日本投降后，依据有关国际文件规定，钓鱼岛作为台湾的附属岛屿应与台湾一并归还中国。这些国际文件是{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.《日本投降书》{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.《波茨坦公告》{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.《开罗宣言》{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.《德黑兰宣言》</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;29. 抗日战争结束后，中国共产党为避免内战，实现和平建国，采取的主要措施有{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.参加政协会议并维护政协协议{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.赴重庆与国民党当局进行谈判{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.在国统区开辟第二条战线{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.在解放区开展土地改革运动</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;30. 柏拉图说：“法律有一部分是为有美德的人制定的，如果他们愿意和平善良地生活，那么法律可以教会他们在与他人的交往中所要遵循的准则；法律也有一部分是为那些不接受教诲的人制定的，这些人顽固不化，没有任何办法能使他们摆脱罪恶。”这段话所凸显的法律的规范作用是{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.教育作用{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.保障作用{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.预测作用{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.强制作用</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;31. 爱国主义优良传统源远流长，内涵数极为丰富。下列诗句中反映爱国主义优良传统的有{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.位卑未敢忘忧国，事定犹须持★棺{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.四万万人齐下泪，天涯何处是神州{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.寄意寒星荃不察，我以我血荐轩辕{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.苟利国家生死以，岂因祸福避趋之</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;32. 2013年9月29日，中国（上海）自由贸易试验区正式启动运作，36家中外企业和金融机构颁布证照，首批入驻试验区，建设该试验区的主要任务是{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.促进转变经济增长方式和优化经济结构{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.推动加快转变政府职能和行政体制改革{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.为全面深化改革和扩大开放探索新途径、积累新经验{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.推动构建更加公平合理的市场经济体制</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;33. 应中国总理李克强的邀请，俄罗斯总理梅德韦杰夫、印度总理辛格和蒙古国总理阿勒坦呼亚格于2013年10月22日开始分别对中国进行正式访问。来自中国三个陆上邻国的领导人，在同一天开启中国之行，这样密集的双边访问在中国外交史上实属罕见。这一外交动向{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.体现了中国经济发展的吸引力{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.深化了中国与俄印蒙三国间的盟友关系{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.反映了中国周边外交行动的延续和加速{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.顺应了互利共赢的时代潮流</Text>

                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16, fontWeight: 'bold' }}>三、分析题：34～38小题，每小题10分，共50分。要求结合所学知识分析材料并回答问题。</Text>
                        <View>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;34.结合材料回答问题：</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;巧用大循环，处理不再难
                                {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;山东某地采用循环经济的理念，将秸秆“吃干榨尽”，对秸秆利用进行了有益探索。
        　                      {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;一、秸秆种蘑菇
        　                      {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;该地小麦种植面积为60万亩，按亩产500公斤秸秆计算，每年产生30万吨秸秆。虽然粉碎还田、压块做燃料、青储养殖等消化了大量秸秆，但一些农户为图方便，仍然偷偷焚烧秸秆，当地禁烧压力很大。
        　                      {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2009年，该地通过招商引资引进了一家蘑菇种植企业，该企业以小麦秸秆加鸡粪为原料培育双孢菇，从当地收到小麦秸秆不够用，还在周边100公里范围的县市收集，鸡粪则由当地一家大型养鸡场提供。自蘑菇厂建起来后，蘑菇厂对秸秆的大量需要，让原本难以处理而成为“包袱”的秸秆摇身一变，不仅成了香饽饽，而且还成为农民增收的渠道。
        　                      {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;二、延长产业链
        　                      {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;然而，蘑菇厂每年产生的6万吨菌渣，四处堆积，臭气难闻，也引来周边群众的投诉，由此，该蘑菇厂开始寻找下游菌渣处理企业，开展产业链条的招商引资。
        　                      {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;山东某生物科技有限公司得知消息后主动前来，并把厂于建在该蘑菇厂旁边，他们将买来的菌渣加上猪粪，经过发酵，制成了很好的有机复合肥。这不仅解决了菌渣问题，而且也附带解决了让周边养猪户头痛的猪粪问题，该公司将生产出来的有机复合肥直接卖给周边的有机蔬菜种植基地，种植户以及果农等，由于减少了销售中间环节，价格合理。而很受欢迎。该公司也因之而获利颇丰。
        　                      {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;三、“链接”到山林
        　                      {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;秸秆经过种植蘑菇，变成了有机复合肥，最后拿到市场上销售，算是完成了一个标准的循环利用过程，然后，如果将有机复合肥集中用于生态修复工程。再次推动一个新的生态产业发展，岂不是更好？
        　                      {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;该地又动起脑筋，将秸秆利用产业与退耕还林工程对接，该地的山区丘陵面积占全市总面积的2/3,其中林荒山地有6万多亩，这些山地土壤贫瘠。含沙量大，农作物产量低，经济效益差。
        　                      {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在深入调研的基础上，该地从2011年开始，由市财政投入数亿元，实施为期5年的“自主退耕还林生态富民”工程，打算将这些山地改造成高产的大枣、大樱桃等经济果林，大力推进农林业转型。
        　                      {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;而要发展高产高效的有机果业，所面临的突出问题是有机肥从何而来？这时，秸秆等有机肥料又成了人们惦记的宝贝。为了种植出优质林果，当地农民在山地种植果林时，都开始垫秸秆、放菌渣有机复合肥等。大片经济果林的种植，不仅大大地改善了当地生态环境，从而实现了秸秆利用的大循环，而且也大大地提高了农民收入。
                            </Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>摘编自《人民日报》（2013年6月22日）</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;(1)从唯物辩证法的角度分析“巧用大循环，处理不再难”中“巧”在何处？（6分）</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;(2)当你在生活中遇到难题和矛盾时，上述事例对你有何启示？（4分）</Text>
                        </View>

                        <View>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;35.结合材料回答问题：</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;材料1：</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1978年我国作出改革开放的战略决策时，美国《时代》杂志曾质疑说：“他们的目标几乎不可能按期实现，甚至不可能实现。”经过三十多年的改革开放，我国国内生产总值，外贸进出口总额均已达到世界第二位，经济总量占世界经济的份额提升到10%左右，对世界经济增长的贡献率年平均超过20%。据世界银行统计，我国已进入中高收入国家行列。
                                {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在物质文化生活得到提高之后，人民群众对未来期待更高，过去施工建厂，首先考虎的是经济利益，今天引进项目，担心的却是环境污染；过去期盼吃饱穿暖，今天却追求吃的健康、安全检查过去梦想有车有房，现在则忧虑PM2.5排放，城乡居民收入整体都有提高，但城乡区域发展差距和居民收入分配差距依然较大，近10年来中国基尼系数始终处于0.4以上，超出国际公认“警戒线”……这个经济飞速发展、财富不断积累的世界第二大经济体，在创造着“中国式奇迹”的同时，仍有一些“中国式难题”丞待破解。
                                {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;“改革开放是我们党的历史上一次伟大觉醒，正是这个伟大觉醒孕育了新时期从理论到实践的伟大创造。”习近平在党的十八大之后首次到地方调研就选择了广东，并向深圳莲花山顶的邓小平钢像敬献了花篮。习近平表示，之所以到广东来，就是要到在我国改革开放中得风气之先的地方，现场回顾我国改革开放的历史进程，将改革开放继续推向前行。我们来瞻爷邓小平钢像。就是要表明我们将坚定不移推进改革开放，奋力推进改革开放和现代化建设取得新进展、实现新突破、迈上新台阶。
                            </Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>摘编自《人民日报》（2013年3月22日）、新华网（2012年12月11日）等</Text>

                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;材料2：</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1992年，邓小平同志在南方谈话中说：“不坚持社会主义，不改革开放，不发展经济，不改善人民生活，只能是死路一条。”回过头来看，我们对邓小平同志这番话就有更深的理解了。所以，我们讲，只有社会主义才能救中国，只有改革开放才能发展中国、发展社会主义、发展马克思主义。
                                {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;正是从历史经验和现实需要的高度，党的十八大以来，中央反复强调，改革开放是决定当代中国命运的关键一招，也是决定实现“两个一百年”奋斗目标、实现中华民族伟大复兴的关键一招，实践发展永无止境，解放思想永无止境，改革开放也永无止境，停顿和倒退没有出路，改革开放只有进行时、没有完成时。

                            </Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>摘自习近平《关于"中共中央关于全面深化改革若干重大问题的决定"的说明》</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(1)如何看待改革开放进程中的“中国式奇迹”与“中国式难题”？（4分）</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(2)运用社会基本矛盾原理分析为什么“改革开放只有进行时、没有完成时”？（6分）</Text>
                        </View>
{/* 36 */}
                        <View>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;36.结合材料回答问题：</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;材料1：</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1980年8月，邓小平会见意大利记者奥琳娜、法拉奇。法拉奇问：“天安门上的毛主席像，是否要永远保留下去？”邓小平回答说：“永远要保留下去。过去毛主席像”
                                {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;★★太多，到处★★，并不是一种严肃的事情，也并不能表明对毛主席的尊重。”邓小平又说：“毛主席一生中大部分时间是做了非常好的事情的，他多次从危机中把党和国家挽救过来，没有毛主席，至少我们中国人民还要在黑暗中摸索更长的时间。毛主席最伟大的功绩是把马列主义的原理同中国革命的实际结合起来，指出了中国夺取革命胜利的道路、应该说，在六十年代以前或五十年代后期以前，他的许多思想给我们带来了胜利，他提出的一些根本的原理是非常正确的。”
                            </Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>摘自《邓小平文选》第2卷</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;材料2：</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2013年1月5日，习近平在新进中央委员会的委员、候补委员学习贯彻党的十八大精神研讨班开班式上发表重要讲话。他强调指出，我们党领导人民进行社会主义建设，有改革开放前和改革开放后两个时期，这是两个相互联系又有重大区别的时期，虽然这两个历史时期在进行社会主义建设的思想指导、方针政策、实际工作上有很大差别，但两者决不是彼此割裂的，更不是根本对立的，不能用改革开放后的历史时期否定改革开放前的历史时期，也不能用改革开放前的历史时期否定改革开放后的历史时期。要坚持实事求是的思想路线，分清主流和支流，坚持真理，修正错误，发扬经验，吸取教训，在这上基础上把党和人民事业继续推向前进。
                            </Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>摘自《人民日报》（2013年1月6日）</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;(1)1980年，邓小平为什么强调天安门上的毛主席像“永远要保留下去”？（5分）</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;(2)如何理解习近平总书记提出的“两个不能否定”的深刻内涵及其意义？（5分）</Text>
                        </View>

                        <View>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;37.结合材料回答问题：</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;鹦哥岭是海南省陆地面积最大的自然保护区，区内分布着完整的垂直带谱。在我国热带雨林生态系统保存上独占鳌头。这里山高路远，条件艰苦，一直难以招聘到具有较高专业素质的工作人员。
                                {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;　一、鹦哥岭来了大学生
                                {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;自2007年起，先后有27名大学毕业生（2名博士、4名硕士、21名本科生）放弃大城市的优越生活，陆续从全国各地来到鹦哥岭保护区工作，山脚下一排破旧平房中的两间就是他们的家。“孩子们，这里的黎苗兄弟说是以种田为生，实际上就是种些橡胶，靠山吃山……你们来任务重啊！在关爱森林的同时，还要想法帮这里的百姓致富！”老站长的一席话，像重锤一样敲击着大家。“我们不会让鹦哥岭失望着的！”大家不约而同地喊出声。
        　                      {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;二、鹦哥岭有了“档案馆”
        　                      {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;到底鹦哥岭有多少种动植物？这是摆在大学生们面前最直接的课题、也是鹦哥岭自然保护区要完成的首要工作。大学生们背着睡袋。锅碗瓢盆和监测仪上山了，他们聚精会神地做着记录，天黑了，架起锅巴煮成米饭，和着辣酱吃了实在太困了支起帐蓬钻进去睡一觉……经过4年多的艰辛努力，鹦哥岭自然保护区终于有了自己的“档案馆”；记录到城管来植物2197种、脊椎动物431种、鹦哥岭树蛙等14种科学新种以及26个中国新记录种等。
        　                      {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;三、鹦哥岭有了护林员
        　                      {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;鹦哥岭周边有103个自然村，近2万村民。看到村民大片砍代雨林种山芝、香蕉、作为环境保护者，大学生们痛心疾首。但习惯靠山吃山的当地百姓说。“让我们放下砍刀、放下猎枪绝对不行！”大学生们克服阻力，用真诚和智慧动员招募了270名护林员，并与他们一起，用一个多月时间，走遍了209公里长的界线，埋下了近400根桩和50多块界碑，为鹦哥岭保护区筑起了一道看得见的保护网。
        　                      {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;四、鹦哥岭有了农业示范田
        　                      {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;鹦哥岭是海南的贫困山区，为帮助当地黎苗族百姓脱贫致富，大学生们特地去外地取经，在鹦哥岭通过试点而大面积推广“稻鸭共育”的方法，带动当地人致富，农户们在稻田里骄傲地插上了“农业示范田”的牌子。接着大学生们又推广林下经济，在橡胶树下种菜、种瓜、养鸡；并帮助当地人建起了环保厕所，发行了猪圈，改善了居住的环境%当地百姓手里有了钱，靠上山砍树卖钱的人越来越少了。看到这一切，大学生们说，“我们感到由衷的幸福和快乐，也深切地感受到，这就是我们工作的意义和存在的价值。”
        　                      {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5年过去了，27名大学生一直坚守在鹦哥岭，他们甘于寂寞，乐于奉献仪式发现新物种，是敬业的科研工作者；引来环保理念，是先进理念的传播者；心系百姓喜忧，是黎苗族兄弟的贴心人！一份职业，背负三份责任。三个角色的完美融合，让我们看到了甘于寂寞的坚守力量和不甘于寂寞的奋斗精神，也让我们懂得了自已手中的笔、脚下的路、心中的秤要靠什么来指引，他们选择了一种有远见的生活方式。
        　                      {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;每到毕业季，总有一些大学生毕业生发出“理想很丰满，现实很骨感”的感慨。究竟如何看待理想与现实的关系，鹦哥岭的大学生们用他们的实际行动给出了最响亮的回答。
                            </Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>摘编自《光明日报》（2012年4月9日、2013年6月7日）</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;(1)为什么说鹦哥岭的大学生选择的是“一种有远见的生活方式”？（6分）</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;(2)怎样看待“理想很丰满，现实很骨感”这种说法？</Text>
                        </View>

                        <View>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;38.结合材料回答问题：</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;材料1：</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;航海家哥伦布完成了他的前无古人的探险活动后、向支持他探险的西班牙国王和王后汇报他的发现时说：“地球是圆的。”他因为这一伟大的发现而名垂后世。但是，时隔500多年后，美国《纽约时报》中东事务专栏作家、普利策奖获得者托马斯?弗里德曼沿着哥伦布的航程，从美国乘飞机出发，经由法兰克福一直向东飞行，来到了印度的“硅谷”——班加罗尔，经过一段时间的观察，他有一一个破天荒的发现。他回到美国后，悄悄地对他的太太说了一句话：“亲爱的，我发现这个世界是平的。”
                                {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;“世界是平的”，并不是说地球已改变了它的物理形态，但这个论点的提出却有着划时代的意义。它揭示出当今世界正在发生的深刻而又令人激动的的一个变化——全球化的趋势。它以高科技发展为动力，在地球各处勇往直前、势不可挡，世界也因此从一个球体变得平坦。
                                {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;“世界是平的”，意味着在今天这样一个因信息技术而紧密、方便的互联世界中，全球市场、劳动力和产品都可以被整个世界共享，一切都有可能以最有效率和最低成本的方式实现。
        　                      {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;“世界是平的”，改变着每一个人的工作方式、生活方式和思想方式，乃至一个人的生存方式。因此，生活在当今时代的每一个人，都面临着平坦的世界这样巨大的变化，我们将如何自处？看来，在这个世界里，要想脱疑而出，最重要的一点是不断强化自己的竞争力，首先要培养“学习如何学习”的能力——不断学习和教会自己处理旧事物和新事物的新方式。
                            </Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>摘编自《人民日报》（2007年7月26日）、《人民日报》（海外版）（2012年11月1日）</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;材料2：</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;弗里德曼在《世界是平的》一书中，以丰富生动的语言描述了全球化带来的挑战和益处。其中一段话颇令人回味：“小时候父母常常说，儿子阿，乖乖把饭吃完，因为中国和印度的小孩没饭吃。现在，父母会对孩子说，女儿啊，乖乖把书念完，因为中国和印度的小孩正在等着抢你的饭碗。”
                            </Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>弗里德曼在《世界是平的》一书中，以丰富生动的语言描述了全球化带来的挑战和益处。其中一段话颇令人回味：“小时候父母常常说，儿子阿，乖乖把饭吃完，因为中国和印度的小孩没饭吃。现在，父母会对孩子说，女儿啊，乖乖把书念完，因为中国和印度的小孩正在等着抢你的饭碗。”</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;(1)在“世界变平”的时代，为什么每个人“要培养 ‘学习如何学习’的能力”?</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;(2)从“抢饭”到“抢饭碗”的变化说明了什么？</Text>
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
