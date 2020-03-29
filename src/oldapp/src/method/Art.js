import React, { Component } from 'react'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import { NavBar, Flex, WhiteSpace, List,SearchBar } from 'antd-mobile';
import '../App.css';
const Item = List.Item;
const Brief = Item.Brief;

export default class SchoolOrg extends Component {
    render() {
        return (
            <div>
                <NavBar
                    style={{ backgroundColor: '#37376F', color: '#fff',position:'sticky ',top:'0',zIndex:10,textAlign:'center',height:'7vh'}}
                    leftContent={[
                        <Link to="/organization"><span style={{fontSize:'17px',color:'white'}} className="iconfont icon-ico_leftarrow"></span></Link>
                    ]}>
                        文体艺术类
                </NavBar> 
                <div style={{marginTop:'3vh'}}>
                    <Flex style={{marginBottom:'5vh'}}>
                        <div className='placeholder'>
                            <div className='schoolBox1' >
                                <div className='fumei' ></div>
                                <span style={{color:'#000'}}>扶梅戏曲社</span>
                            </div>
                        </div>
                        <div className='placeholder'>
                            <div className='schoolBox1' >
                                <div className='qiaopai' ></div>
                                <span style={{color:'#000'}}>桥牌社</span>
                            </div>
                        </div>
                    </Flex>
                    <Flex style={{marginBottom:'5vh'}}>
                        <div className='placeholder'>
                            <div className='schoolBox1' >
                                <div className='lvtaiyang' ></div>
                                <span style={{color:'#000'}}>绿太阳曲艺工作室</span>
                            </div>
                        </div>
                        <div className='placeholder'>
                            <div className='schoolBox1' >
                                <div className='liyuan' ></div>
                                <span style={{color:'#000'}}>梨园春戏曲社</span>
                            </div>
                        </div>
                    </Flex>
                    <Flex style={{marginBottom:'5vh'}}>
                        <div className='placeholder'>
                            <div className='schoolBox1' >
                                <div className='shougong' ></div>
                                <span style={{color:'#000'}}>“手随心动”手工制作协会</span>
                            </div>
                        </div>
                        <div className='placeholder'>
                            <div className='schoolBox1' >
                                <div className='disheng' ></div>
                                <span style={{color:'#000'}}>笛声悠扬社</span>
                            </div>
                        </div>
                    </Flex>
                    <Flex style={{marginBottom:'5vh'}}>
                        <div className='placeholder'>
                            <div className='schoolBox1' >
                                <div className='dashou' ></div>
                                <span style={{color:'#000'}}>大手拉小手手工社</span>
                            </div>
                        </div>
                        <div className='placeholder'>
                            <div className='schoolBox1' >
                                <div className='wenming' ></div>
                                <span style={{color:'#000'}}>文明礼仪社</span>
                            </div>
                        </div>
                    </Flex>
                    <Flex style={{marginBottom:'5vh'}}>
                        <div className='placeholder'>
                            <div className='schoolBox1' >
                                <div className='lvyou' ></div>
                                <span style={{color:'#000'}}>旅游协会</span>
                            </div>
                        </div>
                        <div className='placeholder'>
                            <div className='schoolBox1' >
                                <div className='ziyou' ></div>
                                <span style={{color:'#000'}}>自由行摄影协会</span>
                            </div>
                        </div>
                    </Flex>
                    <Flex style={{marginBottom:'5vh'}}>
                        <div className='placeholder'>
                            <div className='schoolBox1' >
                                <div className='linchi' ></div>
                                <span style={{color:'#000'}}>临池书社</span>
                            </div>
                        </div>
                        <div className='placeholder'>
                            <div className='schoolBox1' >
                                <div className='shier' ></div>
                                <span style={{color:'#000'}}>十二夜动漫社</span>
                            </div>
                        </div>
                    </Flex>
                    <Flex style={{marginBottom:'5vh'}}>
                        <div className='placeholder'>
                            <div className='schoolBox1' >
                                <div className='zailushang' ></div>
                                <span style={{color:'#000'}}>在路上话剧社</span>
                            </div>
                        </div>
                        <div className='placeholder'>
                            <div className='schoolBox1' >
                                <div className='yinxiang' ></div>
                                <span style={{color:'#000'}}>印象吉他社</span>
                            </div>
                        </div>
                    </Flex>
                    <Flex style={{marginBottom:'5vh'}}>
                        <div className='placeholder'>
                            <div className='schoolBox1' >
                                <div className='qixian' ></div>
                                <span style={{color:'#000'}}>七弦吉他音乐协会</span>
                            </div>
                        </div>
                        <div className='placeholder'>
                            <div className='schoolBox1' >
                                <div className='diy' ></div>
                                <span style={{color:'#000'}}>DIY服装形象设计工作室</span>
                            </div>
                        </div>
                    </Flex>
                    <Flex style={{marginBottom:'5vh'}}>
                        <div className='placeholder'>
                            <div className='schoolBox1' >
                                <div className='dianzi' ></div>
                                <span style={{color:'#000'}}>电子竞技协会</span>
                            </div>
                        </div>
                        <div className='placeholder'>
                            <div className='schoolBox1' >
                                <div className='hanbo' ></div>
                                <span style={{color:'#000'}}>翰博轩书画社</span>
                            </div>
                        </div>
                    </Flex>
                    <Flex style={{marginBottom:'5vh'}}>
                        <div className='placeholder'>
                            <div className='schoolBox1' >
                                <div className='hulu' ></div>
                                <span style={{color:'#000'}}>葫芦丝学社</span>
                            </div>
                        </div>
                        <div className='placeholder'>
                            <div className='schoolBox1' >
                                <div className='mohuai' ></div>
                                <span style={{color:'#000'}}>墨槐书画社</span>
                            </div>
                        </div>
                    </Flex>
                    <Flex style={{marginBottom:'5vh'}}>
                        <div className='placeholder'>
                            <div className='schoolBox1' >
                                <div className='zhiyi' ></div>
                                <span style={{color:'#000'}}>纸艺DIY社</span>
                            </div>
                        </div>
                        <div className='placeholder'>
                            <div className='schoolBox1' >
                                <div className='haiyun' ></div>
                                <span style={{color:'#000'}}>花韵艺术团</span>
                            </div>
                        </div>
                    </Flex>
                    <Flex style={{marginBottom:'5vh'}}>
                        <div className='placeholder'>
                            <div className='schoolBox1' >
                                <div className='zhongmi' ></div>
                                <span style={{color:'#000'}}>中秘文化交流社</span>
                            </div>
                        </div>
                        <div className='placeholder'>
                            <div className='schoolBox1' >
                                <div className='mengzhiyi' ></div>
                                <span style={{color:'#000'}}>梦之翎舞蹈社</span>
                            </div>
                        </div>
                    </Flex>
                    <Flex style={{marginBottom:'5vh'}}>
                        <div className='placeholder'>
                            <div className='schoolBox1' >
                                <div className='ruiyi' ></div>
                                <span style={{color:'#000'}}>睿译戏剧社</span>
                            </div>
                        </div>
                        <div className='placeholder'>
                            <div className='schoolBox1' >
                                <div className='haiyun' ></div>
                                <span style={{color:'#000'}}>海韵艺术团</span>
                            </div>
                        </div>
                    </Flex>
                    <Flex style={{marginBottom:'5vh'}}>
                        <div className='placeholder'>
                            <div className='schoolBox1' >
                                <div className='hongfanhjs' ></div>
                                <span style={{color:'#000'}}>红帆话剧社</span>
                            </div>
                        </div>
                        <div className='placeholder'>
                            <div className='schoolBox1' >
                                <div className='xishan' ></div>
                                <span style={{color:'#000'}}>溪山琴况汉服社</span>
                            </div>
                        </div>
                    </Flex>
                    <Flex style={{marginBottom:'5vh'}}>
                        <div className='placeholder'>
                            <div className='schoolBox1' >
                                <div className='xiang' ></div>
                                <span style={{color:'#000'}}>象里象外棋社</span>
                            </div>
                        </div>
                        <div className='placeholder'>
                            <div className='schoolBox1' >
                                <div className='chenguang' ></div>
                                <span style={{color:'#000'}}>晨光社</span>
                            </div>
                        </div>
                    </Flex>
                    <Flex style={{marginBottom:'5vh'}}>
                        <div className='placeholder'>
                            <div className='schoolBox1' >
                                <div className='hanmo' ></div>
                                <span style={{color:'#000'}}>翰墨奇香书法协会</span>
                            </div>
                        </div>
                        <div className='placeholder'>
                            <div className='schoolBox1' >
                                <div className='hands' ></div>
                                <span style={{color:'#000'}}>x-hands魔之旅魔方协会</span>
                            </div>
                        </div>
                    </Flex>
                    <Flex style={{marginBottom:'5vh'}}>
                        <div className='placeholder'>
                            <div className='schoolBox1' >
                                <div className='peiyin' ></div>
                                <span style={{color:'#000'}}>配音社</span>
                            </div>
                        </div>
                        <div className='placeholder'>
                            <div className='schoolBox1' >
                                <div className='shiye' ></div>
                                <span style={{color:'#000'}}>视野影像协会</span>
                            </div>
                        </div>
                    </Flex>
                    <Flex style={{marginBottom:'5vh'}}>
                        <div className='placeholder'>
                            <div className='schoolBox1' >
                                <div className='moshu' ></div>
                                <span style={{color:'#000'}}>魔术协会</span>
                            </div>
                        </div>
                        <div className='placeholder'>
                            <div className='schoolBox1' >
                                <div className='xkyy' ></div>
                                <span style={{color:'#000'}}>星空音乐坊</span>
                            </div>
                        </div>
                    </Flex>
                    <Flex style={{marginBottom:'5vh'}}>
                        <div className='placeholder'>
                            <div className='schoolBox1' >
                                <div className='jiaoyi' ></div>
                                <span style={{color:'#000'}}>交谊舞</span>
                            </div>
                        </div>
                        <div className='placeholder'>
                            <div className='schoolBox1' >
                                <div className='taiji' ></div>
                                <span style={{color:'#000'}}>太极协会</span>
                            </div>
                        </div>
                    </Flex>
                    <Flex style={{marginBottom:'5vh'}}>
                        <div className='placeholder'>
                            <div className='schoolBox1' >
                                <div className='xiyu' ></div>
                                <span style={{color:'#000'}}>西域舞者</span>
                            </div>
                        </div>
                        <div className='placeholder'>
                            <div className='schoolBox1' >
                                <div className='aigu' ></div>
                                <span style={{color:'#000'}}>艾古服装设计协会</span>
                            </div>
                        </div>
                    </Flex>
                    <Flex style={{marginBottom:'5vh'}}>
                        <div className='placeholder'>
                            <div className='schoolBox1' >
                                <div className='sanda' ></div>
                                <span style={{color:'#000'}}>河北师范大学散打队</span>
                            </div>
                        </div>
                        <div className='placeholder'>
                            <div className='schoolBox1' >
                                <div className='shiguang' ></div>
                                <span style={{color:'#000'}}>时光空间</span>
                            </div>
                        </div>
                    </Flex>
                    <Flex style={{marginBottom:'5vh'}}>
                        <div className='placeholder'>
                            <div className='schoolBox1' >
                                <div className='guoji' ></div>
                                <span style={{color:'#000'}}>国际象棋</span>
                            </div>
                        </div>
                        <div className='placeholder'>
                            <div className='schoolBox1' >
                                <div className='tea' ></div>
                                <span style={{color:'#000'}}>茶文化协会</span>
                            </div>
                        </div>
                    </Flex>
                    <Flex style={{marginBottom:'5vh'}}>
                        <div className='placeholder'>
                            <div className='schoolBox1' >
                                <div className='yangguang' ></div>
                                <span style={{color:'#000'}}>阳光化学协会</span>
                            </div>
                        </div>
                        <div className='placeholder'>
                            <div className='schoolBox1' >
                                <div className='moke' ></div>
                                <span style={{color:'#000'}}>慕课协会</span>
                            </div>
                        </div>
                    </Flex>
                    <Flex style={{marginBottom:'5vh'}}>
                        <div className='placeholder'>
                            <div className='schoolBox1' >
                                <div className='dianping' ></div>
                                <span style={{color:'#000'}}>o2o电商平台兴趣小组</span>
                            </div>
                        </div>
                        <div className='placeholder'>
                            <div className='schoolBox1' >
                                <div className='caimo' ></div>
                                <span style={{color:'#000'}}>彩墨绘画社</span>
                            </div>
                        </div>
                    </Flex>
                    <Flex style={{marginBottom:'5vh'}}>
                        <div className='placeholder'>
                            <div className='schoolBox1' >
                                <div className='yingxiang' ></div>
                                <span style={{color:'#000'}}>映像时光</span>
                            </div>
                        </div>
                        <div className='placeholder'>
                            <div className='schoolBox1' >
                                <div className='jianmo' ></div>
                                <span style={{color:'#000'}}>数学建模</span>
                            </div>
                        </div>
                    </Flex>
                    <Flex style={{marginBottom:'5vh'}}>
                        <div className='placeholder'>
                            <div className='schoolBox1' >
                                <div className='lingtu' ></div>
                                <span style={{color:'#000'}}>凌途城乡规划协会</span>
                            </div>
                        </div>
                        <div className='placeholder'>
                            <div className='schoolBox1' >
                                <div className='chuangyi' ></div>
                                <span style={{color:'#000'}}>创译游漫社</span>
                            </div>
                        </div>
                    </Flex>
                    
                </div>
            </div>
        )
    }
}
