import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import { NavBar, Flex, List,SearchBar } from 'antd-mobile';
import '../App.css';
const Item = List.Item;
const Brief = Item.Brief;

export default class Academic extends Component {
    render() {
        return (
            <div>
                <NavBar
                    style={{ backgroundColor: '#37376F', color: '#fff',position:'sticky ',top:'0',zIndex:10,textAlign:'center',height:'7vh'}}
                    leftContent={[
                        <Link to="/organization"><span style={{fontSize:'17px',color:'white'}} className="iconfont icon-ico_leftarrow"></span></Link>
                    ]}>
                        学术研究类
                </NavBar> 
                <div style={{marginTop:'3vh'}}>
                    <Flex style={{marginBottom:'5vh'}}>
                        <div className='placeholder'>
                            <div className='schoolBox1' >
                                <div className='dexinshe' ></div>
                                <span style={{color:'#000'}}>德馨社</span>
                            </div>
                        </div>
                        <div className='placeholder'>
                            <div className='schoolBox1' >
                                <div className='xiaofeiyang' ></div>
                                <span style={{color:'#000'}}>校飞扬演讲社</span>
                            </div>
                        </div>
                    </Flex>
                    <Flex style={{marginBottom:'5vh'}}>
                        <div className='placeholder'>
                            <div className='schoolBox1' >
                                <div className='xinzhishe' ></div>
                                <span style={{color:'#000'}}>新知社</span>
                            </div>
                        </div>
                        <div className='placeholder'>
                            <div className='schoolBox1' >
                                <div className='faxueshe' ></div>
                                <span style={{color:'#000'}}>法学社</span>
                            </div>
                        </div>
                    </Flex>
                    <Flex style={{marginBottom:'5vh'}}>
                        <div className='placeholder'>
                            <div className='schoolBox1' >
                                <div className='kaoyan' ></div>
                                <span style={{color:'#000'}}>考研与就业协会</span>
                            </div>
                        </div>
                        <div className='placeholder'>
                            <div className='schoolBox1' >
                                <div className='shizheng' ></div>
                                <span style={{color:'#000'}}>时政论坛社</span>
                            </div>
                        </div>
                    </Flex>
                    <Flex style={{marginBottom:'5vh'}}>
                        <div className='placeholder'>
                            <div className='schoolBox1' >
                                <div className='bian' ></div>
                                <span style={{color:'#000'}}>彼岸演讲社</span>
                            </div>
                        </div>
                        <div className='placeholder'>
                            <div className='schoolBox1' >
                                <div className='yingyu' ></div>
                                <span style={{color:'#000'}}>英语爱好者协会</span>
                            </div>
                        </div>
                    </Flex>
                    <Flex style={{marginBottom:'5vh'}}>
                        <div className='placeholder'>
                            <div className='schoolBox1' >
                                <div className='kuangye' ></div>
                                <span style={{color:'#000'}}>狂野英语社</span>
                            </div>
                        </div>
                        <div className='placeholder'>
                            <div className='schoolBox1' >
                                <div className='yueduzhe' ></div>
                                <span style={{color:'#000'}}>悦读者交流协会</span>
                            </div>
                        </div>
                    </Flex>
                    <Flex style={{marginBottom:'5vh'}}>
                        <div className='placeholder'>
                            <div className='schoolBox1' >
                                <div className='zhixingshe' ></div>
                                <span style={{color:'#000'}}>知行社</span>
                            </div>
                        </div>
                        <div className='placeholder'>
                            <div className='schoolBox1' >
                                <div className='lixiang' ></div>
                                <span style={{color:'#000'}}>理想担当青年社</span>
                            </div>
                        </div>
                    </Flex>
                    <Flex style={{marginBottom:'5vh'}}>
                        <div className='placeholder'>
                            <div className='schoolBox1' >
                                <div className='daxuesheng' ></div>
                                <span style={{color:'#000'}}>大学生思辨社</span>
                            </div>
                        </div>
                        <div className='placeholder'>
                            <div className='schoolBox1' >
                                <div className='dec' ></div>
                                <span style={{color:'#000'}}>DEC英语俱乐部</span>
                            </div>
                        </div>
                    </Flex>
                    <Flex style={{marginBottom:'5vh'}}>
                        <div className='placeholder'>
                            <div className='schoolBox1' >
                                <div className='jingmao' ></div>
                                <span style={{color:'#000'}}>河北师大经贸英语社</span>
                            </div>
                        </div>
                        <div className='placeholder'>
                            <div className='schoolBox1' >
                                <div className='daxueshengchuangye' ></div>
                                <span style={{color:'#000'}}>大学生创业协会</span>
                            </div>
                        </div>
                    </Flex>
                    <Flex style={{marginBottom:'5vh'}}>
                        <div className='placeholder'>
                            <div className='schoolBox1' >
                                <div className='shengwu' ></div>
                                <span style={{color:'#000'}}>生物爱好者协会</span>
                            </div>
                        </div>
                        <div className='placeholder'>
                            <div className='schoolBox1' >
                                <div className='zhenzhi' ></div>
                                <span style={{color:'#000'}}>真知书社</span>
                            </div>
                        </div>
                    </Flex>
                    <Flex style={{marginBottom:'5vh'}}>
                        <div className='placeholder'>
                            <div className='schoolBox1' >
                                <div className='pc' ></div>
                                <span style={{color:'#000'}}>数码PC协会</span>
                            </div>
                        </div>
                        <div className='placeholder'>
                            <div className='schoolBox1' >
                                <div className='diannao' ></div>
                                <span style={{color:'#000'}}>电脑爱好者协会</span>
                            </div>
                        </div>
                    </Flex>
                    <Flex style={{marginBottom:'5vh'}}>
                        <div className='placeholder'>
                            <div className='schoolBox1' >
                                <div className='eyu' ></div>
                                <span style={{color:'#000'}}>俄语桦林社</span>
                            </div>
                        </div>
                        <div className='placeholder'>
                            <div className='schoolBox1' >
                                <div className='xiyushe' ></div>
                                <span style={{color:'#000'}}>西语社</span>
                            </div>
                        </div>
                    </Flex>
                    <Flex style={{marginBottom:'5vh'}}>
                        <div className='placeholder'>
                            <div className='schoolBox1' >
                                <div className='yitong' ></div>
                                <span style={{color:'#000'}}>译通英语社</span>
                            </div>
                        </div>
                        <div className='placeholder'>
                            <div className='schoolBox1' >
                                <div className='yinghuashe' ></div>
                                <span style={{color:'#000'}}>樱花社</span>
                            </div>
                        </div>
                    </Flex>
                    <Flex style={{marginBottom:'5vh'}}>
                        <div className='placeholder'>
                            <div className='schoolBox1' >
                                <div className='hongxuehui' ></div>
                                <span style={{color:'#000'}}>红学会</span>
                            </div>
                        </div>
                        <div className='placeholder'>
                            <div className='schoolBox1' >
                                <div className='jinglun' ></div>
                                <span style={{color:'#000'}}>经纶汉语言协会</span>
                            </div>
                        </div>
                    </Flex>
                    <Flex style={{marginBottom:'5vh'}}>
                        <div className='placeholder'>
                            <div className='schoolBox1' >
                                <div className='qianyuan' ></div>
                                <span style={{color:'#000'}}>乾元国学社</span>
                            </div>
                        </div>
                        <div className='placeholder'>
                            <div className='schoolBox1' >
                                <div className='zifeng' ></div>
                                <span style={{color:'#000'}}>子风文学社</span>
                            </div>
                        </div>
                    </Flex>
                    <Flex style={{marginBottom:'5vh'}}>
                        <div className='placeholder'>
                            <div className='schoolBox1' >
                                <div className='chunqiu' ></div>
                                <span style={{color:'#000'}}>春秋诗社</span>
                            </div>
                        </div>
                        <div className='placeholder'>
                            <div className='schoolBox1' >
                                <div className='hanguo' ></div>
                                <span style={{color:'#000'}}>韩国语协会</span>
                            </div>
                        </div>
                    </Flex>
                    <Flex style={{marginBottom:'5vh'}}>
                        <div className='placeholder'>
                            <div className='schoolBox1' >
                                <div className='wuxian' ></div>
                                <span style={{color:'#000'}}>无线电协会</span>
                            </div>
                        </div>
                        <div className='placeholder'>
                            <div className='schoolBox1' >
                                <div className='tianwen' ></div>
                                <span style={{color:'#000'}}>天文爱好者协会</span>
                            </div>
                        </div>
                    </Flex>
                    <Flex style={{marginBottom:'5vh'}}>
                        <div className='placeholder'>
                            <div className='schoolBox1' >
                                <div className='qianrushi' ></div>
                                <span style={{color:'#000'}}>嵌入式电子协会</span>
                            </div>
                        </div>
                        <div className='placeholder'>
                            <div className='schoolBox1' >
                                <div className='web' ></div>
                                <span style={{color:'#000'}}>Web协会</span>
                            </div>
                        </div>
                    </Flex>
                    <Flex style={{marginBottom:'5vh'}}>
                        <div className='placeholder'>
                            <div className='schoolBox1' >
                                <div className='efeng' ></div>
                                <span style={{color:'#000'}}>E风英语社</span>
                            </div>
                        </div>
                        <div className='placeholder'>
                            <div className='schoolBox1' >
                                <div className='ruichi' ></div>
                                <span style={{color:'#000'}}>睿翅空间信息爱好者协会</span>
                            </div>
                        </div>
                    </Flex>
                </div>
            </div>
        )
    }
}
