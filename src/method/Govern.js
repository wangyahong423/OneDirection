import React, { Component } from 'react'
import {BrowserRouter as Router,Link} from 'react-router-dom';
import { NavBar, Icon,Tabs,Carousel,Accordion, List} from 'antd-mobile';
const Item = List.Item;
const Brief = Item.Brief;

export default class Govern extends Component {
    render() {
        return (
            <div>
                <NavBar
                    style={{ backgroundColor: '#37376F', color: '#fff',position:'sticky ',top:'0',zIndex:10,textAlign:'center',height:'7vh'}}
                    leftContent={[
                        <Link to="/school"><span style={{fontSize:'17px',color:'white'}} className="iconfont icon-ico_leftarrow"></span></Link>
                    ]}>
                        治理架构
                </NavBar>
                <div style={{ marginTop: 10, marginBottom: 10 ,backgroundColor:"#37376F"}}>
                        <Accordion accordion openAnimation={{}} className="my-accordion" onChange={this.onChange}>
                            <Accordion.Panel header="现任领导">
                                <List className="my-list">
                                    <List.Item style={{marginLeft:'9vw'}}>党委书记&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;戴建兵</List.Item>
                                    <List.Item style={{marginLeft:'9vw'}}>党委副书记、校长&emsp;&emsp;&emsp;刘敬泽</List.Item>
                                    <List.Item style={{marginLeft:'9vw'}}>党委副书记&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;刘士欢</List.Item>
                                    <List.Item style={{marginLeft:'9vw'}}>党委副书记&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;霍丙泉</List.Item>
                                    <List.Item style={{marginLeft:'9vw'}}>党委常委、副校长&emsp;&emsp;&emsp;郑振峰</List.Item>
                                    <List.Item style={{marginLeft:'9vw'}}>党委常委、纪委书记&emsp;&emsp;杨士彬</List.Item>
                                    <List.Item style={{marginLeft:'9vw'}}>党委常委、副校长&emsp;&emsp;&emsp;武志英</List.Item>
                                    <List.Item style={{marginLeft:'9vw'}}>党委常委、副校长&emsp;&emsp;&emsp;关守义</List.Item>
                                    <List.Item style={{marginLeft:'9vw'}}>党委常委、副校长&emsp;&emsp;&emsp;刘&emsp;英</List.Item>
                                    <List.Item style={{marginLeft:'9vw'}}>副校长&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;郭&emsp;毅</List.Item>
                                </List>
                            </Accordion.Panel>
                            <Accordion.Panel header="中共河北师范大学第八届委员会" className="pad">
                                <List className="my-list">
                                    <List.Item style={{marginLeft:'5vw'}}>委&emsp;员（按姓氏笔画为序）：</List.Item>
                                    <List.Item style={{marginLeft:'5vw'}}>于海涛&emsp;史秉强&emsp;付建军&emsp;刘&emsp;英&emsp;刘敬泽</List.Item>
                                    <List.Item style={{marginLeft:'5vw'}}>闫东利&emsp;关守义&emsp;苏玉民&emsp;杨士彬&emsp;张士欢</List.Item>
                                    <List.Item style={{marginLeft:'5vw'}}>陈小雷&emsp;陈嘉兴&emsp;邵军永&emsp;武志英&emsp;郑振峰</List.Item>
                                    <List.Item style={{marginLeft:'5vw'}}>赵小兰&emsp;胡景敏&emsp;樊翠英&emsp;霍丙泉&emsp;戴建兵</List.Item>
                                </List>
                            </Accordion.Panel>
                            <Accordion.Panel header="中共河北师范大学第八节纪律检查委员会" className="pad">
                                <List className="my-list">
                                <List.Item style={{marginLeft:'5vw'}}>委&emsp;员（按姓氏笔画为序）：</List.Item>
                                    <List.Item style={{marginLeft:'5vw'}}>于化龙&emsp;习永凯&emsp;王新平&emsp;李双进&emsp;李庆祥</List.Item>
                                    <List.Item style={{marginLeft:'5vw'}}>杨&emsp;轶&emsp;杨士彬&emsp;杨彦辉&emsp;周春江&emsp;赵德勇</List.Item>
                                    <List.Item style={{marginLeft:'5vw'}}>魏世亮</List.Item>
                                </List>
                            </Accordion.Panel>
                            <Accordion.Panel header="河北师范大学学术委员会" className="pad">
                                <List className="my-list">
                                    <List.Item style={{marginLeft:'5vw'}}>主任：龚贵华</List.Item>
                                    <List.Item style={{marginLeft:'5vw'}}>副主任：郑振峰&emsp;程志华</List.Item>
                                    <List.Item style={{marginLeft:'5vw'}}>主任：赵宝华&emsp;杨 瑞</List.Item>
                                    <List.Item style={{marginLeft:'5vw'}}>委员：</List.Item>
                                    <List.Item style={{marginLeft:'5vw'}}>张继良&emsp;张志杰&emsp;邢建昌&emsp;贾丽英&emsp;郭小丽</List.Item>
                                    <List.Item style={{marginLeft:'5vw'}}>王福明&emsp;张学文&emsp;纪&emsp;奎&emsp;安&emsp;忠&emsp;曾艳丽</List.Item>
                                    <List.Item style={{marginLeft:'5vw'}}>汤文强&emsp;路&emsp;紫&emsp;赵焕彬&emsp;赵书良&emsp;武金玲</List.Item>
                                    <List.Item style={{marginLeft:'5vw'}}>刘毅玮&emsp;张志永&emsp;田宝军</List.Item>
                                    <List.Item>（二零一九年六月二十七日）</List.Item>
                                </List>
                            </Accordion.Panel>
                            <Accordion.Panel header="河北师范大学第十届学位评定委员会" className="pad">
                                <List className="my-list">
                                    <List.Item style={{marginLeft:'5vw'}}>主&emsp;席：刘敬泽</List.Item>
                                    <List.Item style={{marginLeft:'5vw'}}>副主席：郑振峰&emsp;郭&emsp;毅</List.Item>
                                    <List.Item style={{marginLeft:'5vw'}}>秘书长：周春江</List.Item>
                                    <List.Item style={{marginLeft:'5vw'}}>委&emsp;员：</List.Item>
                                    <List.Item style={{marginLeft:'5vw'}}>委&emsp;员：（按音序排列）</List.Item>
                                    <List.Item style={{marginLeft:'5vw'}}>白彦魁&emsp;常彦忠&emsp;陈嘉兴&emsp;韩启超&emsp;贾丽英</List.Item>
                                    <List.Item style={{marginLeft:'5vw'}}>姜文振&emsp;蒋凤春&emsp;靳慧龙&emsp;李春晖&emsp;李仁杰</List.Item>
                                    <List.Item style={{marginLeft:'5vw'}}>李素霞&emsp;刘&emsp;森&emsp;刘毅玮&emsp;马&emsp;剑&emsp;南&emsp;方</List.Item>
                                    <List.Item style={{marginLeft:'5vw'}}>王福明&emsp;苑立平&emsp;曾艳丽&emsp;曾智安&emsp;张广兴</List.Item>
                                    <List.Item style={{marginLeft:'5vw'}}>张志杰&emsp;赵书良&emsp;赵小兰</List.Item>
                                    <List.Item>（二零一九年九月二十六日）</List.Item>
                                </List>
                            </Accordion.Panel>
                            <Accordion.Panel header="河北师范大学教学委员会" className="pad">
                                <List className="my-list">
                                    <List.Item style={{marginLeft:'5vw'}}>主&emsp;任：郭&emsp;毅</List.Item>
                                    <List.Item style={{marginLeft:'5vw'}}>副主任：米据生&emsp;陈嘉兴</List.Item>
                                    <List.Item style={{marginLeft:'5vw'}}>秘书长：陈嘉兴</List.Item>
                                    <List.Item style={{marginLeft:'5vw'}}>委&emsp;员：（按音序排列）</List.Item>
                                    <List.Item style={{marginLeft:'5vw'}}>马&emsp;剑&emsp;王向鹏&emsp;王宪峰&emsp;王润兰&emsp;白&emsp;玫</List.Item>
                                    <List.Item style={{marginLeft:'5vw'}}>白彦魁&emsp;李仁杰&emsp;李春晖&emsp;李艳灵&emsp;李素霞</List.Item>
                                    <List.Item style={{marginLeft:'5vw'}}>李&emsp;冀&emsp;张广兴&emsp;张&emsp;晖&emsp;武明星&emsp;苑立平</List.Item>
                                    <List.Item style={{marginLeft:'5vw'}}>周春江&emsp;赵小兰&emsp;赵英俊&emsp;南&emsp;方&emsp;姜文振</List.Item>
                                    <List.Item style={{marginLeft:'5vw'}}>徐书景&emsp;高立中&emsp;郭瑞强&emsp;常彦忠&emsp;崔&emsp;强</List.Item>
                                    <List.Item style={{marginLeft:'5vw'}}>曾智安&emsp;靳慧龙&emsp;潘新民</List.Item>
                                    <List.Item>（二零一九年七月十日）</List.Item>
                                </List>
                            </Accordion.Panel>
                        </Accordion>
                    </div>
            </div>
        )
    }
}
