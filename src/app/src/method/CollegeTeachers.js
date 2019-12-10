import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import { NavBar,Accordion, List} from 'antd-mobile';
import '../App.css';
const Item = List.Item;
const Brief = Item.Brief;

export default class CollegeTeachers extends Component {
    onChange = (key) => {
        console.log(key);
    }
    render() {
        return (
            <div>
                <NavBar
                    style={{ backgroundColor: '#37376F', color: '#fff',position:'sticky ',top:'0',zIndex:10,textAlign:'center',height:'7vh'}}
                    leftContent={[
                        <Link to="/college"><span style={{fontSize:'17px',color:'white'}} className="iconfont icon-ico_leftarrow"></span></Link>
                    ]}>
                        学院领导
                </NavBar> 
                <div  className='jianjieImg'>
                        <div className='teacherword'>                        
                            <Accordion style={{marginTop:'11vh',width:'100vw'}} accordion openAnimation={{}} className="my-accordion" onChange={this.onChange}>
                                <Accordion.Panel header="管委会主任">
                                    <List className="my-list">
                                        <List.Item style={{height:'10vh',marginLeft:'5vw'}}><p>张子龙&emsp;80786213&emsp;zlzhang@hebtu.edu.cn</p></List.Item>
                                    </List>
                                </Accordion.Panel>
                                <Accordion.Panel header="党总支书记" className="pad">
                                    <List className="my-list">
                                        <List.Item style={{height:'10vh',marginLeft:'5vw'}}><p>杨春明&emsp;80786203&emsp;Ychm@hebtu.edu.cn</p></List.Item>
                                    </List>
                                </Accordion.Panel>
                                <Accordion.Panel header="院长" className="pad">
                                    <List className="my-list">
                                        <List.Item style={{height:'10vh',marginLeft:'5vw'}}><p>赵书良&emsp;80786202&emsp;zhaoshuliang@onest.net</p></List.Item>
                                    </List>
                                </Accordion.Panel>
                                <Accordion.Panel header="副书记、副院长" className="pad">
                                    <List className="my-list">
                                        <List.Item style={{height:'10vh',marginLeft:'5vw'}}><p>闵杰&emsp;80786204&emsp;minjie@hebtu.edu.cn</p></List.Item>
                                    </List>
                                </Accordion.Panel>
                                <Accordion.Panel header="副院长" className="pad">
                                    <List className="my-list">
                                        <List.Item style={{height:'10vh',marginLeft:'5vw'}}><p>杨树元&emsp;80786205&emsp;368392@qq.com</p></List.Item>
                                    </List>
                                </Accordion.Panel>
                                <Accordion.Panel header="副院长" className="pad">
                                    <List className="my-list">
                                        <List.Item style={{height:'10vh',marginLeft:'5vw'}}><p>张鑫&emsp;80786213&emsp;zhangxin@onest.net</p></List.Item>
                                    </List>
                                </Accordion.Panel>
                                <Accordion.Panel header="副院长" className="pad">
                                    <List className="my-list">
                                        <List.Item style={{height:'10vh',marginLeft:'5vw'}}><p>张玉华&emsp;80786212&emsp;zhangyuhua@onest.net</p></List.Item>
                                    </List>
                                </Accordion.Panel>
                                <Accordion.Panel header="副院长" className="pad">
                                    <List className="my-list">
                                        <List.Item style={{height:'10vh',marginLeft:'5vw'}}><p>单博&emsp;80786213&emsp;shanbo@onest.net</p></List.Item>
                                    </List>
                                </Accordion.Panel>
                            </Accordion>
                        </div>
                </div>
            </div>
        )
    }
}
