import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, useRouteMatch } from 'react-router-dom';
import { NavBar, Icon, Tabs, Carousel, Button } from 'antd-mobile';
import { Accordion, List } from 'antd-mobile';
import ReactDOM from 'react-dom'
export default class Cnj14 extends Component {
    onChange = (key) => {
        console.log(key);
    }
    render() {
        return (
            <div>
                <NavBar
                    style={{ width: '100%', backgroundColor: '#37376f', color: '#fff', position: 'fixed ', top: '0', zIndex: 1, height: '7vh' }}
                    leftContent={[
                        <Link to="/cnj"><span style={{ fontSize: '17px', color: 'white' }} className="iconfont icon-ico_leftarrow"></span></Link>
                    ]}
                >
                    <span>第十四篇</span>
                </NavBar>
                <div style={{ marginTop: '8vh' }}>
                    <p style={{ fontSize: '16px' }}>&nbsp;&nbsp;&nbsp;&nbsp;yet when one looks at the photographs of the gardens created by the homeless, it strikes one that, for all their diversity of styles, these gardens speak of various other fundamental urges beyond that of decoration and creative expression.</p>
                   
                    
                </div>
                <Accordion defaultActiveKey="1" className="my-accordion" onChange={this.onChange}>
                    <Accordion.Panel header="参考答案" className="pad">
                        <p>考察重点：非谓语动词做后置定语，状语从句，插入语 ;这个句子结构非常清晰：it strikes one that, for all their diversity of styles,these gardens speak of various other fundamental urges beyond that of decoration and creative expression 是主句，其中 for all their diversity of styles是插入语。时间状语从句yet when one looks at the photoraphs of the gardens created by the homeless,提前至主句之前，其中created by the homeless 是过去分词短语充当后置定语，用来修饰the gardens词汇的识别：句子中的动词looks at对应的宾语是the photographs of the gardens,因此翻译成“观看”。句子中created by the homeless对应的宾语是the gardens,因此翻译成“创建、建立”。句子中的动词speak of对应的宾语是various other fundamental urges，因此翻译成“透露、显示、表明”</p>
                        <p>参考翻译:然而当我们观看那些由无家可归的人创建的家园的照片时，它们的那些各种各样的风格，会给人以深深的震撼。这些家园在它的装饰和创造性表示之上，透露出了其他基本的需求。</p>
                        
                    </Accordion.Panel>
                </Accordion>
            </div>
        )
    }
}
