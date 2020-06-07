import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { NavBar, Carousel } from 'antd-mobile';
import '../../../App.css';
import { SearchBar } from 'antd-mobile';
import { List } from 'antd-mobile';
import { nonsense } from 'antd-mobile/lib/picker';
const Item = List.Item;
const Brief = Item.Brief;


export default class XSQK extends Component {

    state = {
        value: '',
    };
    onChange = (value) => {
        this.setState({ value });
    };
    clear = () => {
        this.setState({ value: '' });
    };
    render() {
        return (
            <div>
                <NavBar
                    style={{ backgroundColor: '#37376F', color: '#fff', position: 'sticky ', top: '0', zIndex: 10, textAlign: 'center', height: '7vh' }}
                    leftContent={[
                        <Link to="/kxyj"><span style={{ fontSize: '17px', color: 'white' }} className="iconfont icon-ico_leftarrow"></span></Link>
                    ]}>
                    学术期刊
                </NavBar>

                <div style={{height:'34vh',width:'100vw',backgroundColor:"white"}}>
                    <div style={{height:'30vh',width:'8vw',float:"left",marginTop:'2vh',
                        backgroundColor:'#917b70',textAlign:"center"}}>
                        <li style={{listStyle:'none',fontSize:10,color:'white',marginTop:'4vh'}}>哲</li>
                        <li style={{listStyle:'none',fontSize:10,color:'white',marginTop:'1.5vh'}}>学</li>
                        <li style={{listStyle:'none',fontSize:10,color:'white',marginTop:'1.5vh'}}>社</li>
                        <li style={{listStyle:'none',fontSize:10,color:'white',marginTop:'1.5vh'}}>会</li>
                        <li style={{listStyle:'none',fontSize:10,color:'white',marginTop:'1.5vh'}}>科</li>
                        <li style={{listStyle:'none',fontSize:10,color:'white',marginTop:'1.5vh'}}>学</li>
                        <li style={{listStyle:'none',fontSize:10,color:'white',marginTop:'1.5vh'}}>版</li>
                    </div>
                    <div style={{height:'30vh',width:'90vw',float:"left"}}>
                        <li style={{listStyle:'none',fontSize:10,color:'black',marginTop:'4.5vh',marginLeft:'0.5vw'}}>AMI综合评价( A刊)核心期刊</li>
                        <li style={{listStyle:'none',fontSize:10,color:'black',marginTop:'1.8vh',marginLeft:'0.5vw'}}>RCCSE中国核心学术期刊</li>
                        <li style={{listStyle:'none',fontSize:10,color:'black',marginTop:'1.8vh',marginLeft:'0.5vw'}}>中国期刊方阵入选期刊</li>
                        <li style={{listStyle:'none',fontSize:10,color:'black',marginTop:'1.8vh',marginLeft:'0.5vw'}}>全国百强社会科学学报</li>
                        <li style={{listStyle:'none',fontSize:10,color:'black',marginTop:'1.8vh',marginLeft:'0.5vw'}}>中国人民大学"复印报刊资料重要转载来源期刊"</li>
                        <li style={{listStyle:'none',fontSize:10,color:'black',marginTop:'1.8vh',marginLeft:'0.5vw'}}>联系电话: 0311-80786363</li>
                        <li style={{listStyle:'none',fontSize:10,color:'black',marginTop:'1.8vh',marginLeft:'0.5vw'}}>邮政编码: 050024</li>
                        <li style={{listStyle:'none',fontSize:10,color:'black',marginTop:'1.8vh',marginLeft:'0.5vw'}}>电子邮箱: shekeb@mail.hebtu.edu.cn</li>
                        <a href="http://xuebao.hebtu.edu.cn/andamagazine/frontArticle.do?bid=2" 
                            style={{ color: 'blue', fontSize: 10, fontWeight: 500,
                                float:'right',marginRight:'15vw',fontWeight:550,}}>
                            点击进入
                        </a>
                    </div>
                </div>


                <div style={{ marginTop: '1vh',height:'34vh',width:'100vw',backgroundColor:"white"}}>
                    <div style={{height:'30vh',width:'8vw',float:"left",marginTop:'2vh',
                        backgroundColor:'#917b70',textAlign:"center"}}>
                        <li style={{listStyle:'none',fontSize:10,color:'white',marginTop:'7vh'}}>自</li>
                        <li style={{listStyle:'none',fontSize:10,color:'white',marginTop:'3vh'}}>然</li>
                        <li style={{listStyle:'none',fontSize:10,color:'white',marginTop:'3vh'}}>科</li>
                        <li style={{listStyle:'none',fontSize:10,color:'white',marginTop:'3vh'}}>学</li>
                        <li style={{listStyle:'none',fontSize:10,color:'white',marginTop:'3vh'}}>版</li>
                    </div>
                    <div style={{height:'30vh',width:'90vw',float:"left"}}>
                        <li style={{listStyle:'none',fontSize:10,color:'black',marginTop:'2.5vh',marginLeft:'0.5vw'}}>中国科技核心期刊</li>
                        <li style={{listStyle:'none',fontSize:10,color:'black',marginTop:'1.8vh',marginLeft:'0.5vw'}}>RCCSE中国核心学术期刊</li>
                        <li style={{listStyle:'none',fontSize:10,color:'black',marginTop:'1.8vh',marginLeft:'0.5vw'}}>中国期刊方阵入选期刊</li>
                        <li style={{listStyle:'none',fontSize:10,color:'black',marginTop:'1.8vh',marginLeft:'0.5vw'}}>全国高校优秀科技期刊</li>
                        <li style={{listStyle:'none',fontSize:10,color:'black',marginTop:'1.8vh',marginLeft:'0.5vw'}}>华北优秀期刊</li>
                        <li style={{listStyle:'none',fontSize:10,color:'black',marginTop:'1.8vh',marginLeft:'0.5vw'}}>河北省优秀科技期刊</li>
                        <li style={{listStyle:'none',fontSize:10,color:'black',marginTop:'1.8vh',marginLeft:'0.5vw'}}>联系电话: 0311-80786364</li>
                        <li style={{listStyle:'none',fontSize:10,color:'black',marginTop:'1.8vh',marginLeft:'0.5vw'}}>邮政编码: 050024</li>
                        <li style={{listStyle:'none',fontSize:10,color:'black',marginTop:'1.8vh',marginLeft:'0.5vw'}}>电子邮箱: ziranb@mail.hebtu.edu.cn</li>
                        <a href="http://xuebao.hebtu.edu.cn/andamagazine/frontArticle.do?bid=1" 
                            style={{ color: 'blue', fontSize: 10, fontWeight: 500,
                                float:'right',marginRight:'15vw',fontWeight:550,
                                marginTop:'-1vh'}}>
                            点击进入
                        </a>
                    </div>
                </div>


                <div style={{ marginTop: '1vh',height:'38vh',width:'100vw',backgroundColor:"white"}}>
                    <div style={{height:'34vh',width:'8vw',float:"left",marginTop:'2vh',
                        backgroundColor:'#917b70',textAlign:"center"}}>
                        <li style={{listStyle:'none',fontSize:10,color:'white',marginTop:'7vh'}}>教</li>
                        <li style={{listStyle:'none',fontSize:10,color:'white',marginTop:'3vh'}}>育</li>
                        <li style={{listStyle:'none',fontSize:10,color:'white',marginTop:'3vh'}}>科</li>
                        <li style={{listStyle:'none',fontSize:10,color:'white',marginTop:'3vh'}}>学</li>
                        <li style={{listStyle:'none',fontSize:10,color:'white',marginTop:'3vh'}}>版</li>
                    </div>
                    <div style={{height:'40vh',width:'90vw',float:"left"}}>
                        <li style={{listStyle:'none',fontSize:10,color:'black',marginTop:'2.5vh',marginLeft:'0.5vw'}}>教育部名栏入选期刊</li>
                        <li style={{listStyle:'none',fontSize:10,color:'black',marginTop:'1.5vh',marginLeft:'0.5vw'}}>全国中文核心期刊</li>
                        <li style={{listStyle:'none',fontSize:10,color:'black',marginTop:'1.5vh',marginLeft:'0.5vw'}}>AMI综合评价( A刊)核心期刊</li>
                        <li style={{listStyle:'none',fontSize:10,color:'black',marginTop:'1.5vh',marginLeft:'0.5vw'}}>CSSCI来源期刊(扩展版)</li>
                        <li style={{listStyle:'none',fontSize:10,color:'black',marginTop:'1.5vh',marginLeft:'0.5vw'}}>RCCSE中国核心学术期刊</li>
                        <li style={{listStyle:'none',fontSize:10,color:'black',marginTop:'1.5vh',marginLeft:'0.5vw'}}>全国高校百强科技期刊</li>
                        <li style={{listStyle:'none',fontSize:10,color:'black',marginTop:'1.5vh',marginLeft:'0.5vw'}}>全国高校特色栏目社科学报</li>
                        <li style={{listStyle:'none',fontSize:10,color:'black',marginTop:'1.5vh',marginLeft:'0.5vw'}}>中国人民大学”复印报刊资料重要转载来源期刊”</li>
                        <li style={{listStyle:'none',fontSize:10,color:'black',marginTop:'1.5vh',marginLeft:'0.5vw'}}>联系电话: 0311-80786366</li>
                        <li style={{listStyle:'none',fontSize:10,color:'black',marginTop:'1.5vh',marginLeft:'0.5vw'}}>邮政编码: 050024</li>
                        <li style={{listStyle:'none',fontSize:10,color:'black',marginTop:'1.5vh',marginLeft:'0.5vw'}}>电子邮箱: jiaoyub@hebtu .edu.cn</li>
                        <a href="http://xuebao.hebtu.edu.cn/andamagazine/frontArticle.do?bid=3" 
                            style={{ color: 'blue', fontSize: 10, fontWeight: 500,
                                float:'right',marginRight:'15vw',fontWeight:550,
                                marginTop:'-1vh'}}>
                            点击进入
                        </a>
                    </div>
                </div>

            </div>
        )
    }
}
