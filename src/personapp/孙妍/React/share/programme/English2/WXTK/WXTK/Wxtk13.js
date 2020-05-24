import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, useRouteMatch } from 'react-router-dom';
import { NavBar, Icon, Tabs, Carousel, Button } from 'antd-mobile';
import { Accordion, List } from 'antd-mobile';
import ReactDOM from 'react-dom'
export default class Wxtk13 extends Component {
    onChange = (key) => {
        console.log(key);
    }
    render() {
        return (
            <div>
                <NavBar
                    style={{ width: '100%', backgroundColor: '#37376f', color: '#fff', position: 'fixed ', top: '0', zIndex: 1, height: '7vh' }}
                    leftContent={[
                        <Link to="/wxtk"><span style={{ fontSize: '17px', color: 'white' }} className="iconfont icon-ico_leftarrow"></span></Link>
                    ]}
                >
                    <span>第十三篇</span>
                </NavBar>
                <div style={{ marginTop: '8vh' }}>
                    <p style={{ fontSize: '16px' }}>&nbsp;&nbsp;&nbsp;&nbsp;When television first began to expand, very 
few of the people who had become famous as 
radio commentators were equally effective on 
television. Some of the __1__ they experienced 
when they were trying to __2__ themselves to 
the new medium were technical. When working 
__3__ radio, for example, they had become __4__ 
to seeing on __5__ of the listener. This __6__ of 
seeing for others means that the __7__ has to be 
very good at talking. __8__ all, he has to be able 
to __9__ a continuous sequence of visual images 
which __10__ meaning to the sounds which the 
listener hears. In the __11__ of television, however, 
the commentator sees __12__ with the viewer. His 
role, therefore, is __13__ different. He is there to 
make __14__ that the viewer dose not __15__ some 
points of insterest, to help him __16__ on particular 
things, and to __17__ the images on the television 
screen. __18__ his radio colleague, he must konw the 
__19__ of silence and how to use it at those 
moments __20__ the pictures speaks for themselves.`</p>
                   
                    <p style={{ fontSize: '18px', color: 'green', fontStyle: 'italic', marginTop: '-1.5vh' }}>Choose correct answers to the question:</p>
                    <div style={{width:'80%',height:'2vh'}}>
                        <div style={{float:'left',width:'40%'}}>1.A. difficultices</div>
                        <div style={{width:'50%',float:'left',marginLeft:'1.5vh'}}>B. successs</div>
                        
                    </div>
                    <div style={{width:'80%',height:'2vh'}}>
                        <div style={{float:'left',marginLeft:'1.5vh',width:'40%'}}>C. sufferings</div>
                        <div style={{width:'50%',float:'left'}}>D. incidents</div>
                        
                    </div>
                    <div style={{width:'80%',height:'2vh'}}>
                        <div style={{float:'left',width:'40%'}}>2.A.turn</div>
                        <div style={{width:'50%',float:'left',marginLeft:'1.5vh'}}>B. adapt</div>
                        
                    </div>
                    <div style={{width:'80%',height:'2vh'}}>
                        <div style={{float:'left',marginLeft:'1.5vh',width:'40%'}}>C. alter</div>
                        <div style={{width:'50%',float:'left'}}>D. modify</div>
                    </div>
                    <div style={{width:'80%',height:'2vh'}}>
                        <div style={{float:'left',width:'40%'}}>3.A.on</div>
                        <div style={{width:'50%',float:'left',marginLeft:'1.5vh'}}>B. at</div>
                        
                    </div>
                    <div style={{width:'80%',height:'2vh'}}>
                        <div style={{float:'left',marginLeft:'1.5vh',width:'40%'}}>C. with</div>
                        <div style={{width:'50%',float:'left'}}>D. behind</div>
                    </div>
                    <div style={{width:'80%',height:'2vh'}}>
                        <div style={{float:'left',width:'40%'}}>4.A.experienced</div>
                        <div style={{width:'50%',float:'left',marginLeft:'1.5vh'}}>B. determined</div>
                        
                    </div>
                    <div style={{width:'80%',height:'2vh'}}>
                        <div style={{float:'left',marginLeft:'1.5vh',width:'40%'}}>C. established</div>
                        <div style={{width:'50%',float:'left'}}>D. accustomed</div>
                    </div>
                    <div style={{width:'80%',height:'2vh'}}>
                        <div style={{float:'left',width:'40%'}}>5.A.account</div>
                        <div style={{width:'50%',float:'left',marginLeft:'1.5vh'}}>B. side</div>
                        
                    </div>
                    <div style={{width:'80%',height:'2vh'}}>
                        <div style={{float:'left',marginLeft:'1.5vh',width:'40%'}}>C. point</div>
                        <div style={{width:'50%',float:'left'}}>D. behalf</div>
                    </div>
                    <div style={{width:'80%',height:'2vh'}}>
                        <div style={{float:'left',width:'40%'}}>6.A.efficiency</div>
                        <div style={{width:'50%',float:'left',marginLeft:'1.5vh'}}>B.technology</div>
                        
                    </div>
                    <div style={{width:'80%',height:'2vh'}}>
                        <div style={{float:'left',marginLeft:'1.5vh',width:'40%'}}>C. art</div>
                        <div style={{width:'50%',float:'left'}}>D. performance</div>
                    </div>
                    <div style={{width:'80%',height:'2vh'}}>
                        <div style={{float:'left',width:'40%'}}>7.A.commentator</div>
                        <div style={{width:'50%',float:'left',marginLeft:'1.5vh'}}>B. TV viewer</div>
                        
                    </div>
                    <div style={{width:'80%',height:'2vh'}}>
                        <div style={{float:'left',marginLeft:'1.5vh',width:'40%'}}>C. speaker</div>
                        <div style={{width:'50%',float:'left'}}>D. author</div>
                    </div>
                    <div style={{width:'80%',height:'2vh'}}>
                        <div style={{float:'left',width:'40%'}}>8. A. Of</div>
                        <div style={{width:'50%',float:'left',marginLeft:'1.5vh'}}>B. For</div>
                        
                    </div>
                    <div style={{width:'80%',height:'2vh'}}>
                        <div style={{float:'left',marginLeft:'1.5vh',width:'40%'}}>C. Above</div>
                        <div style={{width:'50%',float:'left'}}>D. In</div>
                    </div>
                    <div style={{width:'80%',height:'2vh'}}>
                        <div style={{float:'left',width:'40%'}}>9.A.inspire</div>
                        <div style={{width:'50%',float:'left',marginLeft:'1.5vh'}}>B. create</div>
                        
                    </div>
                    <div style={{width:'80%',height:'2vh'}}>
                        <div style={{float:'left',marginLeft:'1.5vh',width:'40%'}}>C. cause</div>
                        <div style={{width:'50%',float:'left'}}>D. perceive</div>
                    </div>
                    <div style={{width:'80%',height:'2vh'}}>
                        <div style={{float:'left',width:'40%'}}>10. A. add</div>
                        <div style={{width:'50%',float:'left',marginLeft:'1.5vh'}}>B. apply</div>
                        
                    </div>
                    <div style={{width:'80%',height:'2vh'}}>
                        <div style={{float:'left',marginLeft:'1.5vh',width:'40%'}}>C. affect</div>
                        <div style={{width:'50%',float:'left'}}>D. reflect</div>
                    </div>
                    <div style={{width:'80%',height:'2vh'}}>
                        <div style={{float:'left',width:'40%'}}>11.A.occasion</div>
                        <div style={{width:'50%',float:'left',marginLeft:'1.5vh'}}>B. event</div>
                        
                    </div>
                    <div style={{width:'80%',height:'2vh'}}>
                        <div style={{float:'left',marginLeft:'1.5vh',width:'40%'}}>C. fact</div>
                        <div style={{width:'50%',float:'left'}}>D. case</div>
                    </div>
                    <div style={{width:'80%',height:'2vh'}}>
                        <div style={{float:'left',width:'40%'}}>12.A.something</div>
                        <div style={{width:'50%',float:'left',marginLeft:'1.5vh'}}>B.nothing</div>
                        
                    </div>
                    <div style={{width:'80%',height:'2vh'}}>
                        <div style={{float:'left',marginLeft:'1.5vh',width:'40%'}}>C. everything</div>
                        <div style={{width:'50%',float:'left'}}>D. anything</div>
                    </div>
                    <div style={{width:'80%',height:'2vh'}}>
                        <div style={{float:'left',width:'40%'}}>13.A.equally</div>
                        <div style={{width:'50%',float:'left',marginLeft:'1.5vh'}}>B. completely</div>
                        
                    </div>
                    <div style={{width:'80%',height:'2vh'}}>
                        <div style={{float:'left',marginLeft:'1.5vh',width:'40%'}}>C. initially</div>
                        <div style={{width:'50%',float:'left'}}>D. hardly</div>
                    </div>
                    <div style={{width:'80%',height:'2vh'}}>
                        <div style={{float:'left',width:'40%'}}>14.A.definite</div>
                        <div style={{width:'50%',float:'left',marginLeft:'1.5vh'}}>B. possible</div>
                        
                    </div>
                    <div style={{width:'80%',height:'2vh'}}>
                        <div style={{float:'left',marginLeft:'1.5vh',width:'40%'}}>C. sure</div>
                        <div style={{width:'50%',float:'left'}}>D. clear</div>
                    </div>
                    <div style={{width:'80%',height:'2vh'}}>
                        <div style={{float:'left',width:'40%'}}>15.A.lose</div>
                        <div style={{width:'50%',float:'left',marginLeft:'1.5vh'}}>B. deprive</div>
                        
                    </div>
                    <div style={{width:'80%',height:'2vh'}}>
                        <div style={{float:'left',marginLeft:'1.5vh',width:'40%'}}>C. relieve</div>
                        <div style={{width:'50%',float:'left'}}>D. miss</div>
                    </div>
                    <div style={{width:'80%',height:'2vh'}}>
                        <div style={{float:'left',width:'40%'}}>16.A.focus</div>
                        <div style={{width:'50%',float:'left',marginLeft:'1.5vh'}}>B. attend</div>
                        
                    </div>
                    <div style={{width:'80%',height:'2vh'}}>
                        <div style={{float:'left',marginLeft:'1.5vh',width:'40%'}}>C. follow</div>
                        <div style={{width:'50%',float:'left'}}>D. insist</div>
                    </div>
                    <div style={{width:'80%',height:'2vh'}}>
                        <div style={{float:'left',width:'40%'}}>17.A.exhibit</div>
                        <div style={{width:'50%',float:'left',marginLeft:'1.5vh'}}>B. demonstrate</div>
                        
                    </div>
                    <div style={{width:'80%',height:'2vh'}}>
                        <div style={{float:'left',marginLeft:'1.5vh',width:'40%'}}>C. expose</div>
                        <div style={{width:'50%',float:'left'}}>D. interpret</div>
                    </div>
                    <div style={{width:'80%',height:'2vh'}}>
                        <div style={{float:'left',width:'40%'}}>18.A.Like</div>
                        <div style={{width:'50%',float:'left',marginLeft:'1.5vh'}}>B. Unlike</div>
                        
                    </div>
                    <div style={{width:'80%',height:'2vh'}}>
                        <div style={{float:'left',marginLeft:'1.5vh',width:'40%'}}>C. As</div>
                        <div style={{width:'50%',float:'left'}}>D. For</div>
                    </div>
                    <div style={{width:'80%',height:'2vh'}}>
                        <div style={{float:'left',width:'40%'}}>19.A.purpose</div>
                        <div style={{width:'50%',float:'left',marginLeft:'1.5vh'}}>B. goal</div>
                        
                    </div>
                    <div style={{width:'80%',height:'2vh'}}>
                        <div style={{float:'left',marginLeft:'1.5vh',width:'40%'}}>C. value</div>
                        <div style={{width:'50%',float:'left'}}>D. intention</div>
                    </div>
                    <div style={{width:'80%',height:'2vh'}}>
                        <div style={{float:'left',width:'40%'}}>20. A. if</div>
                        <div style={{width:'50%',float:'left',marginLeft:'1.5vh'}}>B. when</div>
                        
                    </div>
                    <div style={{width:'80%',height:'2vh'}}>
                        <div style={{float:'left',marginLeft:'1.5vh',width:'40%'}}>C. which</div>
                        <div style={{width:'50%',float:'left'}}>D. as</div>
                    </div>
                   
                    
                    
                </div>
                <Accordion defaultActiveKey="1" className="my-accordion" onChange={this.onChange} style={{marginTop:'10vh'}}>
                    <Accordion.Panel header="参考答案" className="pad">
                        <p>1. 【答案】A. difficulties 本题测试词义搭配。本句译文：当他们试图适应这种新的媒体时他们遇到的困难是技术性的。'</p>
                        <p>2. 【答案】B. adapt 本题测试结构型词义搭配。adapt oneself to sth.使……适应于：When you go to a foreign country, you should adapt yourself to new manners and customs. turn to 求助于：You can turn to him for help when you are in trouble. (你有困难时可以求助于他)。alter (部分的)改变，修改：Have you altered your mind? (你是否已改变主意？) modify(稍稍)修改，变更：You have to modify the plan if necessary.此外，modify还可以作“修饰”解，如：Adverbs modify verbs.(副词修饰动词)</p>
                        <p>3. 【答案】A. on 本题测试惯用搭配。on radio用无线电，通过广播（强调行为手段）：The concert is broadcast on radio. on radio在涵义上相当于by radio，例如，We can listen to music broadcast music on the radio. 2) There was good music on radio last night. at,with,behind与radio不能构成惯用搭配，而且从上下文看也不符合题意。</p>
                        <p>4. 【答案】D. accustomed 本题测试词义搭配。be（或become，get）accustomed to sth. or doing sth. 习惯于：You will soon get accustomed to the climate he 你会很快习惯这里的气候的。从上下文的逻辑意思和语法结构上看，experienced，determined，establish均不切题。</p>
                        <p>5. 【答案】D. behalf 本题测试惯用搭配。on behalf of代表，为了。on account of由于on the side of在....一边；be on the point of doing sth.刚要做某事。</p>
                        <p>6. 【答案】C. art 本题测试词义搭配。art技能，本领: the art of seeing for others意为 :“这种替别人看实况的技能”。technology技术，performance演出，节目，执行，完成; fficiency效率,均不符合题意。</p>
                        <p>7. 【答案】A. commentator 本题测试逻辑词义搭配。本句译为：这种替别人看实况的技能意味着，电视解说员必须有高超的谈话艺术。</p>
                        <p>8. 【答案】C. Above 本题测试惯用搭配。above all = most important最重要的。in all总共: There are thity students in all in the class. for是复合介词，意为“尽管”。</p>
                        <p>9. 【答案】B. create 本题测试词义搭配。create 创立，创建: 1) They are struggling to create a new social order. 2) That would create a wrong impression(那样会造成错误的印象) cause 引起; inspire鼓舞; perceive认识到，察觉到。本句译文:最要的是他必须善于把看到的情景变成一个个连续的画面,用声音把实况介绍给观众。</p>
                        <p>10. 【答案】A. Add 本题测试词义搭配add .. .to把.....加到 ... which add meaning to the sound which the listener hears意为“这些图像使得观众听到的声音具有一定的意 义”，即”听众听到了解说员用声音介绍的实况内容”。</p>
                        <p>11. 【答案】D.case 本题测试惯用搭配。in the case of 就...而言。注意in the case of和in case of在涵义和用法上的区别:in case of万一发.... in the event of=in case of如果发生。occasion不能与in搭配，但是可以与on搭配，如:on the occasion of在....场合,值...之际:He gave me a present on the occasion of my birthday.</p>
                        <p>12. 【答案】C. everything 本题测试逻辑搭配。本句译为:然而，就电视而言,解说员与电视观众都能看到全部图像。</p>
                        <p>13. 【答案】B. completely 本题测试词义搭配。completely different玩去那不同。equally，hardly，initially均不符合题意。</p>
                        <p>14. 【答案】C. sure 本题测试词义搭配。make sure 查明，弄确实;后可接of或about, 也可接从句，例如: 1) Please make sure of the date of the next meeting请确定下次会议的时间。 2)Please make sure that the house is locked properly一定要把房门锁好。</p>
                        <p>15. 【答案】D. miss 本题测试词义搭配。missvt. 错过。本句译为:电视解说员要确保电视观众不错过一些精彩场面,他要提醒电视观众注意一些特殊的事情并向观众讲解电视荧幕上的图像。</p>
                        <p>16. 【答案】A. focus 本题测试词义搭配。focus on注视，集中。insist on 坚持(某种意见或看法); attend on 照顾，伺候: Two nurses attended on the patient. follow vt.后面不能接on意为‘跟随”。</p>
                        <p>17. 【答案】D. interpret 本题测试词义搭配。interpret 解释,说明: How can I interpret this behavior? exhibit展览,展示; demonstrate vt.演示，显示，表演; expose vt.暴露。</p>
                        <p>18. 【答案】B. unlike 本题测试词义型结构搭配。unlike不像. ..和..... 不同。从上下文逻辑意思来看,本句是讲电视实况解说员与无线电实况解说员转播方式不同，他按照电视图像进行讲解。可见，只能选择unlike.</p>
                        <p>19. 【答案】C. value 本题测试词义搭配。value 价值,有用性。电视实况解说员在图像很清楚时，就不必再作解释。这时“沉默”就起了微妙的作用，让观众自己去欣赏，体会和评论。可见，此处只能选value。purpose（目的），goal（目标）和intention（意图，意向）均不符合题意。</p>
                        <p>20. 【答案】B. when 本题测试逻辑搭配。句中when引导定语从句，修饰先行词moments，意为“在图像本身一目了然的时候。”本句译为：他和无线点解说员情况不同，他必须知道沉默的作用，在电视图像一目了然的时候如何利用这种作用。</p>
                        
                    </Accordion.Panel>
                </Accordion>
            </div>
        )
    }
}
