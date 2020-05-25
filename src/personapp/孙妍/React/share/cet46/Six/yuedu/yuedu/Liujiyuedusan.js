import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, useRouteMatch } from 'react-router-dom';
import { NavBar, Icon, Tabs, Carousel, Button } from 'antd-mobile';
import { Accordion, List } from 'antd-mobile';
import ReactDOM from 'react-dom'
export default class Liujiyuedusan extends Component {
    onChange = (key) => {
        console.log(key);
    }
    render() {
        return (
            <div>
                <NavBar
                    style={{ width: '100%', backgroundColor: '#37376f', color: '#fff', position: 'fixed ', top: '0', zIndex: 1, height: '7vh' }}
                    leftContent={[
                        <Link to="/yuedu"><span style={{ fontSize: '17px', color: 'white' }} className="iconfont icon-ico_leftarrow"></span></Link>
                    ]}
                >
                    <span>大学专业选择</span>
                </NavBar>
                <div style={{ marginTop: '8vh' }}>
                    <p style={{ fontSize: '16px' }}>&nbsp;&nbsp;&nbsp;&nbsp;One of the bitterest and most time-worm debates in student union bars up and down the country is resolved as academic research confirms that in financial terms at least, arts degrees are a complete waste of time.Getting through university boosts students’earnings by 25%, on a weighted average, or $220,000 over theirlifetime, according to Professor Ian Walker of Warwick University-but if they study Shakespeare or the peasants’revolt instead of anatomy of contract law, those gains are likely to be completely wiped out.</p>
                    <p style={{ fontSize: '16px', marginTop: '-1.5vh' }}>&nbsp;&nbsp;&nbsp;&nbsp;The government is about to allow universities to charge students up to $3,000 a year for their degrees, arguing that it’s a small price to pay compared with the financial rewards graduates reap later in life. But Prof. Walker’s research shows there are sharp variations in returns according to which subject a student takes.</p>
                    <p style={{ fontSize: '16px', marginTop: '-1.5vh' }}>&nbsp;&nbsp;&nbsp;&nbsp;Law, medicine and economics or business are the most lucrative choices, making their average earnings 25% higher, according to the article, published in the office for national statistics’monthly journal. Scientists get 10-15% extra. At the bottom of the list are arts subjects, which make only a “small ”differenceto earnings- a small negative one, in fact. Just ahead are degrees in education-which leave hard pressed teachers anaverage of 5% better off a year than if they had left school at 18.</p>
                    <p style={{ fontSize: '16px', marginTop: '-1.5vh' }}>&nbsp;&nbsp;&nbsp;&nbsp;“it’s hard to resist the conclusion that what students learn does matter a lot; and some subject areas givemore modest financial returns than others,” Prof. Walker said. As an economist, he was quick to point outthat students might gain non-financial returns from arts degrees:”Studying economics might be very dull, forexample, and studying post-modernism might be a lot of fun.”</p>
                    <p style={{ fontSize: '18px', color: 'green', fontStyle: 'italic', marginTop: '-1.5vh' }}>Choose correct answers to the question:</p>
                    <p style={{ fontSize: '16px', marginTop: '-1.5vh' }}>1.What is the best title for the passage?</p>
                    <p style={{ marginTop: '-1.5vh' }}>&nbsp;&nbsp;&nbsp;&nbsp;A.Professor Walker’s Research</p>
                    <p style={{ marginTop: '-1.5vh' }}>&nbsp;&nbsp;&nbsp;&nbsp;B.How to Make Big Money.</p>
                    <p style={{ marginTop: '-1.5vh' }}>&nbsp;&nbsp;&nbsp;&nbsp;C.Differences Between Science and Arts Degrees.</p>
                    <p style={{ marginTop: '-1.5vh' }}>&nbsp;&nbsp;&nbsp;&nbsp;D.Studying Arts Has Negative Financial Outcome.</p>
                    <p style={{ fontSize: '16px', marginTop: '-1.5vh' }}>2.Universities charge students a rather high tuition mainly b</p>
                    <p style={{ marginTop: '-1.5vh' }}>&nbsp;&nbsp;&nbsp;&nbsp;  A.they provide the students with very prosperous subjects</p>
                    <p style={{ marginTop: '-1.5vh' }}>&nbsp;&nbsp;&nbsp;&nbsp;B.they assume that their graduates can earn much more than</p>
                    <p style={{ marginTop: '-1.5vh' }}>&nbsp;&nbsp;&nbsp;&nbsp;C.they don’t get financial support from the government</p>
                    <p style={{ marginTop: '-1.5vh' }}>&nbsp;&nbsp;&nbsp;&nbsp;D.they need much revenue to support the educational expenses</p>
                    <p style={{ fontSize: '16px', marginTop: '-1.5vh' }}>3.The word “lucrative”(Line 1, Para. 4) most probably means _____</p>
                    <p style={{ marginTop: '-1.5vh' }}>&nbsp;&nbsp;&nbsp;&nbsp;  A.sensible</p>
                    <p style={{ marginTop: '-1.5vh' }}>&nbsp;&nbsp;&nbsp;&nbsp;B.creative</p>
                    <p style={{ marginTop: '-1.5vh' }}>&nbsp;&nbsp;&nbsp;&nbsp;C.profitable</p>
                    <p style={{ marginTop: '-1.5vh' }}>&nbsp;&nbsp;&nbsp;&nbsp;D.reliable</p>
                    <p style={{ fontSize: '16px', marginTop: '-1.5vh' }}>4.Law, medical and business graduates could earn 25% more than ______</p>
                    <p style={{ marginTop: '-1.5vh' }}>&nbsp;&nbsp;&nbsp;&nbsp;  A.education graduates</p>
                    <p style={{ marginTop: '-1.5vh' }}>&nbsp;&nbsp;&nbsp;&nbsp;B.arts graduates</p>
                    <p style={{ marginTop: '-1.5vh' }}>&nbsp;&nbsp;&nbsp;&nbsp;C.those who had not studied at the university</p>
                    <p style={{ marginTop: '-1.5vh' }}>&nbsp;&nbsp;&nbsp;&nbsp;D.the average income</p>
                    <p style={{ fontSize: '16px', marginTop: '-1.5vh' }}>5.We can safely conclude that the author ______</p>
                    <p style={{ marginTop: '-1.5vh' }}>&nbsp;&nbsp;&nbsp;&nbsp;  A.regards arts degrees as meaningless</p>
                    <p style={{ marginTop: '-1.5vh' }}>&nbsp;&nbsp;&nbsp;&nbsp;B.finds this result disappointing and unfair</p>
                    <p style={{ marginTop: '-1.5vh' }}>&nbsp;&nbsp;&nbsp;&nbsp;C.wants the students to think twice before they decide what to learn in college</p>
                    <p style={{ marginTop: '-1.5vh' }}>&nbsp;&nbsp;&nbsp;&nbsp;D.holds that arts degrees are still rewarding despite its scarce financial returns</p>
                </div>
                <Accordion defaultActiveKey="1" className="my-accordion" onChange={this.onChange}>
                    <Accordion.Panel header="参考答案" className="pad">
                        <p>1.【答案】[D] </p>
                        <p>【解析】主旨大意题。本文为Walker教授的研究成果，旨在说明不同专业的毕业生有不同的经济回报，并非要传授发财心得或者比较文理科的异同。文章首句即为本题解题关键，故D正确。</p>
                        <p>2.【答案】[B] </p>
                        <p>【解析】事实细节题。定位至第3段第1句。本文只有这一句与收取学费有关，后一个分句即前一个分句的理由，抓住其中隐含的因果关系就不难找到正确答案。</p>
                        <p>3.【答案】[C] </p>
                        <p>【解析】词义理解题。通过下文数据earnings 25% higher和get 10-15% extra可以推测lucrative大意应为“给人带来丰厚收入的”,故选C。</p>
                        <p>4.【答案】[C] </p>
                        <p>【解析】事实细节题。第4段中出现了几个比较数字，考题要求找到此段首句提到的收人增加25%的参照点。第2段第1句中的Getting through university 表明这类学生收人增加25%的参照对象是没读大学的人，且从第4段第3句中的the list和第4句即可以确定这一段是在比较大学毕业与18岁毕业(即没读大学)收入的不同，因此C正确。</p>
                        <p>5.【答案】[D] </p>
                        <p>【解析】推理判断题。结论往往出现在文章结尾,要想答对此题,一定要仔细体会本文末句。本文虽然重点讨论文科没有经济效益，但是作者并没有做出主观判断，故A、B、C都不正确，而作者在文章最后讲到了人文学科虽然经济效益不佳但学习过程更有趣，故D符合作者意思。</p>
                    </Accordion.Panel>
                </Accordion>
            </div>
        )
    }
}
