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
                content2: '1. 【答案解析】本题正确选项为 A 选项，人与动物的区别之一，从马哲角度上讲，人有思维，有意识，能对客观世界反映，发挥主观能动性，所以，本题正确答案是选项A。',
                content3: '2. 【答案解析】本题正确选项为 A 选项，本题考查的知识点是量变质变规律，量变积累到一定程度必然发生质变，度是事物保持其质的量的界限，所以，本题正确答案是选项A。',
                content4: '3. 【答案解析】本题正确选项为 B 选项，这是一道识记性考点，资本主义社会工人的工资就是劳动力的价格，劳动力已经成为一种特殊的商品，其使用价值是劳动，价值是工资。所以，本题的正确选项是选项B。',
                content5: '4. 【答案解析】本题正确选项为 C 选项，资本主义制度下，资本积累的必然结果就是两极分化，剥削程度加深，人民生活水平降低，相对人口过剩。因此，本题的正确选项是选项C。',
                content6: '5. 【答案解析】本题正确选项为 D 选项，毛泽东同志完成了马克思主义中国化的第一次飞跃，即马克思主义与中国具体实际结合，下马看花体现了必须具体问题具体分析，寻找其本质和规律，因此，本题的正确答案是选项D。',
                content7: '6. 【答案解析】本题正确选项为 D 选项，本题考查公有制的实现形式，巩固和发展公有制经济，还要努力寻找能够极大促进生产力发展的公有制实现形式。公有制经济的性质和实现形式是两个不同层次的问题。公有制经济的性质体现在所有权的归属上，坚持公有制的性质，根本的是坚持国家和集体对生产资料的所有权。所有制作为生产关系的基础，有公有制与私有制、社会主义与资本主义的区别。而所有制的实现形式是采取怎样的经营方式和组级形式问题，它不具有“公”与“私”、“社”与“资”的区分。同样的所有制可以采取不同的实现形式，而不同的所有制可以采取相同的实现形式。因为实现形式要解决的是发展生产力的组织形式和经营方式问题，只要能够有利于生产力的发展，公有制的实现形式可以而且应当多样化，一切反映社会化生产规律的经营方式和组织形式都可以大胆利用。要根据社会化生产规律的要求，采取多样化的经营方式和资产组织形式，使国有经济在更大的范围里获得广阔的发展空间。',
                content8: '7. 【答案解析】本题正确选项为 B 选项，本题考查党的十七大报告明确提出了完善人民代表大会制度的具体措施。其中的第三条表示：保障人大代表依法行使职权，密切人大代表同人民的联系，建议逐步实行城乡按相同人口比例选举人大代表，因此B选项更加体现出党的民主与群众路线的内容。',
                content9: '8. 【答案解析】本题正确选项为 B 选项，此题考查民主区域自治制度的历史依据。实行民族区域自治，是党棍据我国的历史发展、文化特点、民族关系和民族分布等具体情况作出的制度安排，符合各民族人民的共同利益和发展要求。统一的多民族国家的长期存在和发展，是我国实行民族区域自治的历史依据。中国在历史上长期就是一个集中统一的国家，各民族之间虽有战有和，有统有分，但在漫长的历史进程中，认同自己是中国大家庭中的一员，始终是民族关系的主流。',
                content10: '9. 【答案解析】本题正确选项为 D 选项，本题考查帝国主义列强未能实现瓜分中国的图谋的原因。帝国主义侵略中国的最终目的，是要瓜分中国、灭亡中国。帝国主义列强之所以没有能够实现瓜分中国的图谋，它们之间的矛盾和互相制约，是一个重要的原因。而帝国主义列强不能灭亡和瓜分中国，其根本原因在于中华民族进行的不屈不挠的反侵略斗争。所以，本题的正确答案是选项D。',
                content11: '10. 【答案解析】本题正确选项为 A 选项，这是由于中国革命的现状以及革命性质决定的，不能走一次革命论，也不能走二次革命道路，必须在民主革命中反帝反封，在社会主义革命中反资本主义，最后取得成功，本题正确选项是A选项。',
                content12: '11. 【答案解析】本题的确选项为 B 选项，本题考查加强道德修养的方法。“不积跬步，无以至千里;不积小流，无以成江海。”出自荀子的《劝学》，意在奉劝世人积少成多，聚沙为塔。道德的养成也是如此，要注重在实践中积累和贯彻，从一点一滴中不断养成，体现了积善成德的方法。因此本题的正确答案是选项B。',
                content13: '12. 【答案解析】本题正确选项为 B 选项，本题考查中国特色法律体系中法律部门的分类。中国特色社会主义法律体系是以我国全部现行法律规范按照一定的标准和原则划分为不同的法律部门，并由这些法律部门所构成的具有内在联系的统一整体。现在，我国以宪法为核心，以涵盖宪法及宪法相关法、民法商法、行政法、经济法、社会法、刑法、诉讼与非诉讼程序法等7个法律部门的法律为主干，由法律、行政法规、地方性法规等3个层次法律规范构成的中国特色社会主义法律体系已经基本形成，国家经济、政治、文化、社会生活各个方面基本做到有法可依，有力地保障和推动了中国特色社会主义事业的发展。本题中，选项ABC均被民法商法这一法律部门所涵盖，因此，本题的正确答案是选项D。',
                content14: '13. 【答案解析】本题正确选项为 A 选项，本题人生观中的人生目的。人生观主要是通过人生目的、人生态度和人生价值三个方面体现出来的。人生目的，回答人为什么活着;人生态度，表明人应当怎样对待生活;人生价值，判别什么样的人生才有意义。这三个方面相辅相成，其中人生目的是人生观的核心，有什么样的人生目的就会有什么样的人生态度，就会追求什么样的人生价值。所以本题的正确答案是选项A。',
                content15: '14. 【答案解析】本题正确选项为 C 选项，本题考查社会主义道德建设的核心。道德建设的核心，即道德建设的灵魂，它决定并体现着社会道德建设的根本性质和发展方向，规定并制约着道德领域中的种种道德现象。道德建设核心的问题，实质上是“为什么人服务”的问题。所以，本题的正确答案是选项C。',
                content16: '15. 【答案解析】本题正确选项为 D 选项，天宫一号和神州八号对接任务圆满成功，为我国今后建造载人空间站奠定基础，正确选项是第四个选项。',
                content17: '16. 【答案解析】本题正确选项为 C 选项，国际货币基金组织中，欧美的主导权仍未改变，发展中国家和新兴国家的话语权有待提升。正确答案是选项C。',
                content18: '二、多项选择题：',
                content19: '17. 【答案解析】本题正确选项为 BCD 选项，此题的原因是新生事物具有新的结构和功能，能适应已经变化了的环境和条件、新生事物是对旧事物的扬弃，并添加了旧事物所不能容纳的新内容、在社会历史领域内，新生事物符合广大人民群众的根本利益和要求。新事物并不是新出现的事物。因此，答案是BCD。',
                content20: '18. 【答案解析】本题正确选项为 ABC 选项，此题中题干所指歪曲表现在把社会历史发展多重因素的综合作用歪曲为单一因素决定论、把上层建筑与经济基础的相互作用歪曲为机械的单向作用、把经济作为社会的“基础”所具有的归根到底的决定作用歪曲为唯一决定作用，意识形态的作用并没有涉及，因此，正确答案是ABC。',
                content21: '19. 【答案解析】本题正确选项为 CD 选项，此题考查价值问题。 商品是用来交换的能满足人们某种需要的劳动产品，具有使用价值和价值两个因素，是使用价值和价值的矛盾统一体。使用价值是指商品能满足人们某种需要的属性，即商品的有用性，反映人与自然之间的物质关系，是商品的自然属性，是一切劳动产品共有的届性。使用价值构成社会财富的物质内容。使用价值是交换价值的物质承担者。交换价值首先表现为一种使用价值同另一种使用价值交换的量的关系或比例。决定商品交换比例的，不是商品的使用价值，而是价值。价值是凝结在商品中的无差别的一般人类劳动，即人类脑力和体力的耗费。价值是商品特有的社会属性。使用价值不同的商品之所以能按一定比例相交换，就是因为它们都有价值。商品价值在质的规定性上是相同的，因而彼此可以比较。商品的价值实体是凝结在商品中的无差别的人类劳动，它本质上体现生产者之间的一定社会关系。价值是交换价值的基础，交换价值是价值的表现形式。',
                content22: '20. 【答案解析】本题正确选项为 ABD 选项，此题考查对马克思，恩格斯资本主义的剖析。首先，资本主义基本矛盾“包含着现代的一切冲突的萌芽”。资本主义基本矛盾表现在阶级关系上是无产阶级和资产阶级的对立;表现在生产上是个别企业中生产的有组织性和整个社会生产的无政府状态之间的对立。其次，资本积累推动资本主义基本矛盾不断激化并最终否定资本主义自身。资本的不断积累为否定资本主义制度自身准备了物质条件。再次，国家垄断资本主义是资本社会化的更高形式，将成为社会主义的前奏。国家垄断资本主义阶段的生产社会化、资本社会化和管理社会化都达到很高的程度，从而为全社会共同占有生产资料和共同组织社会化生产准备了充分的物质条件和经济条件。最后，资本主义社会存在着资产阶级和无产阶级两大阶级。随着资本主义经济的巨大发展，资产阶级由生产力的解放者变成阻碍者。无产阶级是现代大工业的产物，是真正革命的阶级，随着生产社会他水平的不断提高和无产阶级队伍的不断壮大，无产阶级必将彻底****资本主义和资产阶级的统治，逐步建立消灭一切阶级、确保人人得以自由发展的联合体。',
                content23: '21. 【答案解析】本题正确选项为 ABCD 选项，此题考查新民主主义革命的动力，中国共产党带领中国人民取得了反帝反封的任务，依靠阶级是工人阶级，农民阶级;民族资产阶级;城市小资产阶级。四个都入选。',
                content24: '22. 【答案解析】本题正确选项为 ABD 选项，此题考查加快转变经济发展模式主要的途径和手段是如下四个，四个选项都应入选。当前和今后一个时期，要按照“两个坚持”和“三个转变”的要求转变经济发展方式。“两个坚持”就是要坚持走中国特色新型工业化道路，坚持扩大国内需求特别是消费需求的方针。“三个转变”就是促进经济增长由主要依靠投资、出口拉动向依靠消费、投资、出口协调拉动转变，由主要依靠第二产业带动向依靠第一、第二、第三产业协同带动转变，由主要依靠增加物质资源消耗向主要依靠科技进步、劳动者素质提高、管理创新转变。此外还十二五计划包括一条主线五个要求。',
                content25: '23. 【答案解析】本题正确选项为 ABD 选项，此题考查基层民主自治的的作用意义。基层民主是十七大加入的新的基本政治制度，党的十七大首次把基层群众自治制度纳入中国特色社会主义民主政治制度的基本范畴，因为：一方面，发展基层民主是发展社会主义民主的基础性工作是社会主义制度必备手段。在我国，人民是国家的主人。保证工人阶级和广大劳动群众行使管理国家、管理经济和社会事务的权利，首先必须保证他们在基层的经济、政治、文化和其他社会事务中当好家作好主，这是实现工人阶级和广大劳动群众在整个国家的经济、政治、文化和社会生活中当家作主的基础。另一方面，基层民主是社会主义民主最广泛的实践，发展基层直接民主，有利于提高全民的民主素养和意识，为发展社会主义民主进一步创造条件。',
                content26: '24. 【答案解析】本题正确选项为 ABD 选项，本题考查文化的作用。在当代中国，发展社会主义先进文化，建设和谐文化，就是建设中国特色社会主义文化。中国特色社会主义文化，就其主要内容来说，同改革开放以来我们一贯倡导的社会主义精神文明是一致的。要实现我国社会主义现代化建设和中华民族伟大复兴的宏伟目标，必须牢牢把握社会主义先进文化的前进方向，努力建设中国特色社会主义文化。第一，中国特色社会主义文化是现代化建设的重要内容。第二，文化已经成为国家核心竞争力的重要因素。谁占据了文化发展的制高点，谁就能够更好地在激烈的国际竞争中掌握主动权。第三，中国特色社会主义文化为现代化建设提供智力支持、精神动力和思想保证。',
                content27: '25. 【答案解析】本题正确选项为 ABCD 选项，此题考查和谐社会部分社会管理。社会稳定是人民群众的共同心愿，是改革发展的重要前提。必须把完善社会管理作为改善民生和促进社会和谐的重要任务。第一，推进社会管理体制改革创新。要健全党委领导、政府负责、社会协同、公众参与的社会管理格局，健全基层社会管理体制。第二，妥善处理人民内部矛盾。要完善信访制度，健全党和政府主导的维护群众权益机制，统筹协调各方面利益关系，有效预防和化解各类社会矛盾。第三，重视社会组织建设和管理。社会组织具有提供服务、反映诉求、规范行为的积极作用，把它们的作用利用好、保护好、发挥好，有利于降低政府社会管理成本，有利于增强公民的社会认同感。要支持各类社会组织承担社会事务、参与社会管理和服务。第四，要完善突发事件应急管理机制，提高保障公共安全和处置突发事件的能力;全面加强综合减灾能力建设，提高防范和应对自然灾害能力。',
                content28: '26. 【答案解析】本题的正确选项为 BCD 选项，本题中，法和美相继逼迫清政府签订的不平等条约有《望厦条约》、《黄埔条约》和《天津条约》。因此，正确答案是BCD。',
                content29: '27. 【答案解析】本题正确选项为 ABC 选项，本题考查洋务派举办的洋务事业主要有：兴办近代工业、训练新军，需要懂得西方先进技术的专业人才。为此，洋务派创办了新式学堂。从19世纪60年代到90年代的30多年间，创办新式学堂30多所。主要有三种：一为翻译学堂，如京师同文馆，主要培养翻译人才;一为工艺学堂，培养电报、铁路、矿务、西医等专门人才;一为军事学堂，如船政学堂等，培养新式海军人才。在创办新式学堂的同时，还先后派遣赴美幼童及官费赴欧留学生200多人。',
                content30: '28. 【答案解析】本题的正确选项为 AC 选项，一般说来，游击战争是个战术问题。但是，在抗日战争中，游击战争具有战略地位，是因为它，主要是在外线单独作战，而不是在内线配合正规军作战，是大规模的防御战。因此，本题正确答案是选项AC。',
                content31: '29. 【答案解析】本题的正确选项为 BCD 选项，此题考查社会主义基本矛盾。我国社会主义改造完成以后，毛泽东以中国的实践经验为基础，运用马克思主义基本原理，全面阐述了社会主义社会的矛盾问题，并形成了比较系统的理论。第一，指出社会主义社会仍然存在着矛盾，正是这些矛盾推动着社会主义社会向前发展。社会主义社会的基本矛盾仍然是生产关系和生产力之间的矛盾、上层建筑和经济基础之间的矛盾，是推动社会主义社会不断前进的根本动力。第二，阐明了社会主义社会基本矛盾的性质和特点。不是对抗性而是非对抗性的矛盾。第三，提出了通过社会主义制度本身解决社会基本矛盾的思想。它可以依靠社会主义自身的力量，通过对生产关系和生产力、上层建筑和经济基础不相适应的方面进行调整得到解决。第四，我国存在着两种不同性质的矛盾，即敌我矛盾和人民内部矛盾，正确处理人民内部矛盾是国家政治生活的主题。',
                content32: '30. 【答案解析】本题的正确选项为 ACD 选项，社会主义法治理念反映和指引着社会主义法治的性质、功能、目标方向、价值取向和实现途径，是社会主义法治的精髓和灵魂。其基本内涵包括依法治国、执法为民和公平正义、服务大局以及党的领导。',
                content33: '31. 【答案解析】本题的正确选项为 ABCD 选项，爱国主义体现了：道德要求、继承了优良传统、体现了爱国主义与爱社会主义、体现了爱国主义与拥护祖国统一。本题答案全选。',
                content34: '32. 【答案解析】本题的正确选项为 ABC 选项，总书记《在庆祝中国共产党成立90周年大会上的讲话》中指出，经过90年的奋斗、创造、积累，党和人民必须倍加珍惜、长期坚持、不断发展的成就是开辟了中国特色社会主义道理、形成了中国特色社会主义理论体系、确立了中国特色社会主义制度。',
                content35: '33. 【答案解析】本题的正确选项为 BCD 选项，2011年11月28日—12月1日，《联合国气候变化框架公约》缔约方会议在南非德班举行。尽管对部分焦点议题分歧严重，但在各方共同努力下，大会取得了一些重要成果，包括成立“德班增强行动平台特设工作组”、继续《京都议定书》第二承诺期、正式启动“绿色气候基金”。',
                content36: '三、分析题：',
                content37: '34. 【参考答案】'
                　　+'(1)①辩证唯物主义认识论认为：实践决定认识，认识对实践具有能动的反作用，本题中，碎花瓶原理这一正确的认识，对人们的科学研究起到了能动的推动和促进作用。'
                　　+'②马哲唯物论认为：物质决定意识，意识对于物质具有能动反作用，正确的意识起到促进作用，推动事物发展进程，在本题中，碎花瓶原理是正确的意识，推动科学研究发展。帮助人们进行恢复文物等科学研究。'
                　　+'(2)①辩证唯物主义认识论认为：真理和谬误可以相互转化，真理是对事物正确的认识，谬误是对事物错误的认识，两者对立统一，在一定条件下可以相互转化。题干中，世界上没有真正的错误,只有被忽略的智慧 ，说明谬误在一定的中介和条件下，在本题中，是实践这一特殊条件，即可转化为真理。 '
                　　+'②辩证唯物主义认识论认为：实践决定认识，实践是认识的来源和动力，任何认识在两次飞跃的发展过程中都必须通过实践检验其正确性，材料也充分说明这一原理。'
                　　+'③马克思哲学唯物辩证法认为：矛盾即对立统一，统一即同一性，指矛盾双方相互依存，在一定条件下发生转化，世界上没有真正的错误，只有被忽略的智慧，也充分说明了这一原理。(注明：考生从辩证法和认识论任一角度均得分)'
                    +'(3)新时期， 社会主义核心价值体系的精髓是以爱国主义为核心的民族精神和以改革创新为核心的时代精神，要求我们必须大力推进理论创新、制度创新、科技创新、文化创新以及其他各方面的创新。我们青年学生，必须以创新为己任，推进科学发展观进程，提高创新意识，就像材料所指，坚持用发展和创新的眼光看问题，打破形而上学观点，在实践中，充分发挥主观能动性，提高实践水平。'
                　　,
                content38: '35. 【参考答案】'
                　　+'(1)①收入是消费的基础和前提。根据居民工资水平的实际情况，提高个人所得税免征额有利于提高中低收入者的实际收入，改善人民的生活。'
                　　+'②税收是调节个人收入分配、实现社会公平的有效手段。提高个人所得税免征额可降低中低收入者的个税负担，加大对高收入者的调节，有利于加快形成合理有序的收入分配格局，促进社会公平。消费对生产具有反作用。'
                　　+'③科学发展观的以人为本就是以最广大人民的根本利益为本。坚持以人为本，就要始终把实现好、维护好、发展好最广大人民的根本利益作为党和国家一切工作的出发点和落脚点，尊重人民主体地位，发挥人民首创精神，保障人民各项权益，走共同富裕道路，促进人的全面发展，做到发展为了人民、发展依靠人民、发展成果由人民共享。税收体制改革，让全体人民共享改革发展的成果，是维护社会公平正义、促进社会和谐稳定的重要任务，正是体现了科学发展观以人为本的必然要求。'
                　　+'④全国人大审议通过《个人所得税税法》，说明我国国家机关依照法定分工依法行使各自的职权;行政机关严格依法行政，依法履职。公众热情参与征集意见，说明公民依法充分行使民主权利，敢于发表自己的意见，依法治国的主体是人民，所依的法是人民意志的体现。'
                    +'(2)针对当前我国存在的收入分配问题，我们的合理趋向是分好社会财富这个“蛋糕”，具体措施有：'
                    +'①坚持和完善按劳分配为主体、多种分配方式并存的分配制度，健全劳动、资本、技术、管理等生产要素按贡献参与分配的制度。初次分配和再分配都要处理好效率和公平的关系，再分配更加注重公平。'
                    +'②逐步提高居民收入在国民收入分配中的比重，提高劳动报酬在初次分配中的比重。加大财政、税收在收入初次分配和再分配中的调节作用。'
                    +'③加大个人收入分配调节力度，合理调整收入分配格局。一要着力提高低收入者收入。二要努力扩大中等收入者比重。三要切实对过高收入进行有效调节。四要取缔非法收入。要规范垄断行业的收入，引入竞争机制，打破经营垄断，创造机会公平，整顿分配秩序，逐步扭转收入分配差距扩大趋势，防止两极分化，使全体社会成员逐步共同致富。'
                    ,
                content39: '36. 【参考答案】'
                    +'(1)①孙中山发展了民权主义，加入了鲜明的反帝国主义内容，从而把建立资产阶级专政的纲领发展为建立反帝反封建的各革命阶级联合专政的纲领，其意义在于能更广泛地动员群众参加革命。'
                　　+'②在任何时候都要反对帝王思想，否则革命阵营便不能团结，革命就会造成割据，造成国家四分五裂。所以，一定要由平民革命，建立国民的政府。'
                　　+'③民权主义是政治革命的根本，民族革命成功的同时要****君主****政体。要结束君主****政体，单靠民族革命不能成功，必须与政治革命并行。'
                　　+'(2)这是******同志在纪念辛亥革命100周年讲话中提到的，孙中山先生革命事业最核心的内容就是民族、民权、民生的三民主义政治纲领。纵观我党成立90年来的光辉历程，正忠诚地实践着三民主义，无疑是孙中山先生革命事业最忠实的继承者。'
                　　+'①从民族主义来看，其核心目标就是实现民族独立团结。这个目标的实现，正是中国带领人民完成的。新中国成立后，我国实行民族区域自治制度，坚持各民族“共同团结进步、共同繁荣发展”，进一步巩固了民族关系。'
                　　+'②从民权主义来看，其核心目标就是实现人民当家作主。这个目标的实现，也是中国带领人民完成的。中国带领人民建立了中华人民共和国，使得中国人民从此站立起来了，成为国家、和自己命运的主人。从根本上确保了国家权利掌握在中国人民手中，真正实现了人民当家做主。'
                　　+'③从民生主义来看，其核心目标就是实现国家富强人民富裕。这个目标的实现，也是中国带领人民完成的。中国带领人民走入中国特色伟大道路，从根本上改变了中国人民的前途命运。'
                　　+'总之，孙中山先生没有完成的改变旧中国半殖民地半封建的性质、改变中国人民的悲惨境遇、实现民族独立、人民解放的历史任务，都在中国共产党领导下实现了，中华民族伟大复兴展现出前所未有的光明前景。历史充分证明，中国人是孙中山先生事业最忠实的继承者。'
                　　,
                content40: '37. 【参考答案】'
                    +'(1)诚信即是对中华民族传统美德的弘扬，又是对当代中国道德建设实践的正确反映，社会主义市场经济构建社会主义和谐社会的过程中，更需大力倡导诚实守信的美德。'
                　　+'第一，诚信是市场经济条件下经济活动的一项基本道德准则。'
                　　+'第二，诚信是职业道德的一项基本要求和做人的一项基本道德准则。'
                　　+'第三，诚信即是一个人安身立命、为人处事应当遵守的基本准则，也是一个社会维持正常秩序和有效运行的生态要求。'
                　　+'(2)因为诚信是一个社会维持正常秩序和有效运行的必然要求，就个人而言，诚信是高尚的人格力量，就单位和企业而言，诚信是宝贵的无形资产，就社会而言，诚信是正常秩序的基本保证，有国家而言，诚信是良好的国际形象，良好的社会信用是经济社会健康发展的前提，是每个企业单位和社会成员立足于社会的必要条件。',
                content41: '38. 【参考答案】'
                    +'(1)外国在改革开放以后，中国和世界关系发生了变化需要中国为自己“公关”。中国不仅要作为一个政治和经济主体参与国际社会的构建和全球市场的博弈，还要作为一个表达主体，和世界共同协商公共事务。世界也需要一个在公共关系上成熟稳健的中国，共同应对全球性问题和挑战。'
                　　+'让国际社会理性认识中国需要中国开展公关。一直以来，对中国的误解和偏见妨碍了中国国家形象在国际社会的树立和国际社会的正确认知。　中国光有良好的愿望和好客的行动并不能让国际社会完全了解中国。'
                　　+'(2)任何一个国家在提升本国政治、经济、军事等硬实力的同时，提升本国文化软实力也是更为特殊和重要的。“提高国家文化软实力”，这不仅是我国文化建设的一个战略重点，也是我国建设和谐世界战略思想的重要组成部分，更是实现中华民族伟大复兴的重要前提。'
                　　+'提升软实力最好的办法就是加强关于中国社会进展的新闻报道的准确性、透明度和及时性，让世界更加准确地了解中国;其次，要“内知国情，外知世界”，“中国立场，国际表达”。我们要维护中国的利益，把准确的中国实际告诉外国人。这也是提高国家软实力的手段之一。'
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
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. 恩格斯说：“鹰比人看得远得多，但是人的眼睛识别东西远胜于鹰。狗比人具有敏锐得多的嗅觉，但是它连被人当做各种物的特定标志的不同气味的百分之一也辨别不出来。”人的感官的识别能力高于动物，除了人脑及感官发育得更加完善之外，还因为{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.人不仅有感觉还有思维{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.人不仅有理性还有非理性{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.人不仅有知觉还有想象{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.人不仅有生理机能还有心理活动</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. 有这样一道数学题：“90%×90%×90%×90%×90%=?其答案是约59%。90分看似一个非常不错的成绩，然而，在一项环环相扣的连续不断的工作中，如果每个环节都打点折扣，最终得出的成绩就是不及格。这里蕴含的辩证法道理是( ){'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.肯定中包含否定{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.量变引起事变{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.必然性通过偶然性开辟道路{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.可能和现实是相互转化的</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. 在资本主义社会里，资本家雇佣工人进行劳动并支付相应的工资。资本主义工资的本质是( ){'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.工人所获得的资本家的预付资本{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.工人劳动力的价值或价格{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.工人所创造的剩余价值的一部分{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.工人全部劳动的报酬</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4. 2011年9月以来美国爆发的“占领华尔街”抗议活动中，示威者打出“我们是99%”的标语，向极富阶级表示不满。漫画所显示的美国社会财富占有的两极分化，是资本主义制度下( ){'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.劳资冲突的集中体现{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.生产社会化的必然产物{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.资本积累的必然结果{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.虚拟资本泡沫化的恶果</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5. 毛泽东曾在不同场合多次谈到，调查研究由两种方法，一种是走马看花，一种是下马看花。走马看花，不深入，还必须用第二种方法，就是下马看花，过细看花，分析一朵花。毛泽东强调“下马看花”的实际意义在于( ){'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.解决实际问题必须要有先进理论的指导{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.运用多种综合方法分析调查研究的材料{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.马克思主义理论必须适合中国革命的具体实际{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.只有全面深入了解中国的实际，才能找出规律</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6. 改革开放以来，我们党对公有制认识上的一个重大突破，就是明确了公有制和公有制的实现形式是两个不同层次的问题。公有制的实现形式是指资产或资本的{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.占有形式{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.分配形式{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.所有权归属{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.组织形式和经营方式</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7. 2011年进行的全国县乡两级人大换届选举，是2010年3月选举法修改后首次实行城乡按相同人口比例选举人大代表。这是我国政治生活中的一件大事，它{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.更好地体现了人人平等、地区平等和民族平等{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.有利于党在国家政权中发扬民主、贯彻党的群众路线{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.集中反映了人民代表大会是人民当家作主的根本途径{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.表明我国人大代表的产生与西方议会议员的产生有根本区别</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8. 邓小平指出：“解决民族问题，中国采取的不是民族共和国联邦的制度，而是民族区域自治的制度。我们认为这个制度比较好，适合中国的情况。”我国实行民族区域自治的历史依据是{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.各民族聚居区发展的不平衡性{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.统一的多民族国家的长期存在和发展{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.各民族大杂居、小聚居的人口分布格局{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.近代以来各民族在共同反抗外来侵略斗争中形成的爱国主义精神</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9. 19世纪40年代以后，资本帝国主义势力一次又一次地发动对中国的侵略战争，妄图瓜分中国、灭亡中国，但是，帝国主义列强并没有能够实现他们的这一图谋，其根本原因是{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.中西文化存在臣犬差异{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.中国经济政治发展不平衡{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.帝国主义列强之间的矛盾和相互制约{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.中华民族进行的不屈不饶的反侵略斗争</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10. 毛泽东在《中国革命和中国共产党》中论述了民主革命和社会主义革命的关系。他之处：“民主革命是社会主义革命的必要准备，社会主义革命是民主革命的必然趋势”。这两个革命阶段能够有机连接的原因是{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.资本主义道路在中国走不通{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.俄国十月革命为中国提供了经验{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.民主革命中包含了社会主义因素{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.中国国情决定中国革命必须分两步走</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11. 道德修养是一个循序渐进的过程，古人云：“积土成山，风雨兴焉;积水成渊，蛟龙生焉;积善成德，而神明自得，圣心备焉。古不积跬步，无以至千里;不积小流，无以成江海。”下列名言中与这段话在含义上近似的是{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.仁远乎哉?我欲仁，斯仁至矣{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.勿以善小而不为，勿以恶小而为之{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.君子求诸已，小人求诸人{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.有能一日用其力于仁矣乎?我未见力不足者</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;12. 中国特色社会主义法律体系是以我国全部现行法律规范按照一定的标准和原则划分为不同的法律部门，并由这些法律部门所构成的具有内在联系的统一整体，每一法律部门均由一系列调整相同类型社会关系的众多法律、法规所构成，下列选项中属于独立法律部门的是{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.知识产权法{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.商法{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.公司法{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.民法商法</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;13. 人生目的是人在人生实践中关于自身行为的根本指向和人生追求，它所认识和回答的根本问题是{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.人为什么活着{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.人如何对待生活{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.怎样对待人生境遇{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.怎样选择人生道路</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;14. 社会主义道德建设的核心是(){'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.爱国主义{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.集体主义{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.为人民服务{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.社会主义荣辱观</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;15. 与“天宫一号”两度完成“太空之吻”的“神舟八号”飞船，于2011年11月17日顺利回“家”，天宫一号与神舟八号空间交会对接任务获得圆满成功，这标志着我国{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.载人航天技术已经完全成熟{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.实现了由航天大国向航天强国的转变{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.实现了载人航天工程“三步走”的发展战略{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.为今后建造载人空间站奠定了坚实的技术基础</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;16. 2011年5月8日，国际货币基金组织(IMF)总裁多米尼克·斯特劳斯·卡恩因涉案而辞去总裁职务，引发了欧美等发达国家与发展中国家关于IMF总裁继任人的争夺。6月28日，国际货币基金组织宣布，该组织新一任总裁是法国经济、财政与工业部长克里斯蒂·拉加德。这表明{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.国际货币基金组织改革进程加快{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.新兴国家的话语权和代表性得到提升{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.欧美主导国际金融机构的局面仍未改变{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.发展中国家作为一支独立力量登上世界舞台</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16, fontWeight: 'bold' }}>二、多项选择题：17～33题，每小题2分，共34分。下列每题给出的四个选项中，至少有两个选项是符合题目要求的。</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;17. “沉舟侧畔千帆过，病树前头万木春。“辩证法认为发展的实估是新事物的产生和旧事物的灭亡。新生事物必然取代旧事物，从根本上说，是因为{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.新生事物产生于旧事物之后，是新出现的事物{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.新生事物具有新的结构和功能，能适应已经变化了的环境和条件{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.新生事物是对旧事物的扬弃，并添加了旧事物所不能容纳的新内容{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.在社会历史领域内，新生事物符合广大人民群众的根本利益和要求</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;18. 2011年4月，耶鲁大学出版了《马克思为什么是对的》一书，书中列举了当前西方社会10个典型的歪曲马克思主义的观点。其中一种观点认为：马克思主义将世间万物都归结于经济因素，艺术、宗教，政治、法律、道德等都被简单地视为经济的反映，对人类历史错综复杂的本质视而不见，而试图建立一种非黑即白的单一历史观，上述观点是对马克思主义关于经济基础和上层建筑辩证关系思想的严重歪曲，其表现为{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.把社会历史发展多重因素的综合作用歪曲为单一因素决定论{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.把上层建筑与经济基础的相互作用歪曲为机械的单向作用{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.把经济作为社会的“基础”所具有的归根到底的决定作用歪曲为唯一决定作用{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.把意识形态对社会历史始终具有的积极能动作用歪曲为消极被动作用</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;19. 人们往往将汉语中的“价”、“值”二字与金银财宝等联系起来，而这两字的偏旁却都是“人”，示意价值在“人”。马克思劳动价值论透过商品交换的物与物的关系，揭示了商品价值的科学内涵，其主要观点有{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.劳动是社会财富的唯一源泉{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.具体劳动是商品价值的实体{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.价值是凝结在商品中的一般人类劳动{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.价值在本质上体现了生产者之间的社会关系</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;20. 关于共产主义理想实现的必然性，马克思主义除了从社会形态更替规律上作了一般性的历史观论证外还通过对资本主义社会的深入实证的剖析，科学地论证了{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.资本主义的历史暂时性{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.资本主义发展的自我否定的趋势{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.资本主义的具体途径和方式{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.工人阶级****旧世界建设新世界的历史使命</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;21. 从中华人民共和国成立到社会主义改造基本完成，是我国从新民主主义到社会主义的过度时期。这一时期中国社会的阶级构成主要包括{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.工人阶级{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.农民阶级{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.民族资产阶级{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.城市小资产阶级</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;22. 加快转变经济发展方式是推动科学发展的必由之路，是我国经济社会领域的一场深刻变革，贯穿经济社会发展全过程和各领域。在当前和今后一个时期，转变经济发展方式的基本思路是，促进经济增长{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.由主要依靠投资、出口拉动向依靠消费、投资、出口协调拉动转变{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.由主要依靠第二产业带动向依靠第一、第二、第三产业协同带动转变{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.由主要依靠国有企业推动向依靠国有企业、民营企业、外资企业协调推动转变{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.由主要依靠增加物质资源消耗向主要依靠科技进步、劳动者素质提高、管理创新转变</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;23. 基层民主是我国广大工人、农民、知识分子和各阶层人士在城乡基层政权机关、企事业单位和基层自治组织中依法直接行使民主权利。发展基层民主{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.有利于提高全民的民族素养，为进一步发展民主创造了条件{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.是发展社会主义民主的基础性工程{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.为基层群众直接参与国家事务的管理提供了更多机会{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.为基层群众管理基层公共事务和公益事业创造了条件</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;24. 十七大以来，党对兴起社会主义文化建设新高潮，推动社会主义文化大发展大繁荣作出战略部署，这是基于{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.文化已经成为经济社会发展的强大动力{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.文化已经成为国家核心竞争力的重要因素{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.文化产业已经成为国家经济的支柱性产业{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.文化已经成为民族凝聚力和创造力的重要源泉</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;25. 随着我国改革开放的不断深入和社会主义市场经济的不断发展，各种社会矛盾日益凸显。解决这些社会矛盾，改革创新社会管理体制，需要{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.健全社会管理格局{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.健全基层社会管理体制{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.创新社会管理理念{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.创新社会管理方式</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;26. 中英《南京条约》签订后，美、法趁火打劫，相继逼迫清政府签订的不平等条约有{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.《虎门条约》{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.《望厦条约》{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.《黄埔条约》{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.《天津条约》</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;27. 第二次鸦片战争后，清朝统治集团内部一部分人震惊于列强的“船坚炮利”，主张学习西方以求“自强”，洋务运动由此兴起。洋务运动的一个重要内容就是创办新式学堂，主要有{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.翻译学堂{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.工艺学堂{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.军事学堂{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.法政学堂</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;28. 一般说来，游击战争是个战术问题。但是，在抗日战争中，游击战争具有战略地位，是因为它{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.主要是在外线单独作战，而不是在内线配合正规军作战{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.是抗日战争的主要作战方式，而不是次要作战方式{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.是大规模的，而不是小规模的{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.是进攻战，而不是防御战</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;29. 1957年2月，毛泽东在扩大的最高国务会议上发表(关于正确处理人民内部矛盾的问题)的讲话，强调指出{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.社会主义社会充满着矛盾{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.社会主义社会的基本矛盾仍然是生产关系和生产力之间、上层建筑和经济基础之间的矛盾{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.社会主义社会的矛盾可以通过社会主义制度本身得到解决{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.把正确处理人民内部矛盾作为国家政治生活的主题</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;30. 社会主义法治理念反映和指引着社会主义法治的性质、功能、目标方向、价值取向和实现途径，是社会主义法治的精髓和灵魂。其基本内涵包括依法治国、执法为民和{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.公平正义{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.自由平等{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.服务大局{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.党的领导</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;31. 爱国主义体现了人民群众对自己祖国的深厚感情，反映了个人对祖国的依存关系，是人们对自己故土家园、民族和文化的归属感、认同感、尊严感与荣誉感的统一。在我国，爱国主义{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.既是道德要求，又是法律规范{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.既继承了优良传统，又具有时代特征{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.体现了爱国主义与爱社会主义的一致性{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.体现了爱国主义与拥护祖国统一的一致性</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;32. 总书记《在庆祝中国共产党成立90周年大会上的讲话》中指出，经过90年的奋斗、创造、积累，党和人民必须倍加珍惜、长期坚持、不断发展的成就是{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.开辟了中国特色社会主义道理{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.形成了中国特色社会主义理论体系{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.确立了中国特色社会主义制度{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.建成了中国特色社会主义现代化国家</Text>
                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;33. 2011年11月28日—12月1日，《联合国气候变化框架公约》缔约方会议在南非德班举行。尽管对部分焦点议题分歧严重，但在各方共同努力下，大会取得了一些重要成果，包括{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.达成涵盖所有缔约方的“国际法律框架”{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.成立“德班增强行动平台特设工作组”{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.继续《京都议定书》第二承诺期{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.正式启动“绿色气候基金”</Text>

                        <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16, fontWeight: 'bold' }}>三、分析题：34～38小题，每小题10分，共50分。要求结合所学知识分析材料并回答问题。</Text>
                        <View>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;34.结合材料回答问题：</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;材料1：</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;有个人不小心打碎一个花瓶，但他没有陷入沮丧，而是细心地收集起满地的碎片。他把这些碎片按大小分类称出重量，结果发现：10～100克的最少，1～10克的稍多，0.1～1克和0.1克以下的最多;同时他还发现这些碎片的重量之间存在着倍数关系，即较大块的重量是次大块的重量的16倍……因此他发现了“碎花瓶理论”。这个理论可以帮助人们恢复文物、陨石等不知其原貌的物体，给考古和天体的研究带来了意想不到的效果。这个人就是丹麦的物理学家雅各布·博尔。
                            </Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>摘编自《光明日报》(2011年2月21 日)</Text>

                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;材料2：</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;迪迪·艾伦年轻时到一家电影公司打工，跟着知名电影剪辑师罗伯特·怀斯学习。她在给电影《江湖浪子》剪辑时，犯了一个非常不应该的错误：在从一个镜头切换到另一个镜头时，第一个镜头中的声音竟然延续到第二个镜头中去，并且长达三秒钟，导致的结局：主人公驾驶汽车逐渐远去，镜头随之切换到达的目的地场景，而这时依旧可以听见第一个镜头中的汽车声!罗伯特·怀斯非常生气，他把这段影片往艾伦面前一扔说：“把你所犯的错误剪掉!”艾伦沮丧极了，正在她准备剪去自己所犯的那个“错误”时，她忽然看见窗台上的一个小盆景，那是一株地莓，她曾经生长在艾伦家的园子里。只是别的地莓都能长出又甜又红的果实，唯独这株地莓不会结果，可它虽然不会结果，却能开出特别鲜红的花朵!所以艾伦把它移植到了这里，成了一道美丽的风景!如果说不会结果是一种“错误”，但就在这种错误中，它却开出了最美丽的花!想到这里，艾伦怦然心动，她开始重新审视起那段影片，猛然意识到：这个错误的本身，其实就是一朵最美丽的地莓花!按照传统的技法，在镜头切换的同时声音也随之戛然而止，艾伦却把声音延续到第二个镜头中，而这不仅能巧妙糅合由镜头切换而产生的断裂感，还能更加有序地连贯电影节奏!艾伦由此想到，有些时候，把第二个镜头中的声音提前一点出现在第一个镜头的结尾处，也是一种能巧妙显示电影节奏的手法。于是，她把这种“错位剪辑”用到了这部影片的每一个切换的镜头中。影片上映后，这种剪辑效果让所有观众耳目一新，并引起了电影同行的关注和沿用，一场电影剪辑艺术的革新悄悄开始了!当86岁高龄的艾伦病逝后，人们对艾伦的人生态度和对电影的贡献作了这样的总结：“她深信这个世界上没有真正的错误，只有被忽略的智慧!即便是一株无法结出果实的地莓，也不要轻易扔掉，因为它可能会开出最美丽的花朵!”
                            </Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>摘编自 《扬子晚报》(2011年6月27日)</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;(1)从打碎花瓶这一现象中所概括出的“碎花瓶理论”为什么能帮助人们恢复文物、陨石等不知原貌的物体?</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;(2)如何理解“这个世界上没有真正的错误，只有被忽略的智慧”?</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;(3)上述两例对我们增强创新意识有何启示?</Text>
                        </View>
                        <View>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;35.结合材料回答问题：</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;材料1：</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;十一届全国人大常委会第二十次会议初次审议的《中华人民共和国个人所得税法修正案(草案)》将个人所得税免征额由现行的每月2000元调至3000元。随后，全国人大常委会通过中国人大网向社会公开征求意见，共收到82707人提出的意见23万余件。82536人对个人所得税起征点发表意见，其中要求提高起征点的意见高达83%。
                                {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2011年5月10日和20日，全国人大法律委员会、财政经济委员会和全国人大常委会法制工作委员会联合召开座谈会，还分别听取11位专家和16位来自不同地区、不同职业、不同收入群体具有一定代表性的社会公众对草案的意见。
                                {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6月27日， 个法修正案草案再次提交全国人大常委会审议时，二审稿对3000元起征点仍未作修改。在审议过程中，有委员表示，网上征求意见中，要求提高起征点的占83%。对如此集中的意见，草案未充分回应，很难向公众解释清楚。更有委员指出，个人所得税法不是5000元、3000元的问题，而是如何更认真地对待群众意见和老百姓的关注问题。
                                {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6月30日，全国人大常委会第二十一次会议以134票赞成、6票反对、11票弃权，决定对《中华人民共和国个人所得税法》作如下修改：一、第三条第一项修改为：“工资、薪金所得，适用超额累进税率，税率为百分之三至百分之四十五。”二、第六条第一款第一项修改为：“工资、薪金所得，以每月收入额减除费用三千五百元后的余额，为应纳税所得额。”
                            </Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>摘编自 中国人大网(2011年6月30日、2011年7月1日)</Text>

                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;材料2：</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;此次个人所得税法的修改将在社会生活中发挥积极作用。首先，大幅度减轻中低收入纳税群体的负担。一方面，减除费用标准由2000元提高到3500元后，纳税人纳税负担普遍减轻。工薪收入者纳税面调整后，纳税人数由约8400万人减至约2400万人。另一方面，通过调整工薪所得税率结构，使绝大部分工薪所得纳税人在享受提高减除费用标准的同时，进一步减轻税负。这两个措施是不一样的，减除费用的提高是普惠，通过税率级距调整进行结构性的变化，是使中低收入纳税群体在减税的基础上进一步减税。此外，适当扩大低档税率和最高档税率的适用范围，使低税率向大部分纳税人倾斜。其次，适当加大对高收入者的调节力度。实行提高工薪所得减除费用标准和调整工薪所得税率结构变化联动，能够使一部分高收入者在抵消减除费用标准提高得到的减税好处以后，适当增加一些税负。
                            </Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>摘编自 中国人大网(2011年6月30日)</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(1)此次个税法修改过程如何体现了中国特色社会主义民主?(5分)</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(2)结合此次个税法的修改，分析当前我国收入分配制度改革的趋向和合理调整收入分配格局的要求。(5分)</Text>
                        </View>
{/* 36 */}
                        <View>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;36.结合材料回答问题：</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;材料1：</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;“余维欧美之进化，凡以三大主义：曰民族、曰民权、曰民生。罗马之亡，民族主义兴，而欧洲各国以独立。洎自帝其国，威行****，在下者不堪其苦，则民权主义起。十八世纪之末，十九世纪之初，****仆而立宪政体殖焉。世界开化，人智益蒸，物质发舒，百年锐于千载，经济问题继政治问题之后，则民生主义跃跃然动，二十世纪不得不为民生主义之擅场时代也。是三大主义皆基本于民，递 变易，而欧洲之人种胥治化焉。”
                                {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;中国数千年来都是君主****政体，这种政体，不是平等自由的国民所堪受的，要去这种政体，不是专靠民族革命可以成功……我们推到满洲政府，从驱除满人那一面说是民族革命，从颠覆君主政体那一面说是政治革命，并不是把来分作两次去做。讲到那政治革命的结果，是建立民主政体立宪政体。照现在这样的政治论起来，就算汉人为君主，也不能是革命。”
                            </Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>摘自《孙中山全集》第一卷</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;材料2：</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;“一百年以来,我们的先人以不屈不挠的斗争反对内外压迫者,从来没有停止过,其中包括伟大的中国革命先行者孙中山先生所领导的辛亥革命在内,我们的先人指示我们,叫我们完成他们的遗志.我们现在是这样做了.我们团结起来,以人民解放战争和人民大革命****了内外压迫者,宣布中华人民共和国成立了.我们的民族将从此列入爱好和平自由的世界各民族的大家庭,以勇敢而勤劳的姿态工作着,创造自己的文明和幸福,同时也促进世界的和平和自由.我们的民族将再也不是一个被人侮辱的民族了,我们已经站起来了.”
                            </Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>摘自《毛泽东文集》第五卷</Text>
                        </View>

                        <View>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;37.结合材料回答问题：</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;“新年不欠旧年账，今生不欠来生债”，这是孙东林和哥哥孙水林的共同准则。1989年，孙东林与哥哥孙水林一同组建起建筑队伍，开始在北京、河南等地承接建筑工程和装饰工程。此后的20年中，无论遇到什么状况，孙东林从未拖欠过工人的工资。有时工程款不能及时拿到，他四处借钱，也要坚持将工资发放。他说，“诚信，是为人之道，也是立足之本。”“新年不欠旧年账，今生不欠来生债”，这是孙东林和哥哥孙水林的共同准则。1989年，孙东林与哥哥孙水林一同组建起建筑队伍，开始在北京、河南等地承接建筑工程和装饰工程。此后的20年中，无论遇到什么状况，孙东林从未拖欠过工人的工资。有时工程款不能及时拿到，他四处借钱，也要坚持将工资发放。他说，“诚信，是为人之道，也是立足之本。”
                                {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2010年2月9日，在天津承包建筑工程的孙水林，为抢在春节前赶回武汉给先期返乡的农民工发放工资，不顾路途遥远、天气恶劣，连夜赶路千里送薪。不料，2月10日凌晨遭遇车祸，一家五口不幸遇难。得知噩耗，孙东林悲痛不已。为了替哥哥完成遗愿，他带上哥哥车上的26万元钱，连续驱车15小时，返乡代兄为农民工发放工资。两天未合眼的孙东林流着泪眼赶回家中，和老人商议决定，先替哥哥完成遗愿，年前发完工钱再办丧事。他自己垫上6万以后，还差1万多元。这个时候，他们的老母亲拿着1万块现金交到儿子手上。这可是老人家的养老钱呀!
                                {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;随后，孙家立即让工友互相通知上门领钱。发工资的时候，孙东林和工友们找不到账单，都是凭着一本“良心账”，工友们说多少，孙东林就给多少。腊月二十九晚上，33.6万元工钱全部发完，竟与哥哥遇难前哥俩说过的数额相差无几。69名拿着工钱的工友对孙东林说：“明年我们跟你接着干”。
                            </Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;(1)基于“信义兄弟”这个事例，怎样理解诚信及其道德力量?(6分)</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;(2)在法律关系中，为什么也要坚守诚信?(4分)</Text>
                        </View>

                        <View>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;38.结合材料回答问题：</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;材料1：</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;纽约曼哈顿的时报广场，被称为“世界的十字路口”。在胡锦涛主席2011年访美前夕，从1月17日起，一抹亮丽的“中国红”在这里明艳绽放——首都中国国家形象片《人物篇》在时报广场的大屏幕上持续滚动播放，路人纷纷驻足观看。
                                {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在这段时长60秒的宣传片中，不仅有袁隆平、杨利伟、姚明等各领域杰出代表，还有“轮椅天使”金晶、“抗震小英雄”林浩、“一辈子在献血”的郭明义等感动中国的普通百姓。他们都面带微笑，神色自信，于静默之间传递着中国的声音。
                                {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;历史翻回到1904年5月的一天，在一家银行的外墙，贴出了时报广场上的第一张广告。100多年来，这里广告的每一次变幻刷新，都展示着时代的表情。可是在这当中，鲜有中国人的面孔和身影。百年沧桑，终以微笑定格，来到“世界的十字路口”，中国人自信、平和、友好。
                            </Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>摘编自 人民网（2011年1月20日）</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;材料2：</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;作为《人物篇》的姐妹篇，一部时长17分钟的中国国家形象片《角度篇》自2011年2月3日起将陆续在亚洲、欧美等地的多家电视台播出。《角度篇》分为“开放而有自信”、“发展而能共享”等8个部分，向世界展现了一个更丰富、多元的中国，其中70%以上的画面呈现的都是中国普通老百姓的生活。值得一提的是，它没有回避中国目前存在的一些问题，农民工及其家属的生存现状在片中多次出现。这部国家形象片看似一些“视觉碎片”，但能够让世人从中读出一个比较真实、鲜活的当代中国。
                            </Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>摘编自 新华网（2011年2月2日）</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;材料3：</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;从2009年“中国制造 世界合作”的广告片，到2011年的国家形象宣传片《人物篇》和《角度篇》，如此几种地向西方展示中国国家形象还是第一次。有评论认为，这几步短片展示了中国人民的勤劳智慧和精神风貌，每个人的笑容都那么阳光，让人油然而生到中国看看的愿望；还有人认为，这是“中国国际形象公关”的又一次主动出击，愈趋自信的中国主动向世界展示自己，中国开始步入“国家公关时代”；也有报道说，中国的宣传片是中国国家领导人出访之前的“盛大派对”，展示了中国的软实力。
                            </Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>摘编自 人民网（2011年1月20日）</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;(1)分析“中国开始步入‘国家公关时代’”的原因。（4分）</Text>
                            <Text style={{ marginTop: 10, lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;(2)国家形象宣传对提升中国软实力有何作用？（4分）</Text>
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
