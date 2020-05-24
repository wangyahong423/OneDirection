import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, useRouteMatch } from 'react-router-dom';
import { NavBar, Icon, Tabs, Carousel, Button } from 'antd-mobile';
import { Accordion, List } from 'antd-mobile';
import ReactDOM from 'react-dom'
export default class Shiwu4 extends Component {
    onChange = (key) => {
        console.log(key);
    }
    render() {
        return (
            <div>
                <NavBar
                    style={{ width: '100%', backgroundColor: '#37376f', color: '#fff', position: 'fixed ', top: '0', zIndex: 1, height: '7vh' }}
                    leftContent={[
                        <Link to="/shiwuxuanshi"><span style={{ fontSize: '17px', color: 'white' }} className="iconfont icon-ico_leftarrow"></span></Link>
                    ]}
                >
                    <span>第四篇</span>
                </NavBar>
                <div style={{ marginTop: '8vh' }}>
                    <p style={{ fontSize: '16px' }}>&nbsp;&nbsp;&nbsp;&nbsp;Climate change has claimed its latest victim：Limacina helicina，a planktonic，predatory(捕食的)sea snail that’s a member of the taxonomic group more(36)__________ known as sea butterflies.(The name is(37)__________ from the wing-like lobes(叶瓣)the tiny creatures use to get around.)In a study(38)__________ published in joumal Proceedings of the Royal Society B，a group of scientists from the National Oceanic and Atmospheric Administration (NOAA)and Oregon State University have fQund that the Pacific Ocean’s decreasing pH—its acidifying(酸化)，in other words-is dissolving L.helicina’s thin shells.The researchers collected sea butterfly(39)__________ from 13 sites along the Pacific coast(between Washington and southern CaliforniA.，going over each with a scanning electron microscope.More than half of the shells(53%)from onshore individuals(40)__________ signs of“severe dissolution damage，”while 24%of(41)__________ individuals suffered dissolution damage.The study’s(42)__________investigator,Dr.NinaBednarsek of NOAA，described the affected L.helicina shells as having a texture not unlike“cauliflower”or“sandpaper.”According to the paper，there was a“strong positive(43)__________ ”between the proportion of sea butterflies with severe shell dissolution damage and“the percentage of　undersaturated(未达到饱和的)water”near the ocean’s surface.The researchers conclude“shell dissolution owing to(human.caused ocean(44)_________has doubled in near shore habitats since pre.industrial conditions across this region and is on track to triple by 2050，”a truly(45)__________ prediction.Moreover,the broader implications for ecosystem are unclear,as damaged shells make it harder for L.helicina to fight infections，stay buoyant，and protect themselves from predators.</p>
                   
                    <p style={{ fontSize: '18px', color: 'green', fontStyle: 'italic', marginTop: '-1.5vh' }}>Choose correct answers to the question:</p>
                    <div style={{width:'100%',height:'5vh',marginTop: '-1.5vh',}}>
                    <span style={{ fontSize: '16px'}}>&nbsp;&nbsp;&nbsp;&nbsp;A.showed</span>
                    <span style={{fontSize: '16px' }}>&nbsp;&nbsp;&nbsp;&nbsp;B.recently</span>
                    <span style={{ fontSize: '16px' }}>&nbsp;&nbsp;&nbsp;&nbsp;C.protected</span>
                    <span style={{ fontSize: '16px',}}>&nbsp;&nbsp;&nbsp;&nbsp;D.commonly</span>
                    </div>
                    <div style={{width:'100%',height:'5vh',marginTop: '-1.5vh',}}>
                    <span style={{ fontSize: '16px'}}>&nbsp;&nbsp;&nbsp;&nbsp;E.derived</span>
                    <span style={{fontSize: '16px' }}>&nbsp;&nbsp;&nbsp;&nbsp;F.samples</span>
                    <span style={{ fontSize: '16px' }}>&nbsp;&nbsp;&nbsp;&nbsp;G.offshore</span>
                    <span style={{ fontSize: '16px',}}>&nbsp;&nbsp;&nbsp;&nbsp;H.principal</span>
                    </div>
                    <div style={{width:'100%',height:'5vh',marginTop: '-1.5vh',}}>
                    <span style={{ fontSize: '16px'}}>&nbsp;&nbsp;&nbsp;&nbsp;J.correlation</span>
                    <span style={{fontSize: '16px' }}>&nbsp;&nbsp;&nbsp;&nbsp;K.encouraging</span>
                    <span style={{ fontSize: '16px' }}>&nbsp;&nbsp;&nbsp;&nbsp;L.seaward</span>
                    
                    </div>
                    <div style={{width:'100%',height:'5vh',marginTop: '-1.5vh',}}>
                    <span style={{ fontSize: '16px',}}>&nbsp;&nbsp;&nbsp;&nbsp;M.acidification</span>
                    <span style={{ fontSize: '16px'}}>&nbsp;&nbsp;&nbsp;&nbsp;N.grim</span>
                    <span style={{fontSize: '16px' }}>&nbsp;&nbsp;&nbsp;&nbsp;O.pollution</span>
                   
                    </div>
                    
                    
                    
                </div>
                <Accordion defaultActiveKey="1" className="my-accordion" onChange={this.onChange}>
                    <Accordion.Panel header="参考答案" className="pad">
                        <p>1. 【答案】气候变化已公布了其最新的受害者：鯱螺(学名Limacina helicina)，一种捕食性浮游海螺，被(36)普遍称为海蝴蝶分类组中的一员(“海蝴蝶”之名(37)来源于微小生物用来游走的翼状叶瓣)。在 (38)最近《皇家学会学报B》刊载的一项研究报告中，来自美国国家海洋和大气管理局(NOAA)及俄勒冈州立大学的科学家们指出：太平洋的PH正在不断下降一换句话说，海水的酸化正在溶解鯱螺的薄壳。 </p>
                        <p>2. 【答案】研究人员收集了太平洋沿岸(从华盛顿到南加州之间)13个地点的海蝴蝶(39)样本，并用扫描电子显微镜对其一一进行深入检查。来自海岸的个体样本中有一半以上(53%)的贝壳都(40)呈现出“严重溶解”的迹象，而在来自(41)海面上的个体样本中仅有24%的贝壳受到溶解破坏。该研究的(42)首席研究员，来自NOAA的Nina Bednarsek指出那些受到影响的鯱螺的贝壳都拥有“菜花”状或者“砂纸”状的纹理</p>
                        <p>3. 【答案】据该研究报道，严重损伤的贝壳数量与海洋表面附近 “欠饱合海水”百分率之间呈现出“强烈的正(43)相关”。研究人员推断出，“自该区域工业化时代以前的海洋条件算起，近海栖息地(由于人为导致的海洋 (44)酸化)引起的贝壳溶解已经翻了一倍，到2050年可能会增至三倍，这真是个(45)糟糕的预言。此外，这对生态系统的更广泛影响并不明确，因为受伤的外壳会让鯱螺更难以抵御感染、保持浮力及逃脱捕食者的猎杀。 </p>
                        
                    </Accordion.Panel>
                </Accordion>
            </div>
        )
    }
}
