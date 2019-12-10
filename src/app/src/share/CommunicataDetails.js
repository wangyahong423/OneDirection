import React, { Component } from 'react'
import { NavBar, List, InputItem, SearchBar, WingBlank, SegmentedControl } from 'antd-mobile';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios'
import { createForm } from 'rc-form';
class CommunicataDetails extends Component {
    componentDidMount() {
        // this.autoFocusInst.focus();
    }
    handleClick = () => {
        this.inputRef.focus();
    }
    constructor() {
        super();
        this.state = {
            color1: true,
            color2: true,
            color3: true,
            color4: true,
            // data:[]
        }
    }
    //   componentDidMount() {
    //     console.log(this.state.data);
    //     var id =this.props.match.params.id;
    //     console.log(this.props)
    //     console.log(id)
    //     let url = `http://localhost:3005/learn/list`+id;
    //     axios(url)
    //         .then((res) => {
    //           console.log(res.data)
    //           console.log(res.data.learnList)
    //             this.setState({
    //               data: res.data.learnList[id-1]                 
    //             })
    //         })
    //   }

    changeColor1 = () => {
        this.setState({
            color1: !this.state.color1,
        })
    }
    render() {
        const { getFieldProps } = this.props.form;
        let Zan1 = {
            color: this.state.color1 ? '#000' : 'red',
            fontSize: "3.2vh",
            marginLeft: '11vw'
        }
        return (
            <div>
                <NavBar style={{ backgroundColor: '#37376F', color: '#fff', position: 'sticky ', top: '0', zIndex: 10, textAlign: 'center' }}
                    leftContent={[
                        <Link to="/StudyCommunicate"><span style={{ fontSize: '17px', color: 'white' }} className="iconfont icon-ico_leftarrow"></span></Link>
                    ]}>
                    动态详情</NavBar>


                {/* <div style={{ width: "96vw", paddingBottom: "1vh", backgroundColor: "#fff", borderRadius: "2vh", margin: "2vw" }}>
                                <div style={{ height: "10vh", width: "90vw" }}>
                                    <img src={(`studyCommunicate/1.jpg`)} style={{ height: "8vh", width: "8vh", borderRadius: "50%", margin: "1vh", float: "left" }}></img>
                                    <div style={{ height: "8vh", width: "60vw", float: "left" }}>
                                        <p style={{ margin: "2vh 0 0 2vh", fontSize: "2vh", float: "left" }}>{this.state.data.name}</p>
                                        <p style={{ fontSize: "1vh", float: "left", margin: "6vh 0 0 -9vh" }}>{this.state.data.time}</p>
                                    </div>
                                </div>
                                <div style={{ width: "90vw", margin: "3vw" }}>
                                    <span>
                                        {this.state.data.content}
                                    </span>
                                    <hr></hr>
                                    <span className="iconfont icon-zhuanfa" style={{ fontSize: "4vw", margin: "0 12vw 0 13vw" }}>
                                    </span>
                                    
                                        <span className="iconfont icon-pinglun" style={{ fontSize: "6vw", margin: "0 12vw 0 13vw" }}>
                                        </span>
                                    <span className="iconfont icon-dianzan">
                                    </span>
                                </div>
                            </div> */}
                <div style={{ width: "96vw", paddingBottom: "2vh", backgroundColor: "#fff", borderRadius: "2vh", margin: "2vw" }}>
                    <div style={{ height: "10vh", width: "90vw" }}>
                        <img src={(`studyCommunicate/1.jpg`)} style={{ height: "8vh", width: "8vh", borderRadius: "50%", margin: "1vh", float: "left" }}></img>
                        <div style={{ height: "8vh", width: "60vw", float: "left" }}>
                            <p style={{ margin: "2vh 0 0 2vh", fontSize: "2.5vh", float: "left" }}>薄荷水加冰</p>
                            <p style={{ fontSize: "1vh", float: "left", margin: "6vh 0 0 -9vh" }}>2018-4-05</p>
                        </div>
                    </div>
                    <div style={{ width: "90vw", margin: "3vw", lineHeight: "3vh" }}>
                        <span>
                            大二就要分方向了，希望学长学姐可以给出一些建议，拜托了！
                    </span>
                    </div>
                    <hr></hr>
                    <div style={{ width: "96vw", margin: "2vw" }}>
                        <p style={{ fontSize: "2.5vh" }}>评论</p>
                        <div style={{ width: "94vw" }}>
                            <div style={{ position: "relative", width: "5vh" }}>
                                <img src={(`studyCommunicate/2.jpg`)} style={{ height: "5vh", width: "5vh", borderRadius: "50%", margin: "1vh" }}></img>
                            </div>
                            <span style={{ position: "absolute", top: "38vh", left: "17vw" }}>柠檬</span>
                            <span style={{ fontSize: "2vh", marginLeft: "2vw" }}>
                                主要分为五个方向
                            </span>
                            <hr></hr>
                        </div>
                        <div style={{ width: "94vw" }}>
                            <div style={{ position: "relative", width: "5vh" }}>
                                <img src={(`studyCommunicate/2.jpg`)} style={{ height: "5vh", width: "5vh", borderRadius: "50%", margin: "1vh" }}></img>
                            </div>
                            <span style={{ position: "absolute", top: "50vh", left: "17vw" }}>柠檬</span>
                            <span style={{ fontSize: "2vh", marginLeft: "2vw" }}>
                                主要分为五个方向
                            </span>
                            <hr></hr>
                        </div>
                    </div>
                </div>
                <div style={{ height: "5vh", width: "100vw", backgroundColor: "#fff", position: "fixed", top: "95%", lineHeight: "5vh" }}>
                    <span className="iconfont icon-zhuanfa" style={{ fontSize: "4vw", margin: "0 12vw 0 13vw" }}>
                    </span>
                    <Link to="/Comment">
                        <span className="iconfont icon-pinglun" style={{ fontSize: "6vw", margin: "0 12vw 0 13vw" }}>
                        </span>
                    </Link>
                    <span style={Zan1} onClick={() => this.changeColor1()} className="iconfont icon-dianzan">
                    </span>
                </div>
            </div>
        )
    }
}
const CommunicataDetailsWrapper = createForm()(CommunicataDetails);
export default CommunicataDetailsWrapper;
