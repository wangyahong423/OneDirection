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
                content2: '1. 【答案解析】本题正确选项为 B 选项，本题考查的是事物发展过程中的量变和质变中的"度"。度是质和量的统一，事物保持自己质的数量界限，即事物的范围、幅度和限度。题干中愚人想"加一点点盐就如此鲜美，如果加更多的盐，岂不是更好吃"结果是又苦又咸，超出的度，没有看到适度的原则。故本题的正确答案为B。',
                content3: '2. 【答案解析】本题正确选项为 A 选项，本题考查的唯物主义辩证法与唯心主义的区分。前一种观点是由恩格斯提出，强调"自由在于认识规律，并利用规律"属于唯物辩证法的观点。后一种观点认为"由自及是随心所欲"忽视了客观规律性，强调人的主观意志，属于主观唯心主义或者唯意志论观点。故此，本题正确答案为A。',
                content4: '3. 【答案解析】本题正确选项为 D 选项，本题考查的是剩余价值率。剩余价值率为剩余价值与可变资本（购买劳动力的资本）的比值。从题干中我们知道剩余价值为该企业的总资本（120万元）-资本家的预付总资本（100万元）即为20万元。题意中购买劳动力资本为10万元（可变资本）。从而剩余价值率=20/10=200%。所以本题正确答案为D。',
                content5: '4. 【答案解析】本题正确选项为 A 选项，本题考查的是资本主义经融资本快速发展壮大的制度条件。20世纪70年代初，由于资本主义发展不平衡的加深和国际货币体系内在的矛盾的激化，布雷顿森林体系崩溃。随后，西方国家普遍走上了经融自由化和经融创新的道路。经融自由化与经融创新是经融垄断资本得以形成和壮大的重要制度调价，推动着资本主义经济的经融化程度不断提高。',
                content6: '5. 【答案解析】本题正确选项为 B 选项，本题考察的是马克思主义中国化两大理论成果毛泽东思想和中共特色社会主义理论体系的精髓-实事求是。实事求是贯穿于马克思主义中国化两大理论成果形成和发展的全过程。群众路线和独立自主是毛泽东思想活的灵魂，而D选项改革创新是中国特色社会主义理论体系的重要内容。因此，本题正确答案为B。',
                content7: '6. 【答案解析】本题正确选项为 B 选项，本题考查的是“十大关系”围绕的基本方针。十大关系围绕一个基本方针，即调动国内外一切积极因素，为社会主义服务。',
                content8: '7. 【答案解析】本题正确选项为 B 选项，本题考查的是社会主义初级阶段长期性与阶段性的动态发展过程。社会主义初级阶段是一个相当长的历史阶段，在其长期的发展过程中必然还有经历若干的具体阶段，不同时期会呈现出不同的阶段性特征。题干中“我国经济和社会发展呈现出一系列新的阶段性特征”体现的是阶段性，“这些新的阶段性特征的出现并没有改变我国仍处于社会主义初级阶段这一基本事实”体现的是社会主义初级阶段的长期性。因而本题正确答案为B。',
                content9: '8. 【答案解析】本题正确选项为 D 选项，本题考查的是民族区域自治的核心。民族区域自治是在统一而不可分离的国家领导下，在各少数民族聚居的地方设立自治机关，行使自治权，是实行区域自治。其核心是保障少数民族当家作主，管理本民族本地方事务的权利。',
                content10: '9. 【答案解析】本题正确选项为 B 选项，本题考查的是中国人民的民族意识普遍觉醒的标志事件-中日甲午战争。中日甲午战争后帝国主义列强对中国的争夺和瓜分达到高潮，也促使中国人民的民族意识开始普遍觉醒。',
                content11: '10. 【答案解析】本题正确选项为 C 选项，本题考查的是"长技"的含义。魏源说："夷之长技三：一战舰，二火器，三养兵练兵之法。"为了抵御西方列强的侵略，主张学习外国先进的军事和科学技术，从而富国强兵。本题正确答案为C。',
                content12: '11. 【答案解析】本题的确选项为 A 选项，忻口战役是以保卫太原为目的的大会战，双方激战半月之久，日军始终未能完全占领这些地区，成为抗日战争时期华北抗战中最激烈的一次战役，同时，正面阵地战和敌后游击战相结合，创国共两党军队在战役上相互配合的范例。',
                content13: '12. 【答案解析】本题正确选项为 C 选项，本题考查的是《关于清算、减租及土地问题的指示》中土地政策的变化。《关于清算、减租及土地问题的指示》基本内容是要坚决地支持和引导广大农民群众，采取各种适当方法，使地主阶级剥削农民而占有的土地转移到农民手中；用一切方法吸收中农参加运动，绝不可侵犯中农土地；一般不变动富农土地，对富农和地主有所区别；不可将农村中反对封建地主阶级的方法，运用与城市中反对工商业资产阶级的斗争。这就将党在抗日战争时期实行的减租减息政策改变为实行"耕者有其田"的政策。本题正确答案为C。',
                content14: '13. 【答案解析】本题正确选项为 B 选项，爱国主义是历史的、具体的，不是抽象的，在不同的历史条件和文化背景下所形成的爱国主义，总是具有不同的内涵和特点。爱国主义的丰富性和生命力，正式通过它的历史性和具体性来表现的。题干中表明子啊新民主主义革命时期，现阶段，爱国主义都有不同的内涵和特点，正式爱国主义历史的、具体的重要体现。因此，本题正确答案为B。',
                content15: '14. 【答案解析】本题正确选项为 A 选项，本题考查的是人权保障的前提和基础。人权的法律保障包括宪法保障、立法保障、行政保护和司法救济。宪法保障是人权保障的前提和基础。立法保障是人权保障的重要条件。行政保护是人权保障的关键环节。司法救济是人权保障的最后防线。因此本题答案是选项D。',
                content16: '15. 【答案解析】本题正确选项为 C 选项，本题为时政题，考查十八届五中全会。2015年10月26日至29日，中国共产党第十八届中央委员会第五次全体会议在北京举行。全会审议通过了《中共中央关于制定国家经济和社会发展第十三个五年计划的建议》因此，答案选C。',
                content17: '16. 【答案解析】本题正确选项为 B 选项，本题为时政题，考查的是欧洲难民危机产生自2015年初开始，欧洲遭受了二战以来规模最大的难民危机。导致难民数量增长的根本原因是指这些国家和地区的内在原因。因此，答案选B中东地区战乱、冲突和动荡加剧。其他原因都是外在原因，不构成根本原因。',
                content18: '二、多项选择题：',
                content19: '17. 【答案解析】本题正确选项为 ACD 选项，本题考查的是客观规律性与主观能动性，以及事物的本质与属性的。事物的本质是事物的内在联系和根本性质，是相对稳定的，只有靠人的理性思维才能把握，它并不随人们的认识变化而改变。所以B项说法错误。任何事物都具有无限多样的属性，是事物的外部联系和表面特征，人们能够透过对个别事物的认识而达到对世界整体的把握。并且借助于工具日益深化对客观世界的认识，故ACD正确。',
                content20: '18. 【答案解析】本题正确选项为 ABD 选项，本题考查的是时间的一维性。时间是指物质运动的持续性、顺序性，特点是一维性。题干中“物换星移、莫待无花空折枝、白首方悔读书迟”都体现了时间的稍纵即逝，一去不复返，正是时间一维性的体现。而C选项描写的溪水、山雨则没有体现。因而正确答案为ＡＢＤ。',
                content21: '19. 【答案解析】本题正确选项为 BCD 选项，本题考查的是经济危机产生的原因。资本主义经济危机爆发的根本原因是资本主义的基本矛盾，其具体表现之一就是生产无限扩大的趋势与劳动人民有支付能力的需求相对缩小的矛盾。因而ＢＣＤ正确。',
                content22: '20. 【答案解析】本题正确选项为 ABD 选项，本题考查的是经济全球化迅猛发展的因素。世界经济全球化迅猛发展的因素主要有：首先，是科学技术的进步和生产力的发展，这为经济全球化提供了坚实的基础，所以Ａ项必选。其次，跨国公司的发展为经济全球化提供了适宜的企业组织形式，促进了国际分工，推动了经济全球化的进程，所以B项是正确的。最后，各国经济体制的变革，为国际资本的流动、国际贸易的扩大、国际生产的大规模进行提供了适宜的体制环境和政策条件，所以Ｄ项是正确的。C项所述只是企业自身个体行为，并不成为"经济全球化迅猛发展的因素"，与题意不符，故不选。所以本题正确答案是ABD。',
                content23: '21. 【答案解析】本题正确选项为 CD 选项，本题考查的是科学社会主义与空想社会主义的区别。空想社会主义的局限性主要表现在，他们憧憬取代资本主义的理想社会,却找不到通往理想社会的现实道路。选项D正确，空想社会主义者只看到了资本主义必然灭亡的命运，却未能揭示资本主义必然灭亡的经济根源；故选项C正确，科学社会主义在掲示人类社会发展一般规律的基础上指明社会发展的方向，没有对未来社会进行细致的描绘，选项B错误，空想社会主义也对对资本主义进行了无情的批判，选项Ａ错误，所以本题答案选选项ＣＤ。',
                content24: '22. 【答案解析】本题正确选项为 ABC 选项，中国高铁走出国门，走向世界。表明我国参与国际竞争能力明显增强，自主创新能力显著提高，国际投资合作水平日益提升。并没有使传统产业结构调整得到根本性改变，所以D选项是错误的。故本题正确答案是ABC。',
                content25: '23. 【答案解析】本题正确选项为 AC 选项，在全面深化改革中，我国提出了一系列放活民间投资的普惠政策，如保障民间投资在电网、电信、铁路等非竞争性领域的参与力度等，实施这些政策的目的是为了保证各种所有制经济依法平等使用生产要素以及保证各种所有制经济公开公平公正参与市场竞争。而选项"鼓励所有民企建立现代企业制度"和"允许各种所有制经济实行企业员工持股"与题意无关。所以本题正确答案是AＣ。',
                content26: '24. 【答案解析】本题正确选项为 ABCD 选项，内容属于时政方面，但契合毛中特考点。四个选项均是十八届五中全会提出实施精准扶贫、精准脱贫的基本方略的主要措施。故本题全选。',
                content27: '25. 【答案解析】本题正确选项为 ABCD 选项，内容属于时政方面，但契合毛中特考点。四个选项均是简政放权的目的。故全选。',
                content28: '26. 【答案解析】本题的正确选项为 ABC 选项，选项D"人民当家作主的根本保证"是中国共产党的领导，应该排除。统一战线是夺取革命、建设和改革事业胜利的重要法宝，是中国共产党的一大政治优势，是实现中华民族伟大复兴中国梦的重要法宝。因此，本题的正确答案是选项ABC。',
                content29: '27. 【答案解析】本题正确选项为 BCD 选项，本题考查维新运动失败的原因，资产阶级维新派虽然提倡学习西方，但是没有彻底否定"中学"，应该排除选项A。选项B是维新运动失败的外因，选项CD是维新派失败自身的原因。因此，本题的正确答案是选项BCD。',
                content30: '28. 【答案解析】本题的正确选项为 ABC 选项，本题考查新文化运动的意义，选项D是新文化运动的局限，其他选项都是新文化运动的意义。因此，本题的正确答案是选项ABC。',
                content31: '29. 【答案解析】本题的正确选项为 ABCD 选项，邓小平在南方谈话中，曾经提到：计划和市场的关系；社会主义的本质；发展是硬道理；"三个有利于"；加强党的建设等内容。选项ABCD都是本题的正确答案。',
                content32: '30. 【答案解析】本题的正确选项为 ABCD 选项，本题考查的是建设中国特色社会主义法治体系的主要内容。建设中国特色社会主义法治体系就是在中国共产党的领导下，坚持中国特色社会主义制度，形成完备的法律规范体系、高效的法治实施体系、严密的法治监督体系、有力的法治保障体系、形成完善的党内法规体系，坚持依法治国、依法执政、依法行政共同推进，坚持法治国家、法治政府、法治社会一体建设，实现科学立法、严格执法、公正司法、全民守法，促进国家治理体系和治理能力现代化。由此可以看到，法治体系既有法律的制定，也有法律的落实，法律体系只是具体的制度内容，是静态的法律文本，也没有强调法律的落实。所以本题答案是ＡＢＣＤ。',
                content33: '31. 【答案解析】本题的正确选项为 ABD 选项，本题考查的是法律权利与法律义务的辩证关系。首先法律权利与法律义务是相互依存的关系，法律权利的实现必须以相应法律义务的履行为条件，法律义务的设定和履行也必须以法律权利的行使为依据。其次，法律权利与法律义务是目的与手段的关系。离开了法律权利，法律义务就失去了履行了价值和动力。同样，离开了法律义务，法律权利也形同虚设。最后，法律权利和法律义务还具有二重性的关系，即一个行为可以同时是权利行为和义务行为。所以正确答案为ＡＢＤ。',
                content34: '32. 【答案解析】本题的正确选项为 ABCD 选项，2015年11月7日，中共中央总书记、国家主席习近平同台湾地区领导人马英九在新加坡会面，这是1949年以来两岸领导人的首次会面，翻开了两岸关系历史性的一页，习近平就携手巩固两岸关系和平发展大格局、让中华民族子孙后代共享美好未来提出：坚持两岸共同政治基础不动摇，坚持巩固深化两岸关系和平发展，坚持为两岸同胞多谋福祉，坚持同心实现中华民族伟大复兴。因此，答案选ABCD.',
                content35: '33. 【答案解析】本题的正确选项为 ABD 选项，2015年11月30日，国际货币基金组织执行董事会批准人民币加入特别提款权（SDR）货币篮子，新的货币篮子将于2016年10月1日正式生效。人民币成为除美元、欧元、日元和英镑之外"入篮"的第五种货币。世界货币秩序16年来第一次发生改变。人民币"入篮"对世界经济有助于增强SDR的代表性和吸引力，完善现行国际货币体系，使.中国的经济地位得到国际认可，全球经济格局发生积极变化，有助于维护全球金融稳定和完善全球经济治理。但是，人民币不能在短期内将成为在全球金融市场上使用水平最高的货币。所以，答案选ABD。',
                content36: '三、分析题：',
                content37: '34. 【参考答案】'
                　　+'(1)实践是认识的基础，是认识的来源和发展的动力。从全面建设小康社会到全面建成小康社会，从全面从严治党、全面深化改革到全面依法治国，"四个全面"的提出以问题意识和人民情怀为深刻根据，在实践的基础上逐步形成为新时期的战略布局，这是一个过程。（1分）'
                　　+'认识对实践具有指导作用，实现从认识到实现的飞跃需要具备条件。作为实践指南和行动纲领，"四个全面"在现实中的协调推进需要结合具体的实践、始终坚持真理与价值的统一，在现实可行的情况下，不断被群众所接受和掌握，才能真正指导实现"两个一百年"目标，实现中华民族伟大复兴中国梦，这也是一个过程。'
                　　+'总之，从实践到认识、从认识到实践，认识运动不断反复和无限发展，"四个全面"已经成为新的历史起点上的战略布局，落实"四个全面"就是一个新征程。'
                　　+'(2)"四个全面"战略构想在各个方面都体现了唯物辩证法思想。'
                　　+'第一，体现了事物联系和发展的思想。联系和发展是唯物辩证法的总特征。联系是指事物内部各要素之间和事物之间相互影响、相互制约和相互联系的关系。"四个全面"不仅揭示了"建成小康社会""深化改革""依法治国"和"从严治党"之间的联系，也揭示各自战略目标和举措之间的联系。发展是前进的上升的运动，发展的实质是新事物的产生和旧事物的灭亡。"四个全面"思想也体现了事物是发展变化的这一辩证思想。'
                　　+'第二，辩证法要求我们用整体的、全面的观点看问题。四个"全面"思想贯彻了唯物辩证法全面看问题的方法。'
                　　+'第三，在唯物辩证法的方法论体系中，矛盾分析方法居于核心地位，是根本的认识方法，如要求人们做到"两点论"和"重点论"相结合等，"四个全面"思想也是矛盾分析方法的具体体现。总之，"四个全面"战略思想是唯物辩证法思想的集中反映和深刻展现。',
                content38: '35. 【参考答案】'
                　　+'(1)第一，环境污染是民生之患、民心之痛，必须以铁腕治理。从铁腕治污我们认识到生态文明建设的重要性和紧迫性。我国经济建设虽然取得了重大成就，但总体上看我国生态文明建设水平仍滞后于经济社会发展，资源约束趋紧，环境污染严重，生态系统退化，发展与人口资源环境之间的矛盾日益突出，已成为经济社会可持续发展的重大瓶颈制约。'
                　　+'第二，加快推进生态文明建设是加快转变经济发展方式、提高发展质量和效益的内在要求。'
                　　+'第三，落实科学发展观的要求，促进经济发展与环境保护协调发展。'
                　　+'(2)第一，要完善经济社会发展考核评价体系。建立系统完整的生态文明制度体系，最重要的是要把资源消耗、环境损害、生态效益等体现生态文明建设状况的指标纳入经济社会发展评价体系，使之成为推进生态文明建设的重要导向和约束。'
                    +'第二，划定生态保护红线，建立责任追究制度。生态红线就是国家生态安全的底线和生命线，这个红线不能突破，一旦突破必将危及生态安全、人民生产生活和国家可持续发展。要让生态红线的观念广为人知、根深蒂固。'
                    +'第三，健全法律法规，完善生态环境保护管理制度。要加快"立改废"进程，尽快完善生态环境、土地、矿产、森林、草原等方面保护和管理的法律制度，要改革生态环境保护管理体制，建立和完善严格监管所有污染物排放的环境保护管理制度。'
                    +'第四，中国将按照尊重自然、顺应自然、保护自然的理念，贯彻节约资源和保护环境的基本国策，进一步完善生态文明制度体系，把生态文明建设融入经济建设、政治建设、文化建设、社会建设各方面和全过程，从而为子孙后代留下天蓝、地绿、水清的生产生活环境。'
                    ,
                content39: '36. 【参考答案】'
                    +'(1)第一，"赶考"意味着中国共产党即将面临"执政"和"建设"的重大任务。'
                　　+'第二，当时民主革命的任务尚未完成。比如，土地改革在新解放区还没有推行；国民党当局残留势力依然存在，共产党执政地位尚未巩固，这些都是面临的考验。'
                　　+'第三，全国性政权建立后，中国共产党将面临现代化建设的任务。争取民族独立人民解放，实现国家富强人民富裕，是近代以来中华民族面临的两大历史任务，中国共产党带领中国人民实现第一个历史任务即民族独立人民解放以后，还要继续为实现国家富强民族富裕迈进。'
                　　+'(2)第一，这说明我们党在执政60多年、现代化建设取得一定成绩的情况下，面临新的世情、党情和国情，迫切要求执政的中国共产党提高自身的执政能力和执政水平。'
                　　+'第二，中国共产党将继续发扬西柏坡精神，始终坚持和弘扬"两个务必"，即务必保持谦虚谨慎、不骄不躁的作风、务必保持艰苦奋斗的作风。'
                　　+'第三，在新的历史条件下，中国共产党面临"四大考验"和"四大危险"，因此，中国共产党必须在"四个全面"战略布局指导下，坚持思想建党与制度治党相结合，加强组织、纪律和作风建设，全面从严治党。'
                　　,
                content40: '37. 【参考答案】'
                    +'(1)家风是指一个家庭或家族的传统风尚或作风。良好的家风，对家庭成员的个人修养、品德操守等产生重要而积极的作用，家风不正，家庭成员的个人品行也容易出问题。家教是实现家庭美德与家风互动的中介环节，要通过注重家教来推动良好家风的传承和落实。良好的家风对整个社会风尚有着重要影响。中华民族自古以来就重视家庭、重视亲情。天伦之乐、尊老爱幼、贤妻良母、相夫教子、勤俭持家等，都体现了中国人的这种观念。'
                　　+'(2)社会主义核心价值观是富强、民主、文明、和谐，倡导自由、平等、公正、法治，倡导爱国、敬业、诚信、友善。家庭是社会的细胞，好家风是发展社会主义先进文化、培育社会主义核心价值观的深厚基础，拥有好的家风方可建设中华民族共有的精神家园。好的家风是社会主义核心价值观建设的重要条件。'
                　　+'培育和践行社会主义核心价值观，家庭家风是重要抓手，重在从身边事做起，从小事做起。我们都要重视家庭建设，注重家庭、注重家教、注重家风，紧密结合培育和弘扬社会主义核心价值观，发扬光大中华民族传统家庭美德，促进家庭和睦，促进亲人相亲相爱，促进下一代健康成长，促进老年人老有所养，使千千万万个家庭成为国家发展、民族进步、社会和谐的重要基点。'
                　　,
                content41: '38. 【参考答案】'
                    +'(1)第一，联合国宪章的宗旨是维护国际和平安全，促进国际合作，原则是各主权国家一律平等等。联合国成立以来，积极推进非殖民化运动，支持被压迫民族自决和独立。维护世界和平与安全，防止和制止战争的爆发和扩大。促进世界经济繁荣，特别是发展中国家的经济发展。联合国还是大国间调整相互关系以及发展中国家结交朋友、维护权益、交换意见、共同推动建立和平、稳定、公正、合理的国际新秩序的最重要场所。联合国在解决人类面临的众多问题，如环境、人口、生态、资源等方面，都起着十分重要作用。但是，非传统安全和发展问题，霸权国家的挑战，联合国自身存在的问题等都影响着联合国权威性的发挥。因此，当今世界维护以联合国宪章宗旨为核心的国际秩序和国际体系极其重要。'
                　　+'第二，当今世界面临着霸权主义、地区冲突和各种非传统安全的威胁，只有发挥联合国的作用，才能维护地区稳定，才能维护世界和平，才能解决各种非传统安全的威胁。'
                　　+'第三，当今世界贫富悬殊，南北差距扩大问题依然严重存在，世界各国只有继承和弘扬联合国宪章宗旨和原则，构建以合作共赢为核心的新型国际关系，才能消除贫富悬殊，减少南北差距，打造人类命运共同体。'
                    +'(2)第一，和平、发展、公平、正义、民主、自由，是全人类的共同价值，也是联合国的崇高目标，也是国际社会的普遍要求。'
                　　+'第二，当今世界，各国相互联系、依存的程度空前扩大。人类生活在同一个地球村里，生活在历史和现实交汇的同一个时空里，越来越成为你中有我、我中有你的命运共同体。'
                　　+'第三，倡导命运共同体意识、打造人类命运共同体符合人类社会的发展趋向，强调在追求本国利益时兼顾他国合理利益，在谋求本国发展中促进各国共同发展，同舟共济、权责共担、增进人类整体利益。'
                　　+'第四，构建合作共赢的新型国际关系是打造人类命运共同体的必然选择。我们要建立平等相待、互谅互让的伙伴关系；营造公平正义、共建共享的安全格局；谋求开放创新、包容互鉴的发展前景；促进和而不同、兼收并蓄的文化交流；构筑尊崇自然、绿色发展的生态体系。'
                　　+'第五，因此，命运共同体意识符合联合国宪章精神的基本要求，是对联合国宪章精神的新发展，是当前经济全球化发展的新要求，符合各国发展的客观需要，对维护世界和平和发展具有重大的意义'
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
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. 《百喻经》中有一则寓言：有一个愚人到别人家去做客，他嫌菜没有味道，主任就给他加了点盐，菜里加盐以后，微雕好极了。愚人就想："菜之所以鲜美，是因为有了盐。加一点点就如此鲜美，如果加更多的盐，岂不更加好吃？"回家之后，他把一把盐放进嘴里，结果又苦又咸。这则寓言给我们的启示是（）{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.持续的量变会引起事物发生质的变化{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.在认识和处理问题时要掌握适度的原则{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.不可能通过一些现象而去认识某个事物的本质{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.在事物的发展过程中要时时注意事物的自我否定</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. 由一种观点认为："自由不在于幻想中摆脱自然规律而独立，而在于认识这些规律，从而能够有计划地史自然规律为一定的目的服务"。还有一种观点认为，"'自由'倒过来就是'由自'，因此'自由'等于'由自'，'由自'及是随心所欲"。这两种关于自由的观点（）{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.前者是唯物辩证的观点，后者是唯意志论的观点{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.前者是机械唯物主义的观点，后者是唯心主义的观点{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.前者是主观唯心主义的观点，后者是唯物辩证法的观点{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.前者是历史唯心主义的观点，后者是历史唯物主义的观点</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. 某资本家投资100万元创办企业从事生产，60万元用于固定资本，以购买机器设备等,40万元用于流动资本，以购买原材料和劳动力等（其中购买劳动力支付10万元)。一轮生产结束后，该企业的总资本达到了120万元，那么该企业的剩余价值率为（）{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.20%{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.50%{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.100%{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.200%</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4. 20世纪70年代以来，西方资本主义国家的金融资本急剧膨胀，这一方面促进了资本主义的发展，另一方面造成了经济过度虚拟化，致使金融危机频繁发生,西方资本主义金融资本快速发展壮大的重要制度条件是(){'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.金融自由化金融创新{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.技术创新与大力发展互联网金融{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.全面私有化与放松金融监管{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.去工业化与大力发展现代化服务业</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5. 毛泽东思想和中国特色社会主义理论体系是马克思主义中国化的两大理论成果，贯穿这两大理论成果始终，并体现在两大成果各个基本观点中的世界观和方法论的基础是（）{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.群众路线{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.实事求是{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.独立自主{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.改革创新</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6. 社会主义共产制度确立后，如何在中国这样一个经济文化比较落后东方大国建设和巩固社会主义，是党面临全新课题。1956年4月，毛泽东作了《论十大关系》的报告，在初步总结我国社会主义建设经验的基础上，从十个方面论述了我国社会主义建设需要重点把握的重大关系。"十大关系"所围绕的基本方针是（）{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.集中力量向科学进军{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.调动一切积极因素为社会主义事业服务{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.既反保守有反冒进，在综合平衡中稳步前进{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.正确处理人民内部矛盾</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7. 新世纪以来，我国经济和社会发展呈现出一系列新的阶段性特征，但是，这些新的阶段性特征的出现并没有改变我国仍处于社会主义初级阶段这一基本事实。这表明，社会主义初级阶段是（）{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.科学社会主义基本原则与时代精神相适应过程{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.长期性与阶段性的动态发展过程{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.先进社会制度与落后社会生产的矛盾运动过程{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.社会性质与发展程度的有机统一过程</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8. 西藏自治区成立五十年来，通过实行民族区域自治制度，从落后走向进步，从贫穷走向富裕，从封闭走向开放，社会制度实现了历史性的跨越。今天的西藏，社会稳定，经济发展，民生改善，生态向好，各方面成绩卓著。实践证明，民族区域自治制度是适合民族地区特点、具有中国特色的一项基本政治制度，民族区域自治的核心是（）{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.凝聚力量，增进共识{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.实现各民族平等、团结、合作和共同繁荣{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.汉族离不开少数民族，少数民族离不开汉族{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.保障少数民族当家作主，管理本民族本地方事务的权利</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9. 1840年鸦片战争以后，中国遭受西方列强"坚船利炮"的欺凌不断加深，中华民族面临生死存亡的形势也日益严峻，中国"睡狮"在西方列强的隆隆炮声中渐渐苏醒。促使中国人民的民族意识开始普遍觉醒的重大事件是(){'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.中法战争{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.中日甲午战争{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.八国联军侵华战争{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.日本全面侵华战争</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10. 1843年，魏源编成《海国图志》。他在书中写道："是书何以作?曰为以夷攻夷而作,为以夷款夷而作,为师夷长技以制夷而作。"魏源所说的夷之"长技"主要是指西方的（）{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.民主和政治制度{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.教育和人才培养{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.军事和科学技术{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.宗教和思想文化</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11. 抗日战争是一场全民族反抗外敌入侵的正义战争。抗战初期，在华北战场上规模最大、最激烈的一次战役，也是国共两党军队合作抗日、配合最好的一次战役是（）{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.忻口会战{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.长城抗战{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.平津会战{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.台儿庄战役</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;12. 1946年5月4日，中共中央发出《关于清算、减租及土地问题的指示》（史称《五四运动指示》)，决定将党在抗日战争时期实行的减租减息政策改变为（）{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A."没收一切土地"的政策{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B."地主不分田，富农分坏田"的政策{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C."耕者有其田"的政策{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D."保存富农经济"的政策</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;13. 爱国主义在不同的历史和文化背景下有着不同的内涵和特点。在新民主主义革命时期，爱国主义主要表现为致力于推翻帝国主义、封建主义和官僚资本主义的反动统治，把黑暗的旧中国改造成光明的新中国，在现阶段，爱国主义主要表现为心系国家的前途和命运，献身于社会主义现代化事业，献身于祖国统一大业。这表明（）{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.爱国主义是客观的、具体的{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.爱国主义是历史的、具体的{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.爱国主义是客观的，抽象的{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.爱国主义是主观的，现实的</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;14. 我国宪法将"国家尊重和保障人权"规定为一项基本原则，法律的重要使命就是充分尊重和保陳人权、人权的法律保障包括宪法保障，立法保障、立法保障、行政保护和司法保障。其中，宪法保障是（）{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.人权保障的前提和基础{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.人权保障的重要条件{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.人权保障的关键环节{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.人权保障的最后防线</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;15. 2015年10月26日至29日，中国共产党第十八届中央委员会第五次全体会议在北京举行。全会审议通过了（）{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.《中共中央关于全面深化改革若千重大问题的决定》{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.《中共中央关于建立社会主义市场经济体制若千问题的决定》{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.《中共中央关于制定国民经济和社会发展笫十三个五年规划的建议》{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.《中共中央关于全面推进依法治国若干重大问题的决定》</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;16. 自2015年初开始，欧洲遭受了二战以来规模最大的难民危机，导致难民数量急剧增长的根本原因在于（）{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.欧盟在难民问埋上没有形成共同的应对策略{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.中东地区战乱，冲突和动荡加剧{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.美国等发达国家无力接收大量难民{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.极端组织"伊斯兰国"疯狂驱逐当地难民</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16, fontWeight: 'bold' }}>二、多项选择题：17～33题，每小题2分，共34分。下列每题给出的四个选项中，至少有两个选项是符合题目要求的。</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;17. 显微摄影是一门使用照相机拍摄显微镜下一般用肉眼无法看清的标本的技术。肉眼中千篇一律的细沙，在显微镜下确实"一沙一世界"。有的晶莹剔透像宝石，有的金黄酥脆像饼干。即使是司空见惯的柴米油盐，在显微镜下也会展现神奇而充满美丽的一面。显微镜下的"一沙一世界"表明（）{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.任何事物都具有无限多样的属性{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.事物的本质随着人们的认识的变化而改变{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.人们可以通过制造和使用工具日益深化对客观世界的认识{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.人们可以通过对个别事物的认识而达到对世界整体的把握</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;18. 唐朝诗人张若虚《春江花月夜》中的"人生代代无穷已，江月年年只相似"两句诗蕴涵着时间一维性的哲理。下列诗句中蕴涵相同哲理的是（）{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.闲云潭影日悠悠，物换星移几度秋{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.花开堪折直须折，莫待无花空折枝{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.溪云初起日沉阁，山雨欲来风满楼{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.黑发不知勤学早，白首方悔读书迟</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;19. 马克思说："一切现实的危机的最终原因始终是：群众贫穷和群众的消费受到限制，而与此对立，资本主义生产却竭力发展生产力，好像只有社会的绝对的消费能力才是生产力发展的界限。"这段论述表明（）{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.社会的绝对的消费能力导致了经济危机的发生{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.经济危机的发生根本上在于资本主义的基本矛盾{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.资本积累与无限扩大生产也是经济危机发生的原因{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.经济危机的发生与群众的贫穷及消费能力受到限制有关</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;20. 20世纪80年代以来，随着冷战的结束，分割的世界经济体系也随之辈打破，技术，资本、商品等真正实现了全球范围的流动，各国之间的经济联系日益密切，相互合作、相互依存大大加强，世界进入到经济全球化迅猛发展的新时代。促使经济全球化迅猛发展的因素有（）{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.科学技术的进步和生产力的快速发展{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.出现了适宜于全球化的企业组织形式{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.企业不断进行的技术创新与管理创新{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.各国经济体制变革供给出的有利制度条件</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;21. 1956年，英国人托马斯·莫尔发表了《乌托邦》一书，标志着空想社会主义的诞生，1848年，马克思恩格斯发表了《共产党宣言》，标准着科学社会主义的产生，社会主义实现了从空想到科学的历史性飞跃。科学社会主义超越空想社会主义之处在于（）{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.对资本主义进行了无情的批判{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.对未来社会进行了细致的描绘{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.揭示了资本主义必然灭亡的经济根源{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.找到了实现理想社会的现实道路</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;22. 2015年10月16日，中国铁路总公司牵头组成的中国企业联合体，与印度尼西亚维卡公司牵头的印尼国企联合体正式签署组建中印尼合资公司协议。该公司将负责印度尼西亚雅加达至万隆高速铁路项目的建设和运营。中国高铁走出国门、走向世界表明我国（）{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.参会国际竞争能力明显增强{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.自主创新能力显著提高{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.国际投资合作水平日益提升{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.传统产业结构调整得到根本性转变</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;23. 在全面深化改革中，我国提出了一系列放活民间投资的普惠政策，如保障民企平等使用土地、减免税收，扩大民间投资在电网、电信、铁路等非竞争性领域的参与力度等。实施这些政策的目的是（）{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.保证各种所有制经济依法平等使用生产要素{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.鼓励所有民企建立现代企业制度{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.保证各种所有制经济公平公正参与市场竞争{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.允许各种所有制经济实行企业员工持股</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;24. 改革开放中，党和国家实施大规模扶贫开发，使7亿农村贫困人口摆脱贫困，但是到2014年末，全国仍有7017万农村贫困人口。农村贫困人口脱贫是全面建成小康社会最艰巨的任务。为打赢脱贫攻坚战，党的十八届五中全会提出了精准扶贫、精准脱贫的基本方略，实施这一方略的主要举措有（）{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.产业扶贫{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.转移就业{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.异地搬迁{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.社保政策兜底</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;25. 从2013年3月到2015年7月，李克强总理主持召开了101次国务院常务会议，其中有46次会议部署简政放权，取消和下放了800多项行政审批事项。他还用"大道至简，有权不可任性"、"用政府权利'减法'换取市场活力的'乘法'"等生动而深刻的话语回应了公众对简政放权的期待。简政放权旨在{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.处理好政府语病市场关系，加快完善社会主义市场经济体制{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.减少审批环节，降低市场交易成本{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.激发市场主体内在活力和社会创造力{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.提高政府治理能力和治理水平</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;26. 2015年召开的中央统战工作会议强调，我们党所处的历史方位、所面临的内外形势、所肩负的使命任务发生了重大变化。越是变化大，越是要把统一战线发展好、把统战工作开展好。统一战线作为党的一项长期方针，决不能动摇。中国共产党之所以高度重视统战工作，因为统一战线是（）{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.夺取革命、建设和改革事业胜利的重要法宝{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.实现中华民族伟大复兴中国梦的重要法宝{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.中国共产党的一大政治优势{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.人民当家作主的根本保证</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;27. 1898年的"百日维新"如昙花一现，只经历103天就夭折了。谭嗣同在慷慨就义前仰天长叹："有心杀贼，无力回天"。维新派"无力回天"的主要原因是（）{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.他们提倡全面学习"西学"，彻底否定"中学"{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.他们遭到了以慈禧太后为首的强大的守旧势力的反击和镇压{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.他们惧怕人民群众，把改革的全部希望寄托在一个没有实权的皇帝身上{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.他们不敢触动封建主义的经济基础</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;28. 1915年9月，陈独秀在上海创办《青年杂志》（后改名《新青年》），吹响了新文化运动的号角。新文化运动高举民主和科学两面大旗，向封建主义思想文化发起了前所未有的猛烈冲击。新文化运动的历史意义表现在它（）{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.是中国历史上一次前所未有的启蒙运动{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.在社会上掀起了一股思想解放的潮流{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.为马克思主义在中国的传播创造了有利条件{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.彻底否定了孔学的历史作用</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;29. 1992年初，在关乎中国改革开放和社会主义现代化建设前途命运的关键时刻，邓小平在视察武昌、深圳、珠海、上海等地时，发表了重要谈话，谈话的主要内容有(){'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.革命是解放生产力，改革也是解放生产力{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.不坚持社会主义，不改革开放，不发展经济，不改善人民生活，只能是死路一条{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.走社会主义道路，就是要逐步实现共同富裕{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.计划多一点还是市场多一点，不是社会主义与资本主义的本质区别</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;30. 我国在建设社会主义法治国家的道路上不断探索，继2011年宣布中国特色社会主义法律体系已经形成之后，2014年又提出"建设中国特色社会主义法治体系"的目标。从"法律体系"到"法治体系"的变化体现在( ){'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.法治体系不仅有法律规范体系，还包括法治实施体系、法治监督体系、法治保障体系和党内法规体系{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.法治体系强调科学立法、严格执法、公正司法、全民守法{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.法治体系既要有法律的制定，也要保证法律的落实{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.法治体系不仅仅是静态的法律文本，而且也是动态的法的实现</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;31. 法律权利和法律义务的关系，就像一枚硬币的两面，密不可分。二者之间关系的正确表述是( ){'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.法律权利与法律义务是相互依存的关系{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.法律权利与法律义务是目的与手段的关系{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.法律权利与法律义务具有顺序性{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.法律权利与法律义务具有二重性</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;32. 2015年11月7日，中共中央总书记、国家主席习近平同台湾地区领导人马英九在新加坡会面。这是1949年以来两岸领导人的首次会面，翻开了两岸关系历史性的一页。习近平就携手巩固两岸关系和平发展大格局、让中华民族子孙后代共享美好未来提出的意见是( ){'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.坚持两岸共同政治基础{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.坚持巩固深化两岸关系和平发展{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.坚持为两岸同胞多谋福祉{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.坚持同心实现中华民族伟大复兴</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;33. 2015年11月30日，国际货币基金组织执行董事会批准人民币加入特别提款权（SDR）货币篮子，新的货币篮子将于2016年10月1日正式生效。人民币成为除美元、欧元、日元和英镑之外"入篮"的第五种货币，世界货币秩序16年来第一次发生改变。人民币"入篮"对世界经济的重大意义主要在于( ){'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.有助于增强SDR的代表性和吸引力，完善现行国际货币体系{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.中国的经济地位得到国际认可，全球经济格局发生积极变化{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.人民币短期内将成为在全球金融市场上使用水平最高的货币{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.有助于维护全球金融稳定和完善全球经济治理</Text>

                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16, fontWeight: 'bold' }}>三、分析题：34～38小题，每小题10分，共50分。要求结合所学知识分析材料并回答问题。</Text>
                        <View>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;34.结合材料回答问题：</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;材料1：</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;要着力服务全面建成小康社会、全面深化改革、全面依法治国、全面从严治党的战略布局。"四个全面"的战略布局是从我国发展现实需要中得出来的，从人民群众的热切期待中得出来的，也是为推动解决我们面临的突出矛盾和问题提出来的。
                            </Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>摘自习近平：《同党外人士共迎新春时的讲话》（2015年2月11日）</Text>

                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;材料2：</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;辩证唯物主义是中国共产党的世界观和方法论，我们党要团结带领人民协调推进全面建成小康社会、全面深化改革、全面依法治国、全面从严治党，实现"两个一百年"奋斗目标，实现中华民族伟大复兴的中国梦，必须不断接受马克思主义哲学智慧的滋养，更加自觉地坚持和运用辩证唯物主义世界观和方法论，增强辩证思维、战略思维能力，努力提高解决我国改革发展基本问题的本领。
                            </Text>
                            
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>摘自习近平：《在十八届中央政治局第二十次集体学习时的讲话》（2015年1月23日）</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;材料3：</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;全面建成小康社会是党的十八大提出来的，它是从党的十六大、十七大全面建设小康社会目标任务的基础上发展而来。它们之间虽然只有一字之差，但内涵却发生了深刻的变化，外延大大拓展了。全面建设小康社会是正在进行时，全面建成小康社会则是将来完成时。全面深化改革是党的十八届三中全会所确定的主题，是三中全会对我国改革做出的战略部署。全面依法治国是党的十八届四中全会所确定的主题，是四中全会对我国法制建设提出的战略任务。从全面从严治党是在党的群众路线教育实践活动总结大会上，习近平总书记对教育实践活动以及对党的十八大以来党风廉政建设和腐败斗争、党的各项工作所取得的成效、获得的经验、形成的成果进行的概括和总结，又是对今后党的建设进一步提出新要求。
                            {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"四个全面"既是重大的战略布局，也是治国理政的重要战略思想。从哲学的高度来讲，"四个全面"是一个过程，不仅是因为它的提出和形成是一个过程，而且它的协调推进也将是一个过程。
                            </Text>
                            
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>摘编自《光明日报》（2015年4月1日）</Text>
                            
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;(1)从认识的本质及其发展规律的视角，分析为什么说"'四个全面'是一个过程"？（5分）</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;(2)"四个全面"重要战略思想体现了怎样的辩证思维？（5分）</Text>
                        </View>
                        <View>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;35.结合材料回答问题：</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;材料1：</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2015年1月1日，新环保法正式实施。2月底，环保部相关部门公开的谈L市主要领导，作为新环保法实施后第一个被约谈城市，L市的污染经媒体曝光后引发全国关注，铁腕治污立竿见影，PM2.5、PM10、二氧化硫、二氧化氮指标大幅下降。但环保风暴很快遭遇了新的困境，L市经济基础薄弱，改革开放后，为加快发展，招商时铺设了一些"绿色通道"，不少企业缺乏环评手续。此次停产整顿，部分企业因无环评手续一时难以复产，企业关停后，工人失业又带来新的问题。潜在的金融风险也渐成燃眉之势，环保风暴遭遇到现实和利益的严峻挑战。
                                {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;对于L市委治污下猛药的做法，中央电视台、《人民日报》、《经济日报》、新华网、人民网、光明网、环保部官员及不少地方媒体纷纷跟进报道或发表评论，众多网友也争相发声。且看一些比较有代表性的观点：
                                {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A：用环境污染换来的经济发展，早晚得淘汰。重病需猛药，现在是天蓝水绿，多好啊！
                                {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B：-个小地主的命，非要过比尔o盖茨的生活，怎么可能！
                                {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;C：政府要达标，企业要生存，百姓要环境。非常难！……决心不等于蛮干，环保和经济的平衡点找不好，再好的决定也会变二次伤害。
                                {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;D:休克式治霾太惊悚了。在如今经济持续低迷的背景下人为制造大面积失业和债务危机，简直是生态大跃进！
                                {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;E:铁腕治污力度值得赞赏，但有些问题可以讨论，意识到方向有问题，是急刹车，还是有个滑行过程？L市这次是狠狠的踩了一脚刹车，车停了，但乘客人仰马翻，有点摔得特别重，有的勉强站着，还不知能站多久。
                                {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;F:被关停的企业满满的全是委屈，责任全部推给外界，以受害者的姿态对自己不堪回首的过去只字不提。今天的L市，是很多历史欠账严重的城市经济转型时期的一个缩影，历史欠账总是要还的。
                                {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;……
                                {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;一场空前的铁腕治污风暴，承受着截然不同的评价。一时间，L市又因治污被推上风口浪尖，但L市以前所未有的决心直面大气污染防治这场艰苦的硬仗，用环保倒逼企业转型升级，让千万市民看到了山青水绿，享受着洁净的空气。9月16日，环保部解除L市大气污染问题挂牌督办。
                                {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;既让环境好转，又让经济同时得到发展，这可能是中国环境治理持续深入后各地亟需作答的选择题。
                            </Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>摘编自央视网（2015年7月3日）、新华网（2015年7月3日）、人民网（2015年7月6日、11月23日）</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(1)从"铁腕治污"引发广泛讨论看，我们应如何认识经济发展同环境治理的关系？（6分）</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(2)"铁腕治污"及其引发的讨论对于推进我国生态文明制度建设有何启示？（4分）</Text>
                        </View>
{/* 36 */}
                        <View>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;36.结合材料回答问题：</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;材料1：</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1944正值李自成领导的农民起义军进入北京推翻明王朝300周年，郭沫若毅然放下正在进行的先秦思想史研究，撰写《甲申三百年祭》，在这篇文章中，郭沫若深刻总结了李自成农民起义成功建立起大顺朝但旋即失败的历史教训，从3月19日起，这篇长文在重庆《新华日报》全文连载，文章发表后，引起社会各界的广泛关注，仅隔20天，毛泽东就在《学习和时局》报告中指出："我党历史上，曾有过几次表现了大的骄傲，都是吃了亏的……近日我们印了郭沫若论李自成的文章，也是叫同志们引为鉴戒，不要重犯胜利时骄傲的错误。"11月21日，毛曾东复信郭沫若："你的甲申三百年祭，我们把它当作整风文件看待，小胜既骄傲，一次又一次吃亏，如何避免此种毛病，实在值得注意。"
                            </Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>摘编自《（甲申三百年祭）风雨六十年》人民出版社2005年版</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;材料2：</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1949年3月23日，毛泽东率中公中央机关离开西柏坡前往北平（北京)，临行前，他对周围的人说:"同志们，我们就要进北平了，我们进北平，可不是李自成进北平，他们进了北平就变了，我们共产党人进北平，是要继续革命，建设社会主义，直到实现共产主义。"他兴奋地对周恩来说："今天是进京'赶考'嘛。"周恩来说："我们应当都能考试及格，不要退回来。"毛泽东说："退回去就失败了。我们决不当李自成，我们都希望考个好成绩。"
                            </Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>摘编自金冲及主编：《毛泽东传（1893-1949)》中央文献出版社1993年版</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;材料2：</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2013年7月11日至12日，习近平总书记来到革命圣地西柏坡，在同县乡村干部和群众座谈中指出，当年党中央离开西柏坡时，毛泽东同志说是进京赶考，六十多年过去了，我们取得了巨大进步，中国人民站起来了，富起来了，但我们面临的挑战和问题依然严峻复杂，应该说党面临的'赶考'远未结束，我们党要带领人民实现全面建成小康奋斗目标，不断坚持和发展中国特色社会主义，就是这场考试的继续。所有领导干部和全体党员要继续把人民对我们党的'考试'、把我们党正在经受和将要经受各种考验的'考试'考好，努力交出优异的答卷。"
                            </Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>摘编自《习近平关于实现中华民族伟大复兴的中国梦论述摘编》中央文献出版社2013年版</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;(1)1949年春，为什么毛泽东把离开西柏坡前往北平比作"赶考"（5分）</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;(2)如何理解习近平所说的"党面临的'赶考'远未结束（5分）</Text>
                        </View>

                        <View>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;37.结合材料回答问题：</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;材料1：</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;中华民族历来有重家风、重家教、守家规的传统，好家风的实例可谓不胜枚举。
                                {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;宋代的司马光，在给儿子司马康的家训--《巡俭示康》中说道："平生衣取蔽寒，食取充腹；亦不敢服垢弊以矫俗干名，但顺吾性而已。众人皆以奢靡为荣，吾心独以俭素为美。"司马光教育儿子要以俭素为美，不要以奢靡为荣，说的是个人志向，批评的是奢靡风气，令人信服。在他的言传身教下，家族后人也都以贤德立身。
                                {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;清代的郑板桥，自幼家贫，为官以后生活条件显然得以改善，但从未将所得俸银留作自家使用，而是分给亲友，乡邻。他在一封家信中写道："每一念及，真含泪欲落也，汝持俸钱南归，可挨家比户，逐一散给。"他还开列了族人及亲友，同窗的具体名单，将俸银全部分完。郑板桥这种乐善好施的行为直到晚年都没有改变，在他的周围产生了广泛影响，更得到后世的赞赏。
        　                      {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;周恩来一向视侄辈为己出，对他们的要求非常严格，并约定了十条家规，如不能丢下工作专程进京看望他，只能在出差路过时才可以来；进京看望他，一律住招待所，住宿费由他支付；一律到机关食堂排队就餐；不许动用公车；在任何场合都不能说出与自己的关系；不谋私利，不搞特殊化等。周恩来定下的家规，自己做到了，他的侄辈也做到了。
                            </Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;材料2：</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;家风是一个人精神成长的重要源头。有什么样的家风，往往就有什么样的做人做事态度、为人处世的风格。从一个人的举手投足到行为处事，能折射出好家风对他的影响，会让人看到父母长辈在他成长中精心抚育的印记。可以说，好家风的传承过程，同样也是延续优良文明基因的过程。
                                {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;随着社会的发展，家风也要与时俱进，将不利于文明进步不利于社会和谐的因素剔除，不断被赋予新的内容。鉴于此，国家通过倡导家风建设，培育和践行社会主义核心价值观，给社会注入暖暖的正能量。
                                {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;正如习近平总书记所说，"家庭是社会的基本细胞，是人生的第一所学校。不论时代发生多大变化，不论生活格局发生多化，我们都要重视家庭建设，注重家庭、注重家教、注重家风"。家风这个源头清澈了，更有利于好的党风、政风、民风和社风的形成。
                            </Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>摘编自《光明日报》（2014年3月27日、12月25日，2015年2月18日等）</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;(1)为什么说"好家风的传承过程，同样也是延续优良文明基因的过程"？（5分）</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;(2)如何通过好家风的传承弘扬社会主义核心价值观？（5分）</Text>
                        </View>

                        <View>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;38.结合材料回答问题：</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;材料1：</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;中国人民抗日战争和世界反法西斯战争，是正义和邪恶，光明和黑暗、进步和反动的大决战。在那场惨烈的战争中，中国人民抗日战争开始时间最早、持续时间最长。中国人民以最大人民牺牲支撑起了世界反法西斯战争的东方主战场，为世界反法西斯战争胜利作出了重大贡献。中国人民抗日战争也得到了国际社会广泛支持，中国人民将永远铭记各国人民为中国抗战胜利作出的贡献！
                                {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;战争是一面镜子，能够让人更好认识和平的珍贵。今天，和平与发展已经成为时代主题，但世界仍很不太平，战争的达摩克里斯之剑依然悬在人类头上，我们要以史为鉴，坚定维护和平的决心。
                                {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;为了和平，我们要牢固树立人类命运共体意识，偏见和歧视、仇恨和战争，只会带来灾难和痛苦，相互尊重、平等相处、和平发展、共同繁荣，才是人间正道，世界各国应该共同维护以联合国宪章宗旨和原则为核心的国际秩序和国际体系，积极构建以合作共赢为核心的新型国际关系，共同推进世界和平与发展的崇高事业。
                            </Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>摘自习近平：《在纪念中国人民抗日战争暨世西斯战争胜利70周年大会上的讲话（2015年9月3日）</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;材料1：</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;当习近平主席带着对世界前途命运的思考走上联合国讲台的时候，充满生机与希望的中国已经站在世界舞台的中央。在第七十届联合国大会一般性辩论会场，发展壮大起来的中国对全人类福祉的担当，赢得世界赞誉与支持。
                                {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;开创未来，离不开对历史敬畏。70年前，联合国诞生。奠定现代国际秩序基石、确立当代国际关系基本准则国宪章，寄寓着先贤对和平的企盼，描绘出了战后世界的基本轮廓。中国作为世界反法西斯战争伟大胜利的主要贡献者之一，成为联合国创始会员国和安理会常任理事国。
                                {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;今天，当世界格局加快演变，各国相互依存、休戚与共成为世界的基本特征时，人类社会又该以怎样的思考和行动跟上历史的步伐？面对这个根本性问题，习近平主席提出打造人类命运共同体，这一主张在21世纪的今天，继承了联合国宪章精神，符合国际社会的普遍需要，实现了对传统国际关系的超越与创新。
                            </Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>摘编自《人民日报》（2015年9月30日）</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;(1)分析当今世界各国"共同维护以联合国宪章宗旨和原则为核心的国际秩序和国际体系"的重要性所在。（5分）</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;(2)如何理解"打造人类命运共同体"的主张"继承了联合国宪章精神，符合国际社会的普遍需要"？（5分）</Text>
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
